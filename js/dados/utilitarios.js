export const veiculosUtilitarios = {
  'Toyota Hilux 3.0': {
    sistemas: [
      { sistema: 'Motor', especificacao: 'SAE 5W-30 ou 15W-40 [1]', capacidade: '7,0 L (com filtro)', intervalo: 'Ver nota [2]' },
      { sistema: 'Câmbio Manual / Transferência', especificacao: 'SAE 75W-90 GL-4 / GL-5', capacidade: 'Câmbio: 2,2 L | Transferência: 1,0 L', intervalo: '40.000 km' },
      { sistema: 'Diferencial Traseiro', especificacao: 'SAE 85W-140 API GL-5 [3]', capacidade: '3,5 L', intervalo: '40.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Toyota Super Long Life (50/50)', capacidade: '10,2 L', intervalo: '40.000 km' }
    ],
    notas: {
      1: "Uso normal/rodovia: SAE 5W-30 Sintético (API CI-4/ACEA B4). Uso severo/poeira excessiva/trilha: SAE 15W-40.",
      2: "Intervalo de troca: 10.000 km em rodovia; Reduzir para 5.000 km ou 3 meses em uso severo, estradas de terra ou reboque pesado.",
      3: "Se o veículo possuir bloqueio de diferencial traseiro original (LSD), certifique-se de utilizar óleo compatível com sistemas de deslizamento limitado."
    },
    filtros: {
      oleo: { original: '90915YZZD2', tecfil: 'PSL55', authomix: 'FOL0128', mann: 'W 712/83', mahle: 'OC988', wega: 'WO-100', fram: 'PH2870', vox: 'LB55' },
      ar: { original: '178010L040', tecfil: 'ARL4125', authomix: 'FAR7060', mann: 'C 32 011', mahle: 'LX1618', wega: 'FAP-3280', fram: 'CA8286', vox: 'FAR4125' },
      combustivel: { original: '233900L010', tecfil: 'PSD470', authomix: 'FCO0949', mann: 'WK 816 x', mahle: 'KX265D', wega: 'FCI-1630', fram: 'PS926', vox: 'PSD470' },
      cabine: { original: '87139YZZ01', tecfil: 'ACP301', authomix: 'FCA0887', mann: 'CU 19 192', mahle: 'LA 382', wega: 'AKX-1930', fram: 'CF11175', vox: 'FCA0301' }
    }
  },

  'Toyota Hilux 2.8 - Nova': {
    sistemas: [
      { sistema: 'Motor (1GD-FTV)', especificacao: 'SAE 5W-30 (ACEA C2) [1]', capacidade: '7,5 L (com filtro)', intervalo: 'Ver nota [2]' },
      { sistema: 'Câmbio Auto AC60F', especificacao: 'ATF WS (Toyota WS)', capacidade: '9,5 L', intervalo: '80.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 75W-85 API GL-5', capacidade: '3,0 L', intervalo: '40.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Toyota Super Long Life Coolant (50/50)', capacidade: '11,0 L', intervalo: '80.000 km inicial / a cada 40.000 km' }
    ],
    notas: {
      1: "Obrigatório o uso de óleo com especificação ACEA C2 para preservação do filtro de partículas (DPF).",
      2: "10.000 km (Uso Normal) / 5.000 km (Uso Severo / Tr urbano / Reboque / Poeira intensa)."
    },
    filtros: {
      oleo: { original: '90915YZZD3', tecfil: 'PEL106', authomix: 'FOL0127', mann: 'W 712/83', mahle: 'OC988', wega: 'WOE-473', fram: 'CH9642', vox: 'PEL106' },
      ar: { original: '1780111130', tecfil: 'ARL8480', authomix: 'FAR8480', mann: 'C 32 011', mahle: 'LX4377', wega: 'FAP-3280', fram: 'CA11250', vox: 'FAR8480' },
      combustivel: { original: '233900E020', tecfil: 'PSD980', authomix: 'FCO0980', mann: 'PU 8028', mahle: 'KX531D', wega: 'FCI-1620', fram: 'PS10038', vox: 'PSD980' },
      cabine: { original: '87139YZZ20', tecfil: 'ACP309', authomix: 'FCA0309', mann: 'FP 1919', mahle: 'LA 250', wega: 'AKX-1999', fram: 'CF10729', vox: 'FCA0309' }
    }
  },

  'Jeep Cherokee 2.5 Turbo Diesel (1999)': {
    sistemas: [
      { sistema: 'Motor', especificacao: 'SAE 15W-40 API CI-4', capacidade: '7,5 L (com filtro)', intervalo: 'Ver nota [1]' },
      { sistema: 'Câmbio Manual (AX-15)', especificacao: 'Synchromesh / 75W-85 GL-4 [2]', capacidade: '3,2 L', intervalo: '40.000 km' },
      { sistema: 'Diferenciais', especificacao: 'SAE 85W-140 API GL-5', capacidade: 'Diant: 1,1 L | Tras: 2,2 L', intervalo: '30.000 km [3]' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Etilenoglicol Híbrido (50/50)', capacidade: '11,0 L', intervalo: '20.000 km ou 2 anos' }
    ],
    notas: {
      1: "Uso normal: 5.000 km. Uso severo (trilhas, lama, uso contínuo em baixa marcha): Reduzir para 3.500 km ou 3 meses.",
      2: "CRÍTICO: Utilizar apenas óleo Synchromesh de baixa viscosidade ou API GL-4. Óleos GL-5 puros atacam e destroem quimicamente os anéis sincronizadores de bronze da caixa AX-15.",
      3: "Troca obrigatória e imediata do óleo dos diferenciais caso o veículo realize travessias de água profundas."
    },
    filtros: {
      oleo: { original: '53007386', tecfil: 'PSL39', authomix: 'FOL0039', mann: 'W 940/25', mahle: 'OC 237', wega: 'WO-120', fram: 'PH8A', vox: 'LB39' },
      ar: { original: '53007384', tecfil: 'ARL7001', authomix: 'FAR7001', mann: 'C 32 120', mahle: 'LX 824', wega: 'FAP-7001', fram: 'CA7164', vox: 'FAR7001' },
      combustivel: { original: '33002773', tecfil: 'PEC30', authomix: 'FCO0030', mann: 'WK 842/2', mahle: 'KC 19', wega: 'FCD-0740', fram: 'P4102', vox: 'PCD33' },
      cabine: { original: 'Não possui', tecfil: '-', authomix: '-', mann: '-', mahle: '-', wega: '-', fram: '-', vox: '-' }
    }
  },

  'Ford Ranger Power Stroke': {
    sistemas: [
      { sistema: 'Motor (3.0 Diesel)', especificacao: 'SAE 15W-40 (acima de -10°C) ou SAE 5W-30 (abaixo de -10°C) [1]', capacidade: '8,2 L', intervalo: 'Ver nota [2]' },
      { sistema: 'Câmbio Manual', especificacao: 'SAE 75W-90 API GL-4', capacidade: '2,8 L', intervalo: '40.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 80W-90 API GL-5', capacidade: '3,4 L', intervalo: '40.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Coolant OAT Orgânico (50/50)', capacidade: '9,0 L', intervalo: '60.000 km' }
    ],
    notas: {
      1: "Norma Ford WSS-M2C171-C/D (para 15W-40) ou WSS-M2C913-B (para 5W-30).",
      2: "10.000 km ou 6 meses, o que ocorrer primeiro."
    },
    filtros: {
      oleo: { original: 'BG2X6714AA', tecfil: 'PSL55', authomix: 'FOL0055', mann: 'W 940/25', mahle: 'OC23', wega: 'WO-200', fram: 'PH2870', vox: 'LB55' },
      ar: { original: 'WL5113Z40', tecfil: 'ARL4125', authomix: 'FAR4125', mann: 'C 28 132', mahle: 'LX1596', wega: 'FAP-2830', fram: 'CA8286', vox: 'FAR4125' },
      combustivel: { original: 'WL5113ZA5', tecfil: 'PSD470', authomix: 'FCO0470', mann: 'WK 816 x', mahle: 'KC119', wega: 'FCI-1630', fram: 'PS926', vox: 'PSD470' },
      cabine: { original: '-', tecfil: '-', authomix: '-', mann: '-', mahle: '-', wega: '-', fram: '-', vox: '-' }
    }
  },

  'Ford Ranger 2.2': {
    sistemas: [
      { sistema: 'Motor (Duratorq)', especificacao: 'SAE 5W-30 API SN [1]', capacidade: '9,5 L', intervalo: 'Ver nota [2]' },
      { sistema: 'Câmbio Manual', especificacao: 'SAE 75W-90 API GL-4', capacidade: '2,8 L', intervalo: '40.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 80W-90 API GL-5', capacidade: '2,9 L', intervalo: '40.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Coolant OAT Orgânico (50/50)', capacidade: '10,0 L', intervalo: '60.000 km' }
    ],
    notas: {
      1: "Norma Ford WSS-M2C913-D.",
      2: "10.000 km ou 1 ano (Uso Normal) / Reduzir pela metade em uso severo."
    },
    filtros: {
      oleo: { original: 'U2Y014302', tecfil: 'PEL106', authomix: 'FOL0309', mann: 'HU 7002 z', mahle: 'OX339/2D', wega: 'WOE-215', fram: 'CH10656', vox: 'PEL106' },
      ar: { original: 'AB399601AB', tecfil: 'ARL8480', authomix: 'FAR7994', mann: 'C 22 024', mahle: 'LX3511', wega: 'FAP-9006', fram: 'CA11250', vox: 'FAR8480' },
      combustivel: { original: 'AB399155AD', tecfil: 'PSD980', authomix: 'FCO0951', mann: 'PU 9008 z', mahle: 'KX338/26D', wega: 'FCD-0796', fram: 'PS10038', vox: 'PSD980' },
      cabine: { original: 'AB3919N619AA', tecfil: 'ACP309', authomix: 'FCA0212', mann: 'CU 24 006', mahle: 'LA 250', wega: 'AKX-1999', fram: 'CF10729', vox: 'FCA0309' }
    }
  },

  'Nissan Frontier 2.3': {
    sistemas: [
      { sistema: 'Motor (YS23DDT / YS23DDTT)', especificacao: 'SAE 5W-30 ACEA C3 [1]', capacidade: '6,7 L (DDT) / 6,3 L (DDTT)', intervalo: 'Ver nota [2]' },
      { sistema: 'Câmbio Manual', especificacao: 'SAE 75W-80 API GL-4', capacidade: '2,2 L', intervalo: '40.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 75W-90 API GL-5', capacidade: '2,1 L', intervalo: '40.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Coolant OAT Orgânico (50/50)', capacidade: '9,0 L', intervalo: '60.000 km' }
    ],
    notas: {
      1: "Obrigatório óleo ACEA C3 para proteção de sistemas de pós-tratamento de gases (DPF).",
      2: "Conferir plano de manutenção do ano/modelo específico (geralmente 10.000 km)."
    },
    filtros: {
      oleo: { original: '1520800Q0A', tecfil: 'PEL106', authomix: 'FOL0106', mann: 'HU 6011 z', mahle: 'OX968D', wega: 'WOE-247', fram: 'CH10656', vox: 'PEL106' },
      ar: { original: '165464KV0A', tecfil: 'ARL8480', authomix: 'FAR8480', mann: 'C 21 001', mahle: 'LX4233', wega: 'FAP-9296', fram: 'CA11250', vox: 'FAR8480' },
      combustivel: { original: '164004KV0A', tecfil: 'PSD980', authomix: 'FCO0980', mann: 'PU 9009 z KIT', mahle: 'KX387/1D', wega: 'FCD-0796', fram: 'P552008', vox: 'PSD980' },
      cabine: { original: '-', tecfil: '-', authomix: '-', mann: 'CU 10 010-2', mahle: '-', wega: '-', fram: '-', vox: '-' }
    }
  },

  'Mitsubishi Triton 2.4': {
    sistemas: [
      { sistema: 'Motor (4N15 Diesel)', especificacao: 'SAE 5W-30 API SN / ACEA C3', capacidade: '8,4 L', intervalo: '10.000 km' },
      { sistema: 'Câmbio Automático', especificacao: 'ATF SP-III', capacidade: '8,0 L', intervalo: '40.000 km' },
      { sistema: 'Diferencial (LSD)', especificacao: 'SAE 80W-90 API GL-5', capacidade: '2,3 L', intervalo: '40.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Coolant Orgânico (50/50)', capacidade: '8,5 L', intervalo: '60.000 km' }
    ],
    notas: {
      1: "Manter rigor na qualidade do combustível diesel (S10) e troca de filtros."
    },
    filtros: {
      oleo: { original: '1230A186', tecfil: 'PEL106', authomix: 'FOL0106', mann: 'C 24 011', mahle: 'OC1183', wega: 'WOE-610', fram: 'CH9642', vox: 'PEL106' },
      ar: { original: '1500A593', tecfil: 'ARL8480', authomix: 'FAR8480', mann: 'C 15 300', mahle: 'LX2616', wega: 'FAP-4030', fram: 'CA10427', vox: 'FAR8480' },
      combustivel: { original: '1770A225', tecfil: 'PSD980', authomix: 'FCO0980', mann: 'W 9069', mahle: 'KX495D', wega: 'FCI-1620', fram: 'PS10038', vox: 'PSD980' },
      cabine: { original: '-', tecfil: '-', authomix: '-', mann: '-', mahle: '-', wega: '-', fram: '-', vox: '-' }
    }
  }
};
