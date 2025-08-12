package com.example;

import org.junit.Test;
import static org.junit.Assert.*;

public class AssertionDemo {

    @Test
    public void validateAssertions() {
        // Assert equals
        assertEquals(5, 2 + 3);

        // Assert true
        assertTrue(5 > 3);

        // Assert false
        assertFalse(5 < 3);

        // Assert null
        assertNull(null);

        // Assert not null
        assertNotNull(new Object());
        
     // Assert same (object reference)
        String strA = "abc";
        String strB = strA;
        assertSame(strA, strB);

        // Assert not same
        String strX = new String("abc");
        String strY = new String("abc");
        assertNotSame(strX, strY);  // Different objects with same value

    }
}
