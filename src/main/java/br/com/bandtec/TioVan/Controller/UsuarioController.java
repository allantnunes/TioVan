package br.com.bandtec.TioVan.Controller;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

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
}


