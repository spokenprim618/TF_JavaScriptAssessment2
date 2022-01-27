function fizzBuzz(start, end, skip){
    let array=[];
    skip = skip.toString()
    for(i = start; i<=end; i++){

        i=i.toString();
    
        console.log(i[0])
        
       
        if(i[0] == skip|| i[1] == skip||i[2] == skip){
            
            array.slice(array[i],1);


        }
        else{
            array.push(i*1);

        }
    };
    return array;
}
console.log(fizzBuzz(1, 20, 1));

// DON'T EDIT THE LINE BELOW THIS COMMENT
module.exports = fizzBuzz;