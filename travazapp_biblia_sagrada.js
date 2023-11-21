async function enviarScript(scriptText){

    /* Código inspirado no projeto disponível em  https://github.com/Matt-Fontes/SendScriptWhatsApp */
    /* Como utilizar? 
        Copie todo esse código; 
        Use  Whatsapp Web no computador;
        Abra a conversa que você quer enviar esses textos sagrados;
        Pressione a tecla F12 para abrir as Ferramentas de Desenvolvedor.
        Clique em CONSOLE
        na linha com  ">", cole este código com CTRL+V
        Tecle ENTER.

        A outra pessoa da conversa receberá esses valorosos ensinamentos.
        
        Tenha um excelente e abençoado dia!
    */
       
	const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
	main = document.querySelector("#main"),
	textarea = main.querySelector(`div[contenteditable="true"]`)
	
	if(!textarea) throw new Error("Não há uma conversa aberta")
	
	for(const line of lines){
		console.log(line)
	
		textarea.focus();
		document.execCommand('insertText', false, line);
		textarea.dispatchEvent(new Event('change', {bubbles: true}));
	
		setTimeout(() => {
			(main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
		}, 100);
		
		if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
	}
	
	return lines.length;
}

enviarScript(`
Que Jesus abençoe você e sua família.



BÍBLIA SAGRADA
Tradução: João Ferreira de Almeida
Edição Revista e Corrigida
 	
ANTIGO TESTAMENTO

GÊNESIS
 GÊNESIS 1
1 No princípio criou Deus os céus e a terra.
2 A terra era sem forma e vazia; e havia trevas sobre a face do abismo, mas o Espírito de Deus pairava sobre a face das águas.
3 Disse Deus: haja luz. E houve luz.
4 Viu Deus que a luz era boa; e fez separação entre a luz e as trevas.
5 E Deus chamou à luz dia, e às trevas noite. E foi a tarde e a manhã, o dia primeiro.
6 E disse Deus: haja um firmamento no meio das águas, e haja separação entre águas e águas.
7 Fez, pois, Deus o firmamento, e separou as águas que estavam debaixo do firmamento das que estavam por cima do firmamento. E assim foi.
8 Chamou Deus ao firmamento céu. E foi a tarde e a manhã, o dia segundo.
9 E disse Deus: Ajuntem-se num só lugar as águas que estão debaixo do céu, e apareça o elemento seco. E assim foi.
10 Chamou Deus ao elemento seco terra, e ao ajuntamento das águas mares. E viu Deus que isso era bom.
11 E disse Deus: Produza a terra relva, ervas que dêem semente, e árvores frutíferas que, segundo as suas espécies, dêem fruto que tenha em si a sua semente, sobre a terra. E assim foi.
12 A terra, pois, produziu relva, ervas que davam semente segundo as suas espécies, e árvores que davam fruto que tinha em si a sua semente, segundo as suas espécies. E viu Deus que isso era bom.
13 E foi a tarde e a manhã, o dia terceiro.
14 E disse Deus: haja luminares no firmamento do céu, para fazerem separação entre o dia e a noite; sejam eles para sinais e para estações, e para dias e anos;
15 e sirvam de luminares no firmamento do céu, para alumiar a terra. E assim foi.
16 Deus, pois, fez os dois grandes luminares: o luminar maior para governar o dia, e o luminar menor para governar a noite; fez também as estrelas.
17 E Deus os pôs no firmamento do céu para alumiar a terra,
18 para governar o dia e a noite, e para fazer separação entre a luz e as trevas. E viu Deus que isso era bom.
19 E foi a tarde e a manhã, o dia quarto.
20 E disse Deus: Produzam as águas cardumes de seres viventes; e voem as aves acima da terra no firmamento do céu.
21 Criou, pois, Deus os monstros marinhos, e todos os seres viventes que se arrastavam, os quais as águas produziram abundantemente segundo as suas espécies; e toda ave que voa, segundo a sua espécie. E viu Deus que isso era bom.
22 Então Deus os abençoou, dizendo: Frutificai e multiplicai-vos, e enchei as águas dos mares; e multipliquem-se as aves sobre a terra.
23 E foi a tarde e a manhã, o dia quinto.
24 E disse Deus: Produza a terra seres viventes segundo as suas espécies: animais domésticos, répteis, e animais selvagens segundo as suas espécies. E assim foi.
25 Deus, pois, fez os animais selvagens segundo as suas espécies, e os animais domésticos segundo as suas espécies, e todos os répteis da terra segundo as suas espécies. E viu Deus que isso era bom.
26 E disse Deus: Façamos o homem à nossa imagem, conforme a nossa semelhança; domine ele sobre os peixes do mar, sobre as aves do céu, sobre os animais domésticos, e sobre toda a terra, e sobre todo réptil que se arrasta sobre a terra.
27 Criou, pois, Deus o homem à sua imagem; à imagem de Deus o criou; homem e mulher os criou.
28 Então Deus os abençoou e lhes disse: Frutificai e multiplicai-vos; enchei a terra e sujeitai-a; dominai sobre os peixes do mar, sobre as aves do céu e sobre todos os animais que se arrastam sobre a terra.
29 Disse-lhes mais: Eis que vos tenho dado todas as ervas que produzem semente, as quais se acham sobre a face de toda a terra, bem como todas as árvores em que há fruto que dê semente; ser-vos-ão para mantimento.
30 E a todos os animais da terra, a todas as aves do céu e a todo ser vivente que se arrasta sobre a terra, tenho dado todas as ervas verdes como mantimento. E assim foi.
31 E viu Deus tudo quanto fizera, e eis que era muito bom. E foi a tarde e a manhã, o dia sexto.
 GÊNESIS 2
1 Assim foram acabados os céus e a terra, com todo o seu exército.
2 Ora, havendo Deus completado no dia sétimo a obra que tinha feito, descansou nesse dia de toda a obra que fizera.
3 Abençoou Deus o sétimo dia, e o santificou; porque nele descansou de toda a sua obra que criara e fizera.
4 Eis as origens dos céus e da terra, quando foram criados. No dia em que o Senhor Deus fez a terra e os céus
5 não havia ainda nenhuma planta do campo na terra, pois nenhuma erva do campo tinha ainda brotado; porque o Senhor Deus não tinha feito chover sobre a terra, nem havia homem para lavrar a terra.
6 Um vapor, porém, subia da terra, e regava toda a face da terra.
7 E formou o Senhor Deus o homem do pó da terra, e soprou-lhe nas narinas o fôlego da vida; e o homem tornou-se alma vivente.
8 Então plantou o Senhor Deus um jardim, da banda do oriente, no Éden; e pôs ali o homem que tinha formado.
9 E o Senhor Deus fez brotar da terra toda qualidade de árvores agradáveis à vista e boas para comida, bem como a árvore da vida no meio do jardim, e a árvore do conhecimento do bem e do mal.
10 E saía um rio do Éden para regar o jardim; e dali se dividia e se tornava em quatro braços.
11 O nome do primeiro é Pisom: este é o que rodeia toda a terra de Havilá, onde há ouro;
12 e o ouro dessa terra é bom: ali há o bdélio, e a pedra de berilo.
13 O nome do segundo rio é Giom: este é o que rodeia toda a terra de Cuche.
14 O nome do terceiro rio é Tigre: este é o que corre pelo oriente da Assíria. E o quarto rio é o Eufrates.
15 Tomou, pois, o Senhor Deus o homem, e o pôs no jardim do Édem para o lavrar e guardar.
16 Ordenou o Senhor Deus ao homem, dizendo: De toda árvore do jardim podes comer livremente;
17 mas da árvore do conhecimento do bem e do mal, dessa não comerás; porque no dia em que dela comeres, certamente morrerás.
18 Disse mais o Senhor Deus: Não é bom que o homem esteja só; far-lhe-ei uma ajudadora que lhe seja idônea.
19 Da terra formou, pois, o Senhor Deus todos os animais o campo e todas as aves do céu, e os trouxe ao homem, para ver como lhes chamaria; e tudo o que o homem chamou a todo ser vivente, isso foi o seu nome.
20 Assim o homem deu nomes a todos os animais domésticos, às aves do céu e a todos os animais do campo; mas para o homem não se achava ajudadora idônea.
21 Então o Senhor Deus fez cair um sono pesado sobre o homem, e este adormeceu; tomou-lhe, então, uma das costelas, e fechou a carne em seu lugar;
22 e da costela que o senhor Deus lhe tomara, formou a mulher e a trouxe ao homem.
23 Então disse o homem: Esta é agora osso dos meus ossos, e carne da minha carne; ela será chamada varoa, porquanto do varão foi tomada.
24 Portanto deixará o homem a seu pai e a sua mãe, e unir-se-á à sua mulher, e serão uma só carne.
25 E ambos estavam nus, o homem e sua mulher; e não se envergonhavam.


`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)