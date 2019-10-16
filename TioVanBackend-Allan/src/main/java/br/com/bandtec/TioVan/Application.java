package br.com.bandtec.TioVan;

import java.util.List;

import org.bson.Document;
import org.bson.conversions.Bson;
import org.bson.types.ObjectId;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.google.gson.Gson;
import com.mongodb.BasicDBObject;
import com.mongodb.DB;
import com.mongodb.DBObject;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;

import br.com.bandtec.TioVan.models.Dependente;
import br.com.bandtec.TioVan.models.Endereco;
import br.com.bandtec.TioVan.models.Genero;
import br.com.bandtec.TioVan.models.Instituicao;
import br.com.bandtec.TioVan.models.Responsavel;
import br.com.bandtec.TioVan.utils.UtilidadesMongo;

@SpringBootApplication
public class Application {

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
		System.out.println("Rodando");
		/*
		MongoDatabase database = UtilidadesMongo.conectarAoBanco();

		System.out.println(database.getName());

		MongoCollection<Document> collectionResponsavel = database.getCollection("Responsavel");
		MongoCollection<Document> collectionEndereco = database.getCollection("Endereco");
		MongoCollection<Document> collectionDependente = database.getCollection("Dependente");
		MongoCollection<Document> collectionInstituicao = database.getCollection("Instituicao");

		
		FindIterable<Document> docs = collection.find();
		  
		for(Document doc : docs) {
		System.out.println(doc.getString("strNomeUsuario")); }
		

		Gson gson = new Gson();

		BasicDBObject query = new BasicDBObject();
		query.put("nome", "Allan");
		String jsonResultado = collectionResponsavel.find(query).first().toJson();

		if (jsonResultado != null || !jsonResultado.isEmpty()) {
			Responsavel responsavelResultadoBusca = gson.fromJson(jsonResultado, Responsavel.class);
			Document docResponsavel = Document.parse(jsonResultado);
			String idResponsavel = docResponsavel.get("_id").toString();
			System.out.println("id Responsavel: " + idResponsavel);

			List<String> listaDeDependentes = responsavelResultadoBusca.getDependentes();

			/*
			BasicDBObject queryDependente = new BasicDBObject();
			queryDependente.put("_id", new ObjectId(listaDeDependentes.get(0).toString()));
			Document doc = collectionDependente.find(queryDependente).first();
			jsonResultado = doc.toJson();
			System.out.println("DEPENDENTE " + jsonResultado);
			
			
			Instituicao instituicao = new Instituicao("Escola Nova Meta", new Endereco("Rua", "Joaquim Afonso de Souza", "123", "B", "São Paulo", "Vila Celeste", "SP", "02548-148"), "3670-4221");
			Document docInstituicao = UtilidadesMongo.converteObjetoParaDocument(instituicao);
			ObjectId idInstituicao = ObjectId.get();
			docInstituicao.append("_id", idInstituicao);
			collectionInstituicao.insertOne(docInstituicao);
			
			Dependente dependente = new Dependente("Felipe", Genero.MASCULINO, idInstituicao.toString());
			dependente.insereResponsavel(idResponsavel);
			Document docDependente = UtilidadesMongo.converteObjetoParaDocument(dependente);
			ObjectId idDependente = ObjectId.get();
			docDependente.append("_id", idDependente);
			collectionDependente.insertOne(docDependente);

			responsavelResultadoBusca.insereDependente(idDependente.toString());
			BasicDBObject queryDeIdentificacao = new BasicDBObject();
			queryDeIdentificacao.put("_id", new ObjectId(idResponsavel));
			
			BasicDBObject queryNomeLista = new BasicDBObject();
			queryNomeLista.put("dependentes",idDependente.toString());
			BasicDBObject queryDeUpdate = new BasicDBObject("$push",queryNomeLista);
			
			collectionResponsavel.updateOne(queryDeIdentificacao, queryDeUpdate);

			System.out.println("Sucesso!");

		} else {
			System.out.println("Não encontrado");
		}*/
		
		/*
		  Endereco endereco = new Endereco();
		  Dependente dependente = new Dependente("Gustavo"); 
		  Responsavel responsavel = new Responsavel("Allan", endereco);
		  
		  ObjectId idDependente = ObjectId.get(); 
		  ObjectId idResponsavel = ObjectId.get();
		  
		  responsavel.insereDependente(idDependente.toString());
		  dependente.insereResponsavel(idResponsavel.toString());
		  
		  Document docDependente = Document.parse(gson.toJson(dependente));
		  docDependente.append("_id", idDependente);
		  collectionDependente.insertOne(docDependente);
		  
		  Document docResponsavel = Document.parse(gson.toJson(responsavel));
		  docResponsavel.append("_id", idResponsavel);
		  collectionResponsavel.insertOne(docResponsavel);
		 */

		/*
		  Document doc = Document.parse(json); System.out.println("Doc: "+doc);
		  
		  collection.insertOne(doc);
		 */

	}

}
