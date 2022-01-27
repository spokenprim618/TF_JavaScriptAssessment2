function oddOneOut(arrOfInts){
    let i=0;
    let ans;
    for(i; i<=arrOfInts.length;i++){
        
            let oddEven = arrOfInts[i]%2;
    if(oddEven==1){
            console.log(arrOfInts)

           ans= arrOfInts[i];
            break;

    }else{
            ans =  arrOfInts.indexOf(1);
    }

    }
    return ans

}
console.log(oddOneOut([11]));
//only use output of indexOf when there are no odd numbers if there are idd numbers retrun the actual value not position

// DON'T EDIT THE LINE BELOW THIS COMMENT
module.exports = oddOneOut;