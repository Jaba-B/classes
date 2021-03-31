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

    // Your implementation here
}

interface CarInterface {
    drive();

    park();

    // Your implementation here
}

class BaseVehicle {

    constructor(
        modelName: string,
        vendorName: string,
        tankCapacity: number,
        fuelConsumption: FuelConsumptionInterface,
    ) {
    }

    // Your implementation here
}

class Car {
    // Your implementation here
}


/*
* Task 2: Counter singleton
*/
class Counter {
    getInstance(){}
    destroy() {}
    increase() {}
    decrease() {}
    getState() {}
}

export {BaseVehicle, Car, Counter};
