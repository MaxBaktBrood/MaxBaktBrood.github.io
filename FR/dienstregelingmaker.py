#!/usr/bin/python
# -*- coding: utf-8 -*-
import fileinput
import os
def nulervoor(i):
    if i < 10:
        i = ("0" + i)
    return i

if open('/var/www/html/FR/data/dienstregelingMn.json', 'r').read().find("01H") < 0:
    nummer = 1
    while nummer < 24:
        with open('/var/www/html/FR/data/dienstregelingMn.json', 'a') as dienstregeling:
            #dienstregeling.write(', { "treincode":"GV-TR003-R2-' + '{:02}'.format(nummer) + 'H06M", "vertrekuur":"' + '{:02}'.format(nummer) + '", "vertrekminuut":"06", "bestemming":"Nouveau Paris Nord", "vertrekspoor":"1","soort":"T.E. Regional","vertraging":"0","tussenstations":"Gendte Central, Plainebourg, Ville de Finpont, Canauxbourg, Nouveau Paris Central, Châteauville", "bericht":"0", "storingsoorzaak":"0", "oudeBestemming":"0", "oudVertrekspoor":"0","rijdtNiet":"0"} \n')
            #dienstregeling.write(', { "treincode":"GV-TR003-R2-' + '{:02}'.format(nummer) + 'H21M", "vertrekuur":"' + '{:02}'.format(nummer) + '", "vertrekminuut":"21", "bestemming":"Nouveau Paris Nord", "vertrekspoor":"1","soort":"T.E. Regional","vertraging":"0","tussenstations":"Gendte Central, Plainebourg, Ville de Finpont, Canauxbourg, Nouveau Paris Central, Châteauville", "bericht":"0", "storingsoorzaak":"0", "oudeBestemming":"0", "oudVertrekspoor":"0","rijdtNiet":"0"} \n')
            #dienstregeling.write(', { "treincode":"GV-TR003-R2-' + '{:02}'.format(nummer) + 'H36M", "vertrekuur":"' + '{:02}'.format(nummer) + '", "vertrekminuut":"36", "bestemming":"Nouveau Paris Nord", "vertrekspoor":"1","soort":"T.E. Regional","vertraging":"0","tussenstations":"Gendte Central, Plainebourg, Ville de Finpont, Canauxbourg, Nouveau Paris Central, Châteauville", "bericht":"0", "storingsoorzaak":"0", "oudeBestemming":"0", "oudVertrekspoor":"0","rijdtNiet":"0"} \n')
            #dienstregeling.write(', { "treincode":"GV-TR003-R2-' + '{:02}'.format(nummer) + 'H51M", "vertrekuur":"' + '{:02}'.format(nummer) + '", "vertrekminuut":"51", "bestemming":"Nouveau Paris Nord", "vertrekspoor":"1","soort":"T.E. Regional","vertraging":"0","tussenstations":"Gendte Central, Plainebourg, Ville de Finpont, Canauxbourg, Nouveau Paris Central, Châteauville", "bericht":"0", "storingsoorzaak":"0", "oudeBestemming":"0", "oudVertrekspoor":"0","rijdtNiet":"0"} \n')
            dienstregeling.write(',    { "treincode":"MN-IC002-R2-' + '{:02}'.format(nummer) + 'H13M", "vertrekuur":"' + '{:02}'.format(nummer) + '", "vertrekminuut":"13", "bestemming":"Berin Hbf", "vertrekspoor":"1","soort":"Intercité","vertraging":"","tussenstations":"Portail de l' + "'" + 'Ouest, Formarais, Nouveau Paris C., Générateur de Zombie, Arrecour", "bericht":"", "storingsoorzaak":"", "nieuweBestemming":"", "nieuwVertrekspoor":"","rijdtNiet":""}  \n')
            dienstregeling.write(',    { "treincode":"MN-IC002-R2-' + '{:02}'.format(nummer) + 'H18M", "vertrekuur":"' + '{:02}'.format(nummer) + '", "vertrekminuut":"18", "bestemming":"Berin Hbf", "vertrekspoor":"1","soort":"Intercité","vertraging":"","tu)ssenstations":"Portail de l'+ "'" + 'Ouest, Formarais, Nouveau Paris C., Générateur de Zombie, Arrecour", "bericht":"", "storingsoorzaak":"", "nieuweBestemming":"", "nieuwVertrekspoor":"","rijdtNiet":""}  \n')
            dienstregeling.write(',    { "treincode":"MN-IC002-R2-' + '{:02}'.format(nummer) + 'H43M", "vertrekuur":"' + '{:02}'.format(nummer) + '", "vertrekminuut":"43", "bestemming":"Berin Hbf", "vertrekspoor":"1","soort":"Intercité","vertraging":"","tussenstations":"Portail de l' + "'" + 'Ouest, Formarais, Nouveau Paris C., Générateur de Zombie, Arrecour", "bericht":"", "storingsoorzaak":"", "nieuweBestemming":"", "nieuwVertrekspoor":"","rijdtNiet":""}  \n')
            dienstregeling.write(',    { "treincode":"MN-IC002-R2-' + '{:02}'.format(nummer) + 'H58M", "vertrekuur":"' + '{:02}'.format(nummer) + '", "vertrekminuut":"58", "bestemming":"Berin Hbf", "vertrekspoor":"1","soort":"Intercité","vertraging":"","tussenstations":"Portail de l' + "'" + 'Ouest, Formarais, Nouveau Paris C., Générateur de Zombie, Arrecour", "bericht":"", "storingsoorzaak":"", "nieuweBestemming":"", "nieuwVertrekspoor":"","rijdtNiet":""}  \n')
            print (nummer)
            nummer += 1
        dienstregeling.close()
else: print ('Niets gedaan')

print ('Ik ben klaar')


