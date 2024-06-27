import * as React from 'react';
import Link from 'next/link'
import HelpableButtonProps from './HelpableButtonProps';
import GlueoButton from './GlueoButton';
import { GlueoButtonStyle } from './GlueoButtonStyle';
import HelpButton from './HelpButton';


const HelpableButton: React.FC<HelpableButtonProps>= (props) => {

  return (
    <div className="helpable-button">
      <div className="helpable-button-button">
      <GlueoButton marginLeft={false} buttonStyle={GlueoButtonStyle.Scale} text={props.text} image={props.image} onClick={props.onClick} />
      </div>
      <div className="helpable-button-help">
        <HelpButton url={props.helpUrl}/>
      </div>
    </div>
    );
}
export default HelpableButton
