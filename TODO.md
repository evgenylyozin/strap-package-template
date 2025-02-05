# TODO

## Before development do these steps to finalize the setup

### Add your personal information

Go through these files and add the information about yourself and the package:

- LICENSE
- package.json
- DEV.README.md
- README.md

### If the husky pre-commit hook is not needed

Run:

```bash
npm run remove-husky
```

Then remove the corresponding section from DEV.README.md

### If the publish to npm workflow is not needed

Run:

```bash
npm run remove-publish-workflow
```

Then remove the corresponding section from DEV.README.md

### If the license of the project is not MIT

Remove the LICENSE file

### Publish to NPM workflow setup

If you chose to include npm publish workflow then for it to work properly do the following steps:

- Create an NPM access token (granular or authorization type), see <https://docs.npmjs.com/about-access-tokens>
- Copy the created token and save for later use
- Publish package files to GitHub if not already
- Create new repository secret in repository settings => secrets and variables => actions with the name "NPM_TOKEN" and value of the previously copied token

Now the workflow should be triggered every time a new production release is created
for the repository. See <https://docs.github.com/en/repositories/releasing-projects-on-github/about-releases> for more info about GitHub releases and
see the DEV.README.md for specific information on how to publish the package on npm
