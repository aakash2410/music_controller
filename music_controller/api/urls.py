from .views import RoomView, CreateRoomView, UserInRoom, JoinRoom, GetRoom
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('', RoomView.as_view()),
    path('create-room', CreateRoomView.as_view()),
    path('get-room', GetRoom.as_view()),
    path('join-room', JoinRoom.as_view()),
    path('user-in-room', UserInRoom.as_view()),
    

]