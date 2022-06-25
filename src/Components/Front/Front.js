import React from "react";
import "./Front.css";
import Main from "../main/index";
import { Routes, Route, useNavigate } from "react-router-dom";

export default function Front() {
	const navigate = useNavigate();

	const navigateToMain = () => {
		navigate("/main");
	};

	return (
		<section>
			<div className="hero">
				<aside>
					💡 Outline Create, design and implement a web-based application
					capable of running SQL queries and displaying the results of said
					query. The application must include a space which accepts SQL queries
					in the form of user inputs, then runs the given query, and displays
					the result within the application..
				</aside>
				<div>
					<button onClick={navigateToMain}>Enter Project</button>
				</div>
			</div>
			<Routes>
				<Route path="/Main" element={<Main />} />
			</Routes>
		</section>
	);
}
