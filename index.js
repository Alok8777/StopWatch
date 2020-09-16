function StopWatch() {
let duration =0;
let runningStatus = false;
let startTime, endTime;

this.start = function(){
  if(runningStatus){
    console.log("StopWatch is already running");
    return;
  }
  runningStatus= true;
  startTime = Date.now();
};


this.stop = function(){
  if(!runningStatus){
    console.log("StopWatch has already stopped");
    return;
  }
  runningStatus = false;
  endTime = Date.now();
  duration= (endTime-startTime)/1000;
};

this.reset= function(){
  duration=0;
  runningStatus=false;
  startTime= null;
  endTime= null;
};

Object.defineProperty(this,"duration",{
  get: function(){
    return duration;
  }
});

}

