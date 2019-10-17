package br.com.TioVan.api;

import br.com.TioVan.models.Endereco;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.TioVan.repository.EnderecoRepository;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/Endereco")
public class EnderecoAPI {

	@Autowired
	private EnderecoRepository repository;
	
	@GetMapping
	public ResponseEntity<?> list(){
		
		List<Endereco> list = repository.findAll();
		
		return ResponseEntity.ok(list);
	}
	
//	@GetMapping(path="/{nome}")
//	public ResponseEntity<Responsavel> view(@PathVariable String nome){
//		
//		Optional<Responsavel> cliente = repository.findById(nome);
//		
//		return cliente.map(cli -> ResponseEntity.ok(cli))
//					  .orElse(ResponseEntity.noContent().build());
//	}
        @PostMapping
        public ResponseEntity<String> cadastrarEndereco(@RequestBody Endereco endereco){
            
            repository.save(endereco);
            return ResponseEntity.ok("Sucesso");
        }
}