import React from 'react';
import { useDropzone } from 'react-dropzone';

interface FileUploadProps {
    acceptedFileTypes?: string; // Accepted file types (e.g., 'image/*')
    files: File[],
    setFiles: React.Dispatch<React.SetStateAction<File[]>>
}

const FileUpload: React.FC<FileUploadProps> = ({
    files, setFiles
    //   acceptedFileTypes = 'image/*',
}) => {

    const onDrop = (acceptedFiles: File[]) => {
        setFiles([...files, ...acceptedFiles]);
    };

    const removeFile = (file: File) => {
        const updatedFiles = files.filter((f) => f !== file);
        setFiles(updatedFiles);
    };

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: {
            'image/jpge': ['.jpeg', '.Jpeg'],
            'image/png': ['.png', '.Png', '.PNG'],
            'image/jpg': ['.jpg', '.Jpg'],
        },
        maxSize: 5242880
    });

    return (
        <div>
            <div {...getRootProps()} className="dropzone">
                <input {...getInputProps()} />
                <p>فایل های ضمیمه را انتخاب کنید</p>
            </div>
            <div>
                <h4 className='tw-pt-4'>فایل های انتخاب شده:</h4>
                <ul className='tw-mt-8'>
                    {files.map((file, index) => (
                        <li className='tw-text-xl' key={index}>
                            {file.name}
                            <button className='tw-text-red-500 tw-pr-16' onClick={() => removeFile(file)}>حذف</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default FileUpload;
