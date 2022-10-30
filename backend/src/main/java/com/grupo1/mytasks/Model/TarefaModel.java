package com.grupo1.mytasks.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "TAREFAS")
public class TarefaModel implements Serializable {
    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String titulo;
    @Column(nullable = false)
    private String descricao;
    @Column(nullable = false)
    private int minutos = 0;
    @Column(nullable = false)
    private boolean concluido = false;

    @ManyToOne
    @JoinColumn(name="usuario", referencedColumnName = "cpf")//Varios endereços um cliente
    private UsuarioModel usuario;
}
