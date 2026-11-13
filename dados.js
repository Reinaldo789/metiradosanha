
/* ==========================================================
   DADOS DO MANUAL AUTOMOTIVO — dados.js
   Atualizado com a base completa de 56 veículos e filtros
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
    motor: { tipo: '5W-30 sintético (dexos1 Gen 2/3)', qtd: '4,2 L (com filtro)', intervalo: '10.000 km ou 1 ano (5.000 km severo)' },
    cambio: { tipo: 'Automático: Dexron VI / Manual: 75W-85 ou 75W-90 GL-4', qtd: 'Automático: ~8,5 L (total) / Manual: 1,8 L', intervalo: 'Automático: 60.000 - 80.000 km / Manual: 60.000 km' },
    diferencial: { tipo: 'Não se aplica (Tração Dianteira - integrado ao câmbio)', qtd: '-', intervalo: '-' },
    filtros: {
      oleo: { original: '-', tecfil: 'PSL619 (TM3)', mann: 'W712/22', wega: 'WO130', mahle: 'OC90', fram: '-' },
      combustivel: { original: '-', tecfil: 'GI04/7', mann: 'WK58', wega: 'FCI1660', mahle: 'KL582', fram: '-' },
      ar: { original: '-', tecfil: 'ARL8829', mann: 'C24028/1', wega: 'FAP4870', mahle: 'LX3547', fram: '-' }
    }
  },
  'Chevrolet Agile': {
    motor: { tipo: '10W-40 semissintético ou 5W-30 sintético (API SN)', qtd: '3,5 L (com filtro)', intervalo: '10.000 km ou 1 ano (5.000 km severo)' },
    cambio: { tipo: 'Manual: 75W-85 ou 75W-90 GL-4', qtd: '1,6 L a 1,8 L', intervalo: '60.000 - 80.000 km' },
    diferencial: { tipo: 'Não se aplica (Tração Dianteira - integrado ao câmbio)', qtd: '-', intervalo: '-' },
    filtros: {
      oleo: { original: '-', tecfil: 'PSL619 (TM3)', mann: 'W712/22', wega: 'WO130', mahle: 'OC90', fram: '-' },
      combustivel: { original: '-', tecfil: 'GI04/7', mann: 'WK58', wega: 'FCI1660', mahle: 'KL582', fram: '-' },
      ar: { original: '-', tecfil: 'ARL8832', mann: 'C2256', wega: 'FAP3290', mahle: 'LX3026', fram: '-' }
    }
  },
  'Chevrolet Montana': {
    motor: { tipo: '5W-30 sintético (1.4 Econoflex) / 15W-40 ou 20W-50 (1.8 antigas)', qtd: '3,5 L (com filtro)', intervalo: '10.000 km (5.000 km severo)' },
    cambio: { tipo: 'Manual: 75W-85 ou 75W-90 GL-4 (Easytronic: fluido específico + atuador)', qtd: '1,6 L a 1,8 L', intervalo: '60.000 - 80.000 km' },
    diferencial: { tipo: 'Não se aplica (Tração Dianteira - integrado ao câmbio)', qtd: '-', intervalo: '-' },
    filtros: {
      oleo: { original: '-', tecfil: 'PSL619 (TM3)', mann: 'W712/22', wega: 'WO130', mahle: 'OC90', fram: '-' },
      combustivel: { original: '-', tecfil: 'GI04/7', mann: 'WK58', wega: 'FCI1660', mahle: 'KL582', fram: '-' },
      ar: { original: '-', tecfil: 'ARL8832 (Nova) / ARL8825 (Antiga)', mann: 'C2256 / C2672', wega: 'FAP3290 / FAP4872', mahle: 'LX3026 / LX1571', fram: '-' }
    }
  },
  'Fiat Palio 1.4': {
    motor: { tipo: '15W-40 semissintético (Fire) ou 5W-30 sintético (Fire Evo)', qtd: '2,7 L a 3,2 L (com filtro)', intervalo: '10.000 km (7.500 km severo)' },
    cambio: { tipo: 'Manual: 75W-90 ou 80W API GL-4', qtd: '2,0 L', intervalo: '60.000 km' },
    diferencial: { tipo: 'Não se aplica (Tração Dianteira - integrado ao câmbio)', qtd: '-', intervalo: '-' },
    filtros: {
      oleo: { original: '-', tecfil: 'PSL55 (TM5)', mann: 'W610/3', wega: 'WO120', mahle: 'OC506', fram: '-' },
      combustivel: { original: '-', tecfil: 'GI04/7', mann: 'WK58', wega: 'FCI1660', mahle: 'KL582', fram: '-' },
      ar: { original: '-', tecfil: 'ARL4150 (Fire) / ARL4152 (Evo)', mann: 'C2585 / C29003/1', wega: 'FAP3287 / FAP3289', mahle: 'LX1791 / LX3435', fram: '-' }
    }
  },
  'Fiat Doblo 1.8': {
    motor: { tipo: '15W-40 semissintético (GM/E.torQ) ou 5W-30 sintético (E.torQ mais novos)', qtd: '3,5 L (GM) / 4,3 L (E.torQ)', intervalo: '10.000 km (7.500 km severo)' },
    cambio: { tipo: 'Manual: 75W-90 API GL-4', qtd: '2,0 L', intervalo: '60.000 km' },
    diferencial: { tipo: 'Não se aplica (Tração Dianteira - integrado ao câmbio)', qtd: '-', intervalo: '-' },
    filtros: {
      oleo: { original: '-', tecfil: 'PSL619 (GM) / PEL108 (E.torQ)', mann: 'W712/22 / HU816/2x', wega: 'WO130 / WOE313', mahle: 'OC90 / OX1018D', fram: '-' },
      combustivel: { original: '-', tecfil: 'GI04/7', mann: 'WK58', wega: 'FCI1660', mahle: 'KL582', fram: '-' },
      ar: { original: '-', tecfil: 'ARL4148', mann: 'C25116', wega: 'FAP4874', mahle: 'LX1599', fram: '-' }
    }
  },
  'Fiat Doblo 1.4': {
    motor: { tipo: '15W-40 semissintético (API SL/SN)', qtd: '2,7 L a 3,2 L (com filtro)', intervalo: '10.000 km (7.500 km severo)' },
    cambio: { tipo: 'Manual: 75W-90 API GL-4', qtd: '2,0 L', intervalo: '60.000 km' },
    diferencial: { tipo: 'Não se aplica (Tração Dianteira - integrado ao câmbio)', qtd: '-', intervalo: '-' },
    filtros: {
      oleo: { original: '-', tecfil: 'PSL55 (TM5)', mann: 'W610/3', wega: 'WO120', mahle: 'OC506', fram: '-' },
      combustivel: { original: '-', tecfil: 'GI04/7', mann: 'WK58', wega: 'FCI1660', mahle: 'KL582', fram: '-' },
      ar: { original: '-', tecfil: 'ARL4148', mann: 'C25116', wega: 'FAP4874', mahle: 'LX1599', fram: '-' }
    }
  },
  'Fiat Strada 1.4': {
    motor: { tipo: '15W-40 semissintético (Fire) ou 5W-30 sintético (Fire Evo)', qtd: '2,7 L a 3,2 L (com filtro)', intervalo: '10.000 km (7.500 km severo)' },
    cambio: { tipo: 'Manual: 75W-90 API GL-4', qtd: '1,8 L a 2,0 L', intervalo: '60.000 km' },
    diferencial: { tipo: 'Não se aplica (Tração Dianteira - integrado ao câmbio)', qtd: '-', intervalo: '-' },
    filtros: {
      oleo: { original: '-', tecfil: 'PSL55 (TM5)', mann: 'W610/3', wega: 'WO120', mahle: 'OC506', fram: '-' },
      combustivel: { original: '-', tecfil: 'GI04/7', mann: 'WK58', wega: 'FCI1660', mahle: 'KL582', fram: '-' },
      ar: { original: '-', tecfil: 'ARL4150 (Fire) / ARL4152 (Evo)', mann: 'C2585 / C29003/1', wega: 'FAP3287 / FAP3289', mahle: 'LX1791 / LX3435', fram: '-' }
    }
  },
  'Ford Fiesta 1.0': {
    motor: { tipo: '5W-30 sintético (Zetec Rocam - norma WSS-M2C913)', qtd: '4,1 L a 4,3 L (com filtro)', intervalo: '10.000 km ou 1 ano' },
    cambio: { tipo: 'Manual: 75W-90 sintético API GL-4 (caixa IB5)', qtd: '2,1 L', intervalo: '60.000 km (uso severo)' },
    diferencial: { tipo: 'Não se aplica (Tração Dianteira - integrado ao câmbio)', qtd: '-', intervalo: '-' },
    filtros: {
      oleo: { original: '-', tecfil: 'PSL148 (TM1)', mann: 'W719/27', wega: 'WO150', mahle: 'OC266', fram: '-' },
      combustivel: { original: '-', tecfil: 'GI60/7', mann: 'WK613/3', wega: 'FCI1694', mahle: 'KL476', fram: '-' },
      ar: { original: '-', tecfil: 'ARL960', mann: 'C2244', wega: 'FAP4878', mahle: 'LX1597', fram: '-' }
    }
  },
  'Ford Fiesta 1.6': {
    motor: { tipo: '5W-30 sintético (Zetec Rocam / Sigma - norma WSS-M2C913)', qtd: '4,1 L (com filtro)', intervalo: '10.000 km ou 1 ano' },
    cambio: { tipo: 'Manual: 75W-90 sintético API GL-4 (Powershift: fluido DCT)', qtd: 'Manual: 2,1 L / Powershift: 1,75 L', intervalo: '60.000 km' },
    diferencial: { tipo: 'Não se aplica (Tração Dianteira - integrado ao câmbio)', qtd: '-', intervalo: '-' },
    filtros: {
      oleo: { original: '-', tecfil: 'PSL148 (Rocam) / PSL34M (Sigma)', mann: 'W719/27 / W7013/1', wega: 'WO150 / JFO0312', mahle: 'OC266 / OC1051', fram: '-' },
      combustivel: { original: '-', tecfil: 'GI60/7 (Rocam) / GI56/7 (New)', mann: 'WK613/3 / WK6014', wega: 'FCI1694 / FCI1111', mahle: 'KL476 / KL842', fram: '-' },
      ar: { original: '-', tecfil: 'ARL960 (Rocam) / ARL9607 (New)', mann: 'C2244 / C22015', wega: 'FAP4878 / FAP9056', mahle: 'LX1597 / LX3158', fram: '-' }
    }
  },
  'Ford Focus 1.6': {
    motor: { tipo: '5W-30 sintético (Zetec Rocam / Sigma)', qtd: '4,1 L (com filtro)', intervalo: '10.000 km ou 1 ano' },
    cambio: { tipo: 'Manual: 75W-90 sintético API GL-4 (Powershift: fluido DCT)', qtd: 'Manual: 2,1 L / Powershift: 1,75 L', intervalo: '60.000 km' },
    diferencial: { tipo: 'Não se aplica (Tração Dianteira - integrado ao câmbio)', qtd: '-', intervalo: '-' },
    filtros: {
      oleo: { original: '-', tecfil: 'PSL148 (Rocam) / PSL34M (Sigma)', mann: 'W719/27 / W7013/1', wega: 'WO150 / JFO0312', mahle: 'OC266 / OC1051', fram: '-' },
      combustivel: { original: '-', tecfil: 'GI60/7 (até 08) / GI56/7 (09+)', mann: 'WK613/3 / WK6014', wega: 'FCI1694 / FCI1111', mahle: 'KL476 / KL842', fram: '-' },
      ar: { original: '-', tecfil: 'ARL9604 (até 08) / ARS5196 (09+)', mann: 'C28122 / C16134/1', wega: 'FAP4879 / WAP168', mahle: 'LX869 / LX1780/3', fram: '-' }
    }
  },
  'Ford Focus 2.0': {
    motor: { tipo: '5W-30 sintético (Duratec)', qtd: '4,3 L (com filtro)', intervalo: '10.000 km ou 1 ano' },
    cambio: { tipo: 'Manual: 75W-90 GL-4 / Automático 4F27E: Mercon LV / Powershift: DCT', qtd: 'Manual: 1,9 L / Auto: ~6,7 L / DCT: 1,75 L', intervalo: '60.000 km' },
    diferencial: { tipo: 'Não se aplica (Tração Dianteira - integrado ao câmbio)', qtd: '-', intervalo: '-' },
    filtros: {
      oleo: { original: '-', tecfil: 'PSL34M (PSL145)', mann: 'W7013/1', wega: 'JFO0312', mahle: 'OC1051', fram: '-' },
      combustivel: { original: '-', tecfil: 'GI60/7 (até 08) / GI56/7 (09+)', mann: 'WK613/3 / WK6014', wega: 'FCI1694 / FCI1111', mahle: 'KL476 / KL842', fram: '-' },
      ar: { original: '-', tecfil: 'ARL9604 (até 08) / ARS5196 (09+)', mann: 'C28122 / C16134/1', wega: 'FAP4879 / WAP168', mahle: 'LX869 / LX1780/3', fram: '-' }
    }
  },
  'Nissan Sentra': {
    motor: { tipo: '5W-30 sintético (API SN/SP)', qtd: '4,4 L (com filtro)', intervalo: '10.000 km' },
    cambio: { tipo: 'CVT: Fluido Nissan NS-2 (até 2013) ou NS-3 (2014+)', qtd: '~7,5 L a 8,2 L (total)', intervalo: '40.000 - 60.000 km' },
    diferencial: { tipo: 'Não se aplica (Tração Dianteira - integrado ao câmbio)', qtd: '-', intervalo: '-' },
    filtros: {
      oleo: { original: '-', tecfil: 'PSL129 (PSL132)', mann: 'W67/1', wega: 'JFO0198', mahle: 'OC1052', fram: '-' },
      combustivel: { original: '-', tecfil: 'GI50/7 (2014+ externo)', mann: 'WK58/3', wega: 'FCI1630', mahle: 'KL583', fram: '-' },
      ar: { original: '-', tecfil: 'ARL1654', mann: 'C2433/2', wega: 'JFA0138', mahle: 'LX1983', fram: '-' }
    }
  },
  'Nissan Versa 1.6': {
    motor: { tipo: '5W-30 sintético (API SN/SP)', qtd: '4,0 L a 4,3 L (com filtro)', intervalo: '10.000 km' },
    cambio: { tipo: 'CVT: Fluido Nissan NS-3 / Manual: 75W-80 ou 75W-85 GL-4', qtd: 'CVT: ~6,9 L / Manual: 2,3 L', intervalo: 'CVT: 40.000 - 60.000 km / Manual: 60.000 km' },
    diferencial: { tipo: 'Não se aplica (Tração Dianteira - integrado ao câmbio)', qtd: '-', intervalo: '-' },
    filtros: {
      oleo: { original: '-', tecfil: 'PSL129 (PSL132)', mann: 'W67/1', wega: 'JFO0198', mahle: 'OC1052', fram: '-' },
      combustivel: { original: '-', tecfil: 'GI50/7', mann: 'WK58/3', wega: 'FCI1630', mahle: 'KL583', fram: '-' },
      ar: { original: '-', tecfil: 'ARL1656', mann: 'C24012', wega: 'JFA0151', mahle: 'LX3549', fram: '-' }
    }
  },
  'Peugeot 408 1.6 THP': {
    motor: { tipo: '5W-30 ou 0W-30 sintético (norma PSA B71 2290 / 2312)', qtd: '4,25 L (com filtro)', intervalo: '10.000 km (7.500 km severo)' },
    cambio: { tipo: 'Automático Aisin AT6 (6 marchas): Fluido ATF AW-1 / JWS 3324', qtd: '~7,0 L (total) / ~3,5 L (troca parcial)', intervalo: '60.000 km' },
    diferencial: { tipo: 'Não se aplica (Tração Dianteira - integrado ao câmbio)', qtd: '-', intervalo: '-' },
    filtros: {
      oleo: { original: '-', tecfil: 'PEL674 (Refil)', mann: 'HU711/51x', wega: 'WOE710', mahle: 'OX339/2D', fram: '-' },
      combustivel: { original: '-', tecfil: 'GI50/7', mann: 'WK58/3', wega: 'FCI1630', mahle: 'KL583', fram: '-' },
      ar: { original: '-', tecfil: 'ARL5047', mann: 'C36003', wega: 'FAP3295', mahle: 'LX2681', fram: '-' }
    }
  },
  'Renault Logan - Sandero': {
    motor: { tipo: '10W-40 semissintético ou 5W-30 sintético (norma RN0700/0710)', qtd: '1.6 8V: 3,3 L / 1.6 16V (K4M/SCe): 4,2 L a 4,8 L', intervalo: '10.000 km' },
    cambio: { tipo: 'Manual: 75W-80 API GL-4+ (Elf Tranself NFJ/NFP)', qtd: '2,8 L a 3,1 L', intervalo: '60.000 km (verificação/troca)' },
    diferencial: { tipo: 'Não se aplica (Tração Dianteira - integrado ao câmbio)', qtd: '-', intervalo: '-' },
    filtros: {
      oleo: { original: '-', tecfil: 'PSL77 (K4M) / PSL129 (SCe)', mann: 'W75/3 / W67/1', wega: 'WO200 / JFO0198', mahle: 'OC467 / OC1052', fram: '-' },
      combustivel: { original: '-', tecfil: 'GI50/7', mann: 'WK58/3', wega: 'FCI1630', mahle: 'KL583', fram: '-' },
      ar: { original: '-', tecfil: 'AR7705 (8V) / ARL5142 (16V) / ARL5149 (SCe)', mann: 'C2680 / C3366 / C27030', wega: 'FAP2828 / FAP4877 / FAP9072', mahle: 'LX1066 / LX773 / LX3750', fram: '-' }
    }
  },
  'VW Kombi 1.4': {
    motor: { tipo: '5W-40 sintético ou 10W-40 semissintético (norma VW 502.00)', qtd: '4,0 L (com filtro)', intervalo: '10.000 km (5.000 km severo)' },
    cambio: { tipo: 'Manual: 75W-90 API GL-4', qtd: '2,5 L', intervalo: '60.000 km' },
    diferencial: { tipo: 'Não se aplica (Tração Traseira com transeixo integrado ao câmbio)', qtd: '-', intervalo: '-' },
    filtros: {
      oleo: { original: '-', tecfil: 'PSL560', mann: 'W712/53', wega: 'WO340', mahle: 'OC250', fram: '-' },
      combustivel: { original: '-', tecfil: 'GI04/7', mann: 'WK58', wega: 'FCI1660', mahle: 'KL582', fram: '-' },
      ar: { original: '-', tecfil: 'ARS2868', mann: 'C14179', wega: 'WAP160', mahle: 'LX1594', fram: '-' }
    }
  },
  'VW Gol 1.6 G5': {
    motor: { tipo: '5W-40 sintético (norma VW 502.00 - recomendado) ou 5W-30', qtd: '3,5 L (com filtro)', intervalo: '10.000 km (5.000 km severo)' },
    cambio: { tipo: 'Manual: 75W-90 API GL-4 (norma VW G 052 512)', qtd: '1,9 L a 2,0 L', intervalo: '60.000 - 80.000 km' },
    diferencial: { tipo: 'Não se aplica (Tração Dianteira - integrado ao câmbio)', qtd: '-', intervalo: '-' },
    filtros: {
      oleo: { original: '-', tecfil: 'PSL560', mann: 'W712/53', wega: 'WO340', mahle: 'OC250', fram: '-' },
      combustivel: { original: '-', tecfil: 'GI50/7 (ou GI04/7)', mann: 'WK58/3', wega: 'FCI1630', mahle: 'KL583', fram: '-' },
      ar: { original: '-', tecfil: 'ARL6095', mann: 'C2295/4', wega: 'FAP4054', mahle: 'LX1592', fram: '-' }
    }
  },
  'VW Gol 1.6 G6': {
    motor: { tipo: '5W-40 sintético (norma VW 502.00) ou 5W-30 (VW 508.88)', qtd: '3,5 L (EA111) / 4,0 L (EA211 MSI)', intervalo: '10.000 km (5.000 km severo)' },
    cambio: { tipo: 'Manual: 75W-90 API GL-4 (norma VW G 052 512)', qtd: '1,9 L a 2,0 L', intervalo: '60.000 - 80.000 km' },
    diferencial: { tipo: 'Não se aplica (Tração Dianteira - integrado ao câmbio)', qtd: '-', intervalo: '-' },
    filtros: {
      oleo: { original: '-', tecfil: 'PSL560 (8V) / PSL545 (16V MSI)', mann: 'W712/53 / W712/95', wega: 'WO340 / WO345', mahle: 'OC250 / OC593/4', fram: '-' },
      combustivel: { original: '-', tecfil: 'GI50/7', mann: 'WK58/3', wega: 'FCI1630', mahle: 'KL583', fram: '-' },
      ar: { original: '-', tecfil: 'ARL6095 (8V) / ARL6071 (16V)', mann: 'C2295/4 / C27009', wega: 'FAP4054 / FAP9054', mahle: 'LX1592 / LX3534', fram: '-' }
    }
  },

  // --- VEÍCULOS UTILITÁRIOS ---
  'Agrale Marruá - AM21': {
    motor: { tipo: '15W-40 mineral/semissintético (API CI-4 / ACEA E7 - MWM Sprint / Cummins)', qtd: '5,5 L a 8,5 L (conforme motorização)', intervalo: '5.000 - 10.000 km (uso severo/militar)' },
    cambio: { tipo: 'Manual (Eaton FS-2305 / FSO-2405): SAE 50 sintético ou 75W-90 GL-4', qtd: '3,2 L (Câmbio) + 1,5 L a 2,2 L (Caixa Transf. Agrale/BorgWarner)', intervalo: '20.000 - 40.000 km' },
    diferencial: { tipo: '85W-140 ou 80W-90 API GL-5 (Eixos Dana 44 / 60 / 70)', qtd: 'Diant.: ~1,5 L / Tras.: ~2,2 L a 3,0 L', intervalo: '20.000 - 40.000 km' },
    filtros: {
      oleo: { original: '90.009.020.005', tecfil: 'PSL340 (MWM) / PSL283 (Cummins)', mann: 'W940/34 / W950/26', wega: 'WO510 / WO612', mahle: 'OC311 / OC505', fram: 'CH9646' },
      combustivel: { original: '90.009.021.003', tecfil: 'PSC411 + Sep. PSD450/1', mann: 'WK842/2 + WK950/21', wega: 'FCD2066 + FCD0766', mahle: 'KC80 + KC200', fram: 'P10260' },
      ar: { original: '90.009.022.001', tecfil: 'ARS7109 ou AP2655 + AS820', mann: 'C15300 ou C17308 + CF1000', wega: 'WAP274 ou WAP183 + WAP183S', mahle: 'LX964 ou LX1054 + LXS44', fram: 'CA9566' }
    }
  },
  'Agrale Marruá - AM20': {
    motor: { tipo: '15W-40 mineral/semissintético (API CI-4 / ACEA E7)', qtd: '5,5 L a 8,5 L (conforme motorização)', intervalo: '5.000 - 10.000 km (uso severo)' },
    cambio: { tipo: 'Manual (Eaton FSO-2405): SAE 50 sintético ou 75W-90 GL-4', qtd: '3,2 L (Câmbio) + ~1,8 L (Caixa de Transferência)', intervalo: '20.000 - 40.000 km' },
    diferencial: { tipo: '85W-140 ou 80W-90 API GL-5', qtd: 'Diant.: ~1,5 L / Tras.: ~2,5 L', intervalo: '20.000 - 40.000 km' },
    filtros: {
      oleo: { original: '-', tecfil: 'PSL340 (MWM) / PSL283 (Cummins)', mann: 'W940/34 / W950/26', wega: 'WO510 / WO612', mahle: 'OC311 / OC505', fram: '-' },
      combustivel: { original: '-', tecfil: 'PSC411 + Sep. PSD450/1', mann: 'WK842/2 + WK950/21', wega: 'FCD2066 + FCD0766', mahle: 'KC80 + KC200', fram: '-' },
      ar: { original: '-', tecfil: 'ARS7109 ou AP2655 + AS820', mann: 'C15300 ou C17308 + CF1000', wega: 'WAP274 ou WAP183 + WAP183S', mahle: 'LX964 ou LX1054 + LXS44', fram: '-' }
    }
  },
  'Agrale Marruá - AM22': {
    motor: { tipo: '15W-40 mineral/semissintético (API CI-4 / ACEA E7)', qtd: '5,5 L a 8,5 L (conforme motorização)', intervalo: '5.000 - 10.000 km (uso severo)' },
    cambio: { tipo: 'Manual (Eaton FSO-2405): SAE 50 sintético ou 75W-90 GL-4', qtd: '3,2 L (Câmbio) + ~1,8 L (Caixa de Transferência)', intervalo: '20.000 - 40.000 km' },
    diferencial: { tipo: '85W-140 ou 80W-90 API GL-5', qtd: 'Diant.: ~1,5 L / Tras.: ~2,5 L', intervalo: '20.000 - 40.000 km' },
    filtros: {
      oleo: { original: '-', tecfil: 'PSL340 (MWM) / PSL283 (Cummins)', mann: 'W940/34 / W950/26', wega: 'WO510 / WO612', mahle: 'OC311 / OC505', fram: '-' },
      combustivel: { original: '-', tecfil: 'PSC411 + Sep. PSD450/1', mann: 'WK842/2 + WK950/21', wega: 'FCD2066 + FCD0766', mahle: 'KC80 + KC200', fram: '-' },
      ar: { original: '-', tecfil: 'ARS7109 ou AP2655 + AS820', mann: 'C15300 ou C17308 + CF1000', wega: 'WAP274 ou WAP183 + WAP183S', mahle: 'LX964 ou LX1054 + LXS44', fram: '-' }
    }
  },
  'Agrale Marruá - AM25': {
    motor: { tipo: '15W-40 mineral/semissintético (API CI-4 / ACEA E7)', qtd: '8,5 L (MWM Sprint 4.07 / Cummins ISF)', intervalo: '5.000 - 10.000 km (uso severo)' },
    cambio: { tipo: 'Manual (Eaton FSO-2405): SAE 50 sintético ou 75W-90 GL-4', qtd: '3,2 L (Câmbio) + ~1,8 L (Caixa de Transferência)', intervalo: '20.000 - 40.000 km' },
    diferencial: { tipo: '85W-140 ou 80W-90 API GL-5', qtd: 'Diant.: ~1,5 L / Tras.: ~3,0 L', intervalo: '20.000 - 40.000 km' },
    filtros: {
      oleo: { original: '-', tecfil: 'PSL340 (MWM) / PSL283 (Cummins)', mann: 'W940/34 / W950/26', wega: 'WO510 / WO612', mahle: 'OC311 / OC505', fram: '-' },
      combustivel: { original: '-', tecfil: 'PSC411 + Sep. PSD450/1', mann: 'WK842/2 + WK950/21', wega: 'FCD2066 + FCD0766', mahle: 'KC80 + KC200', fram: '-' },
      ar: { original: '-', tecfil: 'ARS7109 ou AP2655 + AS820', mann: 'C15300 ou C17308 + CF1000', wega: 'WAP274 ou WAP183 + WAP183S', mahle: 'LX964 ou LX1054 + LXS44', fram: '-' }
    }
  },
  'Ford F-250 e F-350': {
    motor: { tipo: '15W-40 (API CI-4/CJ-4 - MWM Sprint 6.07 / Cummins 3.9)', qtd: '8,5 L (MWM 6 cil.) / 11,0 L (Cummins)', intervalo: '10.000 km (5.000 km severo)' },
    cambio: { tipo: 'Manual (ZF S5-420 / Eaton FSO-2405): ATF Mercon ou 75W-90 GL-4 / Auto: Mercon V', qtd: 'Manual: 3,2 L a 3,4 L / Automático: ~16,6 L', intervalo: 'Manual: 60.000 km / Auto: 50.000 km' },
    diferencial: { tipo: 'Traseiro: 80W-90 ou 85W-140 API GL-5 (com aditivo LSD se blocante)', qtd: '3,3 L (Dana 60/70) / 4,0 L (Dana M80)', intervalo: '40.000 km' },
    filtros: {
      oleo: { original: '-', tecfil: 'PSL335 (MWM) / PSL280 (Cummins)', mann: 'W950/18 / W950/16', wega: 'WO470 / WO610', mahle: 'OC413 / OC272', fram: '-' },
      combustivel: { original: '-', tecfil: 'PSC498 (MWM) / PSC72/2 (Cummins)', mann: 'WK842/13 / WK723', wega: 'FCD2062 / FCD2041', mahle: 'KC119 / KC18', fram: '-' },
      ar: { original: '-', tecfil: 'AP7998 + AS800 (Sec.)', mann: 'C17308 + CF1000', wega: 'WAP183 + WAP183S', mahle: 'LX1054 + LXS44', fram: '-' }
    }
  },
  'Ford Ranger Power Stroke': {
    motor: { tipo: '15W-40 (API CH-4/CI-4 - Motor International 2.8 Power Stroke)', qtd: '7,0 L (com filtro)', intervalo: '7.500 - 10.000 km' },
    cambio: { tipo: 'Manual (Eaton FSO-2405): ATF Mercon / Caixa Transf. (4x4): ATF Mercon', qtd: 'Câmbio: 2,6 L / Caixa Transf.: 1,2 L', intervalo: '60.000 km' },
    diferencial: { tipo: 'Dianteiro: 80W-90 GL-5 / Traseiro: 80W-90 ou 85W-140 GL-5 (Trac-Lok LSD)', qtd: 'Diant.: 1,3 L / Tras.: 2,6 L a 3,4 L', intervalo: '40.000 km' },
    filtros: {
      oleo: { original: '-', tecfil: 'PSL900 (ou PSL142)', mann: 'W930/20', wega: 'WO460', mahle: 'OC23', fram: '-' },
      combustivel: { original: '-', tecfil: 'PSC498', mann: 'WK842/13', wega: 'FCD2062', mahle: 'KC119', fram: '-' },
      ar: { original: '-', tecfil: 'ARS7992', mann: 'C13114/4', wega: 'WAP275', mahle: 'LX1596', fram: '-' }
    }
  },
  'Ford Ranger 3.0 NGD': {
    motor: { tipo: '15W-40 (API CI-4 ou superior - MWM International 3.0)', qtd: '9,0 L (com filtro)', intervalo: '10.000 km (5.000 km severo)' },
    cambio: { tipo: 'Manual (Eaton FSO-2405): ATF Mercon / Caixa Transf. (4x4): ATF Mercon', qtd: 'Câmbio: 2,8 L / Caixa Transf.: 1,2 L', intervalo: '50.000 km' },
    diferencial: { tipo: 'Dianteiro: 80W-90 GL-5 / Traseiro: 80W-90 ou 85W-140 GL-5 (LSD)', qtd: 'Diant.: 1,4 L / Tras.: 2,6 L (Dana 44.3)', intervalo: '40.000 km' },
    filtros: {
      oleo: { original: '-', tecfil: 'PSL541', mann: 'W730/3', wega: 'WO480', mahle: 'OC504', fram: '-' },
      combustivel: { original: '-', tecfil: 'PSC410/1 (ou PC947)', mann: 'WK842/22', wega: 'FCD0760', mahle: 'KC249', fram: '-' },
      ar: { original: '-', tecfil: 'ARS7992', mann: 'C13114/4', wega: 'WAP275', mahle: 'LX1596', fram: '-' }
    }
  },
  'Ford Ranger 2.2': {
    motor: { tipo: '5W-30 sintético (norma WSS-M2C913-C/D - Duratorq TDCi)', qtd: '8,6 L (com filtro)', intervalo: '10.000 km' },
    cambio: { tipo: 'Manual (MT82): 75W-90 GL-4 (WSS-M2C200-D2) / Auto (6R80): Mercon LV', qtd: 'Manual: 2,7 L / Auto: ~10,5 L (Transf. 4x4: 1,2 L)', intervalo: '60.000 km' },
    diferencial: { tipo: 'Dianteiro: 80W-90 GL-5 / Traseiro: 75W-90 ou 80W-90 GL-5', qtd: 'Diant.: 1,2 L / Tras.: 2,9 L', intervalo: '40.000 km' },
    filtros: {
      oleo: { original: '-', tecfil: 'PEL309 (Refil)', mann: 'HU7002z', wega: 'WOE311', mahle: 'OX339/2D', fram: '-' },
      combustivel: { original: '-', tecfil: 'PC951 (Refil)', mann: 'PU835x', wega: 'FCD0782', mahle: 'KX338/26D', fram: '-' },
      ar: { original: '-', tecfil: 'ARS7994', mann: 'C22024', wega: 'JFA0324', mahle: 'LX3511', fram: '-' }
    }
  },
  'Ford Transit': {
    motor: { tipo: '5W-30 sintético (norma WSS-M2C913-C/D - Duratorq 2.2 / 2.4)', qtd: '6,5 L a 9,8 L (conforme geração)', intervalo: '15.000 km (10.000 km severo)' },
    cambio: { tipo: 'Manual (MT82 / VMT6): 75W-90 sintético API GL-4 (WSS-M2C200-D2)', qtd: '2,2 L a 3,7 L', intervalo: '60.000 km' },
    diferencial: { tipo: 'Tração Traseira (modelos antigos): 75W-90 GL-5 / Dianteira (novos): integrado', qtd: 'Traseiro: ~2,2 L', intervalo: '60.000 km' },
    filtros: {
      oleo: { original: '-', tecfil: 'PEL110 (2.4) / PEL309 (2.2)', mann: 'HU920x / HU7002z', wega: 'WOE310 / WOE311', mahle: 'OX193D / OX339/2D', fram: '-' },
      combustivel: { original: '-', tecfil: 'PSC992 (ou PSC997)', mann: 'WK8157', wega: 'FCD2093', mahle: 'KC204', fram: '-' },
      ar: { original: '-', tecfil: 'ARL9608', mann: 'C28100', wega: 'FAP3291', mahle: 'LX935', fram: '-' }
    }
  },
  'Mitsubishi L200 2.5': {
    motor: { tipo: '15W-40 (API CI-4 - 4D56 HPE / Outdoor)', qtd: '6,5 L (com filtro)', intervalo: '7.500 - 10.000 km' },
    cambio: { tipo: 'Manual: 75W-85 ou 75W-90 API GL-4 (Transf.: 75W-90 GL-4)', qtd: 'Câmbio: 2,3 L / Caixa Transf.: 2,2 L', intervalo: '40.000 km' },
    diferencial: { tipo: 'Dianteiro: 80W-90 GL-5 / Traseiro: 80W-90 ou 75W-90 GL-5 LSD', qtd: 'Diant.: 1,2 L / Tras.: 2,1 L a 2,6 L', intervalo: '40.000 km' },
    filtros: {
      oleo: { original: '-', tecfil: 'PSL325', mann: 'WP928/80', wega: 'JFO0502', mahle: 'OC274', fram: '-' },
      combustivel: { original: '-', tecfil: 'PSC498 (ou PSC994)', mann: 'WK842/13', wega: 'JFC502', mahle: 'KC119', fram: '-' },
      ar: { original: '-', tecfil: 'ARS7109', mann: 'C15300', wega: 'JFA0500', mahle: 'LX964', fram: '-' }
    }
  },
  'Mitsubishi Triton 3.2': {
    motor: { tipo: '15W-40 ou 5W-30 (API CI-4/CJ-4 - 4M41)', qtd: '7,5 L a 8,2 L (com filtro)', intervalo: '10.000 km' },
    cambio: { tipo: 'Automático: ATF SP-III / Manual: 75W-85 GL-4 (Transf.: 75W-90 GL-4)', qtd: 'Auto: ~8,5 L / Manual: 2,5 L / Transf.: 2,3 L', intervalo: '60.000 km' },
    diferencial: { tipo: 'Dianteiro: 80W-90 GL-5 / Traseiro: 80W-90 ou 75W-90 GL-5 LSD', qtd: 'Diant.: 1,2 L / Tras.: 2,3 L a 2,6 L', intervalo: '40.000 km' },
    filtros: {
      oleo: { original: '-', tecfil: 'PSL330 (ou PSL325)', mann: 'WP1045', wega: 'JFO0505', mahle: 'OC274', fram: '-' },
      combustivel: { original: '-', tecfil: 'PEC3025 (Refil) / PSC994', mann: 'PU835x', wega: 'JFC504', mahle: 'KX265D', fram: '-' },
      ar: { original: '-', tecfil: 'ARL4135 (ou ARL4139)', mann: 'C24011', wega: 'JFA0506', mahle: 'LX2616', fram: '-' }
    }
  },
  'Mitsubishi Triton 2.4': {
    motor: { tipo: '5W-30 sintético (ACEA C2/C3 - MIVEC 4N15 com DPF)', qtd: '8,4 L (com filtro)', intervalo: '10.000 km' },
    cambio: { tipo: 'Automático: ATF SP-III ou DiaQueen ATF-MA1 / Manual: 75W-80 GL-4', qtd: 'Auto: ~8,0 L / Manual: 2,5 L / Transf.: 2,5 L', intervalo: '60.000 km' },
    diferencial: { tipo: 'Dianteiro: 80W-90 GL-5 / Traseiro: 80W-90 ou 75W-90 GL-5 LSD', qtd: 'Diant.: 1,2 L / Tras.: 2,3 L', intervalo: '40.000 km' },
    filtros: {
      oleo: { original: '-', tecfil: 'PSL156 (ou PSL330)', mann: 'W811/80', wega: 'JFO0507', mahle: 'OC1183', fram: '-' },
      combustivel: { original: '-', tecfil: 'PEC3039 (Refil)', mann: 'PU8021', wega: 'JFC509', mahle: 'KX495D', fram: '-' },
      ar: { original: '-', tecfil: 'ARL4139', mann: 'C24011', wega: 'JFA0511', mahle: 'LX2616', fram: '-' }
    }
  },
  'Nissan Frontier 2.5': {
    motor: { tipo: '15W-40 (sem DPF) ou 5W-30 ACEA C3 (com DPF - Motor YD25)', qtd: '6,9 L (com filtro)', intervalo: '10.000 km' },
    cambio: { tipo: 'Manual: 75W-85 GL-4 / Automático: Nissan Matic S (Transf.: Matic D)', qtd: 'Manual: ~3,8 L / Auto: ~9,5 L / Transf.: 2,0 L', intervalo: '40.000 - 60.000 km' },
    diferencial: { tipo: 'Dianteiro (4x4): 80W-90 GL-5 / Traseiro: 80W-90 GL-5 (LSD se aplicável)', qtd: 'Diant.: 0,85 L / Tras.: 1,6 L (C200) a 2,0 L (M226)', intervalo: '40.000 km' },
    filtros: {
      oleo: { original: '-', tecfil: 'PSL158', mann: 'W610/3 (ou W811/80)', wega: 'JFO0104', mahle: 'OC217/6', fram: '-' },
      combustivel: { original: '-', tecfil: 'PSC993 (ou PSC497)', mann: 'WK920/6', wega: 'JFC105', mahle: 'KC236', fram: '-' },
      ar: { original: '-', tecfil: 'ARL1655', mann: 'C27003', wega: 'JFA0137', mahle: 'LX1995', fram: '-' }
    }
  },
  'Nissan Frontier 2.3': {
    motor: { tipo: '5W-30 sintético (ACEA C3/C4 - Bi-Turbo YS23 com DPF)', qtd: '6,9 L a 7,3 L (com filtro)', intervalo: '10.000 km' },
    cambio: { tipo: 'Manual: 75W-80 GL-4 / Automático (7M): Nissan Matic S (Transf.: Matic D)', qtd: 'Manual: ~3,5 L / Auto: ~9,2 L / Transf.: 1,5 L', intervalo: '40.000 - 60.000 km' },
    diferencial: { tipo: 'Dianteiro (4x4): 80W-90 GL-5 / Traseiro: 75W-90 ou 80W-90 GL-5', qtd: 'Diant.: 0,85 L / Tras.: 1,6 L a 2,1 L', intervalo: '40.000 km' },
    filtros: {
      oleo: { original: '-', tecfil: 'PEL121 (Refil)', mann: 'HU6015z', wega: 'WOE715', mahle: 'OX968D', fram: '-' },
      combustivel: { original: '-', tecfil: 'PC960 (ou PSC999)', mann: 'PU8014', wega: 'JFC112', mahle: 'KX387/1D', fram: '-' },
      ar: { original: '-', tecfil: 'ARL1657', mann: 'C25040', wega: 'JFA0156', mahle: 'LX4233', fram: '-' }
    }
  },
  'Toyota Hilux 3.0': {
    motor: { tipo: '15W-40 ou 5W-30 (API CI-4/CJ-4 - 1KD-FTV)', qtd: '6,9 L (com filtro) / 7,4 L (seco)', intervalo: '10.000 km (5.000 km severo)' },
    cambio: { tipo: 'Manual: 75W-90 GL-4 / Automático: ATF WS (Transf.: 75W-90 GL-4)', qtd: 'Manual: 2,2 L / Auto: ~10,0 L / Transf.: 1,0 L', intervalo: '60.000 km' },
    diferencial: { tipo: 'Dianteiro: 75W-90 GL-5 / Traseiro: 75W-90 ou 80W-90 GL-5 LSD', qtd: 'Diant.: 1,5 L / Tras.: 2,4 L a 3,4 L', intervalo: '40.000 km' },
    filtros: {
      oleo: { original: '-', tecfil: 'PSL127', mann: 'W712/83', wega: 'JFO0211', mahle: 'OC988', fram: '-' },
      combustivel: { original: '-', tecfil: 'PEC3022 (até 11) / PEC3035 (12+)', mann: 'PU835x', wega: 'JFC208 / JFC216', mahle: 'KX265D / KX492D', fram: '-' },
      ar: { original: '-', tecfil: 'ARS3002 (até 11) / ARS3004 (12+)', mann: 'C23107', wega: 'JFA0279 / JFA0294', mahle: 'LX1618', fram: '-' }
    }
  },
  'Toyota Hilux 2.8 - Nova': {
    motor: { tipo: '5W-30 sintético (ACEA C2/C3 - 1GD-FTV com DPF)', qtd: '7,5 L (com filtro) / 8,0 L (seco)', intervalo: '10.000 km (5.000 km severo)' },
    cambio: { tipo: 'Automático (6M): ATF WS / Manual: 75W-90 GL-4 (Transf.: 75W-90 GL-4)', qtd: 'Auto: 9,3 L / Manual: 2,4 L / Transf.: 1,0 L', intervalo: '60.000 km' },
    diferencial: { tipo: 'Dianteiro: 75W-85 ou 75W-90 GL-5 / Traseiro: 75W-85 ou 75W-90 GL-5 LSD', qtd: 'Diant.: 1,4 L / Tras.: 3,0 L', intervalo: '30.000 - 40.000 km' },
    filtros: {
      oleo: { original: '-', tecfil: 'PSL127', mann: 'W712/83', wega: 'JFO0211', mahle: 'OC988', fram: '-' },
      combustivel: { original: '-', tecfil: 'PEC3042 (Refil)', mann: 'PU8028', wega: 'JFC222', mahle: 'KX531D', fram: '-' },
      ar: { original: '-', tecfil: 'ARL2205', mann: 'C32011', wega: 'JFA0299', mahle: 'LX4377', fram: '-' }
    }
  },

  // --- CAMINHÕES ---
  'Ford Cargo 816': {
    motor: { tipo: '15W-40 (API CI-4/CK-4 - Cummins ISB 4.5)', qtd: '13,0 L (com filtro)', intervalo: '30.000 - 40.000 km (ou 15.000 km severo)' },
    cambio: { tipo: 'Manual (Eaton FSO-4505): SAE 40 ou 50 sintético (Eaton PS-386) / 80W-90 GL-4', qtd: '4,5 L', intervalo: '100.000 km' },
    diferencial: { tipo: 'Traseiro: 85W-140 API GL-5', qtd: '7,5 L a 9,0 L', intervalo: '40.000 a 60.000 km' },
    filtros: {
      oleo: { original: '-', tecfil: 'PSL283', mann: 'W950/26', wega: 'WO612', mahle: 'OC505', fram: '-' },
      combustivel: { original: '-', tecfil: 'PSC493 + Sep. PSD950/1', mann: 'WK950/30 + WK950/27x', wega: 'FCD2073 + FCD0773', mahle: 'KC202 + KC295', fram: '-' },
      ar: { original: '-', tecfil: 'AP7998 + AS800 (Sec.)', mann: 'C17308 + CF1000', wega: 'WAP183 + WAP183S', mahle: 'LX1054 + LXS44', fram: '-' }
    }
  },
  'Ford Cargo 2423': {
    motor: { tipo: '15W-40 (API CI-4/CK-4 - Cummins ISB 6.7)', qtd: '19,5 L (com filtro)', intervalo: '40.000 km (ou 20.000 km severo)' },
    cambio: { tipo: 'Manual (Eaton FS-6406 / RT-8908LL): SAE 50 sintético (Eaton PS-386)', qtd: '9,0 L a 13,0 L (conforme caixa)', intervalo: '100.000 km' },
    diferencial: { tipo: 'Traseiro (Meritor MS-23-245): 85W-140 API GL-5', qtd: '15,0 L a 18,0 L', intervalo: '40.000 a 60.000 km' },
    filtros: {
      oleo: { original: '-', tecfil: 'PSL283', mann: 'W950/26', wega: 'WO612', mahle: 'OC505', fram: '-' },
      combustivel: { original: '-', tecfil: 'PSC493 + Sep. PSD950/1', mann: 'WK950/30 + WK950/27x', wega: 'FCD2073 + FCD0773', mahle: 'KC202 + KC295', fram: '-' },
      ar: { original: '-', tecfil: 'ARS9839 + ASR839 (Sec.)', mann: 'C27830 + CF1600', wega: 'WAP115 + WAP115S', mahle: 'LX1047 + LXS251', fram: '-' }
    }
  },
  'Ford - 2629 Bau': {
    motor: { tipo: '15W-40 (API CI-4/CK-4 - Cummins ISB 6.7)', qtd: '19,5 L (com filtro)', intervalo: '40.000 km (ou 20.000 km severo)' },
    cambio: { tipo: 'Manual (Eaton RT-8908LL / FS-6406): SAE 50 sintético (Eaton PS-386)', qtd: '11,0 L a 13,0 L', intervalo: '100.000 km' },
    diferencial: { tipo: 'Traseiro (Tração 6x4 - 2 eixos): 85W-140 API GL-5', qtd: '1º Eixo: ~16,0 L / 2º Eixo: ~14,0 L', intervalo: '40.000 a 60.000 km' },
    filtros: {
      oleo: { original: '-', tecfil: 'PSL283', mann: 'W950/26', wega: 'WO612', mahle: 'OC505', fram: '-' },
      combustivel: { original: '-', tecfil: 'PSC493 + Sep. PSD950/1', mann: 'WK950/30 + WK950/27x', wega: 'FCD2073 + FCD0773', mahle: 'KC202 + KC295', fram: '-' },
      ar: { original: '-', tecfil: 'ARS9839 + ASR839 (Sec.)', mann: 'C27830 + CF1600', wega: 'WAP115 + WAP115S', mahle: 'LX1047 + LXS251', fram: '-' }
    }
  },
  'Ford - 2629 CTA e CTC': {
    motor: { tipo: '15W-40 (API CI-4/CK-4 - Cummins ISB 6.7)', qtd: '19,5 L (com filtro)', intervalo: '40.000 km (ou 20.000 km severo)' },
    cambio: { tipo: 'Manual (Eaton RT-8908LL): SAE 50 sintético (Eaton PS-386)', qtd: '13,0 L', intervalo: '100.000 km' },
    diferencial: { tipo: 'Traseiro (Tração 6x4 - 2 eixos): 85W-140 API GL-5', qtd: '1º Eixo: ~16,0 L / 2º Eixo: ~14,0 L', intervalo: '40.000 a 60.000 km' },
    filtros: {
      oleo: { original: '-', tecfil: 'PSL283', mann: 'W950/26', wega: 'WO612', mahle: 'OC505', fram: '-' },
      combustivel: { original: '-', tecfil: 'PSC493 + Sep. PSD950/1', mann: 'WK950/30 + WK950/27x', wega: 'FCD2073 + FCD0773', mahle: 'KC202 + KC295', fram: '-' },
      ar: { original: '-', tecfil: 'ARS9839 + ASR839 (Sec.)', mann: 'C27830 + CF1600', wega: 'WAP115 + WAP115S', mahle: 'LX1047 + LXS251', fram: '-' }
    }
  },
  'Ford 1933 Cav Mec': {
    motor: { tipo: '15W-40 (API CI-4/CK-4 - Cummins ISL 8.9)', qtd: '24,0 L a 26,0 L (com filtro)', intervalo: '40.000 km (ou 20.000 km severo)' },
    cambio: { tipo: 'Manual (Eaton FTS-16108LL) / Automatizado (Torqshift): SAE 50 sintético', qtd: '13,0 L', intervalo: '100.000 km' },
    diferencial: { tipo: 'Traseiro (Meritor MS-23-185): 85W-140 API GL-5', qtd: '18,0 L a 21,0 L', intervalo: '40.000 a 60.000 km' },
    filtros: {
      oleo: { original: '-', tecfil: 'PSL283 (ou PSL962)', mann: 'W950/26 / WP12300', wega: 'WO612 / WO615', mahle: 'OC505 / OC516', fram: '-' },
      combustivel: { original: '-', tecfil: 'PSC493 + Sep. PSD950/1', mann: 'WK950/30 + WK950/27x', wega: 'FCD2073 + FCD0773', mahle: 'KC202 + KC295', fram: '-' },
      ar: { original: '-', tecfil: 'ARS9839 + ASR839 (Sec.)', mann: 'C27830 + CF1600', wega: 'WAP115 + WAP115S', mahle: 'LX1047 + LXS251', fram: '-' }
    }
  },
  'Mercedes-Benz 2627': {
    motor: { tipo: '15W-40 (Norma MB 228.3 / 228.5 - OM-447 / OM-457)', qtd: '24,0 L a 28,0 L (com filtro)', intervalo: '30.000 - 40.000 km' },
    cambio: { tipo: 'Manual (ZF / MB G-131): 80W ou 75W-80 API GL-4 (Norma MB 235.1 / 235.4)', qtd: '9,0 L a 13,0 L', intervalo: '100.000 km' },
    diferencial: { tipo: 'Traseiro (6x4 com redução nos cubos): 85W-140 API GL-5 (Norma MB 235.0)', qtd: '1º Eixo: ~14,0 L / 2º Eixo: ~12,0 L (+ cubos)', intervalo: '40.000 a 60.000 km' },
    filtros: {
      oleo: { original: '-', tecfil: 'PEL2002 (447) / PEL2004 (457)', mann: 'HU12140x / HU12110x', wega: 'WOE802 / WOE804', mahle: 'OX153/7D / OX174D', fram: '-' },
      combustivel: { original: '-', tecfil: 'PEC3021 + Sep. PSD980/1', mann: 'PU999/1x + WK1060/4', wega: 'FCD0780 + FCD0781', mahle: 'KX80D + KC128', fram: '-' },
      ar: { original: '-', tecfil: 'AP9835 + AS835 (Sec.)', mann: 'C271340 + CF1651', wega: 'WAP177 + WAP177S', mahle: 'LX1038 + LXS255', fram: '-' }
    }
  },
  'Mercedes-Benz 915c': {
    motor: { tipo: '15W-40 (Norma MB 228.3 - OM-904 LA)', qtd: '15,8 L (com filtro)', intervalo: '30.000 - 40.000 km' },
    cambio: { tipo: 'Manual (ZF S5-420 / MB G-60): 80W API GL-4 (Norma MB 235.1)', qtd: '3,4 L (ZF) a 9,0 L (MB)', intervalo: '100.000 km' },
    diferencial: { tipo: 'Traseiro: 85W-140 API GL-5 (Norma MB 235.0)', qtd: '5,6 L a 8,5 L', intervalo: '40.000 a 60.000 km' },
    filtros: {
      oleo: { original: '-', tecfil: 'PEL2001 (Refil)', mann: 'HU931/5x', wega: 'WOE800', mahle: 'OX161D', fram: '-' },
      combustivel: { original: '-', tecfil: 'PEC3013 + Sep. PSD980/1', mann: 'PU941x + WK1060/4', wega: 'FCD0785 + FCD0781', mahle: 'KX67/2D + KC128', fram: '-' },
      ar: { original: '-', tecfil: 'AP9836 + AS836 (Sec.)', mann: 'C20500 + CF500', wega: 'WAP176 + WAP176S', mahle: 'LX1039 + LXS256', fram: '-' }
    }
  },
  'Mercedes-Benz 1418E': {
    motor: { tipo: '15W-40 (Norma MB 228.3 - OM-366 / OM-904 LA)', qtd: '15,5 L a 16,5 L (com filtro)', intervalo: '20.000 - 30.000 km' },
    cambio: { tipo: 'Manual (MB G-60 / G-85): 80W API GL-4 (Norma MB 235.1)', qtd: '9,0 L', intervalo: '100.000 km' },
    diferencial: { tipo: 'Traseiro: 85W-140 API GL-5 (Norma MB 235.0)', qtd: '10,0 L a 12,0 L', intervalo: '40.000 a 60.000 km' },
    filtros: {
      oleo: { original: '-', tecfil: 'PEL202 (366) / PEL2001 (904)', mann: 'H947/1x / HU931/5x', wega: 'WOE810 / WOE800', mahle: 'OX127 / OX161D', fram: '-' },
      combustivel: { original: '-', tecfil: 'PC2/255 (366) / PEC3013 (904)', mann: 'P917x / PU941x', wega: 'FCD0705 / FCD0785', mahle: 'KX43 / KX67/2D', fram: '-' },
      ar: { original: '-', tecfil: 'AP9834 + AS820 (Sec.)', mann: 'C20325/2 + CF1000', wega: 'WAP174 + WAP174S', mahle: 'LX1040 + LXS44', fram: '-' }
    }
  },
  'Mercedes-Benz AXOR 3344': {
    motor: { tipo: '15W-40 (Norma MB 228.3 / 228.5 - OM-457 LA)', qtd: '38,0 L (com filtro)', intervalo: '40.000 km (20.000 km severo fora-de-estrada)' },
    cambio: { tipo: 'Manual/Automatizado (MB G-240 / G-330): 75W-80 sintético (Norma MB 235.4 / 235.11)', qtd: '13,0 L a 15,0 L', intervalo: '100.000 km (ou 2 anos)' },
    diferencial: { tipo: 'Traseiro (6x4 com redução nos cubos): 85W-140 API GL-5 (Norma MB 235.0)', qtd: '1º Eixo: 14,5 L / 2º Eixo: 12,5 L (+ 3,2 L por cubo)', intervalo: '40.000 - 60.000 km (uso severo)' },
    filtros: {
      oleo: { original: '-', tecfil: 'PEL2004 (Refil)', mann: 'HU12110x', wega: 'WOE804', mahle: 'OX174D', fram: '-' },
      combustivel: { original: '-', tecfil: 'PEC3021 + Sep. PSD980/1', mann: 'PU999/1x + WK1060/4', wega: 'FCD0780 + FCD0781', mahle: 'KX80D + KC128', fram: '-' },
      ar: { original: '-', tecfil: 'AP9835 + AS835 (Sec.)', mann: 'C271340 + CF1651', wega: 'WAP177 + WAP177S', mahle: 'LX1038 + LXS255', fram: '-' }
    }
  },
  'Mercedes-Benz Atego 1725': {
    motor: { tipo: '15W-40 (Norma MB 228.3 - OM-906 LA)', qtd: '26,5 L (com filtro)', intervalo: '40.000 km' },
    cambio: { tipo: 'Manual (MB G-85): 80W API GL-4 (Norma MB 235.1)', qtd: '9,0 L', intervalo: '100.000 km' },
    diferencial: { tipo: 'Traseiro: 85W-140 API GL-5 (Norma MB 235.0)', qtd: '11,0 L a 12,0 L', intervalo: '40.000 a 60.000 km' },
    filtros: {
      oleo: { original: '-', tecfil: 'PEL2003 (Refil)', mann: 'HU945/2x', wega: 'WOE801', mahle: 'OX160D', fram: '-' },
      combustivel: { original: '-', tecfil: 'PEC3014 + Sep. PSD980/1', mann: 'PU1046x + WK1060/4', wega: 'FCD0786 + FCD0781', mahle: 'KX67/1D + KC128', fram: '-' },
      ar: { original: '-', tecfil: 'ARS9841 (Kit AP9496/1)', mann: 'C29010KIT', wega: 'WAP181K', mahle: 'LX1762', fram: '-' }
    }
  },
  'VW Work 815': {
    motor: { tipo: '15W-40 (API CI-4 - MWM 4.10 TCA / Cummins Interact 4.0)', qtd: '11,0 L a 13,0 L (com filtro)', intervalo: '20.000 - 30.000 km' },
    cambio: { tipo: 'Manual (Eaton FS-4205A): SAE 40 ou 80W API GL-4', qtd: '4,5 L', intervalo: '80.000 - 100.000 km' },
    diferencial: { tipo: 'Traseiro: 85W-140 API GL-5', qtd: '6,5 L a 8,0 L', intervalo: '40.000 - 60.000 km' },
    filtros: {
      oleo: { original: '-', tecfil: 'PSL335 (MWM) / PSL283 (Cummins)', mann: 'W950/18 / W950/26', wega: 'WO470 / WO612', mahle: 'OC413 / OC505', fram: '-' },
      combustivel: { original: '-', tecfil: 'PSC72/2 (MWM) / PSC493 (Cummins)', mann: 'WK723 / WK950/30', wega: 'FCD2041 / FCD2073', mahle: 'KC18 / KC202', fram: '-' },
      ar: { original: '-', tecfil: 'AP7998 + AS800 (Sec.)', mann: 'C17308 + CF1000', wega: 'WAP183 + WAP183S', mahle: 'LX1054 + LXS44', fram: '-' }
    }
  },
  'VW Work 5-Ton 15-180': {
    motor: { tipo: '15W-40 (API CI-4 - MWM 6.10 TCA)', qtd: '16,5 L (com filtro)', intervalo: '30.000 - 40.000 km' },
    cambio: { tipo: 'Manual (Eaton FS-4205A / FS-5306A): SAE 40 ou 50 sintético / 80W GL-4', qtd: '4,5 L a 7,2 L', intervalo: '100.000 km' },
    diferencial: { tipo: 'Traseiro (Meritor MS-23-145 / 23-240): 85W-140 API GL-5', qtd: '15,0 L', intervalo: '60.000 km (severo) ou 100.000 km' },
    filtros: {
      oleo: { original: '-', tecfil: 'PSL335 (ou PSL962)', mann: 'W950/18', wega: 'WO470', mahle: 'OC413', fram: '-' },
      combustivel: { original: '-', tecfil: 'PSC72/2 + Sep. PSD460/1', mann: 'WK723 + WK940/24', wega: 'FCD2041 + FCD0761', mahle: 'KC18 + KC199', fram: '-' },
      ar: { original: '-', tecfil: 'AP9834 + AS820 (Sec.)', mann: 'C20325/2 + CF1000', wega: 'WAP174 + WAP174S', mahle: 'LX1040 + LXS44', fram: '-' }
    }
  },
  'VW Work 7-Ton Comercial': {
    motor: { tipo: '15W-40 (API CI-4 - Cummins / MWM)', qtd: '16,5 L (com filtro)', intervalo: '30.000 - 40.000 km' },
    cambio: { tipo: 'Manual (Eaton FS-5306A / FS-6306A): SAE 50 sintético ou 80W GL-4', qtd: '7,2 L a 9,0 L', intervalo: '100.000 km' },
    diferencial: { tipo: 'Traseiro (Meritor MS-23-145): 85W-140 API GL-5', qtd: '15,0 L', intervalo: '60.000 km (severo) ou 100.000 km' },
    filtros: {
      oleo: { original: '-', tecfil: 'PSL283 (Cummins) / PSL335 (MWM)', mann: 'W950/26 / W950/18', wega: 'WO612 / WO470', mahle: 'OC505 / OC413', fram: '-' },
      combustivel: { original: '-', tecfil: 'PSC493 + Sep. PSD960/1', mann: 'WK950/30 + WK950/21', wega: 'FCD2073 + FCD0766', mahle: 'KC202 + KC200', fram: '-' },
      ar: { original: '-', tecfil: 'AP9834 + AS820 (Sec.)', mann: 'C20325/2 + CF1000', wega: 'WAP174 + WAP174S', mahle: 'LX1040 + LXS44', fram: '-' }
    }
  },
  'VW Work 24-220': {
    motor: { tipo: '15W-40 (API CI-4 - Cummins 6CTAA 8.3)', qtd: '20,0 L (com filtro)', intervalo: '30.000 - 40.000 km' },
    cambio: { tipo: 'Manual (Eaton FS-6306A / RT-8908LL): SAE 50 sintético (Eaton PS-386)', qtd: '9,0 L a 13,0 L', intervalo: '100.000 km' },
    diferencial: { tipo: 'Traseiro (Meritor MS-23-245): 85W-140 API GL-5', qtd: '15,0 L a 18,0 L', intervalo: '60.000 km (severo) ou 100.000 km' },
    filtros: {
      oleo: { original: '-', tecfil: 'PSL962', mann: 'WP12300', wega: 'WO615', mahle: 'OC516', fram: '-' },
      combustivel: { original: '-', tecfil: 'PSC72/2 + Sep. PSD460/1', mann: 'WK940/7 + WK940/24', wega: 'FCD2041 + FCD0761', mahle: 'KC18 + KC199', fram: '-' },
      ar: { original: '-', tecfil: 'ARS9839 + ASR839 (Sec.)', mann: 'C27830 + CF1600', wega: 'WAP115 + WAP115S', mahle: 'LX1047 + LXS251', fram: '-' }
    }
  },
  'VW Work 26-220': {
    motor: { tipo: '15W-40 (API CI-4 - Cummins 6CTAA 8.3)', qtd: '20,0 L (com filtro)', intervalo: '30.000 - 40.000 km' },
    cambio: { tipo: 'Manual (Eaton RT-8908LL): SAE 50 sintético (Eaton PS-386)', qtd: '13,0 L', intervalo: '100.000 km' },
    diferencial: { tipo: 'Traseiro (Tração 6x4 - Meritor MT-46-145): 85W-140 API GL-5', qtd: '1º Eixo: ~16,0 L / 2º Eixo: ~14,0 L', intervalo: '60.000 km (severo) ou 100.000 km' },
    filtros: {
      oleo: { original: '-', tecfil: 'PSL962', mann: 'WP12300', wega: 'WO615', mahle: 'OC516', fram: '-' },
      combustivel: { original: '-', tecfil: 'PSC72/2 + Sep. PSD460/1', mann: 'WK940/7 + WK940/24', wega: 'FCD2041 + FCD0761', mahle: 'KC18 + KC199', fram: '-' },
      ar: { original: '-', tecfil: 'ARS9839 + ASR839 (Sec.)', mann: 'C27830 + CF1600', wega: 'WAP115 + WAP115S', mahle: 'LX1047 + LXS251', fram: '-' }
    }
  },
  'VW Work 26-260E': {
    motor: { tipo: '15W-40 (API CI-4 - MWM 6.12 TCE)', qtd: '21,0 L (com filtro)', intervalo: '30.000 - 40.000 km' },
    cambio: { tipo: 'Manual (Eaton RT-8908LL): SAE 50 sintético (Eaton PS-386)', qtd: '13,0 L', intervalo: '100.000 km' },
    diferencial: { tipo: 'Traseiro (Tração 6x4 - Meritor MD/MR): 85W-140 API GL-5', qtd: '1º Eixo: ~16,0 L / 2º Eixo: ~14,0 L', intervalo: '60.000 km (severo) ou 100.000 km' },
    filtros: {
      oleo: { original: '-', tecfil: 'PSL283 (ou PSL339)', mann: 'W950/26', wega: 'WO612', mahle: 'OC505', fram: '-' },
      combustivel: { original: '-', tecfil: 'PSC75 + Sep. PSD960/1', mann: 'WK950/22 + WK950/21', wega: 'FCD2075 + FCD0766', mahle: 'KC201 + KC200', fram: '-' },
      ar: { original: '-', tecfil: 'ARS9839 + ASR839 (Sec.)', mann: 'C27830 + CF1600', wega: 'WAP115 + WAP115S', mahle: 'LX1047 + LXS251', fram: '-' }
    }
  },
  'VW Constellation 24-250': {
    motor: { tipo: '15W-40 (API CI-4 - Cummins ISBe 5.9)', qtd: '19,0 L (com filtro)', intervalo: '40.000 km (20.000 km severo)' },
    cambio: { tipo: 'Manual (Eaton FS-6306B): SAE 50 sintético (Eaton PS-386)', qtd: '9,0 L', intervalo: '100.000 km' },
    diferencial: { tipo: 'Traseiro (Meritor MS-23-245): 85W-140 API GL-5', qtd: '15,0 L a 18,0 L', intervalo: '60.000 km (severo) ou 100.000 km' },
    filtros: {
      oleo: { original: '-', tecfil: 'PSL283', mann: 'W950/26', wega: 'WO612', mahle: 'OC505', fram: '-' },
      combustivel: { original: '-', tecfil: 'PSC493 + Sep. PSD960/1', mann: 'WK950/30 + WK950/21', wega: 'FCD2073 + FCD0766', mahle: 'KC202 + KC200', fram: '-' },
      ar: { original: '-', tecfil: 'ARS9839 + ASR839 (Sec.)', mann: 'C27830 + CF1600', wega: 'WAP115 + WAP115S', mahle: 'LX1047 + LXS251', fram: '-' }
    }
  },
  'VW Constellation 26-280': {
    motor: { tipo: '15W-40 (API CI-4/CJ-4 - MAN D08 36 6 cil.)', qtd: '20,5 L (com filtro)', intervalo: '40.000 km (20.000 km severo)' },
    cambio: { tipo: 'Manual (ZF 16S 1455 TD): 75W-80 ou 80W API GL-4 (ZF TE-ML 02)', qtd: '11,0 L', intervalo: '100.000 km' },
    diferencial: { tipo: 'Traseiro (Tração 6x4 - Meritor MT-46-145): 85W-140 API GL-5', qtd: '1º Eixo: ~16,0 L / 2º Eixo: ~14,0 L', intervalo: '60.000 km (severo) ou 100.000 km' },
    filtros: {
      oleo: { original: '-', tecfil: 'PEL728 (Refil)', mann: 'HU9001x', wega: 'WOE625', mahle: 'OX438D', fram: '-' },
      combustivel: { original: '-', tecfil: 'PEC3036 + Sep. PSD980/1', mann: 'PU9009z + WK1060/4', wega: 'FCD0790 + FCD0781', mahle: 'KX386D + KC128', fram: '-' },
      ar: { original: '-', tecfil: 'ARS9839 + ASR839 (Sec.)', mann: 'C27830 + CF1600', wega: 'WAP115 + WAP115S', mahle: 'LX1047 + LXS251', fram: '-' }
    }
  },
  'VW Constellation 31-320': {
    motor: { tipo: '15W-40 (API CI-4 - Cummins ISC 8.3)', qtd: '23,5 L (com filtro)', intervalo: '40.000 km (20.000 km severo)' },
    cambio: { tipo: 'Manual (ZF 16S 1585 TD): 75W-80 ou 80W API GL-4 (ZF TE-ML 02)', qtd: '11,0 L a 13,0 L', intervalo: '100.000 km' },
    diferencial: { tipo: 'Traseiro (Tração 6x4 - Meritor MT-50-168): 85W-140 API GL-5', qtd: '1º Eixo: ~18,0 L / 2º Eixo: ~15,0 L', intervalo: '60.000 km (severo) ou 100.000 km' },
    filtros: {
      oleo: { original: '-', tecfil: 'PSL962', mann: 'WP12300', wega: 'WO615', mahle: 'OC516', fram: '-' },
      combustivel: { original: '-', tecfil: 'PSC493 + Sep. PSD960/1', mann: 'WK950/30 + WK950/21', wega: 'FCD2073 + FCD0766', mahle: 'KC202 + KC200', fram: '-' },
      ar: { original: '-', tecfil: 'ARS9839 + ASR839 (Sec.)', mann: 'C27830 + CF1600', wega: 'WAP115 + WAP115S', mahle: 'LX1047 + LXS251', fram: '-' }
    }
  },

  // --- ÔNIBUS E VANS ---
  'Fiat Ducato 2.3 Multijet': {
    motor: { tipo: '5W-30 sintético (ACEA B4 / C2 - FPT F1A)', qtd: '6,0 L a 6,5 L (com filtro)', intervalo: '15.000 km (7.500 km severo)' },
    cambio: { tipo: 'Manual (5 ou 6 marchas): 75W-80 API GL-4', qtd: '2,0 L a 2,7 L', intervalo: '60.000 km' },
    diferencial: { tipo: 'Não se aplica (Tração Dianteira - integrado ao câmbio)', qtd: '-', intervalo: '-' },
    filtros: {
      oleo: { original: '-', tecfil: 'PSL657', mann: 'W920/48', wega: 'WO541', mahle: 'OC608', fram: '-' },
      combustivel: { original: '-', tecfil: 'PEC3023 (até 17) / PEC3041 (18+)', mann: 'PU7010z / PU8016z', wega: 'FCD0770 / FCD0796', mahle: 'KX208D / KX520D', fram: '-' },
      ar: { original: '-', tecfil: 'ARS1014 (até 13) / ARS1013 (14+)', mann: 'C17278', wega: 'WAP311 / WAP310', mahle: 'LX1751', fram: '-' }
    }
  },
  'Fiat Ducato 2.8': {
    motor: { tipo: '15W-40 semissintético ou 5W-40 sintético (API CI-4 / ACEA B4 - Sofim 8140)', qtd: '6,0 L (com filtro)', intervalo: '10.000 - 15.000 km' },
    cambio: { tipo: 'Manual (5 marchas): 75W-80 API GL-4', qtd: '2,0 L a 2,7 L', intervalo: '60.000 km' },
    diferencial: { tipo: 'Não se aplica (Tração Dianteira - integrado ao câmbio)', qtd: '-', intervalo: '-' },
    filtros: {
      oleo: { original: '-', tecfil: 'PSL156 (ou PSL655)', mann: 'W940/18', wega: 'WO540', mahle: 'OC205', fram: '-' },
      combustivel: { original: '-', tecfil: 'PSC496 (até 05) / PEC3023 (06+)', mann: 'WK854/1 / PU7010z', wega: 'FCD2065 / FCD0770', mahle: 'KC83 / KX208D', fram: '-' },
      ar: { original: '-', tecfil: 'ARS1013 (ou ARS1014)', mann: 'C17278', wega: 'WAP310 / WAP311', mahle: 'LX1751', fram: '-' }
    }
  },
  'Iveco - Daily 35S14': {
    motor: { tipo: '5W-30 sintético (ACEA C2/C3 - FPT F1C 3.0)', qtd: '6,6 L a 7,6 L (com filtro)', intervalo: '20.000 km (10.000 km severo)' },
    cambio: { tipo: 'Manual (ZF 6S 400 / Eaton FSO): 75W-80 API GL-4', qtd: '2,0 L a 2,2 L', intervalo: '60.000 km' },
    diferencial: { tipo: 'Traseiro: 80W-90 ou 85W-140 API GL-5', qtd: '1,35 L a 1,8 L', intervalo: '40.000 km' },
    filtros: {
      oleo: { original: '-', tecfil: 'PSL655 (ou PSL657)', mann: 'W930/21', wega: 'WO540 / WO541', mahle: 'OC608', fram: '-' },
      combustivel: { original: '-', tecfil: 'PEC3023 (ou PEC3041) + Sep. PSD460/1', mann: 'PU7010z + WK940/24', wega: 'FCD0770 + FCD0761', mahle: 'KX208D + KC199', fram: '-' },
      ar: { original: '-', tecfil: 'ARS5132 (ou ARS1014)', mann: 'C17237/1', wega: 'WAP312', mahle: 'LX1751', fram: '-' }
    }
  }
};
