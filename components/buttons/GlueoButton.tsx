import * as React from 'react';
import Link from 'next/link'
import GlueoButtonProps from './GlueoButtonProps';
import Image from '../Image';
import { GlueoButtonStyle } from "./GlueoButtonStyle"
import HelpButton  from "./HelpButton"


const GlueoButton: React.FC<GlueoButtonProps>= ({   
  text,
  image,
  buttonStyle = GlueoButtonStyle.Normal,
  marginLeft = false,
  onClick  

}) => {



  let className = "glueo-button";

  if (buttonStyle === GlueoButtonStyle.Mini)
  {
    className += " glueo-button-style-mini";
  }
  else if (buttonStyle === GlueoButtonStyle.Scale)
  {
    className += " glueo-button-style-scale";
  }
  else if (buttonStyle === GlueoButtonStyle.Normal)
  {
  }
  else
  {
    throw `unsupported ${buttonStyle}`;
  }

  if (marginLeft)
  {
    className += " ms-1";
  }

    return (
 
        <button 
          onClick={onClick}
          className={className}
        >
       {!!image && <Image src={image.src} alt={image.alt}/>}
        <>{text}</>
        </button>
      );
}


export default GlueoButton
