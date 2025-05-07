const mailInput = document.getElementById("EmailInput");
const passwordInput = document.getElementById("PasswordInput");
const btnSignIn = document.getElementById("btnSignIn");

btnSignIn.addEventListener("click", checkCredentials); 

function checkCredentials() {
    // appeler l'API pour vérifier les identifiants en BDD
    
    if (mailInput.value === "test@mail.com" && passwordInput.value === "123") {
        alert("Connexion réussie !");

        // Il faudra récupérer le vrai token de l'API
        const token = "fakeToken"
        setToken(token); // Placer le token dans le cookie
        // Placer le token en cookie
        
        setCookie(RoleCookieName, "admin", 7); 
        window.location.href = "/";
    }
    else {
        mailInput.classList.add("is-invalid");
        passwordInput.classList.add("is-invalid");
    }
}