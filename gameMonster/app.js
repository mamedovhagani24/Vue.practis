function getRandomNumber(max, min) {
  return Math.floor(Math.random() * (max - min) + min);
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
    };
  },
  computed: {
    monsterBarStyle() {
      return { width: this.monsterHealth + "%" };
    },
    playerBarStyle() {
      return { width: this.playerHealth + "%" };
    },
  },
  methods: {
    attackMonster() {
      this.currentRound++;
      const attactValue = getRandomNumber(10, 5);
      this.monsterHealth -= attactValue;
      this.currentRound += 1;
      console.log(this.currentRound);
      this.attackPlayer();
    },
    attackPlayer() {
      const attactValue = getRandomNumber(10, 2);
      this.playerHealth -= attactValue;
    },

    specialAttackMonster() {
      this.currentRound++;
      const attackValue = getRandomNumber(25, 10);
      this.monsterHealth -= attackValue;
      this.attackPlayer();
      console.log(currentRound);
    },
  },
});

app.mount("#game");
