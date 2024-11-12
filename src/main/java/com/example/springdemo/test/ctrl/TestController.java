package com.example.springdemo.test.ctrl;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestMethod;
//import org.springframework.web.bind.annotation.ResponseBody;

//import com.example.springdemo.test.domain.BbsResponseDTO;



@Controller
public class TestController {
    
    @RequestMapping("/index.kdt")
    public String index() {
        System.out.println("debug >>> test controller index client path : /index.kdt");
        return "index";
    }
    
    /*
    @RequestMapping(value="/api/bbs//ctrl/test",method=RequestMethod.GET) 
    @ResponseBody
    // @Controller 클래스에도 @ResponseBody를 선언하면 비동기통신이 가능, 따라서 객체 반환 가능
   
    public BbsResponseDTO test() {
       BbsResponseDTO resposne = BbsResponseDTO.builder().id(1).title("test")
        .content("test").build();

        return resposne ;
    }
    */


}
