from django.shortcuts import render
from .models import dress

# Create your views here.


def home(request):
    dress1 = dress()
    dress1.img= "prati1.jpeg"
    dress1.name = "KNEE LENGTH DRESS"
    dress1.desc = '''Size: small, large 
                    Color: red, black, green '''
    dress1.price = 1000

    dress2 = dress()
    dress2.img= "grey shirt.jpeg"
    dress2.name = "SHIRT"
    dress2.desc = '''Size: small, large 
                    Color: seagreen, red, black, grey '''
    dress2.price = 1500

    dress3 = dress()
    dress3.img= "red kurta.jpeg"
    dress3.name = "KURTA"
    dress3.desc = '''Size: small, middle, large 
                    Color: red, black, green '''
    dress3.price = 300

    dress4 = dress()
    dress4.img= "grey hoody.jpeg"
    dress4.name = "HODDY"
    dress4.desc = '''Size: small, middle, large 
                    Color: grey, pink, neon, black '''
    dress4.price = 500
    dresses = [dress1, dress2, dress3, dress4]
    return render(request, 'store.html', {'dresses': dresses})

def registration(request):
    return render(request,'registration.html')

def detail(request):
    return render(request,'detail.html')

def cart(request):
    return render(request,'cart.html')