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
				<div>
	            	<img src = {item.picture} className="recommended-img"/>
	            </div>
	            <div>
	            	{item.name}
	            </div>	
	            <div>
		        	<span className="col"><button 
									className="btn btn-success my-3 mx-4" onClick={() => onCorrectPrediction()} >Yammy!</button></span>
		        	<span className="col"><button  
		        					className="btn btn-danger"  onClick={() => onIncorrectPrediction()}>Nah, thanks</button></span>
	        	</div>
        	</div>				
        	))
        	}				
        </div>
	);
}