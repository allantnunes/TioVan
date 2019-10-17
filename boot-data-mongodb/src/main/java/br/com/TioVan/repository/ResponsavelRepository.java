package br.com.TioVan.repository;


import br.com.TioVan.models.Responsavel;
import java.util.List;
import java.util.Optional;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ResponsavelRepository extends MongoRepository<Responsavel, String>{

    public List<Responsavel> findByNomeLike(String nome);

}