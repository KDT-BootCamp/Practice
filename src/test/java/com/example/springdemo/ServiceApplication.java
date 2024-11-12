package com.example.springdemo;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.example.springdemo.test.domain.BbsRequestDTO;
import com.example.springdemo.test.service.BbsService;

@SpringBootTest
public class ServiceApplication {
    
    @Autowired
    private BbsService bbsService;

    @Test
    public void savaService(BbsRequestDTO params){
        System.out.println("debug >>> junit service save" + bbsService);
        bbsService.save(params);
    }

    /* 
    @Test
    public void updateService() {
        System.out.println("debug >>> junit service save" + bbsService);

        BbsRequestDTO request = BbsRequestDTO.builder().id(2).title("응아니야").content("응어쩔").build();
        
        bbsService.update(request);

        System.out.println("debug >>> update ok");
    }
    */
}
