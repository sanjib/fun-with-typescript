# Fun with TypeScript

Experiments, code katas, scratch, notes on TypeScript.
There are many ways to run / compile TypeScript files.

## Configuration Example 1

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

## Helpful packages

- concurrently
- nodemon
- parcel
