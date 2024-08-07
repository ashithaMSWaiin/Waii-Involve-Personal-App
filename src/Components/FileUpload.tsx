import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import '../styles/FileUpload.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
  const FileUpload: React.FC = () => {
    const [files, setFiles] = useState<File[]>([]);
    const [isFilesVisible, SetFileFlag] = useState(Boolean);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
    SetFileFlag(true);
    console.log(acceptedFiles);
  }, []);
 const handleRemove = (index: number) => {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
    if (newFiles.length === 0) {
      SetFileFlag(false);
    }
 };

  const { getRootProps, getInputProps,isDragActive } = useDropzone({
    accept: {
      'image/jpeg': ['.jpeg', '.jpg'],
      'image/png': ['.png'],
      'application/pdf': ['.pdf'],
      'video/mp4': ['.mp4'],
      'application/msword': ['.doc', '.docx'],
    },
    maxSize: 10485760,
    onDrop,
  });
  
  return (
    <div>
    <div className="file-upload-container">
      <label className="file-upload-label">Upload Files <span className="required">*</span></label>
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
      
        <div style={{ paddingTop: '10px' }}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 13.3077V14.5385C1 15.1913 1.25934 15.8174 1.72097 16.279C2.1826 16.7407 2.8087 17 3.46154 17H14.5385C15.1913 17 15.8174 16.7407 16.279 16.279C16.7407 15.8174 17 15.1913 17 14.5385V13.3077M5.30769 5.30769L9 1M9 1L12.6923 5.30769M9 1L9 12.0769" stroke="#646464" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
       
        

    

        {

          isDragActive ?
            <p>Drop the files here...</p> :
            <p className="drag-drop-label">Drag and Drop files or <a className="link">Browse</a></p>
        }
        <p className="file-types color-file-types">(PNG, JPG, DOC, PDF, MP4)</p>
      </div>
      
    </div>
    {isFilesVisible && (
    <div className="uploaded-files">
  <ul style={{ listStyleType: 'none', padding: 0 }}>
    {files.map((file, index) => (
      <li key={index} style={{ display: 'flex', alignItems: 'center', padding: '8px 0' }}>
        <span style={{ flexGrow: 1 , marginLeft: '10px'}}>{file.name}</span>
     
      <a onClick={() => handleRemove(index)} style={{ marginLeft: '10px',fontSize:'14px', marginRight:'5px',cursor:'pointer' }}>  <FontAwesomeIcon icon={faTimes} /></a>
      </li>
    ))}
  </ul>
</div>
  )}
    <p className="max-size color-max-size">Maximum size 5MB</p>
    

    </div>
  );
};

export default FileUpload;
