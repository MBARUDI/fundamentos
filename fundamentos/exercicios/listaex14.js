function verificarLogin(usuario, senha) {
    const usuarioCorreto = "admin";
    const senhaCorreta = "1234";

    if (usuario === usuarioCorreto && senha === senhaCorreta) {
        return "Acesso permitido";
    } else {
        return "Acesso negado";
    }
}

// Exemplo de uso:
console.log(verificarLogin("admin", "1234")); // Acesso permitido
console.log(verificarLogin("user", "1234"));  // Acesso negado