/*
- Replace the content of the existing README file with an explanation of the changes made to each portion
- Replace existing comments in code with own explanations 
 */
const CONVERSION_FACTOR = 3.6;

//VALUES
const initialVelocity = {
  value: 10000,
  measurement: "km/h",
}; // velocity (km/h) fix: convert to m/s by /3.6

// const acceleration = {
//   value: 3,
//   measurement: "m/s^2",
// }; // acceleration (m/s^2)

// const time = {
//   value: 3600,
//   measurement: "seconds",
// }; // seconds (1 hour)

// const initialDistance = {
//   value: 0,
//   measurement: "km",
// }; // distance (km) fix: final answer will be given as m then convert to km (/1000)

// const initialFuelAmount = {
//   value: 5000,
//   measurement: "kg",
// }; // remaining fuel (kg)

// const fuelBurnRate = {
//   value: 0.5,
//   measurement: "kg/s",
// }; // fuel burn rate (kg/s)

//FUNCTIONS FOR CALCULATIONS
const calcFinalVelocity = (props) => {
  const { initialVelocity, acceleration, time } = props;
  const { value, measurement } = initialVelocity;

  if (measurement !== "m/s")
    throw new Error('"Velocity" must be in metres-per-second!');

  return value + acceleration * time;
};

//FINAL VALUES
// const finalDistance = initialDistance + initialVelocity * time; //calcultes new distance
// const remainingFuelAmount = initialFuelAmount - fuelBurnRate * time; //calculates remaining fuel
const finalVelocity = calcFinalVelocity({
  time: 3600,
  acceleration: 3,
  initialVelocity,
}); //calculates new velocity based on acceleration

console.log(`Corrected New Velocity: ${finalVelocity} km/h`);
console.log(`Corrected New Distance: ${finalDistance} km`);
console.log(`Corrected Remaining Fuel: ${remainingFuelAmount} kg`);
