import indisponivel from '../assets/indisponivel.jpg'
import NinhoMorango from '../assets/boloNinhoMorango.jpg'
import Brigadeiro from '../assets/boloBrigadeiro.jpg'
import ChocoBelga from '../assets/boloChocoBelga.jpg'
import Pacoca from '../assets/boloPacoca.jpg'
import Prestigio from '../assets/boloPrestigio.jpg'
import TortaLimao from '../assets/boloTortaLimao.jpg'
import Uva from '../assets/boloUva.jpg'
import Panqueca from '../assets/panqueca.jpg'
import PastelForno from '../assets/pastelForno.jpg'
import Salgados from '../assets/porcaoSalgados.jpg'
import SaladaAtum from '../assets/saladaAtum.jpg'
import SaladaGraoBico from '../assets/saladaGraoBico.jpg'
import SaladaTropical from '../assets/saladatropical.jpg'
import SaladaVerao from '../assets/saladaVerao.jpg'
import TortaFrango from '../assets/tortaFrango.jpg'



const cardapio = [
    {id: "001", nome:"Bolo Brigadeiro", descricao:"Massa de chocolate, brigadeiro de chocolate com granulados", categoria:"Bolos", sugerido: false, imagem: Brigadeiro },
    {id: "002", nome:"Bolo Chocolate Belga", descricao:"Massa de chocolate, brigadeiro de chocolate belga trufado com raspas de chocolate", categoria:"Bolos", sugerido: false, imagem: ChocoBelga },
    {id: "003", nome:"Bolo Ninho com Morango", descricao:"Massa branca, brigadeiro de ninho com geléia caseira de morango e pegaços de fruta in natura", categoria:"Bolos", sugerido: true, imagem: NinhoMorango },
    {id: "004", nome:"Bolo Paçoca", descricao:"Massa branca, brigadeiro de paçoca", categoria:"Bolos", sugerido: false, imagem: Pacoca },
    {id: "005", nome:"Bolo Prestígio", descricao:"Massa de chocolate, brigadeiro de chocolate e ninho com raspas de côco.", categoria:"Bolos", sugerido: false, imagem: Prestigio },
    {id: "006", nome:"Bolo Torta de Limão", descricao:"Massa branca, brigadeiro de limão com cobertura de merengue", categoria:"Bolos", sugerido: true, imagem: TortaLimao },
    {id: "007", nome:"Bolo Surpresa de Uva", descricao:"Massa de branca, delicioso brigadeiro de ninho com pedaços de uva in natura", categoria:"Bolos", sugerido: false, imagem: Uva },
    {id: "008", nome:"Torta de Frango", descricao:"Torta com massa leve e delicioso recheio de frango cremoso", categoria:"Refeições", sugerido: true, imagem: TortaFrango },
    {id: "009", nome:"Panqueca de Frango", descricao:"Deliciosa panqueca com massa leve, recheio de frango cremoso e molho de tomate da casa", categoria:"Refeições", sugerido: false, imagem: Panqueca },
    {id: "010", nome:"Pastel Veggie", descricao:"Pastel com massa caseira, recheio de caponata de legumes assado no forno.", categoria:"Refeições", sugerido: true, imagem: PastelForno },
    {id: "011", nome:"Porção de salgados", descricao:"Porção de salgados fritos ou congelados, verificar disponibilidade", categoria:"Lanches", sugerido: false, imagem: Salgados },
    {id: "012", nome:"Salada de Atum", descricao:"Salada de legumes com grão de bico e lascas de atum.", categoria:"Saladas", sugerido: false, imagem: SaladaAtum },
    {id: "013", nome:"Salada de Grão de Cico", descricao:"Salada de grão de bico com legumes e cheiro verde", categoria:"Saladas", sugerido: false, imagem: SaladaGraoBico },
    {id: "014", nome:"Salada Tropical", descricao:"Salada de repolho roxo com frutas, nozes, castanhas e cebola roxa.", categoria:"Saladas", sugerido: true, imagem: SaladaTropical },
    {id: "015", nome:"Salada Verão", descricao:"Salada de grão de bico com alho poró e legumes, acompanha molho lemon pepper", categoria:"Saladas", sugerido: false, imagem: SaladaVerao },

]

export default cardapio;