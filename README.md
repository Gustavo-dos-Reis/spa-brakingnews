# Frontend do Projeto Braking News

## Descrição
Este é o frontend de uma aplicação web que permite o gerenciamento de postagens e perfis de usuários. Construído com React, o projeto oferece funcionalidades como autenticação, criação e edição de postagens, visualização de perfis e busca de conteúdo. A interface foi projetada para ser responsiva e amigável, garantindo uma experiência de usuário intuitiva.

## Estrutura do Projeto
O frontend é dividido em componentes reutilizáveis e organizados de forma a facilitar a manutenção e expansão do projeto.

### Principais Componentes
- **`App.jsx`**: Componente raiz que gerencia as rotas e renderiza os principais elementos da aplicação.
- **`Button.jsx`** e **`ButtonStyled.jsx`**: Componentes para botões estilizados.
- **`Card.jsx`** e **`CardStyled.jsx`**: Componentes para exibição de postagens ou perfis em formato de cartões.
- **`Input.jsx`** e **`InputStyled.jsx`**: Campos de entrada de dados estilizados para formulários.
- **`Navbar.jsx`** e **`NavbarStyled.jsx`**: Barra de navegação responsiva que guia o usuário pela aplicação.
- **`Profile.jsx`** e **`ProfileStyled.jsx`**: Exibição e edição de perfis de usuários.
- **`Authentication.jsx`** e **`AuthenticationStyle.jsx`**: Componentes de login e registro com estilizações customizadas.
- **`Home.jsx`** e **`HomeStyled.jsx`**: Página inicial que mostra um resumo das postagens e principais funcionalidades.
- **`ErrorPage.jsx`**: Página exibida quando ocorre um erro de navegação ou um recurso não é encontrado.
- **`ManageNews.jsx`** e **`ManageNewsStyled.jsx`**: Tela para criação e edição de postagens.
- **`Search.jsx`**: Componente de busca para encontrar postagens por título.
- **`UserContext.jsx`**: Contexto para gerenciar o estado do usuário logado na aplicação.

### Schemas de Validação
- **`signinSchema.js`** e **`signupSchema.js`**: Definem a validação de dados de entrada para os formulários de login e cadastro, usando a biblioteca `zod` para garantir a segurança e consistência dos dados.

### Serviços
- **`postServices.js`**: Funções que fazem requisições HTTP para a API para gerenciar postagens (listar, criar, editar e deletar).
- **`userServices.js`**: Funções de requisição para autenticação e gerenciamento de perfis de usuários.

### Estilização Global
- **`GlobalStyles.jsx`**: Define estilos globais aplicados a toda a aplicação, garantindo uma aparência consistente.

### Ponto de Entrada
- **`index.html`**: Estrutura básica do projeto com inclusão do arquivo `main.jsx` para renderização do React.
- **`main.jsx`**: Ponto de entrada do React que renderiza o componente `App` e injeta a aplicação no DOM.

## Funcionalidades
- **Autenticação de Usuário**: Login e registro com validação de campos.
- **Criação e Gerenciamento de Postagens**: Permite que os usuários criem, editem e excluam postagens.
- **Busca e Filtragem**: Pesquisa de postagens por título.
- **Navegação Responsiva**: Interface amigável e adaptável a diferentes tamanhos de tela.

## Tecnologias Utilizadas
- **React**: Biblioteca principal para construção da interface.
- **Axios**: Cliente HTTP para comunicação com a API.
- **Zod**: Biblioteca de validação de dados.
- **Bootstrap**: Framework CSS para estilos responsivos.
- **Styled-Components**: Estilização de componentes de forma customizada.

## Como Executar o Projeto
1. Clone o repositório:
   ```bash
   git clone <URL-do-repositorio>
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```bash
   npm start
   ```
4. Acesse a aplicação em:
   ```
   http://localhost:3000
   ```

## Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests para melhorias e novas funcionalidades.

---

Este projeto foi desenvolvido para fins de aprendizado e estudo, demonstrando a integração entre um front-end React e um back-end Node.js.

