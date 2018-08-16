# READABLE

Readable é um aplicativo de posts e comentários como Hacker News e Reddit. Os usuários poderão postar conteúdo em categorias predefinidas, comentar suas postagens e postagens de outros usuários e votar em postagens e comentários. Os usuários também poderão editar e excluir postagens e comentários.


### Instalando

```
clone git https://github.com/gilmarvoge/readable.git
cd readable

#para api-server
-cd readable/api-server
-npm install
-npm start

#para aplicação
-cd readable
-npm install
-npm start

```

### Funcionalidade (requisitos)

- Padrão (raiz)
    - deve listar todas as categorias disponíveis, que devem ser vinculadas a uma exibição de categoria para essa categoria
    - deve listar todos os posts
    - deve ter um controle para alterar o método de classificação para a lista, incluindo no mínimo, ordenar por voteScore e ordenar por Timestamp
    - deve ter um controle para adicionar um novo post
- Visualização de categoria
    - idêntica à visualização padrão, mas filtrada para incluir apenas postagens com a categoria selecionada
- Post Detail View
    - deve mostrar os detalhes de uma postagem, incluindo: Título, Corpo, Autor, registro de data e hora (em formato legível pelo usuário) e pontuação de voto
    - deve listar todos os comentários para esse post
    - deve ter controles para editar ou excluir o post
    - deve ter um controle para adicionar um novo comentário.
    - Implementar o formulário de comentários que você quiser (inline, modal, etc.)
    - os comentários também devem ter controles para editar ou excluir
- Criar / Editar vista
    - deve ter um formulário para criar uma nova postagem ou editar postagens existentes
    - ao editar, os dados existentes devem ser preenchidos no formulário

### Funcionalidade Adicional
#### Usando Redux e Redux-Saga
Usar o redux e o redux-saga é mais fácil de gerenciar estados e coisas assíncronas, mais eficiente de executar, simples de testar e melhor em lidar com falhas.
