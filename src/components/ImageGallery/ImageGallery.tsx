import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
import { Props } from "./ImageGallery.types";

export default function ImageGallery({ pictures, onClick }: Props) {
  return (
    <ul className={css.list}>
      {pictures.map((picture) => {
        return (
          <li key={picture.id} className={css.imgBox}>
            <ImageCard picture={picture} onClick={onClick} />
          </li>
        );
      })}
    </ul>
  );
}