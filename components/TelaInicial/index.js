import React, {useState} from "react";
import {Image, TextInput, Text, View, ScrollView} from 'react-native';
import ItemMenu from '../ItemMenu'

import estilo from './style'
import Logo from '../../assets/logo.png'
import cardapio from '../dados';
import { buscaItemCardapio, filtroSugestoes } from "../servicos";

export default function TelaInicial() {

    const [titulo, setTitulo] = useState("Sugestões")
    const [textoBusca, setTextoBusca] = useState("")
    const [cardapioLista, setCardapioLista] = useState(filtroSugestoes())

    function handleBusca(busca) {
        if (busca.length > 2) {
            const buscaLista = buscaItemCardapio(busca)

            setCardapioLista(buscaLista);
            setTitulo("Você buscou por: " + busca)
        } else {
            setCardapioLista(filtroSugestoes())
            setTitulo("Sugestões")
        }
        setTextoBusca(busca)
    }

    return (
        <View style={estilo.container}>
            <Image source={Logo} style={estilo.logo}></Image>
            <TextInput
            style={estilo.input}
            placeholder="O que você procura?"
            value={textoBusca}
            onChangeText={(busca) => handleBusca(busca) }
            />
            <Text style={estilo.sugestoes}>{titulo}</Text>

        <ScrollView style={estilo.lista}>
            {
                cardapioLista.map((item) => {
                    return(
                        <ItemMenu key={item.id} imagem={item.imagem} titulo={item.nome} descricao={item.descricao} />
                    )
                })}
        </ScrollView>

        </View>
    );
}