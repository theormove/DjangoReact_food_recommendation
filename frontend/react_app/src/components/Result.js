import React, {useState, useEffect}  from "react";
import {useNavigate} from 'react-router-dom';
import {dish_prediction_default, getDishPrediction, updateDishPrediction} from '../dish.service.js'
export default function Result(props) {

	const [dish_prediction,setDishPrediction] = useState(dish_prediction_default);
	const navigate = useNavigate();
	

	useEffect( () => {
		async function setPrediction(){
			const upd_dish_prediction = await getDishPrediction(props.search_request, props.all_dishes);
			setDishPrediction(upd_dish_prediction);
		};
		setPrediction();

		},[])

	async function updPrediction(dish_prediction, all_dishes, prediction_is_correct){
		const upd_dish_prediction = await updateDishPrediction(dish_prediction, all_dishes, prediction_is_correct);
		setDishPrediction(upd_dish_prediction);
	};
	

	const onCorrectPrediction= async () => {
		const prediction_is_correct = true; 
		await updPrediction(dish_prediction,props.all_dishes,prediction_is_correct);
		navigate("/");
	}

	const onIncorrectPrediction= async () => {
		const prediction_is_correct = false; 
		await updPrediction(dish_prediction,props.all_dishes,prediction_is_correct);
	}	
	
	return(
		<div className= "result-area-container">	
			{dish_prediction.predictions.map((item) => (
			<div>
				<h1> Would you like to eat {item.name}? </h1>
				<div>
	            	<img src = {item.picture} className="recommended-img"/>
	            </div>
	            <div>
					<span className="col"></span>
		        	<span className="col"><button 
									className="btn btn-success my-3 mx-4 px-4 py-3" onClick={() => onCorrectPrediction()} >Yes!</button></span>
		        	<span className="col"><button  
		        					className="btn btn-danger  my-3 mx-4 px-4 py-3"  onClick={() => onIncorrectPrediction()}>No</button></span>
	        		<span className="col"></span>
				</div>
        	</div>				
        	))
        	}	
			<a href="/" class="bottom-0">Go back to search</a>			
        </div>
	);
}