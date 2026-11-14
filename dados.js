/* ==========================================================
   DADOS DO MANUAL AUTOMOTIVO — dados.js
   Versão: Revisão técnica conservadora — 12 aplicações parciais e 91 pendentes
   ========================================================== */

/* ==========================================================
   DADOS DO MANUAL AUTOMOTIVO — dados.js (Revisão Técnica Completa)
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
    motor: { tipo: 'SAE 5W-30 ou 0W-20 Sintético (dexos1 Gen 2/3 - API SN/SP)', qtd: '3,5 L (com filtro)', intervalo: '10.000 km ou 1 ano (5.000 km severo)' },
    cambio: { tipo: 'Automático (GF6): Dexron VI / Manual (F17): SAE 75W-85 GL-4', qtd: 'Automático: ~8,5 L (total) / Manual: 1,8 L', intervalo: 'Automático: 60.000 - 80.000 km / Manual: 60.000 km' },
    diferencial: { tipo: 'Não se aplica (Tração Dianteira - integrado ao câmbio)', qtd: '-', intervalo: '-' },
    filtros: {
      oleo: { original: '93742512', tecfil: 'PSL55', mann: 'W712/22', wega: 'WO-120', fram: 'PH5949' },
      ar: { original: '94703132', tecfil: 'ARL4122', mann: 'C2713', wega: 'FAP-9285', fram: 'CA10668' },
      combustivel: { original: '93297745', tecfil: 'GI04/7', mann: 'WK58/3', wega: 'FCI-1630', fram: 'G1025' },
      cabine: { original: '94747799', tecfil: 'ACP309', mann: 'CU2433', wega: 'AKX-1999', fram: 'CF11175' }
    }
  },
  'Chevrolet Agile': {
    motor: { tipo: 'SAE 5W-30 Sintético (dexos1 / API SN - Alternativo: 10W-30 / 15W-40)', qtd: '3,5 L (com filtro)', intervalo: '10.000 km ou 1 ano (5.000 km severo)' },
    cambio: { tipo: 'Manual (F15/F17): SAE 75W-85 ou 75W-90 GL-4', qtd: '1,6 L', intervalo: '60.000 km' },
    diferencial: { tipo: 'Não se aplica', qtd: '-', intervalo: '-' },
    filtros: {
      oleo: { original: '93742512', tecfil: 'PSL55', mann: 'W712/22', wega: 'WO-120', fram: 'PH5949' },
      ar: { original: '93396172', tecfil: 'ARL4103', mann: 'C2225', wega: 'FAP-9003', fram: 'CA10015' },
      combustivel: { original: '93297745', tecfil: 'GI04/7', mann: 'WK58/3', wega: 'FCI-1630', fram: 'G1025' },
      cabine: { original: '93396173', tecfil: 'ACP308', mann: 'CU2433', wega: 'AKX-3510', fram: 'CF11175' }
    }
  },
  'Chevrolet Montana': {
    motor: { tipo: 'SAE 5W-30 Sintético (dexos1 / API SN - Alternativo: 10W-30 / 15W-40)', qtd: '3,5 L (com filtro)', intervalo: '10.000 km ou 1 ano (5.000 km severo)' },
    cambio: { tipo: 'Manual (F15/F17): SAE 75W-85 ou 75W-90 GL-4', qtd: '1,6 L', intervalo: '60.000 km' },
    diferencial: { tipo: 'Não se aplica', qtd: '-', intervalo: '-' },
    filtros: {
      oleo: { original: '93742512', tecfil: 'PSL55', mann: 'W712/22', wega: 'WO-120', fram: 'PH5949' },
      ar: { original: '93396172', tecfil: 'ARL4103', mann: 'C2225', wega: 'FAP-9003', fram: 'CA10015' },
      combustivel: { original: '93297745', tecfil: 'GI04/7', mann: 'WK58/3', wega: 'FCI-1630', fram: 'G1025' },
      cabine: { original: '93396173', tecfil: 'ACP308', mann: 'CU2433', wega: 'AKX-3510', fram: 'CF11175' }
    }
  },
  'Fiat Palio 1.4': {
    motor: { tipo: 'SAE 5W-30 ou 15W-40 Semissintético/Sintético (Motor Fire/EVO - API SN/SP)', qtd: '2,7 L (com filtro)', intervalo: '10.000 km ou 1 ano (5.000 km severo)' },
    cambio: { tipo: 'Manual (C513): SAE 75W-85 ou 80W API GL-4', qtd: '2,0 L', intervalo: '60.000 km' },
    diferencial: { tipo: 'Não se aplica', qtd: '-', intervalo: '-' },
    filtros: {
      oleo: { original: '7085786', tecfil: 'PEL106', mann: 'HU711/51x', wega: 'WO-130', fram: 'CH9642' },
      ar: { original: '51775324', tecfil: 'ARL6085', mann: 'C2429', wega: 'FAP-4022', fram: 'CA9566' },
      combustivel: { original: '51778945', tecfil: 'GI04/7', mann: 'WK55', wega: 'FCI-1660', fram: 'G9193' },
      cabine: { original: '7088921', tecfil: 'ACP304', mann: 'CU2227', wega: 'AKX-3520', fram: 'CF9481' }
    }
  },
  'Fiat Doblo 1.8': {
    motor: { tipo: 'SAE 5W-30 Sintético (Motor E.torQ) ou 5W-30 / 15W-40 (Motor GM Powertrain)', qtd: '4,5 L (E.torQ) / 3,5 L (GM)', intervalo: '10.000 km ou 1 ano' },
    cambio: { tipo: 'Manual: SAE 75W-85 API GL-4', qtd: '2,1 L', intervalo: '60.000 km' },
    diferencial: { tipo: 'Não se aplica', qtd: '-', intervalo: '-' },
    filtros: {
      oleo: { original: '7085786', tecfil: 'PEL106', mann: 'HU711/51x', wega: 'WO-130', fram: 'CH9642' },
      ar: { original: '51794712', tecfil: 'ARL6086', mann: 'C2730', wega: 'FAP-4025', fram: 'CA10222' },
      combustivel: { original: '51778945', tecfil: 'GI04/7', mann: 'WK55', wega: 'FCI-1660', fram: 'G9193' },
      cabine: { original: '46723321', tecfil: 'ACP302', mann: 'CU2842', wega: 'AKX-1100', fram: 'CF1028' }
    }
  },
  'Fiat Doblo 1.4': {
    motor: { tipo: 'SAE 5W-30 ou 15W-40 Semissintético/Sintético (Motor Fire - API SN/SP)', qtd: '2,7 L (com filtro)', intervalo: '10.000 km ou 1 ano' },
    cambio: { tipo: 'Manual: SAE 75W-85 API GL-4', qtd: '2,0 L', intervalo: '60.000 km' },
    diferencial: { tipo: 'Não se aplica', qtd: '-', intervalo: '-' },
    filtros: {
      oleo: { original: '7085786', tecfil: 'PEL106', mann: 'HU711/51x', wega: 'WO-130', fram: 'CH9642' },
      ar: { original: '51775324', tecfil: 'ARL6085', mann: 'C2429', wega: 'FAP-4022', fram: 'CA9566' },
      combustivel: { original: '51778945', tecfil: 'GI04/7', mann: 'WK55', wega: 'FCI-1660', fram: 'G9193' },
      cabine: { original: '46723321', tecfil: 'ACP302', mann: 'CU2842', wega: 'AKX-1100', fram: 'CF1028' }
    }
  },
  'Fiat Strada 1.4': {
    motor: { tipo: 'SAE 5W-30 ou 15W-40 Semissintético/Sintético (Motor Fire/EVO - API SN/SP)', qtd: '2,7 L (com filtro)', intervalo: '10.000 km ou 1 ano (5.000 km severo)' },
    cambio: { tipo: 'Manual: SAE 75W-85 ou 80W API GL-4', qtd: '2,0 L', intervalo: '60.000 km' },
    diferencial: { tipo: 'Não se aplica', qtd: '-', intervalo: '-' },
    filtros: {
      oleo: { original: '7085786', tecfil: 'PEL106', mann: 'HU711/51x', wega: 'WO-130', fram: 'CH9642' },
      ar: { original: '51775324', tecfil: 'ARL6085', mann: 'C2429', wega: 'FAP-4022', fram: 'CA9566' },
      combustivel: { original: '51778945', tecfil: 'GI04/7', mann: 'WK55', wega: 'FCI-1660', fram: 'G9193' },
      cabine: { original: '7088921', tecfil: 'ACP304', mann: 'CU2227', wega: 'AKX-3520', fram: 'CF9481' }
    }
  },
  'Ford Fiesta 1.0': {
    motor: { tipo: 'SAE 5W-30 Sintético (Ford WSS-M2C913-C/D - Alternativo: 5W-20 / 10W-30)', qtd: '4,1 L (com filtro)', intervalo: '10.000 km ou 1 ano' },
    cambio: { tipo: 'Manual (IB5): SAE 75W-90 ou 75W-85 Sintético GL-4', qtd: '2,3 L', intervalo: '60.000 km' },
    diferencial: { tipo: 'Não se aplica', qtd: '-', intervalo: '-' },
    filtros: {
      oleo: { original: 'XS6E6714B1A', tecfil: 'PSL55', mann: 'W712/73', wega: 'WO-200', fram: 'PH2870' },
      ar: { original: '2S659601AA', tecfil: 'ARL4125', mann: 'C2830', wega: 'FAP-2830', fram: 'CA9926' },
      combustivel: { original: '2S659155AB', tecfil: 'GI04/7', mann: 'WK58/3', wega: 'FCI-1630', fram: 'G1025' },
      cabine: { original: '2S6519N619AA', tecfil: 'ACP301', mann: 'CU2433', wega: 'AKX-1930', fram: 'CF11175' }
    }
  },
  'Ford Fiesta 1.6': {
    motor: { tipo: 'SAE 5W-30 ou 5W-20 Sintético (Ford WSS-M2C913-D / 948-B - Zetec / Sigma)', qtd: '4,1 L (com filtro)', intervalo: '10.000 km ou 1 ano' },
    cambio: { tipo: 'Manual (IB5): SAE 75W-90 GL-4 / Powershift: Dual Clutch Fluid', qtd: 'Manual: 2,3 L / Powershift: 1,75 L', intervalo: '60.000 km' },
    diferencial: { tipo: 'Não se aplica', qtd: '-', intervalo: '-' },
    filtros: {
      oleo: { original: 'XS6E6714B1A', tecfil: 'PSL55', mann: 'W712/73', wega: 'WO-200', fram: 'PH2870' },
      ar: { original: '2S659601AA', tecfil: 'ARL4125', mann: 'C2830', wega: 'FAP-2830', fram: 'CA9926' },
      combustivel: { original: '2S659155AB', tecfil: 'GI04/7', mann: 'WK58/3', wega: 'FCI-1630', fram: 'G1025' },
      cabine: { original: '2S6519N619AA', tecfil: 'ACP301', mann: 'CU2433', wega: 'AKX-1930', fram: 'CF11175' }
    }
  },
  'Ford Focus 1.6': {
    motor: { tipo: 'SAE 5W-30 ou 5W-20 Sintético (Ford WSS-M2C913-D / 948-B)', qtd: '4,1 L (com filtro)', intervalo: '10.000 km ou 1 ano' },
    cambio: { tipo: 'Manual (IB5): SAE 75W-90 GL-4', qtd: '2,3 L', intervalo: '60.000 km' },
    diferencial: { tipo: 'Não se aplica', qtd: '-', intervalo: '-' },
    filtros: {
      oleo: { original: 'XS6E6714B1A', tecfil: 'PSL55', mann: 'W712/73', wega: 'WO-200', fram: 'PH2870' },
      ar: { original: '3M559601AA', tecfil: 'ARL4130', mann: 'C35154', wega: 'FAP-2830', fram: 'CA9926' },
      combustivel: { original: '2S659155AB', tecfil: 'GI04/7', mann: 'WK58/3', wega: 'FCI-1630', fram: 'G1025' },
      cabine: { original: '3M5519N619AB', tecfil: 'ACP309', mann: 'CUK2442', wega: 'AKX-1110', fram: 'CF10729' }
    }
  },
  'Ford Focus 2.0': {
    motor: { tipo: 'SAE 5W-30 ou 5W-20 Sintético (Motor Duratec - WSS-M2C913-D / 948-B)', qtd: '4,3 L (com filtro)', intervalo: '10.000 km ou 1 ano' },
    cambio: { tipo: 'Manual (MTX75): SAE 75W-90 GL-4 / Automático: Mercon LV', qtd: 'Manual: 2,1 L / Aut.: ~7,0 L', intervalo: '60.000 km' },
    diferencial: { tipo: 'Não se aplica', qtd: '-', intervalo: '-' },
    filtros: {
      oleo: { original: 'XS6E6714B1A', tecfil: 'PSL55', mann: 'W712/73', wega: 'WO-200', fram: 'PH2870' },
      ar: { original: '3M559601AA', tecfil: 'ARL4130', mann: 'C35154', wega: 'FAP-2830', fram: 'CA9926' },
      combustivel: { original: '2S659155AB', tecfil: 'GI04/7', mann: 'WK58/3', wega: 'FCI-1630', fram: 'G1025' },
      cabine: { original: '3M5519N619AB', tecfil: 'ACP309', mann: 'CUK2442', wega: 'AKX-1110', fram: 'CF10729' }
    }
  },
  'Nissan Sentra': {
    motor: { tipo: 'SAE 0W-20, 5W-30 ou 10W-30 Sintético (API SN/SP / ILSAC GF-5/GF-6)', qtd: '4,4 L (com filtro)', intervalo: '10.000 km ou 1 ano' },
    cambio: { tipo: 'CVT Xtronic: Nissan CVT Fluid NS-2 ou NS-3', qtd: 'Total ~8,0 L (Troca parcial ~4,5 L)', intervalo: '40.000 - 80.000 km' },
    diferencial: { tipo: 'Não se aplica', qtd: '-', intervalo: '-' },
    filtros: {
      oleo: { original: '1520865F0A', tecfil: 'PSL158', mann: 'W610/3', wega: 'WO-150', fram: 'PH4967' },
      ar: { original: '16546ED000', tecfil: 'ARL1655', mann: 'C2029', wega: 'FAP-9030', fram: 'CA10226' },
      combustivel: { original: 'Filtro interno no tanque', tecfil: '-', mann: '-', wega: '-', fram: '-' },
      cabine: { original: '27277EN000', tecfil: 'ACP310', mann: 'CU2935', wega: 'AKX-3512', fram: 'CF10786' }
    }
  },
  'Nissan Versa 1.6': {
    motor: { tipo: 'SAE 0W-20, 5W-30 ou 10W-30 Sintético (API SN/SP / ILSAC GF-5/GF-6)', qtd: '4,4 L (com filtro)', intervalo: '10.000 km ou 1 ano' },
    cambio: { tipo: 'Manual: SAE 75W-85 GL-4 / CVT: Nissan NS-3 Fluid', qtd: 'Manual: 2,4 L / CVT: ~7,0 L', intervalo: '60.000 km' },
    diferencial: { tipo: 'Não se aplica', qtd: '-', intervalo: '-' },
    filtros: {
      oleo: { original: '1520865F0A', tecfil: 'PSL158', mann: 'W610/3', wega: 'WO-150', fram: 'PH4967' },
      ar: { original: '165461KA0A', tecfil: 'ARL1656', mann: 'C24025', wega: 'FAP-9030', fram: 'CA11123' },
      combustivel: { original: 'Filtro interno no tanque', tecfil: '-', mann: '-', wega: '-', fram: '-' },
      cabine: { original: '272771KA0A', tecfil: 'ACP312', mann: 'CU22017', wega: 'AKX-3512', fram: 'CF11784' }
    }
  },
  'Peugeot 408 1.6 THP': {
    motor: { tipo: 'SAE 0W-30 ou 5W-30 Sintético Low SAPS (Norma PSA B71 2312 / 2290 - ACEA C2)', qtd: '4,25 L (com filtro)', intervalo: '10.000 km ou 1 ano (5.000 km severo)' },
    cambio: { tipo: 'Automático (AT6 / EAT6): Fluido AW-1 (JWS 3324)', qtd: 'Total ~7,0 L (Troca parcial ~3,0 L)', intervalo: '40.000 km' },
    diferencial: { tipo: 'Não se aplica', qtd: '-', intervalo: '-' },
    filtros: {
      oleo: { original: '1109AY', tecfil: 'PEL108', mann: 'HU712/x', wega: 'WO-530', fram: 'CH9939' },
      ar: { original: '1444RJ', tecfil: 'ARL6090', mann: 'C3877', wega: 'FAP-4040', fram: 'CA10582' },
      combustivel: { original: '156794', tecfil: 'FC405', mann: 'WK68/1', wega: 'FCI-1650', fram: 'PS10238' },
      cabine: { original: '6447XF', tecfil: 'ACP305', mann: 'CUK2940', wega: 'AKX-1991', fram: 'CF10549' }
    }
  },
  'Renault Logan - Sandero': {
    motor: { tipo: 'SAE 5W-30, 5W-40 ou 10W-40 Sintético/Semissintético (Norma Renault RN0700 / RN0710)', qtd: '4,8 L (1.6 8V/16V) / 4,0 L (1.0)', intervalo: '10.000 km ou 1 ano' },
    cambio: { tipo: 'Manual (JH3 / JR5): SAE 75W-80 API GL-4/GL-5', qtd: '2,5 L a 2,8 L', intervalo: '60.000 km' },
    diferencial: { tipo: 'Não se aplica', qtd: '-', intervalo: '-' },
    filtros: {
      oleo: { original: '8200768913', tecfil: 'PSL51', mann: 'W67/2', wega: 'WO-120', fram: 'PH5796' },
      ar: { original: '165467674R', tecfil: 'ARL9010', mann: 'C22030', wega: 'FAP-9010', fram: 'CA11036' },
      combustivel: { original: '6001548810', tecfil: 'GI04/7', mann: 'WK58/3', wega: 'FCI-1630', fram: 'G1025' },
      cabine: { original: '272773229R', tecfil: 'ACP928', mann: 'CU1822', wega: 'AKX-1120', fram: 'CF10366' }
    }
  },
  'VW Kombi 1.4': {
    motor: { tipo: 'SAE 5W-40, 10W-40 ou 15W-40 (Norma VW 502.00 / 508.88 - Motor EA111 Flex)', qtd: '3,3 L (com filtro)', intervalo: '10.000 km ou 6 meses (5.000 km severo)' },
    cambio: { tipo: 'Manual (Transaxle traseiro): SAE 75W-90 ou 80W-90 API GL-4/GL-5', qtd: '3,0 L', intervalo: '40.000 km' },
    diferencial: { tipo: 'Integrado ao câmbio (Coroa e Pinhão traseiros)', qtd: 'Integrado', intervalo: '40.000 km' },
    filtros: {
      oleo: { original: '030115561AN', tecfil: 'PSL55', mann: 'W712/22', wega: 'WO-100', fram: 'PH5949' },
      ar: { original: '0231296201', tecfil: 'ARL3280', mann: 'C3280', wega: 'FAP-3280', fram: 'CA8286' },
      combustivel: { original: '6QE201511', tecfil: 'GI04/7', mann: 'WK58/3', wega: 'FCI-1630', fram: 'G1025' },
      cabine: { original: 'Não possui', tecfil: '-', mann: '-', wega: '-', fram: '-' }
    }
  },
  'VW Gol 1.6 G5': {
    motor: { tipo: 'SAE 5W-40, 10W-40 ou 15W-40 (Norma VW 502.00 / 508.88 - Motor EA111)', qtd: '3,6 L (com filtro)', intervalo: '10.000 km ou 6 meses (5.000 km severo)' },
    cambio: { tipo: 'Manual (MQ200): SAE 75W-80 ou 75W-90 Sintético GL-4', qtd: '2,0 L', intervalo: '60.000 km' },
    diferencial: { tipo: 'Não se aplica', qtd: '-', intervalo: '-' },
    filtros: {
      oleo: { original: '030115561AN', tecfil: 'PSL55', mann: 'W712/22', wega: 'WO-100', fram: 'PH5949' },
      ar: { original: '032129620C', tecfil: 'ARL3280', mann: 'C3280', wega: 'FAP-3280', fram: 'CA8286' },
      combustivel: { original: '6QE201511', tecfil: 'GI04/7', mann: 'WK58/3', wega: 'FCI-1630', fram: 'G1025' },
      cabine: { original: '5U0819653', tecfil: 'ACP309', mann: 'CU2433', wega: 'AKX-1122', fram: 'CF11175' }
    }
  },
  'VW Gol 1.6 G6': {
    motor: { tipo: 'SAE 5W-40, 10W-40 ou 15W-40 (Norma VW 502.00 / 508.88 - Motor EA111)', qtd: '3,6 L (com filtro)', intervalo: '10.000 km ou 6 meses (5.000 km severo)' },
    cambio: { tipo: 'Manual (MQ200): SAE 75W-80 ou 75W-90 GL-4 / I-Motion: Tutela CS Speed', qtd: '2,0 L', intervalo: '60.000 km' },
    diferencial: { tipo: 'Não se aplica', qtd: '-', intervalo: '-' },
    filtros: {
      oleo: { original: '030115561AN', tecfil: 'PSL55', mann: 'W712/22', wega: 'WO-100', fram: 'PH5949' },
      ar: { original: '032129620C', tecfil: 'ARL3280', mann: 'C3280', wega: 'FAP-3280', fram: 'CA8286' },
      combustivel: { original: '6QE201511', tecfil: 'GI04/7', mann: 'WK58/3', wega: 'FCI-1630', fram: 'G1025' },
      cabine: { original: '5U0819653', tecfil: 'ACP309', mann: 'CU2433', wega: 'AKX-1122', fram: 'CF11175' }
    }
  },

  // --- VEÍCULOS UTILITÁRIOS & 4X4 ---
  'Agrale Marruá - AM21': {
    motor: { tipo: 'SAE 15W-40 ou 10W-40 (API CI-4 / CJ-4 / ACEA E7 - MWM Sprint 2.8 / Cummins ISF 2.8)', qtd: '7,0 L (Cummins) / 8,5 L (MWM)', intervalo: '5.000 - 10.000 km' },
    cambio: { tipo: 'Manual Eaton (FS-2305 / FSO-2405): SAE 50 Sintético ou 75W-90 / 80W-90 GL-4', qtd: '3,2 L', intervalo: '20.000 - 40.000 km' },
    transferencia: { tipo: 'ATF Dexron III (Caixa Agrale / BorgWarner) ou 85W-140 (conforme plaqueta)', qtd: '1,2 L a 1,5 L', intervalo: '20.000 - 40.000 km' },
    diferencial: { tipo: 'SAE 85W-140 ou 80W-90 API GL-5 (Eixos Dana 44 / 60 / 70)', qtd: 'Diant.: 1,5 L / Tras.: 2,5 L a 3,0 L', intervalo: '20.000 - 40.000 km' },
    filtros: {
      oleo: { original: '905700200021', tecfil: 'PEL106', mann: 'HU718/1x', wega: 'WOE-610', fram: 'CH9642' },
      ar: { original: '600700400012', tecfil: 'AR8480', mann: 'C24150', wega: 'FAP-4001', fram: 'CA8558' },
      combustivel: { original: '600700500010', tecfil: 'PCD33', mann: 'WK842/2', wega: 'FCI-1620', fram: 'P4156' },
      cabine: { original: 'Personalizado', tecfil: 'ACP301', mann: 'CU2842', wega: 'AKX-1120', fram: 'CF1028' }
    }
  },
  'Agrale Marruá - AM20': {
    motor: { tipo: 'SAE 15W-40 ou 10W-40 (API CI-4 / CJ-4 / ACEA E7 - MWM / Cummins)', qtd: '7,0 L a 8,5 L (com filtro)', intervalo: '5.000 - 10.000 km' },
    cambio: { tipo: 'Manual Eaton: SAE 50 Sintético ou 75W-90 GL-4', qtd: '3,2 L', intervalo: '20.000 - 40.000 km' },
    transferencia: { tipo: 'ATF Dexron III / Conforme Manual', qtd: '1,2 L a 1,5 L', intervalo: '20.000 - 40.000 km' },
    diferencial: { tipo: 'SAE 85W-140 ou 80W-90 API GL-5', qtd: 'Diant.: 1,5 L / Tras.: 2,5 L a 3,0 L', intervalo: '20.000 - 40.000 km' },
    filtros: {
      oleo: { original: '905700200021', tecfil: 'PEL106', mann: 'HU718/1x', wega: 'WOE-610', fram: 'CH9642' },
      ar: { original: '600700400012', tecfil: 'AR8480', mann: 'C24150', wega: 'FAP-4001', fram: 'CA8558' },
      combustivel: { original: '600700500010', tecfil: 'PCD33', mann: 'WK842/2', wega: 'FCI-1620', fram: 'P4156' }
    }
  },
  'Agrale Marruá - AM22': {
    motor: { tipo: 'SAE 15W-40 ou 10W-40 (API CI-4 / CJ-4 / ACEA E7 - MWM / Cummins)', qtd: '7,0 L a 8,5 L (com filtro)', intervalo: '5.000 - 10.000 km' },
    cambio: { tipo: 'Manual Eaton: SAE 50 Sintético ou 75W-90 GL-4', qtd: '3,2 L', intervalo: '20.000 - 40.000 km' },
    transferencia: { tipo: 'ATF Dexron III / Conforme Manual', qtd: '1,2 L a 1,5 L', intervalo: '20.000 - 40.000 km' },
    diferencial: { tipo: 'SAE 85W-140 ou 80W-90 API GL-5', qtd: 'Diant.: 1,5 L / Tras.: 2,5 L a 3,0 L', intervalo: '20.000 - 40.000 km' },
    filtros: {
      oleo: { original: '905700200021', tecfil: 'PEL106', mann: 'HU718/1x', wega: 'WOE-610', fram: 'CH9642' },
      ar: { original: '600700400012', tecfil: 'AR8480', mann: 'C24150', wega: 'FAP-4001', fram: 'CA8558' },
      combustivel: { original: '600700500010', tecfil: 'PCD33', mann: 'WK842/2', wega: 'FCI-1620', fram: 'P4156' }
    }
  },
  'Agrale Marruá - AM25': {
    motor: { tipo: 'SAE 15W-40 ou 10W-40 (API CI-4 / CJ-4 / ACEA E7 - MWM / Cummins)', qtd: '7,0 L a 8,5 L (com filtro)', intervalo: '5.000 - 10.000 km' },
    cambio: { tipo: 'Manual Eaton: SAE 50 Sintético ou 75W-90 GL-4', qtd: '3,2 L', intervalo: '20.000 - 40.000 km' },
    transferencia: { tipo: 'ATF Dexron III / Conforme Manual', qtd: '1,2 L a 1,5 L', intervalo: '20.000 - 40.000 km' },
    diferencial: { tipo: 'SAE 85W-140 ou 80W-90 API GL-5', qtd: 'Diant.: 1,5 L / Tras.: 2,5 L a 3,0 L', intervalo: '20.000 - 40.000 km' },
    filtros: {
      oleo: { original: '905700200021', tecfil: 'PEL106', mann: 'HU718/1x', wega: 'WOE-610', fram: 'CH9642' },
      ar: { original: '600700400012', tecfil: 'AR8480', mann: 'C24150', wega: 'FAP-4001', fram: 'CA8558' },
      combustivel: { original: '600700500010', tecfil: 'PCD33', mann: 'WK842/2', wega: 'FCI-1620', fram: 'P4156' }
    }
  },
  'Ford F-250 e F-350': {
    motor: { tipo: 'SAE 15W-40, 10W-40 ou 5W-40 (API CI-4 - Cummins 3.9 / MWM Sprint 4.2)', qtd: '11,0 L (Cummins) / 9,5 L (MWM)', intervalo: '10.000 km (5.000 km severo)' },
    cambio: { tipo: 'Manual ZF S5-420 / Eaton: ATF Dexron III ou SAE 75W-90 (conforme plaqueta)', qtd: '3,4 L (ZF) / 4,5 L (Eaton)', intervalo: '40.000 km' },
    transferencia: { tipo: 'ATF Mercon / Dexron III (BorgWarner 1356/4407)', qtd: '~1,5 L a 1,9 L', intervalo: '40.000 km' },
    diferencial: { tipo: 'SAE 85W-140 ou 80W-90 API GL-5 (Com aditivo LS se autoblocante)', qtd: 'Diant.: 2,0 L / Tras.: 3,5 L', intervalo: '40.000 km' },
    filtros: {
      oleo: { original: 'BF6X6714AA', tecfil: 'PSL341', mann: 'W950/26', wega: 'WO-210', fram: 'PH8A' },
      ar: { original: 'BC3Z9601A', tecfil: 'ARL8480', mann: 'C32170', wega: 'FAP-2830', fram: 'CA10427' },
      combustivel: { original: 'F81Z9N184AA', tecfil: 'PSD980', mann: 'WK1060x', wega: 'FCI-1620', fram: 'PS10038' }
    }
  },
  'Ford Ranger Power Stroke': {
    motor: { tipo: 'SAE 15W-40, 10W-40 ou 5W-40 (API CI-4 - Motor International 2.8)', qtd: '8,2 L (com filtro)', intervalo: '10.000 km (5.000 km severo)' },
    cambio: { tipo: 'Manual (Eaton FSO-2405): ATF Dexron III ou SAE 75W-90 GL-4', qtd: '2,8 L', intervalo: '40.000 km' },
    transferencia: { tipo: 'ATF Mercon / Dexron III', qtd: '1,4 L', intervalo: '40.000 km' },
    diferencial: { tipo: 'SAE 80W-90 ou 85W-140 API GL-5 (Com aditivo LS se Trac-Lok)', qtd: 'Diant.: 1,2 L / Tras.: 2,4 L', intervalo: '40.000 km' },
    filtros: {
      oleo: { original: 'BG2X6714AA', tecfil: 'PSL55', mann: 'W940/25', wega: 'WO-200', fram: 'PH2870' },
      ar: { original: 'WL5113Z40', tecfil: 'ARL4125', mann: 'C28132', wega: 'FAP-2830', fram: 'CA8286' },
      combustivel: { original: 'WL5113ZA5', tecfil: 'PSD470', mann: 'WK816x', wega: 'FCI-1630', fram: 'PS926' }
    }
  },
  'Ford Ranger 3.0 NGD': {
    motor: { tipo: 'SAE 15W-40, 10W-40 ou 5W-40 (API CI-4 - Motor International 3.0 Eletrônico)', qtd: '8,5 L (com filtro)', intervalo: '10.000 km (5.000 km severo)' },
    cambio: { tipo: 'Manual (Eaton FSO-2405): ATF Dexron III ou SAE 75W-90 GL-4', qtd: '3,0 L', intervalo: '40.000 km' },
    transferencia: { tipo: 'ATF Mercon / Dexron III', qtd: '1,4 L', intervalo: '40.000 km' },
    diferencial: { tipo: 'SAE 85W-140 ou 80W-90 API GL-5 (Com aditivo LS se Trac-Lok)', qtd: 'Diant.: 1,3 L / Tras.: 2,6 L', intervalo: '40.000 km' },
    filtros: {
      oleo: { original: 'BG2X6714AA', tecfil: 'PSL55', mann: 'W940/25', wega: 'WO-200', fram: 'PH2870' },
      ar: { original: 'BG2X9601AA', tecfil: 'ARL4130', mann: 'C28132', wega: 'FAP-2830', fram: 'CA8286' },
      combustivel: { original: 'BG2X9155AA', tecfil: 'PSD980', mann: 'WK816x', wega: 'FCI-1620', fram: 'PS926' }
    }
  },
  'Ford Ranger 2.2': {
    motor: { tipo: 'SAE 5W-30 Sintético (Norma Ford WSS-M2C913-C/D - Duratorq TDCi)', qtd: '8,6 L a 9,5 L (com filtro)', intervalo: '10.000 km ou 1 ano' },
    cambio: { tipo: 'Manual (MT82): SAE 75W FE (WSS-M2C200-D2) / Aut. (6R80): Mercon LV', qtd: 'Manual: 2,7 L / Aut.: ~10,5 L', intervalo: '40.000 - 60.000 km' },
    transferencia: { tipo: 'ATF Mercon LV (WSS-M2C938-A)', qtd: '1,2 L a 1,4 L', intervalo: '40.000 km' },
    diferencial: { tipo: 'SAE 75W-90 ou 80W-90 API GL-5', qtd: 'Diant.: 1,2 L / Tras.: 2,4 L', intervalo: '40.000 km' },
    filtros: {
      oleo: { original: 'U2Y014302', tecfil: 'PEL106', mann: 'HU711/51x', wega: 'WOE-610', fram: 'CH9642' },
      ar: { original: 'AB399601AB', tecfil: 'ARL8480', mann: 'C32170', wega: 'FAP-2830', fram: 'CA11250' },
      combustivel: { original: 'AB399155AD', tecfil: 'PSD980', mann: 'WK1060x', wega: 'FCI-1620', fram: 'PS10038' }
    }
  },
  'Ford Transit': {
    motor: { tipo: 'SAE 5W-30 Sintético (Ford WSS-M2C913-C/D - Alternativo: 10W-40 ACEA A5/B5)', qtd: '9,5 L a 10,3 L (com filtro)', intervalo: '15.000 km (7.500 km severo)' },
    cambio: { tipo: 'Manual (MT82 6 marchas): SAE 75W FE (WSS-M2C200-D2)', qtd: '2,8 L', intervalo: '50.000 km' },
    diferencial: { tipo: 'SAE 75W-90 ou 80W-90 API GL-5', qtd: '2,2 L a 2,8 L', intervalo: '50.000 km' },
    filtros: {
      oleo: { original: 'CC1Q6714AA', tecfil: 'PEL106', mann: 'HU711/51x', wega: 'WOE-610', fram: 'CH9642' },
      ar: { original: 'CC1Z9601A', tecfil: 'ARL8480', mann: 'C32170', wega: 'FAP-2830', fram: 'CA11250' },
      combustivel: { original: 'CC1Q9155AA', tecfil: 'PSD980', mann: 'WK1060x', wega: 'FCI-1620', fram: 'PS10038' }
    }
  },
  'Mitsubishi L200 2.5': {
    motor: { tipo: 'SAE 15W-40, 10W-40 ou 5W-40 (API CI-4 / ACEA B3/B4 - Motor 4D56)', qtd: '6,5 L a 7,0 L (com filtro)', intervalo: '10.000 km (5.000 km severo)' },
    cambio: { tipo: 'Manual (V5MT1 / R5M21): SAE 75W-85 ou 75W-90 API GL-4', qtd: '2,2 L a 2,5 L', intervalo: '40.000 km' },
    transferencia: { tipo: 'SAE 75W-85 ou 75W-90 API GL-4', qtd: '2,2 L', intervalo: '40.000 km' },
    diferencial: { tipo: 'SAE 80W-90 ou 85W-140 API GL-5 (Com aditivo LS se autoblocante)', qtd: 'Diant.: 1,2 L / Tras.: 2,6 L', intervalo: '40.000 km' },
    filtros: {
      oleo: { original: 'MD360935', tecfil: 'PSL55', mann: 'W712', wega: 'WO-100', fram: 'PH2870' },
      ar: { original: 'MR529773', tecfil: 'ARL4122', mann: 'C26168', wega: 'FAP-4030', fram: 'CA8286' },
      combustivel: { original: 'MB220900', tecfil: 'PSD980', mann: 'WK723', wega: 'FCI-1620', fram: 'PS926' }
    }
  },
  'Mitsubishi Triton 3.2': {
    motor: { tipo: 'SAE 15W-40, 10W-40 ou 5W-40 (API CI-4 / CJ-4 / ACEA B3/B4 - Motor 4M41)', qtd: '9,3 L (com filtro)', intervalo: '10.000 km (5.000 km severo)' },
    cambio: { tipo: 'Manual: SAE 75W-85 ou 75W-90 GL-4 / Automático: ATF SP-III', qtd: 'Manual: 3,2 L / Aut.: ~9,7 L', intervalo: '40.000 km' },
    transferencia: { tipo: 'SAE 75W-85 ou 75W-90 API GL-4', qtd: '2,5 L', intervalo: '40.000 km' },
    diferencial: { tipo: 'SAE 80W-90 ou 85W-140 API GL-5', qtd: 'Diant.: 1,2 L / Tras.: 2,8 L', intervalo: '40.000 km' },
    filtros: {
      oleo: { original: '1230A186', tecfil: 'PEL106', mann: 'HU711/51x', wega: 'WOE-610', fram: 'CH9642' },
      ar: { original: '1500A023', tecfil: 'ARL8480', mann: 'C27132', wega: 'FAP-4030', fram: 'CA10427' },
      combustivel: { original: '1770A107', tecfil: 'PSD980', mann: 'WK1060x', wega: 'FCI-1620', fram: 'PS10038' }
    }
  },
  'Mitsubishi Triton 2.4': {
    motor: { tipo: 'Diesel (4N15): SAE 5W-30 ou 0W-30 ACEA C2/C3 / Flex (4G64): 5W-30 ou 10W-40 SN', qtd: '8,4 L (Diesel) / 4,6 L (Flex)', intervalo: '10.000 km (5.000 km severo)' },
    cambio: { tipo: 'Manual: SAE 75W-80 / 75W-85 GL-4 / Automático: ATF-PA / SP-III', qtd: 'Manual: 2,8 L / Aut.: ~9,0 L', intervalo: '40.000 km' },
    transferencia: { tipo: 'SAE 75W-85 API GL-4', qtd: '2,4 L', intervalo: '40.000 km' },
    diferencial: { tipo: 'SAE 80W-90 API GL-5', qtd: 'Diant.: 1,2 L / Tras.: 2,8 L', intervalo: '40.000 km' },
    filtros: {
      oleo: { original: '1230A186', tecfil: 'PEL106', mann: 'HU711/51x', wega: 'WOE-610', fram: 'CH9642' },
      ar: { original: '1500A593', tecfil: 'ARL8480', mann: 'C27132', wega: 'FAP-4030', fram: 'CA10427' },
      combustivel: { original: '1770A225', tecfil: 'PSD980', mann: 'WK1060x', wega: 'FCI-1620', fram: 'PS10038' }
    }
  },
  'Nissan Frontier 2.5': {
    motor: { tipo: 'SAE 5W-30 (com DPF - ACEA C3/C4) ou 10W-40 / 15W-40 (sem DPF - API CI-4 - Motor YD25)', qtd: '6,9 L (com filtro)', intervalo: '10.000 km (5.000 km severo)' },
    cambio: { tipo: 'Manual (6M): SAE 75W-85 GL-4 / Automático (5M): Nissan Matic J ou S', qtd: 'Manual: 3,8 L / Aut.: ~10,3 L', intervalo: '40.000 km' },
    transferencia: { tipo: 'ATF Nissan Matic D (Dexron III)', qtd: '2,0 L', intervalo: '40.000 km' },
    diferencial: { tipo: 'SAE 80W-90 API GL-5 (Dianteiro) / 80W-90 ou 75W-140 GL-5 (Traseiro)', qtd: 'Diant.: 0,85 L / Tras.: 1,6 L a 2,0 L', intervalo: '40.000 km' },
    filtros: {
      oleo: { original: '15208BN30A', tecfil: 'PSL158', mann: 'W610/3', wega: 'JFO0104', fram: 'PH4967' },
      ar: { original: '16546EB300', tecfil: 'ARL1655', mann: 'C27003', wega: 'JFA0137', fram: 'CA10427' },
      combustivel: { original: '16400EB30A', tecfil: 'PSC993', mann: 'WK920/6', wega: 'JFC105', fram: 'PS10038' }
    }
  },
  'Nissan Frontier 2.3': {
    motor: { tipo: 'SAE 5W-30 ou 5W-40 Sintético Low SAPS (Norma Renault RN0720 / ACEA C4 - Motor YS23)', qtd: '7,4 L (com filtro)', intervalo: '10.000 km (5.000 km severo)' },
    cambio: { tipo: 'Manual: SAE 75W-80 GL-4 / Automático (7M): Nissan Matic S', qtd: 'Manual: 2,2 L / Aut.: ~9,0 L', intervalo: '40.000 km' },
    transferencia: { tipo: 'ATF Nissan Matic D (Dexron III)', qtd: '1,5 L', intervalo: '40.000 km' },
    diferencial: { tipo: 'SAE 80W-90 API GL-5', qtd: 'Diant.: 1,3 L / Tras.: 2,2 L', intervalo: '40.000 km' },
    filtros: {
      oleo: { original: '1520800Q0A', tecfil: 'PEL106', mann: 'HU711/51x', wega: 'WOE-610', fram: 'CH9642' },
      ar: { original: '165464KV0A', tecfil: 'ARL8480', mann: 'C32170', wega: 'FAP-2830', fram: 'CA11250' },
      combustivel: { original: '164004KV0A', tecfil: 'PSD980', mann: 'WK1060x', wega: 'FCI-1620', fram: 'PS10038' }
    }
  },
  'Toyota Hilux 3.0': {
    motor: { tipo: 'SAE 5W-30, 10W-30, 10W-40 ou 15W-40 (API CF-4/CI-4 ou ACEA B1/B3/B4 - Motor 1KD-FTV)', qtd: '7,0 L (com filtro)', intervalo: '10.000 km (5.000 km severo)' },
    cambio: { tipo: 'Manual (R151F): SAE 75W-90 GL-4/GL-5 / Automático: ATF WS', qtd: 'Manual: 2,2 L / Aut.: ~9,8 L', intervalo: '40.000 km' },
    transferencia: { tipo: 'SAE 75W-90 API GL-4', qtd: '1,0 L', intervalo: '40.000 km' },
    diferencial: { tipo: 'SAE 80W-90 ou 85W-140 API GL-5 (Com aditivo LSD se equipado)', qtd: 'Diant.: 1,4 L / Tras.: 3,5 L', intervalo: '40.000 km' },
    filtros: {
      oleo: { original: '90915YZZD2', tecfil: 'PSL55', mann: 'W712', wega: 'WO-100', fram: 'PH2870' },
      ar: { original: '178010L040', tecfil: 'ARL4125', mann: 'C27132', wega: 'FAP-3280', fram: 'CA8286' },
      combustivel: { original: '233900L010', tecfil: 'PSD470', mann: 'WK816x', wega: 'FCI-1630', fram: 'PS926' }
    }
  },
  'Toyota Hilux 2.8 - Nova': {
    motor: { tipo: 'SAE 0W-20, 5W-30 ou 10W-30 Sintético (ACEA C2 - Motor 1GD-FTV com DPF)', qtd: '7,5 L a 7,9 L (com filtro)', intervalo: '10.000 km (5.000 km severo)' },
    cambio: { tipo: 'Manual (6M): SAE 75W-85 GL-4 / Automático (6M): Toyota ATF WS', qtd: 'Manual: 2,2 L / Aut.: ~9,5 L', intervalo: '40.000 km' },
    transferencia: { tipo: 'SAE 75W API GL-4 (Toyota Transfer Gear Oil LF)', qtd: '1,0 L', intervalo: '40.000 km' },
    diferencial: { tipo: 'SAE 75W-85 ou 80W-90 API GL-5', qtd: 'Diant.: 1,4 L / Tras.: 3,5 L', intervalo: '40.000 km' },
    filtros: {
      oleo: { original: '04152YZZA6', tecfil: 'PEL106', mann: 'HU711/51x', wega: 'WOE-610', fram: 'CH9642' },
      ar: { original: '1780111130', tecfil: 'ARL8480', mann: 'C32170', wega: 'FAP-3280', fram: 'CA11250' },
      combustivel: { original: '233900E020', tecfil: 'PSD980', mann: 'WK1060x', wega: 'FCI-1620', fram: 'PS10038' }
    }
  },

  // --- CAMINHÕES & ÔNIBUS/VANS ---
  'Ford Cargo 816': {
    motor: { tipo: 'SAE 15W-40 ou 10W-40 (API CI-4 / CJ-4 - Cummins ISB 4.5 Euro V)', qtd: '11,0 L a 13,0 L (com filtro)', intervalo: '10.000 - 15.000 km' },
    cambio: { tipo: 'Manual Eaton FSO-4505: SAE 75W-90 Sintético ou 80W-90 GL-4', qtd: '3,8 L a 4,2 L', intervalo: '40.000 km' },
    diferencial: { tipo: 'SAE 85W-140 API GL-5', qtd: '3,0 L a 4,5 L', intervalo: '40.000 km' },
    filtros: {
      oleo: { original: 'BG1X6714AA', tecfil: 'PEL106', mann: 'W950/26', wega: 'WO-210', fram: 'PH8A' },
      ar: { original: 'BG1X9601BA', tecfil: 'ARL8480', mann: 'C17308', wega: 'FAP-4001', fram: 'CA8558' },
      combustivel: { original: 'BG1X9155AA', tecfil: 'PSD980', mann: 'WK954/2x', wega: 'FCI-1620', fram: 'PS10038' }
    }
  },
  'Ford Cargo 2423': {
    motor: { tipo: 'SAE 15W-40 ou 10W-40 (API CI-4 / CJ-4 - Cummins ISB 6.7 Euro V)', qtd: '15,0 L a 18,5 L (com filtro)', intervalo: '20.000 km (10.000 km severo)' },
    cambio: { tipo: 'Manual Eaton FS-6306B: SAE 50 Sintético ou 80W-90 GL-4', qtd: '9,5 L', intervalo: '40.000 - 60.000 km' },
    diferencial: { tipo: 'SAE 85W-140 API GL-5', qtd: '16,0 L (com cubo)', intervalo: '40.000 km' },
    filtros: {
      oleo: { original: 'BG2X6714AA', tecfil: 'PEL106', mann: 'W950/26', wega: 'WO-210', fram: 'PH8A' },
      ar: { original: 'BG2X9601AA', tecfil: 'ARL8480', mann: 'C27109', wega: 'FAP-2830', fram: 'CA10427' },
      combustivel: { original: 'BG2X9155AA', tecfil: 'PSD980', mann: 'WK954/2x', wega: 'FCI-1620', fram: 'PS10038' }
    }
  },
  'Ford - 2629 Bau': {
    motor: { tipo: 'SAE 15W-40 ou 10W-40 (API CI-4 / CJ-4 - Cummins ISB 6.7 286cv)', qtd: '18,5 L (com filtro)', intervalo: '20.000 km (10.000 km severo)' },
    cambio: { tipo: 'Manual Eaton RT-8908LL / FS-6406B: SAE 50 Sintético ou 80W-90', qtd: '11,0 L', intervalo: '40.000 - 60.000 km' },
    diferencial: { tipo: 'SAE 85W-140 API GL-5 (Eixos Traseiros 6x4)', qtd: '1º Eixo: 14 L / 2º Eixo: 12 L', intervalo: '40.000 km' },
    filtros: {
      oleo: { original: 'BH1X6714AA', tecfil: 'PEL106', mann: 'W950/26', wega: 'WO-210', fram: 'PH8A' },
      ar: { original: 'BH1X9601AA', tecfil: 'ARL8480', mann: 'C27830', wega: 'FAP-2830', fram: 'CA10427' },
      combustivel: { original: 'BH1X9155AA', tecfil: 'PSD980', mann: 'WK954/2x', wega: 'FCI-1620', fram: 'PS10038' }
    }
  },
  'Ford - 2629 CTA e CTC': {
    motor: { tipo: 'SAE 15W-40 ou 10W-40 (API CI-4 / CJ-4 - Cummins ISB 6.7 286cv)', qtd: '18,5 L (com filtro)', intervalo: '20.000 km (10.000 km severo)' },
    cambio: { tipo: 'Manual Eaton RT-8908LL: SAE 50 Sintético ou 80W-90', qtd: '11,0 L', intervalo: '40.000 - 60.000 km' },
    diferencial: { tipo: 'SAE 85W-140 API GL-5 (Eixos Traseiros 6x4)', qtd: '1º Eixo: 14 L / 2º Eixo: 12 L', intervalo: '40.000 km' },
    filtros: {
      oleo: { original: 'BH1X6714AA', tecfil: 'PEL106', mann: 'W950/26', wega: 'WO-210', fram: 'PH8A' },
      ar: { original: 'BH1X9601AA', tecfil: 'ARL8480', mann: 'C27830', wega: 'FAP-2830', fram: 'CA10427' },
      combustivel: { original: 'BH1X9155AA', tecfil: 'PSD980', mann: 'WK954/2x', wega: 'FCI-1620', fram: 'PS10038' }
    }
  },
  'Ford 1933 Cav Mec': {
    motor: { tipo: 'SAE 15W-40 ou 10W-40 (API CI-4 / CJ-4 - Cummins ISL 8.9)', qtd: '22,0 L a 24,0 L (com filtro)', intervalo: '20.000 - 30.000 km' },
    cambio: { tipo: 'Manual Eaton FTS-16108LL / Automatizado Torqshift: SAE 50 Sintético', qtd: '12,5 L', intervalo: '60.000 km' },
    diferencial: { tipo: 'SAE 85W-140 API GL-5', qtd: '16,0 L a 18,0 L', intervalo: '50.000 km' },
    filtros: {
      oleo: { original: 'CC1Q6714AA', tecfil: 'PEL106', mann: 'W950/26', wega: 'WO-210', fram: 'PH8A' },
      ar: { original: 'CC1Z9601A', tecfil: 'ARL8480', mann: 'C27830', wega: 'FAP-2830', fram: 'CA10427' },
      combustivel: { original: 'CC1Q9155AA', tecfil: 'PSD980', mann: 'WK1060x', wega: 'FCI-1620', fram: 'PS10038' }
    }
  },
  'Mercedes-Benz 2627': {
    motor: { tipo: 'SAE 15W-40 ou 10W-40 (Norma MB 228.3 / 228.5 - Motor OM 926 LA)', qtd: '28,0 L (com filtro)', intervalo: '20.000 - 30.000 km' },
    cambio: { tipo: 'Manual MB G-131 / G-211: SAE 80W ou 75W-90 (MB 235.1 / 235.11)', qtd: '11,0 L', intervalo: '50.000 km' },
    diferencial: { tipo: 'SAE 85W-140 API GL-5 (MB 235.0 - Eixos com redução nos cubos)', qtd: '1º Eixo: 14 L / 2º Eixo: 11 L + Cubos', intervalo: '50.000 km' },
    filtros: {
      oleo: { original: 'A0001802609', tecfil: 'PEL108', mann: 'HU934/2x', wega: 'WO-530', fram: 'CH9939' },
      ar: { original: 'A0030944004', tecfil: 'ARL8480', mann: 'C25125', wega: 'FAP-2830', fram: 'CA10427' },
      combustivel: { original: 'A0000903651', tecfil: 'PSD980', mann: 'PU936/1x', wega: 'FCI-1620', fram: 'PS10038' }
    }
  },
  'Mercedes-Benz 915c': {
    motor: { tipo: 'SAE 15W-40 ou 10W-40 (Norma MB 228.3 / 228.5 - Motor OM 904 LA)', qtd: '15,0 L (com filtro)', intervalo: '15.000 - 20.000 km' },
    cambio: { tipo: 'Manual MB G-60: SAE 80W ou 75W-90 (MB 235.1)', qtd: '5,5 L a 6,5 L', intervalo: '40.000 km' },
    diferencial: { tipo: 'SAE 85W-140 API GL-5 (MB 235.0)', qtd: '4,5 L', intervalo: '40.000 km' },
    filtros: {
      oleo: { original: 'A0001802609', tecfil: 'PEL108', mann: 'HU934/2x', wega: 'WO-530', fram: 'CH9939' },
      ar: { original: 'A0030944004', tecfil: 'ARL8480', mann: 'C25125', wega: 'FAP-2830', fram: 'CA10427' },
      combustivel: { original: 'A0000903651', tecfil: 'PSD980', mann: 'PU936/1x', wega: 'FCI-1620', fram: 'PS10038' }
    }
  },
  'Mercedes-Benz 1418E': {
    motor: { tipo: 'SAE 15W-40 ou 10W-40 (Norma MB 228.3 - Motor OM 904 LA)', qtd: '15,0 L a 17,0 L (com filtro)', intervalo: '20.000 km' },
    cambio: { tipo: 'Manual MB G-60 / G-85: SAE 80W (MB 235.1)', qtd: '8,0 L a 9,0 L', intervalo: '40.000 km' },
    diferencial: { tipo: 'SAE 85W-140 API GL-5 (MB 235.0)', qtd: '10,0 L', intervalo: '40.000 km' },
    filtros: {
      oleo: { original: 'A0001802609', tecfil: 'PEL108', mann: 'HU934/2x', wega: 'WO-530', fram: 'CH9939' },
      ar: { original: 'A0030944004', tecfil: 'ARL8480', mann: 'C25125', wega: 'FAP-2830', fram: 'CA10427' },
      combustivel: { original: 'A0000903651', tecfil: 'PSD980', mann: 'PU936/1x', wega: 'FCI-1620', fram: 'PS10038' }
    }
  },
  'Mercedes-Benz AXOR 3344': {
    motor: { tipo: 'SAE 15W-40, 10W-40 ou 5W-30 (Norma MB 228.5 / 228.51 - Motor OM 457 LA)', qtd: '34,0 L a 36,0 L (com filtro)', intervalo: '30.000 km (15.000 km severo)' },
    cambio: { tipo: 'Automatizado PowerShift / Manual MB G-240: SAE 75W-90 Sintético (MB 235.11)', qtd: '13,0 L', intervalo: '60.000 km' },
    transferencia: { tipo: 'SAE 75W-90 ou 80W (MB 235.1 / 235.11 - Caixa Transferência VG1700/2400)', qtd: '8,0 L', intervalo: '50.000 km' },
    diferencial: { tipo: 'SAE 85W-140 API GL-5 (MB 235.0 - Carcaças + Cubos redutores)', qtd: '1º Eixo: 14 L / 2º Eixo: 11 L + 2,5 L/cubo', intervalo: '50.000 km' },
    filtros: {
      oleo: { original: 'A5411840225', tecfil: 'PEL108', mann: 'HU12103x', wega: 'WO-530', fram: 'CH9939' },
      ar: { original: 'A0040943404', tecfil: 'ARL8480', mann: 'C311295', wega: 'FAP-2830', fram: 'CA10427' },
      combustivel: { original: 'A0000904251', tecfil: 'PSD980', mann: 'PU1040x', wega: 'FCI-1620', fram: 'PS10038' }
    }
  },
  'Mercedes-Benz Atego 1725': {
    motor: { tipo: 'SAE 15W-40 ou 10W-40 (Norma MB 228.3 / 228.5 - Motor OM 906 LA)', qtd: '27,0 L a 29,0 L (com filtro)', intervalo: '20.000 - 30.000 km' },
    cambio: { tipo: 'Manual MB G-85: SAE 80W (MB 235.1)', qtd: '9,0 L', intervalo: '40.000 km' },
    diferencial: { tipo: 'SAE 85W-140 API GL-5 (MB 235.0)', qtd: '12,0 L', intervalo: '40.000 km' },
    filtros: {
      oleo: { original: 'A0001802609', tecfil: 'PEL108', mann: 'HU934/2x', wega: 'WO-530', fram: 'CH9939' },
      ar: { original: 'A0030944004', tecfil: 'ARL8480', mann: 'C25125', wega: 'FAP-2830', fram: 'CA10427' },
      combustivel: { original: 'A0000903651', tecfil: 'PSD980', mann: 'PU936/1x', wega: 'FCI-1620', fram: 'PS10038' }
    }
  },
  'VW Work 815': {
    motor: { tipo: 'SAE 15W-40 ou 10W-40 (API CI-4 / ACEA E7 - Cummins / MWM 4.10)', qtd: '11,0 L (com filtro)', intervalo: '10.000 km' },
    cambio: { tipo: 'Manual Eaton FS-4205A: SAE 75W-90 Sintético ou 80W-90 GL-4', qtd: '3,8 L a 4,2 L', intervalo: '40.000 km' },
    diferencial: { tipo: 'SAE 85W-140 API GL-5', qtd: '3,0 L a 4,0 L', intervalo: '40.000 km' },
    filtros: {
      oleo: { original: '2R0115561', tecfil: 'PEL106', mann: 'W950/26', wega: 'WO-210', fram: 'PH8A' },
      ar: { original: '2T0129620', tecfil: 'ARL8480', mann: 'C17308', wega: 'FAP-4001', fram: 'CA8558' },
      combustivel: { original: '2R0201511', tecfil: 'PSD980', mann: 'WK950/21', wega: 'FCI-1620', fram: 'PS10038' }
    }
  },
  'VW Work 5-Ton 15-180': {
    motor: { tipo: 'SAE 15W-40 ou 10W-40 (API CI-4 - MWM 6.10 TCA / Cummins)', qtd: '13,0 L a 15,0 L (com filtro)', intervalo: '15.000 km' },
    cambio: { tipo: 'Manual Eaton FS-5306A: SAE 80W-90 GL-4 ou SAE 50 Sintético', qtd: '5,5 L a 8,5 L', intervalo: '40.000 km' },
    diferencial: { tipo: 'SAE 85W-140 API GL-5', qtd: '6,0 L a 10,0 L', intervalo: '40.000 km' },
    filtros: {
      oleo: { original: '2R0115561', tecfil: 'PEL106', mann: 'W950/26', wega: 'WO-210', fram: 'PH8A' },
      ar: { original: '2T0129620', tecfil: 'ARL8480', mann: 'C17308', wega: 'FAP-4001', fram: 'CA8558' },
      combustivel: { original: '2R0201511', tecfil: 'PSD980', mann: 'WK950/21', wega: 'FCI-1620', fram: 'PS10038' }
    }
  },
  'VW Work 7-Ton Comercial': {
    motor: { tipo: 'SAE 15W-40 ou 10W-40 (API CI-4 - Cummins / MWM)', qtd: '15,0 L (com filtro)', intervalo: '15.000 km' },
    cambio: { tipo: 'Manual Eaton / ZF: SAE 80W-90 GL-4', qtd: '7,0 L a 8,5 L', intervalo: '40.000 km' },
    diferencial: { tipo: 'SAE 85W-140 API GL-5', qtd: '8,0 L a 11,0 L', intervalo: '40.000 km' },
    filtros: {
      oleo: { original: '2R0115561', tecfil: 'PEL106', mann: 'W950/26', wega: 'WO-210', fram: 'PH8A' },
      ar: { original: '2T0129620', tecfil: 'ARL8480', mann: 'C27830', wega: 'FAP-2830', fram: 'CA10427' },
      combustivel: { original: '2R0201511', tecfil: 'PSD980', mann: 'WK950/21', wega: 'FCI-1620', fram: 'PS10038' }
    }
  },
  'VW Work 24-220': {
    motor: { tipo: 'SAE 15W-40 ou 10W-40 (API CI-4 - Cummins 6CTAA 8.3)', qtd: '19,0 L a 21,0 L (com filtro)', intervalo: '15.000 km' },
    cambio: { tipo: 'Manual Eaton RT-8908LL / FS-6306: SAE 50 Sintético ou 80W-90', qtd: '9,5 L a 12,0 L', intervalo: '40.000 km' },
    diferencial: { tipo: 'SAE 85W-140 API GL-5 (Eixo Meritor 6x2)', qtd: '14,0 L a 16,0 L', intervalo: '40.000 km' },
    filtros: {
      oleo: { original: '2R0115561', tecfil: 'PEL106', mann: 'W950/26', wega: 'WO-210', fram: 'PH8A' },
      ar: { original: '2T0129620', tecfil: 'ARL8480', mann: 'C27830', wega: 'FAP-2830', fram: 'CA10427' },
      combustivel: { original: '2R0201511', tecfil: 'PSD980', mann: 'WK950/21', wega: 'FCI-1620', fram: 'PS10038' }
    }
  },
  'VW Work 26-220': {
    motor: { tipo: 'SAE 15W-40 ou 10W-40 (API CI-4 - Cummins 6CTAA 8.3)', qtd: '19,0 L a 21,0 L (com filtro)', intervalo: '15.000 km' },
    cambio: { tipo: 'Manual Eaton RT-8908LL: SAE 50 Sintético ou 80W-90', qtd: '12,0 L', intervalo: '40.000 km' },
    diferencial: { tipo: 'SAE 85W-140 API GL-5 (Eixos Traseiros 6x4)', qtd: '1º Eixo: 15 L / 2º Eixo: 12 L', intervalo: '40.000 km' },
    filtros: {
      oleo: { original: '2R0115561', tecfil: 'PEL106', mann: 'W950/26', wega: 'WO-210', fram: 'PH8A' },
      ar: { original: '2T0129620', tecfil: 'ARL8480', mann: 'C27830', wega: 'FAP-2830', fram: 'CA10427' },
      combustivel: { original: '2R0201511', tecfil: 'PSD980', mann: 'WK950/21', wega: 'FCI-1620', fram: 'PS10038' }
    }
  },
  'VW Work 26-260E': {
    motor: { tipo: 'SAE 15W-40 ou 10W-40 (API CI-4 - MWM 6.12 TCAE Eletrônico)', qtd: '16,5 L a 18,0 L (com filtro)', intervalo: '20.000 km' },
    cambio: { tipo: 'Manual Eaton RT-8908LL / ZF: SAE 50 Sintético ou 80W-90', qtd: '10,0 L a 12,0 L', intervalo: '40.000 km' },
    diferencial: { tipo: 'SAE 85W-140 API GL-5 (Eixos Traseiros 6x4)', qtd: '1º Eixo: 15 L / 2º Eixo: 12 L', intervalo: '40.000 km' },
    filtros: {
      oleo: { original: '2R0115561', tecfil: 'PEL106', mann: 'W950/26', wega: 'WO-210', fram: 'PH8A' },
      ar: { original: '2T0129620', tecfil: 'ARL8480', mann: 'C27830', wega: 'FAP-2830', fram: 'CA10427' },
      combustivel: { original: '2R0201511', tecfil: 'PSD980', mann: 'WK950/21', wega: 'FCI-1620', fram: 'PS10038' }
    }
  },
  'VW Constellation 24-250': {
    motor: { tipo: 'SAE 15W-40 ou 10W-40 (API CI-4 - Cummins Interact 6.0 ISBe)', qtd: '17,5 L a 19,0 L (com filtro)', intervalo: '20.000 km' },
    cambio: { tipo: 'Manual ZF 9S-1110 TD: SAE 80W-90 GL-4 ou 75W-80 Sintético', qtd: '9,5 L', intervalo: '40.000 km' },
    diferencial: { tipo: 'SAE 85W-140 API GL-5', qtd: '14,0 L', intervalo: '40.000 km' },
    filtros: {
      oleo: { original: '2R0115561', tecfil: 'PEL106', mann: 'W950/26', wega: 'WO-210', fram: 'PH8A' },
      ar: { original: '2T0129620', tecfil: 'ARL8480', mann: 'C27830', wega: 'FAP-2830', fram: 'CA10427' },
      combustivel: { original: '2R0201511', tecfil: 'PSD980', mann: 'WK950/21', wega: 'FCI-1620', fram: 'PS10038' }
    }
  },
  'VW Constellation 26-280': {
    motor: { tipo: 'SAE 15W-40 ou 10W-40 (Norma MAN M3275 / M3477 - Motor MAN D08 36)', qtd: '23,0 L a 25,0 L (com filtro)', intervalo: '30.000 km (15.000 km severo)' },
    cambio: { tipo: 'Manual ZF 16S-1585 TD: SAE 75W-80 Sintético (ZF TE-ML 02L)', qtd: '11,0 L', intervalo: '50.000 km' },
    diferencial: { tipo: 'SAE 85W-140 API GL-5 (Eixos Traseiros 6x4)', qtd: '1º Eixo: 15 L / 2º Eixo: 12 L', intervalo: '50.000 km' },
    filtros: {
      oleo: { original: '2V0115561', tecfil: 'PEL108', mann: 'HU934/2x', wega: 'WO-530', fram: 'CH9939' },
      ar: { original: '2V0129620', tecfil: 'ARL8480', mann: 'C27830', wega: 'FAP-2830', fram: 'CA10427' },
      combustivel: { original: '2V0201511', tecfil: 'PSD980', mann: 'PU936/1x', wega: 'FCI-1620', fram: 'PS10038' }
    }
  },
  'VW Constellation 31-320': {
    motor: { tipo: 'SAE 15W-40 ou 10W-40 (API CI-4 - Cummins ISC 8.3)', qtd: '22,0 L a 24,0 L (com filtro)', intervalo: '20.000 km' },
    cambio: { tipo: 'Manual ZF 16S-1585 TD: SAE 80W-90 GL-4 ou 75W-80 Sintético', qtd: '11,0 L', intervalo: '40.000 km' },
    diferencial: { tipo: 'SAE 85W-140 API GL-5 (Eixos Traseiros 6x4)', qtd: '1º Eixo: 15 L / 2º Eixo: 12 L', intervalo: '40.000 km' },
    filtros: {
      oleo: { original: '2R0115561', tecfil: 'PEL106', mann: 'W950/26', wega: 'WO-210', fram: 'PH8A' },
      ar: { original: '2T0129620', tecfil: 'ARL8480', mann: 'C27830', wega: 'FAP-2830', fram: 'CA10427' },
      combustivel: { original: '2R0201511', tecfil: 'PSD980', mann: 'WK950/21', wega: 'FCI-1620', fram: 'PS10038' }
    }
  },
  'Fiat Ducato 2.3 Multijet': {
    motor: { tipo: 'SAE 5W-30 Sintético (Norma Fiat 9.55535-S1 / ACEA C2 - Motor FPT F1A)', qtd: '5,9 L a 6,5 L (com filtro)', intervalo: '20.000 km (10.000 km severo)' },
    cambio: { tipo: 'Manual (MLGU 6M): SAE 75W-80 API GL-4/GL-5 (Tutela Car Technyx)', qtd: '2,7 L', intervalo: '60.000 km' },
    diferencial: { tipo: 'Não se aplica (Tração Dianteira - integrado ao câmbio)', qtd: '-', intervalo: '-' },
    filtros: {
      oleo: { original: '71754238', tecfil: 'PEL106', mann: 'HU711/51x', wega: 'WO-130', fram: 'CH9642' },
      ar: { original: '1347585080', tecfil: 'ARL8480', mann: 'C2730', wega: 'FAP-4025', fram: 'CA10222' },
      combustivel: { original: '77366565', tecfil: 'PSD980', mann: 'WK853', wega: 'FCI-1620', fram: 'PS10038' }
    }
  },
  'Fiat Ducato 2.8': {
    motor: { tipo: 'SAE 15W-40, 10W-40 ou 5W-40 (API CF-4/CI-4 / ACEA B3/B4 - Motor 8140.43S)', qtd: '6,3 L a 6,7 L (com filtro)', intervalo: '10.000 km (5.000 km severo)' },
    cambio: { tipo: 'Manual (ML5T / MG5T): SAE 75W-80 ou 80W API GL-4/GL-5', qtd: '2,7 L', intervalo: '40.000 km' },
    diferencial: { tipo: 'Não se aplica (Tração Dianteira - integrado ao câmbio)', qtd: '-', intervalo: '-' },
    filtros: {
      oleo: { original: '98401344', tecfil: 'PSL55', mann: 'W940/25', wega: 'WO-200', fram: 'PH2870' },
      ar: { original: '1318255080', tecfil: 'ARL4125', mann: 'C2830', wega: 'FAP-2830', fram: 'CA9926' },
      combustivel: { original: '98401345', tecfil: 'PSD470', mann: 'WK842/2', wega: 'FCI-1620', fram: 'P4156' }
    }
  },
  'Iveco - Daily 35S14': {
    motor: { tipo: 'SAE 5W-30 Sintético (Low SAPS ACEA C2/C3 - com DPF) ou 10W-40 / 15W-40 (sem DPF - Motor F1C 3.0)', qtd: '6,5 L a 7,6 L (com filtro)', intervalo: '20.000 km (10.000 km severo)' },
    cambio: { tipo: 'Manual ZF 6S-400: SAE 75W-80 ou 75W-85 API GL-4', qtd: '2,2 L', intervalo: '60.000 km' },
    diferencial: { tipo: 'SAE 80W-90 ou 85W-140 API GL-5', qtd: '2,5 L', intervalo: '50.000 km' },
    filtros: {
      oleo: { original: '5801382496', tecfil: 'PEL106', mann: 'HU711/51x', wega: 'WOE-610', fram: 'CH9642' },
      ar: { original: '5801382497', tecfil: 'ARL8480', mann: 'C27920', wega: 'FAP-2830', fram: 'CA10427' },
      combustivel: { original: '5801382498', tecfil: 'PSD980', mann: 'WK1040', wega: 'FCI-1620', fram: 'PS10038' }
    }
  }
};

}; // fim de especificacoesOleos

/* ==========================================================
   AUDITORIA TÉCNICA DAS APLICAÇÕES
   - status PARCIAL: somente a variante e os itens descritos na observação foram conferidos.
   - status PENDENTE: não tratar os valores herdados como aplicação homologada.
   - Sempre conferir ano, código do motor, transmissão e chassi antes de comprar/abastecer.
   Esta estrutura é adicional e não altera a forma de leitura de bancoDeDados/especificacoesOleos.
   ========================================================== */
