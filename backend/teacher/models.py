from pyexpat import model
from django.db import models

class Teacher(models.Model):
  name = models.CharField(max_length=100, null=False, blank=False)
  ammount = models.DecimalField(max_digits=9, decimal_places=2, null=False, blank=False)
  description = models.TextField(null=False, blank=False)
  picture = models.URLField(max_length=255, null=False, blank=False)

class Lecture(models.Model):
  name = models.CharField(max_length=100, null=False, blank=False)
  email = models.EmailField(max_length=255, null=False, blank=False)
  teacher = models.ForeignKey(to=Teacher, on_delete=models.CASCADE, related_name="lecture", null=False, blank=False)