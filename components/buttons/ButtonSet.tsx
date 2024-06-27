import React, { useState, useRef, useEffect } from 'react';
import ButtonSetProps from './ButtonSetProps';
import GlueoButton from './GlueoButton';
import GlueoButtonProps from './GlueoButtonProps';
import { GlueoButtonStyle } from './GlueoButtonStyle';
import HelpableButton from './HelpableButton';
import HelpButton from './HelpButton';

const ButtonSet: React.FC<ButtonSetProps> = (props) => {
  
  return (


                <div className="glueo-buttonset">
                  {props.buttons.map((buttonProps)=> {
                    return (    
                    <div key={buttonProps.slug}>
                      <HelpableButton {...buttonProps}/>
                    </div>
                      )
                  })}
                </div>
  );
}
export default ButtonSet;