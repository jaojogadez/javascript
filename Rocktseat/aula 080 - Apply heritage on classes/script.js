class Animal{
  constructor(name){
    this.name = name
  }
  makeNoise(){
    console.log("Som de Batman Morcego")
  }
}
// extends herda as propridades da classe em seguida
class Dog extends Animal {
  // no have nothing
}
const dog = new Dog()
dog.makeNoise()

class Cat extends Animal{
  // no have nothing
}
const cat = new Cat()
cat.makeNoise()