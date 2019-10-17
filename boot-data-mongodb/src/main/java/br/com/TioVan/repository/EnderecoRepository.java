package br.com.TioVan.repository;

import br.com.TioVan.models.Endereco;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface EnderecoRepository extends MongoRepository<Endereco, String>{

}