/* ==========================================================
   DADOS DO MANUAL AUTOMOTIVO — dados.js
   Versão: Atualizada com Catálogo Tecfil e MANN (Leve e Pesada)
   ========================================================== */

const bancoDeDados = {
  'veiculos-passeio': {
    titulo: 'Veículos Passeio',
    marcas: {
      'Chevrolet': ['Chevrolet SPIN', 'Chevrolet Agile', 'Chevrolet Montana'],
      'Fiat': ['Fiat Palio 1.4', 'Fiat Doblo 1.8', 'Fiat Doblo 1.4', 'Fiat Strada 1.4'],
      'Ford': ['Ford Fiesta 1.0', 'Ford Fiesta 1.6', 'Ford Focus 1.6', 'Ford Focus 2.0'],
      'Nissan, Peugeot e Renault': ['Nissan Sentra', 'Nissan Versa 1.6', 'Peugeot 408 1.6 THP', 'Renault Logan - Sandero'],
      'Volkswagen': ['VW Kombi 1.4', 'VW Gol 1.6 G5', 'VW Gol 1.6 G6']
    }
  },
  'veiculos-utilitarios': {
    titulo: 'Veículos Utilitários',
    marcas: {
      'Agrale': ['Agrale Marruá - AM21', 'Agrale Marruá - AM20', 'Agrale Marruá - AM22', 'Agrale Marruá - AM25'],
      'Ford': ['Ford F-250 e F-350', 'Ford Ranger Power Stroke', 'Ford Ranger 3.0 NGD', 'Ford Ranger 2.2', 'Ford Transit'],
      'Mitsubishi e Nissan': ['Mitsubishi L200 2.5', 'Mitsubishi Triton 3.2', 'Mitsubishi Triton 2.4', 'Nissan Frontier 2.5', 'Nissan Frontier 2.3'],
      'Toyota': ['Toyota Hilux 3.0', 'Toyota Hilux 2.8 - Nova']
    }
  },
  'caminhoes': {
    titulo: 'Caminhões',
    marcas: {
      'Agrale': ['Agrale 8500', 'Agrale 10000', 'Agrale 13000'],
      'DAF': ['DAF XF', 'DAF CF', 'DAF XD'],
      'Foton': ['Foton Aumark S 3.5', 'Foton Aumark S 5.5', 'Foton Auman ETX'],
      'Ford': ['Ford Cargo 816', 'Ford Cargo 1317', 'Ford Cargo 1719', 'Ford Cargo 2429', 'Ford Cargo 2629', 'Ford Cargo 3131'],
      'Iveco': ['Iveco Daily 30-130', 'Iveco Daily 35-150', 'Iveco Daily 55C', 'Iveco Tector', 'Iveco Stralis', 'Iveco S-Way'],
      'JAC': ['JAC V260', 'JAC X200', 'JAC X300'],
      'MAN': ['MAN TGX', 'MAN TGS'],
      'Mercedes-Benz': ['Mercedes-Benz Accelo 1016', 'Mercedes-Benz Accelo 1017', 'Mercedes-Benz Atego 1719', 'Mercedes-Benz Atego 2426', 'Mercedes-Benz Atego 2730', 'Mercedes-Benz Axor 2536', 'Mercedes-Benz Axor 2644', 'Mercedes-Benz Axor 3344', 'Mercedes-Benz Actros 2651', 'Mercedes-Benz Actros 2657'],
      'Scania': ['Scania P 250', 'Scania P 310', 'Scania G 410', 'Scania R 450', 'Scania R 540', 'Scania S 450', 'Scania S 540'],
      'Volkswagen': ['VW Delivery 9.170', 'VW Delivery 11.180', 'VW Delivery 13.180', 'VW Worker 8.150', 'VW Worker 15.180', 'VW Worker 17.190', 'VW Worker 24.220', 'VW Worker 24.250', 'VW Worker 26.260', 'VW Worker 26.280', 'VW Constellation 17.190', 'VW Constellation 24.250', 'VW Constellation 24.280', 'VW Constellation 26.280', 'VW Constellation 31.320', 'VW Constellation 33.440'],
      'Volvo': ['Volvo VM 23', 'Volvo VM 26', 'Volvo VM 30', 'Volvo FH 460', 'Volvo FH 540', 'Volvo FMX 460', 'Volvo FMX 540']
    }
  },
  'onibus-e-vans': {
    titulo: 'Ônibus e Vans',
    marcas: {
      'Vans e Utilitários': ['Fiat Ducato 2.3 Multijet', 'Fiat Ducato 2.8', 'Iveco - Daily 35S14']
    }
  }
};

