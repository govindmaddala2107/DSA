public class ReverseAndCheckForPalindrome {

    public static int reverseNum(int num){
        int reverseNum = 0;
        while (num != 0) {
            reverseNum = reverseNum * 10 + (num % 10);
            num /= 10;
        }
        return reverseNum;
    }

    public static boolean checkNumberIspalindrome(int num){
        int revNum = ReverseAndCheckForPalindrome.reverseNum(num);
        if(revNum == num) {
            System.out.println(num + " is palindrome");
            return true;
        }else{
            System.out.println(num + " is not a palindrome");
            return false;
        }
    }
    public static void main(String[] args) {
        int num = 45654;
        ReverseAndCheckForPalindrome.checkNumberIspalindrome(num);
    }
}
