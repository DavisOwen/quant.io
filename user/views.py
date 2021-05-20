from rest_framework.views import APIView
from django.http import JsonResponse
from .serializers import UserSerializer
from rest_framework import status


class UserView(APIView):

    def post(self, request):
        serializer = UserSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()

            return JsonResponse({"message": "User created successfully"},
                                status=status.HTTP_201_CREATED)

        return JsonResponse({"message": serializer.errors},
                            status=status.HTTP_400_BAD_REQUEST)
