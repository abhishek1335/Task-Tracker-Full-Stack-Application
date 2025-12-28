package com.example.tasktracker.service;

import com.example.tasktracker.entity.Task;
import com.example.tasktracker.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class TaskService {

    @Autowired
    private TaskRepository taskRepo;

    public Task addTask(Task task) {
        return taskRepo.save(task);
    }

    public List<Task> getTasksByUser(Long userId) {
        return taskRepo.findByUserId(userId);
    }

    public void deleteTask(Long id) {
        taskRepo.deleteById(id);
    }
}
