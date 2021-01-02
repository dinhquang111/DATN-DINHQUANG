from django.urls import path
from api_predict import views

urlpatterns = [
    path('prediction/', views.PredictionView.as_view()),
]