package singleton;

public class LogManager {
    private static LogManager uniqueInstance;

    // Private constructor prevents instantiation from other classes
    private LogManager() {
        System.out.println("LogManager instance created.");
    }

    // Public method to return the single instance (lazy initialization)
    public static LogManager fetchInstance() {
        if (uniqueInstance == null) {
            uniqueInstance = new LogManager();
        }
        return uniqueInstance;
    }

    // Method to simulate logging
    public void writeLog(String entry) {
        System.out.println("Log: " + entry);
    }
}
