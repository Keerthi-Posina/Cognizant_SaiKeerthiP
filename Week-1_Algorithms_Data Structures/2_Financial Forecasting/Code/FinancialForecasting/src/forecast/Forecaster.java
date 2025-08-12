package forecast;

public class Predictor {

    // Recursive method
    public static double recursiveForecast(double baseAmount, double incrementRate, int period) {
        if (period == 0) {
            return baseAmount;
        }
        return recursiveForecast(baseAmount, incrementRate, period - 1) * (1 + incrementRate);
    }

    // Optimized using power function (optional)
    public static double optimizedForecast(double baseAmount, double incrementRate, int period) {
        return baseAmount * Math.pow(1 + incrementRate, period);
    }

    // Memoization approach (for academic interest)
    public static double memoizedForecast(double baseAmount, double incrementRate, int period, double[] cache) {
        if (period == 0) return baseAmount;
        if (cache[period] != 0) return cache[period];
        cache[period] = memoizedForecast(baseAmount, incrementRate, period - 1, cache) * (1 + incrementRate);
        return cache[period];
    }
}
