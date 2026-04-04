from django.urls import path
from . import views

urlpatterns = [
    path('todos/', views.TodoListCreateView.as_view(), name='todos-list'),
]