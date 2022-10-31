**Gerenciador de Tarefas Com Pomodoro Integrado**

VISÃO GERAL

Nosso projeto tem como objetivo facilitar o estudo (e outras atividades) dos usuários através do método Pomodoro. A API irá permitir o usuário cadastrar tarefas, definir uma descrição e selecionar o tempo que irá demorar para que aquela determinada tarefa seja concluída. Dessa forma, dando um controle a mais para o usuário enquanto automatiza seu tempo e lhe garante mais bem-estar.

FUNCIONALIDADES

A API permite o usuário se cadastrar, cadastrar tarefas, editar atarefas, definir um tempo para sua conclusão e esse tempo será enviado para o **timer** do **Pomodoro**.

Técnologias utilizadas: HTML, CSS, JAVASCRIPT E JAVA 11.
Também utilizamos Spring Boot com Maeven Project, versão 2.7.5

**Método de utilização:**
**Sem Login:**
O usuário poderá utilizar a aplicação sem Login. Sem login ele terá acesso á uma página **Home** com informações sobre o Pomodoro, terá acesso ao método de **Login** e terá acesso ao **timer**. Nesse Timer ele irá poder escolher um tempo pré definido e definir um tempo para uso. Caso deseje usar as tarefas precisará criar uma conta.

**Com Login**
Ao entrar na API, o usuário será redirecionado para a página de Login. Caso ele ainda não tenha uma conta criada, basta rolar a tela para baixo e clicar em "**inscrever-se**. Para se cadastrar é necessário cadastrar um nome, cpf (com 11 dígitmos), email contendo um "@" válido e uma senha. Ao clicar em cadastrar irá aparecer um pop-up sinalizando que deu certo e ele irá ser redirecionado para a pagina de Login. La ele irá digitar o email e a senha e entrar dentro da API.
 Ao entrar a tela **Home** irá se abrir e lá serão exibidas várias informações sobre o Pomodoro, sobre a equipe e sobre atualizações futuras. Na parte superior central da tela contaremos com os botões **Tarefas**, **Timer** e **Sair**. Ao entrar no Tarefas o usuário irá se deparar com um botão **Incluir** onde ele irá poder incluir uma tarefa. A tarefa deve contar com um **Titulo**, uma **Descrição** e para selecionar o tempo que o usuário deseja concluir a tarefa irão aparecer várias opções de tempos pré-definidos pela API. Ao final é só ele apertar em salvar e a tarefa irá aparecer logo abaixo em uma lista.
 A tarefa que o usuário acabou de inlcuir irá contar com 4 botões. **Editar, Concluir, Excluir e Iniciar**. Caso aperte Editar ele irá poder mudar o que quiser dentro da tarefa. Concluir a tarefa será conclúida. Excluir ela irá ser excluida e se clicar em iniciar, o usuário será redirecionado para o timer que já estára com o tempo que o usuário selecinou. Dentro desse timer o usuário poderá escolher em quantos turnos ele deseja conclur.
 Quando o timer for aberto um pop-up será aberto pedindo para que o usuário permita ou não que notificações sejam enviadas para ele. Quando o tempo do primeiro turno (ou o único turno) que o usuário escolher acabar, um som irá disparar para  avisar. Ao final do tempo o usuário pode ir até a aba de atarefas e marcar  a tarefa como concluida. Caso o usuário troque a quantidade de turnos que irá usar, precisará apertar o botão reiniciar dentro do timer. Quando o usuário terminar tudo que quiser, ele poderá utilizar o botão **Sair** para dar fim ao uso da API.




