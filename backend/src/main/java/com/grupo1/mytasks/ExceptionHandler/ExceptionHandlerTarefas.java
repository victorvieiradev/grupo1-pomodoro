package com.grupo1.mytasks.ExceptionHandler;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;

import javax.servlet.http.HttpServletRequest;
import java.util.NoSuchElementException;

public class ExceptionHandlerTarefas {

    @ExceptionHandler(NoSuchElementException.class)
    public ResponseEntity<String> tarefaNaoEncontrada(NoSuchElementException notFoundException, HttpServletRequest httpServletRequest){
        return new ResponseEntity<>("Tarefa não encontrada", HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(NullPointerException.class)
    public ResponseEntity<String> listaVazia(NullPointerException nullPointerException, HttpServletRequest httpServletRequest){
        return new ResponseEntity<>("Sua lista está vazia", HttpStatus.NO_CONTENT);
    }
}
