from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Product(models.Model):
    user = models.ForeignKey(User, on_delete=models.PROTECT, null=True) 
    name = models.CharField(max_length=200, null=True, blank=True)
    brand = models.CharField(max_length=200, null=True, blank=True)
    category = models.CharField(max_length=200, null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    rating = models.DecimalField(max_digits=3, decimal_places=2)
    numReviews = models.IntegerField(null=True, blank=True, default=0)
    price = models.DecimalField(max_digits=7, decimal_places=2)
    countInStock = models.IntegerField(null=True, blank=True, default=0)
    createdAt = models.DateTimeField(auto_now_add=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self) -> str:
        return self.name
    

class Review(models.Model):
    product = models.ForeignKey(Product, on_delete=models.PROTECT, null=True) 
    user = models.ForeignKey(User, on_delete=models.PROTECT, null=True)
    name = models.CharField(max_length=200, null=True, blank=True)
    rating = models.IntegerField(default=5, blank=True)
    comment = models.TextField(null=True, blank=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self) -> str:
        return "Review on {self.product}, rewiew #{self._id}"
    

class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.PROTECT, null=True)
    paymentMethod = models.CharField(max_length=200, null=True, blank=True)
    taxPrice = models.DecimalField(max_digits=3, decimal_places=2)
    shippingPrice = models.DecimalField(max_digits=3, decimal_places=2) 
    totalPrice = models.DecimalField(max_digits=3, decimal_places=2)
    isPaid = models.BooleanField(default=False)
    paidAt = models.DateTimeField()
    isDelivered = models.BooleanField(default=False)
    deliveredAt = models.DateTimeField()
    createdAt = models.DateTimeField(auto_now_add=True)
    _id = models.AutoField(primary_key=True, editable=False)
