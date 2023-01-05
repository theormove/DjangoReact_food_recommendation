from django.urls import path
from .views import index


urlpatterns = [
	path('', index, name = 'search'),
	path('result', index, name = 'result'),
]