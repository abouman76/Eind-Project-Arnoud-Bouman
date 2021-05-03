# Inleiding

Dit document beschrijft het ontwerp van de website voor “Sociaal Oosterhout”. Het doel van deze website is om mensen uit de wijk met postcode 6515 in Nijmegen-Noord met elkaar in contact te brengen om een mogelijk sociaal isolement en vereenzaming te voorkomen. In deze tijden van corona is het juist belangrijk dat er een sociaal vangnet blijft voor mensen die dit nodig hebben. Buurthuizen, haak clubjes, breiclubjes, biljartclub, etcetera moeten sluiten of mogen maar een beperkt aantal mensen ontvangen. Het gevolg is dat mensen thuis zitten en dat het sociaal netwerk kleiner wordt en mensen vereenzamen. Dit project gaat dan ook over een applicatie die gericht is op een woonwijk, waar buurtgenoten de mogelijkheid hebben om met elkaar in contact te komen en elkaar te leren kennen.

**PLAATS HIER EEN SCREENSHOT**

Het project is opgezet met Create React App.

# De applicatie starten

Als het project gecloned is naar jouw computer, installeer je eerst de node_modules door het volgende commando in de terminal te runnen:

_npm install_

Wanneer dit klaar is, kun je de applicatie starten met behulp van:

_npm start_

of gebruik de WebStorm knop (npm start).

Open http://localhost:3000 om de applicatie in de browser te bekijken.

### Testen
De unit testen zijn te vinden in de map: Tests die te vinden is in de src folder. De testen zijn te runnen door het volgende commando in de terminal te runnen.

npm run test

### API-keys
De API-keys zijn in een .env bestand geplaatst en kunnen opgevraagd worden bij de maker - beheerder van dit project.

# Stappenplan
Voor deze applicatie is gebruik gemaakt van Firebase en de Firebase Firestore Database. Je hebt geen inlog gegevens of wachtwoord nodig.
Via de registratiepagina kan je zelf een profiel aanmaken.
Na registratie kan je via de inlog pagina ingelogd worden.
Zodra je bent ingelogd kan je advertenties plaatsen.