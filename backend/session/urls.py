from django.urls import path
from . import views

urlpatterns = [
    path('csrf/', views.get_csrf, name='session-csrf'),
    path('', views.SessionView.as_view(), name='session'),
]
