public class GetNPrimeNumbers {
    // public GetNPrimeNumbers(int n){
    //     ArrayList arr = new ArrayList<>();
    //     int i = 1;
    //     while(arr.size() != n){
    //         if(GetNPrimeNumbers.isPrime(i)){
    //             arr.add(i);
    //         }
    //         i++;
    //     }
    //     for(int j=0; j < n; j++){
    //         System.out.print(arr.get(j));
    //         System.out.print(" ");
    //     }
    // }

    public void compareNummbers(){
        int a = 150;
        int b = 150;
        System.out.println(a == b);
    }

    public static boolean isPrime(int n){
        for(int i=2; i < n ; i++){
            if(n % i == 0){
                return false;
            }
        }
        return true;
    }

    public static void main(String[] args) {
        // new GetNPrimeNumbers(100);
        GetNPrimeNumbers getNPrimeNumbers = new GetNPrimeNumbers();

        getNPrimeNumbers.compareNummbers();
    }
}
