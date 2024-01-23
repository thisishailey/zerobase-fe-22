import countUp from "./utils/numberCountUp.js";

const data = { participant: 1341513412 }

const participantCount = document.getElementById('participate-number');
countUp(participantCount, data.participant, 1);
