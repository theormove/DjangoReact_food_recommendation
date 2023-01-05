from ..models import Dish
import random

def make_prediction(dishes_set):
	dishes = Dish.objects.all()
	selected_dish_ids = []
	for selected_dish in dishes_set["dishes_array"]:
		selected_dish_ids.append(selected_dish["id"])
	if "incorrect_guesses" in dishes_set.keys():
		try:	
			for incorrect_guess in dishes_set["incorrect_guesses"]:
				selected_dish_ids.append(incorrect_guess["id"])
		except:
			pass		
	
	possible_prediction_ids = []
	for dish in dishes:
		if dish.id not in selected_dish_ids:
			possible_prediction_ids.append(dish.id)
	if possible_prediction_ids:			 
		prediction = random.choice(possible_prediction_ids)
	#if there is no dishes to offer returns last 
	else:
		prediction = dishes_set["incorrect_guesses"][0]		
	return prediction