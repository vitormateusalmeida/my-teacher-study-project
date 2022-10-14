from django.forms import ValidationError
from rest_framework import serializers

from teacher.models import Lecture, Teacher

class TeacherSerializer(serializers.ModelSerializer):
  class Meta:
    model = Teacher
    fields = '__all__'

class AddLectureSerializer(serializers.Serializer):
  name = serializers.CharField(max_length=100)
  email = serializers.EmailField(max_length=255)

  def validate_name(self, value):
    if len(value) < 3:
      raise ValidationError("O nome deve ter ao menos 3 caracteres")
    return value

class LectureSerializer(serializers.ModelSerializer):
  class Meta:
    model = Lecture
    fields = '__all__'