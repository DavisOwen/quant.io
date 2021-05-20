from django.http import JsonResponse
from django.middleware.csrf import get_token
from django.contrib.auth import authenticate, login, logout
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
import json


@api_view(['GET'])
def get_csrf(request):
    response = JsonResponse({"message": "CSRF cookie set"})
    response['X-CSRFToken'] = get_token(request)

    return response


@api_view(['POST'])
def login_view(request):
    data = json.loads(request.body)
    username = data.get('username')
    password = data.get('password')

    if username is None or password is None:
        return JsonResponse(
          {"message": "Please provide username and password"},
          status=status.HTTP_200_OK
        )

    user = authenticate(username=username, password=password)

    if user is None:
        return JsonResponse({"message": "Invalid credentials"},
                            status=status.HTTP_400_BAD_REQUEST)

    login(request, user)

    return JsonResponse({"message": "Login successful"},
                        status=status.HTTP_200_OK)


@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def logout_view(request):
    logout(request)

    return JsonResponse({"message": "Log out successful"},
                        status=status.HTTP_200_OK)
