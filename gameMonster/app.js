function getRandomNumber(max, min) {
  return Math.floor(Math.random() * (max - min) + min);
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
    };
  },
  methods: {
    attackMonster() {
      const attactValue = getRandomNumber(10, 5);
      this.monsterHealth -= attactValue;

      if (this.monsterHealth < 0) this.monsterHealth = 100;

      console.log(this.monsterHealth);
      this.attackPlayer();
    },
    attackPlayer() {
      const attactValue = getRandomNumber(10, 2);
      this.playerHealth -= attactValue;

      console.log(this.playerHealth);
    },
  },
});

app.mount("#game");
