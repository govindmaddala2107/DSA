public class StringPalindrome {
    public static void main(String[] args) {
        String word = "abcdefghijklmnopponmlkjihgfedcba";
        String[] wordArr = word.split("");
        int start = 0;
        int end = wordArr.length - 1;
        while (start < end) {
            if(!wordArr[start].contentEquals(wordArr[end])){
                System.out.println(word + " is not palindrome");
                return;
            }
            start++;
            end--;
        }
        System.out.println(word + " is a palindrome");
    }
}
