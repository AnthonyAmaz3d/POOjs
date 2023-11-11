function Filme(nome, categoria, nota, nacional, animacao) {
    this.nome = nome;
    this.categoria = categoria;
    // this.nota = nota;
    let _nota = nota;

    // getters
    this.getNota = function() {
        return _nota; 
    }

    // setters
    this.setNota = function(valor) {
        if (typeof valor === 'number' & valor <= 10) {
            _nota = valor; 
        } 
    }

    // aumento das notas
    this.aumento = function() {
        let novaNota = _nota * 1.05;
        let novaNotaFormatada = novaNota.toFixed(2);
        if (novaNotaFormatada > 10 ) {
            novaNotaFormatada = 10;
        }
        console.log(novaNotaFormatada);
    }

    this.nacional = nacional;
    this.animacao = animacao;
}

const filme1 = new Filme("Jogos mortais", "Terror", 6, false, false );
const filme2 = new Filme("Todo mundo em panico", "Terror/Comédia", 5, false, false);

function Anime(nome, categoria, nota, nacional, animacao) {
    Filme.call(this, nome, categoria, nota, nacional, animacao)
    
    this.aumento = function() {
        let novaNota = this.getNota() * 1.08;
        let novaNotaFormatada = novaNota.toFixed(2); 
        if (novaNotaFormatada > 10 ) {
            novaNotaFormatada = 10;
        }
        this.setNota(novaNotaFormatada);
        console.log(novaNotaFormatada);
    }
}

const anime1 = new Anime("Vinland Saga", "Ação e aventura", 10, false, true)
const anime2 = new Anime("Oshi no Ko", "Drama", 6, false , true)


console.log(filme1.getNota());
filme1.aumento();

console.log(filme2.getNota());
filme2.aumento();

console.log(anime1.getNota());
anime1.aumento();

console.log(anime2.getNota());
anime2.aumento();