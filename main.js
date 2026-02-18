class Pokemon {
    constructor(nome, tipo, evolucoes){
        this.nome = nome;
        this.tipo = tipo;
        this.evolucoes = evolucoes;
    }
}

class PokemonEletrico extends Pokemon {
    constructor(nome, tipo, evolucoes, cargaEletrica){
        super(nome, tipo, evolucoes);
        this.cargaEletrica = cargaEletrica;
    }

    exibirDetalhes(){
        return `O pokémon ${this.nome} do tipo ${this.tipo} evolui para ${this.evolucoes} e tem ${this.cargaEletrica} de carga elétrica`
    }
}

class PokemonPlanta extends Pokemon {
    constructor(nome, tipo, evolucoes, imobilizacao){
        super(nome, tipo, evolucoes);
        this.imobilizacao = imobilizacao;
    }

    exibirDetalhes(){
        return `O pokémon ${this.nome} do tipo ${this.tipo} evolui para ${this.evolucoes} e pode usar ${this.imobilizacao} para atordoar inimigos`
    }
}

const Pikachu = new PokemonEletrico("Pikachu", "Elétrico", "Raichu", "35 volts");
const Bulbasaur = new PokemonPlanta("Bulbasaur", "Planta", "Ivysaur, Venusaur", "Enroscar");

function exibir(pokemon){
    console.log(pokemon.exibirDetalhes());
}

exibir(Pikachu);

exibir(Bulbasaur);
