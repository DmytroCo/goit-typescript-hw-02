import { Picture } from "../ImageGallery/ImageGallery.types";

export type Props = {
  picture: Picture;
  onClick: (picture: Picture) => void;
};