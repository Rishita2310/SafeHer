from django.urls import path
from . import views

urlpatterns = [
    path("", views.journey_page, name="journey"),
]