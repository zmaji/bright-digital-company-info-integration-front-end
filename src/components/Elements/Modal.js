import React from 'react';
import Modal from 'react-modal';
import Button from '../elements/Button';

const defaultModalStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    zIndex: 1000,
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    borderRadius: '10px',
    padding: '20px',
  },
};

const CustomModal = ({ isOpen, onRequestClose, customStyles, title, content, onConfirm, onCancel }) => {
  const mergedStyles = {
    overlay: {
      ...defaultModalStyles.overlay,
      ...(customStyles?.overlay || {}),
    },
    content: {
      ...defaultModalStyles.content,
      ...(customStyles?.content || {}),
    },
  };

  return (
    <div className="c-modal">
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={mergedStyles}
      contentLabel="Custom Modal"
    >
        <div className="c-modal__content-container u-flex">
            {title && (
            <div className="c-modal__title">
                {title}
            </div>
            )} 

        <p className="c-modal__content">
            {content}
        </p>

        <div className="c-modal__button-container u-flex u-flex-v-center">
            <div className="c-modal__button-confirm">
            <Button
                title="Continue"
                style="primary"
                icon="Check"
                onClick={onConfirm}
            />
            </div>

            <div className="c-modal__button-cancel">
            <Button
                title="Cancel"
                style="secondary"
                icon="Times"
                onClick={onCancel}
            />
            </div>
        </div>
      </div>
    </Modal>
</div>
  );
};

export default CustomModal;
