from django.http import JsonResponse
from rest_framework.decorators import api_view
from .models import Company, Vacancy
from .serializers import CompanySerializer, VacancySerializer

@api_view(['GET'])
def company_list(request):
    companies = Company.objects.all()
    if not companies:
        return JsonResponse({"message": "Companies not found"}, status=404)
    ser = CompanySerializer(companies, many=True)
    return JsonResponse(ser.data, safe=False)

@api_view(['GET'])
def company_detail(request, id):
    try:
        company = Company.objects.get(id=id)
        ser = CompanySerializer(company)
        return JsonResponse(ser.data)
    except Company.DoesNotExist:
        return JsonResponse({"error": "Company not found"}, status=404)

@api_view(['GET'])
def company_vacancies(request, id):
    try:
        company = Company.objects.get(id=id)
        vacancies = company.vacancies.all()  
        if not vacancies:
            return JsonResponse({"message": "Vacancies not found"}, status=404)
        ser = VacancySerializer(vacancies, many=True)
        return JsonResponse(ser.data, safe=False)
    except Company.DoesNotExist:
        return JsonResponse({"error": "Company not found"}, status=404)

@api_view(['GET'])
def vacancy_list(request):
    vacancies = Vacancy.objects.all()
    if not vacancies:
        return JsonResponse({"message": "Vacancies not found"}, status=404)
    ser = VacancySerializer(vacancies, many=True)
    return JsonResponse(ser.data, safe=False)

@api_view(['GET'])
def vacancy_detail(request, id):
    try:
        vacancy = Vacancy.objects.get(id=id)
        ser = VacancySerializer(vacancy)
        return JsonResponse(ser.data)
    except Vacancy.DoesNotExist:
        return JsonResponse({"error": "Vacancy not found"}, status=404)

@api_view(['GET'])
def vacancy_topten(request):
    vacancies = Vacancy.objects.order_by('-salary')[:10]
    if not vacancies:
        return JsonResponse({"error": "Vacancies not found"}, status=404)

    ser = VacancySerializer(vacancies, many=True)
    return JsonResponse(ser.data, safe=False)

@api_view(['GET'])
def home(request):
    return JsonResponse({"message": "home page"})
