export const dish_prediction_default = {"dishes_set":{},"predictions":[]};


export const getAllDishes = async () => {
	var data = [];
	await fetch("/api")
	.then(response => data = response.json())
	return data;
}



export const getDishPrediction = async (search_request, all_dishes) =>{
	const post_options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({"dishes_array":search_request})
    };
    const new_dish_prediction = {};
	await fetch('/api/predict', post_options)
	.then(data => data.json())
	.then(data => {
		const predictions = [];
		// retrieving actuall dish object by its id from all_dishes list 
		// othervise we would need to fetch it as it is complicated to get image url from Django  
		all_dishes.forEach(item => {
									if(item.id == data.prediction){
										predictions.push(item);
									}
								})	
		new_dish_prediction.predictions = predictions;
		new_dish_prediction.dishes_set = data.dishes_set;
		})
	return new_dish_prediction;					
}


export const updateDishPrediction = async (dish_prediction, all_dishes, prediction_is_correct) =>{

	//creating new prediction for React to update the state

    const upd_dish_prediction = {};
    Object.assign(upd_dish_prediction,dish_prediction);
    
    if (prediction_is_correct){
    	dish_prediction.predictions.map((item) => upd_dish_prediction.dishes_set.correct_guesses.push(item));
    }
    else{
    	dish_prediction.predictions.map((item) => upd_dish_prediction.dishes_set.incorrect_guesses.push(item));
    }
    const put_options = {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(upd_dish_prediction.dishes_set)   	
	};
	const url = '/api/predict/$id'.replace("$id", dish_prediction.dishes_set.id);
	await fetch(url, put_options)
	.then(data => data.json())
	.then(data => {
		const predictions = [];
		// retrieving actuall dish object by its id from all_dishes list 
		// othervise we would need to fetch it as it is complicated to get image url from Django  
		all_dishes.forEach(item => {
									if(item.id == data.prediction){
										predictions.push(item);
									}
								})	
		upd_dish_prediction.predictions = predictions;
		upd_dish_prediction.dishes_set = data.dishes_set;
		})
	return upd_dish_prediction;					
}
