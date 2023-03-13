
# Cadastro de Participação de Clientes


Este projeto consiste em uma aplicação web que permite cadastrar a participação em porcentagem de clientes e exibir uma tabela com os clientes cadastrados e um gráfico de setor com a distribuição das participações.

Tecnologias Utilizadas
HTML, CSS e React.js para o frontend
Node.js e Express para o backend
MongoDB para o banco de dados





## Documentação da API

#### Cadastro de usuário

```http
   POST /cadastrousuario
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `sem parâmetro` | `string` | **Não obrigatório**.  |

#### Login de usuário

```http
  POST /login
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `name, password`      | `string` | **Obrigatório**.  |

#### Retorna todos os itens

```http
  GET /listarclientes
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `token`      | `string` | **Obrigatório**.  |

#### Retorna um item

```http
  GET /listarcliente
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `token`      | `string` | **Obrigatório**. Id costumer|

#### Cadastrar cliente

```http
  POST /clientes
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `token`      | `string` | **Obrigatório**. First Name, Last Name, password  |


#### Editar um cliente

```http
  PUT /editarclientes
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `token`      | `string` | **Obrigatório**. Id costumer  |

#### Deleta um cliente

```http
  DEL /deletarclientes
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `token`      | `string` | **Obrigatório**. Id costumer  |




## Instalação

Clone este repositório em sua máquina local.
Instale as dependências do projeto :

```bash
  npm install 
  cd desafioCotaBox
```
Inicie o backend :

```bash
  cd Backend
  npm run dev
```
Inicie o servidor :

```bash
  cd Frontend
  npm start
```
Acesse a aplicação no navegador, através do endereço http://localhost:3000/login.
Licença
Este projeto é distribuído sob a licença MIT. Consulte o arquivo LICENSE para mais informações.


    
## Funcionalidades

- Cadastro de usuário com nome, email e senha
- Login de usuário
- Sair da aplicação
- Cadastro de clientes com nome, sobrenome e porcentagem de participação
- Exclusão de clientes cadastrados
- Exibição de tabela com nome e porcentagem de participação de cada cliente cadastrado
- Exibição de gráfico de setor com a distribuição das participações entre os clientes cadastrados

