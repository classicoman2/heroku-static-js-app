# Desplegar web estàtica a HEROKU

Empraré **Node.js** i **Express** per desplegar la web estàtica a Heroku, és més fàcil així.
Aquest desplegament l'he fet a efectes de provar algunes coses sobre **rendiment de la web** (todo).

## Todo

 - [ ] :bug: Problema amb el **Runtime** --> cal carregar dependència en js
 - [ ] Insertar assets: imatges, videos, fonts
 - [ ] Provar rendiment amb els assets tractats amb diferents formats
 - [ ] Provar compressió en els assets (ho permet la capçalera http)

## El meu Tutorial

:warning: Basat en [el tutorial basic de HEROKU](https://devcenter.heroku.com/articles/getting-started-with-nodejs)

1.- Iniciar sessió en Heroku

```js
    heroku login
```

2.- Provar l'app en local

```js
    heroku local web
```

3.-Crear aplicacio a heroku

```js
    heroku apps:create staticsitenodejs
```

4.- Commitejar els canvis fets (cada vegada que facem canvis, repetirem les passes 4 i 5 d'aquesta guia)

```js
    git add . && git commit -m "canvi fet"
```

5.- Fer push de la branca corresponent

```js
    git push heroku main
```