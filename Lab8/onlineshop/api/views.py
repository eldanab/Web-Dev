from django.http import JsonResponse, HttpResponse
from .models import Category, Product
import json

def product_list(request):
    if request.method == "GET":
        products = list(Product.objects.values("id", "name", "price", "description", "count", "is_active", "category"))
        return JsonResponse(products, safe=False)
    return HttpResponse(status=405)

def product_detail(request, id):
    try: 
        product = Product.objects.values("id", "name", "price", "description", "count", "is_active", "category").get(id = id)
        return JsonResponse(product)
    except Product.DoesNotExist:
        return JsonResponse({"error":"Not found"}, status = 405)
    
def category_list(request):
    if request.method == "GET":
        categories = list(Category.objects.values("id", "name"))
        return JsonResponse(categories, safe = False)
    return HttpResponse(status=405)

def category_detail(request, id):
    try:
        category = Category.objects.values("id", "name").get(id=id)
        return JsonResponse(category)
    except Category.DoesNotExist:
        return JsonResponse({"error":"Not Found"}, status= 405)

def cat_products(request, id):
    try:
        category = Category.objects.get(id=id)
        products = list(category.products.values("id", "name", "price", "description", "count", "is_active"))
        return JsonResponse(products, safe=False)
    except Category.DoesNotExist:
        return JsonResponse({"error":"Not found"}, status=404)
    
def home(request):
    return JsonResponse({"message":  "Home Page"})
