package com.grupo1.mytasks.Controller;

import com.grupo1.mytasks.Model.UsuarioModel;
import com.grupo1.mytasks.Repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping(path = "/entrar")
@CrossOrigin(origins = "*")
public class LoginController {
    private final UsuarioRepository usuarioRepository;

    public LoginController(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }
    @PostMapping
    public ResponseEntity<String> fazerLogin(@RequestBody UsuarioModel usuarioModel){
        Optional<UsuarioModel> usuarioModelOptional = usuarioRepository.findByEmail(usuarioModel.getEmail());
        if (usuarioModelOptional.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Usuário não cadastrado");
        }
        if (!usuarioModel.getSenha().equals(usuarioModelOptional.get().getSenha())){
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body("Senha inválida");
        }
        return ResponseEntity.status(HttpStatus.OK).body("logado "+ usuarioModelOptional.get().getCpf());
    }

}
