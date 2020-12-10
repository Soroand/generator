import React, { useState, useEffect } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
	const [color, setColor] = useState("");
	const [error, setError] = useState(false);
	const [list, setList] = useState([]);
	const [amount, setAmount] = useState("");

	const handleClick = (e) => {
		e.preventDefault();
		setAmount(e.target.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		try {
			setError(false);
			console.log(amount);
			const newAmount = parseInt(amount);
			console.log(newAmount);
			let colors = new Values(color).all(newAmount);
			setList(colors);
		} catch (error) {
			setError(true);
			console.log(error);
		}
	};

	return (
		<>
			<section className='container'>
				<h3>Color generator</h3>
				<form onSubmit={handleSubmit}>
					<input
						type='text'
						value={color}
						onChange={(e) => setColor(e.target.value)}
						placeholder='#f15025'
						className={`input-field ${error ? "error" : ""}`}
					/>
					<select onChange={handleClick}>
						<option value='10'>10</option>
						<option value='20'>5</option>
						<option value='40'>2</option>
					</select>
					<button className='btn' type='submit'>
						submit
					</button>
				</form>
			</section>
			<section className='colors'>
				{list.map((color, index) => {
					return (
						<SingleColor
							key={index}
							{...color}
							index={index}
							hexColor={color.hex}
							list={list}
						/>
					);
				})}
			</section>
		</>
	);
}

export default App;
