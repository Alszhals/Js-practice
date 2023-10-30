function getSum(i,j){
    return j+i;
}

function isSquare(i){
    return Math.sqrt(i)%1==0;
}

function greeting(fname,surname,age){
    `Hello, my name is ${fname} ${surname} and I am ${age} years old.`;
}

 function getMin(a,b,c){
    return Math.min(a,b,c)
 }

 function evenOrOdd(a,b,c){
    if (a,b,c>0){
    if( a%2==0 && b%2==0 && c%2==0){
        return "even" 
   }else if (a%2!=0 && b%2!=0 &&c%2!=0){
    return "odd"
   }else {return even/odd}
 }
 }

 function inOrOutRange(a,b,c){
    if( c>=a && b<=c){
        return "In range"
    }else{ return "put range"}
 }
  function createString(star,end,num){
    let s=""
    for(let i=star;i<=end;i+=num){
        s+=i+""
    }
    return s.slice(0,-1)

  }

  function rangeSum1(a,b){
    let s=0;
    for (let i=0;i<=b;i++){
        for (j=a;j<a+i;j++){
            s+=j
        }
    }
    return s
  }

  function rangeSum2(a,b){
    let s=0
    for (let i=a;i<=b;i++){
        s+=i
    }
return s
  }

  function seriesSum(a){
    let s=0;
    for (let i=0;i<a;i++){
        s+=1/((i*3)+1);
    }
    const s1=Math.round(s*100)/100;
    return s1.toString();
  }

  function countDigits(n){
    return n.toString().length;
  }


console.log(getSum(5, 3)); 
console.log(isSquare(9)); 
console.log(greeting('Bill', 'Jacobson', 33));
console.log(getMin(5, 9, 7)); 
console.log(evenOrOdd(1, 3, 11)); 
console.log(inOrOutRange(5, 10, 8)); 
console.log(createString(0, 20, 5)); 
console.log(rangeSum1(0, 3)); 
console.log(rangeSum2(5, 10)); 
console.log(seriesSum(5)); 
console.log(countDigits(123654789)); 




