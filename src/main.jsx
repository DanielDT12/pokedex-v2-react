import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import HomePage from "./pages/HomePage.jsx";
import Pokedex from "./pages/Pokedex.jsx";
import Pokemon from "./pages/Pokemon.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomePage />,
	},
	{
		path: "/pokedex",
		element: <Pokedex />,
	},
	{
		path: "/pokedex/:pokemonName", // Dynamic path name, importerer useParams i pokemon.jsx
		element: <Pokemon />,
	},
]);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
