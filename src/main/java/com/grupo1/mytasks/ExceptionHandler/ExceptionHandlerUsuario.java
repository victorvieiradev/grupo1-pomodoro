package com.grupo1.mytasks.ExceptionHandler;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.web.bind.annotation.ExceptionHandler;

import javax.servlet.http.HttpServletRequest;
import javax.validation.ConstraintViolationException;
import java.util.NoSuchElementException;

public class ExceptionHandlerUsuario {

    @ExceptionHandler(NullPointerException.class)
    public ResponseEntity<String> listaVazia(NullPointerException nullPointerException, HttpServletRequest httpServletRequest){
        return new ResponseEntity<>("Sua lista está vazia", HttpStatus.NO_CONTENT);
    }

    @ExceptionHandler(ConstraintViolationException.class)
    public ResponseEntity<String> formatoNaoPermitido(ConstraintViolationException invalidFormatException, HttpServletRequest httpServletRequest) {
        return new ResponseEntity<>("Formatação invalida! Revise os campos...", HttpStatus.FORBIDDEN);
    }

    @ExceptionHandler(NoSuchElementException.class)
    public ResponseEntity<String> objetoInexistente(NoSuchElementException noSuchObjectException, HttpServletRequest httpServletRequest){
        return new ResponseEntity<>("Objeto não encontrado", HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(HttpMessageNotReadableException.class)
    public ResponseEntity<String> tipoNaoAceito(HttpMessageNotReadableException messageNotReadableException, HttpServletRequest httpServletRequest){
        return new ResponseEntity<>("A formatação não é aceita", HttpStatus.BAD_REQUEST);
    }
}
