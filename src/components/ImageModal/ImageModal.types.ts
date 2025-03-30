import { Picture } from "../ImageGallery/ImageGallery.types";

export type Props = {
  isOpen: boolean;
  closeModal: () => void;
  selectedImage: Picture | null;
};