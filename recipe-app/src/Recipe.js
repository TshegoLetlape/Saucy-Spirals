import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Recipe = () => {
	const navigate = useNavigate();
	const [selectedRecipe, setSelectedRecipe] = useState(null);
	const { id } = useParams();
	useEffect(() => {
		setSelectedRecipe(recipeData.find(recipe => recipe.uuid === id));
		console.log(recipeData.find(recipe => recipe.uuid === id));
	}, []);

	console.log(id);
	const recipeData = [
		{
			uuid: "1",
			id: 1,
			title: "Pasta Bake With Sausage",
			ingredients: [
				"1 pound dry penne pasta",
				"1 pound Italian sausage",
				"1 onion, chopped",
				"1 (26 ounce) jar spaghetti sauce",
				"1 (16 ounce) container cottage cheese",
				"2 cups shredded mozzarella cheese",
				"1/2 cup grated Parmesan cheese"
			]
		},
		{
			uuid: "2",
			id: 2,
			title: "Creamy Tomato Pasta",
			ingredients: [
				"1 pound dry penne pasta",
				"1 pound Italian sausage",
				"1 onion, chopped",
				"1 (26 ounce) jar spaghetti sauce",
				"1 (16 ounce) container cottage cheese",
				"2 cups shredded mozzarella cheese",
				"1/2 cup grated Parmesan cheese"
			]
		}
	];

	const handleBackButtonClick = () => {
		setSelectedRecipe(null);
	};

	return (
		<div>
			{selectedRecipe &&
				<div className="recipe-details">
					<h2>
						{selectedRecipe.title}
					</h2>
					<p>Ingredients</p>
					<ul>
						{selectedRecipe.ingredients.map((ingredient, index) =>
							<li key={index} className="recipe-ingredients">
								{ingredient}
							</li>
						)}
					</ul>
					<button onClick={() => navigate("/")}>Back</button>
				</div>}
		</div>
	);
};

export default Recipe;
