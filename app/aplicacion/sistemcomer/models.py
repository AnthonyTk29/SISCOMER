from django.db import models

# Create your models here.

class usuario(models.Model):
    id_us=models.CharField(primary_key=True,max_length=15,unique=True, verbose_name="id_us")
    nombre_us= models.CharField(max_length=100, verbose_name='nombre_us')
    apellido_us= models.CharField(max_length=100, verbose_name='apellido_us')
    correo_us= models.CharField(max_length=100, verbose_name='correo_us')
    dir_us= models.CharField(max_length=150, verbose_name='dir_us')
    fnac_us= models.DateField(verbose_name='fnac_us')
    estado_us= models.CharField(max_length=2, verbose_name='estado_us')
    tipo_us= models.CharField(max_length=50, verbose_name='tipo_us')
    contra_us= models.CharField(max_length=8, verbose_name='contra_us')
    
    def __str__(self):
        fila= "Nombre: "+self.nombre_us+" - "+"Tipo: "+self.tipo_us+" - "+"Estado: "+self.estado_us
        return fila
    
    class Meta:
        verbose_name = 'usuario'
        verbose_name_plural = 'usuarios'
        db_table= 'usuario'
        
