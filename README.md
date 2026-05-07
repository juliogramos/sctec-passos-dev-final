# Desafio Extra - DigiPet

Desafio extra do curso "Introdução à Programação Front-End e Back-End" do programa [SCTEC](https://sctec.scti.sc.gov.br/).

Elaborado por [Julio Gonçalves Ramos](https://www.linkedin.com/in/julio-ramos-1684a5390/).

Link para o repositório: [https://github.com/juliogramos/sctec-passos-dev-final](https://github.com/juliogramos/sctec-passos-dev-final)

Link para versão live do site: [https://juliogramos.github.io/sctec-passos-dev-final/](https://juliogramos.github.io/sctec-passos-dev-final/)

## Tecnologias

- HTML
- CSS
- Javascript

## Como visualizar localmente

Para visualizar o site localmente, basta apenas extrair todos os conteúdos do arquivo compactado (ou clonar o repositório) e abrir o arquivo HTML no navegador.

- É necessária uma conexão de internet para que as fontes e os ícones sejam importados.
- O site usa Javascript para instanciar os ícones e validar o formulário, então não o bloqueie.

## Etapas de desenvolvimento

### 1. Estrutura Básica

A primeira etapa do desenvolvimento foi escrever a estrutura básica do HTML com todas as seções especificadas no enunciado da atividade. IDs com o nome de cada seção foram adicionados para adiantar a implementação de uma barra de navegação futura, assim como classes e elementos que fazem menção aos requisitos da atividade que deveriam ser cumpridos (ex. classe container de cards para a seção serviços).

### 2. Brainstorming

Como não entendo muito de cuidado de animais reais, decidi que o tema do pet shop fictício seria Digimon. Me inspirei no [site oficial de Digimon](https://digimon.net/reference_en/) e decidi que queria que o site a ser desenvolvido tivesse algumas características dele:

- Uso da fonte Montserrat
- Agumon como mascote, porém escolhi a variante "professor" do Agumon.
- Paleta de cores clara com a cor principal azul.
- Botões e links que reagem quando o mouse é passado por cima.

Após isso, visitei um site recomendado nos videos do curso chamado Behance para buscar inspiração de outros sites de pet shop. Gostei de três sites em particular [[1](https://www.behance.net/gallery/160503955/Pet-shop)] [[2](https://www.behance.net/gallery/196166509/Landing-Page-para-Loja-de-Roupas-de-Pets)] [[3](https://www.behance.net/gallery/247176257/Modern-Pet-wholesale-stores-Shopify-Website-Design])] e escolhi algumas características que queria em meu próprio site:

- Cantos arredondados
- Cards e elementos que fazem sombra na página
- Seções com cor diferente do background da página
- Footer escuro

Sobre os serviços oferecidos pelo pet shop, me inspirei nos jogos de digimon e decidi incluir três serviços:

- Adoção de digimon, com diversas (linhas) para escolher
- Regimes de treinamento, com a possibilidade de batalhar contra os digimons de outros clientes
- Compra de equipamentos para os digimons

Com base nessas especificações iniciais, fiz um rascunho para guiar o desenvolvimento do site, disponível na pasta imagens ou no [Github](https://github.com/juliogramos/sctec-passos-dev-final/blob/main/imagens/rascunhojpg.jpeg).

A ideia das diferentes linhas foi eventualmente abandonada pois tomaria muito espaço na página.

### 3. Coleta de recursos

A fonte Montserrat foi importada do site Google Fonts. Já as imagens do mascote foram pegas da [Wikimon](https://wikimon.net/Agumon_Hakase#Image%20Gallery) e editadas para serem transparentes. O ícone que aparece junto com a aba do navegador foi pego do site oficial de Digimon.

Foi nessa etapa do trabalho que também comecei a pesquisar sobre acessibilidade. Achei um [artigo](https://medium.com/@matuzo/writing-css-with-accessibility-in-mind-8514a0007939) que define algumas práticas para deixar sites mais adequados à WCAG (Web Content Accessibility Guidelines), que é um padrão de acessibilidade popular na internet. Montei uma tabela com alguns atributos e medidas para ter em mente durante a estilização do site:

| Elemento        | Atributo         | Valor |
| --------------- | ---------------- | ----- |
| body            | font-size (body) | 18px  |
| p               | line-height      | 1.5   |
| p               | max-width        | 65ch  |
| .img-decorativa | aria-hidden      | true  |

Acabei não usando esses valores exatos, mas foi um bom ponto de partida para a estilização do site.

### 4. Codificação

#### 4.1 HTML

A estrutura HTML básica foi expandida com os campos definidos no rascunho, se utilizando de Lorem Ipsum para preencher os textos ainda não definidos. Alguns elementos do rascunho já foram omitidos nesta estapa, com o objetivo de fazer um site mais focado. O HTML também foi retocado e refeito em todas as etapas do desenvolvimento, já que novas necessidades (como containers adicionais para alinhar os elementos) foram sendo reveladas a todo momento.

#### 4.2 CSS

Essa foi a etapa mais longa e trabalhosa do desenvolvimento da atividade, e mexeu não apenas com o CSS mas também com o HTML como dito anteriormente.

Primeiramente foi definida a paleta de cores. Encontrei um site chamado [UI Colors](https://www.iamsajid.com/ui-colors/) que gera uma paleta de cores moderna e acessível de acordo com valores de saturação e matiz, incluindo cores para um modo escuro. Também usei o efeito de tornar a borda superior de um container branca para simular brilho presente nesse site.

Resolvi que o site seria centralizado e teria uma largura máxima de 1200px, que parece ser um tamanho comfortável para pessoas que possuem monitores muito grandes.

Para o header me inspirei no site do Blippi.Pet desenvolvido durante a etapa Despertar, que possuia o logo do site em um canto e uma barra de navegação em outro. Testei a técnica do brilho no logotipo e acabou ficando um efeito meio 3D que eu gostei bastante. Testei deixar o header como "sticky", mas não ficou um efeito muito legal então não o usei. Para maior interatividade, fiz os links mudarem de cor e se moverem levemente quando o mouse é passado por cima.

A seção destaque também foi inspirada no site do Blippi.Pet. Deixei o botão (na verdade é um link) apenas mudando de cor e não se mexendo pois o efeito ficou um pouco exagerado em um elemento tão grande. Usei "position: relative" na imagem do mascote para posicionar ele no canto do destaque. Dei um pequeno offset para que ele ficasse um pouco fora do card, para dar um efeito mais 3D e animado. Também dei uma leve sombra na imagem usando o filtro drop-shadow, que gera uma sombra que se adequa ao formato de uma imagem transparente ao invés de gerar uma sombra quadrada como o box-shadow.

Para a seção sobre, não fiz um card, mas sim um background mais escuro sem sombra onde as credenciais "saltariam" da página. Resolvi fazer linhas intercaladas com row-reverse e um seletor mais avançado do CSS que achei interessante. Deixei as credenciais no fim de cada linha ao invés de todas juntas em uma mesma linha para não ficar muito parecido com o Blippi.Pet.

Na seção serviços fiz cards posicionados em cima do background padrão da página. Utilizei a biblioteca de ícones [Lucide](https://lucide.dev/) que foi mencionada na etapa Despertar. Utilizei o "aspect-ratio: 9 / 10" para dar proporção aos cards. Inicialmente planejei utilizar grid e subgrid para posicionar os cards, mas isso causava overflow quando combinado com o aspect ratio então decidi utilizar flexbox. Usei grid mais tarde na elaboração do formulário de contato.

A seção de contato foi novamente posicionada em um background mais escuro sem sombras, com apenas o botão de envio do formulário se destacando acima dele. Criei campos de texto com diferentes tipos (text, email, tel e number), alguns select e também botões de rádio. Tive a ideia de fazer uma checkbox de consentimento que aparece apenas se um botão de rádio específico é selecionado. Não inclui as informações de contato do estabelecimento planejadas no rascunho para poder fazer um formulário em grid com várias opções diferentes. Validações básicas já foram incluídas nos inputs mas o Javascript também as realiza por garantia.

O footer é bem simples, contendo apenas uma declaração de copyright (fictícia) e um disclaimer sobre o site.

#### 4.3 Javascript

Usei a classe FormData para extraír as informações do formulário pois achei um modo elegante quando comparado com o método de extraír todos os valores individualmente usando IDs. Porém eu acabei usando o método dos IDs mesmo assim, então não ficou tão enxuto quanto eu imaginava.

Primeiro foram feitas as verificações de preenchimento do formulário, que já são realizadas no próprio HTML mas é bom garantir. Decidi fazer alertas para os três "blocos" do formulário ao invés de cada campo individual para ficar um código mais legível.

Depois é feita a checagem do tamanho dos valores digitados pelo usuário. Resolvi fazer funções separadas e mais desacopladas para cada campo, para que além de serem executadas durante a validação elas também possam ser chamadas logo após o usuário digitar (e mudar de foco) para um feedback mais imediato. Um alerta só é gerado caso essas verificações falhem durante a validação do formulário, caso elas falhem após o usuário digitar apenas um erro é exibido abaixo do campo.

Depois são usadas expressões regulares para a checagem dos campos de email e telefone, obtidas do site mostrado em um vídeo do curso [[1](https://regex101.com/library/SOgUIV)] [[2](https://regex101.com/library/wZ4uU6)]. A expressão regular para telefones checa para telefones ao redor do mundo e não apenas celulares, então números "estranhos" como 999 são aceitos.

Foi implementada depois a checagem de consentimento, onde a checkbox de consentimento deve ser marcada caso o cliente selecione que quer que seu digimon batalhe com os de outros clientes. Também coloquei event listeners nos botões de rádio dessa escolha para que essa checkbox apenas apareça quando a opção certa é marcada.

Se o formulário é valido, fiz com que um spinner de carregamento seja exibido na tela, e o código espera por um timeout de 3 segundos utilizando o comando await. Após esses três segundos, uma imagem e uma confirmação de envio são exibidas. Experimentei criar a confirmação por Javascript, mas em alguns casos a criação de imagem tem um delay dependendo do hardware e conexão de internet do usuário, então resolvi implementar com display: none.

Coloquei comentários no arquivo JS com essa mesma explicação dessa seção.

#### 4.4 Conteúdo

O lorem ipsum foi substituído com o conteúdo real do site. Tentei deixar o conteúdo com uma quantidade de caracteres similar ao lorem ipsum para manter a proporção entre os elementos.

#### 4.5 Refatoração CSS

Resolvi refatorar o CSS após perceber que várias linhas se repetiam em diversos seletores. Fiz classes utilitárias (principalmente para flex) com algumas poucas propriedades cada que podem ser compostas para substituir as classes repetitivas usadas nas etapas anteriores. O arquivo acabou ficando só um pouco menor e nem sei se valeu muito à pena para esse projeto, mas imagino que para projetos maiores e frameworks que permitem componentização essa abordagem é bastante útil.

#### 4.6 Responsividade

Foram selecionados três breakpoints (vistos no curso): 480px, 768px e 1024px. A boa prática recomendada é levar como padrão o menor breakpoint possível e depois codificar os outros usando media queries, mas sabia que a imagem sobreposta com relative seria ocultada no menor tamanho então comecei codificando o maior breakpoint.

Resolvi deixar a imagem relative em baixo do texto com uma opacidade reduzida entre 480px e 1024px. Isso reduz um pouco a visibilidade, mas tem um impacto visual maior em telas maiores que 480px.

Não foram necessárias muitas mudanças para deixar o site responsivo em resoluções menores pois fiz vários dos containers com display: flex. Assim vários dos conflitos foram resolvidos apenas ativando o flex-wrap ou mudando uma row para column.
