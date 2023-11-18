abstract class MachineFactory {
    public abstract createMachine(): Machine;
    public releaseMachine(): string {
        const product = this.createMachine()
        return `turning on :  ${product.start()}`;
    }
}


class TruckFactory extends MachineFactory {
    public createMachine(): Machine {
        return new Truck();
    }
}

class CarFactory extends MachineFactory {
    public createMachine(): Machine {
        return new Car();
    }
}
interface Machine {
    start(): void;
}

class Truck implements Machine {
    start(): void {
        console.log("Truck is starting...")
    }
}

class Car implements Machine {
    start(): void {
        console.log("Beep Beep , A beautiful Car is starting !")
    }
}



// Testing Code ...
const myCarFactory: MachineFactory = new CarFactory();
const customer1Machine: Machine = myCarFactory.createMachine();
customer1Machine.start();
const myTruckFactory: MachineFactory = new TruckFactory();
const customer2Machine: Machine = myTruckFactory.createMachine();
customer2Machine.start()