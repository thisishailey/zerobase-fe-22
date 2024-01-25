import getGameCard from "./module/gameCard.js";
import { MOUSE_CONTROL_SCORE, ARROW_SPEED_SCORE, TOUCH_NUMBER_SCORE } from "./constants/gameScore.js";

const gameCardInfoList = [
    {
        title: '마우스 컨트롤 게임',
        new: false,
        href: './mouse_control.html',
        src: './public/assets/mouse_control_thumbnail.png',
        storageKey: MOUSE_CONTROL_SCORE
    },
    {
        title: '방향키 게임',
        new: true,
        href: './arrow_speed.html',
        src: './public/assets/arrow_speed_thumbnail.png',
        storageKey: ARROW_SPEED_SCORE
    },
    {
        title: '마우스 컨트롤 게임',
        new: false,
        href: './touch_number.html',
        src: './public/assets/touch_number_thumbnail.png',
        storageKey: TOUCH_NUMBER_SCORE
    },
]

getGameCard(gameCardInfoList);
