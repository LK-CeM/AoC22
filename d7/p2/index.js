var fs = require('fs');
const { get } = require('http');
var file = fs.readFileSync('../input', 'utf-8');
var transmission = file.split(/\r?\n/);

class Directory{
    constructor(name, parent){
        this.name = name;
        this.size = 0;
        this.children = [];
        this.parent = parent;
    }
    addFileToSize(fileSize){
        this.size += fileSize;
    }
    updateSize(){
            for (let i = 0; i < this.children.length;i++){
                let ret = this.children[i].updateSize();
                this.size += ret;
            }
        return this.size;
    }
}


let dir = new Directory("home", null);
for (let i in transmission){
    //console.log("dir is : ", dir.name)
    //console.log("dir children are: ", dir.children)
    if(transmission[i].startsWith("$ cd ")){
        if (!transmission[i].endsWith("..")){
            //console.log("checking if child can be found:-", transmission[i].substring(5).trim());
            for (let j in dir.children){
                //console.log("j is: ", j)
                if (dir.children[j].name == transmission[i].substring(5).trim()){
                    //console.log("dir changed to child : ", dir.children[j].name)
                    dir = dir.children[j];
                    break;
                }
            }
        }else {
            //console.log("changing dir to parent", dir.parent)
            dir = dir.parent;
            
        }

    }
    else if (transmission[i].startsWith("$ ls")){
        continue;
    }
    else if (transmission[i].startsWith("dir ")){
        dir.children.push(new Directory(transmission[i].substring(4).trim(), dir));
        //console.log(transmission[i].substring(4).trim(), "got pushed as child");
    }
    else{
        let size = transmission[i].split(' ').map(Number)[0];
        dir.addFileToSize(size);
        //console.log("added size:",size)
    }
}
while(dir.parent != null){
    dir = dir.parent;
}
dir.updateSize();
let usedSpace = dir.size;
let queue = [];
let list = [];
for (let i in dir.children){
    queue.push(dir.children[i]);
    while (queue.length > 0){
        if (70000000 - usedSpace + queue[0].size >= 30000000){
            
            console.log(queue[0].size);
            list.push(queue[0].size)
        }
        for (let j in queue[0].children){
            queue.push(queue[0].children[j]);
        }
        queue.shift();
    }
}
console.log(Math.min(...list))