package com.grupo1.mytasks.TarefasTestes;
import com.grupo1.mytasks.Model.TarefaModel;
import com.grupo1.mytasks.ExceptionHandler.ExceptionHandlerTarefas;
import com.grupo1.mytasks.Repository.TarefaRepository;

import com.grupo1.mytasks.Service.TarefaService;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.List;
import java.util.Optional;

@SpringBootTest
public class TarefasTestes extends ExceptionHandlerTarefas {

    @MockBean
    public TarefaRepository tarefaRepository;

    @Mock
//    private TarefaService tarefaService;  @Test public void testInstance() {
//        String cpf = 54612854655;
//        Optional<TarefaModel> todos = tarefaService.exibirTarefas(cpf);
//        Assertions.assertThat(todos.listIterator());
//        //teste para verificar se retorna uma lista de tarefas
//    }
    private TarefaModel tarefaModel; @Test public  void testeCadastroTarefa() {
        Mockito.when(tarefaRepository.existsById (Mockito.anyLong ())).thenReturn (true);
        tarefaRepository.save (tarefaModel);
        Mockito.verify (tarefaRepository, Mockito.times (1)).save (tarefaModel);
    }
    //teste para verificar o cadastro de tarefas
}
