import React from "react";
import Card from "./Card";
import { useNavigate } from "react-router-dom";
import  json  from "./RecipesData.json";
import {useState} from "react"

const Home = () => {
	const [recipes,setRecipes] = useState(json.data || [])
	const navigate = useNavigate();
	console.log(json.data);

	return (
		<div>
			
				{recipes.length > 0  &&  recipes.map((recipe) => (
				<div key={recipe.id}>
					<Card
					recipeText="Click For Recipe"
					imageUrl={recipe.imageUrl}
					dishName={recipe.dishName}
					button="Recipe"
					id={recipe.id}
				/>
				</div>
				))}
			
		</div>
	);
};

export default Home