package com.grupo1.mytasks.Repository;

import com.grupo1.mytasks.Model.UsuarioModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UsuarioRepository extends JpaRepository<UsuarioModel, String> {
    Optional<UsuarioModel> findByEmail(String email);
    Optional<UsuarioModel> findBySenha(String senha);
}
