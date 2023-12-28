"use client";

import Modal from "@/app/components/Modal";
import Image from "next/image";

interface ImageModalProps {
  isOpen?: boolean;
  onClose: () => void;
  src?: string | null;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, src }) => {
  if (!src) {
    return null;
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="w-[500px] h-[500px] overflow-hidden rounded-md ">
        <Image
          alt="Image"
          className="object-contain w-full h-full transition-transform transform"
          fill
          src={src}
        />
      </div>
    </Modal>
  );
};

export default ImageModal;
