# API books

Cette application permet de se faire notre bibliothèque de livres.

Elle permet(tra) de :

- ajouter des livres dans son compte
- chercher des livres par le titre ou l’ISBN grâce à GoogleBooks et ajouter ceux trouvés
- indiquer pour chaque livre s’il est
  - lu
  - possédé
  - souhaité
  - aimé
- mettre des étiquettes (labels) au choix
- ajouter des notes pour chaque livre
- chercher dans l’ensemble de ses notes

## Rappels

Syntaxe ESM (Ecmascript module) : `import` / `export`
Syntaxe CommonJS : `require() / module.exports`

**Dans ce projet, on utilise uniquement la syntaxe ESM**, dans le `package.json`, la propriété `"type"` est à `"module"`.

## Développer

### Prérequis

#### Obligatoire

- Node.js (conseillé) ou docker
- Un compte sur un hébergeur mongodb ou docker (préférable)
- Git
- pnpm

#### Fortement recommandé

- Volta
- docker
- VS Code
- @antfu/ni

### Installer les dépendances

```sh
pnpm install
```

### Lancer le projet en mode développement

```