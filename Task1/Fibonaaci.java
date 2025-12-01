import java.util.Scanner;
 class fiboo{
     //time complexity is o(n) and space is O(1)
     public void fibboo(int n){
         if(n<=0){
             System.out.println(" the number is invalid");
         }
         int a=0;
         int b=1;
long startTime = System.nanoTime();
         for(int i=1;i<=n;i++){
             System.out.print(a+"\t");
             int c=a+b;
             a=b;
             b=c;
         }
          long endTime = System.nanoTime();
        long duration = (endTime - startTime); 

         System.out.println("Execution Time: " + duration + " nanoseconds");
     }
 }
public class Fibonaaci {

    public static void main(String[] args) {

        Scanner sc=new Scanner(System.in);
        System.out.println(" enter the number to find fibonacci series upto n:");
        int n=sc.nextInt();
        if(n<=0){
            System.out.println(" the number is invalid");
        }
        System.out.println("fibonaacis eries till "+n+"");
        //function based
      for(int i=0;i<n;i++){
          System.out.print(fibonaci(i)+"\t");
      }
        System.out.println("");
      //class based
        fiboo fb=new fiboo();
        fb.fibboo(n);

    }

    //time complexity is O(2^n) and space complexity is O(1)
    private  static  int    fibonaci (int n){
        if(n<=1){
            return n;
        }
       return fibonaci(n-1)+fibonaci(n-2);
    }
}
