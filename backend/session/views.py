from django.http import JsonResponse
from django.middleware.csrf import get_token
from django.contrib.auth import authenticate, login, logout
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from rest_framework.views import APIView


@api_view(['GET'])
def get_csrf(request):
    response = JsonResponse({"message": "CSRF cookie set"})
    response['X-CSRFToken'] = get_token(request)

    return response


class SessionView(APIView):
    def post(self, request):
        data = request.data
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

    def delete(self, request):
        logout(request)

        return JsonResponse({"message": "Log out successful"},
                            status=status.HTTP_200_OK)
