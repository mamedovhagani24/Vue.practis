function getRandomNumber(min, max) {
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
    mayUseSpecialAttack() {
      return this.currentRound % 3 !== 0;
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
    },
    healPlayer() {
      this.currentRound++;
      const healValue = getRandomNumber(8, 20);
      if (this.playerHealth + healValue > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += healValue;
        this.attackPlayer();
      }
    },
  },
});

app.mount("#game");
