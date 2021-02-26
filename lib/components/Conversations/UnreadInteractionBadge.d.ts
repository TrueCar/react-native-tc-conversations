declare type Props = {
    type: "newMessage" | "newProspect";
};
declare const UnreadInteractionBadge: ({ type }: Props) => JSX.Element;
export default UnreadInteractionBadge;
