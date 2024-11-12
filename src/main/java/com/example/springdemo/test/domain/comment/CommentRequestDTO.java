package com.example.springdemo.test.domain.comment;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
@Getter
@Setter
@NoArgsConstructor
@ToString
public class CommentRequestDTO {
    
    private String content ;
    private Integer bbsId ;

}
