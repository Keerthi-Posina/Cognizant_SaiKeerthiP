package com.cognizant.loan;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoanInfoController {

    @GetMapping("/loaninfo/{loanId}")
    public LoanInfo fetchLoanInfo(@PathVariable String loanId) {
        return new LoanInfo("H00987987972342", "car", 400000, 3258, 18);
    }
}