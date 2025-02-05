# DEVELOPMENT RELATED INFORMATION

How to get, build, develop, test, publish etc.

## How to get the repo

```bash
git clone {YOUR_REPO_URL_HERE}
```

## Initialize the repo to start developing

Prerequisite: Node {REQUIRED NODE VERSION HERE}

If the package-lock file is available, run:

```bash
npm ci
```

or

```bash
npm i
```

## To run tests

Make changes in src/index.ts and then run:

```bash
npm run test
```

## To check types, lint, test and build dist files

```bash
npm run prepare-release
```

## Pre commit hook [REMOVE IF HUSKY WAS REMOVED]

Before commit is done, the precommit hook should run which is managed by husky
(.husky/pre-commit). It essentially fixes prettify issues, adds formatted files
to staged if any, checks types, lints, tests, builds. If all is good => the commit
happens.

## Publishing to NPM [REMOVE IF WORKFLOW WAS REMOVED]

To publish new version of the package to npm there is a CI/CD script in the .github/workflows
folder. It is triggered only if a new release is created on the github platform.
It once again checks types, lints, tests and builds. The built files in the dist folder + a
couple other files end up being uploaded to npm. The .npmignore file is there to pick
the files due to be uploaded.

### To successfully update the npm version don't forget

- To update the version in the package.json and then
- To make the new release with this version as a tag on the github platform
