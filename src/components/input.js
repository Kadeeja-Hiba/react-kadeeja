import styles from "./input.module.css";

const Input = (props) => {
  return (
    <input
      className={styles.recipeInput}
      onChange={(e) => props.inputChange(e)}
    />
  );
};

export default Input;
