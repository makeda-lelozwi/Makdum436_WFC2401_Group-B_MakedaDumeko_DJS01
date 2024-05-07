/*
- Replace the content of the existing README file with an explanation of the changes made to each portion
- Replace existing comments in code with own explanations 
 */
const CONVERSION_FACTOR = 3.6;

//VALUES
const initialVelocity = {
  velocity: 10000,
  measurement: "km/h",
}; // velocity (km/h) fix: convert to m/s by /3.6

const acceleration = {
  value: 3,
  measurement: "m/s^2",
}; // acceleration (m/s^2)

const time = {
  value: 3600,
  measurement: "seconds",
}; // seconds (1 hour)

const initialDistance = {
  value: 0,
  measurement: "km",
}; // distance (km) fix: final answer will be given as m then convert to km (/1000)

const initialFuelAmount = {
  value: 5000,
  measurement: "kg",
}; // remaining fuel (kg)

const fuelBurnRate = {
  value: 0.5,
  measurement: "kg/s",
}; // fuel burn rate (kg/s)

//FUNCTIONS FOR CALCULATIONS
const calcFinalVelocity = (props) => {
  const { initialVelocity, acceleration, time } = props;
  const { velocity, measurement } = initialVelocity;

  const velocityAsMetresPerSecond =
    measurement === "m/s" ? velocity : velocity / CONVERSION_FACTOR;

  const velocityFormula = velocityAsMetresPerSecond + acceleration * time;

  return velocityFormula * CONVERSION_FACTOR;
};

const calcRemainingFuelAmount = (props) => {
  const { initialFuelAmount, fuelBurnRate, time } = props;
  const { value } = initialFuelAmount;

  const remainingFuelFormula = value - fuelBurnRate * time;

  return remainingFuelFormula;
};

//FINAL VALUES
const finalVelocity = calcFinalVelocity({
  time: 3600,
  acceleration: 3,
  initialVelocity,
}); //calculates new velocity based on acceleration

const finalDistance = initialDistance + initialVelocity * time;
//calcultes new distance

const remainingFuelAmount = calcRemainingFuelAmount({
  time: 3600,
  fuelBurnRate: 0.5,
  initialFuelAmount,
}); //calculates remaining fuel
console.log(`Corrected New Velocity: ${finalVelocity} km/h`);
console.log(`Corrected New Distance: ${finalDistance} km`);
console.log(`Corrected Remaining Fuel: ${remainingFuelAmount} kg`);
