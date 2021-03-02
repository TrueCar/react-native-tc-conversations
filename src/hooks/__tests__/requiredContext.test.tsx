import React from "react";
import { Text } from "react-native";
import { createRequiredContext } from "../requiredContext";
import { render } from "@testing-library/react-native";

class ErrorBoundary extends React.Component<
  any,
  {
    error: Error | null;
  }
> {
  constructor(props: any) {
    super(props);
    this.state = { error: null };
  }
  // state = { error: null };

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  render() {
    const { error } = this.state;
    const { children } = this.props;
    if (!error) {
      return <>{children}</>;
    }
    return <Text>{error.message}</Text>;
  }
}

type ContextType = {
  name: string;
};

describe("required-context", () => {
  describe("intentional errors", () => {
    it("throws an error if no context is available", () => {
      const [, useName] = createRequiredContext<ContextType>("Name");
      const Component = () => {
        const { name } = useName();
        return <div>{name}</div>;
      };
      const { getByText } = render(
        <ErrorBoundary>
          <Component />
        </ErrorBoundary>
      );
      getByText(
        "Name context not found. Please import NameProvider and add it to a component above useName()."
      );
    });
  });

  it("provides context when it is available", () => {
    const [NameProvider, useName] = createRequiredContext<ContextType>("Name");
    const Component = () => {
      const { name } = useName();
      return <Text>{name}</Text>;
    };
    const { getByText } = render(
      <NameProvider value={{ name: "Bob Johnson" }}>
        <Component />
      </NameProvider>
    );
    getByText("Bob Johnson");
  });

  it("provides null value context", () => {
    const [NameProvider, useName] = createRequiredContext<null | ContextType>(
      "Name"
    );
    const Component = () => {
      const maybeName = useName();
      return <Text>{maybeName?.name ?? "No name"}</Text>;
    };
    const { getByText } = render(
      <NameProvider value={null}>
        <Component />
      </NameProvider>
    );
    getByText("No name");
  });
});
