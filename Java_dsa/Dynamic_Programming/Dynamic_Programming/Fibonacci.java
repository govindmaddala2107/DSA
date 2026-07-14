package Dynamic_Programming;

import java.time.Duration;

public class Fibonacci {

    public static int getNthFibonacciNumber(int n) {
        if (n == 0)
            return 0;
        if (n == 1)
            return 1;
        int left = getNthFibonacciNumber(n - 1);
        int right = getNthFibonacciNumber(n - 2);
        return left + right;
    }

    public static int bottomUpFibonacci(int n) {
        int[] table = new int[n + 1];
        table[0] = 0;
        table[1] = 1;
        for (int i = 2; i <= n; i++) {
            table[i] = table[i - 1] + table[i - 2];
        }
        return table[n];
    }

    public static int topDownFibonacci(int memo[], int n) {
        if (memo[n] == 0) {
            if (n < 2 && n >= 0) {
                memo[n] = n;
            } else {
                int right = topDownFibonacci(memo, n - 1);
                int left = topDownFibonacci(memo, n - 2);
                memo[n] = right + left;
            }
        }
        return memo[n];
    }

    public static void main(String[] args) {
        long start = System.currentTimeMillis();
        System.out.println(Fibonacci.getNthFibonacciNumber(10));
        long end = System.currentTimeMillis();
        // System.out.println(Duration.ofMillis(end).minusNanos(start).toSeconds());
        System.out.println(Fibonacci.bottomUpFibonacci(10));
        int[] memo = new int[11];
        System.out.println(Fibonacci.topDownFibonacci(memo, 10));
    }
}
