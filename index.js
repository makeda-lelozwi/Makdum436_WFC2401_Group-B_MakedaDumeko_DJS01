/*
- Replace the content of the existing README file with an explanation of the changes made to each portion
- Replace existing comments in code with own explanations 
 */
const SPEED_CONVERSION = 3.6;
const DISTANCE_CONVERSION = 1000;

//VALUES
const initialVelocity = {
  velocity: 10000,
  vUnit: "km/h",
}; //convert to m/s by /3.6

const acceleration = {
  value: 3,
  unit: "m/s^2",
};

const time = {
  value: 3600,
  unit: "seconds",
};

const initialDistance = {
  distance: 0,
  dUnit: "km",
}; //final answer will be given as m then convert to km (/1000)

const initialFuelAmount = {
  value: 5000,
  unit: "kg",
};

const fuelBurnRate = {
  value: 0.5,
  unit: "kg/s",
};

//FUNCTIONS FOR CALCULATIONS
const calcFinalVelocity = (props) => {
  const { initialVelocity, acceleration, time } = props;
  const { velocity, vUnit } = initialVelocity;

  const velocityAsMetresPerSecond =
    vUnit === "m/s" ? velocity : velocity / SPEED_CONVERSION; //whether the unit is in m/s or km/h, it will give correct answer

  const velocityFormula = velocityAsMetresPerSecond + acceleration * time; //Gives final velocity in m/s

  //They want the velocity in km/h
  return velocityFormula * SPEED_CONVERSION;
};

const calcFinalDistance = (props) => {
  const { initialDistance, initialVelocity, time } = props;
  const { distance, dUnit } = initialDistance;
  const { velocity, vUnit } = initialVelocity;

  const distanceInMetres =
    dUnit === "m" ? distance : distance * DISTANCE_CONVERSION;

  const velocityAsMetresPerSecond =
    vUnit === "m/s" ? velocity : velocity / SPEED_CONVERSION;

  const finalDistanceFormula =
    distanceInMetres + velocityAsMetresPerSecond * time;

  return finalDistanceFormula / DISTANCE_CONVERSION;
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
}); //returns final velocity based on acceleration and time

const finalDistance = calcFinalDistance({
  time: 3600,
  initialDistance,
  initialVelocity,
}); //returns final distance based on velocity and time

const remainingFuelAmount = calcRemainingFuelAmount({
  time: 3600,
  fuelBurnRate: 0.5,
  initialFuelAmount,
}); //returns remaining fuel given a burn rate and time

//LOGGING ANSWERS TO CONSOLE
console.log(`Corrected New Velocity: ${finalVelocity} km/h`);
console.log(`Corrected New Distance: ${finalDistance} km`);
console.log(`Corrected Remaining Fuel: ${remainingFuelAmount} kg`);
