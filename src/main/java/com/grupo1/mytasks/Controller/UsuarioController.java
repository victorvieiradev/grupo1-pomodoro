package com.grupo1.mytasks.Controller;

import com.grupo1.mytasks.ExceptionHandler.ExceptionHandlerUsuario;
import com.grupo1.mytasks.Model.UsuarioModel;
import com.grupo1.mytasks.Service.UsuarioService;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "*")
public class UsuarioController extends ExceptionHandlerUsuario {


    private final UsuarioService usuarioService;
    private final PasswordEncoder encoder;

    public UsuarioController(UsuarioService usuarioService, PasswordEncoder encoder) {
        this.usuarioService = usuarioService;
        this.encoder = encoder;
    }


    @PostMapping(path = "/usuario")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<UsuarioModel> cadastrarUsuario(@RequestBody @Valid  UsuarioModel usuarioModel) {
        usuarioModel.setSenha(encoder.encode(usuarioModel.getSenha()));
        return ResponseEntity.ok(usuarioService.cadastrarUsuario(usuarioModel));
    }

    @GetMapping(path = "/usuario")
    public ResponseEntity<List<UsuarioModel>> buscarUsuarios(){
        return ResponseEntity.ok(usuarioService.buscarUsuarios());
    }

    @GetMapping(path = "/usuario/login/{email}/{senha}")
    public ResponseEntity<Optional<UsuarioModel>> login(@PathVariable String senha, @PathVariable String email){
        return ResponseEntity.ok(usuarioService.buscarPorEmail(email, senha));
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
