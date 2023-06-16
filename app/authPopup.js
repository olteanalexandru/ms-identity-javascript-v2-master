// Create an instance of MSAL
const msalInstance = new msal.PublicClientApplication(msalConfig);
// Sign in function
// Sign in function
function signIn() {
    // Get the sign-in button
    var signInButton = document.getElementsByClassName('ms-Button');
    // Disable the sign-in button
    signInButton.disabled = true;

    // Only call loginRedirect if no interaction is in progress
        msalInstance.loginRedirect(loginRequest)
            .then(response => {
                // Login successful
                console.log(response);
                // Log the token if it exists
                if (response.accessToken) {
                    console.log('Access Token:', response.accessToken);  
                } else {
                    console.log('Access Token is null');
                }
                // Redirect to UserIsAuth page
                window.location.href = "UserIsAuth.html";
            })
            .catch(error => {
                // Login failed
                console.error(error);
                // Enable the sign-in button
                signInButton.disabled = false;
            });
    }




// Sign out function
function signOut() {
    msalInstance.logout();
}