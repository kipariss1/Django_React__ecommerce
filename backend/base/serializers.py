from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Product, Order, OrderItem, Review, ShippingAddress, User
from rest_framework_simplejwt.tokens import RefreshToken 


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):

    name = serializers.SerializerMethodField(read_only=True)
    _id = serializers.SerializerMethodField(read_only=True)
    isAdmin = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields = ['id', '_id', 'name', 'email', 'username', 'isAdmin']

    def get__id(self, object):
        return object.id

    def get_name(self, object):
        name = ''
        if object.first_name and object.last_name:
            name = object.first_name + ' ' + object.last_name
        if name == '':
            name = object.email

        return name
    
    def get_isAdmin(self, object):
        return object.is_staff
    

class UserSerializerWithToken(UserSerializer):

    token = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields = ['id', '_id', 'name', 'email', 'username', 'isAdmin', 'token']

    def get_token(self, object):
        token = RefreshToken.for_user(object)
        return str(token.access_token)
