package com.example.tasktracker.service;

import com.example.tasktracker.entity.User;
import com.example.tasktracker.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepo;

    public User register(User user) {
        return userRepo.save(user);
    }
}
