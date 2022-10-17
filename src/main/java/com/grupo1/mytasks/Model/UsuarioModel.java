package com.grupo1.mytasks.Model;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

@Data
@Entity
@Table(name = "usuario")
public class UsuarioModel implements Serializable {

    @Id
    @Column(nullable = false, unique = true)
    private String cpf;

    @Column
    private String nome;

    @Column(nullable = false)
    private String email;

    @Column(nullable = false)
    private String senha;


}
