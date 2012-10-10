Slide Lp Highlight - Lib jQuery + HTML5 + CSS3 v1.0
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
	      <nav class="pagHighlight">
	          <a href="#" data-position="0" class="active">1</a>
	          <a href="#" data-position="1" class="">2</a>
	      </nav>
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
		<td>Existem dois tipos de efeito: "Page", "Fade"</td>
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
		<td>pagination</td>
		<td>bolean</td>
		<td>"True" mostra a paginação do plugin, "False" esconde a paginação do plugin. Por padrão o plugin vem na posição "True".</td>
	</tr>
</table>

