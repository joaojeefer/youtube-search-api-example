## Integrantes do trabalho da disciplina

Caina dos Santos Mota

Diego Francio

João Jeefer da Silva Felix

Renata barros da silva

> API utilizada: youtube ( https://developers.google.com/youtube/v3/docs/search/list?hl=pt-br )

A ideia desse projeto foi elaborar uma interface de suporte (ajuda online) para os operadores do sistema produtivo referente ao caso de ensino proposto.

Nesse exemplo, foi desenvolvida uma aplicação mobile que permite inserir tags para pesquisa, facilitando uma futura busca de vídeos sobre o mesmo assunto. As tags pesquisadas ficam armazenadas na memória do dispositivo.

É utilizada a API do youtube, mais especificamente o componente **search: list**,  para fazer a busca e obter uma lista parametrizada com um retorno máximo de 10 itens por consulta.

É possível reproduzir cada video dentro da própria aplicação, também através da API do youtube.

## Instruções para configurar o ambiente de desenvolvimento

Este é um projeto [**React Native**](https://reactnative.dev) desenvolvido com Typescript.

## Começar

>**Nota**: Certifique-se de configurar seu ambiente para executar a a plicação, conforme documentação [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup).

### Passo 1: Inicializar o servidor Metro

Primeiramente você precisa inicializar o **Metro**, o JavaScript _bundler_ que está disponível no React Native.

Para inicializar o Metro, rode os comandos abaixo na raiz do projeto:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

### Passo 2: Inicialize sua aplicação

Deixe o metro rodar no seu próprio terminal. Abra um novo terminal na raiz do projeto e execute o comando abaixo, dependendo da sua plataforma (Android ou iOS):

#### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

#### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

Se tudo estiver executado corretamente você deve ver a aplicação executando no emulador de sua escolha.
