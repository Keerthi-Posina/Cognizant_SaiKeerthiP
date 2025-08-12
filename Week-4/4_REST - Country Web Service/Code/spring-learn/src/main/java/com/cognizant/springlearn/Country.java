package com.cognizant.springlearn;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class Nation {
    private static final Logger LOG = LoggerFactory.getLogger(Nation.class);

    private String isoCode;
    private String countryName;

    public Nation() {
        LOG.debug("Inside Nation Constructor.");
    }

    public String getIsoCode() {
        LOG.debug("Getting ISO code: {}", isoCode);
        return isoCode;
    }

    public void setIsoCode(String isoCode) {
        LOG.debug("Setting ISO code: {}", isoCode);
        this.isoCode = isoCode;
    }

    public String getCountryName() {
        LOG.debug("Getting country name: {}", countryName);
        return countryName;
    }

    public void setCountryName(String countryName) {
        LOG.debug("Setting country name: {}", countryName);
        this.countryName = countryName;
    }

    @Override
    public String toString() {
        return "Nation [isoCode=" + isoCode + ", countryName=" + countryName + "]";
    }
}
