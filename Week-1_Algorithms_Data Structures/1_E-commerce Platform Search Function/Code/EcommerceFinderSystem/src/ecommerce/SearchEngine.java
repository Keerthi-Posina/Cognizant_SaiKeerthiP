package ecommerce;

import java.util.Arrays;
import java.util.Comparator;

public class SearchUtility {

    public static Product findProductLinear(Product[] items, String searchTerm) {
        for (Product item : items) {
            if (item.getName().equalsIgnoreCase(searchTerm)) {
                return item;
            }
        }
        return null;
    }

    public static Product findProductBinary(Product[] items, String searchTerm) {
        int left = 0, right = items.length - 1;
        while (left <= right) {
            int middle = (left + right) / 2;
            int result = items[middle].getName().compareToIgnoreCase(searchTerm);
            if (result == 0) return items[middle];
            if (result < 0) left = middle + 1;
            else right = middle - 1;
        }
        return null;
    }

    public static void arrangeByName(Product[] items) {
        Arrays.sort(items, Comparator.comparing(Product::getName));
    }
}
