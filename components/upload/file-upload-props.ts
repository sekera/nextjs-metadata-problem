export default interface FileUploadProps {
    text: string;
    disabled?: boolean;


// TODO: ensure proper async await
// TODO: use propper type for event args

     fileUploadChange:  (files : FileList) => Promise<void>;
  }