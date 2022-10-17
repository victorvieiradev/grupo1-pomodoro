package com.grupo1.mytasks.Service;

import com.grupo1.mytasks.Model.UsuarioModel;
import com.grupo1.mytasks.Repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UsuarioService {

    private BCryptPasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }

    @Autowired
    private UsuarioRepository usuarioRepository;

    public UsuarioModel cadastrarUsuario(UsuarioModel usuarioModel){
        usuarioModel.setSenha(passwordEncoder().encode(usuarioModel.getSenha()));
        return  usuarioRepository.save(usuarioModel);
    }

    public List<UsuarioModel> buscarUsuarios(){

        return usuarioRepository.findAll();

    }

    public UsuarioModel alterarUsuario(UsuarioModel usuarioModel) {

    return usuarioRepository.save(usuarioModel);
    }

    public void apagarUsuario(String cpf) {
        usuarioRepository.deleteById(cpf);
        if (usuarioRepository.findAll().isEmpty()) {
            throw new NullPointerException();
        }
    }
}



