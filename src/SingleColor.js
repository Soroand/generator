import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, index, hexColor, list }) => {
	const [alert, setAlert] = useState(false);
	const bcg = rgb.join(",");
	// const hex = rgbToHex(...rgb);
	const hexValue = `#${hexColor}`;
	useEffect(() => {
		if (alert) {
			setTimeout(() => {
				setAlert(false);
			}, 3000);
		}
	}, [alert]);
	return (
		<article
			className={`color 
			${
				list.length < 12 && list.length > 6
					? index > 4 && "color-light"
					: list.length < 6
					? index > 1 && "color-light"
					: index > 9 && "color-light"
			}`}
			style={{ backgroundColor: `rgb(${bcg})` }}
			onClick={() => {
				setAlert(true);
				navigator.clipboard.writeText(hexValue);
			}}>
			<p className='percent-value'>{weight}%</p>
			<p className='color-value'>{hexValue}</p>
			{alert && <p className='alert'>copied to clipboard</p>}
		</article>
	);
};

export default SingleColor;
