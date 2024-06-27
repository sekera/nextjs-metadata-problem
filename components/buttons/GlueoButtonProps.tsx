import GlueoImageProps from "../GlueoImageProps";
import { GlueoButtonStyle } from "./GlueoButtonStyle"
export default interface GlueoButtonProps {
    text: string;
    image?: GlueoImageProps;
    buttonStyle?: GlueoButtonStyle;
    marginLeft?: boolean;
    onClick: () => void;
  }