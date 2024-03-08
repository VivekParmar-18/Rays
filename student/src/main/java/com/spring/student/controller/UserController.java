package com.spring.student.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import com.spring.student.Service.UserService;
import com.spring.student.model.User;
import com.spring.student.validator.UserValidator;


@Controller
@CrossOrigin("*")
public class UserController {
    @Autowired
    private UserService userService;

    @Autowired
    private UserValidator userValidator;

    @GetMapping({"/","/registration"})
    public String showRegistrationForm(Model model) {
        model.addAttribute("userForm", new User());
        return "registration";
    }
    
    @RequestMapping(value = "/registration", method = RequestMethod.POST)
    public String registration(@ModelAttribute("userForm") User userForm, BindingResult bindingResult, Model model) {
        userValidator.validate(userForm, bindingResult);
        System.out.println(bindingResult);
        System.out.println(userForm);
        if (bindingResult.hasErrors()) {
            String errorMessage = bindingResult.getFieldError().getDefaultMessage();
            System.out.println(errorMessage);
            model.addAttribute("error", errorMessage);
            return "registration";
        } else {
        userService.save(userForm);
        return "login";
    }
    }

    @RequestMapping(value = "/login", method = RequestMethod.GET)
    public String login(Model model, String error, String logout, @RequestParam(name = "validationError", required = false) String validationError) {
        if (error != null)
            model.addAttribute("error", "Your username and password is invalid.");

        if (logout != null)
            model.addAttribute("message", "You have been logged out successfully.");
        
        if (validationError != null)
            model.addAttribute("validationError", validationError);
        
        System.out.println("in login Controller");
        return "login";
    }
    @GetMapping("/welcome")
    public String welcome(Model model) {
        return "welcome";
    }
   @GetMapping("/logout")
   public String logout(HttpServletRequest request, HttpServletResponse response, Model model) {
       Authentication auth = SecurityContextHolder.getContext().getAuthentication();
       if (auth != null) {
           new SecurityContextLogoutHandler().logout(request, response, auth);
       }
       model.addAttribute("message", "You have been logged out successfully.");
       return "login";
   }
}