const Cylinder = class {
    constructor(r, h) {
      this.radius = r;
      this.height = h;
      this.Volume = (Math.PI * this.height * this.radius ** 2).toFixed(4);
    }
  };
  
  let newCylinder = new Cylinder(3, 4);
  console.log();
  console.log(newCylinder.Volume);