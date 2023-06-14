Cílem úlohy je vypracovat single page front endovou aplikaci za použití frameworku React /
Angular.
Pro tvorbu UI lze využít některý z CSS frameworků (Bootstrap / Material / …).
Zadání
Hlavní stránka
Detail příspěvku
Výstup
Zadání
Vytvořte jednoduchou “nástěnkovou” aplikaci zobrazující předpřipravené příspěvky.
Zdrojem dat pro aplikaci budou endpointy:
● Příspěvky: https://jsonplaceholder.typicode.com/posts
● Uživatelé: https://jsonplaceholder.typicode.com/users
● Komentáře: https://jsonplaceholder.typicode.com/comments
Aplikace bude obsahovat dvě stránky
● Hlavní stránku (seznam všech příspěvků)
● Detail příspěvkuHlavní stránka
Obsahuje přehled všech příspěvků z prvního endpointu.
Každý příspěvek obsahuje
● Title
● Zkrácený text
● Jméno autora načtené z druhého endpointu
● Počet komentářů
:
Po kliknutí na příspěvek se otevře detail příspěvku
Detail příspěvku
Obsahuje
● Název
● Údaje autora
● Celý text
● Seznam všech komentářů
○ U každého komentáře bude uveden title, autor a text
Na detail každého příspěvku by mělo být možné se dostat přes URL s IDVýstup