package br.com.tiovan.TioVan;

import org.bson.Document;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import com.mongodb.client.MongoClient;

@SpringBootApplication
public class TioVanApplication {

	public static void main(String[] args) {
		SpringApplication.run(TioVanApplication.class, args);

		MongoClient mongoClient = MongoClients.create("mongodb+srv://allantnunes:<123456>@tiovan-hfphq.azure.mongodb.net/test?retryWrites=true&w=majority");
		MongoDatabase database = mongoClient.getDatabase("dbTioVan");

		System.out.println(database.getName());
		
		MongoCollection<Document> collection = database.getCollection("test");
		
		 Document doc = new Document("idUsuario", 2)
	                .append("strNomeUsuario", "José Luís")
	                .append("strLoginUsuario", "joseluis")
	                .append("strSenhaUsuario", "123456");
		 
		 collection.insertOne(doc);
	}

}
