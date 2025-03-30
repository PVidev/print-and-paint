import { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const ImageModal = ({ image, onClose, isOpen }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Малко забавяне, за да работи анимацията
      setTimeout(() => {
        setIsActive(true);
      }, 10);
    } else {
      setIsActive(false);
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsActive(false);
    // Изчакваме анимацията да приключи преди да затворим
    setTimeout(() => {
      onClose();
    }, 300);
  };

  if (!isOpen) return null;

  return (
    <div className={`image-modal ${isActive ? 'active' : ''}`} onClick={handleClose}>
      <div className={`modal-content ${isActive ? 'active' : ''}`}>
        <button className="close-button" onClick={handleClose}>
          <AiOutlineClose size={30} />
        </button>
        <img src={image} alt="Enlarged gallery image" />
      </div>
    </div>
  );
};

export default ImageModal; 