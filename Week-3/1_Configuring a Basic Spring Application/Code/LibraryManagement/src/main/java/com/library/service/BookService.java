package com.library.service;

import com.library.repository.BookRepository;

public class LibraryService {
    private BookRepository repo;

    // Setter for dependency injection
    public void assignRepository(BookRepository repo) {
        this.repo = repo;
    }

    public void displayBooks() {
        System.out.println("Inside LibraryService...");
        repo.show();
    }
}
