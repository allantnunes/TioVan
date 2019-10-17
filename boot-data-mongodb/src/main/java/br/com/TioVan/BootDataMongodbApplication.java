package br.com.TioVan;

import io.github.kaiso.relmongo.config.EnableRelMongo;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@EnableRelMongo
@SpringBootApplication
public class BootDataMongodbApplication {

	public static void main(String[] args) {
		SpringApplication.run(BootDataMongodbApplication.class, args);
	}
}