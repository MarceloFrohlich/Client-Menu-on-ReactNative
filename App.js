import { SafeAreaView, StyleSheet } from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import dados from './components/dados';
import TelaCategoria from './components/TelaCategoria'
import TelaInicial from './components/TelaInicial';
import opcoes from './options';

const Aba = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Aba.Navigator screenOptions={opcoes}>
        <Aba.Screen name="Inicio" component={TelaInicial} />
        <Aba.Screen name="Bolos" component={TelaCategoria} initialParams={{categoria: "Bolos"}} />
        <Aba.Screen name="Refeições" component={TelaCategoria} initialParams={{categoria: "Refeições"}}/>
        <Aba.Screen name="Lanches" component={TelaCategoria} initialParams={{categoria: "Lanches"}}/>
        <Aba.Screen name="Saladas" component={TelaCategoria} initialParams={{categoria: "Saladas"}}/>
      </Aba.Navigator>
    </NavigationContainer>
  );
}

export const estilo = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#8d4925'
  },
})