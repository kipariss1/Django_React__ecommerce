from django.urls import path
from ..views import product_views as views

urlpatterns = [
    path('products/', views.getProducts, name="products"),
    path('product/<str:pk>/', views.getProduct, name="product"),
]

