# Generated by Django 3.2.6 on 2021-08-21 12:14

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_alter_space_id_ext'),
    ]

    operations = [
        migrations.RenameField(
            model_name='space',
            old_name='full_name',
            new_name='fullName',
        ),
        migrations.RenameField(
            model_name='space',
            old_name='per_hour',
            new_name='perHour',
        ),
        migrations.RenameField(
            model_name='space',
            old_name='price_per_metr',
            new_name='pricePerMetr',
        ),
    ]
