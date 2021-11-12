// function to check if the number is prime or not

function isPrime(num) {
    for(var i = 2; i < num; i++)
        {
        if(num % i === 0) 
            {
             return false;    
            }
        }
        return num > 1;

      
  }
  console.log(isPrime(4));
