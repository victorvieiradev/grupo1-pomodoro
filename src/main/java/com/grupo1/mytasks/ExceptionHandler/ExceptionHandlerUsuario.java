package com.grupo1.mytasks.ExceptionHandler;

import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import javax.servlet.http.HttpServletRequest;
import javax.validation.ConstraintViolationException;
import java.util.NoSuchElementException;

@RestControllerAdvice
public class ExceptionHandlerUsuario {

    @ExceptionHandler(DuplicateKeyException.class)
    public ResponseEntity<String> valorDuplicado(DuplicateKeyException duplicateKeyException, HttpServletRequest servletRequest){
        return new ResponseEntity<>("Este usuario ja existe em nosso sistema", HttpStatus.CONFLICT);
    }

    @ExceptionHandler(NullPointerException.class)
    public ResponseEntity<String> listaVazia(NullPointerException nullPointerException, HttpServletRequest httpServletRequest){
        return new ResponseEntity<>("Sua lista está vazia", HttpStatus.NO_CONTENT);
    }
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<String> valorInaceitavel(MethodArgumentNotValidException exception, HttpServletRequest request){
        return new ResponseEntity<>("A formatação ou o numero de caracteres é invalida", HttpStatus.METHOD_NOT_ALLOWED);
    }
    @ExceptionHandler(HttpMessageNotReadableException.class)
    public ResponseEntity<String> exceptionHandlerValorInvalido(HttpMessageNotReadableException exception, HttpServletRequest request){
        return new ResponseEntity<>("O preenchimento é invalido, revise os itens obrigatorios e a formatação", HttpStatus.UNPROCESSABLE_ENTITY);
    }

    @ExceptionHandler(ConstraintViolationException.class)
    public ResponseEntity<String> formatoNaoPermitido(ConstraintViolationException invalidFormatException, HttpServletRequest httpServletRequest) {
        return new ResponseEntity<>("Formatação invalida! Revise os campos...", HttpStatus.FORBIDDEN);
    }

    @ExceptionHandler(NoSuchElementException.class)
    public ResponseEntity<String> objetoInexistente(NoSuchElementException noSuchObjectException, HttpServletRequest httpServletRequest){
        return new ResponseEntity<>("Objeto não encontrado", HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(DataIntegrityViolationException.class)
    public ResponseEntity<String> naoAceito(DataIntegrityViolationException dataIntegrityViolationException, HttpServletRequest httpServletRequest){
        return new ResponseEntity<>("O preenchimento é invalido, revise os itens obrigatorios e a formatação", HttpStatus.BAD_REQUEST);
    }
}
