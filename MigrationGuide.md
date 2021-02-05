# Darkmode
Dit document beschrijft hoe de darkmode-stylesheets uit repo https://github.com/mrpapercut/bgdarkmode kunnen worden geimplementeerd op BG. De darkmode stylesheets zijn opgesteld om zo simpel mogelijk toepasbaar te zijn. Dat betekent dat de stylesheets bijna geheel gebruik maken van bestaande code. Dit zorgt ervoor dat darkmode kan worden toegevoegd aan de bestaande functionaliteit zonder grote wijzigingen te hoeven doen.

## Wijzigingen
Het kleurenschema van de website wordt omgezet naar "darkmode" stijl. Hiervoor worden de bestaande kleuren-stylesheets (rood.css, blauw.css etc) uitgezet, en de darkmode-stylesheet aan de pagina toegevoegd. De darkmode-stylesheet heeft ook ondersteuning voor alle kleur-varianten. Opmerking: de stylesheets voor de kleurenthemas lichtgrijs en donkergrijs zijn in darkmode identiek aan elkaar, omdat een lichtgrijze darkmode niet logisch is.

Alle paginas waar een normale gebruiker (ingelogd of niet) bij kan, zijn aangepast. Eventuele paginas en/of HTML-elementen waarbij toegang is gelimiteerd tot moderators en/of administrators zijn niet behandeld.

In alle gevallen is geprobeerd om de bestaande look & feel te behouden en geen redesign of herstructurering te forceren.

## Afbeeldingen
Alle afbeeldingen die voor layout-elementen worden gebruikt zijn vervangen door CSS-regels. Dit scheelt in performance omdat er geen extra afbeeldingen hoeven worden ingeladen, en maakt de website beter toegankelijk qua accessibility. Voorbeelden van vervangen afbeeldingen zijn de achtergronden van sectie-headers zoals "Laatste reacties" en "Top 10 van Budgetgamers", de "Verzenden" knop om reacties te plaatsen, en de Online/Offline indicator naast gebruikersnamen bij reacties.

Alle overige afbeeldingen zijn geoptimaliseerd waar nodig voor darkmode. Emojis bijvoorbeeld hebben allemaal betere transparantie gekregen, de Budgetgaming en Budgetspelen logos hebben beter contrast t.o.v. een donkere achtergrond, etc. Deze bestanden zijn te vinden in de map `./images`.

De stylesheet laadt de nieuwe afbeeldingen in _over_ de bestaande afbeeldingen. Bij werkelijke implementatie is het beter om de nieuwe afbeeldingen _in plaats van_ de bestaande afbeeldingen in te laden, want dat voorkomt dat onzichtbare afbeeldingen worden ingeladen.

## Hoe te gebruiken
De darkmode-stylesheet kan worden gevonden in `./css/darkmode-commented.css`. Dit bestand bevat alle stylesheets, inclusief andere bestaande kleurschemas. Er zijn minimale comments toegevoegd, om duidelijk te maken welke regels bij welke paginas/elementen horen. Let op: `./css/darkmode-commented.css` is een precompiled bestand. Als onderstaande stappen voor development worden gevolgd zitten er geen comments in het gegenereerde resultaat.

