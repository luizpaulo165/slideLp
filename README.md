Slide Lp Highlight - Lib jQuery v1.0
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

- $("#highlight").slideLp();

Chamada usando as configurações do plugin:

- $("#highlight").slideLp({
	auto: true,
	timeBanner: "3000",
	timeDelay: "500",
	pagination: true,
	effects: "page"
  });

Configurações
===============================

O slideLp foi desenvolvido com a capacidade de poder abilitar ou desabilitar algumas funcionalidades.
<table width="100%">
	<tr>
		<td colspan="3">Configurações Padrões</td>
	</tr>
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

