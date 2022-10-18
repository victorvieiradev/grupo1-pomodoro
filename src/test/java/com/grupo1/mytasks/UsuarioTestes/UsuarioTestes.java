//
//import org.mockito.Mock;
//import org.mockito.Mockito;
//import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
//import org.springframework.boot.test.context.SpringBootTest;
//import org.springframework.http.ResponseEntity;
//
//import static org.hamcrest.MatcherAssert.assertThat;
//import static org.mockito.Mockito.when;
//
//import java.util.List;
//
//@SpringBootTest
//@AutoConfigureMockMvc
//public class UsuarioTestes extends ExceptionHandlerUsuario {
//  @Mock
//  private UsuarioRepository usuarioRepository;
// @Mock
//
//  private UsuarioService usuarioService;
//
//  @Test
//  public void testInstanceOf() {
//      //nesse exemplo estamos apenas verificando se o retorno de buscarUsuarios
//     //está retornando uma lista de UsuarioModel
//    List<UsuarioModel> todos = usuarioService.buscarUsuarios();
//    Assertions.assertThat(todos.listIterator());
//
// }
//
//  @Test
// public void testSizeMock() throws NullPointerException{
//        nesse exemplo de mock estamos apenas verificando se será retornado pelo menos 1 usuario
//   UsuarioService mock = Mockito.mock(UsuarioService.class);
//           when(mock.buscarUsuarios().size()).thenCallRealMethod();
//
//   Assertions.assertThat(mock.buscarUsuarios()).hasSize(1);
//  }
//
//    @Test
//    private void testSaveUser(){
//        //nesse exemplo estamos verificando se estamos conseguindo salvar com sucesso
//        UsuarioModel mock = Mockito.mock(UsuarioModel.class);
//        UsuarioModel novoUsuario = usuarioService.cadastrarUsuario(mock);
//
//
//        Assertions.assertThat(mock, novoUsuario);
//    }
//
//}
