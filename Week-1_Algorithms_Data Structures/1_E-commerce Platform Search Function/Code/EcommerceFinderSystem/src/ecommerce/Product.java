package ecommerce;

public class Product {
    private String id;
    private String name;
    private String type;

    public Product(String id, String name, String type) {
        this.id = id;
        this.name = name;
        this.type = type;
    }

    public String getName() {
        return name;
    }

    public String toString() {
        return "Product[ID=" + id + ", Name=" + name + ", Type=" + type + "]";
    }
}
