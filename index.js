/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result,
 * it throws an error to the user if something has gone wrong (parameter used with an incorrect
 * unit of measurement, etc)
 */

// Given Parameters
const vel = 10000; // velocity (km/h) fix: convert to m/s by /3.6
const acc = 3; // acceleration (m/s^2)
const time = 3600; // seconds (1 hour)
const d = 0; // distance (km) fix: final answer will be given as m then convert to km (/1000)
const fuel = 5000; // remaining fuel (kg)
const fbr = 0.5; // fuel burn rate (kg/s)

// Pick up an error with how the function below is called and make it robust to such errors
function calcNewVel(acc, vel, time) {
  //fix: convert acceleration by x3.6 
  //fix: also the parameters were switched around 
  //where do i use object destructuring?
  return vel + acc * 3.6 * time;
}

const d2 = (d + (vel / 3.6) * time) / 1000; //calcultes new distance
const rf = fuel - fbr * time; //calculates remaining fuel 
let vel2 = calcNewVel(acc, vel, time); //calculates new velocity based on acceleration

console.log(`Corrected New Velocity: ${vel2} km/h`);
console.log(`Corrected New Distance: ${d2} km`);
console.log(`Corrected Remaining Fuel: ${rf} kg`);