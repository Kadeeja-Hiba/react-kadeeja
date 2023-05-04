import styles from "./recipeCard.module.css";

const RecipeCard = (props) => {
  return (
    <div className={styles.recipeCard}>
      <img className={styles.recipeImg} src={props.eachRecipe.image} />
      <h2 className={styles.recipeTitle}>{props.eachRecipe.title}</h2>

      <p className={styles.recipeDescription}>{props.eachRecipe.description}</p>
    </div>
  );
};
export default RecipeCard;
