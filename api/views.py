from rest_framework import status
from rest_framework.response import Response
from rest_framework import generics, mixins
from .serializers import DishSerializer, DishSetSerializer
from .models import Dish, DishSet
from .prediction_logic.predictor import make_prediction

# Create your views here.
class DishView(generics.ListAPIView):
	queryset = Dish.objects.all()
	serializer_class = DishSerializer

class DishSetView(mixins.CreateModelMixin,
                  mixins.UpdateModelMixin,
                  generics.GenericAPIView):
	queryset = DishSet.objects.all()
	serializer_class = DishSetSerializer
	
	def post(self, request, *args, **kwargs):
		data = request.data
		print(request.data)
		dishes_set = self.create(request, *args, **kwargs)
		prediction = make_prediction(data)
		response_dict = {
			"dishes_set": dishes_set.data,
			"prediction": prediction
		}
		return Response(response_dict, status=200)

	def put(self, request, *args, **kwargs):
		data = request.data
		dishes_set = self.update(request, *args, **kwargs)
		prediction = make_prediction(data)
		response_dict = {
			"dishes_set": dishes_set.data,
			"prediction": prediction,
		}		
		return Response(response_dict, status=200) 			


