from django.urls import path
from . import views
from django.conf import settings
from django.contrib.staticfiles.urls import static

urlpatterns = [
    path('', views.Login, name='login'),
    path('Panel', views.Panelinicio, name='panel'),
    path('Sacar', views.Panelventas, name='panelventas'),
    path('Cerrar', views.cerrar_sesion, name='cerrarsesion'),
]