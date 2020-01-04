import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDropzone } from 'react-dropzone';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImages } from '@fortawesome/free-solid-svg-icons';

import components from './styles';

const img = {
  display: 'block',
  height: '100%',
  width: '100%',
  borderRadius: '3rem',
};

const FafikDropzone = props => {
  const [files, setFiles] = useState([]);
  const { onSuccessAdd } = props;
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    accept: 'image/*',
    onDrop: acceptedFiles => {
      setFiles(
        acceptedFiles.map(file =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  useEffect(() => {
    if (onSuccessAdd && acceptedFiles.length === 1) onSuccessAdd(acceptedFiles[0]);
  }, [acceptedFiles, onSuccessAdd]);

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach(file => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  const { ImageUploadSection, ImageUploadTitle, ImageUpload } = components;

  return (
    <section className="container">
      <ImageUploadSection {...getRootProps()}>
        <input {...getInputProps()} />
        {acceptedFiles.length === 0 ? (
          <>
            <ImageUploadTitle>WGRAJ MINIATURKĘ POSTA:</ImageUploadTitle>
            <ImageUpload>
              <FontAwesomeIcon icon={faImages} size="3x" color="#253535" />
            </ImageUpload>
          </>
        ) : (
          <ImageUpload>
            <img src={acceptedFiles[0].preview} style={img} />
          </ImageUpload>
        )}
      </ImageUploadSection>
    </section>
  );
};

FafikDropzone.propTypes = {
  onSuccessAdd: PropTypes.func,
};
FafikDropzone.defaultProps = {
  onSuccessAdd: undefined,
};
export { FafikDropzone };
