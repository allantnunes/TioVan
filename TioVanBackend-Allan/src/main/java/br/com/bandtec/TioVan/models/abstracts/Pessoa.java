package br.com.bandtec.TioVan.models.abstracts;

import com.fasterxml.jackson.annotation.JsonProperty;

import br.com.bandtec.TioVan.models.Genero;

public abstract class Pessoa {
	
	@JsonProperty
	private String nome;
	@JsonProperty
	private Genero genero;
	
	public Pessoa(String nome, Genero genero) {
		this.nome = nome;
		this.genero = genero;
	}
	
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public Genero getGenero() {
		return genero;
	}
	public void setGenero(Genero genero) {
		this.genero = genero;
	}
	
	
	
}
