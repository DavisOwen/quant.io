from django.urls import path
from . import views

urlpatterns = [
    path('csrf/', views.get_csrf, name='session-csrf'),
    path('login/', views.login_view, name='session-login'),
    path('logout/', views.logout_view, name='session-logout'),
]
