from django.middleware.csrf import get_token
from django.shortcuts import render
# def httpform(request):
#     if request.method == "POST":
#         username = request.POST.get('username')
#         return HttpResponse(f"Name: {username}")
    
#     csrf_token = get_token(request)
#     return HttpResponse(f""" 
#     <form action="" method="post">
#         <input type="hidden" name="csrfmiddlewaretoken" value="{csrf_token}">
#         <input type="text" name="username" placeholder="Enter Username" id="">
#         <input type="submit" value="Submit">
#     </form>
#     """)

# def htmlform(request):
#     name = ""
#     password = ""
#     hobbies = []

#     if request.method == "POST":
#         name = request.POST.get("name")
#         password = request.POST.get("password")
#         hobbies = request.POST.getlist("hobbies") 
#         gender = request.POST.get('gender')
    
#     return render(request, "form.html", {
#         "name": name,
#         "password": password,
#         "hobbies": hobbies,
#         "gender": gender
#     })

from django.shortcuts import render
from django import forms

class InputForm(forms.Form):
    name = forms.CharField(label='Name', max_length=100)
    email = forms.EmailField(label='Email')

def formClass(request):
    if request.method == 'POST':
        form = InputForm(request.POST)
        if form.is_valid():
            name = form.cleaned_data['name']
            email = form.cleaned_data['email']
            return render(request, 'myapp/formClass.html', {'form': form, 'submitted_data': {'name': name, 'email': email}})
    else:
        form = InputForm()
    
    return render(request, 'myapp/formClass.html', {'form': form})