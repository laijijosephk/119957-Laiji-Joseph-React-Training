// Creating Class
class Training {
  constructor(trainingName, trainingDuration, trainingCost) {
    this.trainingName = trainingName;
    this.trainingDuration = trainingDuration;
    this.trainingCost = trainingCost;
  }

  display() {
    console.log(
      `Training Name: ${this.trainingName}\nTraining Duration: ${this.trainingDuration}\nTraining Cost: ${this.trainingCost} `
    );
  }
}
// Creating Object
let t1 = new Training("ReactJS", 40, 5000.00)
let t2 = new Training("Angular", 60, 6000.00)
t1.display()
t2.display()