import java.util.function.Supplier;

public class SupplierExample {
    public static void main(String[] args) {
        Supplier<String> names = () -> "govind";
        System.out.println(names.get());
    }
}
