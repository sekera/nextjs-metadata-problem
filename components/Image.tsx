import NextImage from "next/image";
import * as React from 'react';
import  GlueoImageProps  from './GlueoImageProps';

// const customLoader = ( { src}: {src?:any} ) => {
//   return src
// }

const Image: React.FC<GlueoImageProps>= (props) => {
  return (
    <>
    <NextImage
      width={props.width}
      height={props.height}
      src={props.src}
      alt={props.alt}
      // loader={customLoader}
    />
    </>
  );
}

export default Image
