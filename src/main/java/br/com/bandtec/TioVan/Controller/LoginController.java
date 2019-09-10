package br.com.bandtec.TioVan.Controller;

import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {
    List<Usuario> users = new UsuarioController().obterTodosUsuarios();
    @PostMapping("/login")
    public ResponseEntity<String> validarLogin(@RequestBody Usuario credenciais) {
        for (Usuario u : users) {
            if (u.getCredenciais().getLogin().equals(credenciais.getCredenciais().getLogin()) &&
                    u.getCredenciais().getSenha().equals(credenciais.getCredenciais().getSenha())) {
                return ResponseEntity.ok("Sucesso");
            }
        }

        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Erro");

    }

}
