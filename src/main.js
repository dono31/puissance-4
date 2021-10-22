import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


const myMethods = {
  getNewPawn
}


// emplacement du jeton joué sur la colonne columnId
export default function getNewPawn(board, column) {
    for (let i = 0; i < board.length; i++) {
        if (board[i][column] !== 0) {
            return i - 1;
        }
    }
    return 5;
}
/*
// colonnes jouables
function getPlayableColumns(boardArray) {
  // chaque index de boardArray[0] égal à 0
  // ex: [0, 0, 1, 0, 0, 0, 0] retourne [0, 1, 3, 4, 5, 6]
  return playableColumns

// match nul ?
// peut-être inutile
function isDraw(boardArray) {
  // true si getPlayableColumns(boardArray) retourne un tableau vide
  return bool
}*/
