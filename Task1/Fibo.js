
class Fiboo{

      fibboo(n){
         if(n<=0){
            console.log("the number is invalid");
            return
         }
         let a=0;
         let b=1;
          const startTime = process.hrtime.bigint();
         for(let i=1;i<=n;i++){
           process.stdout.write(a + "\t");
             let c=a+b;
             a=b;
             b=c;
         }
          const endTime = process.hrtime.bigint();
        const duration = endTime - startTime;

        console.log("\nExecution Time: " + duration + " nanoseconds");
}
}
 //time complexity is O(2^n) and space complexity is O(1)
function fibonaci(n){
    if(n<=1){
            return n;
        }
       return fibonaci(n-1)+fibonaci(n-2);
}


function main(){
    let n=10;
    if(n<=0){
        console.log("number is invalid");
        return;
    }
     console.log("Fibonacci series till " + n);
     //fucntion based 
       for (let i = 0; i < n; i++) {
        process.stdout.write(fibonaci(i) + "\t");
    }
      console.log("\n");

    // Class-based
    const fb = new Fiboo();
    fb.fibboo(n);
}
main();

 