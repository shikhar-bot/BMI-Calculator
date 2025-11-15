let userHeight;
let userWeight;
let userHeightUnit;
let userWeightUnit;
let calculatedBMI;

function calculateBMI() {
    // Store the User inputs in local variables
    userHeight = parseFloat(document.getElementById('height').value);
    userWeight = parseFloat(document.getElementById('weight').value);
    userHeightUnit = document.getElementById('heightUnit').value;
    userWeightUnit = document.getElementById('weightUnit').value;

    // Validate the user inputs
    if(isNaN(userHeight)|| isNaN(userWeight) || userHeight <= 0 || userWeight <= 0) {
        alert('Please enter valid height and weight values')
        return;
    }

    // Covert the weight in kg
    let weightInKg;
    switch(userWeightUnit) {
        case 'g':
            weightInKg = userWeight / 1000;
            break;
        case 'kg':
            weightInKg = userWeight;
            break;
        case 'lbs':
            weightInKg = userWeight * 0.453592;
            break;
    }

    // Convert the height in m
    let heightInMeters;
    switch(userHeightUnit) {
        case 'cm':
            heightInMeters = userHeight / 100;
            break;
        case 'm':
            heightInMeters = userHeight;
            break;
        case 'ft':
            heightInMeters = userHeight * 0.3048;
            break;
        case 'in':
            heightInMeters = userHeight * 0.0254;
            break;
    }

    // Calculate BMI
    calculatedBMI = weightInKg / (heightInMeters * heightInMeters);

    // Determine Category
    let category;
    let categoryColor;
    if(calculatedBMI < 18.5) {
        category = 'Underweight';
        categoryColor = '#3b82f6';
    } else if(calculatedBMI < 25) {
        category = 'Normal Weight';
        categoryColor = '#10b981';
    } else if(calculatedBMI < 30) {
        category = 'Overweight';
        categoryColor = '#f59e0b';
    } else {
        category = 'Obese';
        categoryColor = '#ef4444';
    }

    // Display results
    document.getElementById('bmiValue').textContent = calculatedBMI.toFixed(2);
    document.getElementById('bmiValue').style.color = categoryColor;
    document.getElementById('bmiCategory').textContent = category;
    document.getElementById('result').classList.add('show');

    // Log values to console for verification
    console.log('User Input Stored:');
    console.log('Height:', userHeight, userHeightUnit);
    console.log('Weight:', userWeight, userWeightUnit);
    console.log('Calculated BMI:', calculatedBMI);
    console.log('Category:', category);
}