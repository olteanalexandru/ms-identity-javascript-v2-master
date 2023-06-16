---
page_type: sample
languages:
- javascript
- html
products:
- azure-active-directory
- microsoft-identity-platform
urlFragment: "ms-identity-javascript-v2"
---

# Vanilla JavaScript Single-page Application secured with MSAL.js

**Note:** A quickstart guide covering this sample can be found [here](https://docs.microsoft.com/azure/active-directory/develop/quickstart-v2-javascript-auth-code).

**Note:** A more detailed tutorial covering this sample can be found [here](https://docs.microsoft.com/azure/active-directory/develop/tutorial-v2-javascript-auth-code).

## Contents

| File/folder       | Description                                |
|-------------------|--------------------------------------------|
| `app`             | Contains sample source files               |
| `authRedirect.js` | Main authentication logic resides here   |
| `authConfig.js`   | Contains configuration parameters for the sample.      |
| `ui.js`           | Contains UI logic.                         |
| `index.html`      |  Contains the main Login page              |
| `.gitignore`      | Define what to ignore at commit time.      |
| `package.json`    | Package manifest for npm.                  |
| `server.js`     | Implements a simple Node server to serve index.html.  |

## Prerequisites

[Node](https://nodejs.org/en/) must be installed to run this sample.

## Setup

1. [Register a new application](https://docs.microsoft.com/azure/active-directory/develop/scenario-spa-app-registration) in the [Azure Portal](https://portal.azure.com). Ensure that the application is enabled for the [authorization code flow with PKCE](https://docs.microsoft.com/azure/active-directory/develop/v2-oauth2-auth-code-flow). This will require that you redirect URI configured in the portal is of type `SPA`.
2. Open the [/app/authConfig.js](./app/authConfig.js) file and provide the required configuration values.
3. On the command line, navigate to the root of the repository, and run `npm install` to install the project dependencies via npm.
