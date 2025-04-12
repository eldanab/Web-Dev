from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import NotFound
from .models import Company, Vacancy
from .serializers import CompanySerializer, VacancySerializer
from rest_framework.decorators import api_view

@api_view(['GET'])
def company_list(request):
    companies = Company.objects.all()
    serializer = CompanySerializer(companies, many=True)
    return Response(serializer.data)

class CompanyDetailView(generics.RetrieveAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer
    lookup_field = 'id'

class CompanyVacanciesView(APIView):
    def get(self, request, id):
        try:
            company = Company.objects.get(id=id)
        except Company.DoesNotExist:
            raise NotFound(detail="Company not found")
        vacancies = company.vacancies.all()
        if not vacancies:
            return Response({"message": "Vacancies not found"}, status=404)
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)

class VacancyListView(generics.ListAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer

class VacancyDetailView(generics.RetrieveAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer
    lookup_field = 'id'

class VacancyTopTenView(APIView):
    def get(self, request):
        vacancies = Vacancy.objects.order_by('-salary')[:10]
        if not vacancies:
            raise NotFound(detail="Vacancies not found")
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)

class HomeView(APIView):
    def get(self, request):
        return Response({"message": "home page"})
