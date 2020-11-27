from .views import RoomView, CreateRoomView, GetRoom
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('', RoomView.as_view()),
    path('create-room/', CreateRoomView.as_view()),
    path('get-room/', GetRoom.as_view()),

    
]