abstract class MachineFactory {
    public abstract createMachine(): Machine;
    public releaseMachine(): string {
        const product = this.createMachine()
        return `turning on :  ${product.start()}`;
    }
}


interface Machine {
    start(): void;
}