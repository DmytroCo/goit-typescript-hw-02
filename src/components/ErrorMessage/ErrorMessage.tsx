import css from "./ErrorMessage.module.css";

export default function ErrorMessage() {
  return (
    <p className={css.error}>
      Sorry, something went wrong...Reload page later!
    </p>
  );
}