package com.example.springdemo.test.domain;




import com.example.springdemo.test.domain.comment.CommentResponseDTO;

import java.util.ArrayList;
//import java.util.List;

//import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@ToString
@Setter
@Getter
//@Builder
public class BbsResponseDTO {
    private int id;
    private String title;
    private String content;

    private ArrayList<CommentResponseDTO> comments ;

}
