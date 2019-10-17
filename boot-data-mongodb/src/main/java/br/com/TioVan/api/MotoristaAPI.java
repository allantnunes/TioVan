package br.com.TioVan.api;

import br.com.TioVan.models.Motorista;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.TioVan.models.Responsavel;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.PutMapping;
import br.com.TioVan.repository.MotoristaRepository;

@RestController
@RequestMapping("/motorista")
public class MotoristaAPI {

    @Autowired
    public MotoristaRepository motoristaRepository;
//	@Autowired
//	private EnderecoRepository enderecoRepository;

//        private Endereco savedEndereco;
    @GetMapping
    public ResponseEntity<?> list() {

        List<Motorista> list = motoristaRepository.findAll();

        return ResponseEntity.ok(list);
    }

    @GetMapping(path = "/{nome}")
    public ResponseEntity<?> view(@PathVariable String nome) {

        List<Motorista> cliente = motoristaRepository.findByNomeLike(nome);
            
        return ResponseEntity.ok(cliente);
    }

    @PostMapping
    public ResponseEntity<String> cadastrarUsuarioMongo(@RequestBody Motorista motorista) {
//            System.out.println(endereco);
//            savedEndereco = enderecoRepository.save(endereco);

        System.out.println(motoristaRepository.save(motorista));

        return ResponseEntity.ok("Sucesso");
    }

    @PutMapping(path = "/{resId}")
    public ResponseEntity<String> atualizarUsuarioMongo(@RequestBody Motorista motorista, @PathVariable String resId) {
        motorista.setId(resId);

        
        System.out.println(motoristaRepository.save(motorista));

        return ResponseEntity.ok("Sucesso");
    }
}
