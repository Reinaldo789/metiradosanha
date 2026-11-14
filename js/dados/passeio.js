export const veiculosPasseio = {
  'Chevrolet SPIN': {
    sistemas: [
      { sistema: 'Motor', especificacao: 'SAE 5W-30 (dexos1) [1]', capacidade: '4,2 L (com filtro)', intervalo: 'Ver nota [2]' },
      { sistema: 'Câmbio Manual (F17)', especificacao: 'SAE 75W-85 API GL-4', capacidade: '1,8 L', intervalo: '60.000 km (Inspeção)' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico OAT (50/50)', capacidade: '6,5 L', intervalo: '60.000 km ou 5 anos' }
    ],
    notas: {
      1: "Uso normal/rodovia: SAE 5W-30 (dexos1 Gen2/Gen3) API SP. Uso severo (trânsito urbano intenso, táxi ou percursos curtos): Manter a mesma especificação mas reduzir o intervalo.",
      2: "Intervalo de troca: 10.000 km ou 1 ano para uso normal; Reduzir para 5.000 km ou 6 meses se o veículo operar predominantemente em regime de uso severo."
    },
    filtros: {
      oleo: { original: '24588463', tecfil: 'PSL619', authomix: 'FOL0619', mann: 'W 712/22', mahle: 'OC90', wega: 'WO-150', fram: 'PH10907', vox: 'LB619' },
      ar: { original: '98550812', tecfil: 'ARL8829', authomix: 'FAR8829', mann: 'C 29 030', mahle: 'LX3547', wega: 'FAP-9267', fram: 'CA10330', vox: 'FAR8829' },
      combustivel: { original: '93316245', tecfil: 'GI04/7', authomix: 'FCO0047', mann: 'WK 58/3', mahle: 'KL582', wega: 'FCI-1660', fram: 'G1041', vox: 'FC00047' },
      cabine: { original: '94747799', tecfil: 'ACP309', authomix: 'FCA0309', mann: 'CU 2433', mahle: 'LA 90', wega: 'AKX-1999', fram: 'CF11175', vox: 'FCA0309' }
    }
  },

  'Chevrolet Agile': {
    sistemas: [
      { sistema: 'Motor', especificacao: 'SAE 5W-30 (dexos1) [1]', capacidade: '3,5 L (com filtro)', intervalo: 'Ver nota [2]' },
      { sistema: 'Câmbio Manual', especificacao: 'SAE 75W-85 API GL-4', capacidade: '1,6 L', intervalo: '60.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico OAT (50/50)', capacidade: '5,5 L', intervalo: '60.000 km' }
    ],
    notas: {
      1: "Uso normal: SAE 5W-30 dexos1. Uso severo: Manter a especificação com troca antecipada.",
      2: "10.000 km ou 1 ano (Normal) / 5.000 km ou 6 meses (Severo)."
    },
    filtros: {
      oleo: { original: '93742512', tecfil: 'PSL55', authomix: 'FOL0055', mann: 'W 712/22', mahle: 'OC90', wega: 'WO-120', fram: 'PH5949', vox: 'LB55' },
      ar: { original: '93396172', tecfil: 'ARL4103', authomix: 'FAR4103', mann: 'C 23 015', mahle: 'LX3026', wega: 'FAP-9003', fram: 'CA10015', vox: 'FAR4103' },
      combustivel: { original: '93297745', tecfil: 'GI04/7', authomix: 'FCO0047', mann: 'WK 58/3', mahle: 'KL582', wega: 'FCI-1630', fram: 'G1025', vox: 'FC00047' },
      cabine: { original: '93396173', tecfil: 'ACP308', authomix: 'FCA0308', mann: 'CU 2433', mahle: 'LA 90', wega: 'AKX-3510', fram: 'CF11175', vox: 'FCA0308' }
    }
  },

  'Chevrolet Montana': {
    sistemas: [
      { sistema: 'Motor', especificacao: 'SAE 5W-30 (dexos1) [1]', capacidade: '3,5 L (com filtro)', intervalo: 'Ver nota [2]' },
      { sistema: 'Câmbio Manual', especificacao: 'SAE 75W-85 API GL-4', capacidade: '1,6 L', intervalo: '60.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico OAT (50/50)', capacidade: '5,4 L', intervalo: '60.000 km' }
    ],
    notas: {
      1: "Uso normal: SAE 5W-30 dexos1. Uso severo ou transporte frequente de carga: Antecipar a troca.",
      2: "10.000 km ou 1 ano (Normal) / 5.000 km ou 6 meses (Severo / Trabalho)."
    },
    filtros: {
      oleo: { original: '93742512', tecfil: 'PSL55', authomix: 'FOL0055', mann: 'W 712/22', mahle: 'OC90', wega: 'WO-120', fram: 'PH5949', vox: 'LB55' },
      ar: { original: '93396172', tecfil: 'ARL4103', authomix: 'FAR4103', mann: 'C 23 015', mahle: 'LX3026', wega: 'FAP-9003', fram: 'CA10015', vox: 'FAR4103' },
      combustivel: { original: '93297745', tecfil: 'GI04/7', authomix: 'FCO0047', mann: 'WK 58/3', mahle: 'KL582', wega: 'FCI-1630', fram: 'G1025', vox: 'FC00047' },
      cabine: { original: '93396173', tecfil: 'ACP308', authomix: 'FCA0308', mann: 'CU 2433', mahle: 'LA 90', wega: 'AKX-3510', fram: 'CF11175', vox: 'FCA0308' }
    }
  },

  'Fiat Palio 1.4': {
    sistemas: [
      { sistema: 'Motor', especificacao: 'SAE 5W-30 Sintético [1]', capacidade: '2,7 L (com filtro)', intervalo: 'Ver nota [2]' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico Long Life (50/50)', capacidade: '5,0 L', intervalo: '60.000 km ou 2 anos' }
    ],
    notas: {
      1: "Utilizar lubrificante sintético que atenda à norma Fiat 9.55535-GS1 ou API SP.",
      2: "Uso normal: 10.000 km ou 1 ano. Uso severo (trânsito diário pesado / anda e para): 5.000 km ou 6 meses."
    },
    filtros: {
      oleo: { original: '7085786', tecfil: 'PSL55', authomix: 'FOL0055', mann: 'W 713/16', mahle: 'OC506', wega: 'WO-130', fram: 'CH9642', vox: 'LB55' },
      ar: { original: '51775324', tecfil: 'ARL4150', authomix: 'FAR4150', mann: 'C 2585', mahle: 'LX1791', wega: 'FAP-4022', fram: 'CA9566', vox: 'FAR4150' },
      combustivel: { original: '51778945', tecfil: 'GI04/7', authomix: 'FCO0047', mann: 'WK 58', mahle: 'KL582', wega: 'FCI-1660', fram: 'G9193', vox: 'FC00047' },
      cabine: { original: '7088921', tecfil: 'ACP304', authomix: 'FCA0304', mann: 'CU 2629/1', mahle: 'LA 67', wega: 'AKX-3520', fram: 'CF9481', vox: 'FCA0304' }
    }
  },

  'Fiat Doblo 1.8': {
    sistemas: [
      { sistema: 'Motor', especificacao: 'SAE 5W-30 (API SP) [1]', capacidade: '4,5 L (com filtro)', intervalo: 'Ver nota [2]' },
      { sistema: 'Câmbio Manual', especificacao: 'SAE 75W-85 API GL-4', capacidade: '2,1 L', intervalo: '60.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico OAT (50/50)', capacidade: '6,0 L', intervalo: '60.000 km' }
    ],
    notas: {
      1: "API SP / Sintético. Uso severo requer atenção redobrada ao nível de óleo.",
      2: "10.000 km (Normal) / 5.000 km (Severo)."
    },
    filtros: {
      oleo: { original: '7085786', tecfil: 'PSL619', authomix: 'FOL0619', mann: 'W 713/16', mahle: 'OC506', wega: 'WO-130', fram: 'CH9642', vox: 'LB619' },
      ar: { original: '51794712', tecfil: 'ARL4148', authomix: 'FAR4148', mann: 'C 2585', mahle: 'LX1791', wega: 'FAP-4025', fram: 'CA10222', vox: 'FAR4148' },
      combustivel: { original: '51778945', tecfil: 'GI04/7', authomix: 'FCO0047', mann: 'WK 58', mahle: 'KL582', wega: 'FCI-1660', fram: 'G9193', vox: 'FC00047' },
      cabine: { original: '46723321', tecfil: 'ACP302', authomix: 'FCA0302', mann: 'CU 2629/1', mahle: 'LA 67', wega: 'AKX-1100', fram: 'CF1028', vox: 'FCA0302' }
    }
  },

  'Fiat Doblo 1.4': {
    sistemas: [
      { sistema: 'Motor', especificacao: 'SAE 5W-30 (API SP) [1]', capacidade: '2,7 L (com filtro)', intervalo: 'Ver nota [2]' },
      { sistema: 'Câmbio Manual', especificacao: 'SAE 75W-85 API GL-4', capacidade: '2,0 L', intervalo: '60.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico OAT (50/50)', capacidade: '5,5 L', intervalo: '60.000 km' }
    ],
    notas: {
      1: "API SP / Sintético.",
      2: "10.000 km (Normal) / 5.000 km (Severo)."
    },
    filtros: {
      oleo: { original: '7085786', tecfil: 'PSL55', authomix: 'FOL0055', mann: 'W 713/16', mahle: 'OC506', wega: 'WO-130', fram: 'CH9642', vox: 'LB55' },
      ar: { original: '51775324', tecfil: 'ARL4148', authomix: 'FAR4148', mann: 'C 2585', mahle: 'LX1791', wega: 'FAP-4022', fram: 'CA9566', vox: 'FAR4148' },
      combustivel: { original: '51778945', tecfil: 'GI04/7', authomix: 'FCO0047', mann: 'WK 58', mahle: 'KL582', wega: 'FCI-1660', fram: 'G9193', vox: 'FC00047' },
      cabine: { original: '46723321', tecfil: 'ACP302', authomix: 'FCA0302', mann: 'CU 2629/1', mahle: 'LA 67', wega: 'AKX-1100', fram: 'CF1028', vox: 'FCA0302' }
    }
  },

  'Fiat Strada 1.4': {
    sistemas: [
      { sistema: 'Motor', especificacao: 'SAE 5W-30 (API SP) [1]', capacidade: '2,7 L (com filtro)', intervalo: 'Ver nota [2]' },
      { sistema: 'Câmbio Manual', especificacao: 'SAE 75W-85 API GL-4', capacidade: '2,0 L', intervalo: '60.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico OAT (50/50)', capacidade: '5,5 L', intervalo: '60.000 km' }
    ],
    notas: {
      1: "API SP / Sintético.",
      2: "10.000 km (Normal) / 5.000 km (Severo / Trabalho rural ou urbano pesado)."
    },
    filtros: {
      oleo: { original: '7085786', tecfil: 'PSL55', authomix: 'FOL0055', mann: 'W 713/16', mahle: 'OC506', wega: 'WO-130', fram: 'CH9642', vox: 'LB55' },
      ar: { original: '51775324', tecfil: 'ARL4150', authomix: 'FAR4150', mann: 'C 2585', mahle: 'LX1791', wega: 'FAP-4022', fram: 'CA9566', vox: 'FAR4150' },
      combustivel: { original: '51778945', tecfil: 'GI04/7', authomix: 'FCO0047', mann: 'WK 58', mahle: 'KL582', wega: 'FCI-1660', fram: 'G9193', vox: 'FC00047' },
      cabine: { original: '7088921', tecfil: 'ACP304', authomix: 'FCA0304', mann: 'CU 2629/1', mahle: 'LA 67', wega: 'AKX-3520', fram: 'CF9481', vox: 'FCA0304' }
    }
  },

  'Ford Fiesta 1.0': {
    sistemas: [
      { sistema: 'Motor', especificacao: 'SAE 5W-30 API SN [1]', capacidade: '4,1 L (com filtro)', intervalo: 'Ver nota [2]' },
      { sistema: 'Câmbio Manual', especificacao: 'SAE 75W-85 API GL-4', capacidade: '2,3 L', intervalo: '60.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Coolant OAT Orgânico (50/50)', capacidade: '5,0 L', intervalo: '60.000 km' }
    ],
    notas: {
      1: "Atender especificação Ford WSS-M2C913-C/D ou API SN.",
      2: "10.000 km (Normal) / 5.000 km (Severo)."
    },
    filtros: {
      oleo: { original: 'XS6E6714B1A', tecfil: 'PSL55', authomix: 'FOL0055', mann: 'W 712/43', mahle: 'OC266', wega: 'WO-200', fram: 'PH2870', vox: 'LB55' },
      ar: { original: '2S659601AA', tecfil: 'ARL4125', authomix: 'FAR4125', mann: 'C 4151', mahle: 'LX1597', wega: 'FAP-2830', fram: 'CA9926', vox: 'FAR4125' },
      combustivel: { original: '2S659155AB', tecfil: 'GI04/7', authomix: 'FCO0047', mann: 'WK 612/7', mahle: 'KL476', wega: 'FCI-1630', fram: 'G1025', vox: 'FC00047' },
      cabine: { original: '2S6519N619AA', tecfil: 'ACP301', authomix: 'FCA0301', mann: 'CU 2433/1', mahle: 'LA 74', wega: 'AKX-1930', fram: 'CF11175', vox: 'FCA0301' }
    }
  },

  'Ford Fiesta 1.6': {
    sistemas: [
      { sistema: 'Motor', especificacao: 'SAE 5W-30 API SN [1]', capacidade: '4,1 L (com filtro)', intervalo: 'Ver nota [2]' },
      { sistema: 'Câmbio Manual', especificacao: 'SAE 75W-85 API GL-4', capacidade: '2,3 L', intervalo: '60.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Coolant OAT Orgânico (50/50)', capacidade: '5,0 L', intervalo: '60.000 km' }
    ],
    notas: {
      1: "Atender especificação Ford WSS-M2C913-C/D ou API SN.",
      2: "10.000 km (Normal) / 5.000 km (Severo)."
    },
    filtros: {
      oleo: { original: 'XS6E6714B1A', tecfil: 'PSL55', authomix: 'FOL0055', mann: 'W 712/43', mahle: 'OC266', wega: 'WO-200', fram: 'PH2870', vox: 'LB55' },
      ar: { original: '2S659601AA', tecfil: 'ARL4125', authomix: 'FAR4125', mann: 'C 4151', mahle: 'LX1597', wega: 'FAP-2830', fram: 'CA9926', vox: 'FAR4125' },
      combustivel: { original: '2S659155AB', tecfil: 'GI04/7', authomix: 'FCO0047', mann: 'WK 612/7', mahle: 'KL476', wega: 'FCI-1630', fram: 'G1025', vox: 'FC00047' },
      cabine: { original: '2S6519N619AA', tecfil: 'ACP301', authomix: 'FCA0301', mann: 'CU 2433/1', mahle: 'LA 74', wega: 'AKX-1930', fram: 'CF11175', vox: 'FCA0301' }
    }
  },

  'Ford Focus 1.6': {
    sistemas: [
      { sistema: 'Motor', especificacao: 'SAE 5W-30 API SN [1]', capacidade: '4,1 L (com filtro)', intervalo: 'Ver nota [2]' },
      { sistema: 'Câmbio Manual', especificacao: 'SAE 75W-85 API GL-4', capacidade: '2,3 L', intervalo: '60.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Coolant OAT Orgânico (50/50)', capacidade: '5,5 L', intervalo: '60.000 km' }
    ],
    notas: {
      1: "Atender especificação Ford WSS-M2C913-C/D.",
      2: "10.000 km (Normal) / 5.000 km (Severo)."
    },
    filtros: {
      oleo: { original: 'XS6E6714B1A', tecfil: 'PSL55', authomix: 'FOL0055', mann: 'W 7015', mahle: 'OC266', wega: 'WO-200', fram: 'PH2870', vox: 'LB55' },
      ar: { original: '3M559601AA', tecfil: 'ARL4130', authomix: 'FAR4130', mann: 'C 16 134/2', mahle: 'LX869', wega: 'FAP-2830', fram: 'CA9926', vox: 'FAR4130' },
      combustivel: { original: '2S659155AB', tecfil: 'GI04/7', authomix: 'FCO0047', mann: 'WK 613/4', mahle: 'KL476', wega: 'FCI-1630', fram: 'G1025', vox: 'FC00047' },
      cabine: { original: '3M5519N619AB', tecfil: 'ACP309', authomix: 'FCA0309', mann: 'CU 2440', mahle: 'LA 74', wega: 'AKX-1110', fram: 'CF10729', vox: 'FCA0309' }
    }
  },

  'Ford Focus 2.0': {
    sistemas: [
      { sistema: 'Motor', especificacao: 'SAE 5W-30 API SN [1]', capacidade: '4,3 L (com filtro)', intervalo: 'Ver nota [2]' },
      { sistema: 'Câmbio Manual', especificacao: 'SAE 75W-85 API GL-4', capacidade: '2,1 L', intervalo: '60.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Coolant OAT Orgânico (50/50)', capacidade: '5,5 L', intervalo: '60.000 km' }
    ],
    notas: {
      1: "Atender especificação Ford WSS-M2C913-C/D.",
      2: "10.000 km (Normal) / 5.000 km (Severo)."
    },
    filtros: {
      oleo: { original: 'XS6E6714B1A', tecfil: 'PSL55', authomix: 'FOL0055', mann: 'W 7015', mahle: 'OC266', wega: 'WO-200', fram: 'PH2870', vox: 'LB55' },
      ar: { original: '3M559601AA', tecfil: 'ARL4130', authomix: 'FAR4130', mann: 'C 16 134/2', mahle: 'LX869', wega: 'FAP-2830', fram: 'CA9926', vox: 'FAR4130' },
      combustivel: { original: '2S659155AB', tecfil: 'GI04/7', authomix: 'FCO0047', mann: 'WK 512/1', mahle: 'KL476', wega: 'FCI-1630', fram: 'G1025', vox: 'FC00047' },
      cabine: { original: '3M5519N619AB', tecfil: 'ACP309', authomix: 'FCA0309', mann: 'CU 2440', mahle: 'LA 74', wega: 'AKX-1110', fram: 'CF10729', vox: 'FCA0309' }
    }
  },

  'Nissan Sentra': {
    sistemas: [
      { sistema: 'Motor', especificacao: 'SAE 5W-30 API SN [1]', capacidade: '4,4 L (com filtro)', intervalo: 'Ver nota [2]' },
      { sistema: 'Câmbio CVT', especificacao: 'NS-3 Fluid', capacidade: '7,5 L', intervalo: '40.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Coolant OAT Orgânico (50/50)', capacidade: '6,5 L', intervalo: '60.000 km' }
    ],
    notas: {
      1: "Óleo sintético API SN ou superior.",
      2: "10.000 km (Normal) / 5.000 km (Severo)."
    },
    filtros: {
      oleo: { original: '1520865F0A', tecfil: 'PSL158', authomix: 'FOL0158', mann: 'W 67/3', mahle: 'OC1052', wega: 'WO-150', fram: 'PH4967', vox: 'LB158' },
      ar: { original: '16546ED000', tecfil: 'ARL1655', authomix: 'FAR1655', mann: 'C 2329', mahle: 'LX1983', wega: 'FAP-9030', fram: 'CA10226', vox: 'FAR1655' },
      combustivel: { original: 'Tanque', tecfil: '-', authomix: null, mann: 'WK 58/3', mahle: 'KL583', wega: '-', fram: '-', vox: '-' },
      cabine: { original: '27277EN000', tecfil: 'ACP310', authomix: 'FCA0310', mann: 'CU 22 011', mahle: 'LA 452', wega: 'AKX-3512', fram: 'CF10786', vox: 'FCA0310' }
    }
  },

  'Nissan Versa 1.6': {
    sistemas: [
      { sistema: 'Motor', especificacao: 'SAE 5W-30 API SN [1]', capacidade: '4,0 L (com filtro)', intervalo: 'Ver nota [2]' },
      { sistema: 'Câmbio CVT', especificacao: 'NS-3 Fluid', capacidade: '6,9 L', intervalo: '60.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Coolant OAT Orgânico (50/50)', capacidade: '6,0 L', intervalo: '60.000 km' }
    ],
    notas: {
      1: "Óleo sintético API SN ou superior.",
      2: "10.000 km (Normal) / 5.000 km (Severo)."
    },
    filtros: {
      oleo: { original: '1520865F0A', tecfil: 'PSL158', authomix: 'FOL0158', mann: 'W 66/1', mahle: 'OC1052', wega: 'WO-150', fram: 'PH4967', vox: 'LB158' },
      ar: { original: '165461KA0A', tecfil: 'ARL1656', authomix: 'FAR1656', mann: 'C 2329', mahle: 'LX3549', wega: 'FAP-9030', fram: 'CA11123', vox: 'FAR1656' },
      combustivel: { original: 'Tanque', tecfil: '-', authomix: null, mann: 'WK 58/3', mahle: 'KL583', wega: '-', fram: '-', vox: '-' },
      cabine: { original: '272771KA0A', tecfil: 'ACP312', authomix: 'FCA0312', mann: 'CU 22 011', mahle: 'LA 452', wega: 'AKX-3512', fram: 'CF11784', vox: 'FCA0312' }
    }
  },

  'Peugeot 408 1.6 THP': {
    sistemas: [
      { sistema: 'Motor (1.6 Turbo THP)', especificacao: 'SAE 5W-30 (Norma PSA B71 2290 / 2312) [1]', capacidade: '4,25 L (com filtro)', intervalo: 'Ver nota [2]' },
      { sistema: 'Câmbio Automático', especificacao: 'ATF AW-1', capacidade: '7,0 L', intervalo: '60.000 km (Inspeção)' },
      { sistema: 'Arrefecimento', especificacao: 'Coolant OAT Orgânico (50/50)', capacidade: '6,0 L', intervalo: '60.000 km ou 3 anos' }
    ],
    notas: {
      1: "Obrigatório o uso de óleo sintético de alta qualidade com aprovação PSA B71 2290 para proteger o turbocompressor e evitar acumulação de borra na injeção direta.",
      2: "Uso normal (rodovia): 10.000 km ou 1 ano. Uso severo (trânsito urbano pesado / percursos curtos frequentes): Reduzir estritamente para 5.000 km ou 6 meses."
    },
    filtros: {
      oleo: { original: '1109AY', tecfil: 'PEL674', authomix: 'FOL0674', mann: 'HU 711/51 x', mahle: 'OX339/2D', wega: 'WOE-710', fram: 'CH9641', vox: 'PEL674' },
      ar: { original: '1444RJ', tecfil: 'ARL5047', authomix: 'FAR5047', mann: 'C 42 010', mahle: 'LX2681', wega: 'FAP-9295', fram: 'CA11050', vox: 'FAR5047' },
      combustivel: { original: '156794', tecfil: 'GI50/7', authomix: 'FCO0507', mann: 'WK 58/3', mahle: 'KL583', wega: 'FCI-1630', fram: 'G1030', vox: 'FC00047' },
      cabine: { original: '6447XF', tecfil: 'ACP305', authomix: 'FCA0305', mann: 'CU 2940', mahle: 'LA 56', wega: 'AKX-1991', fram: 'CF10549', vox: 'FCA0305' }
    }
  },

  'Toyota Corolla 2.0': {
    sistemas: [
      { sistema: 'Motor (Dynamic Force / Dual VVT-i)', especificacao: 'SAE 0W-20 ou 5W-30 (API SP / ILSAC GF-6) [1]', capacidade: '4,2 L a 4,4 L (com filtro)', intervalo: 'Ver nota [2]' },
      { sistema: 'Câmbio CVT (Direct Shift-CVT / K120)', especificacao: 'Toyota Genuine CVT Fluid TC / FE', capacidade: '8,8 L (total) / ~4,0 L (troca por gravidade)', intervalo: '40.000 km ou 4 anos (severo) / 80.000 km (normal)' },
      { sistema: 'Arrefecimento', especificacao: 'Toyota Super Long Life Coolant (SLLC) Orgânico (50/50)', capacidade: '6,5 L', intervalo: '80.000 km (primeira troca) e depois a cada 40.000 km' }
    ],
    notas: {
      1: "Para máxima eficiência e economia de combustível recomendada pela fabricante, utilizar SAE 0W-20 API SP. Viscosidade SAE 5W-30 aceita em uso severo ou alta quilometragem.",
      2: "Intervalo oficial de troca de óleo do motor: 10.000 km ou 1 ano, o que ocorrer primeiro. Reduzir para 5.000 km em caso de uso severo (trânsito urbano pesado constante)."
    },
    filtros: {
      oleo: { original: '04152-YZZA6', tecfil: 'PEL106', authomix: 'FOL0106', mann: 'HU 6008 z', mahle: 'OX 415D', wega: 'WOE-610', fram: 'CH10955', vox: 'PEL106' },
      ar: { original: '17801-0V030', tecfil: 'ARL8480', authomix: 'FAR8480', mann: 'C 27 024', mahle: 'LX 3911', wega: 'FAP-3280', fram: 'CA12055', vox: 'FAR8480' },
      combustivel: { original: 'Tanque / Elemento interno', tecfil: '-', authomix: null, mann: '-', mahle: '-', wega: '-', fram: '-', vox: '-' },
      cabine: { original: '87139-YZZ20', tecfil: 'ACP309', authomix: 'FCA0309', mann: 'FP 1919', mahle: 'LA 250', wega: 'AKX-1999', fram: 'CF10729', vox: 'FCA0309' }
    }
  },

  'Renault Logan - Sandero': {
    sistemas: [
      { sistema: 'Motor', especificacao: 'SAE 5W-40 ou 10W-40 [1]', capacidade: '4,8 L (com filtro)', intervalo: 'Ver nota [2]' },
      { sistema: 'Câmbio Manual', especificacao: 'SAE 75W-80 API GL-4', capacidade: '2,5 L', intervalo: '60.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Coolant OAT Orgânico (50/50)', capacidade: '5,0 L', intervalo: '60.000 km' }
    ],
    notas: {
      1: "API SL ou superior, preferencialmente sintético ou semissintético conforme recomendação Renault.",
      2: "10.000 km (Normal) / 5.000 km (Severo)."
    },
    filtros: {
      oleo: { original: '8200768913', tecfil: 'PSL51', authomix: 'FOL0051', mann: 'W 75/2', mahle: 'OC467', wega: 'WO-120', fram: 'PH5796', vox: 'LB51' },
      ar: { original: '165467674R', tecfil: 'ARL9010', authomix: 'FAR9010', mann: 'C 27 030', mahle: 'LX1066', wega: 'FAP-9010', fram: 'CA11036', vox: 'FAR9010' },
      combustivel: { original: '6001548810', tecfil: 'GI04/7', authomix: 'FCO0047', mann: 'WK 58/3', mahle: 'KL583', wega: 'FCI-1630', fram: 'G1025', vox: 'FC00047' },
      cabine: { original: '272773229R', tecfil: 'ACP928', authomix: 'FCA0928', mann: 'CU 22 019/2', mahle: 'LA 182', wega: 'AKX-1120', fram: 'CF10366', vox: 'FCA928' }
    }
  },

  'VW Kombi 1.4': {
    sistemas: [
      { sistema: 'Motor (EA111 Total Flex)', especificacao: 'SAE 15W-40 ou 5W-40 (Norma VW 502 00) [1]', capacidade: '3,3 L (com filtro)', intervalo: 'Ver nota [2]' },
      { sistema: 'Câmbio Manual', especificacao: 'API GL-4', capacidade: '3,0 L', intervalo: '60.000 km' }
    ],
    notas: {
      1: "Motor arrefecido a líquido (arrefecimento por radiador na frente), portanto não utiliza arrefecimento a ar como as antigas a ar.",
      2: "10.000 km (Normal) / 5.000 km (Severo / Carga e trabalho urbano)."
    },
    filtros: {
      oleo: { original: '030115561AN', tecfil: 'PSL55', authomix: 'FOL0055', mann: 'W 712/22', mahle: 'OC250', wega: 'WO-100', fram: 'PH5949', vox: 'LB55' },
      ar: { original: '0231296201', tecfil: 'ARL3280', authomix: 'FAR3280', mann: 'C 12 822', mahle: 'LX1594', wega: 'FAP-3280', fram: 'CA8286', vox: 'FAR3280' },
      combustivel: { original: '6QE201511', tecfil: 'GI04/7', authomix: 'FCO0047', mann: 'WK 58/3', mahle: 'KL582', wega: 'FCI-1630', fram: 'G1025', vox: 'FC00047' },
      cabine: { original: 'Não possui', tecfil: '-', authomix: '-', mann: '-', mahle: '-', wega: '-', fram: '-', vox: '-' }
    }
  },

  'VW Gol 1.6 G5': {
    sistemas: [
      { sistema: 'Motor', especificacao: 'SAE 5W-40 (Norma VW 502 00) [1]', capacidade: '3,6 L (com filtro)', intervalo: 'Ver nota [2]' },
      { sistema: 'Câmbio Manual', especificacao: 'SAE 75W-80 API GL-4', capacidade: '2,0 L', intervalo: '60.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Coolant OAT G12/G13 Orgânico (50/50)', capacidade: '5,0 L', intervalo: '60.000 km' }
    ],
    notas: {
      1: "Obrigatório atender norma VW 502 00 (sintético ou semissintético).",
      2: "10.000 km (Normal) / 5.000 km (Severo)."
    },
    filtros: {
      oleo: { original: '030115561AN', tecfil: 'PSL560', authomix: 'FOL0560', mann: 'W 712/53', mahle: 'OC250', wega: 'WO-100', fram: 'PH5949', vox: 'LB560' },
      ar: { original: '032129620C', tecfil: 'ARL3280', authomix: 'FAR6080', mann: 'C 2295/2', mahle: 'LX1592', wega: 'FAP-3280', fram: 'CA8286', vox: 'FAR3280' },
      combustivel: { original: '6QE201511', tecfil: 'GI50/7', authomix: 'FCO0507', mann: 'WK 58/3', mahle: 'KL583', wega: 'FCI-1630', fram: 'G1025', vox: 'FC0507' },
      cabine: { original: '5U0819653', tecfil: 'ACP309', authomix: 'FCA0309', mann: 'CU 3162', mahle: 'LA 74', wega: 'AKX-1122', fram: 'CF11175', vox: 'FCA0309' }
    }
  },

  'VW Gol 1.6 G6': {
    sistemas: [
      { sistema: 'Motor', especificacao: 'SAE 5W-40 (Norma VW 502 00) [1]', capacidade: '3,6 L (com filtro)', intervalo: 'Ver nota [2]' },
      { sistema: 'Câmbio Manual', especificacao: 'SAE 75W-80 API GL-4', capacidade: '2,0 L', intervalo: '60.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Coolant OAT G12/G13 Orgânico (50/50)', capacidade: '5,0 L', intervalo: '60.000 km' }
    ],
    notas: {
      1: "Obrigatório atender norma VW 502 00.",
      2: "10.000 km (Normal) / 5.000 km (Severo)."
    },
    filtros: {
      oleo: { original: '030115561AN', tecfil: 'PSL560', authomix: 'FOL0560', mann: 'W 712/53', mahle: 'OC250', wega: 'WO-100', fram: 'PH5949', vox: 'LB560' },
      ar: { original: '032129620C', tecfil: 'ARL3280', authomix: 'FAR6080', mann: 'C 2295/2', mahle: 'LX1592', wega: 'FAP-3280', fram: 'CA8286', vox: 'FAR3280' },
      combustivel: { original: '6QE201511', tecfil: 'GI50/7', authomix: 'FCO0507', mann: 'WK 58/3', mahle: 'KL583', wega: 'FCI-1630', fram: 'G1025', vox: 'FC0507' },
      cabine: { original: '5U0819653', tecfil: 'ACP309', authomix: 'FCA0309', mann: 'CU 3162', mahle: 'LA 74', wega: 'AKX-1122', fram: 'CF11175', vox: 'FCA0309' }
    }
  }
};
