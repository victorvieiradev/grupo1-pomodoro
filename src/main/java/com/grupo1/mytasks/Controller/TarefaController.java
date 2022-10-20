package com.grupo1.mytasks.Controller;

import com.grupo1.mytasks.ExceptionHandler.ExceptionHandlerTarefas;
import com.grupo1.mytasks.Model.TarefaModel;
import com.grupo1.mytasks.Service.TarefaService;
import org.springframework.beans.BeanUtils;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "/tarefas")
@CrossOrigin(origins = "*")
public class TarefaController extends ExceptionHandlerTarefas {
    private final TarefaService tarefaService;

    public TarefaController(TarefaService tarefaService) {
        this.tarefaService = tarefaService;
    }
    @PostMapping
    public ResponseEntity<TarefaModel> salvarTarefa(@RequestBody TarefaModel tarefa ){
        return ResponseEntity.status(HttpStatus.CREATED).body(tarefaService.salvarTarefa(tarefa));
    }
    @GetMapping
    public ResponseEntity<List<TarefaModel>> exibirTarefas(){
        return ResponseEntity.status(HttpStatus.OK).body(tarefaService.exibirTarefas());
    }
    @GetMapping(path = "/{id}")
    public ResponseEntity<?> exibirTarefaPorId(@PathVariable Long id){
        Optional<TarefaModel> tarefaModelOptional = tarefaService.exibirTarefaPorId(id);
        if (tarefaModelOptional.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Tarefa não encontrada");
        }
        return ResponseEntity.ok(tarefaModelOptional.get());
    }

    @DeleteMapping(path = "/{id}")
    public ResponseEntity<?> excluirTarefa(@PathVariable Long id){
        Optional<TarefaModel> tarefaModel = tarefaService.exibirTarefaPorId(id);
        if (tarefaModel.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Não foi encontrado tarefa para ser deletada.");
        }
        tarefaService.excluirTarefa(tarefaModel.get());
        return ResponseEntity.status(HttpStatus.OK).body("Excluída com sucesso.");
    }

    @PutMapping(path = "/editar/{id}")
    public ResponseEntity<?> atualizarTarefa(@PathVariable  Long id, @RequestBody TarefaModel tarefa) {
        Optional<TarefaModel> tarefaModelOptional = tarefaService.exibirTarefaPorId(id);
        if (tarefaModelOptional.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Não existe tarefa para ser atualizada.");
        }
        tarefa.setId(tarefaModelOptional.get().getId());
        return ResponseEntity.status(HttpStatus.OK).body(tarefaService.salvarTarefa(tarefa));
    }
    @PutMapping(path = "/concluir/{id}")
    public ResponseEntity<?> concluirTarefa(@PathVariable Long id ){
        Optional<TarefaModel> tarefaModelOptional = tarefaService.exibirTarefaPorId(id);
        if (tarefaModelOptional.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Não foi encontrado tarefa para ser marcada como concluída.");
        }
        var tarefa = new TarefaModel();
        BeanUtils.copyProperties(tarefaModelOptional.get(), tarefa);
        tarefa.setId(tarefaModelOptional.get().getId());
        tarefa.setConcluido(true);
        tarefaService.salvarTarefa(tarefa);
        return ResponseEntity.status(HttpStatus.OK).body("A tarefa " + tarefa.getTitulo() + " foi concluída.");
    }


}
