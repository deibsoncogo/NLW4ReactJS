# Rocketseat - Next Level Week 4 - Trilha React JS
Neste curso iremos aprender a utilizar o **React JS**, **Node JS**, **Next JS** e **JavaScript** com **TypeScript** para desenvolver um programa com a metodologia de front-end, o projeto será a criação de um site com a ferramenta conhecida como **Pomodoro** onde no final o usuário terá que realizar um desafio para ganhar experiencia

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

## Aula 02 - Desvendando o Next JS
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

No Next não podemos mexer diretamente no arquivo index.html que fica na pasta public, aqui ele nem aparece para nos, com isso temos que criar um arquivo chamado de `_document.tsx` e dentro dele criar um index que vai sobre escrever o original

Tudo que está dentro do `_document.tsx` é carregado somente uma vez e no `_app.tsx` e carregado somente oque o usuário precisa quando muda de página

Ele vem com o `CSS Models` onde ele vai fazer o CSS ficar disponível somente para um componente

>23/02/2021

## Aula 03 - Contexto e componentes
>Na terceiro aula realizaremos uma separação da aplicação em componentes menores e aplicaremos o conceito de contextos no React, responsável por compartilhar uma informação entre vários componentes em tela, finalizaremos também a funcionalidade de desafios

No CSS temos o `filter` que modifica alguns itens da cor como seu brilho

Criar um arquivo para cada item da nova aplicação é muito bom pois deixar a tela limpa e isola dos demais itens, mais este isolamento complica nossa vida quando precisamos que um item em um arquivo ative outra coisa no outro arquivo

Para solucionar o problema acima temos a `API de contextos do React`, isso serve para criar um ponto de comunicação entre vários componentes da nossa aplicação

>24/02/2021

## Aula 04 - Melhorando a usabilidade da aplicação
>Na quarta aula iremos continuar evoluindo nossa aplicação, aprender ainda mais sobre a Context API, e aprender a como utilizar as notificações e sons do navegador para melhorar a experiência do usuário

Nesta aula usamos alguns recursos nativos do React como a criação de uma notificação e play de um áudio, existe diversas ferramentas nativas onde algumas precisa de permissão do navegador

>25/02/2021

## Aula 05 - Próximo nível com React
>Nessa última aula entendermos os próximos passos para avançar nos aprendizados com React com dicas de ferramentas, bibliotecas e conceitos a serem estudados. Também incrementaremos nossa aplicação com algumas features adicionais a fim de mostrar como aplicar esses próximos passos dentro do app desenvolvido na semana

O conhecimento profundo das ferramentas não é fundamental no começo, primeiro devemos aprender a codar e depois descobrir como as coisas funcionam por trás dos panos

Para salvar as informações do usuário iremos usar a metodologia de `cookies` onde ele é melhor que o `local storage` pois conseguimos definir se aquela informação pode ser acessada por mais de um domínio, definir um prazo de validade e muito mais

A melhor dependência para criar armazenamento de cookies é a `JS Cookie`
````
yarn add js-cookie
yarn add @types/js-cookie -D
````

Para realizar o deploy da nossa aplicação front-end, colocar no ar, temos dois serviços muito bom e famoso onde é o [Netlify](https://www.netlify.com/) e o [Vercel](https://vercel.com/) que será este que iremos usar, ambos possui um plano gratuito com uma limitação de banda em 100gb

Depois temos que instalar a `CLI da Vercel` em forma global
````
yarn global add vercel
````

Agora temos que realizar nosso login
````
vercel login
````

Agora dentro da nossa aplicação utilizamos este comando para enviar nossa aplicação
````
vercel
````

E respondemos algumas perguntas
````
Se desejamos criar um setup para poder enviar nossa aplicação
? Set up and deploy “~\Estudo\Rocketseat\Next Level Week\NLW4\React JS\NLW4ReactJS”? [Y/n] y

Para qual conta desejamos enviar
? Which scope do you want to deploy to? Deibson Cogo

Se já possuo o projeto criado no site da Vercel
? Link to existing project? [y/N] n

O nome dele onde também será o mesmo para o caminho
? What’s your project’s name? nlw4reactjs

Como já executamos o comando na pasta da aplicação é só apertar enter
? In which directory is your code located? ./

Se desejamos alterar alguma configuração padrão da aplicação
? Want to override the settings? [y/N] n
````

Ao reenviar nossa aplicação o `Vercel` por padrão vai criar uma versão teste para ser testada antes de mandar para a web, para realizar o envio sem testes temos este comando
````
vercel --prod
````

>26/02/2021
