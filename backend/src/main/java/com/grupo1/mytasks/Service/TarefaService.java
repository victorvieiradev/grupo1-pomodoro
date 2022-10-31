package com.grupo1.mytasks.Service;

import com.grupo1.mytasks.Model.TarefaModel;
import com.grupo1.mytasks.Repository.TarefaRepository;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;

@Service
public class TarefaService {
    private final TarefaRepository tarefaRepository;

    public TarefaService(TarefaRepository tarefaRepository) {
        this.tarefaRepository = tarefaRepository;
    }
    @Transactional
    public TarefaModel salvarTarefa(TarefaModel tarefa ){
        return tarefaRepository.save(tarefa);
    }
    public Optional<TarefaModel> exibirTarefas(String cpf){
        return tarefaRepository.findByCpf(cpf);
    }

    public Optional<TarefaModel> exibirTarefaPorId(Long id){
        return tarefaRepository.findById(id);
    }
    public void excluirTarefa(TarefaModel tarefaModel ){
        tarefaRepository.delete(tarefaModel);
    }
}
