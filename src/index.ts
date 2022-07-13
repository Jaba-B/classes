enum VehicleStatus {
    STOP = 'STOP',
    WORK = 'WORK',
}

interface FuelConsumptionInterface {
    start: number,
    work: number,
}

interface BaseVehicleInterface {
    readonly modelName: string;
    readonly vendorName: string;
    readonly fuel: number;

    startEngine(): void;

    stopEngine(): void;

    getEngineStatus(): VehicleStatus;

    startEngine(): void;

    stopEngine(): void;

    getEngineStatus(): VehicleStatus;

    refuel(): void;
}

interface CarInterface {
    drive();

    park();

    // Your implementation here
}

class BaseVehicle implements BaseVehicleInterface {
    modelName: string;
    vendorName: string;
    fuel: number = 0;

    timeout;
    tankCapacity: number;
    fuelConsumption: FuelConsumptionInterface;
    vehicleStatus: VehicleStatus = VehicleStatus.STOP;

    constructor(
        modelName: string,
        vendorName: string,
        tankCapacity: number,
        fuelConsumption: FuelConsumptionInterface,
    ) {
        this.modelName = modelName;
        this.vendorName = vendorName;
        this.tankCapacity = tankCapacity;
        this.fuelConsumption = fuelConsumption;
    }

    startEngine(): void {
        this.vehicleStatus = VehicleStatus.WORK;
        this.fuel -= this.fuelConsumption.start;
        this.timeout = setTimeout(() => {
            this.fuel -= this.fuelConsumption.work;
        }, 1000);
    }

    stopEngine(): void {
        clearTimeout(this.timeout);
        this.vehicleStatus = VehicleStatus.STOP;
    }

    getEngineStatus(): VehicleStatus {
        return this.vehicleStatus;
    }

    refuel(): void {
        this.fuel = this.tankCapacity;
    }
}

class Car extends BaseVehicle implements CarInterface{
    constructor(modelName: string, vendorName: string) {
        super(modelName, vendorName, 40, { start: 3, work: 1 });
    }

    drive() {
        this.startEngine();
    }

    park() {
        this.stopEngine();
    }
}


/*
* Task 2: Counter singleton
*/
class Counter {

    private static instance: Counter;

    count: number;

    private constructor(count: number) {
        this.count = count;
    }

    static getInstance() {
        if (!Counter.instance) {
            Counter.instance = new Counter(0);
        }

        return Counter.instance;
    }

    static destroy() {
        Counter.getInstance().count = 0;
    }

    increase() {
        this.count += 1;
    }

    decrease() {
        this.count -= 1;
    }

    getState() {
        return this.count;
    }
}

export {BaseVehicle, Car, Counter};
