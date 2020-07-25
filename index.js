function Stopwatch(){
    let startTime,endTime,running,duration = 0; //local variable

    this.start = function(){
        if(running)
            throw new Error('Stopwatch has already started.')
            
        running = true;
        
        startTime = new Date();

        const seconds = (endTime.getTime() - startTime.getTime())/1000;
    };

    this.stop = function(){
        if(!running)
            throw new Error('Stopwatch is not started')
        
        running = false;

        endTime = new Date();

        const seconds = (endTime.getTime() - startTime.getTime())/1000;
        duration += seconds;
    };

    this.reset = function(){
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
    };

    //Read only property
    Object.defineProperty(this,'duration',{
        get: function(){
            return duration;
        }
    })
}
