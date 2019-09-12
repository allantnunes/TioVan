<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Teste - Cadastro de usuário MongoDB </title>
</head>
<body>

<h2>Teste - Cadastro de usuário MongoDB</h2>
<form method="post" action="/cadastrar_usuario">
	<div>
		<label>Id Usuario:</label><input type="number" name="idUsuario"><br>
		<label>Nome Completo:</label><input type="text" name="strNomeUsuario"><br>
		<label>Login:</label><input type="text" name="strLoginUsuario"><br>
		<label>Senha:</label><input type="password" name="strSenhaUsuario"><br>
		<br>
		<input type="submit" value="Cadastrar">
	</div>
</form>

</body>
</html>