/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.TioVan.models;

import java.util.ArrayList;
import java.util.List;


import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection="Responsavel")
public class Responsavel extends Adulto{
        @Id
        private String id;
        
	private List<String> dependentes;
	
	public Responsavel(String nome, Genero genero, String cpf, String celular, String email, Endereco endereco) {
		super(nome, genero, cpf, celular, email, endereco);
		dependentes = new ArrayList<String>();
	}	
//
//	public void insereDependente(String idDependente) {
//		dependentes.add(idDependente);
//	}
//	public List<String> getDependentes() {
//		return dependentes;
//	}
//	public void setDependentes(List<String> dependentes) {
//		this.dependentes = dependentes;
//	}
		
}