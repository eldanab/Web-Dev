from .views import (
    company_list, CompanyDetailView, CompanyVacanciesView,
    VacancyListView, VacancyDetailView, VacancyTopTenView
)
from django.urls import path

urlpatterns = [
    path('companies/', company_list, name='fbv-company-list'),
    path('companies/<int:id>/', CompanyDetailView.as_view(), name='company-detail'),
    path('companies/<int:id>/vacancies/', CompanyVacanciesView.as_view(), name='company-vacancies'),
    path('vacancies/', VacancyListView.as_view(), name='vacancy-list'),
    path('vacancies/<int:id>/', VacancyDetailView.as_view(), name='vacancy-detail'),
    path('vacancies/top_ten/', VacancyTopTenView.as_view(), name='vacancy-topten'),
]