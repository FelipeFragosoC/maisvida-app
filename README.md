# MaisVida App

Interface para sistema de controle de Médicos.

## Primeiros Passos

### Prerequisitos

* [NodeJS / NPM](https://nodejs.org)
* [Angular CLI](https://cli.angular.io)

### Instalação

Baixe ou clone o projeto e depois instale as dependências

Instalar Dependências:
```
npm install
```

Em `app.service.ts` verificar se o endereço da API na interface está correto.

```
get baseApi() {
    if (isDevMode()) {
        return 'http:localhost:8080/'; // <------ Alterar esse valor apontando para a API.
    }
    
    return 'https://maisvida-api.com.br/'; // production url
}

```

Inicie o WebServer:

```
ng serve
```

Acesse  `http://localhost:4200`

## Deployment

Para fazer o build do projeto basta executar o comando:
```
ng build --prod
```

Suba os arquivos da pasta `dist` para o destino.

## Feito com

* [Angular 5.2.5](https://angular.io) - The web framework used
* [Material 5.2.2](https://material.angular.io) - Componentes
* [Bootstrap 4](https://getbootstrap.com/) - Layout, Responsive Control
* [CoreUI](https:://coreui.io) - Dashboard Template

## Autores

* **Felipe Fragoso** - felipe.fragosoc@gmail.com