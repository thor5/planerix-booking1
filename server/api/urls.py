from rest_framework.routers import DefaultRouter
from api.views import SpaceViewSet

router = DefaultRouter()
router.register(r'floor', SpaceViewSet, basename='space')
urlpatterns = router.urls
