import React, {useState, useEffect} from "react";
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Search from "./Search.js"
import Result from "./Result.js"

export default function App(props) {

	const [search_request, setSearchRequest] = useState([]); 
	const [all_dishes, setAllDishes] = useState([]);

	return (

		<div className="app-container d-flex flex-column position-relative">  
				<div id = "info" className="position-relative d-flex justify-content-end top-0 end-0 mx-3 my-3 ">
					<span>&#9432;</span>
					<div id = "info-text" className="position-absolute ">
						<div id = "info-text-wrapper" className="bg-white">This website helps you deciding what to eat if you do not know.<br />
						Simply search foods you do not want to eat and the algorithm will give you a suggestion.<br/>
						If you still do not feel like eating what we recommended just press "No" to give you another suggestion taking into account what you have declined.</div></div>
				</div>
				<BrowserRouter>
			        <Routes>

						<Route exact path="/" element={<Search setSearchRequest={setSearchRequest} setAllDishes={setAllDishes}/>}/>
					
						<Route exact path="/result" element={<Result search_request={search_request} all_dishes={all_dishes} />}/>
							
						
					</Routes>
		      	</BrowserRouter>
		</div>
		
	);
}