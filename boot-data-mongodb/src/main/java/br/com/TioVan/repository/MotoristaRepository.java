package br.com.TioVan.repository;


import br.com.TioVan.models.Motorista;
import java.util.List;
import java.util.Optional;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface MotoristaRepository extends MongoRepository<Motorista, String>{

    public List<Motorista> findByNomeLike(String nome);

}