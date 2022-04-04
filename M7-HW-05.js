class electricalDevices {
    constructor (name, power, on) {    
      this.name = name;
      this.power = power;    
      this.on = on; 
      }
      
      getOn(){
           if (this.on === true) {
                   console.log(`${this.name} is on`)
               } else {
                   console.log(`${this.name} is off`)
               }
           }
  
      getPower(){
              console.log(`Power of the ${this.name} is ${this.power} watts`)
         }
  }
          
  class electroLamp extends electricalDevices {
    constructor (name, power, on, lampBase) {
      super (name, power, on);
      this.lampBase = lampBase;  
    }
       
   getLampBase(){
      console.log(`${this.name} has ${this.lampBase} lamp base`)
    }
  }
  
    let lamp = new electroLamp('LED lamp', 10, false, 'E 14');      
    class computer extends electricalDevices {
      constructor (name, power, on, screenSize) {
      super(name, power, on);
      this.screenSize = screenSize;
    }
     
    getScreenSize(){
      console.log(`${this.name} has ${this.screenSize} screen size`)
    }
  }
    
    let comp = new computer('Laptop', 50, true, '15.6 inches');    
    comp.getScreenSize()
    lamp.getLampBase()
    comp.getPower()
    lamp.getPower()
    comp.getOn()
    lamp.getOn()