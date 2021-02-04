## Pages
| Category | Name | URL (example) | Status | Notes |
| -------- | ---- | ------------- | ------ | ----- |
| Frontpage | Frontpage | / | Done | |
| User profile | Gegevens | /edit/24088.html | Done | |
| User profile | Avatar | /avatar/index.html | Done | 1 |
| User profile | Berichten | /index.php?page=pm | Done | |
| User profile | Wishlist / Collectie | /profile/Mrpapercut.html | Done | |
| User profile | Bekijk andere gebruiker | /profile/ktugach.html | Done | |
| Nieuws | Nieuwsbericht | /nieuws/16994/de-xbox-live-gold-games-van-februari.html | Done | |
| Nieuws | Nieuwsarchief | /newsarchive/index.html | Done | |
| Nieuws | Nieuwsarchief (Alle berichten) | /index.php?page=newsarchive&all=all | Done | |
| Nieuws | Game review | /game-review/hitman+3_PS5.html | Done | |
| Shopsurvey | Overzicht | /winkels/index.html | Done | |
| Shopsurvey | Winkel | /shopsurvey/winkel-248.html | Done | |
| Shopsurvey | Winkel (alle ervaringen) | /shopsurveyall/winkel-248.html | Done | |
| Forum | Overview (alle boards) | /forum.php?template=forum&page=boards | Done | |
| Forum | Board overzicht | /forum.php?template=forum&page=topics&forum_id=1 | Done | |
| Forum | Nieuw topic | /forum.php?template=forum&page=ntopic&forum_id=1 | Done | |
| Forum | Topic | /forum.php?page=topic&topic_id=8330&forum_id=15&start=5294 | Done | 5 |
| Forum | Zoekresultaten (Google) | /forum.php?page=googles&q=query | Done | 2, 3 |
| Game review | Overzicht | /reviews/console-all.html | Done | |
| Game review | Review | /game-review/deadly+premonition+2:+a+blessing+in+disguise_switch.html | Done | |
| Columns | Overzicht | /columns/columns.html | Done | |
| Columns | Column | /columns/columns-476.html | Done | |
| Budgetgamers | Memberlist | /memberlist/asc-id.html | Done | |
| Contact | Contact | /contact/index.html | Done | |
| Game toevoegen | Formulier | /index.php?page=gametoevoegen | Done | |
| Nieuws/Aanbieding doorgeven | Formulier | /index.php?page=aanbiedingdoorgeven | Done | 4 |

## Notes:
1. Upload Avatar gebruikt een iframe vanaf https://resources.budgetgaming.nl/adminpublic/avatar.php
  `body { background: #333; } input[type="file"] { color: #cdcdcd; }`
2. Niet mogelijk om geadverteerde zoekresultaten te stylen omdat het een iframe betreft
3. div#footer zit in div#content, waardoor de footer niet correct is
4. Captcha is niet te stylen omdat het een iframe betreft
5. "Verzenden" knop moet het attribute 'value="Verzenden"' krijgen