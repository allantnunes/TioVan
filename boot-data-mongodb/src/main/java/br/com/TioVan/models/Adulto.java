package br.com.TioVan.models;

import com.fasterxml.jackson.annotation.JsonProperty;

public abstract class Adulto extends Pessoa{
	
	@JsonProperty
	private String cpf;
	@JsonProperty
	private String celular;
	@JsonProperty
	private String email;
	@JsonProperty
	private Endereco endereco;
	
	public Adulto(String nome, Genero genero, String cpf, String celular, String email, Endereco endereco) {
		super(nome, genero);
		this.cpf = cpf;
		this.celular = celular;
		this.endereco = endereco;
		this.email = email;
	}
	
	public String getCpf() {
		return cpf;
	}
	public void setCpf(String cpf) {
		this.cpf = cpf;
	}
	public String getCelular() {
		return celular;
	}
	public void setCelular(String celular) {
		this.celular = celular;
	}
	public Endereco getEndereco() {
		return endereco;
	}
	public void setEndereco(Endereco endereco) {
		this.endereco = endereco;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
	
}
