# Generated by Django 3.0.5 on 2021-09-09 12:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('staticApp', '0002_auto_20210909_1244'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='email',
            field=models.EmailField(max_length=254, null=True, unique=True, verbose_name='email_address'),
        ),
        migrations.AlterField(
            model_name='user',
            name='username',
            field=models.CharField(max_length=30, null=True),
        ),
    ]
