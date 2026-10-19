# SASS CLI practice

Small responsive studio website used to practice compiling Sass with npm and the Sass CLI.

## Requirements

- Node.js and npm
- Sass, installed as a project development dependency

## Environment check

Verified on Windows with Node.js `v24.19.0`, npm `11.17.0`, and Sass `1.105.2`.
Sass was installed with `npm install --save-dev sass`, then checked with `npx sass --version`.

## Install and build

```bash
npm install
npm run sass:build
```

The build compiles every Sass entry point in `scss/` into `css/`. Partial files that start with `_` are imported by the entry points and are not emitted separately.

## Watch for changes

```bash
npm run sass:watch
```

The CLI watches the Sass folder and refreshes the compiled CSS after a change.
The watch command uses the same input and output folders as the one-time build.

## Compile one entry point

```bash
npm run sass:one
```

This creates `css/main.css` from `scss/main.scss`. The second entry point, `scss/admin.scss`, is compiled by the folder build to demonstrate compiling multiple files in one command.

Open `index.html` and `admin.html` in a browser after building.

## Files

- `scss/main.scss` and `scss/admin.scss` are separate entry points.
- Files beginning with `_` are reusable partials imported by those entry points.
- `css/main.css` and `css/admin.css` are the compiled output files.
