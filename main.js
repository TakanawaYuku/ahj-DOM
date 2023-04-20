/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/playing-area/playing-area.js
class PlayingArea {
  // constructor(element) {
  //   this._element = element;
  // }

  randomMovingGoblin() {
    const goblinImg = document.createElement("img");
    goblinImg.classList.add("playing-area__img");
    goblinImg.src = "https://raw.githubusercontent.com/netology-code/ahj-homeworks/video/dom/pic/goblin.png";
    const playingItemsCollection = document.querySelectorAll(".playing-area__item");
    for (const playingItem of playingItemsCollection) {
      if (playingItem.firstElementChild) {
        playingItem.firstElementChild.remove();
      }
    }
    const randomPlayingItem = Math.floor(Math.random() * playingItemsCollection.length);
    playingItemsCollection[randomPlayingItem].append(goblinImg);
  }
}
;// CONCATENATED MODULE: ./src/js/app.js

document.addEventListener("DOMContentLoaded", () => {
  const playingArea = new PlayingArea(document.querySelector(".playing-area"));
  setInterval(playingArea.randomMovingGoblin, 1000);
});
;// CONCATENATED MODULE: ./src/index.js



/******/ })()
;