import RecipesData from "../component/recipe-list"

async function FetchRecipes(){
    const Data = await fetch('https://dummyjson.com/recipes')
    const result = await Data.json()
    return result?.recipes
}


export default async function RecipeData(){
    const RecipeList= await FetchRecipes() 
    return <RecipesData RecipeList={RecipeList}/> 
  }

