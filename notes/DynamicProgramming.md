# Dynamic Programming

It is a technique in which a complex problem is solved by:
	

 1. Breaking it into smaller sub-problems.
 2. Solving those sub-problems and simply storing  their results.
 3. Re-use those stored results if sub-problems occurs/overlaps again. (Avoid solving sub-problem again).
 4. Finally using solutions to smaller problems build up solution to complex problem.
 5. It is mainly an optimization over **recursion**.
 6. Dynamic Programming = Recursion + memorization.

## Optimal Substructure

 - A given problem has optimal substructure property if optimal solution of the given problem can be obtained by using the optimal solution of its sub-problems.
 - Example: fib(n) = fib(n-1) + fin(n-2)

## Overlapping Subproblems

 - A given problem has overlapping subproblems property if solution of the given problem is obtained by solving same subproblems multiple times.

## Bottom Up Approach (Tabulation method).

 - We try to solve smaller sub-problems first, use their solution to build on and arrive at solutions to bigger sub-problems.
 - This is also called as **Tabulation method**.
 - The solution is build in a tabular form by using solutions of smaller sub-problems iteratively and generating solutions to bigger sub-problems.

## Top Down Approach (Memoization)

 - It is also called as **Memoization**.
 - We break the large problem into multiple sub-problems.
 - Each of the sub-problems are solved and solutions are remembered.
 - If the sub-problem is solved already, reuse the answer. Else solve the sub-problem and store the result.
 - Thus, it memorizes the solution of the sub-problem to avoid recomputing the value if sub-problem is encountered again.

