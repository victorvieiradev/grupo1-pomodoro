package com.grupo1.mytasks.UsuarioTestes;
import com.grupo1.mytasks.Model.UsuarioModel;
import com.grupo1.mytasks.Repository.UsuarioRepository;
import com.grupo1.mytasks.Service.UsuarioService;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import static org.hamcrest.CoreMatchers.instanceOf;
import static org.hamcrest.MatcherAssert.assertThat;
import java.util.List;

@SpringBootTest
@AutoConfigureMockMvc
public class UsuarioTestes {
    @Mock
    private UsuarioRepository usuarioRepository;
   @Mock

    private UsuarioService usuarioService;

    @Test
    public void testInstanceOf() {
        //nesse exemplo estamos apenas verificando se o retorno de buscarUsuarios
        //está retornando uma lista de UsuarioModel
        List<UsuarioModel> todos = usuarioService.buscarUsuarios();
        Assertions.assertThat(todos);

    }

//    @Test
//    private void testSizeMock(){
//        //nesse exemplo de mock estamos apenas verificando se será retornado pelo menos 1 usuario
//        UsuarioModel mock = Mockito.mock(UsuarioModel.class);
//        when(mock.size()).thenCallRealMethod();
//
//       Assertions.assertThat(mock).hasSize(1);
//    }
//
//    @Test
//    private void testSaveUser(){
//        //nesse exemplo estamos verificando se estamos conseguindo salvar com sucesso
//        UsuarioModel mock = Mockito.mock(UsuarioModel.class);
//        UsuarioModel novoUsuario = usuarioService.cadastrarUsuario(mock);
//
//        assertThat(mock, novoUsuario);
//    }

}
