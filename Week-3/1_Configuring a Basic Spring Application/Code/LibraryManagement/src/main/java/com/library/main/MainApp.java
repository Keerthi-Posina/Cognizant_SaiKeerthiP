package com.library.main;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import com.library.service.LibraryService;

public class Launcher {
    public static void main(String[] args) {
        ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
        LibraryService service = (LibraryService) ctx.getBean("bookService");
        service.displayBooks();
    }
}
