package com.cognizant.springlearn.controller;

import com.cognizant.springlearn.Nation;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

@RestController
public class NationController {

    private static final Logger LOG = LoggerFactory.getLogger(NationController.class);

    @RequestMapping("/nation")
    public Nation getNationIndia() {
        LOG.debug("Start - getNationIndia()");
        ApplicationContext ctx = new ClassPathXmlApplicationContext("country.xml");
        Nation nation = ctx.getBean("country", Nation.class);
        LOG.debug("End - getNationIndia()");
        return nation;
    }
}
