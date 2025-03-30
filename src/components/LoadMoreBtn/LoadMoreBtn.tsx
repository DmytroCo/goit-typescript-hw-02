import css from "./LoadMoreBtn.module.css";
import { Props } from "./LoadMoreBtn.types";

export default function LoadMoreBtn({ onClick }: Props) {
  return (
    <button type="button" onClick={onClick} className={css.loadMore}>
      Load more
    </button>
  );
}