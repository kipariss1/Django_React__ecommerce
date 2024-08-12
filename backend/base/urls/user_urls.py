from django.urls import path
from base.views import user_views as views

urlpatterns = [
    path('users/login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('users/register/', views.registerUser, name='register-user'),
    path('users/profile/', views.getUserProfile, name='user-profile'),
    path('users/', views.getUsers, name='get-users'),
]

