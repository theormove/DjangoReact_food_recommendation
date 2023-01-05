import React, {useState, useEffect} from "react";
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Search from "./Search.js"
import Result from "./Result.js"

export default function App(props) {

	const [search_request, setSearchRequest] = useState([]); 
	const [all_dishes, setAllDishes] = useState([]);

	return (<div className="app-container d-flex flex-column justify-content-center">  
				<BrowserRouter>
			        <Routes>

						<Route exact path="/" element={<Search setSearchRequest={setSearchRequest} setAllDishes={setAllDishes}/>}/>
					
						<Route exact path="/result" element={<Result search_request={search_request} all_dishes={all_dishes} />}/>
							
						
					</Routes>
		      	</BrowserRouter>
			</div>
	);
}