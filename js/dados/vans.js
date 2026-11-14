export const veiculosVans = {
  'Fiat Ducato 2.3 Multijet (Nova)': {
    sistemas: [
      { sistema: 'Motor (2.3 MultiJet Diesel)', especificacao: 'SAE 5W-30 Sintético (Norma Fiat 9.55535-S1 / ACEA C2) [1]', capacidade: '6,5 L (com filtro)', intervalo: 'Ver nota [2]' },
      { sistema: 'Câmbio Manual', especificacao: 'SAE 75W-80 API GL-4', capacidade: '2,7 L', intervalo: '60.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico Long Life (50/50)', capacidade: '9,0 L', intervalo: '60.000 km ou 2 anos' }
    ],
    notas: {
      1: "Obrigatório o uso de óleo de baixo teor de cinzas sulfatadas (Low SAPS) para preservação do Filtro de Partículas (DPF).",
      2: "Uso rodoviário: 15.000 km ou 1 ano. Uso severo (transporte urbano de passageiros, entregas porta a porta, trânsito pesado): Reduzir estritamente para 10.000 km ou 6 meses."
    },
    filtros: {
      oleo: { original: '55231924', tecfil: 'PEL109', authomix: 'FOL0109', mann: 'HU 7010 z', mahle: 'OX 380D', wega: 'WOE-530', fram: 'CH11311', vox: 'PEL109' },
      ar: { original: '1355725080', tecfil: 'ARL5140', authomix: 'FAR5140', mann: 'C 14 008', mahle: 'LX 2991', wega: 'FAP-9280', fram: 'CA11200', vox: 'FAR5140' },
      combustivel: { original: '77366565', tecfil: 'PSD980', authomix: 'FCO0980', mann: 'PU 723 x', mahle: 'KX 386D', wega: 'FCD-0742', fram: 'PS11797', vox: 'PSD980' },
      cabine: { original: '1355724080', tecfil: 'ACP309', authomix: 'FCA0309', mann: 'CU 2842', mahle: 'LA 74', wega: 'AKX-1122', fram: 'CF11175', vox: 'FCA0309' }
    }
  },

  'Fiat Ducato 2.8 JTD': {
    sistemas: [
      { sistema: 'Motor (8140.43S)', especificacao: 'SAE 15W-40 API CI-4 [1]', capacidade: '5,5 L (com filtro)', intervalo: 'Ver nota [2]' },
      { sistema: 'Câmbio Manual', especificacao: 'SAE 75W-80 API GL-4', capacidade: '2,7 L', intervalo: '60.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico (50/50)',capacidade: '8,5 L', intervalo: '40.000 km' }
    ],
    notas: {
      1: "Óleo multiviscoso mineral ou semissintético para motores diesel pesados.",
      2: "10.000 km (Rodoviário) / 5.000 km (Uso severo urbano)."
    },
    filtros: {
      oleo: { original: '71738734', tecfil: 'PEL114', authomix: 'FOL0114', mann: 'WP 1144', mahle: 'OC 237', wega: 'WO-120', fram: 'PH2870', vox: 'PEL114' },
      ar: { original: '1312328080', tecfil: 'ARL7001', authomix: 'FAR7001', mann: 'C 17 278/1', mahle: 'LX 824', wega: 'FAP-7001', fram: 'CA7164', vox: 'FAR7001' },
      combustivel: { original: '1336717080', tecfil: 'PSD470', authomix: 'FCO0470', mann: 'PU 723 x', mahle: 'KC 19', wega: 'FCD-0740', fram: 'P4102', vox: 'PSD470' },
      cabine: { original: '1312329080', tecfil: 'ACP302', authomix: 'FCA0302', mann: 'CU 4442', mahle: 'LA 67', wega: 'AKX-1100', fram: 'CF1028', vox: 'FCA0302' }
    }
  },

  'Renault Master 2.3 dCi (Nova)': {
    sistemas: [
      { sistema: 'Motor (M9T Bi-Turbo)', especificacao: 'SAE 5W-30 (Norma Renault RN0720) [1]', capacidade: '8,5 L (com filtro)', intervalo: 'Ver nota [2]' },
      { sistema: 'Câmbio Manual', especificacao: 'SAE 75W-80 API GL-4+', capacidade: '2,4 L', intervalo: '80.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico Tipo D (50/50)', capacidade: '9,5 L', intervalo: '60.000 km ou 3 anos' }
    ],
    notas: {
      1: "Exigido óleo 100% sintético com aprovação Renault RN0720 (Low SAPS) para proteger o DPF.",
      2: "15.000 km ou 1 ano em uso rodoviário. Reduzir para 10.000 km em uso severo urbano."
    },
    filtros: {
      oleo: { original: '152095084R', tecfil: 'PEL674', authomix: 'FOL0674', mann: 'HU 711/51 x', mahle: 'OX 339/2D', wega: 'WOE-710', fram: 'CH9641', vox: 'PEL674' },
      ar: { original: '1654600Q1H', tecfil: 'ARL5047', authomix: 'FAR5047', mann: 'C 35 015', mahle: 'LX 2681', wega: 'FAP-9295', fram: 'CA11050', vox: 'FAR5047' },
      combustivel: { original: '164005954R', tecfil: 'PSD980', authomix: 'FCO0980', mann: 'PU 9011 z', mahle: 'KC 104', wega: 'FCD-0941', fram: 'PS11797', vox: 'PSD980' },
      cabine: { original: '2727700Q0A', tecfil: 'ACP309', authomix: 'FCA0309', mann: 'CU 2940', mahle: 'LA 56', wega: 'AKX-1991', fram: 'CF10549', vox: 'FCA0309' }
    }
  },

  'Peugeot Boxer 2.2 / 2.0 BlueHDi (Nova)': {
    sistemas: [
      { sistema: 'Motor (BlueHDi Diesel)', especificacao: 'SAE 0W-30 ou 5W-30 (Norma PSA B71 2312) [1]', capacidade: '6,1 L (com filtro)', intervalo: 'Ver nota [2]' },
      { sistema: 'Câmbio Manual', especificacao: 'SAE 75W-80 API GL-4', capacidade: '2,7 L', intervalo: '60.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico OAT (50/50)', capacidade: '9,0 L', intervalo: '60.000 km' }
    ],
    notas: {
      1: "Obrigatório óleo sintético de alta tecnologia compatível com sistemas SCR (Arla 32) e DPF.",
      2: "15.000 km (Normal) / 10.000 km (Severo urbano)."
    },
    filtros: {
      oleo: { original: '9818914980', tecfil: 'PEL109', authomix: 'FOL0109', mann: 'HU 7010 z', mahle: 'OX 380D', wega: 'WOE-530', fram: 'CH11311', vox: 'PEL109' },
      ar: { original: '9807530380', tecfil: 'ARL5140', authomix: 'FAR5140', mann: 'C 14 008', mahle: 'LX 2991', wega: 'FAP-9280', fram: 'CA11200', vox: 'FAR5140' },
      combustivel: { original: '9808381580', tecfil: 'PSD980', authomix: 'FCO0980', mann: 'PU 723 x', mahle: 'KX 386D', wega: 'FCD-0742', fram: 'PS11797', vox: 'PSD980' },
      cabine: { original: '1610486880', tecfil: 'ACP309', authomix: 'FCA0309', mann: 'CU 2842', mahle: 'LA 74', wega: 'AKX-1122', fram: 'CF11175', vox: 'FCA0309' }
    }
  },

  'Mercedes-Benz Sprinter 416 / 515 (CDI)': {
    sistemas: [
      { sistema: 'Motor (OM 651 Bi-Turbo)', especificacao: 'SAE 5W-30 ou 5W-40 (Norma MB 228.51 / 229.51) [1]', capacidade: '11,5 L (com filtro)', intervalo: 'Ver nota [2]' },
      { sistema: 'Câmbio Manual (EcoGear)', especificacao: 'MB 235.10 (Óleo Sintético Específico)', capacidade: '1,8 L', intervalo: '80.000 km' },
      { sistema: 'Diferencial Traseiro', especificacao: 'SAE 85W-90 API GL-5 (MB 235.0)', capacidade: '2,5 L', intervalo: '60.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo MB 325.5 / 325.6 Orgânico (50/50)', capacidade: '12,0 L', intervalo: '2 anos' }
    ],
    notas: {
      1: "Obrigatório uso de óleo MB 228.51 (Low SAPS) para proteger o DPF e catalisador.",
      2: "20.000 km (Rodoviário) ou 10.000 km a 15.000 km (Uso severo urbano / lotação máxima)."
    },
    filtros: {
      oleo: { original: 'A6511800109', tecfil: 'PEL674', authomix: 'FOL0674', mann: 'HU 711/51 x', mahle: 'OX 339/2D', wega: 'WOE-710', fram: 'CH9641', vox: 'PEL674' },
      ar: { original: 'A0000903751', tecfil: 'ARS9839', authomix: 'FAR9839', mann: 'C 35 154', mahle: 'LX 1791', wega: 'WAP-182', fram: 'CA10665', vox: 'ARS9839' },
      combustivel: { original: 'A6510901652', tecfil: 'PSD980', authomix: 'FCO0980', mann: 'PU 9011 z', mahle: 'KC 104', wega: 'FCD-0941', fram: 'PS10756', vox: 'PSD980' },
      cabine: { original: 'A9068300318', tecfil: 'ACP309', authomix: 'FCA0309', mann: 'CU 27 010', mahle: 'LA 74', wega: 'AKX-1122', fram: 'CF11175', vox: 'FCA0309' }
    }
  }
};
