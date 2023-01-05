import unittest 
from ..models import Dish
from ..prediction_logic.predictor import make_prediction


all_dishes = []

query = Dish.objects.all()

for dish in query:
	all_dishes.append({"id":dish.id})



dummy_dish_set_1 = { "dishes_array": [],
						"incorrect_guesses": [],
						"correct_guesses" : []
						}
dummy_dish_set_2 = { "dishes_array": all_dishes,
							"incorrect_guesses" : [],
							"correct_guesses" : []
							}
dummy_dish_set_3 = { "dishes_array": all_dishes[:3],
							"incorrect_guesses" : [],
							"correct_guesses" : []
							}


class TestDishSetView(unittest.TestCase):

	
	def test_empty_dish_set(self):
		self.assertTrue(isinstance(make_prediction(dummy_dish_set_1),int))

	def test_full_dish_set(self):
		self.assertTrue(not make_prediction(dummy_dish_set_2))
			
	def test_few_dish_set(self):
		self.assertTrue(isinstance(make_prediction(dummy_dish_set_1),int))

if __name__ == '__main__':
    unittest.main()

