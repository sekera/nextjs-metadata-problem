
import React, { ChangeEvent } from 'react';
import Form from 'react-bootstrap/Form';
import FileUploadProps from './file-upload-props';


const FileUpload: React.FC<FileUploadProps>= (props) => {

// TODO: ensure proper async await
    async function handleChange(e: ChangeEvent<HTMLInputElement>): Promise<void> {
        const files = e?.target?.files ?? new FileList();

        await props.fileUploadChange(files);
    }

    return (
 
        <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>{props.text}</Form.Label>
        <Form.Control disabled={props.disabled} type="file" onChange={handleChange} />
      </Form.Group>
      );
}
export default FileUpload
