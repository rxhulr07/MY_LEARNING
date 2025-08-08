from django.urls import path


from . import views

urlpatterns = [
    path('hello/', views.hello),
    path('var/', views.var),
    path('Num/', views.number),
    path('Menu/', views.func),
    path('list/', views.bag),
]
