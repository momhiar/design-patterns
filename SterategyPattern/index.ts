class Animal{
    constructor(private sound: SoundBehavior, private movingBehavior: MainMovingBehavior){};

    makeSound(): void {
        this.sound.makeSound()
    }
    move(): void {
        this.movingBehavior.move()
    }
}




interface SoundBehavior{
    makeSound(): void;
}

class Woof implements SoundBehavior {
    makeSound(): void {
        console.log("Wooooooooooooof")
    }
}

class Talk implements SoundBehavior {
    makeSound(): void {
        console.log("I can actually Talk")
    }
}
class Silence implements SoundBehavior{
    makeSound(): void {
        // do nothing since it cant make sound
    }
}


//any Other Sound behavior based on animal
//...



interface MainMovingBehavior{
    move(): void;
}
class Walk implements MainMovingBehavior{
    move(): void {
        console.log("Walking ...")
    }
}

class MoveNoWay implements MainMovingBehavior{
    move(): void {
        //do nothing since it can not move
    }
}

class Swim implements MainMovingBehavior{
    move(): void {
        console.log("Swimming")
    }
}

class Fly implements MainMovingBehavior{
    move(): void {
        console.log("Flying on the air")
    }
}


//any other main moving you can think based on Animal
//...





// Testing
const human: Animal = new Animal(new Talk(), new Walk());
human.makeSound();
human.move();


const fish: Animal = new Animal(new Silence(), new Swim())
fish.makeSound(); // should do nothing
fish.move();