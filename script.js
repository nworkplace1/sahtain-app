function calculateFood() {
    // 1. Get Input Values
    const dish = document.getElementById('dishType').value;
    const guests = document.getElementById('guestCount').value;
    
    // 2. Define Portion Logic (Grams per person)
    // Data based on HW1 Ne'ma study estimates
    const portions = {
        machboos: { rice: 150, meat: 200, cost: 25 },
        biryani: { rice: 150, meat: 250, cost: 30 },
        harees: { rice: 100, meat: 150, cost: 20 }
    };

    // 3. Validation
    if (guests < 1) {
        alert("Please enter at least 1 guest.");
        return;
    }

    // 4. Calculate
    const totalRice = (portions[dish].rice * guests) / 1000; // Convert to kg
    const totalMeat = (portions[dish].meat * guests) / 1000; // Convert to kg
    const savings = (guests * portions[dish].cost) * 0.30; // Assume 30% waste reduction savings

    // 5. Update UI
    document.getElementById('riceOutput').innerText = `🍚 Rice/Grain: ${totalRice.toFixed(2)} kg`;
    document.getElementById('meatOutput').innerText = `🍗 Meat/Chicken: ${totalMeat.toFixed(2)} kg`;
    document.getElementById('moneySaved').innerText = savings.toFixed(2);

    // 6. Show Result
    document.getElementById('result').style.display = 'block';
}
