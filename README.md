SlideLp v2.2 - Responsivo + Touch + Full Screen
===============================

Este plugin está sendo desenvolvido para facilitar a vida de muitas pessoas que pretendem desenvolver um site e precisam de um banner de destaque.

Ainda estamos na versão 1.0, portanto existem algumas propriedades que ainda não foram desenvolvidas. Existem também alguns bugs a serem corrigidos, por favos, caso encontre algum, comentar o ocorrido para que possamos corrigi-los.

Demo
===============================
Veja ele em funcionamento clicando <a href="http://slidelp.mostone.com.br" target="blank">aqui</a>

Como usar
===============================

Como usar o plugin:

	1 - Você deve fazer o download do plugin;
	2 - Descompatar;
	3 - Dentro da pasta, acesse a pasta que possui o nome de "plugin", dentro dela estão dos os aquivos nessesários para o funcionamento do slideLp;
	4 - Por fim, basta apenas adicionar os arquivos no seu projeto e pronto!

OBS Importante!
===============================

O slideLp foi feito usando tags HTML5, portanto alguns navegadores que não possuem essa tecnologia não conseguiram interpretar as tags, um exemplo pratico seria no IE7 ou IE8 onde os navegadores não possuem suporte a Html5, com isso o plugin não iria funcionar corretamente. Para resolver esse problemas usamos dois plugins js, são eles: 

	 - Modernizr: Para mais informações acesse o site <a href="http://www.modernizr.com/">http://www.modernizr.com/</a>;
	 - html5.js;

 Aplicando esses dois js fará com que os navegadores mais antigos consigam interpretar as novas tags do Html5. Os mesmo encontram-se na pasta "html5-js" dentro da pasta do projeto.

HTML base e Chamada js
===============================

Html base do plugin:

	<section id="highlight">
       <section class="wrapHighlight">
          <ul class="listCont">
            <li>
              <div class="cont">
                <a href="#" target="_blank">
                  <img src="imgs.jpg" alt="Imagem 1"/>
                  <div class="title_lp">Título da Imagem 1</div>
                </a>
              </div>
            </li><!-- block -->
          </ul>
        </section><!-- wrapHighlight -->
    </section><!-- highlight -->

Chamada base do plugin:

	$(function(){
		$("#highlight").slideLp();
	});

Chamada usando as configurações do plugin:

 	$(function(){
		$("#highlight").slideLp({
			auto: true,
			timeBanner: "5000",
			effects: "page",
			timeDelay: "200"
		});
	});

Configurações
===============================

