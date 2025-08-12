package com.cognizant.loan;

public class LoanInfo {
    private String loanId;
    private String loanType;
    private double principalAmount;
    private double monthlyEmi;
    private int loanTenure;

    // Constructor
    public LoanInfo(String loanId, String loanType, double principalAmount, double monthlyEmi, int loanTenure) {
        this.loanId = loanId;
        this.loanType = loanType;
        this.principalAmount = principalAmount;
        this.monthlyEmi = monthlyEmi;
        this.loanTenure = loanTenure;
    }

    // Getters and Setters
    public String getLoanId() { return loanId; }
    public void setLoanId(String loanId) { this.loanId = loanId; }
    public String getLoanType() { return loanType; }
    public void setLoanType(String loanType) { this.loanType = loanType; }
    public double getPrincipalAmount() { return principalAmount; }
    public void setPrincipalAmount(double principalAmount) { this.principalAmount = principalAmount; }
    public double getMonthlyEmi() { return monthlyEmi; }
    public void setMonthlyEmi(double monthlyEmi) { this.monthlyEmi = monthlyEmi; }
    public int getLoanTenure() { return loanTenure; }
    public void setLoanTenure(int loanTenure) { this.loanTenure = loanTenure; }
}