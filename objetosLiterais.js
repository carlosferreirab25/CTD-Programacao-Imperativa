deixe  restaurante = {
    nome : 'Lachozz' ,
    cardapio : [ 'Pizza' , 'Porção de fritas' , 'Hambúrguer' , 'Cachorro-quente' ] ,
    saudação : function ( ) {
        voltar  'seja bem vindo à Lanchozz a melhor lancheria mundial, este é nosso cardapio:' + this . cardápio
    }
}
const ( nome , cardapio ) = restaurante 
console . log ( restaurante )
console . log ( restaurante . saudação ( ) )

deixe  numerosPrimos = [ 2 ,  3 ,  5 ,  7 ,  11 ,  13 ,  17 ,  19 ,  23 ,  29 ,  31 ,  37 ,  41 ,  43 ,  47 ,  53 ,  59 ,  61 ,  67 ,  71 ,  73 ,  79 ,  83 ,  89 ,  97 ,  101 ,  103 , 107 ,  109 ,  113 ,  127 ,  131 ,  137 ,  139 ,  149 ,  151 ,  157 ,  163 ,  167 ,  173 ,  179 ,  181 ,  191 ,  193 ,  197 ,  199 ,  211 ,  223 ,  227 ,  229 ,  233 ,  239 ,  241 ,  251 ,  257 ,  263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467]
deixe  numerosCompostos = [ 4 ,  6 ,  8 ,  9 ,  10 ,  12 ,  14 ,  15 ,  16 ,  18 ,  20 ,  21 ,  22 ,  24 ,  25 ,  26 ,  27 ,  28 ,  30 ,  32 ,  33 ,  34 ,  35 ,  36 ,  38 ,  39 ,  40 , 42 ,  44 ,  45 ,  46 ,  48 ,  49 ,  50 ,  51 ,  52 ,  54 ,  55 ,  56 ,  57 ,  58 ,  60 ,  62 ,  63 ,  64 ,  65 ,  66 ,  68 ,  69 ,  70 ,  72 ,  74 ,  75 ,  76 ,  77 ,  78 ,  80, 81, 82, 84, 85, 86, 87, 88, 90, 91, 92, 93, 94, 95, 96, 98, 99, 100, 102, 104, 105, 106, 108, 110, 111, 112, 114, 115, 116, 117,  118 ,  119 ,  120 ,  121 ,  122 ,  123 ,  124 ,  125 ,  126 ,  128 ,  129 ,  130 ,  132 ,  133 ]
deixe  numeros = [ ... numerosPrimos , ... numerosCompostos ]
function  maiorNumero ( ) {
     console de retorno . log ( numeros )
}

maiorNumero ( )
deixe  valorMin = Math . min ( ... numerosCompostos , ... numerosPrimos ) ;
console . log ( valorMin )