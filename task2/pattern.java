public class Pattern {
    public static void main(String[] args) {
          int n=6;
          int k=10;
          pattern1(n);
          pattern2(n);
         pattern3(n);
         pattern4(n);
         pattern5(k);

    }

    private static void pattern5(int n) {
        for(int i=0;i<n;i++){
            for(int j=n-i;j>=1;j--){
                System.out.print(" ");
            }
            for(int j=0;j<=i;j++){
                System.out.print("*");
            }

            for(int k=1;k<=i;k++){
                System.out.print("*");
            }
            System.out.println("");
        }
        for(int i=n-1;i>0;i--){

            for(int j=n-i;j>=0;j--){
                System.out.print(" ");
            }
            for(int k=0;k<i;k++){
                System.out.print("*");
            }
            for(int l=i-2;l>=0;l--){
                System.out.print("*");
            }
            System.out.println(" ");

        }

    }

    private static void pattern4(int n) {
        for(int i=0;i<n;i++){
            for(int j=n-i;j>=1;j--){
                System.out.print(" ");
            }
            for(int j=0;j<=i;j++){
                System.out.print("*");
            }

           for(int k=1;k<=i;k++){
               System.out.print("*");
           }
            System.out.println();
        }
    }

    private static void pattern3(int n) {
        for(int i=0;i<n;i++){
            for(int j=n-i;j>=1;j--){
                System.out.print(" ");
            }
            for(int j=0;j<=i;j++){
                System.out.print("*");
            }

            System.out.println("");

        }
    }

    private static void pattern2(int n) {
        for(int i=0;i<n;i++){
            for(int j=0;j<=i;j++){
                System.out.print("*");
            }
            System.out.println();
        }
    }

    private static void pattern1(int n) {
        for(int i=0;i<n;i++){
            for(int j=n-i;j>=1;j--){
                System.out.print("*");
            }
            System.out.println(" ");
        }
    }
}
