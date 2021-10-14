function novaPessoa (nome, idade){
    return {nome, idade}
}
function pessoasDados(telefone, email,cidade){
    return{telefone, email, cidade}
}
let pessoas = [
    novaPessoa("Henrique",13),
    novaPessoa("Carlos",14),
    novaPessoa("Claudinéia",26)
]
let pessoas_dados = [
    pessoasDados(26233723, "henrique@bradis.mail", "Sorocaba"),
    pessoasDados(23236763, "carlos@jg.zigs", "Valinhos"),
    pessoasDados(372327362, "claudinéia@gbomzips","Santa Peixe")
]

let todos_dados = [...pessoas, ...pessoas_dados];
console.log(todos_dados);