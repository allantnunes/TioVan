package br.com.bandtec.TioVan.models;

import java.util.ArrayList;
import java.util.List;

import br.com.bandtec.TioVan.models.abstracts.Pessoa;

public class Dependente extends Pessoa{

	private List<String> responsaveis;
	private String instituicao;

	public Dependente(String nome, Genero genero, String instituicao) {
		super(nome, genero);
		this.instituicao = instituicao;
		responsaveis = new ArrayList<String>();
	}
	
	public List<String> getResponsaveis() {
		return responsaveis;
	}
	public void setResponsaveis(List<String> responsaveis) {
		this.responsaveis = responsaveis;
	}

	public void insereResponsavel(String idResponsavel) {
		responsaveis.add(idResponsavel);
	}

	public String getInstituicao() {
		return instituicao;
	}

	public void setInstituicao(String instituicao) {
		this.instituicao = instituicao;
	}
	
	
	
}
