document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");
    const switchToSignup = document.getElementById("switchToSignup");
    const switchToLogin = document.getElementById("switchToLogin");

    // Show Sign-Up Form when "Sign Up" is clicked
    switchToSignup.addEventListener("click", (e) => {
        e.preventDefault(); // Prevent default anchor behavior
        loginForm.classList.remove("active"); // Hide the login form
        loginForm.classList.add("hidden");
        signupForm.classList.remove("hidden"); // Show the signup form
        signupForm.classList.add("active");
    });

    // Show Login Form when "Login" is clicked
    switchToLogin.addEventListener("click", (e) => {
        e.preventDefault(); // Prevent default anchor behavior
        signupForm.classList.remove("active"); // Hide the signup form
        signupForm.classList.add("hidden");
        loginForm.classList.remove("hidden"); // Show the login form
        loginForm.classList.add("active");
    });
});
