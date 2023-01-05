from django.db import models

class Dish(models.Model):
	
	name = models.CharField(max_length=300, default="", unique=True)
	vector = models.CharField(max_length = 300, default="0", unique=True)
	picture = models.ImageField(upload_to='pictures/',blank=True)

	def __str__(self):
		return self.name

def jsonfield_default_value():
	return []
	
class DishSet(models.Model):
	dishes_array = models.JSONField(default=jsonfield_default_value)
	correct_guesses = models.JSONField(default=jsonfield_default_value)
	incorrect_guesses = models.JSONField(default=jsonfield_default_value)
	
	def __str__(self):
		return self.pk

		