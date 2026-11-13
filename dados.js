/* ==========================================================
   DADOS DO MANUAL AUTOMOTIVO — dados.js (Versão Completa Oficial)
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
      'Ford': ['Ford Cargo 816', 'Ford Cargo 2423', 'Ford - 2629 Bau', 'Ford - 2629 CTA e CTC', 'Ford 1933 Cav Mec'],
      'Mercedes-Benz': ['Mercedes-Benz 2627', 'Mercedes-Benz 915c', 'Mercedes-Benz 1418E', 'Mercedes-Benz AXOR 3344', 'Mercedes-Benz Atego 1725'],
      'Volkswagen': ['VW Work 815', 'VW Work 5-Ton 15-180', 'VW Work 7-Ton Comercial', 'VW Work 24-220', 'VW Work 26-220', 'VW Work 26-260E', 'VW Constellation 24-250', 'VW Constellation 26-280', 'VW Constellation 31-320']
    }
  },
  'onibus-e-vans': {
    titulo: 'Ônibus e Vans',
    marcas: {
      'Ônibus e Vans': ['Fiat Ducato 2.3 Multijet', 'Fiat Ducato 2.8', 'Iveco - Daily 35S14']
    }
  }
};

const especificacoesOleos = {
  // --- VEÍCULOS PASSEIO ---
  'Chevrolet SPIN': {
    motor: { tipo: '5W-30 sintético (dexos1 Gen 2/3)', qtd: '4,2 L (com filtro)', intervalo: '10.000 km ou 1 ano' },
    cambio: { tipo: 'Automático: Dexron VI / Manual: 75W-85', qtd: 'Manual: 1,8 L', intervalo: '60.000 km' },
    diferencial: { tipo: 'Não se aplica (Tração Dianteira)', qtd: '-', intervalo: '-' },
    filtros: {
      oleo: { tecfil: 'PSL55', mann: 'W712/22', wega: 'WO-120', fram: 'PH5949' },
      ar: { tecfil: 'ARL4122', mann: 'C2713', wega: 'FAP-9285', fram: 'CA10668' },
      combustivel: { tecfil: 'GI04/7', mann: 'WK58/3', wega: 'FCI-1630', fram: 'G1025' },
      cabine: { tecfil: 'ACP309', mann: 'CU2433', wega: 'AKX-1999', fram: 'CF11175' }
    }
  },
  'Chevrolet Agile': {
    motor: { tipo: '5W-30 sintético (dexos1)', qtd: '3,5 L', intervalo: '10.000 km' },
    cambio: { tipo: 'Manual: 75W-85', qtd: '1,6 L', intervalo: '60.000 km' },
    diferencial: { tipo: 'Não se aplica', qtd: '-', intervalo: '-' }
  },
  'Chevrolet Montana': {
    motor: { tipo: '5W-30 sintético (dexos1)', qtd: '3,5 L', intervalo: '10.000 km' },
    cambio: { tipo: 'Manual: 75W-85', qtd: '1,6 L', intervalo: '60.000 km' },
    diferencial: { tipo: 'Não se aplica', qtd: '-', intervalo: '-' }
  },
  'Fiat Palio 1.4': {
    motor: { tipo: '5W-30 sintético (API SP)', qtd: '2,7 L', intervalo: '10.000 km' },
    cambio: { tipo: 'Manual: 75W-85', qtd: '2,0 L', intervalo: '60.000 km' },
    diferencial: { tipo: 'Não se aplica', qtd: '-', intervalo: '-' }
  },
  'Fiat Doblo 1.8': {
    motor: { tipo: '5W-30 sintético (API SP)', qtd: '4,5 L', intervalo: '10.000 km' },
    cambio: { tipo: 'Manual: 75W-85', qtd: '2,1 L', intervalo: '60.000 km' },
    diferencial: { tipo: 'Não se aplica', qtd: '-', intervalo: '-' }
  },
  'Fiat Doblo 1.4': {
    motor: { tipo: '5W-30 sintético (API SP)', qtd: '2,7 L', intervalo: '10.000 km' },
    cambio: { tipo: 'Manual: 75W-85', qtd: '2,0 L', intervalo: '60.000 km' },
    diferencial: { tipo: 'Não se aplica', qtd: '-', intervalo: '-' }
  },
  'Fiat Strada 1.4': {
    motor: { tipo: '5W-30 sintético (API SP)', qtd: '2,7 L', intervalo: '10.000 km' },
    cambio: { tipo: 'Manual: 75W-85', qtd: '2,0 L', intervalo: '60.000 km' },
    diferencial: { tipo: 'Não se aplica', qtd: '-', intervalo: '-' }
  },
  'Ford Fiesta 1.0': {
    motor: { tipo: '5W-30 sintético', qtd: '4,1 L', intervalo: '10.000 km' },
    cambio: { tipo: 'Manual: 75W-85', qtd: '2,3 L', intervalo: '60.000 km' },
    diferencial: { tipo: 'Não se aplica', qtd: '-', intervalo: '-' }
  },
  'Ford Fiesta 1.6': {
    motor: { tipo: '5W-30 sintético', qtd: '4,1 L', intervalo: '10.000 km' },
    cambio: { tipo: 'Manual: 75W-85', qtd: '2,3 L', intervalo: '60.000 km' },
    diferencial: { tipo: 'Não se aplica', qtd: '-', intervalo: '-' }
  },
  'Ford Focus 1.6': {
    motor: { tipo: '5W-30 sintético', qtd: '4,1 L', intervalo: '10.000 km' },
    cambio: { tipo: 'Manual: 75W-85', qtd: '2,3 L', intervalo: '60.000 km' },
    diferencial: { tipo: 'Não se aplica', qtd: '-', intervalo: '-' }
  },
  'Ford Focus 2.0': {
    motor: { tipo: '5W-30 sintético', qtd: '4,3 L', intervalo: '10.000 km' },
    cambio: { tipo: 'Manual / Automático', qtd: '2,1 L', intervalo: '60.000 km' },
    diferencial: { tipo: 'Não se aplica', qtd: '-', intervalo: '-' }
  },
  'Nissan Sentra': {
    motor: { tipo: '0W-20 ou 5W-30 sintético', qtd: '4,4 L', intervalo: '10.000 km' },
    cambio: { tipo: 'CVT: NS-3 Fluid', qtd: '~8,0 L', intervalo: '40.000 km' },
    diferencial: { tipo: 'Não se aplica', qtd: '-', intervalo: '-' }
  },
  'Nissan Versa 1.6': {
    motor: { tipo: '0W-20 ou 5W-30 sintético', qtd: '4,4 L', intervalo: '10.000 km' },
    cambio: { tipo: 'Manual / CVT', qtd: '2,4 L', intervalo: '60.000 km' },
    diferencial: { tipo: 'Não se aplica', qtd: '-', intervalo: '-' }
  },
  'Peugeot 408 1.6 THP': {
    motor: { tipo: '0W-30 ou 5W-40 sintético', qtd: '4,25 L', intervalo: '10.000 km' },
    cambio: { tipo: 'Automático AL4 / EAT6', qtd: '~3,0 L', intervalo: '40.000 km' },
    diferencial: { tipo: 'Não se aplica', qtd: '-', intervalo: '-' }
  },
  'Renault Logan - Sandero': {
    motor: { tipo: '5W-40 sintético', qtd: '4,8 L', intervalo: '10.000 km' },
    cambio: { tipo: 'Manual: 75W-80', qtd: '2,5 L', intervalo: '60.000 km' },
    diferencial: { tipo: 'Não se aplica', qtd: '-', intervalo: '-' }
  },
  'VW Kombi 1.4': {
    motor: { tipo: '15W-40 ou 5W-40', qtd: '3,3 L', intervalo: '10.000 km' },
    cambio: { tipo: 'Manual Transaxle', qtd: '3,0 L', intervalo: '40.000 km' },
    diferencial: { tipo: 'Integrado ao câmbio', qtd: 'Integrado', intervalo: '40.000 km' }
  },
  'VW Gol 1.6 G5': {
    motor: { tipo: '5W-40 sintético', qtd: '3,6 L', intervalo: '10.000 km' },
    cambio: { tipo: 'Manual: 75W-80', qtd: '2,0 L', intervalo: '60.000 km' },
    diferencial: { tipo: 'Não se aplica', qtd: '-', intervalo: '-' }
  },
  'VW Gol 1.6 G6': {
    motor: { tipo: '5W-40 sintético', qtd: '3,6 L', intervalo: '10.000 km' },
    cambio: { tipo: 'Manual / I-Motion', qtd: '2,0 L', intervalo: '60.000 km' },
    diferencial: { tipo: 'Não se aplica', qtd: '-', intervalo: '-' }
  },

  // --- VEÍCULOS UTILITÁRIOS & 4X4 ---
  'Agrale Marruá - AM21': {
    motor: { tipo: '15W-40 mineral/semissintético (API CI-4 / ACEA E7 - MWM Sprint / Cummins)', qtd: '5,5 L a 8,5 L', intervalo: '5.000 - 10.000 km' },
    cambio: { tipo: 'Manual (Eaton FS-2305 / FSO-2405): SAE 50 sintético ou 75W-90 GL-4', qtd: '3,2 L', intervalo: '20.000 - 40.000 km' },
    transferencia: { tipo: 'ATF (Óleo para Transmissão Automática) / Conforme Manual', qtd: 'Aprox. 1,2 L a 1,5 L', intervalo: '20.000 - 40.000 km' },
    diferencial: { tipo: '85W-140 ou 80W-90 API GL-5 (Eixos Dana 44 / 60 / 70)', qtd: 'Diant.: ~1,5 L / Tras.: ~2,2 L a 3,0 L', intervalo: '20.000 - 40.000 km' },
    filtros: {
      oleo: { tecfil: 'PEL106', mann: 'HU718/1x', wega: 'WOE-610', fram: 'CH9642' },
      ar: { tecfil: 'AR8480', mann: 'C24150', wega: 'FAP-4001', fram: 'CA8558' },
      combustivel: { tecfil: 'PCD33', mann: 'WK842/2', wega: 'FCI-1620', fram: 'P4156' },
      cabine: { tecfil: 'ACP301', mann: 'CU2842', wega: 'AKX-1120', fram: 'CF1028' }
    }
  },
  'Agrale Marruá - AM20': {
    motor: { tipo: '15W-40 mineral/semissintético (API CI-4 / ACEA E7)', qtd: '5,5 L a 8,5 L', intervalo: '5.000 - 10.000 km' },
    cambio: { tipo: 'Manual: SAE 50 sintético ou 75W-90 GL-4', qtd: '3,2 L', intervalo: '20.000 - 40.000 km' },
    transferencia: { tipo: 'ATF / Conforme Manual', qtd: 'Aprox. 1,2 L a 1,5 L', intervalo: '20.000 - 40.000 km' },
    diferencial: { tipo: '85W-140 ou 80W-90 API GL-5', qtd: 'Diant.: ~1,5 L / Tras.: ~2,2 L a 3,0 L', intervalo: '20.000 - 40.000 km' }
  },
  'Agrale Marruá - AM22': {
    motor: { tipo: '15W-40 mineral/semissintético (API CI-4 / ACEA E7)', qtd: '5,5 L a 8,5 L', intervalo: '5.000 - 10.000 km' },
    cambio: { tipo: 'Manual: SAE 50 sintético ou 75W-90 GL-4', qtd: '3,2 L', intervalo: '20.000 - 40.000 km' },
    transferencia: { tipo: 'ATF / Conforme Manual', qtd: 'Aprox. 1,2 L a 1,5 L', intervalo: '20.000 - 40.000 km' },
    diferencial: { tipo: '85W-140 ou 80W-90 API GL-5', qtd: 'Diant.: ~1,5 L / Tras.: ~2,2 L a 3,0 L', intervalo: '20.000 - 40.000 km' }
  },
  'Agrale Marruá - AM25': {
    motor: { tipo: '15W-40 mineral/semissintético (API CI-4 / ACEA E7)', qtd: '5,5 L a 8,5 L', intervalo: '5.000 - 10.000 km' },
    cambio: { tipo: 'Manual: SAE 50 sintético ou 75W-90 GL-4', qtd: '3,2 L', intervalo: '20.000 - 40.000 km' },
    transferencia: { tipo: 'ATF / Conforme Manual', qtd: 'Aprox. 1,2 L a 1,5 L', intervalo: '20.000 - 40.000 km' },
    diferencial: { tipo: '85W-140 ou 80W-90 API GL-5', qtd: 'Diant.: ~1,5 L / Tras.: ~2,2 L a 3,0 L', intervalo: '20.000 - 40.000 km' }
  },
  'Ford F-250 e F-350': {
    motor: { tipo: '15W-40 ou 5W-40 (Cummins / Power Stroke)', qtd: '10,0 L a 12,0 L', intervalo: '10.000 km' },
    cambio: { tipo: 'Manual Eaton: SAE 50 ou 75W-90 GL-4', qtd: '4,5 L', intervalo: '40.000 km' },
    transferencia: { tipo: 'ATF ou Óleo de Transferência 4x4', qtd: '~1,5 L', intervalo: '40.000 km' },
    diferencial: { tipo: '85W-140 API GL-5', qtd: 'Diant.: 2,0 L / Tras.: 3,5 L', intervalo: '40.000 km' }
  },
  'Ford Ranger Power Stroke': {
    motor: { tipo: '15W-40 CI-4', qtd: '8,2 L', intervalo: '10.000 km' },
    cambio: { tipo: 'Manual: 75W-90 GL-4', qtd: '2,8 L', intervalo: '40.000 km' },
    transferencia: { tipo: 'ATF Dexron III', qtd: '1,4 L', intervalo: '40.000 km' },
    diferencial: { tipo: '80W-90 ou 85W-140 API GL-5', qtd: 'Diant.: 1,2 L / Tras.: 2,4 L', intervalo: '40.000 km' }
  },
  'Ford Ranger 3.0 NGD': {
    motor: { tipo: '15W-40 CI-4', qtd: '8,5 L', intervalo: '10.000 km' },
    cambio: { tipo: 'Manual: 75W-90 GL-4', qtd: '3,0 L', intervalo: '40.000 km' },
    transferencia: { tipo: 'ATF Dexron III', qtd: '1,4 L', intervalo: '40.000 km' },
    diferencial: { tipo: '85W-140 API GL-5', qtd: 'Diant.: 1,3 L / Tras.: 2,6 L', intervalo: '40.000 km' }
  },
  'Ford Ranger 2.2': {
    motor: { tipo: '5W-30 sintético', qtd: '9,5 L', intervalo: '10.000 km' },
    cambio: { tipo: 'Manual / Automático', qtd: '2,8 L', intervalo: '40.000 km' },
    transferencia: { tipo: 'Óleo para Caixa de Transferência 4x4', qtd: '~1,4 L', intervalo: '40.000 km' },
    diferencial: { tipo: '80W-90 GL-5', qtd: 'Diant.: 1,2 L / Tras.: 2,4 L', intervalo: '40.000 km' }
  },
  'Ford Transit': {
    motor: { tipo: '5W-30 ou 10W-40', qtd: '10,0 L', intervalo: '15.000 km' },
    cambio: { tipo: 'Manual: 75W-90 GL-4', qtd: '2,8 L', intervalo: '50.000 km' },
    diferencial: { tipo: '80W-90 API GL-5', qtd: '2,2 L', intervalo: '50.000 km' }
  },
  'Mitsubishi L200 2.5': {
    motor: { tipo: '15W-40 CI-4', qtd: '7,0 L', intervalo: '10.000 km' },
    cambio: { tipo: 'Manual: 75W-90 GL-4', qtd: '2,2 L', intervalo: '40.000 km' },
    transferencia: { tipo: '75W-90 GL-4 ou ATF', qtd: '2,2 L', intervalo: '40.000 km' },
    diferencial: { tipo: '80W-90 ou 85W-140 API GL-5', qtd: 'Diant.: 1,2 L / Tras.: 2,6 L', intervalo: '40.000 km' }
  },
  'Mitsubishi Triton 3.2': {
    motor: { tipo: '15W-40 CI-4 / CJ-4', qtd: '9,3 L', intervalo: '10.000 km' },
    cambio: { tipo: 'Manual / Automático', qtd: '~3,0 L', intervalo: '40.000 km' },
    transferencia: { tipo: '75W-90 GL-4 ou ATF', qtd: '2,4 L', intervalo: '40.000 km' },
    diferencial: { tipo: '80W-90 API GL-5', qtd: 'Diant.: 1,2 L / Tras.: 2,8 L', intervalo: '40.000 km' }
  },
  'Mitsubishi Triton 2.4': {
    motor: { tipo: '5W-30 ou 15W-40', qtd: '8,4 L', intervalo: '10.000 km' },
    cambio: { tipo: 'Manual / Automático', qtd: '2,8 L', intervalo: '40.000 km' },
    transferencia: { tipo: 'Óleo Sintético Transferência GL-4', qtd: '2,4 L', intervalo: '40.000 km' },
    diferencial: { tipo: '80W-90 API GL-5', qtd: 'Diant.: 1,2 L / Tras.: 2,8 L', intervalo: '40.000 km' }
  },
  'Nissan Frontier 2.5': {
    motor: { tipo: '15W-40 ou 5W-30', qtd: '6,9 L', intervalo: '10.000 km' },
    cambio: { tipo: 'Manual / Automático', qtd: 'Manual ~3,8 L', intervalo: '40.000 km' },
    transferencia: { tipo: 'ATF Nissan Matic D (Dexron III)', qtd: '2,0 L', intervalo: '40.000 km' },
    diferencial: { tipo: '80W-90 API GL-5', qtd: 'Diant.: 0,85 L / Tras.: 1,6 L a 2,0 L', intervalo: '40.000 km' }
  },
  'Nissan Frontier 2.3': {
    motor: { tipo: '5W-30 sintético', qtd: '7,4 L', intervalo: '10.000 km' },
    cambio: { tipo: 'Manual / Automático 7 marchas', qtd: 'Manual 2,2 L', intervalo: '40.000 km' },
    transferencia: { tipo: 'ATF / Óleo Específico Transferência', qtd: '1,5 L', intervalo: '40.000 km' },
    diferencial: { tipo: '80W-90 API GL-5', qtd: 'Diant.: 1,3 L / Tras.: 2,2 L', intervalo: '40.000 km' }
  },
  'Toyota Hilux 3.0': {
    motor: { tipo: '15W-40 CI-4 ou 5W-40 sintético', qtd: '7,0 L', intervalo: '10.000 km' },
    cambio: { tipo: 'Manual: 75W-90 GL-4/GL-5', qtd: '2,2 L', intervalo: '40.000 km' },
    transferencia: { tipo: '75W-90 GL-4', qtd: '1,0 L', intervalo: '40.000 km' },
    diferencial: { tipo: '80W-90 ou 85W-140 API GL-5', qtd: 'Diant.: 1,4 L / Tras.: 3,5 L', intervalo: '40.000 km' }
  },
  'Toyota Hilux 2.8 - Nova': {
    motor: { tipo: '0W-20 ou 5W-30 sintético', qtd: '7,5 L', intervalo: '10.000 km' },
    cambio: { tipo: 'Manual / Automático 6 marchas', qtd: '2,2 L', intervalo: '40.000 km' },
    transferencia: { tipo: '75W-90 GL-4', qtd: '1,0 L', intervalo: '40.000 km' },
    diferencial: { tipo: '80W-90 ou 85W-140 API GL-5', qtd: 'Diant.: 1,4 L / Tras.: 3,5 L', intervalo: '40.000 km' }
  },

  // --- CAMINHÕES ---
  'Ford Cargo 816': {
    motor: { tipo: '15W-40 CI-4 (Cummins ISF 4.5)', qtd: '11,0 L', intervalo: '10.000 km' },
    cambio: { tipo: 'Manual Eaton FSO-4505: SAE 75W-90 sintético', qtd: '3,8 L', intervalo: '40.000 km' },
    diferencial: { tipo: '85W-140 API GL-5', qtd: '3,0 L', intervalo: '40.000 km' }
  },
  'Ford Cargo 2423': {
    motor: { tipo: '15W-40 CI-4', qtd: '15,0 L', intervalo: '20.000 km' },
    cambio: { tipo: 'Manual Eaton: SAE 50 ou 80W-90', qtd: '9,5 L', intervalo: '40.000 km' },
    diferencial: { tipo: '85W-140 API GL-5', qtd: '16,0 L', intervalo: '40.000 km' }
  },
  'Ford - 2629 Bau': {
    motor: { tipo: '15W-40 CI-4', qtd: '18,0 L', intervalo: '20.000 km' },
    cambio: { tipo: 'Manual Eaton / Fuller', qtd: '11,0 L', intervalo: '40.000 km' },
    diferencial: { tipo: '85W-140 API GL-5 (Reduzido)', qtd: '18,0 L', intervalo: '40.000 km' }
  },
  'Ford - 2629 CTA e CTC': {
    motor: { tipo: '15W-40 CI-4', qtd: '18,0 L', intervalo: '20.000 km' },
    cambio: { tipo: 'Manual Eaton / Fuller', qtd: '11,0 L', intervalo: '40.000 km' },
    diferencial: { tipo: '85W-140 API GL-5', qtd: '18,0 L', intervalo: '40.000 km' }
  },
  'Ford 1933 Cav Mec': {
    motor: { tipo: '15W-40 CI-4 / CJ-4', qtd: '22,0 L', intervalo: '20.000 km' },
    cambio: { tipo: 'Manual Fuller / Automatizado', qtd: '12,5 L', intervalo: '60.000 km' },
    diferencial: { tipo: '85W-140 API GL-5', qtd: '16,0 L', intervalo: '50.000 km' }
  },
  'Mercedes-Benz 2627': {
    motor: { tipo: '15W-40 MB 228.3 / 228.5', qtd: '28,0 L', intervalo: '20.000 km' },
    cambio: { tipo: 'Manual MB', qtd: '11,0 L', intervalo: '50.000 km' },
    diferencial: { tipo: '85W-140 API GL-5', qtd: '15,0 L', intervalo: '50.000 km' }
  },
  'Mercedes-Benz 915c': {
    motor: { tipo: '15W-40 MB 228.3', qtd: '15,0 L', intervalo: '15.000 km' },
    cambio: { tipo: 'Manual MB G-60', qtd: '5,5 L', intervalo: '40.000 km' },
    diferencial: { tipo: '85W-140 API GL-5', qtd: '4,5 L', intervalo: '40.000 km' }
  },
  'Mercedes-Benz 1418E': {
    motor: { tipo: '15W-40 MB 228.3', qtd: '17,0 L', intervalo: '20.000 km' },
    cambio: { tipo: 'Manual MB', qtd: '8,0 L', intervalo: '40.000 km' },
    diferencial: { tipo: '85W-140 API GL-5', qtd: '10,0 L', intervalo: '40.000 km' }
  },
  'Mercedes-Benz AXOR 3344': {
    motor: { tipo: '15W-40 ou 10W-40 MB 228.5', qtd: '36,0 L', intervalo: '30.000 km' },
    cambio: { tipo: 'Manual / Automatizado MB G-240', qtd: '13,0 L', intervalo: '60.000 km' },
    transferencia: { tipo: 'Óleo Específico MB para Caixa Auxiliar / Transferência Tração Total', qtd: '8,0 L', intervalo: '50.000 km' },
    diferencial: { tipo: '85W-140 API GL-5 (Cubos redutores e carcaça)', qtd: '25,0 L', intervalo: '50.000 km' }
  },
  'Mercedes-Benz Atego 1725': {
    motor: { tipo: '15W-40 MB 228.3', qtd: '18,0 L', intervalo: '20.000 km' },
    cambio: { tipo: 'Manual MB', qtd: '9,0 L', intervalo: '40.000 km' },
    diferencial: { tipo: '85W-140 API GL-5', qtd: '12,0 L', intervalo: '40.000 km' }
  },
  'VW Work 815': {
    motor: { tipo: '15W-40 CI-4 (Cummins)', qtd: '11,0 L', intervalo: '10.000 km' },
    cambio: { tipo: 'Manual Eaton', qtd: '3,8 L', intervalo: '40.000 km' },
    diferencial: { tipo: '85W-140 API GL-5', qtd: '3,0 L', intervalo: '40.000 km' }
  },
  'VW Work 5-Ton 15-180': {
    motor: { tipo: '15W-40 CI-4', qtd: '13,0 L', intervalo: '15.000 km' },
    cambio: { tipo: 'Manual Eaton', qtd: '5,5 L', intervalo: '40.000 km' },
    diferencial: { tipo: '85W-140 API GL-5', qtd: '6,0 L', intervalo: '40.000 km' }
  },
  'VW Work 7-Ton Comercial': {
    motor: { tipo: '15W-40 CI-4', qtd: '15,0 L', intervalo: '15.000 km' },
    cambio: { tipo: 'Manual Eaton / ZF', qtd: '7,0 L', intervalo: '40.000 km' },
    diferencial: { tipo: '85W-140 API GL-5', qtd: '8,0 L', intervalo: '40.000 km' }
  },
  'VW Work 24-220': {
    motor: { tipo: '15W-40 CI-4', qtd: '15,0 L', intervalo: '15.000 km' },
    cambio: { tipo: 'Manual Eaton', qtd: '9,5 L', intervalo: '40.000 km' },
    diferencial: { tipo: '85W-140 API GL-5', qtd: '14,0 L', intervalo: '40.000 km' }
  },
  'VW Work 26-220': {
    motor: { tipo: '15W-40 CI-4', qtd: '15,0 L', intervalo: '15.000 km' },
    cambio: { tipo: 'Manual Eaton', qtd: '9,5 L', intervalo: '40.000 km' },
    diferencial: { tipo: '85W-140 API GL-5', qtd: '16,0 L', intervalo: '40.000 km' }
  },
  'VW Work 26-260E': {
    motor: { tipo: '15W-40 CI-4', qtd: '16,0 L', intervalo: '20.000 km' },
    cambio: { tipo: 'Manual ZF', qtd: '10,0 L', intervalo: '40.000 km' },
    diferencial: { tipo: '85W-140 API GL-5', qtd: '16,0 L', intervalo: '40.000 km' }
  },
  'VW Constellation 24-250': {
    motor: { tipo: '15W-40 CI-4 (Cummins Interact 6.0)', qtd: '16,0 L', intervalo: '20.000 km' },
    cambio: { tipo: 'Manual ZF 9S', qtd: '9,5 L', intervalo: '40.000 km' },
    diferencial: { tipo: '85W-140 API GL-5', qtd: '14,0 L', intervalo: '40.000 km' }
  },
  'VW Constellation 26-280': {
    motor: { tipo: '15W-40 ou 10W-40 (MAN D08)', qtd: '23,0 L', intervalo: '30.000 km' },
    cambio: { tipo: 'Manual ZF 16S', qtd: '11,0 L', intervalo: '50.000 km' },
    diferencial: { tipo: '85W-140 API GL-5', qtd: '16,0 L', intervalo: '50.000 km' }
  },
  'VW Constellation 31-320': {
    motor: { tipo: '15W-40 CI-4 (Cummins ISC)', qtd: '18,0 L', intervalo: '20.000 km' },
    cambio: { tipo: 'Manual ZF', qtd: '11,0 L', intervalo: '40.000 km' },
    diferencial: { tipo: '85W-140 API GL-5', qtd: '18,0 L', intervalo: '40.000 km' }
  },

  // --- ÔNIBUS & VANS ---
  'Fiat Ducato 2.3 Multijet': {
    motor: { tipo: '5W-30 sintético (Fiat 9.55535-S1)', qtd: '4,9 L', intervalo: '20.000 km' },
    cambio: { tipo: 'Manual: 75W-80 GL-5', qtd: '2,7 L', intervalo: '60.000 km' },
    diferencial: { tipo: 'Não se aplica', qtd: '-', intervalo: '-' }
  },
  'Fiat Ducato 2.8': {
    motor: { tipo: '15W-40 mineral ou semissintético', qtd: '6,3 L', intervalo: '10.000 km' },
    cambio: { tipo: 'Manual: 75W-80 ou 80W-90', qtd: '2,7 L', intervalo: '40.000 km' },
    diferencial: { tipo: 'Não se aplica', qtd: '-', intervalo: '-' }
  },
  'Iveco - Daily 35S14': {
    motor: { tipo: '10W-40 ou 5W-30 sintético', qtd: '6,5 L', intervalo: '20.000 km' },
    cambio: { tipo: 'Manual ZF 6S', qtd: '2,2 L', intervalo: '60.000 km' },
    diferencial: { tipo: '80W-90 ou 85W-140 API GL-5', qtd: '2,5 L', intervalo: '50.000 km' }
  }
};
