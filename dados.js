/* ==========================================================
   DADOS DO MANUAL AUTOMOTIVO — dados.js
   >>> SUBSTITUA TODO O CONTEÚDO DESTE ARQUIVO pelo seu banco de dados:
   copie do HTML antigo, de "const bancoDeDados = {" até
   "}; // fim de especificacoesOleos" (os dois blocos), e cole aqui.
   Os exemplos abaixo só servem para a página abrir enquanto isso.
   ========================================================== */

const bancoDeDados = {
  'veiculos-passeio': {
    titulo: 'Veículos Passeio',
    marcas: { 'Chevrolet': ['Chevrolet SPIN'] }
  },
  'veiculos-utilitarios': { titulo: 'Veículos Utilitários', marcas: {} },
  'caminhoes': { titulo: 'Caminhões', marcas: {} },
  'onibus-e-vans': { titulo: 'Ônibus e Vans', marcas: {} }
};

const especificacoesOleos = {
  'Chevrolet SPIN': {
    sistemas: [
      { sistema: 'Motor', especificacao: 'SAE 5W-30 (dexos1 Gen 3)', norma: 'API SN/SP, ACEA A5/B5', capacidade: '4,2 L (com filtro)', intervalo: '10.000 km ou 1 ano' },
      { sistema: 'Câmbio Manual', especificacao: 'SAE 75W-85', norma: 'API GL-4', capacidade: '1,8 L', intervalo: '60.000 km' }
    ],
    filtros: {
      oleo: { original: '24588463', tecfil: 'PSL619', mann: 'W712/22', mahle: 'OC90', wega: 'WO-150', fram: 'PH10907' },
      ar: { original: '98550812', tecfil: 'ARL8829', mann: 'C24028/1', mahle: 'LX3547', wega: 'FAP-9267', fram: 'CA10330' },
      combustivel: { original: '93316245', tecfil: 'GI04/7', mann: 'WK58', mahle: 'KL582', wega: 'FCI-1660', fram: 'G1041' }
    }
  }
}; // fim de especificacoesOleos
