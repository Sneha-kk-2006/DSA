class stackusingqueue{
    constructor(){
        this.queue=[]
    }

    push(val){
        this.queue.push(val)
        let size=this.queue.length;
        for(let i=0;i<size-1;i++){
            this.queue.push(this.queue.shift())
        }
    }

    pop(){
        if(this.isEmpty()){
            return "stack empty"
        }
        return this.queue.shift();
    }

    top(){
          if(this.isEmpty()){
            return "stack empty"
        }
        return this.queue[0];
    }

    isEmpty(){
        return this.queue.length===0
    }

    size(){
        return this.queue.length;
    }
}