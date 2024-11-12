package com.example.springdemo.test.domain;


//import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@ToString
//@Builder
@NoArgsConstructor


public class BbsRequestDTO {
    private int id;
    private String title ;
    private String content ;
}
