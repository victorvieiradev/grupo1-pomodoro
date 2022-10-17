package com.grupo1.mytasks.Controller;

import com.grupo1.mytasks.Model.UsuarioModel;
import com.grupo1.mytasks.Service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @PostMapping(path = "/usuario")
    @ResponseBody
    public ResponseEntity<UsuarioModel> cadastrarUsuario(@RequestBody UsuarioModel usuarioModel){
        return ResponseEntity.ok(usuarioService.cadastrarUsuario(usuarioModel));
    }

    @GetMapping(path = "/usuario")
    public ResponseEntity<List<UsuarioModel>> buscarUsuarios(){
        return ResponseEntity.ok(usuarioService.buscarUsuarios());
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
