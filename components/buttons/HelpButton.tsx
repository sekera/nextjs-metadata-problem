import * as React from 'react';
import Link from 'next/link'
import HelpButtonProps from './HelpButtonProps';
import Image from '../Image';
import help from '../../images/components/forms/help.svg';


const HelpButton: React.FC<HelpButtonProps>= (props) => {

  return (
    <a href={props.url} className="help-button"><Image alt="Help" src={help} /></a>
    );
}
export default HelpButton
