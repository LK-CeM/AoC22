var fs = require('fs');
const { get } = require('http');
var file = fs.readFileSync('../input', 'utf-8');
var transmission = file.split(/\r?\n/);

function findUniqueLength(str){
    let uniq = "";
    for(let i = 0; i < str.length; i++){
      if(uniq.includes(str[i]) === false){
        uniq += str[i];
      }
    }
    return uniq.length;
  }
function getTransmissionStart(trans){

    for (let i = 0; i < trans.length; i += 1){
        let list = trans.substring(i, i+14);
        if (findUniqueLength(list) == 14){
            return i + 14;
        }
    }
}
console.log(getTransmissionStart("mjqjpqmgbljsphdztnvjfqwrcgsmlb"));
console.log(getTransmissionStart(transmission[0]))