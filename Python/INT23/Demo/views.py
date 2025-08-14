import django.http import HttpResponse

from django.shortcuts import render

def hello(request):
    return HttpResponse('<h1 style="color: red">hello , this is day 1 of learning python </h1>')

def var(request):
    name = "Rahul"
    return HttpResponse("Hello "+name)

def number(request):
    num1 =2
    num2 =4
    num3 =5
    return HttpResponse("num1:"+str(num1)+"<br> num2:"+str(num2)+"<br> num3:"+str(num3))

def func(request):
    items = {

        "a" : "about a",
        "b" : "about b",
        "c" : "about c"
    }

    context= "<h1> Menu Items</h1>"
    for item,description in items.items():
        context+=f"<li>{item} = {description}</li>"

    return HttpResponse(context)
    

def bag(request):
    bag_list = [1,3,4,5]
    return HttpResponse(f"list":{bag_list})


def myhandler(request, exception):
    return HttpResponse("<h1> the Page is not availble!!</h1>", status=401)