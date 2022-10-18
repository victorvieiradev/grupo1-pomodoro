package com.grupo1.mytasks.Controller;

import com.grupo1.mytasks.ExceptionHandler.ExceptionHandlerUsuario;
import com.grupo1.mytasks.Model.UsuarioModel;
import com.grupo1.mytasks.Service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.ConstraintViolationException;
import java.util.List;
import java.util.Optional;

@RestController
public class UsuarioController extends ExceptionHandlerUsuario {

    @Autowired
    private UsuarioService usuarioService;

    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @PostMapping(path = "/usuario")
    @ResponseBody
    public ResponseEntity<UsuarioModel> cadastrarUsuario(@RequestBody UsuarioModel usuarioModel) throws ConstraintViolationException {
        return ResponseEntity.ok(usuarioService.cadastrarUsuario(usuarioModel));
    }

    @GetMapping(path = "/usuario")
    public ResponseEntity<List<UsuarioModel>> buscarUsuarios(){
        return ResponseEntity.ok(usuarioService.buscarUsuarios());
    }

    @GetMapping(path = "/usuario/{cpf}")
    public ResponseEntity<Optional<UsuarioModel>> buscarUsuarioPorId(@PathVariable String cpf){
        return ResponseEntity.ok(usuarioService.buscarUsuarioPorId(cpf));
    }

    @PutMapping(path = "/usuario/{cpf}")
    public ResponseEntity<UsuarioModel> alterarUsuario(@RequestBody UsuarioModel usuarioModel, @PathVariable String cpf){
        return ResponseEntity.ok(usuarioService.alterarUsuario(usuarioModel));
    }

    @DeleteMapping(path = "/usuario/{cpf}")
    public ResponseEntity<List<?>> deletarUsuario(@PathVariable String cpf){
        usuarioService.apagarUsuario(cpf);
        return null;
    }


}
