function strClean(arrOfStrs){

   
    for(let i=0;i<=arrOfStrs.length;i++){
    let chars = {'1':'one','0':'zero','':'_'};

    s = arrOfStrs[i].replace(/[0-1]/g ,m =>chars[m]);
    s = s.replace(/[^zero one]/g ,'');
    s = s.replace(/[\s]$/g ,'');
    s = s.replace(/^[\s]/g ,'');

    s = s.replace(/[\s]/g ,'_');


    






return s
    }
}
console.log(strClean([" 1 0  1 23 ","00 0"]))


// DO NOT EDIT THE LINE BELOW THIS
module.exports = strClean;