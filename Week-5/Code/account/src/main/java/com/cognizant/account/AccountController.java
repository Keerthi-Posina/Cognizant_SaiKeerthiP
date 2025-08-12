package com.cognizant.account;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BankAccountController {

    @GetMapping("/bankaccounts/{accountId}")
    public BankAccount fetchAccountInfo(@PathVariable String accountId) {
        return new BankAccount("00987987973432", "savings", 234343);
    }
}