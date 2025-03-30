import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";
import { Props } from "./SearchBar.types";
import { FormEvent } from "react";

export default function SearchBar({ onSubmit }: Props) {
  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const form = evt.target as HTMLFormElement;
    const topic = form.elements.namedItem("topic") as HTMLInputElement;
    const topicValue = topic.value.trim();
    if (topicValue === "") {
      toast.error("Enter parameters for search!", {
        duration: 3000,
        position: "top-right",
      });
      return;
    }
    onSubmit(topicValue);
    form.reset();
  };
  return (
    <header className={css.header}>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          name="topic"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          className={css.input}
        />
        <button type="submit" className={css.searchButton}>
          Search
        </button>
      </form>
      <Toaster />
    </header>
  );
}