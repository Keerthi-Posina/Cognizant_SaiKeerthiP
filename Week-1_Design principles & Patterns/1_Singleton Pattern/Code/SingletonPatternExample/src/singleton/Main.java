package singleton;

public class Launcher {
    public static void main(String[] args) {
        LogManager logA = LogManager.fetchInstance();
        LogManager logB = LogManager.fetchInstance();

        logA.writeLog("First log entry");
        logB.writeLog("Second log entry");

        if (logA == logB) {
            System.out.println("Both LogManager instances are the same (Singleton verified).");
        } else {
            System.out.println("LogManager instances are different (Singleton failed).");
        }
    }
}
