package br.com.bandtec.TioVan.models;

import java.util.ArrayList;
import java.util.List;

import br.com.bandtec.TioVan.models.abstracts.Adulto;

public class Responsavel extends Adulto{

	private List<String> dependentes;
	
	public Responsavel(String nome, Genero genero, String cpf, String celular, String email, Endereco endereco) {
		super(nome, genero, cpf, celular, email, endereco);
		dependentes = new ArrayList<String>();
	}	

	public void insereDependente(String idDependente) {
		dependentes.add(idDependente);
	}
	public List<String> getDependentes() {
		return dependentes;
	}
	public void setDependentes(List<String> dependentes) {
		this.dependentes = dependentes;
	}
		
}
