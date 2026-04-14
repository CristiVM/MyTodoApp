from django.urls import path
from . import views

urlpatterns = [
    path('todos/', views.TodoListCreateView.as_view(), name='todos-list'),
    path('todos/delete/<int:pk>/', views.TodoDeleteView.as_view(), name='todos-delete'),
]