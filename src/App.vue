<template>
  <div class="container">
    <h1 class="text-center">Human vs Monster</h1>
    <progress-component :humanHelth="humanHelth" :monsterHelth="monsterHelth"></progress-component>
    <hr>
    <div v-show="flag">
        <div class="d-flex justify-content-center mt-4">
        <button class="btn btn-danger btn-block mx-3" @click="resetGame">Reset Game</button>
        <button class="btn btn-dark btn-block" @click="attack">Attack</button>
        <button v-if="humanHelth <= 50" class="btn btn-warning mx-3" @click="humanHelp">Help</button>
      </div>
    
    <information-component :damageData="damageData"></information-component>
    </div>
    <div v-show="!flag">
      <button class="btn btn-success btn-lg btn-block form-control" @click="playGame">Play the Game</button>
    </div>
  </div>
</template>

<script>
import ProgressComponent from './components/ProgressComponent.vue';
import InformationComponent from './components/InformationComponent.vue';
export default {
  name: 'App',
  data() {
    return {
      humanHelth: 100,
      monsterHelth: 100,
      humanDamage: 0,
      monsterDamage: 0,
      damageData : [],
      flag: false
    }
  },
  components: {
    ProgressComponent,
    InformationComponent
  },
  methods: {
    randomNumber() {
      return Math.floor(Math.random() * 10) + 1;
    },
    attack() {
      this.humanDamage = this.randomNumber();
      this.monsterDamage = this.randomNumber();
      this.humanHelth -= this.humanDamage;
      this.monsterHelth -= this.monsterDamage;
      this.addDamageData();
      if(this.humanHelth <= 0 || this.monsterHelth <= 0) {
        if(this.humanHelth >= 0) {
          alert('Human win');
          this.resetGame();
        }else{
          alert('Monster Win');
          this.resetGame();
        }
      }
    },
    resetGame() {
      this.humanHelth = 100;
      this.monsterHelth = 100;
      this.humanDamage = 0;
      this.monsterDamage = 0;
      this.damageData = [];
      this.flag = false;
    },
    humanHelp() {
      let help = this.randomNumber();
      this.humanHelth += help;
    },
    addDamageData() {
      let humanDamageData = "Human Damage: "+this.humanDamage;
      let monsterDamageData = "Monster Damage: "+this.monsterDamage;
      this.damageData.push([humanDamageData, 'green']);
      this.damageData.push([monsterDamageData, 'red']);
    },
    playGame() {
      this.flag = true;
    }
  }
    
  
}
</script>


