from django.shortcuts import render
from api.models import Space
from api.serializers import SpaceSerializer
from rest_framework.response import Response
from rest_framework import status, viewsets


class SpaceViewSet(viewsets.ModelViewSet):
    serializer_class = SpaceSerializer
    queryset = Space.objects.all()
    authentication_classes = ()
    permission_classes = ()

    def create(self, request, *args, **kwargs):
        data = request.data
        if not isinstance(data, list):
            data = [data]

        for item in data:
            serializer = self.get_serializer(data=item)
            serializer.is_valid(raise_exception=True)
            self.perform_create(serializer)

        return Response('OK', status=status.HTTP_201_CREATED)
