import PropTypes from "prop-types";
declare type CustomActionsProps = {
    onManualOfferPress: () => void;
    onSend: () => void;
    onCameraPressed: () => void;
};
declare const CustomActions: {
    ({ onManualOfferPress, onSend, onCameraPressed, }: CustomActionsProps, context: any): JSX.Element;
    contextTypes: {
        actionSheet: PropTypes.Requireable<(...args: any[]) => any>;
    };
};
export default CustomActions;
