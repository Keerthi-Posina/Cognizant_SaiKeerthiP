package com.cognizant.account;

public class BankAccount {
    private String accountId;
    private String accountType;
    private double accountBalance;

    // Constructors
    public BankAccount(String accountId, String accountType, double accountBalance) {
        this.accountId = accountId;
        this.accountType = accountType;
        this.accountBalance = accountBalance;
    }

    // Getters and Setters
    public String getAccountId() { return accountId; }
    public void setAccountId(String accountId) { this.accountId = accountId; }
    public String getAccountType() { return accountType; }
    public void setAccountType(String accountType) { this.accountType = accountType; }
    public double getAccountBalance() { return accountBalance; }
    public void setAccountBalance(double accountBalance) { this.accountBalance = accountBalance; }
}