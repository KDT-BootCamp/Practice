package com.example.springdemo.test.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.springdemo.test.domain.BbsRequestDTO;
import com.example.springdemo.test.domain.BbsResponseDTO;
//import com.example.springdemo.test.domain.comment.CommentDTO;
import com.example.springdemo.test.domain.comment.CommentRequestDTO;
import com.example.springdemo.test.domain.comment.CommentResponseDTO;
import com.example.springdemo.test.mapper.BbsMapper;

@Service
public class BbsService {

    @Autowired
    private BbsMapper bbsMapper ;

    public void save(BbsRequestDTO params){
        System.out.println("debug >>> service save()" + bbsMapper);
            
        bbsMapper.saveRow(params);
        System.out.println("debug >>> save success!!");
    }

    public void update(BbsRequestDTO request){
        System.out.println("debug >>> service update()" + bbsMapper);
        
        bbsMapper.updateRow(request);
        System.out.println("debug >>> update success!!");
    }

    public void delete(Map<String, Integer> map){
        System.out.println("debug >>> service delete()" + map.get("id"));

        bbsMapper.deleteRow(map);
        System.out.println("debug >>> delete success!!");
    }
 
    public List<BbsResponseDTO> select() {
        System.out.println("debug >>> service select()");
        
        List<BbsResponseDTO> responseDTO = bbsMapper.selectRow();
        
        return responseDTO;
    }

    public Optional<BbsResponseDTO> get(Map<String, Integer> map) {
        System.out.println("debug >>> service get() : " +  map.get("id"));
        
        Optional<BbsResponseDTO> responseDTO = bbsMapper.getRow(map);
        System.out.println("debug >>> responseDTO : " +  responseDTO );

        ArrayList<CommentResponseDTO> list = bbsMapper.commentselectRow(map);
        if(responseDTO.isPresent()){
            responseDTO.get().setComments(list);
        }
        System.out.println("debug >>> comments : " +  responseDTO.get().getComments() );
        return responseDTO;
    }

    public void commentSave(CommentRequestDTO request) {
        System.out.println("debug >>> service commentSave()" +  request);

        bbsMapper.commentRow(request);        
        System.out.println("debug >>> commentSave success!!");
    }

}
