package com.grupo1.mytasks.Service;

import java.util.*;
import com.grupo1.mytasks.Model.TarefaModel;
import com.grupo1.mytasks.Model.UsuarioModel;
import org.junit.jupiter.api.Test;

import static java.lang.System.*;
import static org.junit.jupiter.api.Assertions.*;

class TarefaServiceTest {
    UsuarioService usuarioService;


    @Test
    void salvarTarefa() {
        UsuarioModel usuario = new UsuarioModel();
         usuario.setCpf("11122233344");
         usuario.setEmail("matheus.felipe@zup.com.br");
         usuario.setNome("Matheus");
         usuario.setSenha("theufelipe6");

        System.out.print(usuario);


    }
}