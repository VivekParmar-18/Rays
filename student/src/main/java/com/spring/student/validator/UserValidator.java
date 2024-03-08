package com.spring.student.validator;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.ValidationUtils;
import org.springframework.validation.Validator;

import com.spring.student.Service.UserService;
import com.spring.student.model.User;


@Component
public class UserValidator implements Validator {
    @Autowired
    private UserService userService;

    @Override
    public boolean supports(Class<?> aClass) {
        return User.class.equals(aClass);
    }

    @Override
    public void validate(Object o, Errors errors) {
        User user = (User) o;

        ValidationUtils.rejectIfEmptyOrWhitespace(errors, "username", "NotEmpty", "Username cannot be empty.");
        
        if (userService.findByUsername(user.getUsername()) != null) {
            errors.rejectValue("username", "Duplicate.userForm.username", "Username already exists.");
        }

        ValidationUtils.rejectIfEmptyOrWhitespace(errors, "password", "NotEmpty", "Password cannot be empty.");
        
            if (user.getUsername().length() < 2 || user.getUsername().length() > 32) {
                errors.rejectValue("username", "Length.userForm.username", "Username must be between 2 and 32 characters.");
            }
       
            if (user.getPassword().length() < 8 || user.getPassword().length() > 32) {
                errors.rejectValue("password", "Length.userForm.password", "Password must be between 8 and 32 characters.");
            }
        }

    }
        
    
