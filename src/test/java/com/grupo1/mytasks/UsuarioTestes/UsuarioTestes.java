
package com.grupo1.mytasks.UsuarioTestes;

import com.grupo1.mytasks.ExceptionHandler.ExceptionHandlerUsuario;
import com.grupo1.mytasks.Model.UsuarioModel;
import com.grupo1.mytasks.Repository.UsuarioRepository;
import com.grupo1.mytasks.Service.UsuarioService;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;


import java.util.List;

import static org.mockito.Mockito.when;

@SpringBootTest
public class UsuarioTestes extends ExceptionHandlerUsuario {

    @MockBean
  private UsuarioRepository usuarioRepository;



 @Mock
  private UsuarioService usuarioService;  @Test public void testInstanceOf() {
    List<UsuarioModel> todos = usuarioService.buscarUsuarios();
    Assertions.assertThat(todos.listIterator());
    //teste para verificar se retorna uma lista de usuários
 }

    private UsuarioModel usuarioModel; @Test public  void testeCadastroUsuario() {
        Mockito.when(usuarioRepository.existsById (String.valueOf(Mockito.anyLong ()))).thenReturn (true);
        usuarioRepository.save (usuarioModel);
        Mockito.verify (usuarioRepository, Mockito.times (1)).save (usuarioModel);
        //teste para verificar cadastro de usuário
    }

  }
