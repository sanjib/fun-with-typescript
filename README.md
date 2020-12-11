# Fun with TypeScript

Experiments, code katas, scratch, notes on TypeScript.
There are many ways to run / compile TypeScript files.

## Configuration Example 1

1. Include index.ts in index.html `<script src="index.ts"></script>`
2. `parcel index.html`

## Configuration Example 2

1. `tsc --init`
2. tsconfig.json, compilerOptions:

```
    "outDir": "./build",
    "rootDir": "./src",
```

3. `npm init -y`
4. package.json, scripts:

```
    "start:build": "tsc -w",
    "start:run": "nodemon build/index.js",
    "start": "concurrently npm:start:*"
```

5. `npm start`

## Helpful packages

- @types/faker, @types/googlemaps
- concurrently
- faker
- nodemon
- parcel-bundler
- ts-node
