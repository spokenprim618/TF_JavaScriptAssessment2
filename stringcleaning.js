function strClean(arrOfStrs){
    //now string
  let part1= arrOfStrs.toString();
  arrOfStrs=[];
  console.log(part1[0])
    for(i=0;i<=part1.length;i++){
        if(part1[i]=="1"){
            let one= part1[i].replace("1","one")
            let zero= part1[i].replace("","zero")

            arrOfStrs.push(one)
            arrOfStrs.push(zero)
            arrOfStrs.push(space)

            return arrOfStrs
        }
       
    }
}
console.log(strClean(["1 0  1 23 "]))


// DO NOT EDIT THE LINE BELOW THIS
module.exports = strClean;