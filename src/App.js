import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./page/home";
import About from "./page/about";
import NavBar from "./components/navbar";
import Journey from "./page/journey";
import Feature from "./page/feature/index";
import Product from "./page/product/index";
import Team from "./page/team/index";
import Contact from "./page/contact/index";
import Footer from "./components/footer";

function App() {
	return (
		<div>
			<NavBar></NavBar>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="journey" element={<Journey />} />
				<Route path="feature" element={<Feature />} />
				<Route path="product" element={<Product />} />
				<Route path="team" element={<Team />} />
				<Route path="contact" element={<Contact />} />
			</Routes>
			<Footer></Footer>
		</div>
	);
}

export default App;
