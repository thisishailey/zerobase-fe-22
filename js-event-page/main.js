import countUp from "./utils/numberCountUp.js";
import setTabMenu from "./module/tabMenu.js";
import getSnackCardList from "./module/snackCardList.js";
import setMbtiSection from "./module/snackMbti.js";
import setShareEvent from "./module/shareEvent.js";

onload = () => { scroll({ top: 0, left: 0, behavior: 'smooth' }); }

const data = { participant: 1341513412 }

const participantCount = document.getElementById('participate-number');
countUp(participantCount, data.participant, 1);

setTabMenu();
getSnackCardList();
setMbtiSection();
setShareEvent();