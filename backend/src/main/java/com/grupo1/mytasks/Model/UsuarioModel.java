package com.grupo1.mytasks.Model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.Size;
import java.io.Serializable;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "usuario")
public class UsuarioModel implements Serializable {

    @Id
    @Column(nullable = false, unique = true)
    @Size(min = 11, max = 11)
    private String cpf;

    @Column(nullable = false)
    private String nome;

    @Column(nullable = false)
    @Email
    private String email;

    @Column(nullable = false)
    private String senha;

    @JsonIgnore
    @OneToMany(mappedBy = "usuario", cascade=CascadeType.ALL)
    private List<TarefaModel> tarefas;
}