### Development
In de map `./scss/` staat alle broncode. De broncode is geschreven met [Sass](https://sass-lang.com). Om de code te kunnen compileren kan er gebruik gemaakt worden van [NodeJS](https://nodejs.org) en [Webpack](https://webpack.js.org/):
```bash
git clone https://github.com/mrpapercut/bgdarkmode.git
cd ./bgdarkmode
npm install

# For building
npm run build

# For development
npm run watch
```
De gecompileerde code kan gevonden worden in `./dist/darkmode.css`.

### Browser
Om de stylesheet te laten werken in de browser moeten eerst alle kleur-specifieke stylesheets worden weggehaald:
```html
<link rel="stylesheet" href="/css/rood.css?v=50" type="text/css" media="screen" />
<link rel="stylesheet" href="/css/blauw.css?v=50" type="text/css" media="screen" />
<link rel="stylesheet" href="/css/groen.css?v=50" type="text/css" media="screen" />
<link rel="stylesheet" href="/css/paars.css?v=50" type="text/css" media="screen" />
<link rel="stylesheet" href="/css/lichtgrijs.css?v=50" type="text/css" media="screen" />
<link rel="stylesheet" href="/css/donkeygrijs.css?v=50" type="text/css" media="screen" />
```

Voeg vervolgens de darkmode-stylesheet toe:
```html
<link rel="stylesheet" href="darkmode.css" media="screen">
```

Voeg tenslotte de volgende 2 classnames aan het Body-element toe:
```html
<body id="body_id" class="body_id darkmode darkmode-rood">
```
(De overige kleurthemas volgen dezelfde naamsconventie: darkmode-blauw, darkmode-paars etc)

Nu zou het grootste gedeelte van de darkmode-wijzigingen moeten werken. Sommige elementen hebben echter nieuwe classnames nodig zodat de CSS beter benaderd kan worden. Die wijzigingen staan hieronder beschreven.

## HTML wijzigingen
Hieronder staan alle gewenste wijzigingen en toelichting op speciale paginas/elementen. Sommige externe content is niet te bewerken via stylesheets. Daar waar mogelijk worden oplossingen aangedragen.

### Toevoegen classnames aan elementen
Sommige elementen zijn lastig te benaderen in CSS. Voor deze elementen dienen extra classNames te worden toegevoegd zodat ze wel kunnen worden gestyled. De darkmode-stylesheet is afhankelijk van deze classnames. In het bestand `./js/addIdentifiableClassnames.js` staat code om deze classes met javascript toe te voegen. Dit kan handig zijn voor testen, maar voor de werkelijke implementatie kunnen deze classnames worden toegevoegd aan de HTML. De classnames conflicteren niet met bestaande functionaliteit.

Hier volgt een lijst van classnames die door de stylesheet verwacht worden. De verwachte classname dient identiek aan onderstaande te zijn, en is hoofdletter-gevoelig. De CSS Query toont de onderliggende query waarmee het element kan worden geidentificeerd.

| Verwachte classname | CSS query | Voorbeeld/toelichting |
| ------------------- | ----- | --------------------- |
| commentQuoteWrapper | `.gamereactie-content > div[style="margin: 10px, 10px, 10px, 10px;"]` | De wrapper om een quote* |
| commentQuote | `.gamereactie-content > div[style="margin: 10px, 10px, 10px, 10px;"] > div` | De quote binnen de wrapper* |
| commentUsername | `.gamereactie-meta > img[src^="/images/user-"] + a` | De klikbare link van een gebruikersnaam bij reacties |
| commentUsernameOnline | `.gamereactie-meta > img[src="/images/user-online.jpg"] + a` | De klikbare link van een gebruikersnaam bij reacties als gebruiker online is |
| commentUsernameOffline | `.gamereactie-meta > img[src="/images/user-offline.jpg"] + a` | De klikbare link van een gebruikersnaam bij reacties als gebruiker offline is |

\* Op non-forum paginas (nieuwsberichten etc) staat de class `.quote1` op dit element, en `.quote2` op het element erin. De darkmode-stylesheet biedt voor zowel .quote1/.quote2 als .commentQuoteWrapper/.commentQuote ondersteuning, dus er kan ook gekozen worden om de classnames .quote1/.quote2 te gebruiken op forum-paginas.

### Toevoegen tekst 'Verzenden'
De oorspronkelijke knop heeft de tekst 'Verzenden' in het achtergrond-plaatje staan. Dit is vervangen door CSS-regels, maar de knop moet dan wel het attribute `value="Verzenden"` krijgen.

### Twitter embeds
Om Twitter-embeds in darkmode te zetten, dient er bij het HTML-element met class 'twitter-tweet' het attribute `data-theme="dark"` te worden toegevoegd.

N.B. Het werkt niet optimaal, want de hoekjes van de embedded-tweet hebben een witte achtergrond. Hiervoor zou het attribute `data-chrome="transparent"` moeten werken, maar dat werkt alleen bij embedded Timelines en niet bij embedded Tweets. Er is gezocht naar een oplossing maar Twitter lijkt dit niet te ondersteunen.

### Upload Avatar
Upload Avatar gebruikt een iframe vanaf https://resources.budgetgaming.nl/adminpublic/avatar.php en deze pagina bevat geen stylesheets. De volgende CSS-regels kunnen worden toegevoegd om deze popup in gelijke stijl te tonen:
`body { background: #333; } input[type="file"] { color: #cdcdcd; }`

### Google Search
Het is niet mogelijk om geadverteerde zoekresultaten te stylen omdat het een iframe betreft. Mogelijk heeft Google hier een oplossing voor.

Op deze pagina zit ook een foutje in de HTML: div#footer zit in div#content, waardoor de footer niet correct wordt uitgelijnd.

### Captcha bij "Prijs / Aanbieding doorgeven"
Op de pagina /index.php?page=aanbiedingdoorgeven staat een Captcha. Deze is niet te stylen omdat het een iframe betreft. Mogelijk biedt Captcha zelf darkmode-ondersteuning.

### Prijshistorie grafieken
De Prijshistorie grafieken van producten hebben een standaard witte achtergrond. In het bestand `./js/canvasjsDarkmode.js` staat voorbeeld code hoe deze grafieken darkmode styling kunnen krijgen.
