module.exports = function Car(name,model,type){
    if(typeof(name) == typeof("")){
      this.name = name;
    }
    else{
      this.name = "General";
    }
    if(typeof(model) == typeof("")){
      this.model = model;
    }
    else{
      this.model = "GM";
    }
      this.type = type;

      if(this.name === "Porshe" || this.name === "Koenigsegg"){
        this.numOfDoors = 2;

      }
      else{
        this.numOfDoors = 4;
      }

      this.speed = "0 km/h";

      this.drive = function(number){
        this.gear = number;
        if(this.name === "Porshe")
          this.speed = "250 km/h";
        if(this.name === "MAN")
          this.speed ="77 km/h";
        return this; 
      }

      if(this.type === "trailer"){
        this.numOfWheels = 8;
        this.isSaloon = false;
      }
      else{
        this.numOfWheels = 4;
        this.isSaloon = true;
      }
      

    }


  

  

