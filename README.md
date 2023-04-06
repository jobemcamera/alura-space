# Alura Space 

Curso de React.js - Alura

<!--ts-->
   * [Tecnologias](#Tecnologias)
   * [O Projeto](#O-Projeto)
   * [O que eu aprendi](#O-que-eu-aprendi)
<!--te-->

## Tecnologias

- HTML
- CSS
- SASS
- JavaScript
- React.js

## O Projeto

O Projeto Alura Space é um galeria de fotos do espaço! Nela podemos ver imagens da Lua, estrelas, nebulosas e até mesmo galáxias.

![image](https://user-images.githubusercontent.com/109925623/230503685-ed3e6a1a-e746-4d07-9d53-dd8bad8508d1.png)

## O que eu aprendi

Como o aprendizado de ```React``` está no começo, aqui pude aprender muitas coisas novas. As principais foram:

- ### Estruturas de pastas

Com o avanço nas funcionalidades de um projeto, a organização de seus arquivos é fundamental. Com isso, precisamos seguir um padrão de boas práticas para que nós do futuro e outros desenvolvedores, possamos nos encontrar no meio de tanta informação.

No curso, a estrutura de pastas foi mostrado da seguinte forma:

![image](https://user-images.githubusercontent.com/109925623/230498946-91fb72f6-2ecc-4712-8f97-0e84afe6f589.png)

- ### normalize.css

Similar ao ```reset.css``` que conhecemos, em ```React``` podemos instalar o pacote Normalize através do ```npm install normalize.css```. 

O ```normalize.css``` faz com que os navegadores renderizem todos os elementos de forma mais consistente e alinhada com os padrões modernos. Ele visa precisamente apenas os estilos que precisam de normalização. Para importar, segue:

```js
@import-normalize; /* bring in normalize.css styles */
```

A IDE ```vscode``` poderá apresentar um aviso nessa importação. Para corrigirmos isso, basta criar na raiz do projeto, a pasta ```.vscode``` e dentro dela o arquivo ```settings.json```. Neste arquivo, colocaremos a seguinte instrução:

```json
{
    "scss.lint.unknownAtRules": "ignore"
}
```

- ### @fontface

A forma mais comum de usar fontes em aplicações web, é utilizando o [Google Fonts](https://fonts.google.com/). Você pode escolher entre uma variedade de fontes de todos os tipos e estilos para utilizar em seus projetos. Contudo, por questões de exclusividade de marca, branding, etc, é comum que empresas possuam suas próprias fontes.

Em nosso projeto, utilizamos a fonte ```GandhiSans```. Criamos a pasta Fontes contendo os arquivos ```GandhiSans-Bold.otf``` e ```GandhiSans-Regular.otf```.

No arquivo ```estilosGlobais.scss```, usamos o @font-face:

```scss
@font-face {
    font-family: "GandhiSansRegular";
    src: local("GandhiSansRegular"),
      url("../assets/fontes/GandhiSans-Regular.otf") format("truetype");
    font-weight: 500;
    font-display: swap;
}
  
  @font-face {
    font-family: "GandhiSansBold";
    src: local("GandhiSansBold"),
      url("../assets/fontes/GandhiSans-Bold.otf") format("truetype");
    font-weight: 700;
    font-display: swap;
}
``` 

O format depende do tipo da fonte. Eis alguns exemplos:

- ```.woff``` -> format("woff"),
- ```.ttf``` -> format("truetype")
- ```.eot``` -> format('embedded-opentype')

Para a utilização da fonte, fizemos o ```import``` no arquivo ```index.js```. 

```js
import "./assets/fontes/GandhiSans-Regular.otf"
import "./assets/fontes/GandhiSans-Bold.otf"
```

- ### Absolute Imports

Geralmente, quando queremos importar arquivos como imagens e estilos css que estão a níveis acima do diretório onde queremos fazer a importação, fazemos dessa maneira:

```
import nome-da-imagem from '../../../assets/imagens/nome da imagem'
```
Para evitar o excesso de ```../../```, criamos o arquivo ```jsconfig.json``` na raiz do projeto:

```json
{
    "compilerOptions": {
        "baseUrl": "src"
    },
    "include": ["src"]
}
```

Essas poucas linhas simples dirão à configuração do ```Create React App``` para usar seu diretório src como base para suas importações, para que nós possamos importar arquivos e componentes com caminhos absolutos, ficando da seguinte maneira: 

```js
import Cabecalho from "componentes/Cabecalho";
import Galeria from "componentes/Galeria";
import Menu from "componentes/Menu";
import Populares from "componentes/Populares";
import Rodape from "componentes/Rodape";
```

- ### favicon

Quando abrimos várias abas no navegador é comum observarmos o título e um ícone que representa a página. Esse ícone é popularmente chamado de ```favicon``` e também ajuda no SEO das páginas, por isso no ```index.html``` existe uma tag especial que importa esse arquivo na aplicação. 

```html
<head>
  <link rel="icon" href="%PUBLIC_URL%/favicon-16x16.png" />
</head>
```

O ```%PUBLIC_URL%``` se chama variável de ambiente e ela faz referência ao arquivo ```favicon-16x16.png```. Esta referência faz com que este arquivo não seja processado pelo ```webpack```, mas sim copiado para a pasta de compilação com o caminho correto assim que a aplicação for compilada.
