from django.urls import path
from .views import *

urlpatterns = [
    path('', dashboard_page, name='dashboard'),
    path('sos/', sos_page, name='sos'),
    path('add_trusted_contact/', add_trusted_contact, name='add_trusted_contact'),
    path('contacts/', contacts_page, name='contacts'),
    path('journey/', journey_page, name='journey'),
    path('places/', places_page, name='places'),
    path('reports/', reports_page, name='reports'),
    path('history/', history_page, name='history'),
]