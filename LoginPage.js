const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".btn-open");
const closeModalBtn = document.querySelector(".btn-close");

const emailInput = document.getElementById("email-id");
const passwordInput = document.getElementById("pwd");
const submitBtn = document.getElementById("submit-btn");
const signupBtn = document.getElementById("signup-btn");
const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const emailSignup = document.getElementById("email");
const passwordSignup = document.getElementById("password");
const confirmPassword = document.getElementById("re-password");

emailInput.addEventListener("input", checkFields);
passwordInput.addEventListener("input", checkFields);
firstName.addEventListener("input", checkFields);
lastName.addEventListener("input", checkFields);
emailSignup.addEventListener("input", checkFields);
passwordSignup.addEventListener("input", checkFields);
confirmPassword.addEventListener("input", checkFields);

openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);

// Checks if the form fields are empty, keeps the button disabled until all fields are filled
function checkFields() {  
    // For Login page
    if (emailInput.value && passwordInput.value) {
        submitBtn.disabled = false;
    } else {
        submitBtn.disabled = true;
    }
    // For Registration modal
    if(firstName.value && lastName.value && emailSignup.value && passwordSignup.value && confirmPassword.value){
        signupBtn.disabled = false;
    }
    else{
        signupBtn.disabled = true;
    }
}

// Checks if the submit button is clicked
function submitForm() {
    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();
    
    // if submit button is abled, it clears all the field and goes to the khoj the search page
    if (emailValue !== "" && passwordValue !== "") {
        clearLoginFields(); 
        redirectToNewPage();
        return false;
    } else {
        return false; 
    }
}

// Clears all user login fields
function clearLoginFields() {
    emailInput.value = "";
    passwordInput.value = "";   
}

// Redirects to Khoj The Search Page
function redirectToNewPage() {
    window.location.href = 'KhojTheSearchPage.html';
}

// Opens the registration modal
function openModal() {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
}

// Closes the registration modal
function closeModal() {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}

// Fetching the email and password input from frontend
submitBtn.addEventListener("click", async (event) => {
    const email = emailInput.value;
    const password = passwordInput.value;
    
    // Sends the values to the server using a POST request
    const response = await fetch('/api/insertUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });
    
    // Handles the server's response whether the user was successfully inserted into the database or not
    if (response.ok) {
      console.log('User inserted successfully');
    } else {
      console.error('Error inserting user2');
    }
});