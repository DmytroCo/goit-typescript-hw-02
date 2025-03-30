import { Props } from "./ImageCard.types";
import css from "./ImageCard.module.css";

export default function ImageCard({ picture, onClick }: Props) {
  return (
    <div>
      <img
        src={picture.urls.small}
        alt={picture.alt_description || "No description"}
        onClick={() => onClick(picture)}
        className={css.image}
      />
    </div>
  );
}