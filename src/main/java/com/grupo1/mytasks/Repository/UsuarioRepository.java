package com.grupo1.mytasks.Repository;

import com.grupo1.mytasks.Model.UsuarioModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepository extends JpaRepository<UsuarioModel, String> {
}
