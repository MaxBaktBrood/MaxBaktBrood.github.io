#!/usr/bin/python
# -*- coding: utf-8 -*-
import fileinput
import os
def nulervoor(i):
    if i < 10:
        i = ("0" + i)
    return i

if open('/var/www/html/FR/data/dienstregelingNp.json', 'r').read().find("01H") < 0:
    nummer = 1
    while nummer < 24:
        with open('/var/www/html/FR/data/dienstregelingNp.json', 'a') as dienstregeling:
            #dienstregeling.write(', { "treincode":"GV-TR003-R2-' + '{:02}'.format(nummer) + 'H06M", "vertrekuur":"' + '{:02}'.format(nummer) + '", "vertrekminuut":"06", "bestemming":"Nouveau Paris Nord", "vertrekspoor":"1","soort":"T.E. Regional","vertraging":"0","tussenstations":"Gendte Central, Plainebourg, Ville de Finpont, Canauxbourg, Nouveau Paris Central, Châteauville", "bericht":"0", "storingsoorzaak":"0", "oudeBestemming":"0", "oudVertrekspoor":"0","rijdtNiet":"0"} \n')
            #dienstregeling.write(', { "treincode":"GV-TR003-R2-' + '{:02}'.format(nummer) + 'H21M", "vertrekuur":"' + '{:02}'.format(nummer) + '", "vertrekminuut":"21", "bestemming":"Nouveau Paris Nord", "vertrekspoor":"1","soort":"T.E. Regional","vertraging":"0","tussenstations":"Gendte Central, Plainebourg, Ville de Finpont, Canauxbourg, Nouveau Paris Central, Châteauville", "bericht":"0", "storingsoorzaak":"0", "oudeBestemming":"0", "oudVertrekspoor":"0","rijdtNiet":"0"} \n')
            #dienstregeling.write(', { "treincode":"GV-TR003-R2-' + '{:02}'.format(nummer) + 'H36M", "vertrekuur":"' + '{:02}'.format(nummer) + '", "vertrekminuut":"36", "bestemming":"Nouveau Paris Nord", "vertrekspoor":"1","soort":"T.E. Regional","vertraging":"0","tussenstations":"Gendte Central, Plainebourg, Ville de Finpont, Canauxbourg, Nouveau Paris Central, Châteauville", "bericht":"0", "storingsoorzaak":"0", "oudeBestemming":"0", "oudVertrekspoor":"0","rijdtNiet":"0"} \n')
            #dienstregeling.write(', { "treincode":"GV-TR003-R2-' + '{:02}'.format(nummer) + 'H51M", "vertrekuur":"' + '{:02}'.format(nummer) + '", "vertrekminuut":"51", "bestemming":"Nouveau Paris Nord", "vertrekspoor":"1","soort":"T.E. Regional","vertraging":"0","tussenstations":"Gendte Central, Plainebourg, Ville de Finpont, Canauxbourg, Nouveau Paris Central, Châteauville", "bericht":"0", "storingsoorzaak":"0", "oudeBestemming":"0", "oudVertrekspoor":"0","rijdtNiet":"0"} \n')
            dienstregeling.write(', { "treincode":"NP-IC004-R1-' + '{:02}'.format(nummer) + 'H04M", "vertrekuur":"' + '{:02}'.format(nummer) + '", "vertrekminuut":"04", "bestemming":"Canauxbourg", "vertrekspoor":"2","soort":"Intercité","vertraging":"","tussenstations":"", "bericht":"", "storingsoorzaak":"", "nieuweBestemming":"", "nieuwVertrekspoor":"","rijdtNiet":""}  \n')
            dienstregeling.write(', { "treincode":"NP-ICE02-R1-' + '{:02}'.format(nummer) + 'H08M", "vertrekuur":"' + '{:02}'.format(nummer) + '", "vertrekminuut":"08", "bestemming":"Berlin Hbf", "vertrekspoor":"7","soort":"ICE International","vertraging":"","tussenstations":"", "bericht":"Hogesnelheidstrein", "storingsoorzaak":"", "nieuweBestemming":"", "nieuwVertrekspoor":"","rijdtNiet":""}  \n')
            dienstregeling.write(', { "treincode":"NP-TR003-R2-' + '{:02}'.format(nummer) + 'H10M", "vertrekuur":"' + '{:02}'.format(nummer) + '", "vertrekminuut":"10", "bestemming":"Gendte Ville Basse", "vertrekspoor":"3","soort":"T.E. Regional","vertraging":"","tussenstations":"Calais Midi, Nouveau Paris Nord, Canauxbourg Sud, Canauxbourg, Ville de Finpont, Plainebourg, Gendte C.", "bericht":"", "storingsoorzaak":"", "nieuweBestemming":"", "nieuwVertrekspoor":"","rijdtNiet":""}  \n')
            dienstregeling.write(', { "treincode":"NP-EUR01-R1-' + '{:02}'.format(nummer) + 'H10M", "vertrekuur":"' + '{:02}'.format(nummer) + '", "vertrekminuut":"10", "bestemming":"Obsiddian Lake City Int.", "vertrekspoor":"6","soort":"Eurostar","vertraging":"","tussenstations":"Dover", "bericht":"Buiten Schengen: Paspoort Nodig | Hogesnelheidstrein", "storingsoorzaak":"", "nieuweBestemming":"", "nieuwVertrekspoor":"","rijdtNiet":""}  \n')
            dienstregeling.write(', { "treincode":"NP-IC002-R1-' + '{:02}'.format(nummer) + 'H12M", "vertrekuur":"' + '{:02}'.format(nummer) + '", "vertrekminuut":"12", "bestemming":"Mer Nouveau", "vertrekspoor":"3","soort":"Intercité","vertraging":"","tussenstations":"Formarais, Portail de l' + "'" + 'Ouest", "bericht":"Stopt ook in Formarais", "storingsoorzaak":"", "nieuweBestemming":"", "nieuwVertrekspoor":"","rijdtNiet":""}  \n')
            dienstregeling.write(', { "treincode":"NP-IC002-R2-' + '{:02}'.format(nummer) + 'H12M", "vertrekuur":"' + '{:02}'.format(nummer) + '", "vertrekminuut":"12", "bestemming":"Berlin Hbf", "vertrekspoor":"2","soort":"Intercité","vertraging":"","tussenstations":"Générateur de Zombie, Arrecour", "bericht":"", "storingsoorzaak":"", "nieuweBestemming":"", "nieuwVertrekspoor":"","rijdtNiet":""}  \n')
            dienstregeling.write(', { "treincode":"NP-TR004-R1-' + '{:02}'.format(nummer) + 'H12M", "vertrekuur":"' + '{:02}'.format(nummer) + '", "vertrekminuut":"12", "bestemming":"Etendeau", "vertrekspoor":"5a","soort":"T.E. Regional","vertraging":"","tussenstations":"Nouveau Paris Sud", "bericht":"", "storingsoorzaak":"", "nieuweBestemming":"", "nieuwVertrekspoor":"","rijdtNiet":""}  \n')
            dienstregeling.write(', { "treincode":"NP-TR004-R2-' + '{:02}'.format(nummer) + 'H13M", "vertrekuur":"' + '{:02}'.format(nummer) + '", "vertrekminuut":"13", "bestemming":"Baie de Fleurs", "vertrekspoor":"5b","soort":"T.E. Regional","vertraging":"","tussenstations":"Formarais, Gendte Quatier Avant, Gendte C., Plainebourg, Plainebourg Midi, Champ Derrière, Fleurmont, Plateau de Fleurs", "bericht":"", "storingsoorzaak":"", "nieuweBestemming":"", "nieuwVertrekspoor":"","rijdtNiet":""}  \n')
            dienstregeling.write(', { "treincode":"NP-IC001-R2-' + '{:02}'.format(nummer) + 'H13M", "vertrekuur":"' + '{:02}'.format(nummer) + '", "vertrekminuut":"13", "bestemming":"Baie de Fleurs", "vertrekspoor":"4","soort":"Intercité","vertraging":"","tussenstations":"Gendte C., Plainebourg", "bericht":"Stopt ook in Plainebourg", "storingsoorzaak":"", "nieuweBestemming":"", "nieuwVertrekspoor":"","rijdtNiet":""}  \n')
            dienstregeling.write(', { "treincode":"NP-IC001-R1-' + '{:02}'.format(nummer) + 'H13M", "vertrekuur":"' + '{:02}'.format(nummer) + '", "vertrekminuut":"13", "bestemming":"Sudport", "vertrekspoor":"1","soort":"Intercité","vertraging":"","tussenstations":"Leusden", "bericht":"", "storingsoorzaak":"", "nieuweBestemming":"", "nieuwVertrekspoor":"","rijdtNiet":""}  \n')
            dienstregeling.write(', { "treincode":"NP-IC004-R1-' + '{:02}'.format(nummer) + 'H19M", "vertrekuur":"' + '{:02}'.format(nummer) + '", "vertrekminuut":"19", "bestemming":"Canauxbourg", "vertrekspoor":"2","soort":"Intercité","vertraging":"","tussenstations":"", "bericht":"", "storingsoorzaak":"", "nieuweBestemming":"", "nieuwVertrekspoor":"","rijdtNiet":""}  \n')
            dienstregeling.write(', { "treincode":"NP-ICE01-R1-' + '{:02}'.format(nummer) + 'H23M", "vertrekuur":"' + '{:02}'.format(nummer) + '", "vertrekminuut":"23", "bestemming":"Berlin Hbf", "vertrekspoor":"7","soort":"ICE International","vertraging":"","tussenstations":"", "bericht":"Hogesnelheidstrein", "storingsoorzaak":"", "nieuweBestemming":"", "nieuwVertrekspoor":"","rijdtNiet":""}  \n')
            dienstregeling.write(', { "treincode":"NP-TR003-R2-' + '{:02}'.format(nummer) + 'H25M", "vertrekuur":"' + '{:02}'.format(nummer) + '", "vertrekminuut":"25", "bestemming":"Gendte Ville Basse", "vertrekspoor":"3","soort":"T.E. Regional","vertraging":"","tussenstations":"Calais Midi, Nouveau Paris Nord, Canauxbourg Sud, Canauxbourg, Ville de Finpont, Plainebourg, Gendte C.", "bericht":"", "storingsoorzaak":"", "nieuweBestemming":"", "nieuwVertrekspoor":"","rijdtNiet":""}\n')
            dienstregeling.write(', { "treincode":"NP-EUR01-R1-' + '{:02}'.format(nummer) + 'H25M", "vertrekuur":"' + '{:02}'.format(nummer) + '", "vertrekminuut":"25", "bestemming":"Obsiddian Lake City Int.", "vertrekspoor":"6","soort":"Eurostar","vertraging":"","tussenstations":"", "bericht":"Buiten Schengen: Paspoort Nodig | Hogesnelheidstrein", "storingsoorzaak":"", "nieuweBestemming":"", "nieuwVertrekspoor":"","rijdtNiet":""}    \n')
            dienstregeling.write(', { "treincode":"NP-IC002-R1-' + '{:02}'.format(nummer) + 'H27M", "vertrekuur":"' + '{:02}'.format(nummer) + '", "vertrekminuut":"27", "bestemming":"Mer Nouveau", "vertrekspoor":"3","soort":"Intercité","vertraging":"","tussenstations":"Formarais, Portail de l' + "'" + 'Ouest", "bericht":"Stopt ook in Formarais", "storingsoorzaak":"", "nieuweBestemming":"", "nieuwVertrekspoor":"","rijdtNiet":""}  \n')
            dienstregeling.write(', { "treincode":"NP-IC002-R2-' + '{:02}'.format(nummer) + 'H27M", "vertrekuur":"' + '{:02}'.format(nummer) + '", "vertrekminuut":"27", "bestemming":"Berlin Hbf", "vertrekspoor":"2","soort":"Intercité","vertraging":"","tussenstations":"Générateur de Zombie, Arrecour", "bericht":"", "storingsoorzaak":"", "nieuweBestemming":"", "nieuwVertrekspoor":"","rijdtNiet":""}  \n')
            dienstregeling.write(', { "treincode":"NP-TR004-R1-' + '{:02}'.format(nummer) + 'H28M", "vertrekuur":"' + '{:02}'.format(nummer) + '", "vertrekminuut":"28", "bestemming":"Nouveau Paris Sud", "vertrekspoor":"5a","soort":"T.E. Regional","vertraging":"","tussenstations":".", "bericht":"", "storingsoorzaak":"", "nieuweBestemming":"", "nieuwVertrekspoor":"","rijdtNiet":""}  \n')
            dienstregeling.write(', { "treincode":"NP-TR004-R2-' + '{:02}'.format(nummer) + 'H28M", "vertrekuur":"' + '{:02}'.format(nummer) + '", "vertrekminuut":"28", "bestemming":"Baie de Fleurs", "vertrekspoor":"5b","soort":"T.E. Regional","vertraging":"","tussenstations":"Formarais, Gendte Quatier Avant, Gendte C., Plainebourg, Plainebourg Midi, Champ Derrière, Fleurmont, Plateau de Fleurs", "bericht":"", "storingsoorzaak":"", "nieuweBestemming":"", "nieuwVertrekspoor":"","rijdtNiet":""}  \n')
            dienstregeling.write(', { "treincode":"NP-IC001-R2-' + '{:02}'.format(nummer) + 'H28M", "vertrekuur":"' + '{:02}'.format(nummer) + '", "vertrekminuut":"28", "bestemming":"Baie de Fleurs", "vertrekspoor":"4","soort":"Intercité","vertraging":"","tussenstations":"Gendte C.", "bericht":"", "storingsoorzaak":"", "nieuweBestemming":"", "nieuwVertrekspoor":"","rijdtNiet":""}  \n')
            dienstregeling.write(', { "treincode":"NP-IC001-R1-' + '{:02}'.format(nummer) + 'H28M", "vertrekuur":"' + '{:02}'.format(nummer) + '", "vertrekminuut":"28", "bestemming":"Sudport", "vertrekspoor":"1","soort":"Intercité","vertraging":"","tussenstations":"Leusden", "bericht":"", "storingsoorzaak":"", "nieuweBestemming":"", "nieuwVertrekspoor":"","rijdtNiet":""}  \n')
            dienstregeling.write(', { "treincode":"NP-IC004-R1-' + '{:02}'.format(nummer) + 'H04M", "vertrekuur":"' + '{:02}'.format(nummer) + '", "vertrekminuut":"34", "bestemming":"Canauxbourg", "vertrekspoor":"2","soort":"Intercité","vertraging":"","tussenstations":"", "bericht":"", "storingsoorzaak":"", "nieuweBestemming":"", "nieuwVertrekspoor":"","rijdtNiet":""}  \n')
            dienstregeling.write(', { "treincode":"NP-ICE02-R1-' + '{:02}'.format(nummer) + 'H08M", "vertrekuur":"' + '{:02}'.format(nummer) + '", "vertrekminuut":"38", "bestemming":"Berlin Hbf", "vertrekspoor":"7","soort":"ICE International","vertraging":"","tussenstations":"", "bericht":"Hogesnelheidstrein", "storingsoorzaak":"", "nieuweBestemming":"", "nieuwVertrekspoor":"","rijdtNiet":""}  \n')
            dienstregeling.write(', { "treincode":"NP-TR003-R2-' + '{:02}'.format(nummer) + 'H10M", "vertrekuur":"' + '{:02}'.format(nummer) + '", "vertrekminuut":"40", "bestemming":"Gendte Ville Basse", "vertrekspoor":"3","soort":"T.E. Regional","vertraging":"","tussenstations":"Calais Midi, Nouveau Paris Nord, Canauxbourg Sud, Canauxbourg, Ville de Finpont, Plainebourg, Gendte C.", "bericht":"", "storingsoorzaak":"", "nieuweBestemming":"", "nieuwVertrekspoor":"","rijdtNiet":""}  \n')
            dienstregeling.write(', { "treincode":"NP-EUR01-R1-' + '{:02}'.format(nummer) + 'H10M", "vertrekuur":"' + '{:02}'.format(nummer) + '", "vertrekminuut":"40", "bestemming":"Obsiddian Lake City Int.", "vertrekspoor":"6","soort":"Eurostar","vertraging":"","tussenstations":"Dover", "bericht":"Buiten Schengen: Paspoort Nodig | Hogesnelheidstrein", "storingsoorzaak":"", "nieuweBestemming":"", "nieuwVertrekspoor":"","rijdtNiet":""}  \n')
            dienstregeling.write(', { "treincode":"NP-IC002-R1-' + '{:02}'.format(nummer) + 'H12M", "vertrekuur":"' + '{:02}'.format(nummer) + '", "vertrekminuut":"42", "bestemming":"Mer Nouveau", "vertrekspoor":"3","soort":"Intercité","vertraging":"","tussenstations":"Formarais, Portail de l' + "'" + 'Ouest", "bericht":"Stopt ook in Formarais", "storingsoorzaak":"", "nieuweBestemming":"", "nieuwVertrekspoor":"","rijdtNiet":""}  \n')
            dienstregeling.write(', { "treincode":"NP-IC002-R2-' + '{:02}'.format(nummer) + 'H12M", "vertrekuur":"' + '{:02}'.format(nummer) + '", "vertrekminuut":"42", "bestemming":"Berlin Hbf", "vertrekspoor":"2","soort":"Intercité","vertraging":"","tussenstations":"Générateur de Zombie, Arrecour", "bericht":"", "storingsoorzaak":"", "nieuweBestemming":"", "nieuwVertrekspoor":"","rijdtNiet":""}  \n')
            dienstregeling.write(', { "treincode":"NP-TR004-R1-' + '{:02}'.format(nummer) + 'H12M", "vertrekuur":"' + '{:02}'.format(nummer) + '", "vertrekminuut":"42", "bestemming":"Etendeau", "vertrekspoor":"5a","soort":"T.E. Regional","vertraging":"","tussenstations":"Nouveau Paris Sud", "bericht":"", "storingsoorzaak":"", "nieuweBestemming":"", "nieuwVertrekspoor":"","rijdtNiet":""}  \n')
            dienstregeling.write(', { "treincode":"NP-TR004-R2-' + '{:02}'.format(nummer) + 'H13M", "vertrekuur":"' + '{:02}'.format(nummer) + '", "vertrekminuut":"43", "bestemming":"Baie de Fleurs", "vertrekspoor":"5b","soort":"T.E. Regional","vertraging":"","tussenstations":"Formarais, Gendte Quatier Avant, Gendte C., Plainebourg, Plainebourg Midi, Champ Derrière, Fleurmont, Plateau de Fleurs", "bericht":"", "storingsoorzaak":"", "nieuweBestemming":"", "nieuwVertrekspoor":"","rijdtNiet":""}  \n')
            dienstregeling.write(', { "treincode":"NP-IC001-R2-' + '{:02}'.format(nummer) + 'H13M", "vertrekuur":"' + '{:02}'.format(nummer) + '", "vertrekminuut":"43", "bestemming":"Baie de Fleurs", "vertrekspoor":"4","soort":"Intercité","vertraging":"","tussenstations":"Gendte C., Plainebourg", "bericht":"Stopt ook in Plainebourg", "storingsoorzaak":"", "nieuweBestemming":"", "nieuwVertrekspoor":"","rijdtNiet":""}  \n')
            dienstregeling.write(', { "treincode":"NP-IC001-R1-' + '{:02}'.format(nummer) + 'H13M", "vertrekuur":"' + '{:02}'.format(nummer) + '", "vertrekminuut":"43", "bestemming":"Sudport", "vertrekspoor":"1","soort":"Intercité","vertraging":"","tussenstations":"Leusden", "bericht":"", "storingsoorzaak":"", "nieuweBestemming":"", "nieuwVertrekspoor":"","rijdtNiet":""}  \n')
            dienstregeling.write(', { "treincode":"NP-IC004-R1-' + '{:02}'.format(nummer) + 'H19M", "vertrekuur":"' + '{:02}'.format(nummer) + '", "vertrekminuut":"49", "bestemming":"Canauxbourg", "vertrekspoor":"2","soort":"Intercité","vertraging":"","tussenstations":"", "bericht":"", "storingsoorzaak":"", "nieuweBestemming":"", "nieuwVertrekspoor":"","rijdtNiet":""}  \n')
            dienstregeling.write(', { "treincode":"NP-ICE01-R1-' + '{:02}'.format(nummer) + 'H23M", "vertrekuur":"' + '{:02}'.format(nummer) + '", "vertrekminuut":"53", "bestemming":"Berlin Hbf", "vertrekspoor":"7","soort":"ICE International","vertraging":"","tussenstations":"", "bericht":"Hogesnelheidstrein", "storingsoorzaak":"", "nieuweBestemming":"", "nieuwVertrekspoor":"","rijdtNiet":""}  \n')
            dienstregeling.write(', { "treincode":"NP-TR003-R2-' + '{:02}'.format(nummer) + 'H25M", "vertrekuur":"' + '{:02}'.format(nummer) + '", "vertrekminuut":"55", "bestemming":"Gendte Ville Basse", "vertrekspoor":"3","soort":"T.E. Regional","vertraging":"","tussenstations":"Calais Midi, Nouveau Paris Nord, Canauxbourg Sud, Canauxbourg, Ville de Finpont, Plainebourg, Gendte C.", "bericht":"", "storingsoorzaak":"", "nieuweBestemming":"", "nieuwVertrekspoor":"","rijdtNiet":""}\n')
            dienstregeling.write(', { "treincode":"NP-EUR01-R1-' + '{:02}'.format(nummer) + 'H25M", "vertrekuur":"' + '{:02}'.format(nummer) + '", "vertrekminuut":"55", "bestemming":"Obsiddian Lake City Int.", "vertrekspoor":"6","soort":"Eurostar","vertraging":"","tussenstations":"", "bericht":"Buiten Schengen: Paspoort Nodig | Hogesnelheidstrein", "storingsoorzaak":"", "nieuweBestemming":"", "nieuwVertrekspoor":"","rijdtNiet":""}    \n')
            dienstregeling.write(', { "treincode":"NP-IC002-R1-' + '{:02}'.format(nummer) + 'H27M", "vertrekuur":"' + '{:02}'.format(nummer) + '", "vertrekminuut":"57", "bestemming":"Mer Nouveau", "vertrekspoor":"3","soort":"Intercité","vertraging":"","tussenstations":"Formarais, Portail de l' + "'" + 'Ouest", "bericht":"Stopt ook in Formarais", "storingsoorzaak":"", "nieuweBestemming":"", "nieuwVertrekspoor":"","rijdtNiet":""}  \n')
            dienstregeling.write(', { "treincode":"NP-IC002-R2-' + '{:02}'.format(nummer) + 'H27M", "vertrekuur":"' + '{:02}'.format(nummer) + '", "vertrekminuut":"57", "bestemming":"Berlin Hbf", "vertrekspoor":"2","soort":"Intercité","vertraging":"","tussenstations":"Générateur de Zombie, Arrecour", "bericht":"", "storingsoorzaak":"", "nieuweBestemming":"", "nieuwVertrekspoor":"","rijdtNiet":""}  \n')
            dienstregeling.write(', { "treincode":"NP-TR004-R1-' + '{:02}'.format(nummer) + 'H28M", "vertrekuur":"' + '{:02}'.format(nummer) + '", "vertrekminuut":"58", "bestemming":"Nouveau Paris Sud", "vertrekspoor":"5a","soort":"T.E. Regional","vertraging":"","tussenstations":".", "bericht":"", "storingsoorzaak":"", "nieuweBestemming":"", "nieuwVertrekspoor":"","rijdtNiet":""}  \n')
            dienstregeling.write(', { "treincode":"NP-TR004-R2-' + '{:02}'.format(nummer) + 'H28M", "vertrekuur":"' + '{:02}'.format(nummer) + '", "vertrekminuut":"58", "bestemming":"Baie de Fleurs", "vertrekspoor":"5b","soort":"T.E. Regional","vertraging":"","tussenstations":"Formarais, Gendte Quatier Avant, Gendte C., Plainebourg, Plainebourg Midi, Champ Derrière, Fleurmont, Plateau de Fleurs", "bericht":"", "storingsoorzaak":"", "nieuweBestemming":"", "nieuwVertrekspoor":"","rijdtNiet":""}  \n')
            dienstregeling.write(', { "treincode":"NP-IC001-R2-' + '{:02}'.format(nummer) + 'H28M", "vertrekuur":"' + '{:02}'.format(nummer) + '", "vertrekminuut":"58", "bestemming":"Baie de Fleurs", "vertrekspoor":"4","soort":"Intercité","vertraging":"","tussenstations":"Gendte C.", "bericht":"", "storingsoorzaak":"", "nieuweBestemming":"", "nieuwVertrekspoor":"","rijdtNiet":""}  \n')
            dienstregeling.write(', { "treincode":"NP-IC001-R1-' + '{:02}'.format(nummer) + 'H28M", "vertrekuur":"' + '{:02}'.format(nummer) + '", "vertrekminuut":"58", "bestemming":"Sudport", "vertrekspoor":"1","soort":"Intercité","vertraging":"","tussenstations":"Leusden", "bericht":"", "storingsoorzaak":"", "nieuweBestemming":"", "nieuwVertrekspoor":"","rijdtNiet":""}  \n')
            print (nummer)
            nummer += 1
        dienstregeling.close()
else: print ('Niets gedaan')

print ('Ik ben klaar')


