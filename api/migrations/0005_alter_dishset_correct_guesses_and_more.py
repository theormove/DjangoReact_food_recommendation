# Generated by Django 4.1.2 on 2022-12-03 13:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_dishset'),
    ]

    operations = [
        migrations.AlterField(
            model_name='dishset',
            name='correct_guesses',
            field=models.JSONField(null=True),
        ),
        migrations.AlterField(
            model_name='dishset',
            name='incorrect_guesses',
            field=models.JSONField(null=True),
        ),
    ]
