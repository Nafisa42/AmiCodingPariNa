const inputElement = document.getElementById("integer_input");
const searchElement = document.getElementById("search_integer");
const searchBtn = document.getElementById("search-btn");
const searchResultLabel = document.getElementById("search_result");

inputElement.addEventListener("input", checkFields);
searchElement.addEventListener("input", checkFields);
searchBtn.addEventListener("click", searchForInteger);

// Splits a comma-seperated integer input into an array of substrings, and maps each substring to an integer after removing any whitespace. 
const integers = inputElement.value.split(",").map(item => parseInt(item.trim()));
function searchForInteger(event){
    event.preventDefault();

    const searchValue = parseInt(searchElement.value);
    // If the element to be searched is not an integer, this condition is called
    if (isNaN(searchValue)) {
        searchResultLabel.textContent = "Result: Please enter integer values";
        return false;
    }
    // If the element to be searched is found in the string of input values, it prints True, else, it printt False. Also, all the fields are cleared after the result is printed
    if (integers.includes(searchValue)) {
        searchResultLabel.textContent = `Result: True`;
        clearFields();
    } else {
        searchResultLabel.textContent = `Result: False`;
    }
}

// Checks if the all input fields in Khoj The Search Page is filled, else the button is disabled
function checkFields() {  
    if (inputElement.value && searchElement.value) {
        searchBtn.disabled = false;
    } else {
        searchBtn.disabled = true;
    }
}

// Clears all the fields
function clearFields() {
    inputElement.value = "";
    searchElement.value = "";
}