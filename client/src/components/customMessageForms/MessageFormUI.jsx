import {
  PaperAirplaneIcon,
  PaperClipIcon,
  XMarkIcon,
} from '@heroicons/react/24/solid/index.js';
import Dropzone from 'react-dropzone';
import { useState } from 'react';

function MessageFormUI({ setAttachment, message, handleChange, handleSubmit }) {
  const [preview, setPreview] = useState('');
  return (
    <div className="message-form-container">
      {preview && (
        <div className="message-form-preview">
          <img
            className="message-form-preview-image"
            alt="preview"
            src={preview}
            onLoad={() => {
              URL.revokeObjectURL(preview);
            }}
          />
          <XMarkIcon
            className="message-form-icon-x"
            onClick={() => {
              setPreview('');
              setAttachment('');
            }}
          />
        </div>
      )}
      <div className="message-form">
        <div className="message-form-input-container">
          <input
            className="message-form-input"
            type="text"
            value={message}
            onChange={handleChange}
            placeholder="Send a message..."
          />
        </div>
        <div className="message-form-icons">
          <Dropzone
            acceptedFiles=".jpg, .jpeg, .png"
            multiple={false}
            noClick={true}
            onDrop={(acceptedFiles) => {
              setAttachment(acceptedFiles[0].name);
              setPreview(URL.createObjectURL(acceptedFiles[0]));
            }}
          >
            {({ getRootProps, getInputProps, open }) => {
              return (
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  <PaperClipIcon
                    className="message-form-icon-clip"
                    onClick={open}
                  />
                </div>
              );
            }}
          </Dropzone>
          <hr className="vertical-line" />
          <PaperAirplaneIcon
            className="message-form-icon-airplane"
            onClick={() => {
              setPreview('');
              handleSubmit();
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default MessageFormUI;
