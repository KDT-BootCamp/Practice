package com.example.springdemo;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.HashMap;
//import com.example.springdemo.test.domain.BbsRequestDTO;
import com.example.springdemo.test.domain.BbsResponseDTO;
import com.example.springdemo.test.mapper.BbsMapper;

@SpringBootTest
public class MyBatisAppliccationTest {
    
    @Autowired
    private BbsMapper bbsMapper;

    
    /* 
    @Test
    public void saveTest() {
        System.out.println("debug mapper >>> " + bbsMapper);
        BbsRequestDTO request = BbsRequestDTO.builder().title("겁나어려움1").content("구라야1~").build();
    
        bbsMapper.saveRow(request);
        System.out.println("debug >>> save success!!");
    }
    */
    @Test
    public void selectTest() {
        System.out.println("debug mapper >>> " + bbsMapper);
        List<BbsResponseDTO> list = bbsMapper.selectRow();
        for(BbsResponseDTO dto : list){
            System.out.println(dto);
        }
    }

    @Test
    public void selectOne(){
        System.out.println("debug >>> mapper " + bbsMapper);
        Map<String,Integer> map = new HashMap<>();
        map.put("id",1);
        Optional <BbsResponseDTO> response = bbsMapper.getRow(map);
        System.out.println("debug >>> select one " + response);
    }
    @Test
    public void deleteOneRow(){
        System.out.println("debug >>> mapper " + bbsMapper);
        Map<String,Integer> map = new HashMap<>();
        map.put("id",1);
        bbsMapper.deleteRow(map);   
        System.out.println("debug >>> delete success ! ");
    }
}   