O slideLp foi desenvolvido com a capacidade de poder abilitar ou desabilitar algumas funcionalidades.
<table width="100%">
	<tr>	
		<td>Sintaxe</td>
		<td>Tipo</td>
		<td>Descrição</td>
	</tr>
	<tr>	
		<td>effects</td>
		<td>string</td>
		<td>Existem dois tipos de efeito: "concertina", "slide", "fade", "pageVert", "pageHoriz"</td>
	</tr>
	<tr>	
		<td>auto</td>
		<td>boolean</td>
		<td>Faz com que o plugin asione automaticamente as transições de uma imagem para a outra. Valor padrão "true".</td>
	</tr>
	<tr>	
		<td>timeBanner</td>
		<td>integer</td>
		<td>Tempo que o banner leva para fazer a animação.</td>
	</tr>
	<tr>	
		<td>timeDelay</td>
		<td>integer</td>
		<td>o timeDelay é usando apenas nos efeitos onde precisamos de um controle melhor da transição. Exemplo: No efeito "fade", ele é usado na transição de um elemento para o outro.</td>
	</tr>
	<tr>	
		<td>timeSlide</td>
		<td>integer</td>
		<td>o timeSlide é usando para em conjunto com a transição "Slide", com isso deixando ainda mais flexível a transição.</td>
	</tr>
	<tr>	
		<td>timeDelayIn / timeDelayOut</td>
		<td>integer</td>
		<td>Serve para custumizar o tempo de entrada e saída das transições dos efeitos.</td>
	</tr>
	<tr>	
		<td>barCounter</td>
		<td>boolean</td>
		<td>Barra onde conta o tempo que resta para cada transição. Valor padrão "false".</td>
	</tr>
	<tr>	
		<td>timerClock</td>
		<td>boolean</td>
		<td>Relógio onde conta o tempo que resta para cada transição. Valor padrão "true".</td>
	</tr>
	<tr>	
		<td>timerClockSize</td>
		<td>integer</td>
		<td>Tamanho do relógio. Valor padrão "40".</td>
	</tr>
	<tr>	
		<td>pagination</td>
		<td>boolean</td>
		<td>Serve para ativar ou desativar a paginação do plugin. Valor padrão "true".</td>
	</tr>
	<tr>	
		<td>paginationThumb</td>
		<td>boolean</td>
		<td>Ativa o thumbnail da paginação. Valor padrão "false".</td>
	</tr>
	<tr>	
		<td>thumbSizeWidth / thumbSizeHeight</td>
		<td>integer</td>
		<td>Tamanho das thumbnails da paginação. Valor padrão "150".</td>
	</tr>
	<tr>	
		<td>paginationHover</td>
		<td>boolean</td>
		<td>Ativa o hover da paginação, mostrando a imagem do trigger correspondente. Valor padrão "true".</td>
	</tr>
	<tr>	
		<td>paginationCounter</td>
		<td>boolean</td>
		<td>Serve para visualizar a posição da imagem atual e a quantidade de imagens no geral. Valor padrão "true".</td>
	</tr>
	<tr>	
		<td>paginationCounterTab</td>
		<td>string</td>
		<td>Seve para custumizar a tab que divide os valores. Valor padrão "/".</td>
	</tr>
	<tr>	
		<td>navButtons</td>
		<td>boolean</td>
		<td>Serve para ativar a navegação por setas. Valor padrão "true".</td>
	</tr>
	<tr>	
		<td>prevName / nextName</td>
		<td>string</td>
		<td>Serve para custumizar o valor dos elementos. Valores padrão "<", ">".</td>
	</tr>
	<tr>	
		<td>keyboard</td>
		<td>boolean</td>
		<td>Serve para ativar a navegação por teclado, utilizando as setas de navegação. Valor padrão "false".</td>
	</tr>
	<tr>	
		<td>touch</td>
		<td>boolean</td>
		<td>Usado para facilitar a navegação em smartphones.<b>OBS: Ele não funciona em browsers do Windows Phone 8.</b> Valor padrão "false".</td>
	</tr>
	<tr>	
		<td>thresholdX / thresholdY</td>
		<td>integer</td>
		<td>Serve para ajustar a sensibilidade dos touch.</b> Valor padrão "100".</td>
	</tr>
	<tr>	
		<td>touchName</td>
		<td>string</td>
		<td>Nome do contâiner em que o touch vai exercer a sua função de toque.</b> Exemplo: o plugin está em uma tag com o id de "highlight". O touchName deve ter o seguinte valor: touchName: "#highlight".</td>
	</tr>
	<tr>	
		<td>fullScreen</td>
		<td>boolean</td>
		<td>Ativa a função full screen do plugin. <b>OBS: Para que o fullScreen funcione, é preciso que a tag que envolve o plugin tenha as dimensões do tamanho da tela, ou que o plugin não esteja dentro de nenhuma tag.</b> Valor padrão "false".</td>
	</tr>
	<tr>	
		<td>adjustmentSize</td>
		<td>integer</td>
		<td>Funciona em conjunto com a função fullScreen. Com ele você pode ajustar o tamanho do plugin com mais precisão, com isso, fazendo ajustes mais precisos caso precise.</b> Valor padrão "0".</td>
	</tr>
	<tr>	
		<td>responsive</td>
		<td>boolean</td>
		<td>Ativa a função responsiva. Valor padrão "true".</td>
	</tr>
  <tr>  
    <td>concertinaMaxWidth</td>
    <td>integer</td>
    <td>Trabalha em conjunto com a opção de efeito "concertina". Com ele passamos o valor de abertuda da tag quando o mouse está na posição hover. <b>OBS: Esse valor é em porcento, ou seja, o seu valor máximo é de 100.</b> Valor padrão "64".</td>
  </tr>
  <tr>  
    <td>concertinaAdjustmentFloat</td>
    <td>string</td>
    <td>Trabalha em conjunto com a opção de efeito "concertina". Com ele fazemos o ajuste do float na imagem, subitraindo ou almentando a distancia do float das imagens. Valor padrão "-0.5".</td>
  </tr>
  <tr>  
    <td>heigthAuto</td>
    <td>boolean</td>
    <td>Trabalha em conjunto com a opção de efeito "slide". Com ele fazemos o ajuste da altura do plugin. Valor padrão "true".</td>
  </tr>
  <tr>  
    <td>heigthAutoSpeed</td>
    <td>number</td>
    <td>Trabalha em conjunto com a opção de efeito "heigthAuto". Com ele fazemos o ajuste da velocidade do efeito. Valor padrão "300".</td>
  </tr>
</table>
