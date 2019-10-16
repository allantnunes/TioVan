package br.com.bandtec.TioVan.utils;

import org.bson.Document;
import org.bson.types.ObjectId;

import com.google.gson.Gson;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoDatabase;

public class UtilidadesMongo {
	
	static Gson gson = new Gson();
	
	public static Document converteObjetoParaDocument(Object o) {
		return Document.parse(gson.toJson(o));
	}
	
	public static ObjectId geraIdInsereNoDocument(Document doc) {
		ObjectId oi = ObjectId.get();
		doc.append("_id", oi);
		return oi;
	}
	
	public static MongoDatabase conectarAoBanco() {
		MongoClient mongoClient = MongoClients.create(
				"mongodb+srv://allantnunes:tiovan2019@tiovan-hfphq.azure.mongodb.net/test?retryWrites=true&w=majority");
		MongoDatabase database = mongoClient.getDatabase("dbTioVan");
		return database;
	}

}
