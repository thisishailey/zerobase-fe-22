import { createTimeDiv } from "./clock-components/Time.js";
import { createHandDiv, rotateHands } from "./clock-components/Hand.js";

const AnalogClock = $container => {
  createTimeDiv($container);
  createHandDiv($container);
  rotateHands($container);
};

export default AnalogClock;