package com.example;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.*;

public class MathProcessorTest {

    private MathProcessor processor;

    @Before
    public void initialize() {
        System.out.println("Initializing...");
        processor = new MathProcessor();
    }

    @After
    public void cleanup() {
        System.out.println("Finalizing...");
        processor = null;
    }

    @Test
    public void verifySum() {
        int output = processor.sum(2, 3);
        assertEquals(5, output);
    }

    @Test
    public void verifyProduct() {
        int output = processor.product(4, 5);
        assertEquals(20, output);
    }
}