const especificacoesOleos = {

  // ==================== VEÍCULOS PASSEIO ====================
  'Chevrolet SPIN': {
    sistemas: [
      { sistema: 'Motor', especificacao: 'SAE 5W-30 (dexos1)', norma: 'API SN', capacidade: '4,2 L', intervalo: '10.000 km' },
      { sistema: 'Câmbio Manual', especificacao: 'SAE 75W-85', norma: 'API GL-4', capacidade: '1,8 L', intervalo: '60.000 km' },
      { sistema: 'Direção Hidráulica', especificacao: 'ATF Dexron III', norma: 'Dexron III', capacidade: '1,0 L', intervalo: 'Inspeção 10.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Coolant OAT 50/50', norma: 'Aditivo orgânico', capacidade: '6,5 L', intervalo: '60.000 km' }
    ],
    filtros: {
      oleo: { original: '24588463', tecfil: 'PSL619', mann: 'W 712/22', mahle: 'OC90', wega: 'WO-150', fram: 'PH10907' },
      ar: { original: '98550812', tecfil: 'ARL8829', mann: 'C 29 030', mahle: 'LX3547', wega: 'FAP-9267', fram: 'CA10330' },
      combustivel: { original: '93316245', tecfil: 'GI04/7', mann: 'WK 58/3', mahle: 'KL582', wega: 'FCI-1660', fram: 'G1041' },
      cabine: { original: '94747799', tecfil: 'ACP309', mann: 'CU 2433', mahle: 'LA 90', wega: 'AKX-1999', fram: 'CF11175' }
    }
  },
  'Chevrolet Agile': {
    sistemas: [
      { sistema: 'Motor', especificacao: 'SAE 5W-30', norma: 'dexos1', capacidade: '3,5 L', intervalo: '10.000 km' },
      { sistema: 'Câmbio Manual', especificacao: 'SAE 75W-85', norma: 'API GL-4', capacidade: '1,6 L', intervalo: '60.000 km' },
      { sistema: 'Direção Hidráulica', especificacao: 'ATF Dexron III', norma: 'Dexron III', capacidade: '0,9 L', intervalo: 'Inspeção 10.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Coolant OAT 50/50', norma: 'Aditivo orgânico', capacidade: '5,5 L', intervalo: '60.000 km' }
    ],
    filtros: {
      oleo: { original: '93742512', tecfil: 'PSL55', mann: 'W 712/22', mahle: 'OC90', wega: 'WO-120', fram: 'PH5949' },
      ar: { original: '93396172', tecfil: 'ARL4103', mann: 'C 23 015', mahle: 'LX3026', wega: 'FAP-9003', fram: 'CA10015' },
      combustivel: { original: '93297745', tecfil: 'GI04/7', mann: 'WK 58/3', mahle: 'KL582', wega: 'FCI-1630', fram: 'G1025' },
      cabine: { original: '93396173', tecfil: 'ACP308', mann: 'CU 2433', mahle: 'LA 90', wega: 'AKX-3510', fram: 'CF11175' }
    }
  },
  'Chevrolet Montana': {
    sistemas: [
      { sistema: 'Motor', especificacao: 'SAE 5W-30', norma: 'dexos1', capacidade: '3,5 L', intervalo: '10.000 km' },
      { sistema: 'Câmbio Manual', especificacao: 'SAE 75W-85', norma: 'API GL-4', capacidade: '1,6 L', intervalo: '60.000 km' },
      { sistema: 'Direção Hidráulica', especificacao: 'ATF Dexron III', norma: 'Dexron III', capacidade: '0,9 L', intervalo: 'Inspeção 10.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Coolant OAT 50/50', norma: 'Aditivo orgânico', capacidade: '5,4 L', intervalo: '60.000 km' }
    ],
    filtros: {
      oleo: { original: '93742512', tecfil: 'PSL55', mann: 'W 712/22', mahle: 'OC90', wega: 'WO-120', fram: 'PH5949' },
      ar: { original: '93396172', tecfil: 'ARL4103', mann: 'C 23 015', mahle: 'LX3026', wega: 'FAP-9003', fram: 'CA10015' },
      combustivel: { original: '93297745', tecfil: 'GI04/7', mann: 'WK 58/3', mahle: 'KL582', wega: 'FCI-1630', fram: 'G1025' },
      cabine: { original: '93396173', tecfil: 'ACP308', mann: 'CU 2433', mahle: 'LA 90', wega: 'AKX-3510', fram: 'CF11175' }
    }
  },
  'Fiat Palio 1.4': {
    sistemas: [
      { sistema: 'Motor', especificacao: 'SAE 5W-30 (API SP)', norma: 'API SP', capacidade: '2,7 L', intervalo: '10.000 km' },
      { sistema: 'Câmbio Manual', especificacao: 'SAE 75W-85', norma: 'API GL-4', capacidade: '2,0 L', intervalo: '60.000 km' },
      { sistema: 'Direção Hidráulica', especificacao: 'ATF Dexron II D', norma: 'Dexron II D', capacidade: '0,7 L', intervalo: 'Inspeção 10.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Coolant OAT 50/50', norma: 'Aditivo orgânico', capacidade: '5,0 L', intervalo: '60.000 km' }
    ],
    filtros: {
      oleo: { original: '7085786', tecfil: 'PSL55', mann: 'W 713/16', mahle: 'OC506', wega: 'WO-130', fram: 'CH9642' },
      ar: { original: '51775324', tecfil: 'ARL4150', mann: 'C 2585', mahle: 'LX1791', wega: 'FAP-4022', fram: 'CA9566' },
      combustivel: { original: '51778945', tecfil: 'GI04/7', mann: 'WK 58', mahle: 'KL582', wega: 'FCI-1660', fram: 'G9193' },
      cabine: { original: '7088921', tecfil: 'ACP304', mann: 'CU 2629/1', mahle: 'LA 67', wega: 'AKX-3520', fram: 'CF9481' }
    }
  },
  'Fiat Doblo 1.8': {
    sistemas: [
      { sistema: 'Motor', especificacao: 'SAE 5W-30 (API SP)', norma: 'API SP', capacidade: '4,5 L', intervalo: '10.000 km' },
      { sistema: 'Câmbio Manual', especificacao: 'SAE 75W-85', norma: 'API GL-4', capacidade: '2,1 L', intervalo: '60.000 km' },
      { sistema: 'Direção Hidráulica', especificacao: 'ATF Dexron II D', norma: 'Dexron II D', capacidade: '1,0 L', intervalo: 'Inspeção 10.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Coolant OAT 50/50', norma: 'Aditivo orgânico', capacidade: '6,0 L', intervalo: '60.000 km' }
    ],
    filtros: {
      oleo: { original: '7085786', tecfil: 'PSL619', mann: 'W 713/16', mahle: 'OC506', wega: 'WO-130', fram: 'CH9642' },
      ar: { original: '51794712', tecfil: 'ARL4148', mann: 'C 2585', mahle: 'LX1791', wega: 'FAP-4025', fram: 'CA10222' },
      combustivel: { original: '51778945', tecfil: 'GI04/7', mann: 'WK 58', mahle: 'KL582', wega: 'FCI-1660', fram: 'G9193' },
      cabine: { original: '46723321', tecfil: 'ACP302', mann: 'CU 2629/1', mahle: 'LA 67', wega: 'AKX-1100', fram: 'CF1028' }
    }
  },
  'Fiat Doblo 1.4': {
    sistemas: [
      { sistema: 'Motor', especificacao: 'SAE 5W-30 (API SP)', norma: 'API SP', capacidade: '2,7 L', intervalo: '10.000 km' },
      { sistema: 'Câmbio Manual', especificacao: 'SAE 75W-85', norma: 'API GL-4', capacidade: '2,0 L', intervalo: '60.000 km' },
      { sistema: 'Direção Hidráulica', especificacao: 'ATF Dexron II D', norma: 'Dexron II D', capacidade: '1,0 L', intervalo: 'Inspeção 10.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Coolant OAT 50/50', norma: 'Aditivo orgânico', capacidade: '5,5 L', intervalo: '60.000 km' }
    ],
    filtros: {
      oleo: { original: '7085786', tecfil: 'PSL55', mann: 'W 713/16', mahle: 'OC506', wega: 'WO-130', fram: 'CH9642' },
      ar: { original: '51775324', tecfil: 'ARL4148', mann: 'C 2585', mahle: 'LX1791', wega: 'FAP-4022', fram: 'CA9566' },
      combustivel: { original: '51778945', tecfil: 'GI04/7', mann: 'WK 58', mahle: 'KL582', wega: 'FCI-1660', fram: 'G9193' },
      cabine: { original: '46723321', tecfil: 'ACP302', mann: 'CU 2629/1', mahle: 'LA 67', wega: 'AKX-1100', fram: 'CF1028' }
    }
  },
  'Fiat Strada 1.4': {
    sistemas: [
      { sistema: 'Motor', especificacao: 'SAE 5W-30 (API SP)', norma: 'API SP', capacidade: '2,7 L', intervalo: '10.000 km' },
      { sistema: 'Câmbio Manual', especificacao: 'SAE 75W-85', norma: 'API GL-4', capacidade: '2,0 L', intervalo: '60.000 km' },
      { sistema: 'Direção Hidráulica', especificacao: 'ATF Dexron II D', norma: 'Dexron II D', capacidade: '0,5 L', intervalo: 'Inspeção 10.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Coolant OAT 50/50', norma: 'Aditivo orgânico', capacidade: '5,5 L', intervalo: '60.000 km' }
    ],
    filtros: {
      oleo: { original: '7085786', tecfil: 'PSL55', mann: 'W 713/16', mahle: 'OC506', wega: 'WO-130', fram: 'CH9642' },
      ar: { original: '51775324', tecfil: 'ARL4150', mann: 'C 2585', mahle: 'LX1791', wega: 'FAP-4022', fram: 'CA9566' },
      combustivel: { original: '51778945', tecfil: 'GI04/7', mann: 'WK 58', mahle: 'KL582', wega: 'FCI-1660', fram: 'G9193' },
      cabine: { original: '7088921', tecfil: 'ACP304', mann: 'CU 2629/1', mahle: 'LA 67', wega: 'AKX-3520', fram: 'CF9481' }
    }
  },
  'Ford Fiesta 1.0': {
    sistemas: [
      { sistema: 'Motor', especificacao: 'SAE 5W-30', norma: 'API SN', capacidade: '4,1 L', intervalo: '10.000 km' },
      { sistema: 'Câmbio Manual', especificacao: 'SAE 75W-85', norma: 'API GL-4', capacidade: '2,3 L', intervalo: '60.000 km' },
      { sistema: 'Direção', especificacao: 'Elétrica (EPS) - Não requer fluido', norma: 'N/A', capacidade: 'N/A', intervalo: 'N/A' },
      { sistema: 'Arrefecimento', especificacao: 'Coolant OAT 50/50', norma: 'Aditivo orgânico', capacidade: '5,0 L', intervalo: '60.000 km' }
    ],
    filtros: {
      oleo: { original: 'XS6E6714B1A', tecfil: 'PSL55', mann: 'W 712/43', mahle: 'OC266', wega: 'WO-200', fram: 'PH2870' },
      ar: { original: '2S659601AA', tecfil: 'ARL4125', mann: 'C 4151', mahle: 'LX1597', wega: 'FAP-2830', fram: 'CA9926' },
      combustivel: { original: '2S659155AB', tecfil: 'GI04/7', mann: 'WK 612/7', mahle: 'KL476', wega: 'FCI-1630', fram: 'G1025' },
      cabine: { original: '2S6519N619AA', tecfil: 'ACP301', mann: 'CU 2433/1', mahle: 'LA 74', wega: 'AKX-1930', fram: 'CF11175' }
    }
  },
  'Ford Fiesta 1.6': {
    sistemas: [
      { sistema: 'Motor', especificacao: 'SAE 5W-30', norma: 'API SN', capacidade: '4,1 L', intervalo: '10.000 km' },
      { sistema: 'Câmbio Manual', especificacao: 'SAE 75W-85', norma: 'API GL-4', capacidade: '2,3 L', intervalo: '60.000 km' },
      { sistema: 'Direção', especificacao: 'Elétrica (EPS) - Não requer fluido', norma: 'N/A', capacidade: 'N/A', intervalo: 'N/A' },
      { sistema: 'Arrefecimento', especificacao: 'Coolant OAT 50/50', norma: 'Aditivo orgânico', capacidade: '5,0 L', intervalo: '60.000 km' }
    ],
    filtros: {
      oleo: { original: 'XS6E6714B1A', tecfil: 'PSL55', mann: 'W 712/43', mahle: 'OC266', wega: 'WO-200', fram: 'PH2870' },
      ar: { original: '2S659601AA', tecfil: 'ARL4125', mann: 'C 4151', mahle: 'LX1597', wega: 'FAP-2830', fram: 'CA9926' },
      combustivel: { original: '2S659155AB', tecfil: 'GI04/7', mann: 'WK 612/7', mahle: 'KL476', wega: 'FCI-1630', fram: 'G1025' },
      cabine: { original: '2S6519N619AA', tecfil: 'ACP301', mann: 'CU 2433/1', mahle: 'LA 74', wega: 'AKX-1930', fram: 'CF11175' }
    }
  },
  'Ford Focus 1.6': {
    sistemas: [
      { sistema: 'Motor', especificacao: 'SAE 5W-30', norma: 'API SN', capacidade: '4,1 L', intervalo: '10.000 km' },
      { sistema: 'Câmbio Manual', especificacao: 'SAE 75W-85', norma: 'API GL-4', capacidade: '2,3 L', intervalo: '60.000 km' },
      { sistema: 'Direção Hidráulica', especificacao: 'Fluido WSS-M2C204-A2', norma: 'WSS-M2C204-A2', capacidade: '1,0 L', intervalo: 'Inspeção 10.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Coolant OAT 50/50', norma: 'Aditivo orgânico', capacidade: '5,5 L', intervalo: '60.000 km' }
    ],
    filtros: {
      oleo: { original: 'XS6E6714B1A', tecfil: 'PSL55', mann: 'W 7015', mahle: 'OC266', wega: 'WO-200', fram: 'PH2870' },
      ar: { original: '3M559601AA', tecfil: 'ARL4130', mann: 'C 16 134/2', mahle: 'LX869', wega: 'FAP-2830', fram: 'CA9926' },
      combustivel: { original: '2S659155AB', tecfil: 'GI04/7', mann: 'WK 613/4', mahle: 'KL476', wega: 'FCI-1630', fram: 'G1025' },
      cabine: { original: '3M5519N619AB', tecfil: 'ACP309', mann: 'CU 2440', mahle: 'LA 74', wega: 'AKX-1110', fram: 'CF10729' }
    }
  },
  'Ford Focus 2.0': {
    sistemas: [
      { sistema: 'Motor', especificacao: 'SAE 5W-30', norma: 'API SN', capacidade: '4,3 L', intervalo: '10.000 km' },
      { sistema: 'Câmbio Manual', especificacao: 'SAE 75W-85', norma: 'API GL-4', capacidade: '2,1 L', intervalo: '60.000 km' },
      { sistema: 'Direção Hidráulica', especificacao: 'Fluido WSS-M2C204-A2', norma: 'WSS-M2C204-A2', capacidade: '1,0 L', intervalo: 'Inspeção 10.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Coolant OAT 50/50', norma: 'Aditivo orgânico', capacidade: '5,5 L', intervalo: '60.000 km' }
    ],
    filtros: {
      oleo: { original: 'XS6E6714B1A', tecfil: 'PSL55', mann: 'W 7015', mahle: 'OC266', wega: 'WO-200', fram: 'PH2870' },
      ar: { original: '3M559601AA', tecfil: 'ARL4130', mann: 'C 16 134/2', mahle: 'LX869', wega: 'FAP-2830', fram: 'CA9926' },
      combustivel: { original: '2S659155AB', tecfil: 'GI04/7', mann: 'WK 512/1', mahle: 'KL476', wega: 'FCI-1630', fram: 'G1025' },
      cabine: { original: '3M5519N619AB', tecfil: 'ACP309', mann: 'CU 2440', mahle: 'LA 74', wega: 'AKX-1110', fram: 'CF10729' }
    }
  },
  'Nissan Sentra': {
    sistemas: [
      { sistema: 'Motor', especificacao: 'SAE 5W-30', norma: 'API SN', capacidade: '4,4 L', intervalo: '10.000 km' },
      { sistema: 'Câmbio CVT', especificacao: 'NS-3 Fluid', norma: 'NS-3', capacidade: '7,5 L', intervalo: '40.000 km' },
      { sistema: 'Direção', especificacao: 'Elétrica (EPS)', norma: 'N/A', capacidade: 'N/A', intervalo: 'N/A' },
      { sistema: 'Arrefecimento', especificacao: 'Coolant OAT 50/50', norma: 'Aditivo orgânico', capacidade: '6,5 L', intervalo: '60.000 km' }
    ],
    filtros: {
      oleo: { original: '1520865F0A', tecfil: 'PSL158', mann: 'W 67/3', mahle: 'OC1052', wega: 'WO-150', fram: 'PH4967' },
      ar: { original: '16546ED000', tecfil: 'ARL1655', mann: 'C 2329', mahle: 'LX1983', wega: 'FAP-9030', fram: 'CA10226' },
      combustivel: { original: 'Tanque', tecfil: '-', mann: 'WK 58/3', mahle: 'KL583', wega: '-', fram: '-' },
      cabine: { original: '27277EN000', tecfil: 'ACP310', mann: 'CU 22 011', mahle: 'LA 452', wega: 'AKX-3512', fram: 'CF10786' }
    }
  },
  'Nissan Versa 1.6': {
    sistemas: [
      { sistema: 'Motor', especificacao: 'SAE 5W-30', norma: 'API SN', capacidade: '4,0 L', intervalo: '10.000 km' },
      { sistema: 'Câmbio CVT', especificacao: 'NS-3 Fluid', norma: 'NS-3', capacidade: '6,9 L', intervalo: '60.000 km' },
      { sistema: 'Direção', especificacao: 'Elétrica (EPS)', norma: 'N/A', capacidade: 'N/A', intervalo: 'N/A' },
      { sistema: 'Arrefecimento', especificacao: 'Coolant OAT 50/50', norma: 'Aditivo orgânico', capacidade: '6,0 L', intervalo: '60.000 km' }
    ],
    filtros: {
      oleo: { original: '1520865F0A', tecfil: 'PSL158', mann: 'W 66/1', mahle: 'OC1052', wega: 'WO-150', fram: 'PH4967' },
      ar: { original: '165461KA0A', tecfil: 'ARL1656', mann: 'C 2329', mahle: 'LX3549', wega: 'FAP-9030', fram: 'CA11123' },
      combustivel: { original: 'Tanque', tecfil: '-', mann: 'WK 58/3', mahle: 'KL583', wega: '-', fram: '-' },
      cabine: { original: '272771KA0A', tecfil: 'ACP312', mann: 'CU 22 011', mahle: 'LA 452', wega: 'AKX-3512', fram: 'CF11784' }
    }
  },
  'Peugeot 408 1.6 THP': {
    sistemas: [
      { sistema: 'Motor', especificacao: 'SAE 5W-30 (PSA B71 2290)', norma: 'PSA B71 2290', capacidade: '4,25 L', intervalo: '10.000 km' },
      { sistema: 'Câmbio Automático', especificacao: 'ATF AW-1', norma: 'AW-1', capacidade: '7,0 L', intervalo: '60.000 km' },
      { sistema: 'Direção Hidráulica', especificacao: 'Fluido LDS', norma: 'PSA S71 2710', capacidade: '1,0 L', intervalo: 'Inspeção 10.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Coolant OAT 50/50', norma: 'Aditivo orgânico', capacidade: '6,0 L', intervalo: '60.000 km' }
    ],
    filtros: {
      oleo: { original: '1109AY', tecfil: 'PEL674', mann: 'HU 711/51 x', mahle: 'OX339/2D', wega: 'WOE-710', fram: 'CH9641' },
      ar: { original: '1444RJ', tecfil: 'ARL5047', mann: 'C 42 010', mahle: 'LX2681', wega: 'FAP-9295', fram: 'CA11050' },
      combustivel: { original: '156794', tecfil: 'GI50/7', mann: 'WK 58/3', mahle: 'KL583', wega: 'FCI-1630', fram: 'G1030' },
      cabine: { original: '6447XF', tecfil: 'ACP305', mann: 'CU 2940', mahle: 'LA 56', wega: 'AKX-1991', fram: 'CF10549' }
    }
  },
  'Renault Logan - Sandero': {
    sistemas: [
      { sistema: 'Motor', especificacao: 'SAE 5W-40 ou 10W-40', norma: 'API SL', capacidade: '4,8 L', intervalo: '10.000 km' },
      { sistema: 'Câmbio Manual', especificacao: 'SAE 75W-80', norma: 'API GL-4', capacidade: '2,5 L', intervalo: '60.000 km' },
      { sistema: 'Direção Hidráulica', especificacao: 'ATF Dexron III', norma: 'Dexron III', capacidade: '1,0 L', intervalo: 'Inspeção 10.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Coolant OAT 50/50', norma: 'Aditivo orgânico', capacidade: '5,0 L', intervalo: '60.000 km' }
    ],
    filtros: {
      oleo: { original: '8200768913', tecfil: 'PSL51', mann: 'W 75/2', mahle: 'OC467', wega: 'WO-120', fram: 'PH5796' },
      ar: { original: '165467674R', tecfil: 'ARL9010', mann: 'C 27 030', mahle: 'LX1066', wega: 'FAP-9010', fram: 'CA11036' },
      combustivel: { original: '6001548810', tecfil: 'GI04/7', mann: 'WK 58/3', mahle: 'KL583', wega: 'FCI-1630', fram: 'G1025' },
      cabine: { original: '272773229R', tecfil: 'ACP928', mann: 'CU 22 019/2', mahle: 'LA 182', wega: 'AKX-1120', fram: 'CF10366' }
    }
  },
  'VW Kombi 1.4': {
    sistemas: [
      { sistema: 'Motor', especificacao: 'SAE 15W-40 ou 5W-40', norma: 'VW 502 00', capacidade: '3,3 L', intervalo: '10.000 km' },
      { sistema: 'Câmbio Manual', especificacao: 'Transaxle', norma: 'API GL-4', capacidade: '3,0 L', intervalo: '40.000 km' },
      { sistema: 'Direção Hidráulica', especificacao: 'VW G004000M2', norma: 'VW TL 52146', capacidade: '1,0 L', intervalo: 'Inspeção 10.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Coolant OAT 50/50', norma: 'Aditivo orgânico', capacidade: '5,5 L', intervalo: '60.000 km' }
    ],
    filtros: {
      oleo: { original: '030115561AN', tecfil: 'PSL55', mann: 'W 712/22', mahle: 'OC250', wega: 'WO-100', fram: 'PH5949' },
      ar: { original: '0231296201', tecfil: 'ARL3280', mann: 'C 12 822', mahle: 'LX1594', wega: 'FAP-3280', fram: 'CA8286' },
      combustivel: { original: '6QE201511', tecfil: 'GI04/7', mann: 'WK 58/3', mahle: 'KL582', wega: 'FCI-1630', fram: 'G1025' },
      cabine: { original: 'Não possui', tecfil: '-', mann: '-', mahle: '-', wega: '-', fram: '-' }
    }
  },
  'VW Gol 1.6 G5': {
    sistemas: [
      { sistema: 'Motor', especificacao: 'SAE 5W-40', norma: 'VW 502 00', capacidade: '3,6 L', intervalo: '10.000 km' },
      { sistema: 'Câmbio Manual', especificacao: 'SAE 75W-80', norma: 'API GL-4', capacidade: '2,0 L', intervalo: '60.000 km' },
      { sistema: 'Direção Hidráulica', especificacao: 'VW G004000M2', norma: 'VW TL 52146', capacidade: '1,0 L', intervalo: 'Inspeção 10.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Coolant OAT 50/50', norma: 'Aditivo orgânico', capacidade: '5,0 L', intervalo: '60.000 km' }
    ],
    filtros: {
      oleo: { original: '030115561AN', tecfil: 'PSL560', mann: 'W 712/53', mahle: 'OC250', wega: 'WO-100', fram: 'PH5949' },
      ar: { original: '032129620C', tecfil: 'ARL3280', mann: 'C 2295/2', mahle: 'LX1592', wega: 'FAP-3280', fram: 'CA8286' },
      combustivel: { original: '6QE201511', tecfil: 'GI50/7', mann: 'WK 58/3', mahle: 'KL583', wega: 'FCI-1630', fram: 'G1025' },
      cabine: { original: '5U0819653', tecfil: 'ACP309', mann: 'CU 3162', mahle: 'LA 74', wega: 'AKX-1122', fram: 'CF11175' }
    }
  },
  'VW Gol 1.6 G6': {
    sistemas: [
      { sistema: 'Motor', especificacao: 'SAE 5W-40', norma: 'VW 502 00', capacidade: '3,6 L', intervalo: '10.000 km' },
      { sistema: 'Câmbio Manual', especificacao: 'SAE 75W-80', norma: 'API GL-4', capacidade: '2,0 L', intervalo: '60.000 km' },
      { sistema: 'Direção Hidráulica', especificacao: 'VW G004000M2', norma: 'VW TL 52146', capacidade: '1,0 L', intervalo: 'Inspeção 10.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Coolant OAT 50/50', norma: 'Aditivo orgânico', capacidade: '5,0 L', intervalo: '60.000 km' }
    ],
    filtros: {
      oleo: { original: '030115561AN', tecfil: 'PSL560', mann: 'W 712/53', mahle: 'OC250', wega: 'WO-100', fram: 'PH5949' },
      ar: { original: '032129620C', tecfil: 'ARL3280', mann: 'C 2295/2', mahle: 'LX1592', wega: 'FAP-3280', fram: 'CA8286' },
      combustivel: { original: '6QE201511', tecfil: 'GI50/7', mann: 'WK 58/3', mahle: 'KL583', wega: 'FCI-1630', fram: 'G1025' },
      cabine: { original: '5U0819653', tecfil: 'ACP309', mann: 'CU 3162', mahle: 'LA 74', wega: 'AKX-1122', fram: 'CF11175' }
    }
  },

  // ==================== VEÍCULOS UTILITÁRIOS ====================
  'Agrale Marruá - AM21': {
    sistemas: [
      { sistema: 'Motor (MWM Sprint)', especificacao: 'SAE 15W-40', norma: 'API CI-4', capacidade: '5,5 L', intervalo: '10.000 km' },
      { sistema: 'Câmbio Manual', especificacao: 'SAE 50', norma: 'API GL-4', capacidade: '3,2 L', intervalo: '40.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 85W-140', norma: 'API GL-5', capacidade: '2,5 L', intervalo: '40.000 km' },
      { sistema: 'Direção Hidráulica', especificacao: 'ATF Dexron II', norma: 'Dexron II', capacidade: '1,0 L', intervalo: 'Inspeção 10.000 km' }
    ],
    filtros: {
      oleo: { original: '905700200021', tecfil: 'PEL106', mann: 'W 940/34', mahle: 'OC311', wega: 'WOE-610', fram: 'CH9642' },
      ar: { original: '600700400012', tecfil: 'AR8480', mann: 'C 24 150', mahle: 'LX964', wega: 'FAP-4001', fram: 'CA8558' },
      combustivel: { original: '600700500010', tecfil: 'PCD33', mann: 'WK 842/2', mahle: 'KC119', wega: 'FCI-1620', fram: 'P4156' },
      cabine: { original: 'Personalizado', tecfil: 'ACP301', mann: 'CU 2842', mahle: 'LA 134', wega: 'AKX-1120', fram: 'CF1028' }
    }
  },
  'Agrale Marruá - AM20': {
    sistemas: [
      { sistema: 'Motor', especificacao: 'SAE 15W-40', norma: 'API CI-4', capacidade: '5,5 L', intervalo: '10.000 km' },
      { sistema: 'Câmbio Manual', especificacao: 'SAE 50', norma: 'API GL-4', capacidade: '3,2 L', intervalo: '40.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 85W-140', norma: 'API GL-5', capacidade: '2,5 L', intervalo: '40.000 km' },
      { sistema: 'Direção Hidráulica', especificacao: 'ATF Dexron II', norma: 'Dexron II', capacidade: '1,0 L', intervalo: 'Inspeção 10.000 km' }
    ],
    filtros: {
      oleo: { original: '905700200021', tecfil: 'PEL106', mann: 'W 940/34', mahle: 'OC311', wega: 'WOE-610', fram: 'CH9642' },
      ar: { original: '600700400012', tecfil: 'AR8480', mann: 'C 24 150', mahle: 'LX964', wega: 'FAP-4001', fram: 'CA8558' },
      combustivel: { original: '600700500010', tecfil: 'PCD33', mann: 'WK 842/2', mahle: 'KC119', wega: 'FCI-1620', fram: 'P4156' },
      cabine: { original: '-', tecfil: '-', mann: '-', mahle: '-', wega: '-', fram: '-' }
    }
  },
  'Agrale Marruá - AM22': {
    sistemas: [
      { sistema: 'Motor', especificacao: 'SAE 15W-40', norma: 'API CI-4', capacidade: '5,5 L', intervalo: '10.000 km' },
      { sistema: 'Câmbio Manual', especificacao: 'SAE 50', norma: 'API GL-4', capacidade: '3,2 L', intervalo: '40.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 85W-140', norma: 'API GL-5', capacidade: '2,5 L', intervalo: '40.000 km' },
      { sistema: 'Direção Hidráulica', especificacao: 'ATF Dexron II', norma: 'Dexron II', capacidade: '1,0 L', intervalo: 'Inspeção 10.000 km' }
    ],
    filtros: {
      oleo: { original: '905700200021', tecfil: 'PEL106', mann: 'W 940/34', mahle: 'OC311', wega: 'WOE-610', fram: 'CH9642' },
      ar: { original: '600700400012', tecfil: 'AR8480', mann: 'C 24 150', mahle: 'LX964', wega: 'FAP-4001', fram: 'CA8558' },
      combustivel: { original: '600700500010', tecfil: 'PCD33', mann: 'WK 842/2', mahle: 'KC119', wega: 'FCI-1620', fram: 'P4156' },
      cabine: { original: '-', tecfil: '-', mann: '-', mahle: '-', wega: '-', fram: '-' }
    }
  },
  'Agrale Marruá - AM25': {
    sistemas: [
      { sistema: 'Motor', especificacao: 'SAE 15W-40', norma: 'API CI-4', capacidade: '8,5 L', intervalo: '10.000 km' },
      { sistema: 'Câmbio Manual', especificacao: 'SAE 50', norma: 'API GL-4', capacidade: '3,2 L', intervalo: '40.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 85W-140', norma: 'API GL-5', capacidade: '3,0 L', intervalo: '40.000 km' },
      { sistema: 'Direção Hidráulica', especificacao: 'ATF Dexron II', norma: 'Dexron II', capacidade: '1,0 L', intervalo: 'Inspeção 10.000 km' }
    ],
    filtros: {
      oleo: { original: '905700200021', tecfil: 'PEL106', mann: 'W 940/34', mahle: 'OC311', wega: 'WOE-610', fram: 'CH9642' },
      ar: { original: '600700400012', tecfil: 'AR8480', mann: 'C 24 150', mahle: 'LX964', wega: 'FAP-4001', fram: 'CA8558' },
      combustivel: { original: '600700500010', tecfil: 'PCD33', mann: 'WK 842/2', mahle: 'KC119', wega: 'FCI-1620', fram: 'P4156' },
      cabine: { original: '-', tecfil: '-', mann: '-', mahle: '-', wega: '-', fram: '-' }
    }
  },
  'Ford F-250 e F-350': {
    sistemas: [
      { sistema: 'Motor (Cummins)', especificacao: 'SAE 15W-40', norma: 'API CI-4', capacidade: '10,0 L', intervalo: '10.000 km' },
      { sistema: 'Câmbio Manual', especificacao: 'SAE 50', norma: 'API GL-4', capacidade: '4,5 L', intervalo: '40.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 85W-140', norma: 'API GL-5', capacidade: '4,0 L', intervalo: '40.000 km' },
      { sistema: 'Direção Hidráulica', especificacao: 'ATF Mercon', norma: 'Mercon', capacidade: '1,0 L', intervalo: 'Inspeção 10.000 km' }
    ],
    filtros: {
      oleo: { original: 'F4TZ6731B', tecfil: 'PSL341', mann: 'W 950/26', mahle: 'OC413', wega: 'WO-210', fram: 'PH8A' },
      ar: { original: 'BC3Z9601A', tecfil: 'ARL8480', mann: 'C 32 170', mahle: 'LX1054', wega: 'FAP-2830', fram: 'CA10427' },
      combustivel: { original: 'F81Z9N184AA', tecfil: 'PSD980', mann: 'WK 1060 x', mahle: 'KC18', wega: 'FCI-1620', fram: 'PS10038' },
      cabine: { original: '-', tecfil: '-', mann: '-', mahle: '-', wega: '-', fram: '-' }
    }
  },
  'Ford Ranger Power Stroke': {
    sistemas: [
      { sistema: 'Motor (International)', especificacao: 'SAE 15W-40', norma: 'API CI-4', capacidade: '8,2 L', intervalo: '10.000 km' },
      { sistema: 'Câmbio Manual', especificacao: 'SAE 75W-90', norma: 'API GL-4', capacidade: '2,8 L', intervalo: '40.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 80W-90', norma: 'API GL-5', capacidade: '3,4 L', intervalo: '40.000 km' },
      { sistema: 'Direção Hidráulica', especificacao: 'ATF Mercon', norma: 'Mercon', capacidade: '1,0 L', intervalo: 'Inspeção 10.000 km' }
    ],
    filtros: {
      oleo: { original: 'BG2X6714AA', tecfil: 'PSL55', mann: 'W 940/25', mahle: 'OC23', wega: 'WO-200', fram: 'PH2870' },
      ar: { original: 'WL5113Z40', tecfil: 'ARL4125', mann: 'C 28 132', mahle: 'LX1596', wega: 'FAP-2830', fram: 'CA8286' },
      combustivel: { original: 'WL5113ZA5', tecfil: 'PSD470', mann: 'WK 816 x', mahle: 'KC119', wega: 'FCI-1630', fram: 'PS926' },
      cabine: { original: '-', tecfil: '-', mann: '-', mahle: '-', wega: '-', fram: '-' }
    }
  },
  'Ford Ranger 3.0 NGD': {
    sistemas: [
      { sistema: 'Motor (MWM)', especificacao: 'SAE 15W-40', norma: 'API CI-4', capacidade: '8,5 L', intervalo: '10.000 km' },
      { sistema: 'Câmbio Manual', especificacao: 'SAE 75W-90', norma: 'API GL-4', capacidade: '3,0 L', intervalo: '40.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 85W-140', norma: 'API GL-5', capacidade: '2,6 L', intervalo: '40.000 km' },
      { sistema: 'Direção Hidráulica', especificacao: 'ATF Mercon', norma: 'Mercon', capacidade: '1,0 L', intervalo: 'Inspeção 10.000 km' }
    ],
    filtros: {
      oleo: { original: 'BG2X6714AA', tecfil: 'PSL55', mann: 'W 940/25', mahle: 'OC413', wega: 'WO-200', fram: 'PH2870' },
      ar: { original: 'BG2X9601AA', tecfil: 'ARL4130', mann: 'C 28 132', mahle: 'LX1596', wega: 'FAP-2830', fram: 'CA8286' },
      combustivel: { original: 'BG2X9155AA', tecfil: 'PSD980', mann: 'WK 816 x', mahle: 'KC249', wega: 'FCI-1620', fram: 'PS926' },
      cabine: { original: '-', tecfil: '-', mann: '-', mahle: '-', wega: '-', fram: '-' }
    }
  },
  'Ford Ranger 2.2': {
    sistemas: [
      { sistema: 'Motor (Duratorq)', especificacao: 'SAE 5W-30', norma: 'API SN', capacidade: '9,5 L', intervalo: '10.000 km' },
      { sistema: 'Câmbio Manual', especificacao: 'SAE 75W-90', norma: 'API GL-4', capacidade: '2,8 L', intervalo: '40.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 80W-90', norma: 'API GL-5', capacidade: '2,9 L', intervalo: '40.000 km' },
      { sistema: 'Direção Hidráulica', especificacao: 'ATF Dexron III', norma: 'Dexron III', capacidade: '1,0 L', intervalo: 'Inspeção 10.000 km' }
    ],
    filtros: {
      oleo: { original: 'U2Y014302', tecfil: 'PEL106', mann: 'HU 7002 z', mahle: 'OX339/2D', wega: 'WOE-215', fram: 'CH10656' },
      ar: { original: 'AB399601AB', tecfil: 'ARL8480', mann: 'C 22 024', mahle: 'LX3511', wega: 'FAP-9006', fram: 'CA11250' },
      combustivel: { original: 'AB399155AD', tecfil: 'PSD980', mann: 'PU 9008 z', mahle: 'KX338/26D', wega: 'FCD-0796', fram: 'PS10038' },
      cabine: { original: 'AB3919N619AA', tecfil: 'ACP309', mann: 'CU 24 006', mahle: 'LA 250', wega: 'AKX-1999', fram: 'CF10729' }
    }
  },
  'Ford Transit': {
    sistemas: [
      { sistema: 'Motor (Duratorq)', especificacao: 'SAE 5W-30', norma: 'WSS-M2C913-D', capacidade: '10,0 L', intervalo: '15.000 km' },
      { sistema: 'Câmbio Manual', especificacao: 'SAE 75W-90', norma: 'API GL-4', capacidade: '2,8 L', intervalo: '50.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 80W-90', norma: 'API GL-5', capacidade: '2,2 L', intervalo: '50.000 km' },
      { sistema: 'Direção Hidráulica', especificacao: 'Fluido WSS-M2C204-A2', norma: 'WSS-M2C204-A2', capacidade: '1,0 L', intervalo: 'Inspeção 10.000 km' }
    ],
    filtros: {
      oleo: { original: 'CC1Q6714AA', tecfil: 'PEL106', mann: 'HU 711/51 x', mahle: 'OX193D', wega: 'WOE-610', fram: 'CH9642' },
      ar: { original: 'CC1Z9601A', tecfil: 'ARL8480', mann: 'C 32 170', mahle: 'LX935', wega: 'FAP-2830', fram: 'CA11250' },
      combustivel: { original: 'CC1Q9155AA', tecfil: 'PSD980', mann: 'WK 1060 x', mahle: 'KC204', wega: 'FCI-1620', fram: 'PS10038' },
      cabine: { original: '-', tecfil: '-', mann: '-', mahle: '-', wega: '-', fram: '-' }
    }
  },
  'Mitsubishi L200 2.5': {
    sistemas: [
      { sistema: 'Motor (4D56)', especificacao: 'SAE 15W-40', norma: 'API CI-4', capacidade: '7,0 L', intervalo: '10.000 km' },
      { sistema: 'Câmbio Manual', especificacao: 'SAE 75W-90', norma: 'API GL-4', capacidade: '2,2 L', intervalo: '40.000 km' },
      { sistema: 'Diferencial (LSD)', especificacao: 'SAE 80W-90', norma: 'API GL-5', capacidade: '2,6 L', intervalo: '40.000 km' },
      { sistema: 'Direção Hidráulica', especificacao: 'ATF Dexron III', norma: 'Dexron III', capacidade: '1,0 L', intervalo: 'Inspeção 10.000 km' }
    ],
    filtros: {
      oleo: { original: 'MD360935', tecfil: 'PSL55', mann: 'W 811/80', mahle: 'OC274', wega: 'WO-100', fram: 'PH2870' },
      ar: { original: 'MR529773', tecfil: 'ARL4122', mann: 'C 15 300', mahle: 'LX964', wega: 'FAP-4030', fram: 'CA8286' },
      combustivel: { original: 'MB220900', tecfil: 'PSD980', mann: 'W 9069', mahle: 'KC119', wega: 'FCI-1620', fram: 'PS926' },
      cabine: { original: '-', tecfil: '-', mann: '-', mahle: '-', wega: '-', fram: '-' }
    }
  },
  'Mitsubishi Triton 3.2': {
    sistemas: [
      { sistema: 'Motor (4M41)', especificacao: 'SAE 15W-40', norma: 'API CI-4', capacidade: '9,3 L', intervalo: '10.000 km' },
      { sistema: 'Câmbio Automático', especificacao: 'ATF SP-III', norma: 'SP-III', capacidade: '8,5 L', intervalo: '40.000 km' },
      { sistema: 'Diferencial (LSD)', especificacao: 'SAE 80W-90', norma: 'API GL-5', capacidade: '2,3 L', intervalo: '40.000 km' },
      { sistema: 'Direção Hidráulica', especificacao: 'ATF SP-III', norma: 'SP-III', capacidade: '1,0 L', intervalo: 'Inspeção 10.000 km' }
    ],
    filtros: {
      oleo: { original: '1230A186', tecfil: 'PEL106', mann: 'C 24 011', mahle: 'OC274', wega: 'WOE-610', fram: 'CH9642' },
      ar: { original: '1500A023', tecfil: 'ARL8480', mann: 'C 15 300', mahle: 'LX2616', wega: 'FAP-4030', fram: 'CA10427' },
      combustivel: { original: '1770A107', tecfil: 'PSD980', mann: 'W 9069', mahle: 'KX265D', wega: 'FCI-1620', fram: 'PS10038' },
      cabine: { original: '-', tecfil: '-', mann: '-', mahle: '-', wega: '-', fram: '-' }
    }
  },
  'Mitsubishi Triton 2.4': {
    sistemas: [
      { sistema: 'Motor (4N15)', especificacao: 'SAE 5W-30', norma: 'API SN', capacidade: '8,4 L', intervalo: '10.000 km' },
      { sistema: 'Câmbio Automático', especificacao: 'ATF SP-III', norma: 'SP-III', capacidade: '8,0 L', intervalo: '40.000 km' },
      { sistema: 'Diferencial (LSD)', especificacao: 'SAE 80W-90', norma: 'API GL-5', capacidade: '2,3 L', intervalo: '40.000 km' },
      { sistema: 'Direção Hidráulica', especificacao: 'ATF SP-III', norma: 'SP-III', capacidade: '1,0 L', intervalo: 'Inspeção 10.000 km' }
    ],
    filtros: {
      oleo: { original: '1230A186', tecfil: 'PEL106', mann: 'C 24 011', mahle: 'OC1183', wega: 'WOE-610', fram: 'CH9642' },
      ar: { original: '1500A593', tecfil: 'ARL8480', mann: 'C 15 300', mahle: 'LX2616', wega: 'FAP-4030', fram: 'CA10427' },
      combustivel: { original: '1770A225', tecfil: 'PSD980', mann: 'W 9069', mahle: 'KX495D', wega: 'FCI-1620', fram: 'PS10038' },
      cabine: { original: '-', tecfil: '-', mann: '-', mahle: '-', wega: '-', fram: '-' }
    }
  },
  'Nissan Frontier 2.5': {
    sistemas: [
      { sistema: 'Motor (YD25)', especificacao: 'SAE 15W-40', norma: 'API CI-4', capacidade: '6,9 L', intervalo: '10.000 km' },
      { sistema: 'Câmbio Manual', especificacao: 'SAE 75W-85', norma: 'API GL-4', capacidade: '3,8 L', intervalo: '40.000 km' },
      { sistema: 'Diferencial (LSD)', especificacao: 'SAE 80W-90', norma: 'API GL-5', capacidade: '2,0 L', intervalo: '40.000 km' },
      { sistema: 'Direção Hidráulica', especificacao: 'ATF Dexron III', norma: 'Dexron III', capacidade: '1,0 L', intervalo: 'Inspeção 10.000 km' }
    ],
    filtros: {
      oleo: { original: '15208BN30A', tecfil: 'PSL158', mann: 'HU 6011 z', mahle: 'OC217/6', wega: 'JFO0104', fram: 'PH4967' },
      ar: { original: '16546EB300', tecfil: 'ARL1655', mann: 'C 21 001', mahle: 'LX1995', wega: 'JFA0137', fram: 'CA10427' },
      combustivel: { original: '16400EB30A', tecfil: 'PSC993', mann: 'PU 9009 z KIT', mahle: 'KC236', wega: 'JFC105', fram: 'PS10038' },
      cabine: { original: '-', tecfil: '-', mann: 'CU 10 010-2', mahle: '-', wega: '-', fram: '-' }
    }
  },
  'Nissan Frontier 2.3': {
    sistemas: [
      { sistema: 'Motor (YS23)', especificacao: 'SAE 5W-30', norma: 'API SN', capacidade: '7,4 L', intervalo: '10.000 km' },
      { sistema: 'Câmbio Manual', especificacao: 'SAE 75W-80', norma: 'API GL-4', capacidade: '2,2 L', intervalo: '40.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 75W-90', norma: 'API GL-5', capacidade: '2,1 L', intervalo: '40.000 km' },
      { sistema: 'Direção Hidráulica', especificacao: 'ATF Dexron III', norma: 'Dexron III', capacidade: '1,0 L', intervalo: 'Inspeção 10.000 km' }
    ],
    filtros: {
      oleo: { original: '1520800Q0A', tecfil: 'PEL106', mann: 'HU 6011 z', mahle: 'OX968D', wega: 'WOE-247', fram: 'CH10656' },
      ar: { original: '165464KV0A', tecfil: 'ARL8480', mann: 'C 21 001', mahle: 'LX4233', wega: 'FAP-9296', fram: 'CA11250' },
      combustivel: { original: '164004KV0A', tecfil: 'PSD980', mann: 'PU 9009 z KIT', mahle: 'KX387/1D', wega: 'FCD-0796', fram: 'P552008' },
      cabine: { original: '-', tecfil: '-', mann: 'CU 10 010-2', mahle: '-', wega: '-', fram: '-' }
    }
  },
  'Toyota Hilux 3.0': {
    sistemas: [
      { sistema: 'Motor (1KD-FTV)', especificacao: 'SAE 15W-40', norma: 'API CI-4', capacidade: '7,0 L', intervalo: '10.000 km' },
      { sistema: 'Câmbio Manual', especificacao: 'SAE 75W-90', norma: 'API GL-4', capacidade: '2,2 L', intervalo: '40.000 km' },
      { sistema: 'Diferencial (LSD)', especificacao: 'SAE 80W-90', norma: 'API GL-5', capacidade: '3,4 L', intervalo: '40.000 km' },
      { sistema: 'Direção Hidráulica', especificacao: 'ATF Dexron III', norma: 'Dexron III', capacidade: '1,0 L', intervalo: 'Inspeção 10.000 km' }
    ],
    filtros: {
      oleo: { original: '90915YZZD2', tecfil: 'PSL55', mann: 'W 712/83', mahle: 'OC988', wega: 'WO-100', fram: 'PH2870' },
      ar: { original: '178010L040', tecfil: 'ARL4125', mann: 'C 32 011', mahle: 'LX1618', wega: 'FAP-3280', fram: 'CA8286' },
      combustivel: { original: '233900L010', tecfil: 'PSD470', mann: 'WK 816 x', mahle: 'KX265D', wega: 'FCI-1630', fram: 'PS926' },
      cabine: { original: '87139YZZ01', tecfil: 'ACP301', mann: 'CU 19 192', mahle: 'LA 382', wega: 'AKX-1930', fram: 'CF11175' }
    }
  },
  'Toyota Hilux 2.8 - Nova': {
    sistemas: [
      { sistema: 'Motor 1GD-FTV', especificacao: 'SAE 5W-30', norma: 'ACEA C2', capacidade: '7,5 L', intervalo: '10.000 km' },
      { sistema: 'Câmbio Auto AC60F', especificacao: 'ATF WS', norma: 'Toyota WS', capacidade: '9,5 L', intervalo: '80.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 75W-85', norma: 'API GL-5', capacidade: '3,0 L', intervalo: '40.000 km' },
      { sistema: 'Direção Hidráulica', especificacao: 'ATF Dexron III', norma: 'Dexron III', capacidade: '1,0 L', intervalo: 'Inspeção 10.000 km' }
    ],
    filtros: {
      oleo: { original: '90915YZZD3', tecfil: 'PEL106', mann: 'W 712/83', mahle: 'OC988', wega: 'WOE-473', fram: 'CH9642' },
      ar: { original: '1780111130', tecfil: 'ARL8480', mann: 'C 32 011', mahle: 'LX4377', wega: 'FAP-3280', fram: 'CA11250' },
      combustivel: { original: '233900E020', tecfil: 'PSD980', mann: 'PU 8028', mahle: 'KX531D', wega: 'FCI-1620', fram: 'PS10038' },
      cabine: { original: '87139YZZ20', tecfil: 'ACP309', mann: 'FP 1919', mahle: 'LA 250', wega: 'AKX-1999', fram: 'CF10729' }
    }
  },

  // ==================== CAMINHÕES (LINHA PESADA) ====================
  'Agrale 8500': {
    sistemas: [
      { sistema: 'Motor (MWM)', especificacao: 'SAE 15W-40', norma: 'API CI-4', capacidade: '14,0 L', intervalo: '20.000 km' },
      { sistema: 'Câmbio Manual', especificacao: 'SAE 50', norma: 'API GL-4', capacidade: '5,0 L', intervalo: '50.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 85W-140', norma: 'API GL-5', capacidade: '8,0 L', intervalo: '50.000 km' }
    ],
    filtros: {
      oleo: { original: '2R0115561', tecfil: 'PEL106', mann: 'W 950/26', mahle: 'OC413', wega: 'WO-210', fram: 'PH8A' },
      ar: { original: '2T0129620', tecfil: 'ARL8480', mann: 'C 17 308', mahle: 'LX1054', wega: 'FAP-4001', fram: 'CA8558' },
      combustivel: { original: '2R0201511', tecfil: 'PSD980', mann: 'WK 950/21', mahle: 'KC18', wega: 'FCI-1620', fram: 'PS10038' },
      cabine: { original: '-', tecfil: '-', mann: '-', mahle: '-', wega: '-', fram: '-' }
    }
  },
  'Agrale 10000': {
    sistemas: [
      { sistema: 'Motor (MWM)', especificacao: 'SAE 15W-40', norma: 'API CI-4', capacidade: '14,0 L', intervalo: '20.000 km' },
      { sistema: 'Câmbio Manual', especificacao: 'SAE 50', norma: 'API GL-4', capacidade: '5,0 L', intervalo: '50.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 85W-140', norma: 'API GL-5', capacidade: '10,0 L', intervalo: '50.000 km' }
    ],
    filtros: {
      oleo: { original: '2R0115561', tecfil: 'PEL106', mann: 'W 950/26', mahle: 'OC413', wega: 'WO-210', fram: 'PH8A' },
      ar: { original: '2T0129620', tecfil: 'ARL8480', mann: 'C 17 308', mahle: 'LX1054', wega: 'FAP-4001', fram: 'CA8558' },
      combustivel: { original: '2R0201511', tecfil: 'PSD980', mann: 'WK 950/21', mahle: 'KC18', wega: 'FCI-1620', fram: 'PS10038' },
      cabine: { original: '-', tecfil: '-', mann: '-', mahle: '-', wega: '-', fram: '-' }
    }
  },
  'Agrale 13000': {
    sistemas: [
      { sistema: 'Motor (MWM)', especificacao: 'SAE 15W-40', norma: 'API CI-4', capacidade: '16,5 L', intervalo: '20.000 km' },
      { sistema: 'Câmbio Manual', especificacao: 'SAE 50', norma: 'API GL-4', capacidade: '7,0 L', intervalo: '50.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 85W-140', norma: 'API GL-5', capacidade: '12,0 L', intervalo: '50.000 km' }
    ],
    filtros: {
      oleo: { original: '2R0115561', tecfil: 'PEL106', mann: 'W 950/26', mahle: 'OC413', wega: 'WO-210', fram: 'PH8A' },
      ar: { original: '2T0129620', tecfil: 'ARL8480', mann: 'C 17 308', mahle: 'LX1054', wega: 'FAP-4001', fram: 'CA8558' },
      combustivel: { original: '2R0201511', tecfil: 'PSD980', mann: 'WK 950/21', mahle: 'KC18', wega: 'FCI-1620', fram: 'PS10038' },
      cabine: { original: '-', tecfil: '-', mann: '-', mahle: '-', wega: '-', fram: '-' }
    }
  },
  'DAF XF': {
    sistemas: [
      { sistema: 'Motor (PACCAR MX-13)', especificacao: 'SAE 10W-40', norma: 'API CK-4', capacidade: '39,0 L', intervalo: '60.000 km' },
      { sistema: 'Câmbio Auto ZF', especificacao: 'SAE 75W-90', norma: 'API GL-4', capacidade: '15,0 L', intervalo: '120.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 85W-140', norma: 'API GL-5', capacidade: '18,0 L', intervalo: '120.000 km' }
    ],
    filtros: {
      oleo: { original: '1851097', tecfil: 'PEL108', mann: 'HU 1075 x', mahle: 'OX174D', wega: 'WO-612', fram: 'CH11430' },
      ar: { original: '1387548', tecfil: 'ARL8480', mann: 'C 31 1500', mahle: 'LX1047', wega: 'WAP-103', fram: 'CA5791' },
      combustivel: { original: '1840031', tecfil: 'PSD980', mann: 'PU 1076 x', mahle: 'KX80D', wega: 'FCD-30123', fram: 'PS10038' },
      cabine: { original: '-', tecfil: '-', mann: 'CU 27 010', mahle: '-', wega: '-', fram: '-' }
    }
  },
  'DAF CF': {
    sistemas: [
      { sistema: 'Motor (PACCAR MX-11)', especificacao: 'SAE 10W-40', norma: 'API CK-4', capacidade: '32,0 L', intervalo: '50.000 km' },
      { sistema: 'Câmbio Auto ZF', especificacao: 'SAE 75W-90', norma: 'API GL-4', capacidade: '12,0 L', intervalo: '100.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 85W-140', norma: 'API GL-5', capacidade: '15,0 L', intervalo: '100.000 km' }
    ],
    filtros: {
      oleo: { original: '1851097', tecfil: 'PEL108', mann: 'HU 1075 x', mahle: 'OX174D', wega: 'WO-612', fram: 'CH11430' },
      ar: { original: '1387548', tecfil: 'ARL8480', mann: 'C 31 1500', mahle: 'LX1047', wega: 'WAP-103', fram: 'CA5791' },
      combustivel: { original: '1840031', tecfil: 'PSD980', mann: 'PU 1076 x', mahle: 'KX80D', wega: 'FCD-30123', fram: 'PS10038' },
      cabine: { original: '-', tecfil: '-', mann: 'CU 27 010', mahle: '-', wega: '-', fram: '-' }
    }
  },
  'DAF XD': {
    sistemas: [
      { sistema: 'Motor (PACCAR PX-7)', especificacao: 'SAE 10W-40', norma: 'API CK-4', capacidade: '18,0 L', intervalo: '40.000 km' },
      { sistema: 'Câmbio Auto ZF', especificacao: 'SAE 75W-90', norma: 'API GL-4', capacidade: '10,0 L', intervalo: '80.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 85W-140', norma: 'API GL-5', capacidade: '12,0 L', intervalo: '80.000 km' }
    ],
    filtros: {
      oleo: { original: '1851097', tecfil: 'PEL108', mann: 'HU 1075 x', mahle: 'OX174D', wega: 'WO-612', fram: 'CH11430' },
      ar: { original: '1387548', tecfil: 'ARL8480', mann: 'C 31 1500', mahle: 'LX1047', wega: 'WAP-103', fram: 'CA5791' },
      combustivel: { original: '1840031', tecfil: 'PSD980', mann: 'PU 1076 x', mahle: 'KX80D', wega: 'FCD-30123', fram: 'PS10038' },
      cabine: { original: '-', tecfil: '-', mann: 'CU 27 010', mahle: '-', wega: '-', fram: '-' }
    }
  },
  'Foton Aumark S 3.5': {
    sistemas: [
      { sistema: 'Motor (Cummins ISF 2.8)', especificacao: 'SAE 15W-40', norma: 'API CK-4', capacidade: '8,0 L', intervalo: '20.000 km' },
      { sistema: 'Câmbio Manual', especificacao: 'SAE 75W-90', norma: 'API GL-4', capacidade: '3,0 L', intervalo: '50.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 85W-140', norma: 'API GL-5', capacidade: '3,5 L', intervalo: '50.000 km' }
    ],
    filtros: {
      oleo: { original: '5266010', tecfil: 'PEL106', mann: 'W 950/26', mahle: 'OC505', wega: 'WO-210', fram: 'PH8A' },
      ar: { original: 'AF26056', tecfil: 'ARL8480', mann: 'C 17 308', mahle: 'LX1054', wega: 'FAP-4001', fram: 'CA8558' },
      combustivel: { original: 'FS19820', tecfil: 'PSD980', mann: 'WK 950/21', mahle: 'KC202', wega: 'FCI-1620', fram: 'PS10038' },
      cabine: { original: '-', tecfil: '-', mann: '-', mahle: '-', wega: '-', fram: '-' }
    }
  },
  'Foton Aumark S 5.5': {
    sistemas: [
      { sistema: 'Motor (Cummins ISF 3.8)', especificacao: 'SAE 15W-40', norma: 'API CK-4', capacidade: '11,0 L', intervalo: '20.000 km' },
      { sistema: 'Câmbio Manual', especificacao: 'SAE 75W-90', norma: 'API GL-4', capacidade: '4,5 L', intervalo: '50.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 85W-140', norma: 'API GL-5', capacidade: '5,0 L', intervalo: '50.000 km' }
    ],
    filtros: {
      oleo: { original: '5266010', tecfil: 'PEL106', mann: 'W 950/26', mahle: 'OC505', wega: 'WO-210', fram: 'PH8A' },
      ar: { original: 'AF26056', tecfil: 'ARL8480', mann: 'C 17 308', mahle: 'LX1054', wega: 'FAP-4001', fram: 'CA8558' },
      combustivel: { original: 'FS19820', tecfil: 'PSD980', mann: 'WK 950/21', mahle: 'KC202', wega: 'FCI-1620', fram: 'PS10038' },
      cabine: { original: '-', tecfil: '-', mann: '-', mahle: '-', wega: '-', fram: '-' }
    }
  },
  'Foton Auman ETX': {
    sistemas: [
      { sistema: 'Motor (Cummins ISG)', especificacao: 'SAE 15W-40', norma: 'API CK-4', capacidade: '24,0 L', intervalo: '30.000 km' },
      { sistema: 'Câmbio Manual/Auto', especificacao: 'SAE 75W-90', norma: 'API GL-4', capacidade: '12,0 L', intervalo: '80.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 85W-140', norma: 'API GL-5', capacidade: '16,0 L', intervalo: '80.000 km' }
    ],
    filtros: {
      oleo: { original: '5266010', tecfil: 'PEL108', mann: 'W 950/26', mahle: 'OC516', wega: 'WO-210', fram: 'PH8A' },
      ar: { original: 'AF26056', tecfil: 'ARL8480', mann: 'C 27 830', mahle: 'LX1047', wega: 'FAP-2830', fram: 'CA10427' },
      combustivel: { original: 'FS19820', tecfil: 'PSD980', mann: 'WK 1060 x', mahle: 'KC202', wega: 'FCI-1620', fram: 'PS10038' },
      cabine: { original: '-', tecfil: '-', mann: '-', mahle: '-', wega: '-', fram: '-' }
    }
  },
  'Ford Cargo 816': {
    sistemas: [
      { sistema: 'Motor (Cummins ISF 4.5)', especificacao: 'SAE 15W-40', norma: 'API CI-4', capacidade: '11,0 L', intervalo: '10.000 km' },
      { sistema: 'Câmbio Eaton FSO', especificacao: 'SAE 75W-90', norma: 'API GL-4', capacidade: '3,8 L', intervalo: '40.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 85W-140', norma: 'API GL-5', capacidade: '3,0 L', intervalo: '40.000 km' }
    ],
    filtros: {
      oleo: { original: 'BG1X6714AA', tecfil: 'PEL106', mann: 'W 950/26', mahle: 'OC505', wega: 'WO-210', fram: 'PH8A' },
      ar: { original: 'BG1X9601BA', tecfil: 'ARL8480', mann: 'C 17 308', mahle: 'LX1054', wega: 'FAP-4001', fram: 'CA8558' },
      combustivel: { original: 'BG1X9155AA', tecfil: 'PSD980', mann: 'WK 954/2 x', mahle: 'KC202', wega: 'FCI-1620', fram: 'PS10038' },
      cabine: { original: '-', tecfil: '-', mann: '-', mahle: '-', wega: '-', fram: '-' }
    }
  },
  'Ford Cargo 1317': {
    sistemas: [
      { sistema: 'Motor (Cummins ISB 4.5)', especificacao: 'SAE 15W-40', norma: 'API CI-4', capacidade: '13,0 L', intervalo: '20.000 km' },
      { sistema: 'Câmbio Eaton', especificacao: 'SAE 50', norma: 'API GL-4', capacidade: '5,5 L', intervalo: '40.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 85W-140', norma: 'API GL-5', capacidade: '8,0 L', intervalo: '40.000 km' }
    ],
    filtros: {
      oleo: { original: 'BG1X6714AA', tecfil: 'PEL106', mann: 'W 950/26', mahle: 'OC505', wega: 'WO-210', fram: 'PH8A' },
      ar: { original: 'BG1X9601BA', tecfil: 'ARL8480', mann: 'C 17 308', mahle: 'LX1054', wega: 'FAP-4001', fram: 'CA8558' },
      combustivel: { original: 'BG1X9155AA', tecfil: 'PSD980', mann: 'WK 954/2 x', mahle: 'KC202', wega: 'FCI-1620', fram: 'PS10038' },
      cabine: { original: '-', tecfil: '-', mann: '-', mahle: '-', wega: '-', fram: '-' }
    }
  },
  'Ford Cargo 1719': {
    sistemas: [
      { sistema: 'Motor (Cummins ISB 6.7)', especificacao: 'SAE 15W-40', norma: 'API CI-4', capacidade: '15,0 L', intervalo: '20.000 km' },
      { sistema: 'Câmbio Eaton', especificacao: 'SAE 50', norma: 'API GL-4', capacidade: '7,0 L', intervalo: '40.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 85W-140', norma: 'API GL-5', capacidade: '10,0 L', intervalo: '40.000 km' }
    ],
    filtros: {
      oleo: { original: 'BG2X6714AA', tecfil: 'PEL106', mann: 'W 950/26', mahle: 'OC505', wega: 'WO-210', fram: 'PH8A' },
      ar: { original: 'BG2X9601AA', tecfil: 'ARL8480', mann: 'C 27 109', mahle: 'LX1047', wega: 'FAP-2830', fram: 'CA10427' },
      combustivel: { original: 'BG2X9155AA', tecfil: 'PSD980', mann: 'WK 954/2 x', mahle: 'KC202', wega: 'FCI-1620', fram: 'PS10038' },
      cabine: { original: '-', tecfil: '-', mann: '-', mahle: '-', wega: '-', fram: '-' }
    }
  },
  'Ford Cargo 2429': {
    sistemas: [
      { sistema: 'Motor (Cummins ISC)', especificacao: 'SAE 15W-40', norma: 'API CI-4', capacidade: '19,0 L', intervalo: '20.000 km' },
      { sistema: 'Câmbio Eaton', especificacao: 'SAE 50', norma: 'API GL-4', capacidade: '9,5 L', intervalo: '40.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 85W-140', norma: 'API GL-5', capacidade: '16,0 L', intervalo: '40.000 km' }
    ],
    filtros: {
      oleo: { original: 'BH1X6714AA', tecfil: 'PEL106', mann: 'W 950/26', mahle: 'OC505', wega: 'WO-210', fram: 'PH8A' },
      ar: { original: 'BH1X9601AA', tecfil: 'ARS9839', mann: 'C 27 830', mahle: 'LX1047', wega: 'FAP-2830', fram: 'CA10427' },
      combustivel: { original: 'BH1X9155AA', tecfil: 'PSD980', mann: 'WK 954/2 x', mahle: 'KC202', wega: 'FCI-1620', fram: 'PS10038' },
      cabine: { original: '-', tecfil: '-', mann: '-', mahle: '-', wega: '-', fram: '-' }
    }
  },
  'Ford Cargo 2629': {
    sistemas: [
      { sistema: 'Motor (Cummins ISC)', especificacao: 'SAE 15W-40', norma: 'API CI-4', capacidade: '19,0 L', intervalo: '20.000 km' },
      { sistema: 'Câmbio Eaton', especificacao: 'SAE 50', norma: 'API GL-4', capacidade: '11,0 L', intervalo: '40.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 85W-140', norma: 'API GL-5', capacidade: '18,0 L', intervalo: '40.000 km' }
    ],
    filtros: {
      oleo: { original: 'BH1X6714AA', tecfil: 'PEL106', mann: 'W 950/26', mahle: 'OC505', wega: 'WO-210', fram: 'PH8A' },
      ar: { original: 'BH1X9601AA', tecfil: 'ARS9839', mann: 'C 27 830', mahle: 'LX1047', wega: 'FAP-2830', fram: 'CA10427' },
      combustivel: { original: 'BH1X9155AA', tecfil: 'PSD980', mann: 'WK 954/2 x', mahle: 'KC202', wega: 'FCI-1620', fram: 'PS10038' },
      cabine: { original: '-', tecfil: '-', mann: '-', mahle: '-', wega: '-', fram: '-' }
    }
  },
  'Ford Cargo 3131': {
    sistemas: [
      { sistema: 'Motor (Cummins ISL)', especificacao: 'SAE 15W-40', norma: 'API CI-4', capacidade: '22,0 L', intervalo: '30.000 km' },
      { sistema: 'Câmbio Eaton', especificacao: 'SAE 50', norma: 'API GL-4', capacidade: '12,5 L', intervalo: '60.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 85W-140', norma: 'API GL-5', capacidade: '18,0 L', intervalo: '50.000 km' }
    ],
    filtros: {
      oleo: { original: 'CC1Q6714AA', tecfil: 'PEL106', mann: 'W 950/26', mahle: 'OC516', wega: 'WO-210', fram: 'PH8A' },
      ar: { original: 'CC1Z9601A', tecfil: 'ARS9839', mann: 'C 27 830', mahle: 'LX1047', wega: 'FAP-2830', fram: 'CA10427' },
      combustivel: { original: 'CC1Q9155AA', tecfil: 'PSD980', mann: 'WK 1060 x', mahle: 'KC202', wega: 'FCI-1620', fram: 'PS10038' },
      cabine: { original: '-', tecfil: '-', mann: '-', mahle: '-', wega: '-', fram: '-' }
    }
  },
  'Iveco Daily 30-130': {
    sistemas: [
      { sistema: 'Motor (FPT F1C)', especificacao: 'SAE 10W-40', norma: 'API CI-4', capacidade: '6,5 L', intervalo: '20.000 km' },
      { sistema: 'Câmbio Manual', especificacao: 'SAE 75W-80', norma: 'API GL-4', capacidade: '2,2 L', intervalo: '60.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 80W-90', norma: 'API GL-5', capacidade: '2,5 L', intervalo: '50.000 km' }
    ],
    filtros: {
      oleo: { original: '5801382496', tecfil: 'PEL106', mann: 'WP 1144', mahle: 'OC608', wega: 'WOE-610', fram: 'CH9642' },
      ar: { original: '5801382497', tecfil: 'ARL8480', mann: 'C 18 450/2', mahle: 'LX1751', wega: 'FAP-2830', fram: 'CA10427' },
      combustivel: { original: '5801382498', tecfil: 'PSD980', mann: 'WK 842/7', mahle: 'KX208D', wega: 'FCI-1620', fram: 'PS10038' },
      cabine: { original: '-', tecfil: '-', mann: 'CU 2952', mahle: '-', wega: '-', fram: '-' }
    }
  },
  'Iveco Daily 35-150': {
    sistemas: [
      { sistema: 'Motor (FPT F1C)', especificacao: 'SAE 10W-40', norma: 'API CI-4', capacidade: '6,5 L', intervalo: '20.000 km' },
      { sistema: 'Câmbio Manual', especificacao: 'SAE 75W-80', norma: 'API GL-4', capacidade: '2,2 L', intervalo: '60.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 80W-90', norma: 'API GL-5', capacidade: '2,5 L', intervalo: '50.000 km' }
    ],
    filtros: {
      oleo: { original: '5801382496', tecfil: 'PEL106', mann: 'WP 1144', mahle: 'OC608', wega: 'WOE-610', fram: 'CH9642' },
      ar: { original: '5801382497', tecfil: 'ARL8480', mann: 'C 18 450/2', mahle: 'LX1751', wega: 'FAP-2830', fram: 'CA10427' },
      combustivel: { original: '5801382498', tecfil: 'PSD980', mann: 'WK 842/7', mahle: 'KX208D', wega: 'FCI-1620', fram: 'PS10038' },
      cabine: { original: '-', tecfil: '-', mann: 'CU 2952', mahle: '-', wega: '-', fram: '-' }
    }
  },
  'Iveco Daily 55C': {
    sistemas: [
      { sistema: 'Motor (FPT F1C)', especificacao: 'SAE 10W-40', norma: 'API CI-4', capacidade: '6,5 L', intervalo: '20.000 km' },
      { sistema: 'Câmbio Manual', especificacao: 'SAE 75W-80', norma: 'API GL-4', capacidade: '2,2 L', intervalo: '60.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 80W-90', norma: 'API GL-5', capacidade: '3,0 L', intervalo: '50.000 km' }
    ],
    filtros: {
      oleo: { original: '5801382496', tecfil: 'PEL106', mann: 'WP 1144', mahle: 'OC608', wega: 'WOE-610', fram: 'CH9642' },
      ar: { original: '5801382497', tecfil: 'ARL8480', mann: 'C 18 450/2', mahle: 'LX1751', wega: 'FAP-2830', fram: 'CA10427' },
      combustivel: { original: '5801382498', tecfil: 'PSD980', mann: 'WK 842/7', mahle: 'KX208D', wega: 'FCI-1620', fram: 'PS10038' },
      cabine: { original: '-', tecfil: '-', mann: 'CU 2952', mahle: '-', wega: '-', fram: '-' }
    }
  },
  'Iveco Tector': {
    sistemas: [
      { sistema: 'Motor (FPT NEF 6)', especificacao: 'SAE 15W-40', norma: 'API CI-4', capacidade: '13,0 L', intervalo: '30.000 km' },
      { sistema: 'Câmbio ZF', especificacao: 'SAE 75W-90', norma: 'API GL-4', capacidade: '7,5 L', intervalo: '60.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 85W-140', norma: 'API GL-5', capacidade: '12,0 L', intervalo: '60.000 km' }
    ],
    filtros: {
      oleo: { original: '504091563', tecfil: 'PEL108', mann: 'W 950/26', mahle: 'OC505', wega: 'WO-530', fram: 'CH9939' },
      ar: { original: '1372173080', tecfil: 'ARL8480', mann: 'C 27 830', mahle: 'LX1047', wega: 'FAP-2830', fram: 'CA10427' },
      combustivel: { original: '1609428080', tecfil: 'PSD980', mann: 'WK 1060 x', mahle: 'KC202', wega: 'FCI-1620', fram: 'PS10038' },
      cabine: { original: '-', tecfil: '-', mann: '-', mahle: '-', wega: '-', fram: '-' }
    }
  },
  'Iveco Stralis': {
    sistemas: [
      { sistema: 'Motor (FPT Cursor)', especificacao: 'SAE 10W-40', norma: 'API CI-4', capacidade: '36,0 L', intervalo: '50.000 km' },
      { sistema: 'Câmbio ZF', especificacao: 'SAE 75W-90', norma: 'API GL-4', capacidade: '12,0 L', intervalo: '100.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 85W-140', norma: 'API GL-5', capacidade: '16,0 L', intervalo: '100.000 km' }
    ],
    filtros: {
      oleo: { original: '2992242', tecfil: 'PEL108', mann: 'HU 12 103 x', mahle: 'OX174D', wega: 'WO-530', fram: 'CH9939' },
      ar: { original: '504178590', tecfil: 'ARL8480', mann: 'C 31 1500', mahle: 'LX1047', wega: 'FAP-2830', fram: 'CA10427' },
      combustivel: { original: '504108113', tecfil: 'PSD980', mann: 'WK 1060 x', mahle: 'KX80D', wega: 'FCI-1620', fram: 'PS10038' },
      cabine: { original: '-', tecfil: '-', mann: '-', mahle: '-', wega: '-', fram: '-' }
    }
  },
  'Iveco S-Way': {
    sistemas: [
      { sistema: 'Motor (FPT Cursor 13)', especificacao: 'SAE 10W-40', norma: 'API CK-4', capacidade: '38,0 L', intervalo: '60.000 km' },
      { sistema: 'Câmbio ZF', especificacao: 'SAE 75W-90', norma: 'API GL-4', capacidade: '14,0 L', intervalo: '120.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 85W-140', norma: 'API GL-5', capacidade: '18,0 L', intervalo: '120.000 km' }
    ],
    filtros: {
      oleo: { original: '2992242', tecfil: 'PEL108', mann: 'HU 12 103 x', mahle: 'OX174D', wega: 'WO-530', fram: 'CH9939' },
      ar: { original: '504178590', tecfil: 'ARL8480', mann: 'C 31 1500', mahle: 'LX1047', wega: 'FAP-2830', fram: 'CA10427' },
      combustivel: { original: '504108113', tecfil: 'PSD980', mann: 'WK 1060 x', mahle: 'KX80D', wega: 'FCI-1620', fram: 'PS10038' },
      cabine: { original: '-', tecfil: '-', mann: '-', mahle: '-', wega: '-', fram: '-' }
    }
  },
  'JAC V260': {
    sistemas: [
      { sistema: 'Motor', especificacao: 'SAE 15W-40', norma: 'API CI-4', capacidade: '8,0 L', intervalo: '20.000 km' },
      { sistema: 'Câmbio Manual', especificacao: 'SAE 75W-90', norma: 'API GL-4', capacidade: '3,0 L', intervalo: '50.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 85W-140', norma: 'API GL-5', capacidade: '3,5 L', intervalo: '50.000 km' }
    ],
    filtros: {
      oleo: { original: 'J-1010010', tecfil: 'PEL106', mann: 'W 950/26', mahle: 'OC505', wega: 'WO-210', fram: 'PH8A' },
      ar: { original: 'J-1109111', tecfil: 'ARL8480', mann: 'C 17 308', mahle: 'LX1054', wega: 'FAP-4001', fram: 'CA8558' },
      combustivel: { original: 'J-1117100', tecfil: 'PSD980', mann: 'WK 950/21', mahle: 'KC202', wega: 'FCI-1620', fram: 'PS10038' },
      cabine: { original: '-', tecfil: '-', mann: '-', mahle: '-', wega: '-', fram: '-' }
    }
  },
  'JAC X200': {
    sistemas: [
      { sistema: 'Motor', especificacao: 'SAE 15W-40', norma: 'API CI-4', capacidade: '10,0 L', intervalo: '20.000 km' },
      { sistema: 'Câmbio Manual', especificacao: 'SAE 75W-90', norma: 'API GL-4', capacidade: '4,0 L', intervalo: '50.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 85W-140', norma: 'API GL-5', capacidade: '5,0 L', intervalo: '50.000 km' }
    ],
    filtros: {
      oleo: { original: 'J-1010010', tecfil: 'PEL106', mann: 'W 950/26', mahle: 'OC505', wega: 'WO-210', fram: 'PH8A' },
      ar: { original: 'J-1109111', tecfil: 'ARL8480', mann: 'C 17 308', mahle: 'LX1054', wega: 'FAP-4001', fram: 'CA8558' },
      combustivel: { original: 'J-1117100', tecfil: 'PSD980', mann: 'WK 950/21', mahle: 'KC202', wega: 'FCI-1620', fram: 'PS10038' },
      cabine: { original: '-', tecfil: '-', mann: '-', mahle: '-', wega: '-', fram: '-' }
    }
  },
  'JAC X300': {
    sistemas: [
      { sistema: 'Motor (Cummins)', especificacao: 'SAE 15W-40', norma: 'API CI-4', capacidade: '10,0 L', intervalo: '20.000 km' },
      { sistema: 'Câmbio Manual', especificacao: 'SAE 75W-90', norma: 'API GL-4', capacidade: '4,0 L', intervalo: '50.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 85W-140', norma: 'API GL-5', capacidade: '5,0 L', intervalo: '50.000 km' }
    ],
    filtros: {
      oleo: { original: 'J-1010010', tecfil: 'PEL106', mann: 'W 950/26', mahle: 'OC505', wega: 'WO-210', fram: 'PH8A' },
      ar: { original: 'J-1109111', tecfil: 'ARL8480', mann: 'C 17 308', mahle: 'LX1054', wega: 'FAP-4001', fram: 'CA8558' },
      combustivel: { original: 'J-1117100', tecfil: 'PSD980', mann: 'WK 950/21', mahle: 'KC202', wega: 'FCI-1620', fram: 'PS10038' },
      cabine: { original: '-', tecfil: '-', mann: '-', mahle: '-', wega: '-', fram: '-' }
    }
  },
  'MAN TGX': {
    sistemas: [
      { sistema: 'Motor (MAN D26)', especificacao: 'SAE 10W-40', norma: 'API CK-4', capacidade: '40,0 L', intervalo: '60.000 km' },
      { sistema: 'Câmbio ZF', especificacao: 'SAE 75W-90', norma: 'API GL-4', capacidade: '15,0 L', intervalo: '120.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 85W-140', norma: 'API GL-5', capacidade: '18,0 L', intervalo: '120.000 km' }
    ],
    filtros: {
      oleo: { original: '51055040089', tecfil: 'PEL108', mann: 'HU 12 103 x', mahle: 'OX174D', wega: 'WO-530', fram: 'CH9939' },
      ar: { original: '81083040035', tecfil: 'ARL8480', mann: 'C 31 1500', mahle: 'LX1047', wega: 'FAP-2830', fram: 'CA10427' },
      combustivel: { original: '51055040087', tecfil: 'PSD980', mann: 'PU 1040 x', mahle: 'KX80D', wega: 'FCI-1620', fram: 'PS10038' },
      cabine: { original: '-', tecfil: '-', mann: '-', mahle: '-', wega: '-', fram: '-' }
    }
  },
  'MAN TGS': {
    sistemas: [
      { sistema: 'Motor (MAN D20/D26)', especificacao: 'SAE 10W-40', norma: 'API CK-4', capacidade: '35,0 L', intervalo: '50.000 km' },
      { sistema: 'Câmbio ZF', especificacao: 'SAE 75W-90', norma: 'API GL-4', capacidade: '13,0 L', intervalo: '100.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 85W-140', norma: 'API GL-5', capacidade: '16,0 L', intervalo: '100.000 km' }
    ],
    filtros: {
      oleo: { original: '51055040089', tecfil: 'PEL108', mann: 'HU 12 103 x', mahle: 'OX174D', wega: 'WO-530', fram: 'CH9939' },
      ar: { original: '81083040035', tecfil: 'ARL8480', mann: 'C 31 1500', mahle: 'LX1047', wega: 'FAP-2830', fram: 'CA10427' },
      combustivel: { original: '51055040087', tecfil: 'PSD980', mann: 'PU 1040 x', mahle: 'KX80D', wega: 'FCI-1620', fram: 'PS10038' },
      cabine: { original: '-', tecfil: '-', mann: '-', mahle: '-', wega: '-', fram: '-' }
    }
  },
  'Mercedes-Benz Accelo 1016': {
    sistemas: [
      { sistema: 'Motor (OM 924 LA)', especificacao: 'SAE 15W-40', norma: 'API CI-4', capacidade: '13,0 L', intervalo: '30.000 km' },
      { sistema: 'Câmbio MB', especificacao: 'SAE 75W-90', norma: 'API GL-4', capacidade: '5,5 L', intervalo: '60.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 85W-140', norma: 'API GL-5', capacidade: '6,0 L', intervalo: '60.000 km' }
    ],
    filtros: {
      oleo: { original: 'A0001802609', tecfil: 'PEL108', mann: 'HU 934/2 x', mahle: 'OX153/7D', wega: 'WO-530', fram: 'CH9939' },
      ar: { original: 'A0030944004', tecfil: 'ARS9841', mann: 'C 25 125', mahle: 'LX1038', wega: 'FAP-2830', fram: 'CA10427' },
      combustivel: { original: 'A0000903651', tecfil: 'PSD980', mann: 'PU 936/1 x', mahle: 'KX80D', wega: 'FCI-1620', fram: 'PS10038' },
      cabine: { original: '-', tecfil: '-', mann: 'CU 3461', mahle: '-', wega: '-', fram: '-' }
    }
  },
  'Mercedes-Benz Accelo 1017': {
    sistemas: [
      { sistema: 'Motor (OM 924 LA)', especificacao: 'SAE 15W-40', norma: 'API CI-4', capacidade: '13,0 L', intervalo: '30.000 km' },
      { sistema: 'Câmbio MB', especificacao: 'SAE 75W-90', norma: 'API GL-4', capacidade: '5,5 L', intervalo: '60.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 85W-140', norma: 'API GL-5', capacidade: '6,0 L', intervalo: '60.000 km' }
    ],
    filtros: {
      oleo: { original: 'A0001802609', tecfil: 'PEL108', mann: 'HU 934/2 x', mahle: 'OX153/7D', wega: 'WO-530', fram: 'CH9939' },
      ar: { original: 'A0030944004', tecfil: 'ARS9841', mann: 'C 25 125', mahle: 'LX1038', wega: 'FAP-2830', fram: 'CA10427' },
      combustivel: { original: 'A0000903651', tecfil: 'PSD980', mann: 'PU 936/1 x', mahle: 'KX80D', wega: 'FCI-1620', fram: 'PS10038' },
      cabine: { original: '-', tecfil: '-', mann: 'CU 3461', mahle: '-', wega: '-', fram: '-' }
    }
  },
  'Mercedes-Benz Atego 1719': {
    sistemas: [
      { sistema: 'Motor (OM 924 LA)', especificacao: 'SAE 15W-40', norma: 'API CI-4', capacidade: '15,8 L', intervalo: '40.000 km' },
      { sistema: 'Câmbio MB', especificacao: 'SAE 75W-90', norma: 'API GL-4', capacidade: '8,0 L', intervalo: '80.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 85W-140', norma: 'API GL-5', capacidade: '10,0 L', intervalo: '80.000 km' }
    ],
    filtros: {
      oleo: { original: 'A0001802609', tecfil: 'PEL108', mann: 'HU 934/2 x', mahle: 'OX153/7D', wega: 'WO-530', fram: 'CH9939' },
      ar: { original: 'A0030944004', tecfil: 'ARS9841', mann: 'C 25 125', mahle: 'LX1038', wega: 'FAP-2830', fram: 'CA10427' },
      combustivel: { original: 'A0000903651', tecfil: 'PSD980', mann: 'PU 936/1 x', mahle: 'KX80D', wega: 'FCI-1620', fram: 'PS10038' },
      cabine: { original: '-', tecfil: '-', mann: 'CU 3461', mahle: '-', wega: '-', fram: '-' }
    }
  },
  'Mercedes-Benz Atego 2426': {
    sistemas: [
      { sistema: 'Motor (OM 926 LA)', especificacao: 'SAE 15W-40', norma: 'API CI-4', capacidade: '24,0 L', intervalo: '40.000 km' },
      { sistema: 'Câmbio MB', especificacao: 'SAE 75W-90', norma: 'API GL-4', capacidade: '11,0 L', intervalo: '80.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 85W-140', norma: 'API GL-5', capacidade: '14,0 L', intervalo: '80.000 km' }
    ],
    filtros: {
      oleo: { original: 'A0001802609', tecfil: 'PEL108', mann: 'HU 934/2 x', mahle: 'OX153/7D', wega: 'WO-530', fram: 'CH9939' },
      ar: { original: 'A0030944004', tecfil: 'ARS9841', mann: 'C 25 125', mahle: 'LX1038', wega: 'FAP-2830', fram: 'CA10427' },
      combustivel: { original: 'A0000903651', tecfil: 'PSD980', mann: 'PU 936/1 x', mahle: 'KX80D', wega: 'FCI-1620', fram: 'PS10038' },
      cabine: { original: '-', tecfil: '-', mann: 'CU 3461', mahle: '-', wega: '-', fram: '-' }
    }
  },
  'Mercedes-Benz Atego 2730': {
    sistemas: [
      { sistema: 'Motor (OM 926 LA)', especificacao: 'SAE 15W-40', norma: 'API CI-4', capacidade: '24,0 L', intervalo: '40.000 km' },
      { sistema: 'Câmbio MB', especificacao: 'SAE 75W-90', norma: 'API GL-4', capacidade: '11,0 L', intervalo: '80.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 85W-140', norma: 'API GL-5', capacidade: '15,0 L', intervalo: '80.000 km' }
    ],
    filtros: {
      oleo: { original: 'A0001802609', tecfil: 'PEL108', mann: 'HU 934/2 x', mahle: 'OX153/7D', wega: 'WO-530', fram: 'CH9939' },
      ar: { original: 'A0030944004', tecfil: 'ARS9841', mann: 'C 25 125', mahle: 'LX1038', wega: 'FAP-2830', fram: 'CA10427' },
      combustivel: { original: 'A0000903651', tecfil: 'PSD980', mann: 'PU 936/1 x', mahle: 'KX80D', wega: 'FCI-1620', fram: 'PS10038' },
      cabine: { original: '-', tecfil: '-', mann: 'CU 3461', mahle: '-', wega: '-', fram: '-' }
    }
  },
  'Mercedes-Benz Axor 2536': {
    sistemas: [
      { sistema: 'Motor (OM 457 LA)', especificacao: 'SAE 15W-40', norma: 'API CI-4', capacidade: '36,0 L', intervalo: '40.000 km' },
      { sistema: 'Câmbio MB', especificacao: 'SAE 75W-90', norma: 'API GL-4', capacidade: '13,0 L', intervalo: '100.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 85W-140', norma: 'API GL-5', capacidade: '16,0 L', intervalo: '100.000 km' }
    ],
    filtros: {
      oleo: { original: 'A5411840225', tecfil: 'PEL108', mann: 'HU 12 103 x', mahle: 'OX174D', wega: 'WO-530', fram: 'CH9939' },
      ar: { original: 'A0040943404', tecfil: 'ARS9840', mann: 'C 31 1295', mahle: 'LX1047', wega: 'FAP-2830', fram: 'CA10427' },
      combustivel: { original: 'A0000904251', tecfil: 'PSD980', mann: 'PU 1040 x', mahle: 'KX80D', wega: 'FCI-1620', fram: 'PS10038' },
      cabine: { original: '-', tecfil: '-', mann: 'CU 3461', mahle: '-', wega: '-', fram: '-' }
    }
  },
  'Mercedes-Benz Axor 2644': {
    sistemas: [
      { sistema: 'Motor (OM 457 LA)', especificacao: 'SAE 15W-40', norma: 'API CI-4', capacidade: '36,0 L', intervalo: '40.000 km' },
      { sistema: 'Câmbio MB', especificacao: 'SAE 75W-90', norma: 'API GL-4', capacidade: '13,0 L', intervalo: '100.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 85W-140', norma: 'API GL-5', capacidade: '18,0 L', intervalo: '100.000 km' }
    ],
    filtros: {
      oleo: { original: 'A5411840225', tecfil: 'PEL108', mann: 'HU 12 103 x', mahle: 'OX174D', wega: 'WO-530', fram: 'CH9939' },
      ar: { original: 'A0040943404', tecfil: 'ARS9840', mann: 'C 31 1295', mahle: 'LX1047', wega: 'FAP-2830', fram: 'CA10427' },
      combustivel: { original: 'A0000904251', tecfil: 'PSD980', mann: 'PU 1040 x', mahle: 'KX80D', wega: 'FCI-1620', fram: 'PS10038' },
      cabine: { original: '-', tecfil: '-', mann: 'CU 3461', mahle: '-', wega: '-', fram: '-' }
    }
  },
  'Mercedes-Benz Axor 3344': {
    sistemas: [
      { sistema: 'Motor (OM 457 LA)', especificacao: 'SAE 15W-40', norma: 'API CI-4', capacidade: '36,0 L', intervalo: '30.000 km' },
      { sistema: 'Câmbio MB G-240', especificacao: 'SAE 75W-90', norma: 'API GL-4', capacidade: '13,0 L', intervalo: '60.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 85W-140', norma: 'API GL-5', capacidade: '25,0 L', intervalo: '50.000 km' }
    ],
    filtros: {
      oleo: { original: 'A5411840225', tecfil: 'PEL108', mann: 'HU 12 103 x', mahle: 'OX174D', wega: 'WO-530', fram: 'CH9939' },
      ar: { original: 'A0040943404', tecfil: 'ARS9840', mann: 'C 31 1295', mahle: 'LX1047', wega: 'FAP-2830', fram: 'CA10427' },
      combustivel: { original: 'A0000904251', tecfil: 'PSD980', mann: 'PU 1040 x', mahle: 'KX80D', wega: 'FCI-1620', fram: 'PS10038' },
      cabine: { original: '-', tecfil: '-', mann: 'CU 3461', mahle: '-', wega: '-', fram: '-' }
    }
  },
  'Mercedes-Benz Actros 2651': {
    sistemas: [
      { sistema: 'Motor (OM 471)', especificacao: 'SAE 10W-40', norma: 'API CK-4', capacidade: '42,0 L', intervalo: '80.000 km' },
      { sistema: 'Câmbio PowerShift', especificacao: 'SAE 75W-90', norma: 'API GL-4', capacidade: '15,0 L', intervalo: '120.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 85W-140', norma: 'API GL-5', capacidade: '18,0 L', intervalo: '120.000 km' }
    ],
    filtros: {
      oleo: { original: 'A5411840225', tecfil: 'PEL108', mann: 'HU 12 103 x', mahle: 'OX174D', wega: 'WO-530', fram: 'CH9939' },
      ar: { original: 'A0040943404', tecfil: 'ARS9840', mann: 'C 31 1295', mahle: 'LX1047', wega: 'FAP-2830', fram: 'CA10427' },
      combustivel: { original: 'A0000904251', tecfil: 'PSD980', mann: 'PU 1040 x', mahle: 'KX80D', wega: 'FCI-1620', fram: 'PS10038' },
      cabine: { original: '-', tecfil: '-', mann: 'CU 3461', mahle: '-', wega: '-', fram: '-' }
    }
  },
  'Mercedes-Benz Actros 2657': {
    sistemas: [
      { sistema: 'Motor (OM 471)', especificacao: 'SAE 10W-40', norma: 'API CK-4', capacidade: '42,0 L', intervalo: '80.000 km' },
      { sistema: 'Câmbio PowerShift', especificacao: 'SAE 75W-90', norma: 'API GL-4', capacidade: '15,0 L', intervalo: '120.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 85W-140', norma: 'API GL-5', capacidade: '18,0 L', intervalo: '120.000 km' }
    ],
    filtros: {
      oleo: { original: 'A5411840225', tecfil: 'PEL108', mann: 'HU 12 103 x', mahle: 'OX174D', wega: 'WO-530', fram: 'CH9939' },
      ar: { original: 'A0040943404', tecfil: 'ARS9840', mann: 'C 31 1295', mahle: 'LX1047', wega: 'FAP-2830', fram: 'CA10427' },
      combustivel: { original: 'A0000904251', tecfil: 'PSD980', mann: 'PU 1040 x', mahle: 'KX80D', wega: 'FCI-1620', fram: 'PS10038' },
      cabine: { original: '-', tecfil: '-', mann: 'CU 3461', mahle: '-', wega: '-', fram: '-' }
    }
  },
  'Scania P 250': {
    sistemas: [
      { sistema: 'Motor (DC07)', especificacao: 'SAE 10W-40', norma: 'API CK-4', capacidade: '24,0 L', intervalo: '40.000 km' },
      { sistema: 'Câmbio Opticruise', especificacao: 'SAE 75W-90', norma: 'API GL-4', capacidade: '9,0 L', intervalo: '90.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 85W-140', norma: 'API GL-5', capacidade: '12,0 L', intervalo: '90.000 km' }
    ],
    filtros: {
      oleo: { original: '1742032', tecfil: 'PEL108', mann: 'HU 1075 x', mahle: 'OX174D', wega: 'WO-530', fram: 'CH11430' },
      ar: { original: '1523405', tecfil: 'ARS1183', mann: 'C 27 830', mahle: 'LX1047', wega: 'FAP-2830', fram: 'CA10427' },
      combustivel: { original: '1740947', tecfil: 'PSD980', mann: 'WK 1060 x', mahle: 'KX80D', wega: 'FCI-1620', fram: 'PS10038' },
      cabine: { original: '-', tecfil: '-', mann: '-', mahle: '-', wega: '-', fram: '-' }
    }
  },
  'Scania P 310': {
    sistemas: [
      { sistema: 'Motor (DC09)', especificacao: 'SAE 10W-40', norma: 'API CK-4', capacidade: '28,0 L', intervalo: '50.000 km' },
      { sistema: 'Câmbio Opticruise', especificacao: 'SAE 75W-90', norma: 'API GL-4', capacidade: '11,0 L', intervalo: '100.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 85W-140', norma: 'API GL-5', capacidade: '14,0 L', intervalo: '100.000 km' }
    ],
    filtros: {
      oleo: { original: '1742032', tecfil: 'PEL108', mann: 'HU 1075 x', mahle: 'OX174D', wega: 'WO-530', fram: 'CH11430' },
      ar: { original: '1523405', tecfil: 'ARS1183', mann: 'C 27 830', mahle: 'LX1047', wega: 'FAP-2830', fram: 'CA10427' },
      combustivel: { original: '1740947', tecfil: 'PSD980', mann: 'WK 1060 x', mahle: 'KX80D', wega: 'FCI-1620', fram: 'PS10038' },
      cabine: { original: '-', tecfil: '-', mann: '-', mahle: '-', wega: '-', fram: '-' }
    }
  },
  'Scania G 410': {
    sistemas: [
      { sistema: 'Motor (DC13)', especificacao: 'SAE 10W-40', norma: 'API CK-4', capacidade: '34,0 L', intervalo: '60.000 km' },
      { sistema: 'Câmbio Opticruise', especificacao: 'SAE 75W-90', norma: 'API GL-4', capacidade: '13,0 L', intervalo: '120.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 85W-140', norma: 'API GL-5', capacidade: '16,0 L', intervalo: '120.000 km' }
    ],
    filtros: {
      oleo: { original: '1742032', tecfil: 'PEL108', mann: 'HU 1075 x', mahle: 'OX174D', wega: 'WO-530', fram: 'CH11430' },
      ar: { original: '1523405', tecfil: 'ARS1183', mann: 'C 27 830', mahle: 'LX1047', wega: 'FAP-2830', fram: 'CA10427' },
      combustivel: { original: '1740947', tecfil: 'PSD980', mann: 'WK 1060 x', mahle: 'KX80D', wega: 'FCI-1620', fram: 'PS10038' },
      cabine: { original: '-', tecfil: '-', mann: '-', mahle: '-', wega: '-', fram: '-' }
    }
  },
  'Scania R 450': {
    sistemas: [
      { sistema: 'Motor (DC13)', especificacao: 'SAE 10W-40', norma: 'API CK-4', capacidade: '34,0 L', intervalo: '60.000 km' },
      { sistema: 'Câmbio Opticruise', especificacao: 'SAE 75W-90', norma: 'API GL-4', capacidade: '13,0 L', intervalo: '120.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 85W-140', norma: 'API GL-5', capacidade: '18,0 L', intervalo: '120.000 km' }
    ],
    filtros: {
      oleo: { original: '1742032', tecfil: 'PEL108', mann: 'HU 1075 x', mahle: 'OX174D', wega: 'WO-530', fram: 'CH11430' },
      ar: { original: '1523405', tecfil: 'ARS11841', mann: 'C 27 830', mahle: 'LX1047', wega: 'FAP-2830', fram: 'CA10427' },
      combustivel: { original: '1740947', tecfil: 'PSD980', mann: 'WK 1060 x', mahle: 'KX80D', wega: 'FCI-1620', fram: 'PS10038' },
      cabine: { original: '-', tecfil: '-', mann: '-', mahle: '-', wega: '-', fram: '-' }
    }
  },
  'Scania R 540': {
    sistemas: [
      { sistema: 'Motor (DC13)', especificacao: 'SAE 10W-40', norma: 'API CK-4', capacidade: '34,0 L', intervalo: '60.000 km' },
      { sistema: 'Câmbio Opticruise', especificacao: 'SAE 75W-90', norma: 'API GL-4', capacidade: '13,0 L', intervalo: '120.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 85W-140', norma: 'API GL-5', capacidade: '18,0 L', intervalo: '120.000 km' }
    ],
    filtros: {
      oleo: { original: '1742032', tecfil: 'PEL108', mann: 'HU 1075 x', mahle: 'OX174D', wega: 'WO-530', fram: 'CH11430' },
      ar: { original: '1523405', tecfil: 'ARS11841', mann: 'C 27 830', mahle: 'LX1047', wega: 'FAP-2830', fram: 'CA10427' },
      combustivel: { original: '1740947', tecfil: 'PSD980', mann: 'WK 1060 x', mahle: 'KX80D', wega: 'FCI-1620', fram: 'PS10038' },
      cabine: { original: '-', tecfil: '-', mann: '-', mahle: '-', wega: '-', fram: '-' }
    }
  },
  'Scania S 450': {
    sistemas: [
      { sistema: 'Motor (DC13)', especificacao: 'SAE 10W-40', norma: 'API CK-4', capacidade: '34,0 L', intervalo: '60.000 km' },
      { sistema: 'Câmbio Opticruise', especificacao: 'SAE 75W-90', norma: 'API GL-4', capacidade: '13,0 L', intervalo: '120.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 85W-140', norma: 'API GL-5', capacidade: '18,0 L', intervalo: '120.000 km' }
    ],
    filtros: {
      oleo: { original: '1742032', tecfil: 'PEL108', mann: 'HU 1075 x', mahle: 'OX174D', wega: 'WO-530', fram: 'CH11430' },
      ar: { original: '1523405', tecfil: 'ARS11841', mann: 'C 27 830', mahle: 'LX1047', wega: 'FAP-2830', fram: 'CA10427' },
      combustivel: { original: '1740947', tecfil: 'PSD980', mann: 'WK 1060 x', mahle: 'KX80D', wega: 'FCI-1620', fram: 'PS10038' },
      cabine: { original: '-', tecfil: '-', mann: '-', mahle: '-', wega: '-', fram: '-' }
    }
  },
  'Scania S 540': {
    sistemas: [
      { sistema: 'Motor (DC13)', especificacao: 'SAE 10W-40', norma: 'API CK-4', capacidade: '34,0 L', intervalo: '60.000 km' },
      { sistema: 'Câmbio Opticruise', especificacao: 'SAE 75W-90', norma: 'API GL-4', capacidade: '13,0 L', intervalo: '120.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 85W-140', norma: 'API GL-5', capacidade: '18,0 L', intervalo: '120.000 km' }
    ],
    filtros: {
      oleo: { original: '1742032', tecfil: 'PEL108', mann: 'HU 1075 x', mahle: 'OX174D', wega: 'WO-530', fram: 'CH11430' },
      ar: { original: '1523405', tecfil: 'ARS11841', mann: 'C 27 830', mahle: 'LX1047', wega: 'FAP-2830', fram: 'CA10427' },
      combustivel: { original: '1740947', tecfil: 'PSD980', mann: 'WK 1060 x', mahle: 'KX80D', wega: 'FCI-1620', fram: 'PS10038' },
      cabine: { original: '-', tecfil: '-', mann: '-', mahle: '-', wega: '-', fram: '-' }
    }
  },
  'VW Delivery 9.170': {
    sistemas: [
      { sistema: 'Motor (Cummins ISF 3.8)', especificacao: 'SAE 15W-40', norma: 'API CI-4', capacidade: '11,0 L', intervalo: '30.000 km' },
      { sistema: 'Câmbio Eaton', especificacao: 'SAE 75W-90', norma: 'API GL-4', capacidade: '4,0 L', intervalo: '60.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 85W-140', norma: 'API GL-5', capacidade: '4,5 L', intervalo: '60.000 km' }
    ],
    filtros: {
      oleo: { original: '2R0115561', tecfil: 'PEL106', mann: 'W 950/26', mahle: 'OC505', wega: 'WO-210', fram: 'PH8A' },
      ar: { original: '2T0129620', tecfil: 'ARS5673', mann: 'C 17 308', mahle: 'LX1054', wega: 'FAP-4001', fram: 'CA8558' },
      combustivel: { original: '2R0201511', tecfil: 'PSD980', mann: 'WK 950/21', mahle: 'KC202', wega: 'FCI-1620', fram: 'PS10038' },
      cabine: { original: '-', tecfil: '-', mann: '-', mahle: '-', wega: '-', fram: '-' }
    }
  },
  'VW Delivery 11.180': {
    sistemas: [
      { sistema: 'Motor (Cummins ISF 3.8)', especificacao: 'SAE 15W-40', norma: 'API CI-4', capacidade: '11,0 L', intervalo: '30.000 km' },
      { sistema: 'Câmbio Eaton', especificacao: 'SAE 75W-90', norma: 'API GL-4', capacidade: '4,5 L', intervalo: '60.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 85W-140', norma: 'API GL-5', capacidade: '5,0 L', intervalo: '60.000 km' }
    ],
    filtros: {
      oleo: { original: '2R0115561', tecfil: 'PEL106', mann: 'W 950/26', mahle: 'OC505', wega: 'WO-210', fram: 'PH8A' },
      ar: { original: '2T0129620', tecfil: 'ARS5673', mann: 'C 17 308', mahle: 'LX1054', wega: 'FAP-4001', fram: 'CA8558' },
      combustivel: { original: '2R0201511', tecfil: 'PSD980', mann: 'WK 950/21', mahle: 'KC202', wega: 'FCI-1620', fram: 'PS10038' },
      cabine: { original: '-', tecfil: '-', mann: '-', mahle: '-', wega: '-', fram: '-' }
    }
  },
  'VW Delivery 13.180': {
    sistemas: [
      { sistema: 'Motor (Cummins ISF 3.8)', especificacao: 'SAE 15W-40', norma: 'API CI-4', capacidade: '11,0 L', intervalo: '30.000 km' },
      { sistema: 'Câmbio Eaton', especificacao: 'SAE 75W-90', norma: 'API GL-4', capacidade: '5,0 L', intervalo: '60.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 85W-140', norma: 'API GL-5', capacidade: '6,0 L', intervalo: '60.000 km' }
    ],
    filtros: {
      oleo: { original: '2R0115561', tecfil: 'PEL106', mann: 'W 950/26', mahle: 'OC505', wega: 'WO-210', fram: 'PH8A' },
      ar: { original: '2T0129620', tecfil: 'ARS5673', mann: 'C 17 308', mahle: 'LX1054', wega: 'FAP-4001', fram: 'CA8558' },
      combustivel: { original: '2R0201511', tecfil: 'PSD980', mann: 'WK 950/21', mahle: 'KC202', wega: 'FCI-1620', fram: 'PS10038' },
      cabine: { original: '-', tecfil: '-', mann: '-', mahle: '-', wega: '-', fram: '-' }
    }
  },
  'VW Worker 8.150': {
    sistemas: [
      { sistema: 'Motor (MWM 4.12)', especificacao: 'SAE 15W-40', norma: 'API CI-4', capacidade: '13,0 L', intervalo: '20.000 km' },
      { sistema: 'Câmbio Eaton', especificacao: 'SAE 50', norma: 'API GL-4', capacidade: '4,5 L', intervalo: '50.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 85W-140', norma: 'API GL-5', capacidade: '6,0 L', intervalo: '50.000 km' }
    ],
    filtros: {
      oleo: { original: '2R0115561', tecfil: 'PEL106', mann: 'W 950/26', mahle: 'OC505', wega: 'WO-210', fram: 'PH8A' },
      ar: { original: '2T0129620', tecfil: 'ARL8480', mann: 'C 17 308', mahle: 'LX1054', wega: 'FAP-4001', fram: 'CA8558' },
      combustivel: { original: '2R0201511', tecfil: 'PSD980', mann: 'WK 950/21', mahle: 'KC202', wega: 'FCI-1620', fram: 'PS10038' },
      cabine: { original: '-', tecfil: '-', mann: '-', mahle: '-', wega: '-', fram: '-' }
    }
  },
  'VW Worker 15.180': {
    sistemas: [
      { sistema: 'Motor (MWM 4.12)', especificacao: 'SAE 15W-40', norma: 'API CI-4', capacidade: '13,0 L', intervalo: '20.000 km' },
      { sistema: 'Câmbio Eaton', especificacao: 'SAE 50', norma: 'API GL-4', capacidade: '5,0 L', intervalo: '50.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 85W-140', norma: 'API GL-5', capacidade: '8,0 L', intervalo: '50.000 km' }
    ],
    filtros: {
      oleo: { original: '2R0115561', tecfil: 'PEL106', mann: 'W 950/26', mahle: 'OC505', wega: 'WO-210', fram: 'PH8A' },
      ar: { original: '2T0129620', tecfil: 'ARL8480', mann: 'C 17 308', mahle: 'LX1054', wega: 'FAP-4001', fram: 'CA8558' },
      combustivel: { original: '2R0201511', tecfil: 'PSD980', mann: 'WK 950/21', mahle: 'KC202', wega: 'FCI-1620', fram: 'PS10038' },
      cabine: { original: '-', tecfil: '-', mann: '-', mahle: '-', wega: '-', fram: '-' }
    }
  },
  'VW Worker 17.190': {
    sistemas: [
      { sistema: 'Motor (MWM 6.10)', especificacao: 'SAE 15W-40', norma: 'API CI-4', capacidade: '16,5 L', intervalo: '20.000 km' },
      { sistema: 'Câmbio Eaton', especificacao: 'SAE 50', norma: 'API GL-4', capacidade: '7,0 L', intervalo: '50.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 85W-140', norma: 'API GL-5', capacidade: '9,0 L', intervalo: '50.000 km' }
    ],
    filtros: {
      oleo: { original: '2R0115561', tecfil: 'PEL106', mann: 'W 950/26', mahle: 'OC505', wega: 'WO-210', fram: 'PH8A' },
      ar: { original: '2T0129620', tecfil: 'ARL8480', mann: 'C 17 308', mahle: 'LX1054', wega: 'FAP-4001', fram: 'CA8558' },
      combustivel: { original: '2R0201511', tecfil: 'PSD980', mann: 'WK 950/21', mahle: 'KC202', wega: 'FCI-1620', fram: 'PS10038' },
      cabine: { original: '-', tecfil: '-', mann: '-', mahle: '-', wega: '-', fram: '-' }
    }
  },
  'VW Worker 24.220': {
    sistemas: [
      { sistema: 'Motor (Cummins 6CTAA)', especificacao: 'SAE 15W-40', norma: 'API CI-4', capacidade: '20,0 L', intervalo: '20.000 km' },
      { sistema: 'Câmbio Eaton', especificacao: 'SAE 50', norma: 'API GL-4', capacidade: '9,5 L', intervalo: '50.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 85W-140', norma: 'API GL-5', capacidade: '14,0 L', intervalo: '50.000 km' }
    ],
    filtros: {
      oleo: { original: '2R0115561', tecfil: 'PEL106', mann: 'W 950/26', mahle: 'OC516', wega: 'WO-210', fram: 'PH8A' },
      ar: { original: '2T0129620', tecfil: 'ARL8480', mann: 'C 27 830', mahle: 'LX1047', wega: 'FAP-2830', fram: 'CA10427' },
      combustivel: { original: '2R0201511', tecfil: 'PSD980', mann: 'WK 950/21', mahle: 'KC202', wega: 'FCI-1620', fram: 'PS10038' },
      cabine: { original: '-', tecfil: '-', mann: '-', mahle: '-', wega: '-', fram: '-' }
    }
  },
  'VW Worker 24.250': {
    sistemas: [
      { sistema: 'Motor (Cummins ISC)', especificacao: 'SAE 15W-40', norma: 'API CI-4', capacidade: '19,0 L', intervalo: '20.000 km' },
      { sistema: 'Câmbio Eaton', especificacao: 'SAE 50', norma: 'API GL-4', capacidade: '9,5 L', intervalo: '50.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 85W-140', norma: 'API GL-5', capacidade: '14,0 L', intervalo: '50.000 km' }
    ],
    filtros: {
      oleo: { original: '2R0115561', tecfil: 'PEL106', mann: 'W 950/26', mahle: 'OC516', wega: 'WO-210', fram: 'PH8A' },
      ar: { original: '2T0129620', tecfil: 'ARL8480', mann: 'C 27 830', mahle: 'LX1047', wega: 'FAP-2830', fram: 'CA10427' },
      combustivel: { original: '2R0201511', tecfil: 'PSD980', mann: 'WK 950/21', mahle: 'KC202', wega: 'FCI-1620', fram: 'PS10038' },
      cabine: { original: '-', tecfil: '-', mann: '-', mahle: '-', wega: '-', fram: '-' }
    }
  },
  'VW Worker 26.260': {
    sistemas: [
      { sistema: 'Motor (Cummins ISC)', especificacao: 'SAE 15W-40', norma: 'API CI-4', capacidade: '19,0 L', intervalo: '20.000 km' },
      { sistema: 'Câmbio Eaton', especificacao: 'SAE 50', norma: 'API GL-4', capacidade: '11,0 L', intervalo: '50.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 85W-140', norma: 'API GL-5', capacidade: '16,0 L', intervalo: '50.000 km' }
    ],
    filtros: {
      oleo: { original: '2R0115561', tecfil: 'PEL106', mann: 'W 950/26', mahle: 'OC516', wega: 'WO-210', fram: 'PH8A' },
      ar: { original: '2T0129620', tecfil: 'ARL8480', mann: 'C 27 830', mahle: 'LX1047', wega: 'FAP-2830', fram: 'CA10427' },
      combustivel: { original: '2R0201511', tecfil: 'PSD980', mann: 'WK 950/21', mahle: 'KC202', wega: 'FCI-1620', fram: 'PS10038' },
      cabine: { original: '-', tecfil: '-', mann: '-', mahle: '-', wega: '-', fram: '-' }
    }
  },
  'VW Worker 26.280': {
    sistemas: [
      { sistema: 'Motor (MWM 6.12)', especificacao: 'SAE 15W-40', norma: 'API CI-4', capacidade: '21,0 L', intervalo: '20.000 km' },
      { sistema: 'Câmbio Eaton', especificacao: 'SAE 50', norma: 'API GL-4', capacidade: '11,0 L', intervalo: '50.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 85W-140', norma: 'API GL-5', capacidade: '16,0 L', intervalo: '50.000 km' }
    ],
    filtros: {
      oleo: { original: '2R0115561', tecfil: 'PEL106', mann: 'W 950/26', mahle: 'OC505', wega: 'WO-210', fram: 'PH8A' },
      ar: { original: '2T0129620', tecfil: 'ARL8480', mann: 'C 27 830', mahle: 'LX1047', wega: 'FAP-2830', fram: 'CA10427' },
      combustivel: { original: '2R0201511', tecfil: 'PSD980', mann: 'WK 950/21', mahle: 'KC202', wega: 'FCI-1620', fram: 'PS10038' },
      cabine: { original: '-', tecfil: '-', mann: '-', mahle: '-', wega: '-', fram: '-' }
    }
  },
  'VW Constellation 17.190': {
    sistemas: [
      { sistema: 'Motor (MWM 6.10)', especificacao: 'SAE 15W-40', norma: 'API CI-4', capacidade: '16,5 L', intervalo: '20.000 km' },
      { sistema: 'Câmbio Eaton', especificacao: 'SAE 50', norma: 'API GL-4', capacidade: '7,0 L', intervalo: '50.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 85W-140', norma: 'API GL-5', capacidade: '9,0 L', intervalo: '50.000 km' }
    ],
    filtros: {
      oleo: { original: '2R0115561', tecfil: 'PEL106', mann: 'W 950/26', mahle: 'OC505', wega: 'WO-210', fram: 'PH8A' },
      ar: { original: '2T0129620', tecfil: 'ARL8480', mann: 'C 17 308', mahle: 'LX1054', wega: 'FAP-4001', fram: 'CA8558' },
      combustivel: { original: '2R0201511', tecfil: 'PSD980', mann: 'WK 950/21', mahle: 'KC202', wega: 'FCI-1620', fram: 'PS10038' },
      cabine: { original: '-', tecfil: '-', mann: '-', mahle: '-', wega: '-', fram: '-' }
    }
  },
  'VW Constellation 24.250': {
    sistemas: [
      { sistema: 'Motor (Cummins Interact 6.0)', especificacao: 'SAE 15W-40', norma: 'API CI-4', capacidade: '16,0 L', intervalo: '20.000 km' },
      { sistema: 'Câmbio ZF 9S', especificacao: 'SAE 75W-90', norma: 'API GL-4', capacidade: '9,5 L', intervalo: '40.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 85W-140', norma: 'API GL-5', capacidade: '14,0 L', intervalo: '40.000 km' }
    ],
    filtros: {
      oleo: { original: '2R0115561', tecfil: 'PEL106', mann: 'W 950/26', mahle: 'OC505', wega: 'WO-210', fram: 'PH8A' },
      ar: { original: '2T0129620', tecfil: 'ARL8480', mann: 'C 27 830', mahle: 'LX1047', wega: 'FAP-2830', fram: 'CA10427' },
      combustivel: { original: '2R0201511', tecfil: 'PSD980', mann: 'WK 950/21', mahle: 'KC202', wega: 'FCI-1620', fram: 'PS10038' },
      cabine: { original: '-', tecfil: '-', mann: '-', mahle: '-', wega: '-', fram: '-' }
    }
  },
  'VW Constellation 24.280': {
    sistemas: [
      { sistema: 'Motor (Cummins ISC)', especificacao: 'SAE 15W-40', norma: 'API CI-4', capacidade: '19,0 L', intervalo: '30.000 km' },
      { sistema: 'Câmbio ZF 9S', especificacao: 'SAE 75W-90', norma: 'API GL-4', capacidade: '9,5 L', intervalo: '50.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 85W-140', norma: 'API GL-5', capacidade: '14,0 L', intervalo: '50.000 km' }
    ],
    filtros: {
      oleo: { original: '2R0115561', tecfil: 'PEL106', mann: 'W 950/26', mahle: 'OC516', wega: 'WO-210', fram: 'PH8A' },
      ar: { original: '2T0129620', tecfil: 'ARL8480', mann: 'C 27 830', mahle: 'LX1047', wega: 'FAP-2830', fram: 'CA10427' },
      combustivel: { original: '2R0201511', tecfil: 'PSD980', mann: 'WK 950/21', mahle: 'KC202', wega: 'FCI-1620', fram: 'PS10038' },
      cabine: { original: '-', tecfil: '-', mann: '-', mahle: '-', wega: '-', fram: '-' }
    }
  },
  'VW Constellation 26-280': {
    sistemas: [
      { sistema: 'Motor (MAN D08)', especificacao: 'SAE 15W-40 ou 10W-40', norma: 'API CI-4', capacidade: '27,5 L', intervalo: '30.000 km' },
      { sistema: 'Câmbio ZF 16S', especificacao: 'SAE 75W-90', norma: 'API GL-4', capacidade: '14,0 L', intervalo: '200.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 85W-140', norma: 'API GL-5', capacidade: '19,0 L', intervalo: '60.000 km' }
    ],
    filtros: {
      oleo: { original: '2V0115561', tecfil: 'PEL108', mann: 'HU 934/2 x', mahle: 'OX174D', wega: 'WO-530', fram: 'CH9939' },
      ar: { original: '2V0129620', tecfil: 'ARS5673', mann: 'C 27 830', mahle: 'LX1047', wega: 'FAP-2830', fram: 'CA10427' },
      combustivel: { original: '2V0201511', tecfil: 'PSD980', mann: 'PU 936/1 x', mahle: 'KX80D', wega: 'FCI-1620', fram: 'PS10038' },
      cabine: { original: '-', tecfil: '-', mann: '-', mahle: '-', wega: '-', fram: '-' }
    }
  },
  'VW Constellation 31-320': {
    sistemas: [
      { sistema: 'Motor (Cummins ISC)', especificacao: 'SAE 15W-40', norma: 'API CI-4', capacidade: '18,0 L', intervalo: '20.000 km' },
      { sistema: 'Câmbio ZF', especificacao: 'SAE 75W-90', norma: 'API GL-4', capacidade: '11,0 L', intervalo: '40.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 85W-140', norma: 'API GL-5', capacidade: '18,0 L', intervalo: '40.000 km' }
    ],
    filtros: {
      oleo: { original: '2R0115561', tecfil: 'PEL106', mann: 'W 950/26', mahle: 'OC516', wega: 'WO-210', fram: 'PH8A' },
      ar: { original: '2T0129620', tecfil: 'ARL8480', mann: 'C 27 830', mahle: 'LX1047', wega: 'FAP-2830', fram: 'CA10427' },
      combustivel: { original: '2R0201511', tecfil: 'PSD980', mann: 'WK 950/21', mahle: 'KC202', wega: 'FCI-1620', fram: 'PS10038' },
      cabine: { original: '-', tecfil: '-', mann: '-', mahle: '-', wega: '-', fram: '-' }
    }
  },
  'VW Constellation 33.440': {
    sistemas: [
      { sistema: 'Motor (MAN D26)', especificacao: 'SAE 15W-40', norma: 'API CI-4', capacidade: '35,0 L', intervalo: '50.000 km' },
      { sistema: 'Câmbio ZF Auto', especificacao: 'SAE 75W-90', norma: 'API GL-4', capacidade: '13,0 L', intervalo: '100.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 85W-140', norma: 'API GL-5', capacidade: '18,0 L', intervalo: '100.000 km' }
    ],
    filtros: {
      oleo: { original: '2V0115561', tecfil: 'PEL108', mann: 'HU 12 103 x', mahle: 'OX174D', wega: 'WO-530', fram: 'CH9939' },
      ar: { original: '2V0129620', tecfil: 'ARL8480', mann: 'C 31 1500', mahle: 'LX1047', wega: 'FAP-2830', fram: 'CA10427' },
      combustivel: { original: '2V0201511', tecfil: 'PSD980', mann: 'WK 1060 x', mahle: 'KX80D', wega: 'FCI-1620', fram: 'PS10038' },
      cabine: { original: '-', tecfil: '-', mann: '-', mahle: '-', wega: '-', fram: '-' }
    }
  },
  'Volvo VM 23': {
    sistemas: [
      { sistema: 'Motor (Volvo D8K)', especificacao: 'SAE 15W-40', norma: 'API CI-4', capacidade: '28,0 L', intervalo: '45.000 km' },
      { sistema: 'Câmbio Volvo', especificacao: 'SAE 75W-90', norma: 'API GL-4', capacidade: '11,0 L', intervalo: '90.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 85W-140', norma: 'API GL-5', capacidade: '14,0 L', intervalo: '90.000 km' }
    ],
    filtros: {
      oleo: { original: '21707132', tecfil: 'PEL108', mann: 'HU 1075 x', mahle: 'OX174D', wega: 'WO-530', fram: 'CH11430' },
      ar: { original: '21715815', tecfil: 'ARL8480', mann: 'C 27 830', mahle: 'LX1047', wega: 'FAP-2830', fram: 'CA10427' },
      combustivel: { original: '20998367', tecfil: 'PSD980', mann: 'WK 1060 x', mahle: 'KX80D', wega: 'FCI-1620', fram: 'PS10038' },
      cabine: { original: '-', tecfil: '-', mann: 'CU 27 010', mahle: '-', wega: '-', fram: '-' }
    }
  },
  'Volvo VM 26': {
    sistemas: [
      { sistema: 'Motor (Volvo D8K)', especificacao: 'SAE 15W-40', norma: 'API CI-4', capacidade: '30,0 L', intervalo: '45.000 km' },
      { sistema: 'Câmbio Volvo', especificacao: 'SAE 75W-90', norma: 'API GL-4', capacidade: '12,0 L', intervalo: '90.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 85W-140', norma: 'API GL-5', capacidade: '16,0 L', intervalo: '90.000 km' }
    ],
    filtros: {
      oleo: { original: '21707132', tecfil: 'PEL108', mann: 'HU 1075 x', mahle: 'OX174D', wega: 'WO-530', fram: 'CH11430' },
      ar: { original: '21715815', tecfil: 'ARL8480', mann: 'C 27 830', mahle: 'LX1047', wega: 'FAP-2830', fram: 'CA10427' },
      combustivel: { original: '20998367', tecfil: 'PSD980', mann: 'WK 1060 x', mahle: 'KX80D', wega: 'FCI-1620', fram: 'PS10038' },
      cabine: { original: '-', tecfil: '-', mann: 'CU 27 010', mahle: '-', wega: '-', fram: '-' }
    }
  },
  'Volvo VM 30': {
    sistemas: [
      { sistema: 'Motor (Volvo D8K)', especificacao: 'SAE 15W-40', norma: 'API CI-4', capacidade: '32,0 L', intervalo: '45.000 km' },
      { sistema: 'Câmbio Volvo', especificacao: 'SAE 75W-90', norma: 'API GL-4', capacidade: '12,0 L', intervalo: '90.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 85W-140', norma: 'API GL-5', capacidade: '18,0 L', intervalo: '90.000 km' }
    ],
    filtros: {
      oleo: { original: '21707132', tecfil: 'PEL108', mann: 'HU 1075 x', mahle: 'OX174D', wega: 'WO-530', fram: 'CH11430' },
      ar: { original: '21715815', tecfil: 'ARL8480', mann: 'C 27 830', mahle: 'LX1047', wega: 'FAP-2830', fram: 'CA10427' },
      combustivel: { original: '20998367', tecfil: 'PSD980', mann: 'WK 1060 x', mahle: 'KX80D', wega: 'FCI-1620', fram: 'PS10038' },
      cabine: { original: '-', tecfil: '-', mann: 'CU 27 010', mahle: '-', wega: '-', fram: '-' }
    }
  },
  'Volvo FH 460': {
    sistemas: [
      { sistema: 'Motor (Volvo D13K)', especificacao: 'SAE 10W-40', norma: 'API CK-4', capacidade: '38,0 L', intervalo: '90.000 km' },
      { sistema: 'Câmbio I-Shift', especificacao: 'SAE 75W-90', norma: 'API GL-4', capacidade: '14,0 L', intervalo: '150.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 85W-140', norma: 'API GL-5', capacidade: '18,0 L', intervalo: '150.000 km' }
    ],
    filtros: {
      oleo: { original: '21707132', tecfil: 'PEL108', mann: 'HU 1075 x', mahle: 'OX174D', wega: 'WO-530', fram: 'CH11430' },
      ar: { original: '21715815', tecfil: 'ARS5574', mann: 'C 31 1500', mahle: 'LX1047', wega: 'FAP-2830', fram: 'CA10427' },
      combustivel: { original: '20998367', tecfil: 'PSD980', mann: 'WK 1060 x', mahle: 'KX80D', wega: 'FCI-1620', fram: 'PS10038' },
      cabine: { original: '-', tecfil: '-', mann: 'CU 27 010', mahle: '-', wega: '-', fram: '-' }
    }
  },
  'Volvo FH 540': {
    sistemas: [
      { sistema: 'Motor (Volvo D13K)', especificacao: 'SAE 10W-40', norma: 'API CK-4', capacidade: '38,0 L', intervalo: '90.000 km' },
      { sistema: 'Câmbio I-Shift', especificacao: 'SAE 75W-90', norma: 'API GL-4', capacidade: '14,0 L', intervalo: '150.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 85W-140', norma: 'API GL-5', capacidade: '18,0 L', intervalo: '150.000 km' }
    ],
    filtros: {
      oleo: { original: '21707132', tecfil: 'PEL108', mann: 'HU 1075 x', mahle: 'OX174D', wega: 'WO-530', fram: 'CH11430' },
      ar: { original: '21715815', tecfil: 'ARS5574', mann: 'C 31 1500', mahle: 'LX1047', wega: 'FAP-2830', fram: 'CA10427' },
      combustivel: { original: '20998367', tecfil: 'PSD980', mann: 'WK 1060 x', mahle: 'KX80D', wega: 'FCI-1620', fram: 'PS10038' },
      cabine: { original: '-', tecfil: '-', mann: 'CU 27 010', mahle: '-', wega: '-', fram: '-' }
    }
  },
  'Volvo FMX 460': {
    sistemas: [
      { sistema: 'Motor (Volvo D13K)', especificacao: 'SAE 10W-40', norma: 'API CK-4', capacidade: '38,0 L', intervalo: '90.000 km' },
      { sistema: 'Câmbio I-Shift', especificacao: 'SAE 75W-90', norma: 'API GL-4', capacidade: '14,0 L', intervalo: '150.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 85W-140', norma: 'API GL-5', capacidade: '20,0 L', intervalo: '150.000 km' }
    ],
    filtros: {
      oleo: { original: '21707132', tecfil: 'PEL108', mann: 'HU 1075 x', mahle: 'OX174D', wega: 'WO-530', fram: 'CH11430' },
      ar: { original: '21715815', tecfil: 'ARS5574', mann: 'C 31 1500', mahle: 'LX1047', wega: 'FAP-2830', fram: 'CA10427' },
      combustivel: { original: '20998367', tecfil: 'PSD980', mann: 'WK 1060 x', mahle: 'KX80D', wega: 'FCI-1620', fram: 'PS10038' },
      cabine: { original: '-', tecfil: '-', mann: 'CU 27 010', mahle: '-', wega: '-', fram: '-' }
    }
  },
  'Volvo FMX 540': {
    sistemas: [
      { sistema: 'Motor (Volvo D13K)', especificacao: 'SAE 10W-40', norma: 'API CK-4', capacidade: '38,0 L', intervalo: '90.000 km' },
      { sistema: 'Câmbio I-Shift', especificacao: 'SAE 75W-90', norma: 'API GL-4', capacidade: '14,0 L', intervalo: '150.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 85W-140', norma: 'API GL-5', capacidade: '20,0 L', intervalo: '150.000 km' }
    ],
    filtros: {
      oleo: { original: '21707132', tecfil: 'PEL108', mann: 'HU 1075 x', mahle: 'OX174D', wega: 'WO-530', fram: 'CH11430' },
      ar: { original: '21715815', tecfil: 'ARS5574', mann: 'C 31 1500', mahle: 'LX1047', wega: 'FAP-2830', fram: 'CA10427' },
      combustivel: { original: '20998367', tecfil: 'PSD980', mann: 'WK 1060 x', mahle: 'KX80D', wega: 'FCI-1620', fram: 'PS10038' },
      cabine: { original: '-', tecfil: '-', mann: 'CU 27 010', mahle: '-', wega: '-', fram: '-' }
    }
  },

  // ==================== ÔNIBUS E VANS ====================
  'Fiat Ducato 2.3 Multijet': {
    sistemas: [
      { sistema: 'Motor (FPT F1A)', especificacao: 'SAE 5W-30', norma: 'API SN', capacidade: '4,9 L', intervalo: '20.000 km' },
      { sistema: 'Câmbio Manual', especificacao: 'SAE 75W-80', norma: 'API GL-5', capacidade: '2,7 L', intervalo: '60.000 km' },
      { sistema: 'Direção Hidráulica', especificacao: 'CHF 11S', norma: 'CHF 11S', capacidade: '1,0 L', intervalo: 'Inspeção 10.000 km' }
    ],
    filtros: {
      oleo: { original: '71754238', tecfil: 'PEL106', mann: 'W 9009', mahle: 'OC608', wega: 'WO-130', fram: 'CH9642' },
      ar: { original: '1347585080', tecfil: 'ARL8480', mann: 'C 17 237', mahle: 'LX1751', wega: 'FAP-4025', fram: 'CA10222' },
      combustivel: { original: '77366565', tecfil: 'PSD980', mann: 'PU 723 x', mahle: 'KX208D', wega: 'FCI-1620', fram: 'PS10038' },
      cabine: { original: '1332457080', tecfil: 'ACP928', mann: 'CU 4442', mahle: 'LA 133', wega: 'AKX-1120', fram: 'CF10366' }
    }
  },
  'Fiat Ducato 2.8': {
    sistemas: [
      { sistema: 'Motor (Sofim)', especificacao: 'SAE 15W-40', norma: 'API CI-4', capacidade: '6,3 L', intervalo: '10.000 km' },
      { sistema: 'Câmbio Manual', especificacao: 'SAE 75W-80', norma: 'API GL-5', capacidade: '2,7 L', intervalo: '40.000 km' },
      { sistema: 'Direção Hidráulica', especificacao: 'CHF 11S', norma: 'CHF 11S', capacidade: '0,5 L', intervalo: 'Inspeção 10.000 km' }
    ],
    filtros: {
      oleo: { original: '98401344', tecfil: 'PSL55', mann: 'W 940/25', mahle: 'OC205', wega: 'WO-200', fram: 'PH2870' },
      ar: { original: '1318255080', tecfil: 'ARL8480', mann: 'C 28 132', mahle: 'LX1751', wega: 'FAP-2830', fram: 'CA9926' },
      combustivel: { original: '98401345', tecfil: 'PSD980', mann: 'WK 842/2', mahle: 'KC83', wega: 'FCI-1620', fram: 'P4156' },
      cabine: { original: '-', tecfil: '-', mann: 'CU 4442', mahle: '-', wega: '-', fram: '-' }
    }
  },
  'Iveco - Daily 35S14': {
    sistemas: [
      { sistema: 'Motor (FPT F1C)', especificacao: 'SAE 10W-40', norma: 'API CI-4', capacidade: '6,5 L', intervalo: '20.000 km' },
      { sistema: 'Câmbio Manual', especificacao: 'SAE 75W-80', norma: 'API GL-4', capacidade: '2,2 L', intervalo: '60.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 80W-90', norma: 'API GL-5', capacidade: '2,5 L', intervalo: '50.000 km' },
      { sistema: 'Direção Hidráulica', especificacao: 'ATF Dexron II', norma: 'Dexron II', capacidade: '0,5 L', intervalo: 'Inspeção 10.000 km' }
    ],
    filtros: {
      oleo: { original: '5801382496', tecfil: 'PEL106', mann: 'WP 1144', mahle: 'OC608', wega: 'WOE-610', fram: 'CH9642' },
      ar: { original: '5801382497', tecfil: 'ARL8480', mann: 'C 18 450/2', mahle: 'LX1751', wega: 'FAP-2830', fram: 'CA10427' },
      combustivel: { original: '5801382498', tecfil: 'PSD980', mann: 'WK 842/7', mahle: 'KX208D', wega: 'FCI-1620', fram: 'PS10038' },
      cabine: { original: '-', tecfil: '-', mann: 'CU 2952', mahle: '-', wega: '-', fram: '-' }
    }
  }

}; // fim de especificacoesOleos
