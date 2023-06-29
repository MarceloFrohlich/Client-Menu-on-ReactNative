import React from "react";
import { View, Text, Image } from 'react-native'

import { estilo } from "./style";


export default function ItemMenu(props) {
    return (
        <View style={estilo.container}>
            <Image style={estilo.imagem} source={props.imagem}/>
            <View style={estilo.texto}>
                <Text style={estilo.titulo}>{props.titulo}</Text>
                <Text style={estilo.descricao}>{props.descricao}</Text>
            </View>
        </View>
    )
}