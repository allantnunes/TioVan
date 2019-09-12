package br.com.bandtec.TioVan.Controller;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.bson.Document;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.mongodb.BasicDBObject;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;

@RestController
public class UsuarioController {

    private final List<Usuario> usuarios = new ArrayList<Usuario>();

    public UsuarioController() {
        
//        System.out.println(obterTodosUsuarios());
        this.usuarios.add(new Usuario("Ferrer",new Credenciais("lferrer","123")));
        System.out.println(this.usuarios);
    }

    @GetMapping("/usuarios/nome/{nomeDoUsuario}")
    public ResponseEntity<List<Usuario>> obterPorNome(@PathVariable("nomeDoUsuario") String nome) {
        List<Usuario> usuariosPorNome = new ArrayList<Usuario>();
        for (Usuario u : usuarios) {
            System.out.println(u.getNome());
            if (u.getNome().contentEquals(nome)) {
                usuariosPorNome.add(u);
            }
        }
        if (usuariosPorNome.isEmpty()) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(usuariosPorNome);
    }

//    @GetMapping("/usuarios/idade/{idadeDoUsuario}")
//    public ResponseEntity<List<Usuario>> obterPorIdade(@PathVariable("idadeDoUsuario") String login) {
//        List<Usuario> usuariosPorIdade = new ArrayList<Usuario>();
//        for (Usuario u : usuarios) {
//            if (u.getLogin() == login) {
//                usuariosPorIdade.add(u);
//            }
//        }
//        if (usuariosPorIdade.isEmpty()) {
//            return ResponseEntity.noContent().build();
//        }
//        return ResponseEntity.ok(usuariosPorIdade);
//
//    }

    public List<Usuario> obterTodosUsuarios() {
            
        return usuarios;
//                return Arrays.asList (
//                new Usuario("Rodrigo", 39),
//                new Usuario("Rodrigo", 30),
//                new Usuario("Michelle", 18)
//        );
    }
    @PostMapping("/usuarios")
    public ResponseEntity<Usuario> create(@RequestBody Usuario usuario) {

        this.usuarios.add(usuario);

//        System.out.println(usuario.getNome());

        return ResponseEntity.ok(usuario);
    }
    
    @PostMapping("/cadastrar_usuario")
    public void cadastrarUsuarioMongo(@RequestBody int idUsuario, String strNomeUsuario, 
    		String strLoginUsuario, String strSenhaUsuario ) {
    	
		MongoClient mongoClient = MongoClients.create("mongodb+srv://admtiovan:tiovanapp2019@tiovan-hfphq.azure.mongodb.net/test?retryWrites=true&w=majority");
		MongoDatabase database = mongoClient.getDatabase("dbTioVan");

		System.out.println(database.getName());
		
		MongoCollection<Document> collection = database.getCollection("tbUsuarios");
		
		Document doc = new Document("idUsuario", idUsuario)
                .append("strNomeUsuario", strNomeUsuario)
                .append("strLoginUsuario", strLoginUsuario)
                .append("strSenhaUsuario", strSenhaUsuario);
	 
		collection.insertOne(doc);
		
		/*BasicDBObject query = new BasicDBObject();
		
		query.put("idUsuario",1);
		
		System.out.println(collection.find(query).first().toJson());*/
		

		
    	
    }
    
}


