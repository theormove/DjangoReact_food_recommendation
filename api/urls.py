from django.urls import path

from .views import DishView, DishSetView

urlpatterns = [
	path('', DishView.as_view(), name = 'dishes'),
	path('<int:pk>', DishView.as_view(), name = 'dish'),
	path('predict', DishSetView.as_view(), name = 'predict'),
	path('predict/<int:pk>', DishSetView.as_view(), name = 'predict'),
]