# Teste Thirderth

Uma breve descrição do  projeto e o que ele faz.

## Tecnologias Utilizadas

- **React**: Biblioteca para construção de interfaces de usuário.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **Next.js**: Framework React para aplicações renderizadas no lado do servidor.
- **Redux Toolkit (RTK Query)**: Ferramenta para gerenciamento de estado e requisições API.
- **React Hot Toast**: Biblioteca para exibir notificações em tempo real.
- **Atomic Design**: Abordagem para organização de componentes em níveis hierárquicos.

## Estrutura do Projeto

A estrutura do projeto segue o conceito de Atomic Design. Os componentes são organizados nas seguintes pastas:

```
src/
|-- components/           # Componentes organizados por átomo, molécula, organismo, template e página
|   |-- molecules/        # Componentes moleculares (ex: formulários, cards)
|   |-- organisms/        # Componentes organizacionais (ex: cabeçalhos, rodapés)
|-- app 
|-- |-- pages/            # Páginas que utilizam os templates
|-- services/             # Serviços API e lógica de negócios
|-- store/                # Configuração do Redux
|-- styles/               # Arquivos de estilo globais
```

## Como Começar

1. **Clone o repositório**

   ```bash
   git clone https://github.com/Edson2001/testefrontthirderth
   ```

2. **Navegue até a pasta do projeto**

   ```bash
   cd projecto
   ```

3. **Instale as dependências**

   ```bash
   npm install
   ```

4. **Inicie o servidor de desenvolvimento**

   ```bash
   npm run dev
   ```

5. **Acesse o projeto em seu navegador**

   No .env use NEXT_PUBLIC_BASE_URL=https://jsonplaceholder.typicode.com
   Abra o seu navegador e acesse `http://localhost:3000`.
