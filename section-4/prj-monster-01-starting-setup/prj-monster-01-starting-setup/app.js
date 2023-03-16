function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min; //refactored the code to ge the random damge the number gets into a more simplified function that can be reused
}

const battleApp = Vue.createApp({
  data() {
    return {
      playerHealthBar: 100,
      monsterHealthBar: 100,
      currentRound: 0,
      winner: null,
      logMessages: [],
    };
  },
  watch: {
    playerHealthBar(value) {
      if (value <= 0 && this.monsterHealthBar <= 0) {
        // A draw
        this.winner = "draw";
      } else if (value <= 0) {
        //player lost
        this.winner = "monster";
      }
    },
    monsterHealthBar(value) {
      if (value <= 0 && this.playerHealthBar <= 0) {
        // a draw
        this.winner = "draw";
      } else if (value <= 0) {
        // monster lost
        this.winner = "player";
      }
    },
  },
  computed: {
    monsterHealthBarStyles() {
      if (this.monsterHealthBar < 0) {
        return { width: "0%" };
      }
      return {
        width: this.monsterHealthBar + "%",
      };
    },
    playerHealthBarStyles() {
      if (this.playerHealthBar < 0) {
        return { width: "0%" };
      }
      return {
        width: this.playerHealthBar + "%",
      };
    },

    mayUseSpecialAttack() {
      return this.currentRound % 3 !== 0;
    },
  },
  methods: {
    startGame() {
      this.playerHealthBar = 100;
      this.monsterHealthBar = 100;
      this.currentRound = 0;
      this.winner = null;
      this.logMessages = [];
    },
    attackMonster() {
      this.currentRound++;
      const attackValue = getRandomValue(5, 12); //calculate a number between 5 and 12 min a max value ((12 -5)+5 gets value between 5 and 12
      this.monsterHealthBar -= attackValue; //subtract and assign the value to the variable
      this.addLogMessage("player", "attack", attackValue);
      this.attackPlayer();
    },
    attackPlayer() {
      const attackValue = getRandomValue(8, 15);
      this.playerHealthBar -= attackValue; //subtract and assign the value to the variable
      this.addLogMessage("monster", "attack", attackValue);
    },
    specialAttackMonster() {
      this.currentRound++;
      const attackValue = getRandomValue(10, 25);
      this.monsterHealthBar -= attackValue;
      this.addLogMessage("player", "special-attack", attackValue);
      this.attackPlayer();
    },
    healPlayer() {
      this.currentRound++;
      const healValue = getRandomValue(8, 20);
      if (this.playerHealthBar + healValue > 100) {
        this.playerHealthBar = 100;
      } else {
        this.playerHealthBar += healValue;
      }
      this.addLogMessage("player", "heal", healValue);
      this.attackPlayer();
    },
    surrender() {
      this.winner = "monster";
    },
    addLogMessage(who, what, value) {
      this.logMessages.unshift({
        actionBy: who,
        actionType: what,
        actionValue: value,
      });
    },
  },
});
battleApp.mount("#game");
//*push adds to the end of an array and unshft add to the beginning of an array
