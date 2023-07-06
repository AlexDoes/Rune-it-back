package com.example.tashi.Config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.oauth2.client.oidc.userinfo.OidcUserRequest;
import org.springframework.security.oauth2.client.oidc.userinfo.OidcUserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserService;
import org.springframework.security.oauth2.core.oidc.user.OidcUser;
import org.springframework.security.web.SecurityFilterChain;
import com.example.tashi.repository.UserRepository;
import com.example.tashi.models.User;
import static org.springframework.security.config.Customizer.withDefaults;

import org.springframework.beans.factory.annotation.Autowired;

@Configuration
@EnableWebSecurity
public class SecurityConfig {


    @Autowired
    private UserRepository userRepository;

    

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.
            cors(withDefaults());
        http.oauth2Login(
            oauth2Login ->
                oauth2Login
                    .userInfoEndpoint(userInfoEndpoint ->
                        userInfoEndpoint
                            .oidcUserService(oidcUserService())
                    )
                    .defaultSuccessUrl("https://rune-it-back-l4p0.onrender.com", true)  
        );    
        http
            .csrf( csrf -> csrf.disable() )
            .authorizeHttpRequests(authorizeHttpRequests ->
                authorizeHttpRequests
                    .anyRequest().permitAll()
            );
            http.logout(logout ->
                logout
                    .logoutUrl("/logout")
                    .logoutSuccessUrl("https://rune-it-back-l4p0.onrender.com")
                    .invalidateHttpSession(true)
                    .deleteCookies("JSESSIONID")
                    
            );
            System.out.println("http.build(): ");
        return http.build();
        }
 
    // public OAuth2UserService<OAuth2UserRequest, OAuth2User> oauth2UserService()  {
    //     System.out.println("oauth2UserService");
    //     return this.customOAuth2UserService;        
    // }     

    private OAuth2UserService<OidcUserRequest, OidcUser> oidcUserService() {            
        System.out.println("oidcUserService");
        final OidcUserService delegate = new OidcUserService();

        return (userRequest) -> {
            OidcUser oidcUser = delegate.loadUser(userRequest);
            Object claims = oidcUser.getClaims();
            Object attributes = oidcUser.getAttributes();

            // System.out.println("CLAIMSASJDAKSLDJ SADASADASADSADADADSADsdasd,ans,dma,s.mmd,.masmd.,mas.dms.,md: " + claims);
            
            // System.out.println("attributes: " + attributes);

            String email = oidcUser.getEmail();
            String name = oidcUser.getFullName();
            String id = oidcUser.getIdToken().getTokenValue();

            User possibleUser = userRepository.findByEmail(email);
            if (possibleUser == null) {
                User newUser = new User();
                newUser.setEmail(email);
                newUser.setUsername(name);
                // newUser.setGoogleId(id);
                userRepository.save(newUser);
            }
            // System.out.println("email: " + email);
            // System.out.println("name: " + name);


            return oidcUser;
        };

    }
  
        // private OAuth2UserService<OidcUserRequest, OidcUser> oidcUserService() {
        //     System.out.println("oidcUserService");
        //     final OidcUserService delegate = new OidcUserService();

        //     return (userRequest) -> {
        //         // Delegate to the default implementation for loading a user
        //         OidcUser oidcUser = delegate.loadUser(userRequest);

        //         // The claims object contains the claims that are
        //         // defined in the UserInfo endpoint response
        //         Object claims = oidcUser.getClaims();

        //         // The attributes object contains the attributes that are
        //         // defined in the UserInfo endpoint response
        //         Object attributes = oidcUser.getAttributes();

        //         System.out.println("claims: " + claims);
        //         System.out.println("attributes: " + attributes);

        //         return oidcUser;
        //     };

        // }


            // .oauth2Login(oauth2Login -> oauth2Login.userInfoEndpoint()
            //     .userService(this.oauthUserService())) // use custom OAuth2UserService here
            // .logout(logout -> logout
            //     .logoutUrl("/logout")
            //     .logoutSuccessUrl("/")
            //     .invalidateHttpSession(true)
            //     .deleteCookies("JSESSIONID"))
            // .build();
   
 

        // private OAuth2UserService<OAuth2UserRequest, OAuth2User> oauthUserService() {
        //     DefaultOAuth2UserService delegate = new DefaultOAuth2UserService();
        //     return (request) -> {
        //         OAuth2User user = delegate.loadUser(request);
        //         String email = user.getAttribute("email");
        //         User dbUser = userRepository.findByEmail(email);
        //         System.out.println("email: " + email);
        //         System.out.println("dbUser: " + dbUser);
        //         if (dbUser == null) {
        //             dbUser = new User();
        //             dbUser.setEmail(email);
        //             // Set any other user properties as per your requirement
        //             userRepository.save(dbUser);
        //         }
        //         return user;
        //     };
        // }

    }

            // @Bean
            // public OAuth2UserService<OAuth2UserRequest, OAuth2User> oauthUserService() {
            //     DefaultOAuth2UserService delegate = new DefaultOAuth2UserService();
            //     return (request) -> {
            //         OAuth2User user = delegate.loadUser(request);
            //         String email = user.getAttribute("email");
            //         User dbUser = userRepository.findByEmail(email);
            //         System.out.println("email: " + email);
            //         System.out.println("dbUser: " + dbUser);
            //         if (dbUser == null) {
            //             dbUser = new User();
            //             dbUser.setEmail(email);
            //             // Set any other user properties as per your requirement
            //             userRepository.save(dbUser);
            //         }
            //         return user;
            //     };
            // }


