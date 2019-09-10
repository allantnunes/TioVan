package br.com.bandtec.TioVan.Controller;

public class Usuario {

    private String nome;
    private Credenciais credenciais;

    public Usuario(String nome, Credenciais credenciais) {
        this.nome = nome;
        this.credenciais = credenciais;
    }

    public Usuario(Credenciais credenciais) {
        this.credenciais = credenciais;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Credenciais getCredenciais() {
        return credenciais;
    }

    public void setCredenciais(Credenciais credenciais) {
        this.credenciais = credenciais;
    }

    @Override
    public String toString() {
        return "Usuario{" + "nome=" + nome + ", credenciais=" + credenciais + '}';
    }

}
