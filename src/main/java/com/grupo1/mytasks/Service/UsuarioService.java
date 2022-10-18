package com.grupo1.mytasks.Service;

import com.grupo1.mytasks.ExceptionHandler.ExceptionHandlerUsuario;
import com.grupo1.mytasks.Model.UsuarioModel;
import com.grupo1.mytasks.Repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
public class UsuarioService extends ExceptionHandlerUsuario {

//    private BCryptPasswordEncoder passwordEncoder(){
//        return new BCryptPasswordEncoder();
//    }

    @Autowired
    private UsuarioRepository usuarioRepository;

    public UsuarioModel cadastrarUsuario(UsuarioModel usuarioModel){
      //  usuarioModel.setSenha(passwordEncoder().encode(usuarioModel.getSenha()));

        return  usuarioRepository.save(usuarioModel);
    }

    public List<UsuarioModel> buscarUsuarios(){

        if (usuarioRepository.findAll().isEmpty()) {
            throw new NullPointerException();
        } else
        return usuarioRepository.findAll();

    }

    public Optional<UsuarioModel> buscarUsuarioPorId(String cpf){
        if (usuarioRepository.findAll().isEmpty()) {
            throw new NullPointerException();
        } else if (usuarioRepository.findById(cpf).isPresent()){
            return usuarioRepository.findById(cpf);
        }else
            throw new NoSuchElementException();
    }
    public UsuarioModel alterarUsuario(UsuarioModel usuarioModel) {

        if (usuarioRepository.findAll().isEmpty()) {
            throw new NullPointerException();
        } else if (usuarioRepository.findById(usuarioModel.getCpf()).isPresent()) {
            return usuarioRepository.save(usuarioModel);
        }else
            throw new NoSuchElementException();
    }

    public void apagarUsuario(String cpf) {

        if (usuarioRepository.findAll().isEmpty()) {
            throw new NullPointerException();
        } else if(usuarioRepository.findById(cpf).isPresent()){;
            usuarioRepository.deleteById(cpf);
        }else
            throw new NoSuchElementException();
    }
}



