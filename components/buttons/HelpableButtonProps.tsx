import GlueoImageProps from "../GlueoImageProps";

export default interface HelpableButtonProps {
  slug: string;
  text: string;
  helpUrl: string;
  image?: GlueoImageProps;
  onClick: () => void;
  }