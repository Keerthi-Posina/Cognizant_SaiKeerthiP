package com.cognizant.springlearn.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class WelcomeController {

    private static final Logger LOG = LoggerFactory.getLogger(WelcomeController.class);

    @GetMapping("/welcome")
    public String greet() {
        LOG.debug("Start - greet()");
        String msg = "Hello World!!";
        LOG.debug("End - greet()");
        return msg;
    }
}
