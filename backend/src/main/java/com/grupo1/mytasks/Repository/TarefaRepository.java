package com.grupo1.mytasks.Repository;

import com.grupo1.mytasks.Model.TarefaModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface TarefaRepository extends JpaRepository<TarefaModel, Long> {
    List<TarefaModel> findByUsuario(String usuario);
}
