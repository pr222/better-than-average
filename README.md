# ERSÄTTA DETTA MED PROJEKTETS NAMN I GITLAB

## Uppgift

Modulen `src/arrayExtension.js` innehåller funktionen `filterBetterThanAverage` som måste kompletteras.

![Beroendediagram](/.readme/dependency-graph.svg)

Funktionen ska analysera en array innehållande objekt med namn och poäng, som till exempel {name: 'Ellen', points: 42}. Funktionen ska gå igenom samtliga objekt och bestämma medelpoängen för att därefter returnera en array som bara innehåller namnen på de vars poäng är bättre eller lika med medelpoängen.

Du ska även implementera viss felhantering, innebärande att undantag kastas om fel inträffar. Om parametern inte refererar till en array ska ett undantag av typen `TypeError` kastas innehållande felmeddelandet `The passed argument is not an array.`.

Vidare så ska funktionen vara en så kallad "pure function", det vill säga vara helt utan sidoeffekter.

Kodavsnittet nedan är ett exempel på hur funktionen `filterBetterThanAverage` är tänkt att användas.

```js
import { filterBetterThanAverage } from './arrayExtension.js'

const data = [
  {name: 'Stina', points: 1},
  {name: 'Erik', points: 2},
  {name: 'Maja', points: 3},
  {name: 'Sven', points: 4}
]

const result = filterBetterThanAverage(data)
console.log(result) // ['Maja', 'Sven']
```

Som synes av exemplet ovan skickas en array med referenser till fyra objekt som indata till funktionen. Poängerna 1, 2, 3, 4 ger ett medelvärde på 2,5, `(1+2+3+4) / 4`. De personer som har en poäng över, eller lika med 2,5 är Maja och Sven varför dessa två namn returneras (i samma ordning) i en ny array, ['Maja', 'Sven'].

## Tips

Genom att köra enhetstesterna som kommer med övningsuppgiften kan du undersöka om koden du skrivit löst uppgiften (i alla fall enligt enhetstesterna...).

Funktioner, metoder, etc. som _kan_ komma till användning beroende hur du väljer att lösa uppgiften.

- [if](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
- [Array.isArray](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)
- [Array.reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
- [Array.filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [Array.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [throw](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw)
- [Error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)
- [TypeError](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError)
