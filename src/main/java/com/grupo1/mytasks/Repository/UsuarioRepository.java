package com.grupo1.mytasks.Repository;

import com.grupo1.mytasks.Model.UsuarioModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UsuarioRepository extends JpaRepository<UsuarioModel, String> {
    List<UsuarioModel> findByEmail(String email);
    List<UsuarioModel> findBySenha(String senha);
}
