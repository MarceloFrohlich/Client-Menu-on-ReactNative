import cardapio from "./dados";

export function buscaItemCardapio(termoDigitado) {
    const itemCardapio = cardapio.filter(
        (item) =>
        item.nome.toLocaleLowerCase().includes(termoDigitado.toLocaleLowerCase())
        ||
        item.descricao.toLocaleLowerCase().includes(termoDigitado.toLocaleLowerCase())
        ||
        item.categoria.toLocaleLowerCase().includes(termoDigitado.toLocaleLowerCase())
    )
    return itemCardapio
}

export function filtroCategoria(categoria) {
    return cardapio.filter((produto) => produto.categoria.toLocaleLowerCase() === categoria.toLocaleLowerCase())
}

export function filtroSugestoes(){
    return cardapio.filter((produto) => produto.sugerido === true);
}