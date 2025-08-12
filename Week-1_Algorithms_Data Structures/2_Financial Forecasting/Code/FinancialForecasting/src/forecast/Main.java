package forecast;

public class EntryPoint {
    public static void main(String[] args) {
        double baseAmount = 1000;
        double incrementRate = 0.05;
        int period = 10;

        System.out.println("Recursive Forecast: 9" +
            Predictor.recursiveForecast(baseAmount, incrementRate, period));

        System.out.println("Optimized Forecast: 9" +
            Predictor.optimizedForecast(baseAmount, incrementRate, period));

        double[] cache = new double[period + 1];
        System.out.println("Memoized Forecast: 9" +
            Predictor.memoizedForecast(baseAmount, incrementRate, period, cache));
    }
}
