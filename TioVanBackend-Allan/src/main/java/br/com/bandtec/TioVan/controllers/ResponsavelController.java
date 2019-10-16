package br.com.bandtec.TioVan.controllers;
import org.bson.Document;
import org.bson.types.ObjectId;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import br.com.bandtec.TioVan.models.Responsavel;
import br.com.bandtec.TioVan.utils.UtilidadesMongo;

@RestController
public class ResponsavelController {

	MongoDatabase database = UtilidadesMongo.conectarAoBanco();
	MongoCollection<Document> collectionResponsavel = database.getCollection("Responsavel");
	
	@PostMapping("/responsavel/cadastrar_responsavel")
	public ResponseEntity<String> cadastrarResponsavel(@RequestBody Responsavel responsavel){
		
		try {
			
			Document docResponsavel = UtilidadesMongo.converteObjetoParaDocument(responsavel);
			UtilidadesMongo.geraIdInsereNoDocument(docResponsavel);
			collectionResponsavel.insertOne(docResponsavel);
			return ResponseEntity.status(HttpStatus.OK).body("Sucesso");
		
		} catch (Exception e) {
			System.out.println("Exception: "+e.toString());
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Erro");
		}

	}
}
