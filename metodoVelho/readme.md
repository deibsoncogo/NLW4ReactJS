# Rocketseat - Next Level Week 4 - Trilha React JS
Neste curso iremos aprender tudo sobre o **React JS** desenvolvendo um programa com a metodologia de front-end, um exemplo simples seria criar um site como uma plataforma de venda e entre outros e o React será tudo aquilo que o usuário ve

>Se o seu objetivo está alinhado com o front-end, e você deseja construir interfaces modernas e reativas na web utilizando uma biblioteca modular e escalável, essa trilha é para você

## Aula 01 - Rumo ao próximo nível
>No primeiro dia vamos conhecer os conceitos por trás de um front-end SPA, os principais fundamentos do React como componentes, propriedades, estado e ferramentas que funcionam por trás da biblioteca como Webpack e Babel. Além disso, daremos início ao desenvolvimento da aplicação move.it, criando a estrutura básica de componentes da página.

Antes de iniciar temos que preparar nosso ambiente de desenvolvimento, para isso podemos seguir o arquivo que está a parte ou por este [link](https://www.notion.so/Configura-es-do-ambiente-React-76f2963a042f45b9b9b567a2795945b8)

O **JSON** é entendido por todo tipo de sistema onde ele significa **JavaScript Object Notation** que é uma estrutura baseada em objetos e o React consegue lidar com ele

Iremos usar o **TypeScript** no desenvolvimento da aplicação para assim poder criar uma tipagem estática, a tipagem é informar um campos que existem em um objeto e seu formato, isso nos ajuda muito na manutenção do projeto

Para criar os arquivos base básico da nossa aplicação com TypeScript usamos um destes comandos, no comando o nome da aplicação  deve ter somente letras minúsculas e números, se o caminho conter espaços o comando do Yarn não vai funcionar, este comando vai nos trazer vários arquivos que não iremos utilizar com isso iremos excluir eles
````
yarn create react-app nlw4reactjs --template=typescript
npx create-react-app nlw4reactjs --template=typescript
````

Para iniciar o projeto devemos usar o comando abaixo ou seu atalho com o Yarn neste caso
````
yarn react-scripts start
yarn start
````

**JSX** é a utilização do JavaScript dentro do HTML

Existe vários tipos de medida dentro do CSS onde o `px` é o menos recomendável pois vai fazer aquele material sempre ter aquele tamanho, o `rem` vai sempre utilizar a medidas padrão do sistema como a fonte padrão do navegador

>22/02/2021

## Aula 02 - Aula 02 - Desvendando o Next JS
>Nesse segundo dia vamos aprender o que é Next.js e quando utilizar no desenvolvimento de aplicações React. Vamos também criar nossos próprios hooks dando vida às funcionalidades de countdown e ganho de experiência e leveis através de desafios

O **Next JS** é um firmware do React onde com ele conseguimos criar um projeto que consegue lidar com algumas ferramentas incríveis automaticamente como o SSR e SSG

O comando utilizado na aula anterior se categoriza como um **SPA** que significa `Single Page Application`, traduzindo seria um site de uma única página, assim quando mudarmos de página será atualizado somente os itens que mudarem, mais ele possui um grande problema onde os motores de busca como os da Google não vão conseguir ler o site pois eles desabilitam o JavaScript

O **SSR** que significa `Server-side Rendering` é um servidor que o Next JS cria baseado em Node JS onde quando o usuário for acessar um site publico sua requisição será recebida pelo SSR, enviada para o nosso back-end e depois enviada para o React que seria a página do site, isso corrige o problema apresentado do SPA

O **SSG** que significa `Static Site Generation` onde também é do Next JS onde com ele conseguimos configurar para criar backup se certas páginas assim evitando que o back-end sejá acessado muitas vezes, isso é muito util em um site que recebe milhos de acesso

Para criar um projeto assim usamos o seguinte comando
````
yarn create next-app nlw4reactjs
npx create-next-app nlw4reactjs
````

Agora iremos adicionar o TypeScript ao Next JS
````
yarn add typescript @types/react @types/react-dom @types/node -D
````

Para executar o servidor devemos usar outro comando ou seu atalho, temos também o atalho `start` mais ele realiza a conversão do TypeScript para o JavaScript compatível com o navegador
````
yarn next dev
yarn dev
````
