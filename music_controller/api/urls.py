from .views import RoomView, CreateRoomView
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('home/', RoomView.as_view()),
    path('create-room/', CreateRoomView.as_view()),
    
]