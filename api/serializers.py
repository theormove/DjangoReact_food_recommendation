from rest_framework import serializers
from .models import Dish, DishSet 


class DishSerializer(serializers.ModelSerializer):
	class Meta:
		model = Dish
		fields = ('id','name','vector','picture')

class DishSetSerializer(serializers.ModelSerializer):
	class Meta:
		model = DishSet
		fields = ('id','dishes_array','correct_guesses','incorrect_guesses')		