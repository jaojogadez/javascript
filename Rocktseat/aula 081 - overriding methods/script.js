class Animal{
  constructor(name){
    this.name = name
  }
  makeNoise(){
    console.log("Som de Batman Morcego Genérico", this.name)
  }
}

// extends herda as propridades da classe em seguida
class Dog extends Animal {
  makeNoise(){
    console.log("Au Au", this.name)
  }
}
const dog = new Dog("Belu")
dog.makeNoise()

// extends herda as propridades da classe em seguida
class Cat extends Animal{
  makeNoise(){
    console.log("Miau...", this.name)
  }
  run(){
    console.log("Gato correndo")
  }
}
const cat = new Cat("Mel")
cat.makeNoise()
cat.run()