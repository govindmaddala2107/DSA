import java.util.Stack;

public class Validparenthises {
    public static boolean isValid(String s) {
        boolean valid = true;
        Stack<Character> stack = new Stack<>();
        char [] parenthesis = s.toCharArray();
        // if(s.startsWith("{") || s.startsWith("[") || s.startsWith("(")){
        //     stack.push(s.)
        // }
        if(parenthesis[0] == '{' || parenthesis[0] == '[' || parenthesis[0] == '(' ){
            stack.push(parenthesis[0]);
        }

        int start = 1;
        int end = parenthesis.length - 1;
        while(start < end){
            if(!stack.isEmpty()){
                char topEle = stack.pop();
                if(topEle == '{' && parenthesis[end] != '}'){
                    valid = false;
                    break;
                }
                if(topEle == '[' && parenthesis[end] != ']'){
                    valid = false;
                    break;
                }
                if(topEle == '(' && parenthesis[end] != ')'){
                    valid = false;
                    break;
                }
                start++;
                end--;
                stack.push(parenthesis[start]);
            }
        }
        System.out.println(valid);
        return valid;
    }

    public static void main(String[] args) {
        boolean isValid = Validparenthises.isValid("()[]{}");
        
        System.out.println(isValid);
    }
}
