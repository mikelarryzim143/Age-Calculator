// Initialize Flatpickr
flatpickr("#birthdate", {
    dateFormat: "Y-m-d",
    maxDate: "today",
});

// Function to calculate age
function calculateAge(event) {
    event.preventDefault();

    const birthdateInput = document.getElementById("birthdate").value;
    if (!birthdateInput) {
        alert("Please select a birthdate.");
        return;
    }

    const birthDate = luxon.DateTime.fromISO(birthdateInput);
    const now = luxon.DateTime.now();

    if (!birthDate.isValid || birthDate > now) {
        alert("Invalid birthdate. Please choose a valid date.");
        return;
    }

    const diff = now.diff(birthDate, ["years", "months", "days"]).toObject();

    document.getElementById("result").innerHTML = `
        <p>You are <strong>${Math.floor(diff.years)}</strong> years, 
        <strong>${Math.floor(diff.months)}</strong> months, and 
        <strong>${Math.floor(diff.days)}</strong> days old.</p>
    `;
}

// Attach event listener to form
document.getElementById("ageForm").addEventListener("submit", calculateAge);
