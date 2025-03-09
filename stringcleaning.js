function strClean(arrOfStrs){
    function thing(arrOfStrs){
    for(let i=0;i<=arrOfStrs.length;i++){
    let dict = ['zero','one'];
    let x = c => dict[c];
    console.log(arrOfStrs[i])
        let s = arrOfStrs.replace(/[0-1]/g,x);
    s = s.replace(/[^zero one]/g ,'');
    s = s.replace(/[\s]+$/g ,'');
    s = s.replace(/^[\s]/g ,'');
    s = s.replace(/[\s]/g ,'_');
    return s;

    }
}
return arrOfStrs.map(thing);

}
console.log(strClean([" 1 1  0 23  ","00 0"]))


// DO NOT EDIT THE LINE BELOW THIS
module.exports = strClean;