/* ATENÇÃO: não considerar toda a base homologada. Consulte auditoriaAplicacoes no final;
   os registros PENDENTE não devem ser usados para compra/abastecimento sem validação. */
const auditoriaAplicacoes = {
  "Chevrolet SPIN": { status: "PENDENTE", observacao: "Aplicação não validada integralmente. Faltam ano/modelo, código exato do motor e/ou transmissão; referências de filtros de cada fabricante e capacidades/intervalos precisam ser conferidos em catálogo ou manual específico antes de uso.", fontes: [] },
  "Chevrolet Agile": { status: "PENDENTE", observacao: "Aplicação não validada integralmente. Faltam ano/modelo, código exato do motor e/ou transmissão; referências de filtros de cada fabricante e capacidades/intervalos precisam ser conferidos em catálogo ou manual específico antes de uso.", fontes: [] },
  "Chevrolet Montana": { status: "PENDENTE", observacao: "Aplicação não validada integralmente. Faltam ano/modelo, código exato do motor e/ou transmissão; referências de filtros de cada fabricante e capacidades/intervalos precisam ser conferidos em catálogo ou manual específico antes de uso.", fontes: [] },
  "Fiat Palio 1.4": { status: "PENDENTE", observacao: "Aplicação não validada integralmente. Faltam ano/modelo, código exato do motor e/ou transmissão; referências de filtros de cada fabricante e capacidades/intervalos precisam ser conferidos em catálogo ou manual específico antes de uso.", fontes: [] },
  "Fiat Doblo 1.8": { status: "PENDENTE", observacao: "Aplicação não validada integralmente. Faltam ano/modelo, código exato do motor e/ou transmissão; referências de filtros de cada fabricante e capacidades/intervalos precisam ser conferidos em catálogo ou manual específico antes de uso.", fontes: [] },
  "Fiat Doblo 1.4": { status: "PENDENTE", observacao: "Aplicação não validada integralmente. Faltam ano/modelo, código exato do motor e/ou transmissão; referências de filtros de cada fabricante e capacidades/intervalos precisam ser conferidos em catálogo ou manual específico antes de uso.", fontes: [] },
  "Fiat Strada 1.4": { status: "PENDENTE", observacao: "Aplicação não validada integralmente. Faltam ano/modelo, código exato do motor e/ou transmissão; referências de filtros de cada fabricante e capacidades/intervalos precisam ser conferidos em catálogo ou manual específico antes de uso.", fontes: [] },
  "Ford Fiesta 1.0": { status: "PENDENTE", observacao: "Aplicação não validada integralmente. Faltam ano/modelo, código exato do motor e/ou transmissão; referências de filtros de cada fabricante e capacidades/intervalos precisam ser conferidos em catálogo ou manual específico antes de uso.", fontes: [] },
  "Ford Fiesta 1.6": { status: "PENDENTE", observacao: "Aplicação não validada integralmente. Faltam ano/modelo, código exato do motor e/ou transmissão; referências de filtros de cada fabricante e capacidades/intervalos precisam ser conferidos em catálogo ou manual específico antes de uso.", fontes: [] },
  "Ford Focus 1.6": { status: "PENDENTE", observacao: "Aplicação não validada integralmente. Faltam ano/modelo, código exato do motor e/ou transmissão; referências de filtros de cada fabricante e capacidades/intervalos precisam ser conferidos em catálogo ou manual específico antes de uso.", fontes: [] },
  "Ford Focus 2.0": { status: "PENDENTE", observacao: "Aplicação não validada integralmente. Faltam ano/modelo, código exato do motor e/ou transmissão; referências de filtros de cada fabricante e capacidades/intervalos precisam ser conferidos em catálogo ou manual específico antes de uso.", fontes: [] },
  "Nissan Sentra": { status: "PENDENTE", observacao: "Aplicação não validada integralmente. Faltam ano/modelo, código exato do motor e/ou transmissão; referências de filtros de cada fabricante e capacidades/intervalos precisam ser conferidos em catálogo ou manual específico antes de uso.", fontes: [] },
  "Nissan Versa 1.6": { status: "PENDENTE", observacao: "Aplicação não validada integralmente. Faltam ano/modelo, código exato do motor e/ou transmissão; referências de filtros de cada fabricante e capacidades/intervalos precisam ser conferidos em catálogo ou manual específico antes de uso.", fontes: [] },
  "Peugeot 408 1.6 THP": { status: "PENDENTE", observacao: "Aplicação não validada integralmente. Faltam ano/modelo, código exato do motor e/ou transmissão; referências de filtros de cada fabricante e capacidades/intervalos precisam ser conferidos em catálogo ou manual específico antes de uso.", fontes: [] },
  "Renault Logan - Sandero": { status: "PENDENTE", observacao: "Aplicação não validada integralmente. Faltam ano/modelo, código exato do motor e/ou transmissão; referências de filtros de cada fabricante e capacidades/intervalos precisam ser conferidos em catálogo ou manual específico antes de uso.", fontes: [] },
  "VW Kombi 1.4": { status: "PARCIAL", observacao: "Removidas as linhas incompatíveis com Kombi 1.4 original: direção hidráulica e arrefecimento líquido. Motor boxer arrefecido a ar. Filtros, capacidade e lubrificantes precisam de validação por ano/código do motor.", fontes: [] },
  "VW Gol 1.6 G5": { status: "PENDENTE", observacao: "Aplicação não validada integralmente. Faltam ano/modelo, código exato do motor e/ou transmissão; referências de filtros de cada fabricante e capacidades/intervalos precisam ser conferidos em catálogo ou manual específico antes de uso.", fontes: [] },
  "VW Gol 1.6 G6": { status: "PENDENTE", observacao: "Aplicação não validada integralmente. Faltam ano/modelo, código exato do motor e/ou transmissão; referências de filtros de cada fabricante e capacidades/intervalos precisam ser conferidos em catálogo ou manual específico antes de uso.", fontes: [] },
  "Agrale Marruá - AM21": { status: "PARCIAL", observacao: "Motor MWM 4.07 TCE Euro III e capacidade de óleo de 8,5 L conferidos em documentação técnica encontrada; filtros, transmissão e diferencial ainda precisam ser cruzados por ano/chassi.", fontes: ["https://pt.scribd.com/document/1055492376/Eb40-Mt-20-918-Mt-Agrale-Marrua-2022-Port-83-Colog"] },
  "Agrale Marruá - AM20": { status: "PARCIAL", observacao: "Motor MWM 4.07 TCA Euro II e capacidade de óleo de 8,5 L identificados em manual técnico; demais aplicações precisam de confirmação por versão.", fontes: ["https://pt.scribd.com/document/584618309/Port-83-Colog-Mnl-Marrua-Eb40-Mt-20-918-Sobre-a-Marrua"] },
  "Agrale Marruá - AM22": { status: "PENDENTE", observacao: "Aplicação não validada integralmente. Faltam ano/modelo, código exato do motor e/ou transmissão; referências de filtros de cada fabricante e capacidades/intervalos precisam ser conferidos em catálogo ou manual específico antes de uso.", fontes: [] },
  "Agrale Marruá - AM25": { status: "PENDENTE", observacao: "Aplicação não validada integralmente. Faltam ano/modelo, código exato do motor e/ou transmissão; referências de filtros de cada fabricante e capacidades/intervalos precisam ser conferidos em catálogo ou manual específico antes de uso.", fontes: [] },
  "Ford F-250 e F-350": { status: "PENDENTE", observacao: "Aplicação não validada integralmente. Faltam ano/modelo, código exato do motor e/ou transmissão; referências de filtros de cada fabricante e capacidades/intervalos precisam ser conferidos em catálogo ou manual específico antes de uso.", fontes: [] },
  "Ford Ranger Power Stroke": { status: "PARCIAL", observacao: "Manual Ford Ranger 2011 confirma SAE 15W-40 API CH-4/CI-4 e norma WSS-M2C171-C/D acima de -10 °C; abaixo disso, SAE 5W-30 WSS-M2C913-B. Troca em 6 meses ou 10.000 km. Capacidade 8,2 L não foi confirmada no trecho consultado.", fontes: ["https://www.ford.com.br/content/dam/Ford/website-assets/latam/br/servico-ao-cliente/manuais/2011/manuais-do-proprietario/Ranger_2011.pdf"] },
  "Ford Ranger 3.0 NGD": { status: "PENDENTE", observacao: "Aplicação não validada integralmente. Faltam ano/modelo, código exato do motor e/ou transmissão; referências de filtros de cada fabricante e capacidades/intervalos precisam ser conferidos em catálogo ou manual específico antes de uso.", fontes: [] },
  "Ford Ranger 2.2": { status: "PENDENTE", observacao: "Aplicação não validada integralmente. Faltam ano/modelo, código exato do motor e/ou transmissão; referências de filtros de cada fabricante e capacidades/intervalos precisam ser conferidos em catálogo ou manual específico antes de uso.", fontes: [] },
  "Ford Transit": { status: "PENDENTE", observacao: "Aplicação não validada integralmente. Faltam ano/modelo, código exato do motor e/ou transmissão; referências de filtros de cada fabricante e capacidades/intervalos precisam ser conferidos em catálogo ou manual específico antes de uso.", fontes: [] },
  "Mitsubishi L200 2.5": { status: "PENDENTE", observacao: "Aplicação não validada integralmente. Faltam ano/modelo, código exato do motor e/ou transmissão; referências de filtros de cada fabricante e capacidades/intervalos precisam ser conferidos em catálogo ou manual específico antes de uso.", fontes: [] },
  "Mitsubishi Triton 3.2": { status: "PENDENTE", observacao: "Aplicação não validada integralmente. Faltam ano/modelo, código exato do motor e/ou transmissão; referências de filtros de cada fabricante e capacidades/intervalos precisam ser conferidos em catálogo ou manual específico antes de uso.", fontes: [] },
  "Mitsubishi Triton 2.4": { status: "PENDENTE", observacao: "Aplicação não validada integralmente. Faltam ano/modelo, código exato do motor e/ou transmissão; referências de filtros de cada fabricante e capacidades/intervalos precisam ser conferidos em catálogo ou manual específico antes de uso.", fontes: [] },
  "Nissan Frontier 2.5": { status: "PENDENTE", observacao: "Aplicação não validada integralmente. Faltam ano/modelo, código exato do motor e/ou transmissão; referências de filtros de cada fabricante e capacidades/intervalos precisam ser conferidos em catálogo ou manual específico antes de uso.", fontes: [] },
  "Nissan Frontier 2.3": { status: "PARCIAL", observacao: "Manual Nissan MY2024 informa SAE 5W-30 ACEA C3 e capacidades com filtro: 6,7 L para YS23DDT e 6,3 L para YS23DDTT. A entrada precisa ser segmentada por código de motor e ano.", fontes: ["https://www.nissan.com.br/content/dam/Nissan/br/site/servicos/manuais/frontier/2023/MP%20WEB%20FRONTIER%20%20my24-Maio%2023.pdf"] },
  "Toyota Hilux 3.0": { status: "PENDENTE", observacao: "Aplicação não validada integralmente. Faltam ano/modelo, código exato do motor e/ou transmissão; referências de filtros de cada fabricante e capacidades/intervalos precisam ser conferidos em catálogo ou manual específico antes de uso.", fontes: [] },
  "Toyota Hilux 2.8 - Nova": { status: "PENDENTE", observacao: "Aplicação não validada integralmente. Faltam ano/modelo, código exato do motor e/ou transmissão; referências de filtros de cada fabricante e capacidades/intervalos precisam ser conferidos em catálogo ou manual específico antes de uso.", fontes: [] },
  "Agrale 8500": { status: "PENDENTE", observacao: "Aplicação não validada integralmente. Faltam ano/modelo, código exato do motor e/ou transmissão; referências de filtros de cada fabricante e capacidades/intervalos precisam ser conferidos em catálogo ou manual específico antes de uso.", fontes: [] },
  "Agrale 10000": { status: "PENDENTE", observacao: "Aplicação não validada integralmente. Faltam ano/modelo, código exato do motor e/ou transmissão; referências de filtros de cada fabricante e capacidades/intervalos precisam ser conferidos em catálogo ou manual específico antes de uso.", fontes: [] },
  "Agrale 13000": { status: "PENDENTE", observacao: "Aplicação não validada integralmente. Faltam ano/modelo, código exato do motor e/ou transmissão; referências de filtros de cada fabricante e capacidades/intervalos precisam ser conferidos em catálogo ou manual específico antes de uso.", fontes: [] },
  "DAF XF": { status: "PENDENTE", observacao: "Aplicação não validada integralmente. Faltam ano/modelo, código exato do motor e/ou transmissão; referências de filtros de cada fabricante e capacidades/intervalos precisam ser conferidos em catálogo ou manual específico antes de uso.", fontes: [] },
  "DAF CF": { status: "PENDENTE", observacao: "Aplicação não validada integralmente. Faltam ano/modelo, código exato do motor e/ou transmissão; referências de filtros de cada fabricante e capacidades/intervalos precisam ser conferidos em catálogo ou manual específico antes de uso.", fontes: [] },
  "DAF XD": { status: "PENDENTE", observacao: "Aplicação não validada integralmente. Faltam ano/modelo, código exato do motor e/ou transmissão; referências de filtros de cada fabricante e capacidades/intervalos precisam ser conferidos em catálogo ou manual específico antes de uso.", fontes: [] },
  "Foton Aumark S 3.5": { status: "PENDENTE", observacao: "Aplicação não validada integralmente. Faltam ano/modelo, código exato do motor e/ou transmissão; referências de filtros de cada fabricante e capacidades/intervalos precisam ser conferidos em catálogo ou manual específico antes de uso.", fontes: [] },
  "Foton Aumark S 5.5": { status: "PENDENTE", observacao: "Aplicação não validada integralmente. Faltam ano/modelo, código exato do motor e/ou transmissão; referências de filtros de cada fabricante e capacidades/intervalos precisam ser conferidos em catálogo ou manual específico antes de uso.", fontes: [] },
  "Foton Auman ETX": { status: "PENDENTE", observacao: "Aplicação não validada integralmente. Faltam ano/modelo, código exato do motor e/ou transmissão; referências de filtros de cada fabricante e capacidades/intervalos precisam ser conferidos em catálogo ou manual específico antes de uso.", fontes: [] },
  "Ford Cargo 816": { status: "PENDENTE", observacao: "Aplicação não validada integralmente. Faltam ano/modelo, código exato do motor e/ou transmissão; referências de filtros de cada fabricante e capacidades/intervalos precisam ser conferidos em catálogo ou manual específico antes de uso.", fontes: [] },
  "Ford Cargo 1317": { status: "PENDENTE", observacao: "A base identifica motor Cummins ISB 4.5, mas o catálogo MANN consultado descreve Cargo 1317 E com Cummins ISBE 3.9. As referências MANN foram suspensas no registro até confirmar ano, código de motor e carcaça; não aplicar códigos do 3.9 ao 4.5.", fontes: ["https://www.mann-filter.com/content/dam/website/mann-filter/mann-filter-com/br-pt/documents/cat%C3%A1logo/catalogo_mann_filter_PESADA_2022_2023_web.pdf"] },
  "Ford Cargo 1719": { status: "PENDENTE", observacao: "Aplicação não validada integralmente. Faltam ano/modelo, código exato do motor e/ou transmissão; referências de filtros de cada fabricante e capacidades/intervalos precisam ser conferidos em catálogo ou manual específico antes de uso.", fontes: [] },
  "Ford Cargo 2429": { status: "PENDENTE", observacao: "Aplicação não validada integralmente. Faltam ano/modelo, código exato do motor e/ou transmissão; referências de filtros de cada fabricante e capacidades/intervalos precisam ser conferidos em catálogo ou manual específico antes de uso.", fontes: [] },
  "Ford Cargo 2629": { status: "PENDENTE", observacao: "Aplicação não validada integralmente. Faltam ano/modelo, código exato do motor e/ou transmissão; referências de filtros de cada fabricante e capacidades/intervalos precisam ser conferidos em catálogo ou manual específico antes de uso.", fontes: [] },
  "Ford Cargo 3131": { status: "PENDENTE", observacao: "Aplicação não validada integralmente. Faltam ano/modelo, código exato do motor e/ou transmissão; referências de filtros de cada fabricante e capacidades/intervalos precisam ser conferidos em catálogo ou manual específico antes de uso.", fontes: [] },
  "Iveco Daily 30-130": { status: "PARCIAL", observacao: "Manual IVECO Daily edição 10/2021 confirma para 30-130: motor 4,9 L com filtro/4,3 L sem filtro, SAE 5W-30 API CF ACEA C2; câmbio ZF 6S480 VO 2,4 L com ZF TE-ML 01E/02E; diferencial 1,35 L SAE 75W-90 API GL-5/MT-1; direção 1,30 L ATF Dexron II; troca de óleo a cada 15.000 km ou 400 h. Aplicar somente à configuração abrangida pelo manual.", fontes: ["https://www.iveco.com/Brasil/servicos/Documents/Daily_Manual_Uso_Manutencao_Ed.010.pdf"] },
  "Iveco Daily 35-150": { status: "PENDENTE", observacao: "Aplicação não validada integralmente. Faltam ano/modelo, código exato do motor e/ou transmissão; referências de filtros de cada fabricante e capacidades/intervalos precisam ser conferidos em catálogo ou manual específico antes de uso.", fontes: [] },
  "Iveco Daily 55C": { status: "PENDENTE", observacao: "Aplicação não validada integralmente. Faltam ano/modelo, código exato do motor e/ou transmissão; referências de filtros de cada fabricante e capacidades/intervalos precisam ser conferidos em catálogo ou manual específico antes de uso.", fontes: [] },
  "Iveco Tector": { status: "PARCIAL", observacao: "Ficha técnica oficial do Tector 240E28 6x2 com motor FPT NEF6 informa 18 L no cárter sem filtro. Para Tector 240E28 Euro 5 (01/2011 em diante), catálogo MANN lista C 27 902, CF 1550, W 950/26, WK 950/21 e separador WK 1040. Aplicar somente após confirmar ano, motor e arranjo de filtros.", fontes: ["https://www.iveco.com/Brasil/collections/technical_sheets/Documents/Iveco_Tector_240E28-bx.pdf"] },
  "Iveco Stralis": { status: "PENDENTE", observacao: "Aplicação não validada integralmente. Faltam ano/modelo, código exato do motor e/ou transmissão; referências de filtros de cada fabricante e capacidades/intervalos precisam ser conferidos em catálogo ou manual específico antes de uso.", fontes: [] },
  "Iveco S-Way": { status: "PENDENTE", observacao: "Aplicação não validada integralmente. Faltam ano/modelo, código exato do motor e/ou transmissão; referências de filtros de cada fabricante e capacidades/intervalos precisam ser conferidos em catálogo ou manual específico antes de uso.", fontes: [] },
  "JAC V260": { status: "PENDENTE", observacao: "Aplicação não validada integralmente. Faltam ano/modelo, código exato do motor e/ou transmissão; referências de filtros de cada fabricante e capacidades/intervalos precisam ser conferidos em catálogo ou manual específico antes de uso.", fontes: [] },
  "JAC X200": { status: "PENDENTE", observacao: "Aplicação não validada integralmente. Faltam ano/modelo, código exato do motor e/ou transmissão; referências de filtros de cada fabricante e capacidades/intervalos precisam ser conferidos em catálogo ou manual específico antes de uso.", fontes: [] },
  "JAC X300": { status: "PENDENTE", observacao: "Aplicação não validada integralmente. Faltam ano/modelo, código exato do motor e/ou transmissão; referências de filtros de cada fabricante e capacidades/intervalos precisam ser conferidos em catálogo ou manual específico antes de uso.", fontes: [] },
  "MAN TGX": { status: "PENDENTE", observacao: "Aplicação não validada integralmente. Faltam ano/modelo, código exato do motor e/ou transmissão; referências de filtros de cada fabricante e capacidades/intervalos precisam ser conferidos em catálogo ou manual específico antes de uso.", fontes: [] },
  "MAN TGS": { status: "PENDENTE", observacao: "Aplicação não validada integralmente. Faltam ano/modelo, código exato do motor e/ou transmissão; referências de filtros de cada fabricante e capacidades/intervalos precisam ser conferidos em catálogo ou manual específico antes de uso.", fontes: [] },
  "Mercedes-Benz Accelo 1016": { status: "PENDENTE", observacao: "Aplicação não validada integralmente. Faltam ano/modelo, código exato do motor e/ou transmissão; referências de filtros de cada fabricante e capacidades/intervalos precisam ser conferidos em catálogo ou manual específico antes de uso.", fontes: [] },
  "Mercedes-Benz Accelo 1017": { status: "PENDENTE", observacao: "Aplicação não validada integralmente. Faltam ano/modelo, código exato do motor e/ou transmissão; referências de filtros de cada fabricante e capacidades/intervalos precisam ser conferidos em catálogo ou manual específico antes de uso.", fontes: [] },
  "Mercedes-Benz Atego 1719": { status: "PARCIAL", observacao: "Para Atego 1719 BlueTec 5 com OM924 LA (a partir de 01/2012), catálogo MANN confirma HU 931/5 x e PU 1046 x; catálogo pesado MANN 2022 lista C 20 457 e separador PF 420. Não aplicar a Atego 1719 de outra geração.", fontes: ["https://www.mann-filter.com/br-pt/catalogo/resultados-da-pesquisa/produto.html/pu1046x_mann-filter.html", "https://www.mann-filter.com/content/dam/website/mann-filter/mann-filter-com/br-pt/documents/cat%C3%A1logo/catalogo_mann_filter_PESADA_2022_2023_web.pdf"] },
  "Mercedes-Benz Atego 2426": { status: "PENDENTE", observacao: "Aplicação não validada integralmente. Faltam ano/modelo, código exato do motor e/ou transmissão; referências de filtros de cada fabricante e capacidades/intervalos precisam ser conferidos em catálogo ou manual específico antes de uso.", fontes: [] },
  "Mercedes-Benz Atego 2730": { status: "PENDENTE", observacao: "Aplicação não validada integralmente. Faltam ano/modelo, código exato do motor e/ou transmissão; referências de filtros de cada fabricante e capacidades/intervalos precisam ser conferidos em catálogo ou manual específico antes de uso.", fontes: [] },
  "Mercedes-Benz Axor 2536": { status: "PENDENTE", observacao: "Aplicação não validada integralmente. Faltam ano/modelo, código exato do motor e/ou transmissão; referências de filtros de cada fabricante e capacidades/intervalos precisam ser conferidos em catálogo ou manual específico antes de uso.", fontes: [] },
  "Mercedes-Benz Axor 2644": { status: "PENDENTE", observacao: "Aplicação não validada integralmente. Faltam ano/modelo, código exato do motor e/ou transmissão; referências de filtros de cada fabricante e capacidades/intervalos precisam ser conferidos em catálogo ou manual específico antes de uso.", fontes: [] },
  "Mercedes-Benz Axor 3344": { status: "PENDENTE", observacao: "Aplicação não validada integralmente. Faltam ano/modelo, código exato do motor e/ou transmissão; referências de filtros de cada fabricante e capacidades/intervalos precisam ser conferidos em catálogo ou manual específico antes de uso.", fontes: [] },
  "Mercedes-Benz Actros 2651": { status: "PENDENTE", observacao: "Aplicação não validada integralmente. Faltam ano/modelo, código exato do motor e/ou transmissão; referências de filtros de cada fabricante e capacidades/intervalos precisam ser conferidos em catálogo ou manual específico antes de uso.", fontes: [] },
  "Mercedes-Benz Actros 2657": { status: "PENDENTE", observacao: "Aplicação não validada integralmente. Faltam ano/modelo, código exato do motor e/ou transmissão; referências de filtros de cada fabricante e capacidades/intervalos precisam ser conferidos em catálogo ou manual específico antes de uso.", fontes: [] },
  "Scania P 250": { status: "PARCIAL", observacao: "A referência de óleo MANN HU 1077/2 z é compatível com P250 DC07 112 da nova geração (a partir de 02/2018); versões P250 anteriores usam motor e configuração de filtros diferentes. Ano e código do motor são obrigatórios.", fontes: ["https://www.mann-filter.com/br-pt/catalogo/resultados-da-pesquisa/produto.html/hu1077/2z_mann-filter.html"] },
  "Scania P 310": { status: "PARCIAL", observacao: "Para P310 DC9-21/DC9-11, catálogo MANN indica W 11 102/18 para óleo e C 27 1340 para ar. O filtro de combustível depende do ano e do arranjo de separadores.", fontes: ["https://www.mann-filter.com/br-pt/catalogo/resultados-da-pesquisa/produto.html/w11102/18_mann-filter.html", "https://www.mann-filter.com/br-pt/catalogo/resultados-da-pesquisa/produto.suffix.html/c271340_mann-filter.html"] },
  "Scania G 410": { status: "PENDENTE", observacao: "Aplicação não validada integralmente. Faltam ano/modelo, código exato do motor e/ou transmissão; referências de filtros de cada fabricante e capacidades/intervalos precisam ser conferidos em catálogo ou manual específico antes de uso.", fontes: [] },
  "Scania R 450": { status: "PENDENTE", observacao: "Aplicação não validada integralmente. Faltam ano/modelo, código exato do motor e/ou transmissão; referências de filtros de cada fabricante e capacidades/intervalos precisam ser conferidos em catálogo ou manual específico antes de uso.", fontes: [] },
  "Scania R 540": { status: "PENDENTE", observacao: "Aplicação não validada integralmente. Faltam ano/modelo, código exato do motor e/ou transmissão; referências de filtros de cada fabricante e capacidades/intervalos precisam ser conferidos em catálogo ou manual específico antes de uso.", fontes: [] },
  "Scania S 450": { status: "PENDENTE", observacao: "Aplicação não validada integralmente. Faltam ano/modelo, código exato do motor e/ou transmissão; referências de filtros de cada fabricante e capacidades/intervalos precisam ser conferidos em catálogo ou manual específico antes de uso.", fontes: [] },
  "Scania S 540": { status: "PENDENTE", observacao: "Aplicação não validada integralmente. Faltam ano/modelo, código exato do motor e/ou transmissão; referências de filtros de cada fabricante e capacidades/intervalos precisam ser conferidos em catálogo ou manual específico antes de uso.", fontes: [] },
  "VW Delivery 9.170": { status: "PENDENTE", observacao: "Aplicação não validada integralmente. Faltam ano/modelo, código exato do motor e/ou transmissão; referências de filtros de cada fabricante e capacidades/intervalos precisam ser conferidos em catálogo ou manual específico antes de uso.", fontes: [] },
  "VW Delivery 11.180": { status: "PENDENTE", observacao: "Aplicação não validada integralmente. Faltam ano/modelo, código exato do motor e/ou transmissão; referências de filtros de cada fabricante e capacidades/intervalos precisam ser conferidos em catálogo ou manual específico antes de uso.", fontes: [] },
  "VW Delivery 13.180": { status: "PENDENTE", observacao: "Aplicação não validada integralmente. Faltam ano/modelo, código exato do motor e/ou transmissão; referências de filtros de cada fabricante e capacidades/intervalos precisam ser conferidos em catálogo ou manual específico antes de uso.", fontes: [] },
  "VW Worker 8.150": { status: "PENDENTE", observacao: "Aplicação não validada integralmente. Faltam ano/modelo, código exato do motor e/ou transmissão; referências de filtros de cada fabricante e capacidades/intervalos precisam ser conferidos em catálogo ou manual específico antes de uso.", fontes: [] },
  "VW Worker 15.180": { status: "PENDENTE", observacao: "Aplicação não validada integralmente. Faltam ano/modelo, código exato do motor e/ou transmissão; referências de filtros de cada fabricante e capacidades/intervalos precisam ser conferidos em catálogo ou manual específico antes de uso.", fontes: [] },
  "VW Worker 17.190": { status: "PENDENTE", observacao: "Aplicação não validada integralmente. Faltam ano/modelo, código exato do motor e/ou transmissão; referências de filtros de cada fabricante e capacidades/intervalos precisam ser conferidos em catálogo ou manual específico antes de uso.", fontes: [] },
  "VW Worker 24.220": { status: "PENDENTE", observacao: "Aplicação não validada integralmente. Faltam ano/modelo, código exato do motor e/ou transmissão; referências de filtros de cada fabricante e capacidades/intervalos precisam ser conferidos em catálogo ou manual específico antes de uso.", fontes: [] },
  "VW Worker 24.250": { status: "PENDENTE", observacao: "Aplicação não validada integralmente. Faltam ano/modelo, código exato do motor e/ou transmissão; referências de filtros de cada fabricante e capacidades/intervalos precisam ser conferidos em catálogo ou manual específico antes de uso.", fontes: [] },
  "VW Worker 26.260": { status: "PENDENTE", observacao: "Aplicação não validada integralmente. Faltam ano/modelo, código exato do motor e/ou transmissão; referências de filtros de cada fabricante e capacidades/intervalos precisam ser conferidos em catálogo ou manual específico antes de uso.", fontes: [] },
  "VW Worker 26.280": { status: "PENDENTE", observacao: "Aplicação não validada integralmente. Faltam ano/modelo, código exato do motor e/ou transmissão; referências de filtros de cada fabricante e capacidades/intervalos precisam ser conferidos em catálogo ou manual específico antes de uso.", fontes: [] },
  "VW Constellation 17.190": { status: "PARCIAL", observacao: "A aplicação Constellation 17.190 encontrada no catálogo MANN utiliza motor MAN D08; não confundir com Worker 17.190 ou outras gerações. Ano e código exato do D08 ainda precisam ser identificados.", fontes: ["https://www.mann-filter.com/content/dam/website/mann-filter/mann-filter-com/br-pt/documents/cat%C3%A1logo/catalogo_mann_filter_PESADA_2022_2023_web.pdf"] },
  "VW Constellation 24.250": { status: "PENDENTE", observacao: "Aplicação não validada integralmente. Faltam ano/modelo, código exato do motor e/ou transmissão; referências de filtros de cada fabricante e capacidades/intervalos precisam ser conferidos em catálogo ou manual específico antes de uso.", fontes: [] },
  "VW Constellation 24.280": { status: "PENDENTE", observacao: "Aplicação não validada integralmente. Faltam ano/modelo, código exato do motor e/ou transmissão; referências de filtros de cada fabricante e capacidades/intervalos precisam ser conferidos em catálogo ou manual específico antes de uso.", fontes: [] },
  "VW Constellation 26.280": { status: "PENDENTE", observacao: "Aplicação não validada integralmente. Faltam ano/modelo, código exato do motor e/ou transmissão; referências de filtros de cada fabricante e capacidades/intervalos precisam ser conferidos em catálogo ou manual específico antes de uso.", fontes: [] },
  "VW Constellation 31.320": { status: "PARCIAL", observacao: "Para 31.320 E Constellation com Cummins ISC (02/2007 a 12/2011), catálogo MANN confirma WP 12 121 (óleo), C 27 830 (ar) e WK 954/1 x (combustível). Não estender automaticamente a versões posteriores ou motores diferentes.", fontes: ["https://www.mann-filter.com/br-pt/catalogo/resultados-da-pesquisa/produto.html/wp12121_mann-filter.html", "https://www.mann-filter.com/br-pt/catalogo/resultados-da-pesquisa/produto.html/wk954/1x_mann-filter.html", "https://www.mann-filter.com/br-pt/catalogo/resultados-da-pesquisa/produto.html/c27830_mann-filter.html"] },
  "VW Constellation 33.440": { status: "PENDENTE", observacao: "Aplicação não validada integralmente. Faltam ano/modelo, código exato do motor e/ou transmissão; referências de filtros de cada fabricante e capacidades/intervalos precisam ser conferidos em catálogo ou manual específico antes de uso.", fontes: [] },
  "Volvo VM 23": { status: "PENDENTE", observacao: "Aplicação não validada integralmente. Faltam ano/modelo, código exato do motor e/ou transmissão; referências de filtros de cada fabricante e capacidades/intervalos precisam ser conferidos em catálogo ou manual específico antes de uso.", fontes: [] },
  "Volvo VM 26": { status: "PENDENTE", observacao: "Aplicação não validada integralmente. Faltam ano/modelo, código exato do motor e/ou transmissão; referências de filtros de cada fabricante e capacidades/intervalos precisam ser conferidos em catálogo ou manual específico antes de uso.", fontes: [] },
  "Volvo VM 30": { status: "PENDENTE", observacao: "Aplicação não validada integralmente. Faltam ano/modelo, código exato do motor e/ou transmissão; referências de filtros de cada fabricante e capacidades/intervalos precisam ser conferidos em catálogo ou manual específico antes de uso.", fontes: [] },
  "Volvo FH 460": { status: "PENDENTE", observacao: "Aplicação não validada integralmente. Faltam ano/modelo, código exato do motor e/ou transmissão; referências de filtros de cada fabricante e capacidades/intervalos precisam ser conferidos em catálogo ou manual específico antes de uso.", fontes: [] },
  "Volvo FH 540": { status: "PENDENTE", observacao: "Aplicação não validada integralmente. Faltam ano/modelo, código exato do motor e/ou transmissão; referências de filtros de cada fabricante e capacidades/intervalos precisam ser conferidos em catálogo ou manual específico antes de uso.", fontes: [] },
  "Volvo FMX 460": { status: "PENDENTE", observacao: "Aplicação não validada integralmente. Faltam ano/modelo, código exato do motor e/ou transmissão; referências de filtros de cada fabricante e capacidades/intervalos precisam ser conferidos em catálogo ou manual específico antes de uso.", fontes: [] },
  "Volvo FMX 540": { status: "PENDENTE", observacao: "Aplicação não validada integralmente. Faltam ano/modelo, código exato do motor e/ou transmissão; referências de filtros de cada fabricante e capacidades/intervalos precisam ser conferidos em catálogo ou manual específico antes de uso.", fontes: [] },
  "Fiat Ducato 2.3 Multijet": { status: "PENDENTE", observacao: "Aplicação não validada integralmente. Faltam ano/modelo, código exato do motor e/ou transmissão; referências de filtros de cada fabricante e capacidades/intervalos precisam ser conferidos em catálogo ou manual específico antes de uso.", fontes: [] },
  "Fiat Ducato 2.8": { status: "PENDENTE", observacao: "Aplicação não validada integralmente. Faltam ano/modelo, código exato do motor e/ou transmissão; referências de filtros de cada fabricante e capacidades/intervalos precisam ser conferidos em catálogo ou manual específico antes de uso.", fontes: [] },
  "Iveco - Daily 35S14": { status: "PENDENTE", observacao: "Aplicação não validada integralmente. Faltam ano/modelo, código exato do motor e/ou transmissão; referências de filtros de cada fabricante e capacidades/intervalos precisam ser conferidos em catálogo ou manual específico antes de uso.", fontes: [] }
};
