package com.ecommerce.config;


import java.util.Arrays;
import java.util.Collections;

import org.springframework.context.annotation.Bean;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;

@Configuration
public class AppConfig {

	@Bean
	public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
		System.out.println("HELLLLLLLLOOOOOOOOOOOOOOOOOOOOOOOOO");
	    http
	        .sessionManagement(sessionManagement -> sessionManagement
	            .sessionCreationPolicy(SessionCreationPolicy.STATELESS))
	        .authorizeHttpRequests(authorize -> authorize
	            .requestMatchers("/api/**").authenticated()
	            .anyRequest().permitAll())
	        .addFilterBefore(new JwtValidator(), UsernamePasswordAuthenticationFilter.class)
	        .csrf(csrf -> csrf.disable())
	        .cors(cors -> cors.configurationSource(request -> {
	            CorsConfiguration cfg = new CorsConfiguration();
	            cfg.setAllowedOrigins(Arrays.asList(
	                "http://localhost:3000",
	                "http://localhost:4200"
	            ));
	            cfg.setAllowedMethods(Collections.singletonList("*"));
	            cfg.setAllowCredentials(true);
	            cfg.setAllowedHeaders(Collections.singletonList("*"));
	            cfg.setExposedHeaders(Arrays.asList("Authorization"));
	            cfg.setMaxAge(3600L);
	            return cfg;
	        }))
	        .formLogin(login -> login.disable())  // Disables the default login page
	        .httpBasic(basic -> basic.disable());

	    return http.build();
	}

	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
	
	
}