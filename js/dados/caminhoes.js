export const veiculosCaminhoes = {
  'Ford Cargo 816': {
    sistemas: [
      { sistema: 'Motor (Cummins ISF 3.8)', especificacao: 'SAE 15W-40 (Norma WSS-M2C171-D ou API CI-4/CJ-4) [1]', capacidade: '11,0 L (com filtro)', intervalo: 'Ver nota [2]' },
      { sistema: 'Câmbio Manual (Eaton FSO-4505)', especificacao: 'SAE 75W-90 API GL-4', capacidade: '3,8 L', intervalo: '40.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 85W-140 API GL-5', capacidade: '4,5 L', intervalo: '60.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico Long Life (50/50)', capacidade: '18,0 L', intervalo: '2 anos ou 100.000 km' }
    ],
    notas: {
      1: "Obrigatório o uso de óleo para motores diesel de alto desempenho (Heavy Duty) atendendo à classificação API CI-4/CJ-4 ou superior.",
      2: "Uso rodoviário: 20.000 km. Uso severo (distribuição urbana intensa, anda e para, força constante de tração): Reduzir para 10.000 km."
    },
    filtros: {
      oleo: { original: 'BG5X6714AA', tecfil: 'PSL55', authomix: 'FOL0055', mann: 'W 940/25', mahle: 'OC 237', wega: 'WO-120', fram: 'PH8A', vox: 'LB55' },
      ar: { original: '2C459601AA', tecfil: 'ARS9839', authomix: 'FAR9839', mann: 'C 24 650', mahle: 'LX 1791', wega: 'WAP-182', fram: 'CA10665', vox: 'ARS9839' },
      combustivel: { original: 'BG5X9155AA', tecfil: 'PSD470', authomix: 'FCO0470', mann: 'WK 8159', mahle: 'KL 440', wega: 'FCI-1630', fram: 'P10237', vox: 'PSD470' },
      cabine: { original: 'Original Ford', tecfil: '-', authomix: '-', mann: 'CU 27 010', mahle: '-', wega: '-', fram: '-', vox: '-' }
    }
  },

  'Ford Cargo 2423': {
    sistemas: [
      { sistema: 'Motor (Cummins ISC 6.7)', especificacao: 'SAE 15W-40 API CI-4 / CJ-4 [1]', capacidade: '20,0 L (com filtro)', intervalo: 'Ver nota [2]' },
      { sistema: 'Câmbio Manual (Eaton)', especificacao: 'SAE 80W-90 API GL-4 / GL-5', capacidade: '9,5 L', intervalo: '60.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 85W-140 API GL-5', capacidade: '15,0 L', intervalo: '60.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico Pesado (50/50)', capacidade: '32,0 L', intervalo: '2 anos' }
    ],
    notas: {
      1: "Motores Cummins com EGR/DOC exigem óleos de baixa cinzas sulfatadas.",
      2: "Rodoviário: 30.000 km / Severo (obra/distribuição pesada): 15.000 km."
    },
    filtros: {
      oleo: { original: 'BG6X6714AA', tecfil: 'PSL341', authomix: 'FOL0341', mann: 'W 11102/34', mahle: 'OC506', wega: 'WO-612', fram: 'PH3545', vox: 'LB341' },
      ar: { original: 'BC4Z9601A', tecfil: 'ARS9840', authomix: 'FAR9840', mann: 'C 30 850', mahle: 'LX1819', wega: 'WAP-183', fram: 'CA10666', vox: 'ARS9840' },
      combustivel: { original: 'BG6X9155AA', tecfil: 'PSD980', authomix: 'FCO0980', mann: 'WK 950/26', mahle: 'KC 104', wega: 'FCD-0941', fram: 'PS10756', vox: 'PSD980' },
      cabine: { original: 'Original', tecfil: '-', authomix: '-', mann: '-', mahle: '-', wega: '-', fram: '-', vox: '-' }
    }
  },

  'Ford - 2629 Bau': {
    sistemas: [
      { sistema: 'Motor', especificacao: 'SAE 15W-40 API CI-4 / CJ-4', capacidade: '20,0 L', intervalo: 'Ver nota [1]' },
      { sistema: 'Câmbio', especificacao: 'SAE 80W-90 API GL-4/GL-5', capacidade: '10,0 L', intervalo: '60.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 85W-140 API GL-5', capacidade: '16,0 L', intervalo: '60.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico Pesado (50/50)', capacidade: '34,0 L', intervalo: '2 anos' }
    ],
    notas: {
      1: "25.000 km (Rodoviário) ou 12.000 km (Uso severo em baú rodando urbano/carga lotada)."
    },
    filtros: {
      oleo: { original: 'BG6X6714AA', tecfil: 'PSL341', authomix: 'FOL0341', mann: 'W 11102/34', mahle: 'OC506', wega: 'WO-612', fram: 'PH3545', vox: 'LB341' },
      ar: { original: 'BC4Z9601A', tecfil: 'ARS9840', authomix: 'FAR9840', mann: 'C 30 850', mahle: 'LX1819', wega: 'WAP-183', fram: 'CA10666', vox: 'ARS9840' },
      combustivel: { original: 'BG6X9155AA', tecfil: 'PSD980', authomix: 'FCO0980', mann: 'WK 950/26', mahle: 'KC 104', wega: 'FCD-0941', fram: 'PS10756', vox: 'PSD980' },
      cabine: { original: '-', tecfil: '-', authomix: '-', mann: '-', mahle: '-', wega: '-', fram: '-', vox: '-' }
    }
  },

  'Ford - 2629 CTA e CTC': {
    sistemas: [
      { sistema: 'Motor', especificacao: 'SAE 15W-40 API CI-4 / CJ-4', capacidade: '20,0 L', intervalo: 'Ver nota [1]' },
      { sistema: 'Câmbio', especificacao: 'SAE 80W-90 API GL-5', capacidade: '10,0 L', intervalo: '50.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 85W-140 API GL-5', capacidade: '16,0 L', intervalo: '50.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico Pesado (50/50)', capacidade: '34,0 L', intervalo: '2 anos' }
    ],
    notas: {
      1: "Versões CTA/CTC operam sob forte severidade (cana-de-açúcar/terraplanagem). Reduzir intervalo de óleo do motor para 10.000 km."
    },
    filtros: {
      oleo: { original: 'BG6X6714AA', tecfil: 'PSL341', authomix: 'FOL0341', mann: 'W 11102/34', mahle: 'OC506', wega: 'WO-612', fram: 'PH3545', vox: 'LB341' },
      ar: { original: 'BC4Z9601A', tecfil: 'ARS9840', authomix: 'FAR9840', mann: 'C 30 850', mahle: 'LX1819', wega: 'WAP-183', fram: 'CA10666', vox: 'ARS9840' },
      combustivel: { original: 'BG6X9155AA', tecfil: 'PSD980', authomix: 'FCO0980', mann: 'WK 950/26', mahle: 'KC 104', wega: 'FCD-0941', fram: 'PS10756', vox: 'PSD980' },
      cabine: { original: '-', tecfil: '-', authomix: '-', mann: '-', mahle: '-', wega: '-', fram: '-', vox: '-' }
    }
  },

  'Ford 1933 Cav Mec': {
    sistemas: [
      { sistema: 'Motor (Cummins ISC 8.3 / 9.0)', especificacao: 'SAE 15W-40 API CI-4 / CK-4', capacidade: '28,0 L', intervalo: 'Ver nota [1]' },
      { sistema: 'Câmbio', especificacao: 'SAE 80W-90 API GL-4', capacidade: '11,0 L', intervalo: '60.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 85W-140 API GL-5', capacidade: '18,0 L', intervalo: '60.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico (50/50)', capacidade: '38,0 L', intervalo: '2 anos' }
    ],
    notas: {
      1: "Uso rodoviário pesado: 30.000 km. Uso severo (transporte de cargas pesadas em serras/batentes): 15.000 km."
    },
    filtros: {
      oleo: { original: '5266731', tecfil: 'PSL341', authomix: 'FOL0341', mann: 'W 11102/34', mahle: 'OC506', wega: 'WO-612', fram: 'PH3545', vox: 'LB341' },
      ar: { original: 'CC459601AA', tecfil: 'ARS9842', authomix: 'FAR9842', mann: 'C 32 145', mahle: 'LX1819', wega: 'WAP-185', fram: 'CA10667', vox: 'ARS9842' },
      combustivel: { original: 'BG6X9155AA', tecfil: 'PSD980', authomix: 'FCO0980', mann: 'WK 950/26', mahle: 'KC 104', wega: 'FCD-0941', fram: 'PS10756', vox: 'PSD980' },
      cabine: { original: 'Original', tecfil: '-', authomix: '-', mann: 'CU 27 010', mahle: '-', wega: '-', fram: '-', vox: '-' }
    }
  },

  'Mercedes-Benz 915c': {
    sistemas: [
      { sistema: 'Motor (OM 904 LA)', especificacao: 'SAE 15W-40 (MB 228.3) [1]', capacidade: '15,0 L (com filtro)', intervalo: 'Ver nota [2]' },
      { sistema: 'Câmbio Manual', especificacao: 'SAE 80W-90 API GL-4', capacidade: '4,0 L', intervalo: '50.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 85W-90 API GL-5', capacidade: '3,5 L', intervalo: '50.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo MB 325.5 / 325.6 (50/50)', capacidade: '20,0 L', intervalo: '2 anos' }
    ],
    notas: {
      1: "Atender rigorosamente à norma Mercedes-Benz 228.3 (API CI-4).",
      2: "20.000 km (Rodoviário) ou 10.000 km (Uso severo urbano / entregas porta a porta)."
    },
    filtros: {
      oleo: { original: 'A0001802609', tecfil: 'PSL39', authomix: 'FOL0039', mann: 'W 940/25', mahle: 'OC 237', wega: 'WO-120', fram: 'PH8A', vox: 'LB39' },
      ar: { original: 'A0030945804', tecfil: 'ARL7001', authomix: 'FAR7001', mann: 'C 24 650', mahle: 'LX 824', wega: 'FAP-7001', fram: 'CA7164', vox: 'FAR7001' },
      combustivel: { original: 'A0000903651', tecfil: 'PSD470', authomix: 'FCO0470', mann: 'WK 842/2', mahle: 'KC 19', wega: 'FCD-0740', fram: 'P4102', vox: 'PSD470' },
      cabine: { original: 'Não possui original', tecfil: '-', authomix: '-', mann: '-', mahle: '-', wega: '-', fram: '-', vox: '-' }
    }
  },

  'Mercedes-Benz 1418E': {
    sistemas: [
      { sistema: 'Motor (OM 358 / OM 906)', especificacao: 'SAE 15W-40 API CI-4', capacidade: '17,0 L', intervalo: 'Ver nota [1]' },
      { sistema: 'Câmbio', especificacao: 'SAE 80W-90 API GL-4', capacidade: '7,0 L', intervalo: '50.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 85W-140 API GL-5', capacidade: '12,0 L', intervalo: '50.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico (50/50)', capacidade: '25,0 L', intervalo: '2 anos' }
    ],
    notas: {
      1: "15.000 km ou 6 meses em operação mista (estrada/terra)."
    },
    filtros: {
      oleo: { original: 'A0001802609', tecfil: 'PSL39', authomix: 'FOL0039', mann: 'W 940/25', mahle: 'OC 237', wega: 'WO-120', fram: 'PH8A', vox: 'LB39' },
      ar: { original: 'A0030946504', tecfil: 'ARS9839', authomix: 'FAR9839', mann: 'C 30 850', mahle: 'LX1791', wega: 'WAP-182', fram: 'CA10665', vox: 'ARS9839' },
      combustivel: { original: 'A0000903651', tecfil: 'PSD470', authomix: 'FCO0470', mann: 'WK 842/2', mahle: 'KC 19', wega: 'FCD-0740', fram: 'P4102', vox: 'PSD470' },
      cabine: { original: '-', tecfil: '-', authomix: '-', mann: '-', mahle: '-', wega: '-', fram: '-', vox: '-' }
    }
  },

  'Mercedes-Benz 2627': {
    sistemas: [
      { sistema: 'Motor (OM 906 LA / OM 926)', especificacao: 'SAE 15W-40 MB 228.3', capacidade: '25,0 L', intervalo: 'Ver nota [1]' },
      { sistema: 'Câmbio', especificacao: 'SAE 80W-90 API GL-4', capacidade: '11,0 L', intervalo: '60.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 85W-140 API GL-5', capacidade: '20,0 L', intervalo: '50.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo MB 325.5 (50/50)', capacidade: '36,0 L', intervalo: '2 anos' }
    ],
    notas: {
      1: "Uso severo em canteiro de obras / basculante: Trocar a cada 10.000 km."
    },
    filtros: {
      oleo: { original: 'A0001803009', tecfil: 'PSL341', authomix: 'FOL0341', mann: 'W 11102/34', mahle: 'OC506', wega: 'WO-612', fram: 'PH3545', vox: 'LB341' },
      ar: { original: 'A0040940304', tecfil: 'ARS9840', authomix: 'FAR9840', mann: 'C 31 1414', mahle: 'LX1819', wega: 'WAP-183', fram: 'CA10666', vox: 'ARS9840' },
      combustivel: { original: 'A0000904251', tecfil: 'PSD980', authomix: 'FCO0980', mann: 'WK 950/26', mahle: 'KC 104', wega: 'FCD-0941', fram: 'PS10756', vox: 'PSD980' },
      cabine: { original: 'Original', tecfil: '-', authomix: '-', mann: 'CU 27 010', mahle: '-', wega: '-', fram: '-', vox: '-' }
    }
  },

  'Mercedes-Benz AXOR 3344': {
    sistemas: [
      { sistema: 'Motor (OM 457 LA)', especificacao: 'SAE 15W-40 (Norma MB 228.5 / 228.3)', capacidade: '35,0 L', intervalo: 'Ver nota [1]' },
      { sistema: 'Câmbio', especificacao: 'SAE 80W-90 API GL-4', capacidade: '13,0 L', intervalo: '60.000 km' },
      { sistema: 'Diferencial com Redução nos Cubos', especificacao: 'SAE 85W-140 API GL-5', capacidade: '24,0 L (Total com cubos)', intervalo: '40.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico MB 325.5 (50/50)', capacidade: '42,0 L', intervalo: '2 anos' }
    ],
    notas: {
      1: "Operação fora de estrada extrema (mineração/cana): 15.000 km. Rodoviário/Misto: até 30.000 km com óleo sintético MB 228.5."
    },
    filtros: {
      oleo: { original: 'A0001803009', tecfil: 'PSL341', authomix: 'FOL0341', mann: 'W 11102/34', mahle: 'OC506', wega: 'WO-612', fram: 'PH3545', vox: 'LB341' },
      ar: { original: 'A0040940304', tecfil: 'ARS9842', authomix: 'FAR9842', mann: 'C 32 145', mahle: 'LX1819', wega: 'WAP-185', fram: 'CA10667', vox: 'ARS9842' },
      combustivel: { original: 'A0000904251', tecfil: 'PSD980', authomix: 'FCO0980', mann: 'WK 950/26', mahle: 'KC 104', wega: 'FCD-0941', fram: 'PS10756', vox: 'PSD980' },
      cabine: { original: 'A9408350147', tecfil: 'ACP309', authomix: 'FCA0309', mann: 'CU 27 010', mahle: 'LA 74', wega: 'AKX-1122', fram: 'CF11175', vox: 'FCA0309' }
    }
  },

  'Mercedes-Benz Atego 1725': {
    sistemas: [
      { sistema: 'Motor (OM 906 LA)', especificacao: 'SAE 15W-40 MB 228.3', capacidade: '23,0 L', intervalo: 'Ver nota [1]' },
      { sistema: 'Câmbio', especificacao: 'SAE 80W-90 API GL-4', capacidade: '9,0 L', intervalo: '60.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 85W-140 API GL-5', capacidade: '14,0 L', intervalo: '60.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo MB 325.5 (50/50)', capacidade: '28,0 L', intervalo: '2 anos' }
    ],
    notas: {
      1: "20.000 km (Rodoviário) / 10.000 km (Severo)."
    },
    filtros: {
      oleo: { original: 'A0001803009', tecfil: 'PSL341', authomix: 'FOL0341', mann: 'W 11102/34', mahle: 'OC506', wega: 'WO-612', fram: 'PH3545', vox: 'LB341' },
      ar: { original: 'A0030946504', tecfil: 'ARS9840', authomix: 'FAR9840', mann: 'C 30 850', mahle: 'LX1819', wega: 'WAP-183', fram: 'CA10666', vox: 'ARS9840' },
      combustivel: { original: 'A0000903651', tecfil: 'PSD980', authomix: 'FCO0980', mann: 'WK 950/26', mahle: 'KC 104', wega: 'FCD-0941', fram: 'PS10756', vox: 'PSD980' },
      cabine: { original: 'Original', tecfil: '-', authomix: '-', mann: 'CU 27 010', mahle: '-', wega: '-', fram: '-', vox: '-' }
    }
  },

  'Scania P/G/R (DC9 / DC12 / DC13)': {
    sistemas: [
      { sistema: 'Motor', especificacao: 'SAE 10W-40 Sintético API CK-4 (Scania LDF) [1]', capacidade: '33,0 L', intervalo: 'Ver nota [2]' },
      { sistema: 'Câmbio Opticruise', especificacao: 'SAE 75W-90 API GL-4', capacidade: '15,5 L', intervalo: '120.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 85W-140 API GL-5', capacidade: '12,5 L', intervalo: '120.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico Pesado (50/50)', capacidade: '45,0 L', intervalo: '200.000 km ou 2 anos' }
    ],
    notas: {
      1: "Obrigatório o uso de óleos que atendam à norma Scania LDF-3 / LDF-4 para proteção do sistema EGR/SCR e turbocompressor.",
      2: "45.000 km em operação rodoviária de longa distância. Reduzir para 15.000 km em uso severo (cana, construção ou basculante)."
    },
    filtros: {
      oleo: { original: '1742032', tecfil: 'PSL341', authomix: 'FOL0341', mann: 'W 11102/34', mahle: 'OC506', wega: 'WO-612', fram: 'PH3545', vox: 'LB341' },
      ar: { original: '1523405', tecfil: 'ARS9839', authomix: 'FAR9839', mann: 'C 311414', mahle: 'LX1791', wega: 'WAP-182', fram: 'CA10665', vox: 'ARS9839' },
      combustivel: { original: '1740947', tecfil: 'PEC3023', authomix: 'FCO0980', mann: 'PU 941x', mahle: 'KL582', wega: 'FCD-0941', fram: 'C10567', vox: 'PEC3023' },
      cabine: { original: 'Original Scania', tecfil: '-', authomix: '-', mann: 'CU 27 010', mahle: '-', wega: '-', fram: '-', vox: '-' }
    }
  },

  'Scania Série 4 (P/R/T 114 e 124)': {
    sistemas: [
      { sistema: 'Motor (DSC11 / DSC12)', especificacao: 'SAE 15W-40 API CI-4', capacidade: '32,0 L', intervalo: 'Ver nota [1]' },
      { sistema: 'Câmbio Manual / GR', especificacao: 'SAE 80W-90 API GL-4', capacidade: '11,0 L', intervalo: '90.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 85W-140 API GL-5', capacidade: '13,0 L', intervalo: '90.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico (50/50)', capacidade: '40,0 L', intervalo: '2 anos' }
    ],
    notas: {
      1: "30.000 km (Rodoviário) ou 15.000 km (Severo)."
    },
    filtros: {
      oleo: { original: '1393644', tecfil: 'PSL341', authomix: 'FOL0341', mann: 'W 11102/34', mahle: 'OC506', wega: 'WO-612', fram: 'PH3545', vox: 'LB341' },
      ar: { original: '1393557', tecfil: 'ARS9839', authomix: 'FAR9839', mann: 'C 311414', mahle: 'LX1791', wega: 'WAP-182', fram: 'CA10665', vox: 'ARS9839' },
      combustivel: { original: '1393640', tecfil: 'PEC3023', authomix: 'FCO0980', mann: 'PU 941x', mahle: 'KL582', wega: 'FCD-0941', fram: 'C10567', vox: 'PEC3023' },
      cabine: { original: '-', tecfil: '-', authomix: '-', mann: '-', mahle: '-', wega: '-', fram: '-', vox: '-' }
    }
  },

  'VW Worker 815': {
    sistemas: [
      { sistema: 'Motor (MWM 4.12 TCE)', especificacao: 'SAE 15W-40 API CI-4 [1]', capacidade: '10,0 L', intervalo: 'Ver nota [2]' },
      { sistema: 'Câmbio', especificacao: 'SAE 80W-90 API GL-4', capacidade: '3,5 L', intervalo: '50.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 85W-140 API GL-5', capacidade: '4,0 L', intervalo: '50.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico (50/50)', capacidade: '16,0 L', intervalo: '2 anos' }
    ],
    notas: {
      1: "Óleo para motor diesel pesado API CI-4.",
      2: "10.000 km (Uso urbano severo / entregas) ou 15.000 km (Rodoviário)."
    },
    filtros: {
      oleo: { original: '2T0115561', tecfil: 'PSL39', authomix: 'FOL0039', mann: 'W 940/25', mahle: 'OC 237', wega: 'WO-120', fram: 'PH8A', vox: 'LB39' },
      ar: { original: '2T0129620', tecfil: 'ARL7001', authomix: 'FAR7001', mann: 'C 24 650', mahle: 'LX 824', wega: 'FAP-7001', fram: 'CA7164', vox: 'FAR7001' },
      combustivel: { original: '2T0127177', tecfil: 'PSD470', authomix: 'FCO0470', mann: 'WK 842/2', mahle: 'KC 19', wega: 'FCD-0740', fram: 'P4102', vox: 'PSD470' },
      cabine: { original: '-', tecfil: '-', authomix: '-', mann: '-', mahle: '-', wega: '-', fram: '-', vox: '-' }
    }
  },

  'VW Worker 15-180': {
    sistemas: [
      { sistema: 'Motor (Cummins 6BTAA / MWM)', especificacao: 'SAE 15W-40 API CI-4', capacidade: '14,0 L', intervalo: 'Ver nota [1]' },
      { sistema: 'Câmbio', especificacao: 'SAE 80W-90 API GL-4', capacidade: '7,0 L', intervalo: '60.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 85W-140 API GL-5', capacidade: '12,0 L', intervalo: '60.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico (50/50)', capacidade: '26,0 L', intervalo: '2 anos' }
    ],
    notas: {
      1: "15.000 km (Rodoviário) / 8.000 km a 10.000 km (Severo)."
    },
    filtros: {
      oleo: { original: '2T0115561', tecfil: 'PSL341', authomix: 'FOL0341', mann: 'W 11102/34', mahle: 'OC506', wega: 'WO-612', fram: 'PH3545', vox: 'LB341' },
      ar: { original: '2T0129620A', tecfil: 'ARS9839', authomix: 'FAR9839', mann: 'C 30 850', mahle: 'LX1791', wega: 'WAP-182', fram: 'CA10665', vox: 'ARS9839' },
      combustivel: { original: '2T0127177', tecfil: 'PSD470', authomix: 'FCO0470', mann: 'WK 8159', mahle: 'KC 19', wega: 'FCD-0740', fram: 'P4102', vox: 'PSD470' },
      cabine: { original: '-', tecfil: '-', authomix: '-', mann: '-', mahle: '-', wega: '-', fram: '-', vox: '-' }
    }
  },

  'VW Worker 24-220': {
    sistemas: [
      { sistema: 'Motor (Cummins 6CTAA)', especificacao: 'SAE 15W-40 API CI-4', capacidade: '18,0 L', intervalo: 'Ver nota [1]' },
      { sistema: 'Câmbio', especificacao: 'SAE 80W-90 API GL-4', capacidade: '9,0 L', intervalo: '60.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 85W-140 API GL-5', capacidade: '15,0 L', intervalo: '60.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico (50/50)', capacidade: '30,0 L', intervalo: '2 anos' }
    ],
    notas: {
      1: "20.000 km (Rodoviário) / 10.000 km (Severo / Caçamba/Basculante)."
    },
    filtros: {
      oleo: { original: '2T0115561', tecfil: 'PSL341', authomix: 'FOL0341', mann: 'W 11102/34', mahle: 'OC506', wega: 'WO-612', fram: 'PH3545', vox: 'LB341' },
      ar: { original: '2T0129620A', tecfil: 'ARS9839', authomix: 'FAR9839', mann: 'C 30 850', mahle: 'LX1791', wega: 'WAP-182', fram: 'CA10665', vox: 'ARS9839' },
      combustivel: { original: '2T0127177', tecfil: 'PSD470', authomix: 'FCO0470', mann: 'WK 8159', mahle: 'KC 19', wega: 'FCD-0740', fram: 'P4102', vox: 'PSD470' },
      cabine: { original: '-', tecfil: '-', authomix: '-', mann: '-', mahle: '-', wega: '-', fram: '-', vox: '-' }
    }
  },

  'VW Worker 26-220': {
    sistemas: [
      { sistema: 'Motor (Cummins 6CTAA)', especificacao: 'SAE 15W-40 API CI-4', capacidade: '18,0 L', intervalo: 'Ver nota [1]' },
      { sistema: 'Câmbio', especificacao: 'SAE 80W-90 API GL-4', capacidade: '9,0 L', intervalo: '60.000 km' },
      { sistema: 'Diferencial com Redução', especificacao: 'SAE 85W-140 API GL-5', capacidade: '18,0 L', intervalo: '40.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico (50/50)', capacidade: '30,0 L', intervalo: '2 anos' }
    ],
    notas: {
      1: "Uso severo (obra/basculante): Reduzir a troca do motor para 10.000 km."
    },
    filtros: {
      oleo: { original: '2T0115561', tecfil: 'PSL341', authomix: 'FOL0341', mann: 'W 11102/34', mahle: 'OC506', wega: 'WO-612', fram: 'PH3545', vox: 'LB341' },
      ar: { original: '2T0129620A', tecfil: 'ARS9839', authomix: 'FAR9839', mann: 'C 30 850', mahle: 'LX1791', wega: 'WAP-182', fram: 'CA10665', vox: 'ARS9839' },
      combustivel: { original: '2T0127177', tecfil: 'PSD470', authomix: 'FCO0470', mann: 'WK 8159', mahle: 'KC 19', wega: 'FCD-0740', fram: 'P4102', vox: 'PSD470' },
      cabine: { original: '-', tecfil: '-', authomix: '-', mann: '-', mahle: '-', wega: '-', fram: '-', vox: '-' }
    }
  },

  'VW Worker 26-260E': {
    sistemas: [
      { sistema: 'Motor (Cummins ISC 8.3)', especificacao: 'SAE 15W-40 API CI-4 / CJ-4', capacidade: '20,0 L', intervalo: 'Ver nota [1]' },
      { sistema: 'Câmbio', especificacao: 'SAE 80W-90 API GL-4', capacidade: '11,0 L', intervalo: '60.000 km' },
      { sistema: 'Diferencial com Redução', especificacao: 'SAE 85W-140 API GL-5', capacidade: '20,0 L', intervalo: '40.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico (50/50)', capacidade: '32,0 L', intervalo: '2 anos' }
    ],
    notas: {
      1: "25.000 km (Rodoviário/Misto) ou 12.000 km (Obra/Severo)."
    },
    filtros: {
      oleo: { original: '2T0115561', tecfil: 'PSL341', authomix: 'FOL0341', mann: 'W 11102/34', mahle: 'OC506', wega: 'WO-612', fram: 'PH3545', vox: 'LB341' },
      ar: { original: '2T0129620A', tecfil: 'ARS9840', authomix: 'FAR9840', mann: 'C 30 850', mahle: 'LX1819', wega: 'WAP-183', fram: 'CA10666', vox: 'ARS9840' },
      combustivel: { original: '2R0127177', tecfil: 'PSD980', authomix: 'FCO0980', mann: 'WK 950/26', mahle: 'KC 104', wega: 'FCD-0941', fram: 'PS10756', vox: 'PSD980' },
      cabine: { original: '-', tecfil: '-', authomix: '-', mann: '-', mahle: '-', wega: '-', fram: '-', vox: '-' }
    }
  },

  'VW Constellation 24-250': {
    sistemas: [
      { sistema: 'Motor (Cummins 6LTAA / ISC 8.3)', especificacao: 'SAE 15W-40 API CI-4', capacidade: '20,0 L', intervalo: 'Ver nota [1]' },
      { sistema: 'Câmbio', especificacao: 'SAE 80W-90 API GL-4', capacidade: '11,0 L', intervalo: '60.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 85W-140 API GL-5', capacidade: '15,0 L', intervalo: '60.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico (50/50)', capacidade: '32,0 L', intervalo: '2 anos' }
    ],
    notas: {
      1: "30.000 km (Rodoviário de longa distância) / 15.000 km (Uso severo urbano ou distribuição)."
    },
    filtros: {
      oleo: { original: '2T0115561', tecfil: 'PSL341', authomix: 'FOL0341', mann: 'W 11102/34', mahle: 'OC506', wega: 'WO-612', fram: 'PH3545', vox: 'LB341' },
      ar: { original: '2V0129620', tecfil: 'ARS9840', authomix: 'FAR9840', mann: 'C 30 850', mahle: 'LX1819', wega: 'WAP-183', fram: 'CA10666', vox: 'ARS9840' },
      combustivel: { original: '2R0127177', tecfil: 'PSD980', authomix: 'FCO0980', mann: 'WK 950/26', mahle: 'KC 104', wega: 'FCD-0941', fram: 'PS10756', vox: 'PSD980' },
      cabine: { original: '2V0819653', tecfil: 'ACP309', authomix: 'FCA0309', mann: 'CU 27 010', mahle: 'LA 74', wega: 'AKX-1122', fram: 'CF11175', vox: 'FCA0309' }
    }
  },

  'VW Constellation 26-280': {
    sistemas: [
      { sistema: 'Motor (MAN D08 36)', especificacao: 'SAE 15W-40 API CI-4 / CJ-4 (Norma VW 505 00 / MAN 3275) [1]', capacidade: '23,0 L', intervalo: 'Ver nota [2]' },
      { sistema: 'Câmbio', especificacao: 'SAE 80W-90 API GL-4', capacidade: '11,0 L', intervalo: '60.000 km' },
      { sistema: 'Diferencial com Redução', especificacao: 'SAE 85W-140 API GL-5', capacidade: '20,0 L', intervalo: '40.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico (50/50)', capacidade: '35,0 L', intervalo: '2 anos' }
    ],
    notas: {
      1: "Motores MAN D08 sem EGR (com EGR/SCR dependendo do ano) exigem lubrificantes específicos de baixo teor de cinzas.",
      2: "30.000 km (Rodoviário) ou 15.000 km (Severo / Obra)."
    },
    filtros: {
      oleo: { original: '2U0115561', tecfil: 'PSL341', authomix: 'FOL0341', mann: 'W 11102/34', mahle: 'OC506', wega: 'WO-612', fram: 'PH3545', vox: 'LB341' },
      ar: { original: '2V0129620', tecfil: 'ARS9840', authomix: 'FAR9840', mann: 'C 30 850', mahle: 'LX1819', wega: 'WAP-183', fram: 'CA10666', vox: 'ARS9840' },
      combustivel: { original: '2R0127177', tecfil: 'PSD980', authomix: 'FCO0980', mann: 'WK 950/26', mahle: 'KC 104', wega: 'FCD-0941', fram: 'PS10756', vox: 'PSD980' },
      cabine: { original: '2V0819653', tecfil: 'ACP309', authomix: 'FCA0309', mann: 'CU 27 010', mahle: 'LA 74', wega: 'AKX-1122', fram: 'CF11175', vox: 'FCA0309' }
    }
  },

  'VW Constellation 31-320': {
    sistemas: [
      { sistema: 'Motor (Cummins ISC 8.3 / ISL)', especificacao: 'SAE 15W-40 API CI-4 / CJ-4', capacidade: '28,0 L', intervalo: 'Ver nota [1]' },
      { sistema: 'Câmbio', especificacao: 'SAE 80W-90 API GL-4', capacidade: '13,0 L', intervalo: '60.000 km' },
      { sistema: 'Diferencial com Redução nos Cubos', especificacao: 'SAE 85W-140 API GL-5', capacidade: '22,0 L', intervalo: '40.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico (50/50)', capacidade: '40,0 L', intervalo: '2 anos' }
    ],
    notas: {
      1: "Uso severo em terraplanagem/mineração: Troca de óleo do motor a cada 12.000 km."
    },
    filtros: {
      oleo: { original: '2T0115561', tecfil: 'PSL341', authomix: 'FOL0341', mann: 'W 11102/34', mahle: 'OC506', wega: 'WO-612', fram: 'PH3545', vox: 'LB341' },
      ar: { original: '2V0129620', tecfil: 'ARS9842', authomix: 'FAR9842', mann: 'C 32 145', mahle: 'LX1819', wega: 'WAP-185', fram: 'CA10667', vox: 'ARS9842' },
      combustivel: { original: '2R0127177', tecfil: 'PSD980', authomix: 'FCO0980', mann: 'WK 950/26', mahle: 'KC 104', wega: 'FCD-0941', fram: 'PS10756', vox: 'PSD980' },
      cabine: { original: '2V0819653', tecfil: 'ACP309', authomix: 'FCA0309', mann: 'CU 27 010', mahle: 'LA 74', wega: 'AKX-1122', fram: 'CF11175', vox: 'FCA0309' }
    }
  }
};
