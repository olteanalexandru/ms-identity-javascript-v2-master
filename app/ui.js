//This file will access and update DOM elements.
// Select DOM elements to work with




const welcomeDiv = document.getElementById("WelcomeMessage");
const signInButton = document.getElementById("SignIn");


function showWelcomeMessage(username) {
    console.log("User " + username + " logged in successfully");
}
const msalInstance = new msal.PublicClientApplication(msalConfig);

function updateUI() {
    const account = msalInstance.getAllAccounts()[0];
   
      
    if (account) {
        // User is signed in
        document.getElementById('welcomeMessage').innerText = `Welcome, ${account.username}!`;
        document.getElementById('signOut').style.display = 'block';

        // Get the bearer token
        const tokenRequest = {
            scopes: ["User.Read"],
            account: account
        };
        msalInstance.acquireTokenSilent(tokenRequest)
            .then(response => {
                console.log('Bearer Token:', response.accessToken);
            })
            .catch(error => {
                console.error(error);
            });
    } else {
        // User is not signed in
        document.getElementById('signOut').style.display = 'none';
    }
}
