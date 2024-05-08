### DJS01: Mars Climate Orbiter Solution

#### Overview

In this challenge I debugged, refactored, and enhanced JavaScript functions designed for determining the trajectory of a spacecraft. The initial functions are flawed and resulted in incorrect calculations.

##### Main Problem Areas to Address

1. **Unit Mismatch**: The provided functions failed to convert units correctly

   Line 16: The values used to calculate final distance (in km) were initial distance (in km), velocity (in km/h) and time (in seconds). Time should be expressed as hours.

   Line 18: The values used to calculate final velocity (in km/h) were initial velocity (in km/h), acceleration (in m/s^-2) and time (in seconds). Initial velocity should be expressed in metres per second and then the final velocity should be converted back to km/h.

   Line 25: The resulting velocity is based on an initial velocity of 10 000 m/s^-2 instead of 10 000 km/h (which converts to 2777.78 m/s^-2).

   Line 26: The resulting distance shows how far the rocket would go after 3600 hours instead of 3600 seconds.

2. **Parameter Misalignment**: Parameters were not handled in a way that prevents or highlights the potential for unit mismatch errors:

   Lines 21 - 23: The arguments for the calcFinalVel function are velocity, acceleration, and time (in that order). However, when the function is called (in line 18) the order of parameters is acceleration, velocity and time.

##### Additional Issues

1. **Vague Variable Names**:

2. **Insufficient Error Handling**:

3. **Incorrect Function Declaration and Calling**:

#### Solution Approach

- Declared global variables to store conversion factors for speed and distance.

- Used object destructuring in function parameters:

  Lines 5 - 33: declared each initial variable as an object containing the size of the variable and its unit of measurement.
  Lines 36 - 125: within the functions for calculating final velocity, final distance, and remaining fuel amount I desctructed the values for each variable. Used the destructured values within the corrected formulae, unit conversions, and in handling errors.

- Implement accurate unit conversions within the functions.

- Implemented error handling (be more specific) for incorrect units of measurement for velocity, acceleration, time, fuel, and distance.
