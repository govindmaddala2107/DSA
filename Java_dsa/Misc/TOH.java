public class TOH {
    public static void TowerOfHanoi(int n, String src, String dest, String aux) {
        if (n == 1) {
            System.out.println(src + " ==> " + dest);
        } else {
            TowerOfHanoi(n - 1, src, aux, dest);
            System.out.println(src + " ==> " + dest);
            TowerOfHanoi(n - 1, aux, dest, src);
        }
    }

    public static void main(String[] args) {
        TOH.TowerOfHanoi(5, "src", "dest", "aux");
    }
}
