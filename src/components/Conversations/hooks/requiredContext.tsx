import React, { useContext } from "react";

/**
 * React.createContext can be set with a default. In most cases, there is no sensible default value,
 * and having one leads to difficult semantic bugs - components behaving incorrectly with no error
 * to work with. Instead, you'd like to make the provider required, and give a helpful error if it's
 * not available.
 */
export const createRequiredContext = <TContext extends any>(name: string) => {
  // intentional use of any - the purpose of this is to cause runtime errors!
  const Context = React.createContext<TContext>(undefined as any);
  const providerName = `${name}Provider`;
  const hookName = `use${name}`;

  Context.displayName = providerName;

  const hook = () => {
    // This is a factory function for a custom hook; it will eventually be
    // run within a function component.
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const context = useContext(Context);

    if (typeof context === "undefined") {
      throw new Error(
        `${name} context not found. Please import ${providerName} and add it to a component above ${hookName}().`
      );
    }
    return context;
  };
  return [Context.Provider, hook] as const;
};
