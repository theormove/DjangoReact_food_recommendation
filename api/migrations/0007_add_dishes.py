# Generated by Django 4.1.5 on 2023-04-23 18:32

from django.db import migrations


class Migration(migrations.Migration):
    def create_dishes(apps, schema_editor):
        Dish = apps.get_model('api', 'Dish')
        Dish.objects.create(name="Snacks",vector="1.0",picture="pictures/Snacks.jpg")
        Dish.objects.create(name="Clear soup",vector="2.0", picture="pictures/Clear_soup.jpg")
        Dish.objects.create(name="Asian soup",vector="2.1", picture="pictures/Asian_soup.jpg")                 
        Dish.objects.create(name="Creamy soup",vector="2.2", picture="pictures/Creamy_soup.jpg") 
        Dish.objects.create(name="Stew",vector="2.3", picture="pictures/Stew.jpg")
        Dish.objects.create(name="Salad",vector="3.0", picture="pictures/Salad.jpg")
        Dish.objects.create(name="Sandwich",vector="4.0", picture="pictures/Sandwich.jpg")
        Dish.objects.create(name="Wrap",vector="4.1", picture="pictures/Wrap.jpg")
        Dish.objects.create(name="Burger",vector="5.0", picture="pictures/Burger.jpg")
        Dish.objects.create(name="Pie",vector="5.1",picture="pictures/Pie.jpg")  
        Dish.objects.create(name="Pizza",vector="6.0", picture="pictures/Pizza.jpg")  
        Dish.objects.create(name="Pasta",vector="7.0", picture="pictures/Pasta.jpg")
        Dish.objects.create(name="Rice",vector="8.0", picture="pictures/Rice.jpg")
        Dish.objects.create(name="Barley",vector="8.1", picture="pictures/Barley.jpg")
        Dish.objects.create(name="Quinoa",vector="8.2", picture="pictures/Quinoa.jpg")
        Dish.objects.create(name="Seafood",vector="9.0", picture="pictures/Seafood.jpg")
        Dish.objects.create(name="Fish",vector="9.1",picture="pictures/Fish.jpg")        
        Dish.objects.create(name="Poultry",vector="10.0",picture="pictures/Poultry.jpg") 
        Dish.objects.create(name="Red meat",vector="11.0",picture="pictures/Red_meat.jpg")
        Dish.objects.create(name="Oatmeal",vector="17.0",picture="pictures/Oatmeal.jpg")
        Dish.objects.create(name="Pancakes",vector="17.1",picture="pictures/Pancakes.jpg")
        Dish.objects.create(name="Cereal",vector="17.2",picture="pictures/Cereal.jpg") 
        Dish.objects.create(name="Omlet",vector="17.3",picture="pictures/Omlet.jpg")
        Dish.objects.create(name="Cake",vector="18.0",picture="pictures/Cake.jpg")
        Dish.objects.create(name="Cookie",vector="18.1",picture="pictures/Cookie.jpg")
        Dish.objects.create(name="Icecream",vector="18.2",picture="pictures/Icecream.jpg")                                                                                                            
    dependencies = [
        ('api', '0006_alter_dishset_correct_guesses_and_more'),
    ]

    operations = [
        migrations.RunPython(create_dishes)
    ]
