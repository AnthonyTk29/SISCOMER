from django.shortcuts import render
from django.contrib import messages
from django.shortcuts import render, redirect
from .models import *
from django.views.generic import ListView,CreateView
# Create your views here.
def Login(request):
    if request.method=='POST':
        if 'Ingresar' in request.POST: 
            try:
                dtUSU=usuario.objects.get(correo_us=request.POST['Usuario'],contra_us=request.POST['Contra'])
                print("Usuario=",dtUSU)
                request.session['Usuario']=dtUSU.correo_us
                return render(request,'panel.html')
            except usuario.DoesNotExist as e:
                messages.success(request, 'Usuario o contraseña no son correctos...')
        else:
            try:
                ced = request.POST.get("cedula", None)
                nom = request.POST.get("nombres", None)
                ape = request.POST.get("apellidos", None)
                correo = request.POST.get("correo", None)
                fecha = request.POST.get("fech", None)
                contra = request.POST.get("contra", None)
                direcc = request.POST.get("Direccion", None)
                estado="1"
                tipo="admin"
                twz=usuario.objects.create(id_us=ced, nombre_us=nom, apellido_us=ape, correo_us=correo, dir_us=direcc,fnac_us=fecha,estado_us=estado,tipo_us=tipo,contra_us=contra)
                twz.save()
                return render(request,'index.html')
            except usuario.DoesNotExist as e:
                messages.success(request, 'Usted ya esta registrado...')
    return render(request,'index.html')

def cerrar_sesion(request):
    try:
        del request.session['Usuario']
    except:
        return render(request,'index.html')
    return render(request,'index.html')

def Panelinicio(request):
    return render(request,'panel.html')

def Panelventas(request):
    return render(request,'sacar.html')
def Panelcompras(request):
    return render(request,'panel.html')
def Panelenvio(request):
    return render(request,'panel.html')
def Panelregresion(request):
    return render(request,'panel.html')
