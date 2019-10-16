package br.com.bandtec.TioVan.controllers;

import org.bson.Document;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;

import br.com.bandtec.TioVan.models.Motorista;
import br.com.bandtec.TioVan.utils.UtilidadesMongo;

@RestController
public class MotoristaController {

	MongoDatabase database = UtilidadesMongo.conectarAoBanco();
	MongoCollection<Document> collectionMotorista = database.getCollection("Motorista");
	
	@PostMapping("/motorista/cadastrar_motorista")
	public ResponseEntity<String> cadastrarMotorista(@RequestBody Motorista motorista){
		
		System.out.println("Chamou o método ----");
		System.out.println("Apelido Motorista: "+ motorista.getApelido());
		System.out.println("Nome Motorista: "+ motorista.getNome());
		
		try {
			Document docMotorista = UtilidadesMongo.converteObjetoParaDocument(motorista);
			UtilidadesMongo.geraIdInsereNoDocument(docMotorista);
			collectionMotorista.insertOne(docMotorista);
			return ResponseEntity.status(HttpStatus.OK).body("Sucesso");
		} catch (Exception e) {
			System.out.println("Exception: "+e.toString());
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Erro");
		}

	}
	
}
