from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.views import Response
from rest_framework.status import HTTP_200_OK, HTTP_201_CREATED, HTTP_400_BAD_REQUEST

from teacher.models import Lecture, Teacher
from teacher.serializers import TeacherSerializer, AddLectureSerializer, LectureSerializer

class TeacherAPIView(APIView):
  def get(self, request, format=None):
    teachers = Teacher.objects.all()
    serializer = TeacherSerializer(teachers, many=True)
    return Response(serializer.data, status=HTTP_200_OK)

class AddLectureAPIView(APIView):
  def post(self, request, id, format=None):
    teacher = get_object_or_404(Teacher, id=id)
    serializer = AddLectureSerializer(data=request.data)
    if serializer.is_valid():
      lecture = Lecture(
        name=serializer.validated_data.get('name'),
        email=serializer.validated_data.get('email'),
        teacher=teacher
      )
      lecture.save()
      lecture_serialized = LectureSerializer(lecture, many=False)
      return Response(lecture_serialized.data, status=HTTP_201_CREATED)
    return Response(
      {
        "message": "Erro de validação",
        "errors": serializer.errors
      },
      status=HTTP_400_BAD_REQUEST
    )