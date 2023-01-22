
var fs = require('fs');
const { get } = require('http');
var file = fs.readFileSync('./input', 'utf-8');
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
        let list = trans.substring(i, i+4);
        if (findUniqueLength(list) == 4){
            return i + 4;
        }
    }
}
console.log(getTransmissionStart("bvwbjplbgvbhsrlpgdmjqwftvncz"));
console.log(getTransmissionStart("nppdvjthqldpwncqszvftbrmjlhg"));
console.log(getTransmissionStart("nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg"));
console.log(getTransmissionStart("zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw"));

console.log(getTransmissionStart(transmission[0]))