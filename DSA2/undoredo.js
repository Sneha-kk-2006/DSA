class undoredo{
    constructor(){
        this.undostack=[]
        this.redostack=[]
    }


    perform(action){
        this.undostack.push(action)
        this.redostack=[]
    }


    undo(){
        if(this.undostack.length===0){
            console.log("nothing")
        }
        let action=this.undostack.pop()
        this.redostack.push(action)
    }

    redo(){
        if(this.redostack===0){
         console.log("null")
        }
        let action=this.redostack.pop()
        this.undostack.push(action)
    }

    print(){
        console.log("undo ",this.undostack)
        console.log("redo ",this.redostack)
    }
}



let ed=new undoredo()
ed.perform("a")
ed.perform("b")
ed.perform("c")
ed.undo()
ed.redo()
ed.print()