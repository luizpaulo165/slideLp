Slide Lp Highlight - Lib jQuery + HTML5 + CSS3 + RESPONSIVO + TOUCH v2.0
===============================

Este plugin está sendo desenvolvido para facilitar a vida de muitas pessoas que pretendem desenvolver um site e precisam de um banner de destaque.

Ainda estamos na versão 1.0, portanto existem algumas propriedades que ainda não foram desenvolvidas. Existem também alguns bugs a serem corrigidos, por favos, caso encontre algum, comentar o ocorrido para que possamos corrigi-los.

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

	<section id="highlight"> <!-- section onde vai ser agrupada o plugin -->
	   <section class="wrapHighlight"> <!-- esta section não pode ter a classe "wrapHighlight" removida -->
	      <ul class="listCont">
	        <li data-position="0" class="">
	          <div class="cont"><!-- esta div não pode ser removida -->
	            conteudo
	          </div>
	        </li><!-- block -->
	        <li data-position="1" class="">
	          <div class="cont">
	            conteudo
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
		<td>Existem dois tipos de efeito: "slide", "fade", "pageVert", "pageHoriz"</td>
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
		<td>Ativa a função full screen do plugin. Valor padrão "false".</td>
	</tr>
	<tr>	
		<td>adjustmentSize</td>
		<td>integer</td>
		<td>Funciona em conjunto com a função fullScreen. Com ele você pode ajustar o tamanho do plugin com mais precisão, com isso, fazendo ajustes mais precisos caso precise.</b> Valor padrão "0".</td>
	</tr>
</table>