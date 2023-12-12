import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Card from "./Card";
import Recipe from "./Recipe";
import Home from "./Home";

function App() {
	const [visible, setVisible] = useState(false);
	function handleVisible() {
		setVisible(!visible);
	}

	return (
		<Router>
			<div>
				<Header />

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/recipe/:id" element={<Recipe />} />
				</Routes>

				{/* <div onClick={handleVisible}>
					<Card
						recipeText="Click For Recipe"
						imageUrl="./images/baked-gnocchi.jpg"
						dishName="BAKED GNOCCHI"
						button="Recipe"
					/>
					<Card
						recipeText="Click For Recipe"
						imageUrl="https://www.aheadofthyme.com/wp-content/uploads/2022/01/beef-stroganoff-683x1024.jpg"
						dishName="PASTA & SAUSAGE"
					/>
					<Card
						recipeText="Click For Recipe"
						imageUrl="./images/pesto-penne-pasta.jpg"
						dishName="PESTO PENNE PASTA"
					/>

					<Card
						recipeText="Click For Recipe"
						imageUrl="./images/fettuccine-alfredo.jpg"
						dishName="FETTUCCINE ALFREDO"
					/>
					<Card
						recipeText="Click For Recipe"
						imageUrl="./images/cheesy-tortellini-.jpg"
						dishName="CHEESY TORTELLINI"
					/>
					<Card
						recipeText="Click For Recipe"
						imageUrl="./images/shrimp-alfredo.jpg"
						dishName="SHRIMP ALFREDO"
					/>
					<Card
						recipeText="Click For Recipe"
						imageUrl="./images/spaghetti-and-meatballs.jpg"
						dishName="SPAGHETTI MEATBALLS"
					/>
					<Card
						recipeText="Click For Recipe"
						imageUrl="./images/vegetarian-bolognese.jpg"
						dishName="VEGETARIAN BOLOGNESE"
					/>
					<Card
						recipeText="Click For Recipe"
						imageUrl="./images/vegetarian-bolognese.jpg"
						dishName="VEGETARIAN BOLOGNESE"
					/>
				</div> */}
			</div>
		</Router>
	);
}

export default App;
