package br.com.TioVan.api;

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
import br.com.TioVan.repository.ResponsavelRepository;

@RestController
@RequestMapping("/responsavel")
public class ResponsavelAPI {

    @Autowired
    public ResponsavelRepository responsavelRepository;
//	@Autowired
//	private EnderecoRepository enderecoRepository;

//        private Endereco savedEndereco;
    @GetMapping
    public ResponseEntity<?> list() {

        List<Responsavel> list = responsavelRepository.findAll();

        return ResponseEntity.ok(list);
    }

    @GetMapping(path = "/{nome}")
    public ResponseEntity<?> view(@PathVariable String nome) {

        List<Responsavel> cliente = responsavelRepository.findByNomeLike(nome);
            
        return ResponseEntity.ok(cliente);
    }

    @PostMapping
    public ResponseEntity<String> cadastrarUsuarioMongo(@RequestBody Responsavel responsavel) {
//            System.out.println(endereco);
//            savedEndereco = enderecoRepository.save(endereco);

        System.out.println(responsavelRepository.save(responsavel));

        return ResponseEntity.ok("Sucesso");
    }

    @PutMapping(path = "/{resId}")
    public ResponseEntity<String> atualizarUsuarioMongo(@RequestBody Responsavel responsavel, @PathVariable String resId) {
        responsavel.setId(resId);

        
        System.out.println(responsavelRepository.save(responsavel));

        return ResponseEntity.ok("Sucesso");
    }
}
