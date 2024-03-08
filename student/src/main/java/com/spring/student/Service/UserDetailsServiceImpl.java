package com.spring.student.Service;

import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.spring.student.model.User;
import com.spring.student.repository.UserRepository;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {
    
    @Autowired
    private UserRepository userRepository;

    @Override
    @Transactional(readOnly = true)
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        // Log the username being requested
        System.out.println("Attempting to load user by username: " + username);
        
        // Fetch the user from the repository
        User user = userRepository.findByUsername(username);

        if (user == null) {
            // Log an error if the user is not found
            System.err.println("User with username '" + username + "' not found.");
            throw new UsernameNotFoundException("User not found");
        }
        System.out.println("User details retrieved: " + user);

        // Return the UserDetails object
        return new org.springframework.security.core.userdetails.User(
            user.getUsername(),
            user.getPassword(),
            new ArrayList<>()
        );
    }
}
