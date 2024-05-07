/*
- Replace the content of the existing README file with an explanation of the changes made to each portion
- Replace existing comments in code with own explanations 
 */

//INITIAL VALUES
const initialVelocityInKmPerHour = 10000; // velocity (km/h) fix: convert to m/s by /3.6
const accelerationInMetresPerSecond = 3; // acceleration (m/s^2)
const timeInSeconds = 3600; // seconds (1 hour)
const initialDistanceInKm = 0; // distance (km) fix: final answer will be given as m then convert to km (/1000)
const initialFuelAmountInKg = 5000; // remaining fuel (kg)
const fuelBurnRateInKgPerSecond = 0.5; // fuel burn rate (kg/s)

//FINAL VALUES
const finalDistanceInKm =
  initialDistanceInKm + initialVelocityInKmPerHour * timeInSeconds; //calcultes new distance
const remainingFuelAmountInKg =
  initialFuelAmountInKg - fuelBurnRateInKgPerSecond * timeInSeconds; //calculates remaining fuel
const finalVelocityInKmPerHour = calcFinalVelocity(
  accelerationInMetresPerSecond,
  initialVelocityInKmPerHour,
  timeInSeconds
); //calculates new velocity based on acceleration

// Pick up an error with how the function below is called and make it robust to such errors
const calcFinalVelocity = (
  accelerationInMetresPerSecond,
  initialVelocityInKmPerHour,
  timeInSeconds
) => {
  if (accelerationInMetresPerSecond === 3) {
    console.error("Convert acceleration.");
  } else {
    return (
      initialVelocityInKmPerHour + accelerationInMetresPerSecond * timeInSeconds
    );
  }
};

console.log(`Corrected New Velocity: ${finalVelocityInKmPerHour} km/h`);
console.log(`Corrected New Distance: ${finalDistanceInKm} km`);
console.log(`Corrected Remaining Fuel: ${remainingFuelAmountInKg} kg`);
