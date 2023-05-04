import styles from "@/styles/Recipe.module.css";
import Input from "@/components/input";
import RecipeCard from "@/components/recipeCard";
import { useState } from "react";

const recipes = [
  {
    title: "Biriyani",
    image: "/image/biriyani.jpg",
    description: `Biryani can be nutritious and satisfying, offering protein from meat or
        vegetables. The spices used in biryani, such as turmeric and cumin, have
        anti-inflammatory properties that may speed up weight loss`,
  },

  {
    title: "Burger",
    image: "/image/burger.jpeg",
    description: ` can be nutritious and satisfying, offering protein from meat or
        vegetables. The spices used, such as turmeric and cumin, have
        anti-inflammatory properties that may speed up weight loss`,
  },

  {
    title: "Butter Chiken",
    image: "/image/butter-chiken.jpeg",
    description: ` can be nutritious and satisfying, offering protein from meat or
        vegetables. The spices used , such as turmeric and cumin, have
        anti-inflammatory properties that may speed up weight loss`,
  },

  {
    title: "Fried rice",
    image: "/image/friedrice.jpeg",
    description: ` can be nutritious and satisfying, offering protein from meat or
        vegetables. The spices used , such as turmeric and cumin, have
        anti-inflammatory properties that may speed up weight loss`,
  },

  {
    title: "Steak",
    image: "/image/Steak.jpeg",
    description: ` can be nutritious and satisfying, offering protein from meat or
        vegetables. The spices used , such as turmeric and cumin, have
        anti-inflammatory properties that may speed up weight loss`,
  },
];

const recipe = () => {
  const [recipe, setRecipe] = useState(recipes);
  const [value, setValue] = useState("");

  const onHandleChange = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);

    if (e.target.value == "") {
      setRecipe(recipes);
    } else {
      const searchedRecipe = recipes.filter((i) =>
        i.title.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setRecipe(searchedRecipe);
    }

    const searchedRecipe = reipes.filter((recipeee) => recipeee.title == value);
    setRecipe(searchedRecipe);
  };

  return (
    <div className={styles.recipeContainer}>
      <h1>Find you recipe</h1>
      <Input inputChange={onHandleChange} />
      <div className={styles.recipeCardContainer}>
        {recipe.map((r) => (
          <RecipeCard eachRecipe={r} />
        ))}
      </div>
    </div>
  );
};
export default recipe;
