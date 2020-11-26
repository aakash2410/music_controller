from .views import RoomView
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('home/', RoomView.as_view()),
]