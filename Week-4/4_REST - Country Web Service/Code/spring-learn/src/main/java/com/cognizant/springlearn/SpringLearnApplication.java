package com.cognizant.springlearn;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.SpringApplication;

@SpringBootApplication
public class SpringLearnLauncher {

    private static final Logger LOG = LoggerFactory.getLogger(SpringLearnLauncher.class);

    public static void main(String[] args) {
        SpringApplication.run(SpringLearnLauncher.class, args);
        showNation();
    }

    public static void showNation() {
        
    }
}
