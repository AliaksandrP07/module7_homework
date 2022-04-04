function electricalDevices(name, power, on){
    this.name = name;
    this.power = power;
    this.on = on; 
    }
    
    electricalDevices.prototype.getOn = function(){
         if (this.on === true) {
                 console.log(`${this.name} is on`)
             } else {
                 console.log(`${this.name} is off`)
             }
         }

    electricalDevices.prototype.getPower = function(){
            console.log(`Power of the ${this.name} is ${this.power} watts`)
       }
        
function electroLamp(name, power, on, lampBase){
    this.name = name;
    this.power = power;    
    this.on = on; 
    this.lampBase = lampBase;  
  }
  
  electroLamp.prototype = new electricalDevices()   
  electroLamp.prototype.getLampBase = function(){
    console.log(`${this.name} has ${this.lampBase} lamp base`)
  }
  
  let lamp = new electroLamp('LED lamp', 10, false, 'E 27');
    
  function computer(name, power, on, screenSize){
    this.name = name;
    this.power = power;    
    this.on = on; 
    this.screenSize = screenSize;
  }
  
  computer.prototype = new electricalDevices()  
  computer.prototype.getScreenSize = function(){
    console.log(`${this.name} has ${this.screenSize} screen size`)
  }
  
  let comp = new computer('Laptop', 50, true, '15.6 inches');  
  comp.getScreenSize()
  lamp.getLampBase()
  comp.getPower()
  lamp.getPower()
  comp.getOn()
  lamp.getOn()

  // Модуль 7 задание 4