function schedulePickup() {
    // 1. Get Input Values
    const locationSelect = document.getElementById('location');
    const location = locationSelect.options[locationSelect.selectedIndex].text;
    const locationValue = locationSelect.value; // Get the value to check if empty
    
    const mealInput = document.getElementById('mealCount');
    const meals = mealInput.value;
    
    const isSafe = document.getElementById('safetyCheck').checked;

    // 2. Validation
    
    // Check if location is selected
    if (locationValue === "") {
        alert("📍 Please select your Pickup Location so our drivers can find you.");
        locationSelect.focus();
        return;
    }

    // Check if meal count is valid
    if (meals === "" || meals < 5) {
        alert("📉 To minimize our carbon footprint, we require a minimum of 5 meals per pickup. Please accumulate more or drop off smaller amounts at a local community fridge.");
        mealInput.focus();
        return;
    }

    // Check safety certification
    if (!isSafe) {
        alert("⚠️ Safety First! You must certify that the food is fresh, untouched, and hygienically packed before we can dispatch a truck.");
        return;
    }

    // 3. Calculate Impact
    // Assumption: Average meal weight = 0.5 kg
    const impact = (meals * 0.5).toFixed(1);

    // 4. Update UI with Dynamic Data
    document.getElementById('userArea').innerText = location;
    document.getElementById('kgSaved').innerText = impact;

    // 5. Reveal Confirmation Message
    const confirmationBox = document.getElementById('confirmation');
    confirmationBox.style.display = 'block';
    
    // Scroll to confirmation to ensure user sees it
    confirmationBox.scrollIntoView({ behavior: 'smooth' });
    
    // 6. Simulate "Backend API Call"
    console.log(`[System]: Dispatching Truck ID #892 to ${location} for ${meals} meals.`);
}
