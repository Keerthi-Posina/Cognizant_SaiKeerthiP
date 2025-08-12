package ecommerce;

public class Launcher {
    public static void main(String[] args) {
        Product[] itemList = {
            new Product("P101", "Laptop", "Electronics"),
            new Product("P102", "Shoes", "Footwear"),
            new Product("P103", "Keyboard", "Electronics"),
            new Product("P104", "Book", "Education")
        };

        System.out.println("=== Linear Search ===");
        Product foundLinear = SearchUtility.findProductLinear(itemList, "Keyboard");
        System.out.println(foundLinear != null ? "Found: " + foundLinear : "Not found");

        System.out.println("\n=== Binary Search ===");
        SearchUtility.arrangeByName(itemList);
        Product foundBinary = SearchUtility.findProductBinary(itemList, "Keyboard");
        System.out.println(foundBinary != null ? "Found: " + foundBinary : "Not found");
    }
}
