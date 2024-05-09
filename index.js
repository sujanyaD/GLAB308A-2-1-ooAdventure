//part 1
const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
      name: "Leo",
      type: "Cat",
    },
    roll(mod = 0) {
      const result = Math.floor(Math.random() * 20) + 1 + mod;
      console.log(`${this.name} rolled a ${result}.`);
    },
  };
  adventurer.inventory.forEach((item) => {
    console.log(item);
  });
  adventurer.companion.companion2 = {
    name: "Frank",
    type: "Flea",
    belongings: ["hat", "sunglasses"],
  };
  console.log(adventurer);
  adventurer.roll();

  //part 2
  class Character {
    constructor (name) {
      this.name = name;
      this.health = 100;
      this.inventory = [];
    }
    roll(mod=0){
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`);
    }
  };
  //create Robin object using the character class

const robin = new Character("Robin");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Character("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];

robin.roll()
robin.companion.roll()
robin.companion.companion.roll()

 // part 3 Class Features
//  class Adventurer extends Character {
//     constructor (name, role) {
//       super(name);
//       // Adventurers have specialized roles.
//       this.role = role;
//       // Every adventurer starts with a bed and 50 gold coins.
//       this.inventory.push("bedroll", "50 gold coins");
//       this.healthpoints=100;
//       this.stamina=100;
//       this.level=1;
//       this.experience=0;
//     }
//     // Adventurers have the ability to scout ahead of them.
//     scout () {
//       console.log(`${this.name} is scouting ahead...`);
//       super.roll();
//     }
//     defend(){
//       console.log(`${this.name} is defending `)
//     }

//   }
//   class companion extends Character{
//     constructor(name,type){
//       super(name);
//       this.name=name;
//       this.type=type;
//       this.healthpoints=50;
//       this.stamina=50;
//     }
// }
// //  created new object 
// const Robin= new adventurer("Robin","Archrer")
// const kangaroo=new companion("kangaroo" ,"Animal")
//  Robin.scout();



  

