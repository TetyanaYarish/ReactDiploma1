import React from 'react';
import { useHistory } from 'react-router-dom';
import Back from './back.jpg';
import '../App.css';


function Add_Note() {
    const history = useHistory();


	function onBack() {
		history.goBack();
	}
	function onAddClick() {
		// TASK 1 - Validate input

			alert('Please click on the pictures "LIFE".');
	}
	return (
		<div className ="container">
		<div  className="page" style={{ backgroundColor: "lightblue" }}>
			<h1>Sorry, this page are not working yet, go to previous page</h1>
			<h4>Hello</h4>
				<img className="body-row" onClick={onBack} src={Back} alt="back" style={{
				resizeMode: "cover",
				height: 200,
				width: 500
			}} />
			<br/>
				<button className="body-row" onClick={onAddClick}>BACK</button>		
			</div>	  
			</div>
	);
}


export default Add_Note;
