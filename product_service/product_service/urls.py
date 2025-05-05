"""
URL configuration for product_service project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from .views import (
    ProductListView,
    ProductCreateView,
    ProductDetailView,
    ProductUpdateView,
    ProductDeleteView,
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/products/', ProductListView.as_view(), name='product_list'),
    path('api/products/create/', ProductCreateView.as_view(), name='product_create'),
    path('api/products/<int:pk>/', ProductDetailView.as_view(), name='product_detail'),
    path('api/products/<int:pk>/update/', ProductUpdateView.as_view(), name='product_update'),
    path('api/products/<int:pk>/delete/', ProductDeleteView.as_view(), name='product_delete'),
]
