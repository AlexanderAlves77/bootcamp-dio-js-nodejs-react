programa
{
	
	funcao inicio()
	{
		real venda1,venda2,venda3,venda4,total,media
		cadeia funcionario

		escreva("Digite o nome do funcionário: ")
		leia(funcionario)
		escreva("Digita a venda 1: ")
		leia(venda1)
		escreva("Digite a venda 2:")
		leia(venda2)
		escreva("Digita a venda 3: ")
		leia(venda3)
		escreva("Digita a venda 4: ")
		leia(venda4)

		total = (venda1+venda2+venda3+venda4)
		media = (venda1+venda2+venda3+venda4)/4
		escreva("O funcionario: " + funcionario + " teve um total de vendas: " + total + " tendo a media de vendas: " + media)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 544; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */