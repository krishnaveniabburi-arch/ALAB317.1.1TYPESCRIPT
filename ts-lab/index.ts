class Vehicle {
  status = "stopped";
  make: string;
  model: string;
  wheels: number | string;

  constructor(make: string, model: string, wheels: number | string) {
    this.make = make;
    this.model = model;
    this.wheels = wheels;
  }
  start() {
    this.status = "started";
  }
  stop() {
    this.status = "stopped";
  }
}

class Car extends Vehicle {
  constructor(make: string, model: string) {
    super(make, model, 4);
  }
}

class MotorCycle extends Vehicle {
  constructor(make: string, model: string) {
    super(make, model, 2);
  }
}

function printStatus(vehicle: Vehicle) {
  if (vehicle.status === "running") {
    console.log("The vehicle is running.");
  } else {
    console.log("The vehicle is stopped.");
  }
}

const myHarley = new MotorCycle("Harley-Davidson", "Low Rider S");
myHarley.start();
printStatus(myHarley);
console.log(myHarley.make.toUpperCase());

const myBuick = new Car("Buick", "Regal");
if (typeof myBuick.wheels === "number") {
myBuick.wheels = myBuick.wheels - 1;
}
else {
  myBuick.wheels = 3;
}

console.log(myBuick.wheels);
console.log(myBuick.model);

// --PART--3
 class NCycle<T> {
  status = "stopped";
  make: T | T[];
  model: T| T[];
  wheels: number | string;

  constructor(make: T | T[], model: T | T[], wheels: number | string) {
   this.make = make;
  this.model = model;
  this.wheels = wheels;

  }
  start() {
    this.status = "started";
  }
  stop() {
    this.status = "stopped";
}
// Create a new method print, which returns nothing and has a single number parameter (either optional or defaulted to 0).

print(index: number = 0) {
  if(!Array.isArray(this.make) && Array.isArray(this.model)) {
    console.log(`this is a ${this.make} ${this.model} NCycle `);
  }
    else if (
      Array.isArray(this.make) && Array.isArray(this.model) && index in this.make && index in this.model) {
        console.log('this NCycle has a  ${this.make[index]} ${this.model[index]} at ${index}');
      }
      else {
        console.log("this NCycle was not created properly");
      }
      
    }
    printAll() {
      if(Array.isArray(this.make) && Array.isArray(this.model)) {
        const minLength = Math.min(this.make.length, this.model.length);
        for(let i = 0; i < minLength; i++) {
          this.print(i);
        }
      } else {
        this.print();
      }
    }
  }


 
 

