import PropTypes from "prop-types";
declare type CustomActionsProps = {
    onManualOfferPress: () => void;
    onSend: () => void;
    onCameraPressed: () => void;
};
declare const CustomActions: {
    ({ onManualOfferPress, }: CustomActionsProps): JSX.Element;
    contextTypes: {
        actionSheet: PropTypes.Requireable<(...args: any[]) => any>;
    };
};
export default CustomActions;
