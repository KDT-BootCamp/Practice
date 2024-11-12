package com.example.springdemo.test.ctrl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
//import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.springdemo.test.domain.BbsRequestDTO;
import com.example.springdemo.test.domain.BbsResponseDTO;
import com.example.springdemo.test.domain.comment.CommentRequestDTO;
import com.example.springdemo.test.service.BbsService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;

//import io.swagger.v3.oas.annotations.parameters.RequestBody;
//import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;






@RestController
// @RestController는 비동기통신용 Controller
@RequestMapping("api/bbs")
@Tag(name="BBS-API", description = "SWAGGER 연습")
public class BbsController {

    @Autowired
    public BbsService bbsService ;

    @RequestMapping(value="/test", method =RequestMethod.GET)

    /* 
    public ResponseEntity<BbsResponseDTO> test() {
        BbsResponseDTO resposne = BbsResponseDTO.builder().id(1).title("test")
        .content("test").build();

        return new ResponseEntity<>(resposne, HttpStatus.OK) ;
    }
    */
    
    @DeleteMapping("delete/{id}")
    @Operation(summary = "게시글 삭제", description = "게시글 삭제하세요")
    public ResponseEntity<String> delete(@PathVariable(name="id") Integer id) {
        System.out.println("debug >>> bbs controller clinet path /delete");
        System.out.println("debug >>> id param value " + id);
        
        Map<String, Integer> map = new HashMap<>();
        map.put("id", id);
        bbsService.delete(map);

        return new ResponseEntity<>("Good",HttpStatus.OK);
        /* 
        Map<String,Integer> map = new HashMap<>();
        map.put("id", id);
        
        bbsService.delete(map);

        return new ResponseEntity<>("try", HttpStatus.OK) ;
        */
        }


    @GetMapping("/list")
    public ResponseEntity<List<BbsResponseDTO>> getList() {
        
        List<BbsResponseDTO> list = bbsService.select();

        System.out.println("debug >>> List : " + list);
        
        System.out.println("debug >>> select success!!");

        return new ResponseEntity<>(list,HttpStatus.OK);


        /* 
        List<BbsResponseDTO> bbsList = bbsService.select();

        System.out.println("debug >>> bbsList : " + bbsList);
        
        System.out.println("debug >>> select success!!");

        return new ResponseEntity<>(bbsList, HttpStatus.OK);
        */
    }
    
    @GetMapping("/get/{id}")
    public ResponseEntity<Object> getInfo(@PathVariable(name="id") Integer id) {
        System.out.println("debug >>> bbs controller clinet path /select");
        System.out.println("debug >>> id param value " + id);
        
        Map<String,Integer> map = new HashMap<>();
        map.put("id", id);

        Optional<BbsResponseDTO> response = bbsService.get(map);

        if(response.isPresent()){
            System.out.println("debug >>> get success!!");
            return new ResponseEntity<>(response,HttpStatus.OK);
        } else {
            System.out.println("debug >>> get fail!!");
            return new ResponseEntity<>("Fail",HttpStatus.NOT_FOUND);
        }
        /*
        Map<String,Integer> map = new HashMap<>();
        map.put("id", id);
        
        Optional<BbsResponseDTO> responseDTO = bbsService.get(map);
        

        if(responseDTO.isPresent()){
            System.out.println("debug >>> get success!!");
            return new ResponseEntity<>(responseDTO.get(), HttpStatus.OK);
        } else {
            System.out.println("debug >>> get fail!!");
            return new ResponseEntity<>("안돼 자샤", HttpStatus.NOT_FOUND);
        }
        */
        }

/*     @PostMapping("/post")
    public ResponseEntity<String> save(@RequestParam("title") String title, @RequestParam("content") String content) {
        BbsRequestDTO params = BbsRequestDTO.builder().title(title).content(content).build();
        
        System.out.println(">>>>>>>>>>>>>>>> request dto, " + params);
        
            return null;
    }   
*/    
    
    @GetMapping("/post")
    public ResponseEntity<String> save(BbsRequestDTO params) {
        System.out.println("debug >>> bbs controller client path /post");
        System.out.println(">>>>>>>>>>>>>>>> request dto, " + params);
        
        bbsService.save(params);

        return new ResponseEntity<>("Success",HttpStatus.OK);


        /*
        bbsService.save(params);
        return new ResponseEntity<String>("nice",HttpStatus.OK);
        */
        }   

    @PostMapping("/comment/post")
    public ResponseEntity<String> commetPost(CommentRequestDTO comment) {
        System.out.println("debug >>> bbs controller client path /comment/post");
        System.out.println(">>>>>>>>>>>>>>>> request dto, " + comment);

        bbsService.commentSave(comment);

        return new ResponseEntity<String>(comment.getBbsId() + "에 타임라인 등록완료",HttpStatus.OK);

        /*
        bbsService.commentSave(comment);

        return new ResponseEntity<String>(comment.getBbsId()+"에 타임라인 등록완료",HttpStatus.OK);
        */
    }
    
    /* 
    @PostMapping("/get/info/{id}")
    public ResponseEntity<BbsResponseDTO> gets(@PathVariable(name="id") Integer id) {
        System.out.println("debug >>> bbs controller clinet path /select comment");
        System.out.println("debug >>> id param value " + id);
        Map<String,Integer> map = new HashMap<>();
        map.put("id", id);
        
        BbsResponseDTO responseDTO = bbsService.get(map);
        
        System.out.println("debug >>> get success!!");

        return new ResponseEntity<>(responseDTO, HttpStatus.OK);
        }*/
    @PutMapping("update/{id}")
    public ResponseEntity<Void> update(BbsRequestDTO request){

        bbsService.update(request);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    
    
    
}




