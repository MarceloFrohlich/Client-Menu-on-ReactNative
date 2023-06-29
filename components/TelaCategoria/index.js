import React from "react";
import {ScrollView, View, Text} from 'react-native';
import {filtroCategoria} from '../servicos';
import ItemMenu from '../ItemMenu'

import estilo from './style'

export default function TelaCategoria({route}) {

    const categoria = route.params.categoria;
    const produtosCategoria = filtroCategoria(categoria);

    return (
        <View style={estilo.container}>
            <Text style={estilo.titulo}>{categoria}</Text>
            <ScrollView>
                {
                produtosCategoria.map((item)=> (
                    <ItemMenu key={item.id} imagem={item.imagem} titulo={item.nome} descricao={item.descricao} />
                )
                    
                )
                }
            </ScrollView>

        </View>
    );
}