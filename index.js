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

const accelerationRate = {
  acceleration: 3,
  aUnit: "m/s^2",
};

const duration = {
  time: 3600,
  tUnit: "seconds",
};

const initialDistance = {
  distance: 0,
  dUnit: "km",
}; //final answer will be given as m then convert to km (/1000)

const initialFuelAmount = {
  fuel: 5000,
  fUnit: "kg",
};

const fuelBurnRate = {
  rate: 0.5,
  rUnit: "kg/s",
};

//FUNCTIONS FOR CALCULATIONS
const calcFinalVelocity = (props) => {
  const { initialVelocity, accelerationRate, duration } = props;
  const { velocity, vUnit } = initialVelocity;
  const { acceleration, aUnit } = accelerationRate;
  const { time, tUnit } = duration;

  if (!acceleration) throw new Error("Please provide an acceleration!");

  if (aUnit !== "m/s^2")
    throw new Error(
      "Ensure that the acceleration is in metres per second squared!"
    );

  if (!time) throw new Error("Please provide a time!");

  let timeInSeconds;
  if (tUnit == "min") {
    timeInSeconds = time * 60;
  } else if (tUnit == "hr") {
    timeInSeconds = time * 3600;
  } else if (tUnit == "seconds") {
    timeInSeconds = time;
  }

  const velocityAsMetresPerSecond =
    vUnit === "m/s" ? velocity : velocity / SPEED_CONVERSION; //whether the unit is in m/s or km/h, it will give correct answer

  const velocityFormula =
    velocityAsMetresPerSecond + acceleration * timeInSeconds; //Gives final velocity in m/s

  //They want the velocity in km/h
  return velocityFormula * SPEED_CONVERSION;
};

const calcFinalDistance = (props) => {
  const { initialDistance, initialVelocity, duration } = props;
  const { distance, dUnit } = initialDistance;
  const { velocity, vUnit } = initialVelocity;
  const { time, tUnit } = duration;

  if (!time) throw new Error("Please provide a time (in seconds)");

  let timeInSeconds;
  if (tUnit == "min") {
    timeInSeconds = time * 60;
  } else if (tUnit == "hr") {
    timeInSeconds = time * 3600;
  } else if (tUnit == "seconds") {
    timeInSeconds = time;
  }

  if (typeof distance !== "number")
    throw new Error("Please provide a distance!");
  const distanceInMetres =
    dUnit === "m" ? distance : distance * DISTANCE_CONVERSION;

  const velocityAsMetresPerSecond =
    vUnit === "m/s" ? velocity : velocity / SPEED_CONVERSION;

  const finalDistanceFormula =
    distanceInMetres + velocityAsMetresPerSecond * timeInSeconds;

  return finalDistanceFormula / DISTANCE_CONVERSION;
};

const calcRemainingFuelAmount = (props) => {
  const { initialFuelAmount, fuelBurnRate, duration } = props;
  const { fuel } = initialFuelAmount;
  const { time, tUnit } = duration;
  const { rate } = fuelBurnRate;

  if (!time) throw new Error('Please provide a "time" (in seconds)');
  let timeInSeconds;
  if (tUnit == "min") {
    timeInSeconds = time * 60;
  } else if (tUnit == "hr") {
    timeInSeconds = time * 3600;
  } else if (tUnit == "seconds") {
    timeInSeconds = time;
  }

  if (!fuel) throw new Error("Please provide an initial fuel amount!");

  if (!rate) throw new Error("Please provide a fuel burn rate!");

  const remainingFuelFormula = fuel - rate * timeInSeconds;

  return remainingFuelFormula;
};

//FINAL VALUES
const finalVelocity = calcFinalVelocity({
  duration,
  accelerationRate,
  initialVelocity,
}); //returns final velocity based on acceleration and time

const finalDistance = calcFinalDistance({
  duration,
  initialDistance,
  initialVelocity,
}); //returns final distance based on velocity and time

const remainingFuelAmount = calcRemainingFuelAmount({
  duration,
  fuelBurnRate,
  initialFuelAmount,
}); //returns remaining fuel given a burn rate and time

//LOGGING ANSWERS TO CONSOLE
console.log(`Corrected New Velocity: ${finalVelocity} km/h`);
console.log(`Corrected New Distance: ${finalDistance} km`);
console.log(`Corrected Remaining Fuel: ${remainingFuelAmount} kg`);
