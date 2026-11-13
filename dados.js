/* ==========================================================
   DADOS DO MANUAL AUTOMOTIVO — dados.js (Versão Final Completa com Filtros de Pesados)
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
      oleo: { original: '93742512', tecfil: 'PSL55', mann: 'W712/22', wega: 'WO-120', fram: 'PH5949' },
      ar: { original: '94703132', tecfil: 'ARL4122', mann: 'C2713', wega: 'FAP-9285', fram: 'CA10668' },
      combustivel: { original: '93297745', tecfil: 'GI04/7', mann: 'WK58/3', wega: 'FCI-1630', fram: 'G1025' },
      cabine: { original: '94747799', tecfil: 'ACP309', mann: 'CU2433', wega: 'AKX-1999', fram: 'CF11175' }
    }
  },
  'Chevrolet Agile': {
    motor: { tipo: '5W-30 sintético (dexos1)', qtd: '3,5 L', intervalo: '10.000 km' },
    cambio: { tipo: 'Manual: 75W-85', qtd: '1,6 L', intervalo: '60.000 km' },
    diferencial: { tipo: 'Não se aplica', qtd: '-', intervalo: '-' },
    filtros: {
      oleo: { original: '93742512', tecfil: 'PSL55', mann: 'W712/22', wega: 'WO-120', fram: 'PH5949' },
      ar: { original: '93396172', tecfil: 'ARL4103', mann: 'C2225', wega: 'FAP-9003', fram: 'CA10015' },
      combustivel: { original: '93297745', tecfil: 'GI04/7', mann: 'WK58/3', wega: 'FCI-1630', fram: 'G1025' },
      cabine: { original: '93396173', tecfil: 'ACP308', mann: 'CU2433', wega: 'AKX-3510', fram: 'CF11175' }
    }
  },
  'Chevrolet Montana': {
    motor: { tipo: '5W-30 sintético (dexos1)', qtd: '3,5 L', intervalo: '10.000 km' },
    cambio: { tipo: 'Manual: 75W-85', qtd: '1,6 L', intervalo: '60.000 km' },
    diferencial: { tipo: 'Não se aplica', qtd: '-', intervalo: '-' },
    filtros: {
      oleo: { original: '93742512', tecfil: 'PSL55', mann: 'W712/22', wega: 'WO-120', fram: 'PH5949' },
      ar: { original: '93396172', tecfil: 'ARL4103', mann: 'C2225', wega: 'FAP-9003', fram: 'CA10015' },
      combustivel: { original: '93297745', tecfil: 'GI04/7', mann: 'WK58/3', wega: 'FCI-1630', fram: 'G1025' },
      cabine: { original: '93396173', tecfil: 'ACP308', mann: 'CU2433', wega: 'AKX-3510', fram: 'CF11175' }
    }
  },
  'Fiat Palio 1.4': {
    motor: { tipo: '5W-30 sintético (API SP)', qtd: '2,7 L', intervalo: '10.000 km' },
    cambio: { tipo: 'Manual: 75W-85', qtd: '2,0 L', intervalo: '60.000 km' },
    diferencial: { tipo: 'Não se aplica', qtd: '-', intervalo: '-' },
    filtros: {
      oleo: { original: '7085786', tecfil: 'PEL106', mann: 'HU711/51x', wega: 'WO-130', fram: 'CH9642' },
      ar: { original: '51775324', tecfil: 'ARL6085', mann: 'C2429', wega: 'FAP-4022', fram: 'CA9566' },
      combustivel: { original: '51778945', tecfil: 'GI04/7', mann: 'WK55', wega: 'FCI-1660', fram: 'G9193' },
      cabine: { original: '7088921', tecfil: 'ACP304', mann: 'CU2227', wega: 'AKX-3520', fram: 'CF9481' }
    }
  },
  'Fiat Doblo 1.8': {
    motor: { tipo: '5W-30 sintético (API SP)', qtd: '4,5 L', intervalo: '10.000 km' },
    cambio: { tipo: 'Manual: 75W-85', qtd: '2,1 L', intervalo: '60.000 km' },
    diferencial: { tipo: 'Não se aplica', qtd: '-', intervalo: '-' },
    filtros: {
      oleo: { original: '7085786', tecfil: 'PEL106', mann: 'HU711/51x', wega: 'WO-130', fram: 'CH9642' },
      ar: { original: '51794712', tecfil: 'ARL6086', mann: 'C2730', wega: 'FAP-4025', fram: 'CA10222' },
      combustivel: { original: '51778945', tecfil: 'GI04/7', mann: 'WK55', wega: 'FCI-1660', fram: 'G9193' },
      cabine: { original: '46723321', tecfil: 'ACP302', mann: 'CU2842', wega: 'AKX-1100', fram: 'CF1028' }
    }
  },
  'Fiat Doblo 1.4': {
    motor: { tipo: '5W-30 sintético (API SP)', qtd: '2,7 L', intervalo: '10.000 km' },
    cambio: { tipo: 'Manual: 75W-85', qtd: '2,0 L', intervalo: '60.000 km' },
    diferencial: { tipo: 'Não se aplica', qtd: '-', intervalo: '-' },
    filtros: {
      oleo: { original: '7085786', tecfil: 'PEL106', mann: 'HU711/51x', wega: 'WO-130', fram: 'CH9642' },
      ar: { original: '51775324', tecfil: 'ARL6085', mann: 'C2429', wega: 'FAP-4022', fram: 'CA9566' },
      combustivel: { original: '51778945', tecfil: 'GI04/7', mann: 'WK55', wega: 'FCI-1660', fram: 'G9193' },
      cabine: { original: '46723321', tecfil: 'ACP302', mann: 'CU2842', wega: 'AKX-1100', fram: 'CF1028' }
    }
  },
  'Fiat Strada 1.4': {
    motor: { tipo: '5W-30 sintético (API SP)', qtd: '2,7 L', intervalo: '10.000 km' },
    cambio: { tipo: 'Manual: 75W-85', qtd: '2,0 L', intervalo: '60.000 km' },
    diferencial: { tipo: 'Não se aplica', qtd: '-', intervalo: '-' },
    filtros: {
      oleo: { original: '7085786', tecfil: 'PEL106', mann: 'HU711/51x', wega: 'WO-130', fram: 'CH9642' },
      ar: { original: '51775324', tecfil: 'ARL6085', mann: 'C2429', wega: 'FAP-4022', fram: 'CA9566' },
      combustivel: { original: '51778945', tecfil: 'GI04/7', mann: 'WK55', wega: 'FCI-1660', fram: 'G9193' },
      cabine: { original: '7088921', tecfil: 'ACP304', mann: 'CU2227', wega: 'AKX-3520', fram: 'CF9481' }
    }
  },
  'Ford Fiesta 1.0': {
    motor: { tipo: '5W-30 sintético', qtd: '4,1 L', intervalo: '10.000 km' },
    cambio: { tipo: 'Manual: 75W-85', qtd: '2,3 L', intervalo: '60.000 km' },
    diferencial: { tipo: 'Não se aplica', qtd: '-', intervalo: '-' },
    filtros: {
      oleo: { original: 'XS6E6714B1A', tecfil: 'PSL55', mann: 'W712/73', wega: 'WO-200', fram: 'PH2870' },
      ar: { original: '2S659601AA', tecfil: 'ARL4125', mann: 'C2830', wega: 'FAP-2830', fram: 'CA9926' },
      combustivel: { original: '2S659155AB', tecfil: 'GI04/7', mann: 'WK58/3', wega: 'FCI-1630', fram: 'G1025' },
      cabine: { original: '2S6519N619AA', tecfil: 'ACP301', mann: 'CU2433', wega: 'AKX-1930', fram: 'CF11175' }
    }
  },
  'Ford Fiesta 1.6': {
    motor: { tipo: '5W-30 sintético', qtd: '4,1 L', intervalo: '10.000 km' },
    cambio: { tipo: 'Manual: 75W-85', qtd: '2,3 L', intervalo: '60.000 km' },
    diferencial: { tipo: 'Não se aplica', qtd: '-', intervalo: '-' },
    filtros: {
      oleo: { original: 'XS6E6714B1A', tecfil: 'PSL55', mann: 'W712/73', wega: 'WO-200', fram: 'PH2870' },
      ar: { original: '2S659601AA', tecfil: 'ARL4125', mann: 'C2830', wega: 'FAP-2830', fram: 'CA9926' },
      combustivel: { original: '2S659155AB', tecfil: 'GI04/7', mann: 'WK58/3', wega: 'FCI-1630', fram: 'G1025' },
      cabine: { original: '2S6519N619AA', tecfil: 'ACP301', mann: 'CU2433', wega: 'AKX-1930', fram: 'CF11175' }
    }
  },
  'Ford Focus 1.6': {
    motor: { tipo: '5W-30 sintético', qtd: '4,1 L', intervalo: '10.000 km' },
    cambio: { tipo: 'Manual: 75W-85', qtd: '2,3 L', intervalo: '60.000 km' },
    diferencial: { tipo: 'Não se aplica', qtd: '-', intervalo: '-' },
    filtros: {
      oleo: { original: 'XS6E6714B1A', tecfil: 'PSL55', mann: 'W712/73', wega: 'WO-200', fram: 'PH2870' },
      ar: { original: '3M559601AA', tecfil: 'ARL4130', mann: 'C35154', wega: 'FAP-2830', fram: 'CA9926' },
      combustivel: { original: '2S659155AB', tecfil: 'GI04/7', mann: 'WK58/3', wega: 'FCI-1630', fram: 'G1025' },
      cabine: { original: '3M5519N619AB', tecfil: 'ACP309', mann: 'CUK2442', wega: 'AKX-1110', fram: 'CF10729' }
    }
  },
  'Ford Focus 2.0': {
    motor: { tipo: '5W-30 sintético', qtd: '4,3 L', intervalo: '10.000 km' },
    cambio: { tipo: 'Manual / Automático', qtd: '2,1 L', intervalo: '60.000 km' },
    diferencial: { tipo: 'Não se aplica', qtd: '-', intervalo: '-' },
    filtros: {
      oleo: { original: 'XS6E6714B1A', tecfil: 'PSL55', mann: 'W712/73', wega: 'WO-200', fram: 'PH2870' },
      ar: { original: '3M559601AA', tecfil: 'ARL4130', mann: 'C35154', wega: 'FAP-2830', fram: 'CA9926' },
      combustivel: { original: '2S659155AB', tecfil: 'GI04/7', mann: 'WK58/3', wega: 'FCI-1630', fram: 'G1025' },
      cabine: { original: '3M5519N619AB', tecfil: 'ACP309', mann: 'CUK2442', wega: 'AKX-1110', fram: 'CF10729' }
    }
  },
  'Nissan Sentra': {
    motor: { tipo: '0W-20 ou 5W-30 sintético', qtd: '4,4 L', intervalo: '10.000 km' },
    cambio: { tipo: 'CVT: NS-3 Fluid', qtd: '~8,0 L', intervalo: '40.000 km' },
    diferencial: { tipo: 'Não se aplica', qtd: '-', intervalo: '-' },
    filtros: {
      oleo: { original: '1520865F0A', tecfil: 'PSL158', mann: 'W610/3', wega: 'WO-150', fram: 'PH4967' },
      ar: { original: '16546ED000', tecfil: 'ARL1655', mann: 'C2029', wega: 'FAP-9030', fram: 'CA10226' },
      combustivel: { original: 'Tanque', tecfil: '-', mann: '-', wega: '-', fram: '-' },
      cabine: { original: '27277EN000', tecfil: 'ACP310', mann: 'CU2935', wega: 'AKX-3512', fram: 'CF10786' }
    }
  },
  'Nissan Versa 1.6': {
    motor: { tipo: '0W-20 ou 5W-30 sintético', qtd: '4,4 L', intervalo: '10.000 km' },
    cambio: { tipo: 'Manual / CVT', qtd: '2,4 L', intervalo: '60.000 km' },
    diferencial: { tipo: 'Não se aplica', qtd: '-', intervalo: '-' },
    filtros: {
      oleo: { original: '1520865F0A', tecfil: 'PSL158', mann: 'W610/3', wega: 'WO-150', fram: 'PH4967' },
      ar: { original: '165461KA0A', tecfil: 'ARL1656', mann: 'C24025', wega: 'FAP-9030', fram: 'CA11123' },
      combustivel: { original: 'Tanque', tecfil: '-', mann: '-', wega: '-', fram: '-' },
      cabine: { original: '272771KA0A', tecfil: 'ACP312', mann: 'CU22017', wega: 'AKX-3512', fram: 'CF11784' }
    }
  },
  'Peugeot 408 1.6 THP': {
    motor: { tipo: '0W-30 ou 5W-40 sintético', qtd: '4,25 L', intervalo: '10.000 km' },
    cambio: { tipo: 'Automático AL4 / EAT6', qtd: '~3,0 L', intervalo: '40.000 km' },
    diferencial: { tipo: 'Não se aplica', qtd: '-', intervalo: '-' },
    filtros: {
      oleo: { original: '1109AY', tecfil: 'PEL108', mann: 'HU712/x', wega: 'WO-530', fram: 'CH9939' },
      ar: { original: '1444RJ', tecfil: 'ARL6090', mann: 'C3877', wega: 'FAP-4040', fram: 'CA10582' },
      combustivel: { original: '156794', tecfil: 'FC405', mann: 'WK68/1', wega: 'FCI-1650', fram: 'PS10238' },
      cabine: { original: '6447XF', tecfil: 'ACP305', mann: 'CUK2940', wega: 'AKX-1991', fram: 'CF10549' }
    }
  },
  'Renault Logan - Sandero': {
    motor: { tipo: '5W-40 sintético', qtd: '4,8 L', intervalo: '10.000 km' },
    cambio: { tipo: 'Manual: 75W-80', qtd: '2,5 L', intervalo: '60.000 km' },
    diferencial: { tipo: 'Não se aplica', qtd: '-', intervalo: '-' },
    filtros: {
      oleo: { original: '8200768913', tecfil: 'PSL51', mann: 'W67/2', wega: 'WO-120', fram: 'PH5796' },
      ar: { original: '165467674R', tecfil: 'ARL9010', mann: 'C22030', wega: 'FAP-9010', fram: 'CA11036' },
      combustivel: { original: '6001548810', tecfil: 'GI04/7', mann: 'WK58/3', wega: 'FCI-1630', fram: 'G1025' },
      cabine: { original: '272773229R', tecfil: 'ACP928', mann: 'CU1822', wega: 'AKX-1120', fram: 'CF10366' }
    }
  },
  'VW Kombi 1.4': {
    motor: { tipo: '15W-40 ou 5W-40', qtd: '3,3 L', intervalo: '10.000 km' },
    cambio: { tipo: 'Manual Transaxle', qtd: '3,0 L', intervalo: '40.000 km' },
    diferencial: { tipo: 'Integrado ao câmbio', qtd: 'Integrado', intervalo: '40.000 km' },
    filtros: {
      oleo: { original: '030115561AN', tecfil: 'PSL55', mann: 'W712/22', wega: 'WO-100', fram: 'PH5949' },
      ar: { original: '0231296201', tecfil: 'ARL3280', mann: 'C3280', wega: 'FAP-3280', fram: 'CA8286' },
      combustivel: { original: '6QE201511', tecfil: 'GI04/7', mann: 'WK58/3', wega: 'FCI-1630', fram: 'G1025' },
      cabine: { original: 'Não possui', tecfil: '-', mann: '-', wega: '-', fram: '-' }
    }
  },
  'VW Gol 1.6 G5': {
    motor: { tipo: '5W-40 sintético', qtd: '3,6 L', intervalo: '10.000 km' },
    cambio: { tipo: 'Manual: 75W-80', qtd: '2,0 L', intervalo: '60.000 km' },
    diferencial: { tipo: 'Não se aplica', qtd: '-', intervalo: '-' },
    filtros: {
      oleo: { original: '030115561AN', tecfil: 'PSL55', mann: 'W712/22', wega: 'WO-100', fram: 'PH5949' },
      ar: { original: '032129620C', tecfil: 'ARL3280', mann: 'C3280', wega: 'FAP-3280', fram: 'CA8286' },
      combustivel: { original: '6QE201511', tecfil: 'GI04/7', mann: 'WK58/3', wega: 'FCI-1630', fram: 'G1025' },
      cabine: { original: '5U0819653', tecfil: 'ACP309', mann: 'CU2433', wega: 'AKX-1122', fram: 'CF11175' }
    }
  },
  'VW Gol 1.6 G6': {
    motor: { tipo: '5W-40 sintético', qtd: '3,6 L', intervalo: '10.000 km' },
    cambio: { tipo: 'Manual / I-Motion', qtd: '2,0 L', intervalo: '60.000 km' },
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
    motor: { tipo: '15W-40 mineral/semissintético (API CI-4 / ACEA E7 - MWM Sprint / Cummins)', qtd: '5,5 L a 8,5 L', intervalo: '5.000 - 10.000 km' },
    cambio: { tipo: 'Manual (Eaton FS-2305 / FSO-2405): SAE 50 sintético ou 75W-90 GL-4', qtd: '3,2 L', intervalo: '20.000 - 40.000 km' },
    transferencia: { tipo: 'ATF (Óleo para Transmissão Automática) / Conforme Manual', qtd: 'Aprox. 1,2 L a 1,5 L', intervalo: '20.000 - 40.000 km' },
    diferencial: { tipo: '85W-140 ou 80W-90 API GL-5 (Eixos Dana 44 / 60 / 70)', qtd: 'Diant.: ~1,5 L / Tras.: ~2,2 L a 3,0 L', intervalo: '20.000 - 40.000 km' },
    filtros: {
      oleo: { original: '905700200021', tecfil: 'PEL106', mann: 'HU718/1x', wega: 'WOE-610', fram: 'CH9642' },
      ar: { original: '600700400012', tecfil: 'AR8480', mann: 'C24150', wega: 'FAP-4001', fram: 'CA8558' },
      combustivel: { original: '600700500010', tecfil: 'PCD33', mann: 'WK842/2', wega: 'FCI-1620', fram: 'P4156' },
      cabine: { original: 'Personalizado', tecfil: 'ACP301', mann: 'CU2842', wega: 'AKX-1120', fram: 'CF1028' }
    }
  },
  'Agrale Marruá - AM20': {
    motor: { tipo: '15W-40 mineral/semissintético (API CI-4 / ACEA E7)', qtd: '5,5 L a 8,5 L', intervalo: '5.000 - 10.000 km' },
    cambio: { tipo: 'Manual: SAE 50 sintético ou 75W-90 GL-4', qtd: '3,2 L', intervalo: '20.000 - 40.000 km' },
    transferencia: { tipo: 'ATF / Conforme Manual', qtd: 'Aprox. 1,2 L a 1,5 L', intervalo: '20.000 - 40.000 km' },
    diferencial: { tipo: '85W-140 ou 80W-90 API GL-5', qtd: 'Diant.: ~1,5 L / Tras.: ~2,2 L a 3,0 L', intervalo: '20.000 - 40.000 km' },
    filtros: {
      oleo: { original: '905700200021', tecfil: 'PEL106', mann: 'HU718/1x', wega: 'WOE-610', fram: 'CH9642' },
      ar: { original: '600700400012', tecfil: 'AR8480', mann: 'C24150', wega: 'FAP-4001', fram: 'CA8558' },
      combustivel: { original: '600700500010', tecfil: 'PCD33', mann: 'WK842/2', wega: 'FCI-1620', fram: 'P4156' }
    }
  },
  'Agrale Marruá - AM22': {
    motor: { tipo: '15W-40 mineral/semissintético (API CI-4 / ACEA E7)', qtd: '5,5 L a 8,5 L', intervalo: '5.000 - 10.000 km' },
    cambio: { tipo: 'Manual: SAE 50 sintético ou 75W-90 GL-4', qtd: '3,2 L', intervalo: '20.000 - 40.000 km' },
    transferencia: { tipo: 'ATF / Conforme Manual', qtd: 'Aprox. 1,2 L a 1,5 L', intervalo: '20.000 - 40.000 km' },
    diferencial: { tipo: '85W-140 ou 80W-90 API GL-5', qtd: 'Diant.: ~1,5 L / Tras.: ~2,2 L a 3,0 L', intervalo: '20.000 - 40.000 km' },
    filtros: {
      oleo: { original: '905700200021', tecfil: 'PEL106', mann: 'HU718/1x', wega: 'WOE-610', fram: 'CH9642' },
      ar: { original: '600700400012', tecfil: 'AR8480', mann: 'C24150', wega: 'FAP-4001', fram: 'CA8558' },
      combustivel: { original: '600700500010', tecfil: 'PCD33', mann: 'WK842/2', wega: 'FCI-1620', fram: 'P4156' }
    }
  },
  'Agrale Marruá - AM25': {
    motor: { tipo: '15W-40 mineral/semissintético (API CI-4 / ACEA E7)', qtd: '5,5 L a 8,5 L', intervalo: '5.000 - 10.000 km' },
    cambio: { tipo: 'Manual: SAE 50 sintético ou 75W-90 GL-4', qtd: '3,2 L', intervalo: '20.000 - 40.000 km' },
    transferencia: { tipo: 'ATF / Conforme Manual', qtd: 'Aprox. 1,2 L a 1,5 L', intervalo: '20.000 - 40.000 km' },
    diferencial: { tipo: '85W-140 ou 80W-90 API GL-5', qtd: 'Diant.: ~1,5 L / Tras.: ~2,2 L a 3,0 L', intervalo: '20.000 - 40.000 km' },
    filtros: {
      oleo: { original: '905700200021', tecfil: 'PEL106', mann: 'HU718/1x', wega: 'WOE-610', fram: 'CH9642' },
      ar: { original: '600700400012', tecfil: 'AR8480', mann: 'C24150', wega: 'FAP-4001', fram: 'CA8558' },
      combustivel: { original: '600700500010', tecfil: 'PCD33', mann: 'WK842/2', wega: 'FCI-1620', fram: 'P4156' }
    }
  },
  'Ford F-250 e F-350': {
    motor: { tipo: '15W-40 ou 5W-40 (Cummins / Power Stroke)', qtd: '10,0 L a 12,0 L', intervalo: '10.000 km' },
    cambio: { tipo: 'Manual Eaton: SAE 50 ou 75W-90 GL-4', qtd: '4,5 L', intervalo: '40.000 km' },
    transferencia: { tipo: 'ATF ou Óleo de Transferência 4x4', qtd: '~1,5 L', intervalo: '40.000 km' },
    diferencial: { tipo: '85W-140 API GL-5', qtd: 'Diant.: 2,0 L / Tras.: 3,5 L', intervalo: '40.000 km' },
    filtros: {
      oleo: { original: 'BF6X6714AA', tecfil: 'PSL341', mann: 'W950/26', wega: 'WO-210', fram: 'PH8A' },
      ar: { original: 'BC3Z9601A', tecfil: 'ARL8480', mann: 'C32170', wega: 'FAP-2830', fram: 'CA10427' },
      combustivel: { original: 'F81Z9N184AA', tecfil: 'PSD980', mann: 'WK1060x', wega: 'FCI-1620', fram: 'PS10038' }
    }
  },
  'Ford Ranger Power Stroke': {
    motor: { tipo: '15W-40 CI-4', qtd: '8,2 L', intervalo: '10.000 km' },
    cambio: { tipo: 'Manual: 75W-90 GL-4', qtd: '2,8 L', intervalo: '40.000 km' },
    transferencia: { tipo: 'ATF Dexron III', qtd: '1,4 L', intervalo: '40.000 km' },
    diferencial: { tipo: '80W-90 ou 85W-140 API GL-5', qtd: 'Diant.: 1,2 L / Tras.: 2,4 L', intervalo: '40.000 km' },
    filtros: {
      oleo: { original: 'BG2X6714AA', tecfil: 'PSL55', mann: 'W940/25', wega: 'WO-200', fram: 'PH2870' },
      ar: { original: 'WL5113Z40', tecfil: 'ARL4125', mann: 'C28132', wega: 'FAP-2830', fram: 'CA8286' },
      combustivel: { original: 'WL5113ZA5', tecfil: 'PSD470', mann: 'WK816x', wega: 'FCI-1630', fram: 'PS926' }
    }
  },
  'Ford Ranger 3.0 NGD': {
    motor: { tipo: '15W-40 CI-4', qtd: '8,5 L', intervalo: '10.000 km' },
    cambio: { tipo: 'Manual: 75W-90 GL-4', qtd: '3,0 L', intervalo: '40.000 km' },
    transferencia: { tipo: 'ATF Dexron III', qtd: '1,4 L', intervalo: '40.000 km' },
    diferencial: { tipo: '85W-140 API GL-5', qtd: 'Diant.: 1,3 L / Tras.: 2,6 L', intervalo: '40.000 km' },
    filtros: {
      oleo: { original: 'BG2X6714AA', tecfil: 'PSL55', mann: 'W940/25', wega: 'WO-200', fram: 'PH2870' },
      ar: { original: 'BG2X9601AA', tecfil: 'ARL4130', mann: 'C28132', wega: 'FAP-2830', fram: 'CA8286' },
      combustivel: { original: 'BG2X9155AA', tecfil: 'PSD980', mann: 'WK816x', wega: 'FCI-1620', fram: 'PS926' }
    }
  },
  'Ford Ranger 2.2': {
    motor: { tipo: '5W-30 sintético', qtd: '9,5 L', intervalo: '10.000 km' },
    cambio: { tipo: 'Manual / Automático', qtd: '2,8 L', intervalo: '40.000 km' },
    transferencia: { tipo: 'Óleo para Caixa de Transferência 4x4', qtd: '~1,4 L', intervalo: '40.000 km' },
    diferencial: { tipo: '80W-90 GL-5', qtd: 'Diant.: 1,2 L / Tras.: 2,4 L', intervalo: '40.000 km' },
    filtros: {
      oleo: { original: 'U2Y014302', tecfil: 'PEL106', mann: 'HU711/51x', wega: 'WOE-610', fram: 'CH9642' },
      ar: { original: 'AB399601AB', tecfil: 'ARL8480', mann: 'C32170', wega: 'FAP-2830', fram: 'CA11250' },
      combustivel: { original: 'AB399155AD', tecfil: 'PSD980', mann: 'WK1060x', wega: 'FCI-1620', fram: 'PS10038' }
    }
  },
  'Ford Transit': {
    motor: { tipo: '5W-30 ou 10W-40', qtd: '10,0 L', intervalo: '15.000 km' },
    cambio: { tipo: 'Manual: 75W-90 GL-4', qtd: '2,8 L', intervalo: '50.000 km' },
    diferencial: { tipo: '80W-90 API GL-5', qtd: '2,2 L', intervalo: '50.000 km' },
    filtros: {
      oleo: { original: 'CC1Q6714AA', tecfil: 'PEL106', mann: 'HU711/51x', wega: 'WOE-610', fram: 'CH9642' },
      ar: { original: 'CC1Z9601A', tecfil: 'ARL8480', mann: 'C32170', wega: 'FAP-2830', fram: 'CA11250' },
      combustivel: { original: 'CC1Q9155AA', tecfil: 'PSD980', mann: 'WK1060x', wega: 'FCI-1620', fram: 'PS10038' }
    }
  },
  'Mitsubishi L200 2.5': {
    motor: { tipo: '15W-40 CI-4', qtd: '7,0 L', intervalo: '10.000 km' },
    cambio: { tipo: 'Manual: 75W-90 GL-4', qtd: '2,2 L', intervalo: '40.000 km' },
    transferencia: { tipo: '75W-90 GL-4 ou ATF', qtd: '2,2 L', intervalo: '40.000 km' },
    diferencial: { tipo: '80W-90 ou 85W-140 API GL-5', qtd: 'Diant.: 1,2 L / Tras.: 2,6 L', intervalo: '40.000 km' },
    filtros: {
      oleo: { original: 'MD360935', tecfil: 'PSL55', mann: 'W712', wega: 'WO-100', fram: 'PH2870' },
      ar: { original: 'MR529773', tecfil: 'ARL4122', mann: 'C26168', wega: 'FAP-4030', fram: 'CA8286' },
      combustivel: { original: 'MB220900', tecfil: 'PSD980', mann: 'WK723', wega: 'FCI-1620', fram: 'PS926' }
    }
  },
  'Mitsubishi Triton 3.2': {
    motor: { tipo: '15W-40 CI-4 / CJ-4', qtd: '9,3 L', intervalo: '10.000 km' },
    cambio: { tipo: 'Manual / Automático', qtd: '~3,0 L', intervalo: '40.000 km' },
    transferencia: { tipo: '75W-90 GL-4 ou ATF', qtd: '2,4 L', intervalo: '40.000 km' },
    diferencial: { tipo: '80W-90 API GL-5', qtd: 'Diant.: 1,2 L / Tras.: 2,8 L', intervalo: '40.000 km' },
    filtros: {
      oleo: { original: '1230A186', tecfil: 'PEL106', mann: 'HU711/51x', wega: 'WOE-610', fram: 'CH9642' },
      ar: { original: '1500A023', tecfil: 'ARL8480', mann: 'C27132', wega: 'FAP-4030', fram: 'CA10427' },
      combustivel: { original: '1770A107', tecfil: 'PSD980', mann: 'WK1060x', wega: 'FCI-1620', fram: 'PS10038' }
    }
  },
  'Mitsubishi Triton 2.4': {
    motor: { tipo: '5W-30 ou 15W-40', qtd: '8,4 L', intervalo: '10.000 km' },
    cambio: { tipo: 'Manual / Automático', qtd: '2,8 L', intervalo: '40.000 km' },
    transferencia: { tipo: 'Óleo Sintético Transferência GL-4', qtd: '2,4 L', intervalo: '40.000 km' },
    diferencial: { tipo: '80W-90 API GL-5', qtd: 'Diant.: 1,2 L / Tras.: 2,8 L', intervalo: '40.000 km' },
    filtros: {
      oleo: { original: '1230A186', tecfil: 'PEL106', mann: 'HU711/51x', wega: 'WOE-610', fram: 'CH9642' },
      ar: { original: '1500A593', tecfil: 'ARL8480', mann: 'C27132', wega: 'FAP-4030', fram: 'CA10427' },
      combustivel: { original: '1770A225', tecfil: 'PSD980', mann: 'WK1060x', wega: 'FCI-1620', fram: 'PS10038' }
    }
  },
  'Nissan Frontier 2.5': {
    motor: { tipo: '15W-40 ou 5W-30', qtd: '6,9 L', intervalo: '10.000 km' },
    cambio: { tipo: 'Manual / Automático', qtd: 'Manual ~3,8 L', intervalo: '40.000 km' },
    transferencia: { tipo: 'ATF Nissan Matic D (Dexron III)', qtd: '2,0 L', intervalo: '40.000 km' },
    diferencial: { tipo: '80W-90 API GL-5', qtd: 'Diant.: 0,85 L / Tras.: 1,6 L a 2,0 L', intervalo: '40.000 km' },
    filtros: {
      oleo: { original: '15208BN30A', tecfil: 'PSL158', mann: 'W610/3', wega: 'JFO0104', fram: 'PH4967' },
      ar: { original: '16546EB300', tecfil: 'ARL1655', mann: 'C27003', wega: 'JFA0137', fram: 'CA10427' },
      combustivel: { original: '16400EB30A', tecfil: 'PSC993', mann: 'WK920/6', wega: 'JFC105', fram: 'PS10038' }
    }
  },
  'Nissan Frontier 2.3': {
    motor: { tipo: '5W-30 sintético', qtd: '7,4 L', intervalo: '10.000 km' },
    cambio: { tipo: 'Manual / Automático 7 marchas', qtd: 'Manual 2,2 L', intervalo: '40.000 km' },
    transferencia: { tipo: 'ATF / Óleo Específico Transferência', qtd: '1,5 L', intervalo: '40.000 km' },
    diferencial: { tipo: '80W-90 API GL-5', qtd: 'Diant.: 1,3 L / Tras.: 2,2 L', intervalo: '40.000 km' },
    filtros: {
      oleo: { original: '1520800Q0A', tecfil: 'PEL106', mann: 'HU711/51x', wega: 'WOE-610', fram: 'CH9642' },
      ar: { original: '165464KV0A', tecfil: 'ARL8480', mann: 'C32170', wega: 'FAP-2830', fram: 'CA11250' },
      combustivel: { original: '164004KV0A', tecfil: 'PSD980', mann: 'WK1060x', wega: 'FCI-1620', fram: 'PS10038' }
    }
  },
  'Toyota Hilux 3.0': {
    motor: { tipo: '15W-40 CI-4 ou 5W-40 sintético', qtd: '7,0 L', intervalo: '10.000 km' },
    cambio: { tipo: 'Manual: 75W-90 GL-4/GL-5', qtd: '2,2 L', intervalo: '40.000 km' },
    transferencia: { tipo: '75W-90 GL-4', qtd: '1,0 L', intervalo: '40.000 km' },
    diferencial: { tipo: '80W-90 ou 85W-140 API GL-5', qtd: 'Diant.: 1,4 L / Tras.: 3,5 L', intervalo: '40.000 km' },
    filtros: {
      oleo: { original: '90915YZZD2', tecfil: 'PSL55', mann: 'W712', wega: 'WO-100', fram: 'PH2870' },
      ar: { original: '178010L040', tecfil: 'ARL4125', mann: 'C27132', wega: 'FAP-3280', fram: 'CA8286' },
      combustivel: { original: '233900L010', tecfil: 'PSD470', mann: 'WK816x', wega: 'FCI-1630', fram: 'PS926' }
    }
  },
  'Toyota Hilux 2.8 - Nova': {
    motor: { tipo: '0W-20 ou 5W-30 sintético', qtd: '7,5 L', intervalo: '10.000 km' },
    cambio: { tipo: 'Manual / Automático 6 marchas', qtd: '2,2 L', intervalo: '40.000 km' },
    transferencia: { tipo: '75W-90 GL-4', qtd: '1,0 L', intervalo: '40.000 km' },
    diferencial: { tipo: '80W-90 ou 85W-140 API GL-5', qtd: 'Diant.: 1,4 L / Tras.: 3,5 L', intervalo: '40.000 km' },
    filtros: {
      oleo: { original: '04152YZZA6', tecfil: 'PEL106', mann: 'HU711/51x', wega: 'WOE-610', fram: 'CH9642' },
      ar: { original: '1780111130', tecfil: 'ARL8480', mann: 'C32170', wega: 'FAP-3280', fram: 'CA11250' },
      combustivel: { original: '233900E020', tecfil: 'PSD980', mann: 'WK1060x', wega: 'FCI-1620', fram: 'PS10038' }
    }
  },

  // --- CAMINHÕES & ÔNIBUS/VANS ---
  'Ford Cargo 816': {
    motor: { tipo: '15W-40 CI-4 (Cummins ISF 4.5)', qtd: '11,0 L', intervalo: '10.000 km' },
    cambio: { tipo: 'Manual Eaton FSO-4505: SAE 75W-90 sintético', qtd: '3,8 L', intervalo: '40.000 km' },
    diferencial: { tipo: '85W-140 API GL-5', qtd: '3,0 L', intervalo: '40.000 km' },
    filtros: {
      oleo: { original: 'BG1X6714AA', tecfil: 'PEL106', mann: 'W950/26', wega: 'WO-210', fram: 'PH8A' },
      ar: { original: 'BG1X9601BA', tecfil: 'ARL8480', mann: 'C17308', wega: 'FAP-4001', fram: 'CA8558' },
      combustivel: { original: 'BG1X9155AA', tecfil: 'PSD980', mann: 'WK954/2x', wega: 'FCI-1620', fram: 'PS10038' }
    }
  },
  'Ford Cargo 2423': {
    motor: { tipo: '15W-40 CI-4', qtd: '15,0 L', intervalo: '20.000 km' },
    cambio: { tipo: 'Manual Eaton: SAE 50 ou 80W-90', qtd: '9,5 L', intervalo: '40.000 km' },
    diferencial: { tipo: '85W-140 API GL-5', qtd: '16,0 L', intervalo: '40.000 km' },
    filtros: {
      oleo: { original: 'BG2X6714AA', tecfil: 'PEL106', mann: 'W950/26', wega: 'WO-210', fram: 'PH8A' },
      ar: { original: 'BG2X9601AA', tecfil: 'ARL8480', mann: 'C27109', wega: 'FAP-2830', fram: 'CA10427' },
      combustivel: { original: 'BG2X9155AA', tecfil: 'PSD980', mann: 'WK954/2x', wega: 'FCI-1620', fram: 'PS10038' }
    }
  },
  'Ford - 2629 Bau': {
    motor: { tipo: '15W-40 CI-4', qtd: '18,0 L', intervalo: '20.000 km' },
    cambio: { tipo: 'Manual Eaton / Fuller', qtd: '11,0 L', intervalo: '40.000 km' },
    diferencial: { tipo: '85W-140 API GL-5 (Reduzido)', qtd: '18,0 L', intervalo: '40.000 km' },
    filtros: {
      oleo: { original: 'BH1X6714AA', tecfil: 'PEL106', mann: 'W950/26', wega: 'WO-210', fram: 'PH8A' },
      ar: { original: 'BH1X9601AA', tecfil: 'ARL8480', mann: 'C27830', wega: 'FAP-2830', fram: 'CA10427' },
      combustivel: { original: 'BH1X9155AA', tecfil: 'PSD980', mann: 'WK954/2x', wega: 'FCI-1620', fram: 'PS10038' }
    }
  },
  'Ford - 2629 CTA e CTC': {
    motor: { tipo: '15W-40 CI-4', qtd: '18,0 L', intervalo: '20.000 km' },
    cambio: { tipo: 'Manual Eaton / Fuller', qtd: '11,0 L', intervalo: '40.000 km' },
    diferencial: { tipo: '85W-140 API GL-5', qtd: '18,0 L', intervalo: '40.000 km' },
    filtros: {
      oleo: { original: 'BH1X6714AA', tecfil: 'PEL106', mann: 'W950/26', wega: 'WO-210', fram: 'PH8A' },
      ar: { original: 'BH1X9601AA', tecfil: 'ARL8480', mann: 'C27830', wega: 'FAP-2830', fram: 'CA10427' },
      combustivel: { original: 'BH1X9155AA', tecfil: 'PSD980', mann: 'WK954/2x', wega: 'FCI-1620', fram: 'PS10038' }
    }
  },
  'Ford 1933 Cav Mec': {
    motor: { tipo: '15W-40 CI-4 / CJ-4', qtd: '22,0 L', intervalo: '20.000 km' },
    cambio: { tipo: 'Manual Fuller / Automatizado', qtd: '12,5 L', intervalo: '60.000 km' },
    diferencial: { tipo: '85W-140 API GL-5', qtd: '16,0 L', intervalo: '50.000 km' },
    filtros: {
      oleo: { original: 'CC1Q6714AA', tecfil: 'PEL106', mann: 'W950/26', wega: 'WO-210', fram: 'PH8A' },
      ar: { original: 'CC1Z9601A', tecfil: 'ARL8480', mann: 'C27830', wega: 'FAP-2830', fram: 'CA10427' },
      combustivel: { original: 'CC1Q9155AA', tecfil: 'PSD980', mann: 'WK1060x', wega: 'FCI-1620', fram: 'PS10038' }
    }
  },
  'Mercedes-Benz 2627': {
    motor: { tipo: '15W-40 MB 228.3 / 228.5', qtd: '28,0 L', intervalo: '20.000 km' },
    cambio: { tipo: 'Manual MB', qtd: '11,0 L', intervalo: '50.000 km' },
    diferencial: { tipo: '85W-140 API GL-5', qtd: '15,0 L', intervalo: '50.000 km' },
    filtros: {
      oleo: { original: 'A0001802609', tecfil: 'PEL108', mann: 'HU934/2x', wega: 'WO-530', fram: 'CH9939' },
      ar: { original: 'A0030944004', tecfil: 'ARL8480', mann: 'C25125', wega: 'FAP-2830', fram: 'CA10427' },
      combustivel: { original: 'A0000903651', tecfil: 'PSD980', mann: 'PU936/1x', wega: 'FCI-1620', fram: 'PS10038' }
    }
  },
  'Mercedes-Benz 915c': {
    motor: { tipo: '15W-40 MB 228.3', qtd: '15,0 L', intervalo: '15.000 km' },
    cambio: { tipo: 'Manual MB G-60', qtd: '5,5 L', intervalo: '40.000 km' },
    diferencial: { tipo: '85W-140 API GL-5', qtd: '4,5 L', intervalo: '40.000 km' },
    filtros: {
      oleo: { original: 'A0001802609', tecfil: 'PEL108', mann: 'HU934/2x', wega: 'WO-530', fram: 'CH9939' },
      ar: { original: 'A0030944004', tecfil: 'ARL8480', mann: 'C25125', wega: 'FAP-2830', fram: 'CA10427' },
      combustivel: { original: 'A0000903651', tecfil: 'PSD980', mann: 'PU936/1x', wega: 'FCI-1620', fram: 'PS10038' }
    }
  },
  'Mercedes-Benz 1418E': {
    motor: { tipo: '15W-40 MB 228.3', qtd: '17,0 L', intervalo: '20.000 km' },
    cambio: { tipo: 'Manual MB', qtd: '8,0 L', intervalo: '40.000 km' },
    diferencial: { tipo: '85W-140 API GL-5', qtd: '10,0 L', intervalo: '40.000 km' },
    filtros: {
      oleo: { original: 'A0001802609', tecfil: 'PEL108', mann: 'HU934/2x', wega: 'WO-530', fram: 'CH9939' },
      ar: { original: 'A0030944004', tecfil: 'ARL8480', mann: 'C25125', wega: 'FAP-2830', fram: 'CA10427' },
      combustivel: { original: 'A0000903651', tecfil: 'PSD980', mann: 'PU936/1x', wega: 'FCI-1620', fram: 'PS10038' }
    }
  },
  'Mercedes-Benz AXOR 3344': {
    motor: { tipo: '15W-40 ou 10W-40 MB 228.5', qtd: '36,0 L', intervalo: '30.000 km' },
    cambio: { tipo: 'Manual / Automatizado MB G-240', qtd: '13,0 L', intervalo: '60.000 km' },
    transferencia: { tipo: 'Óleo Específico MB para Caixa Auxiliar / Transferência Tração Total', qtd: '8,0 L', intervalo: '50.000 km' },
    diferencial: { tipo: '85W-140 API GL-5 (Cubos redutores e carcaça)', qtd: '25,0 L', intervalo: '50.000 km' },
    filtros: {
      oleo: { original: 'A5411840225', tecfil: 'PEL108', mann: 'HU12103x', wega: 'WO-530', fram: 'CH9939' },
      ar: { original: 'A0040943404', tecfil: 'ARL8480', mann: 'C311295', wega: 'FAP-2830', fram: 'CA10427' },
      combustivel: { original: 'A0000904251', tecfil: 'PSD980', mann: 'PU1040x', wega: 'FCI-1620', fram: 'PS10038' }
    }
  },
  'Mercedes-Benz Atego 1725': {
    motor: { tipo: '15W-40 MB 228.3', qtd: '18,0 L', intervalo: '20.000 km' },
    cambio: { tipo: 'Manual MB', qtd: '9,0 L', intervalo: '40.000 km' },
    diferencial: { tipo: '85W-140 API GL-5', qtd: '12,0 L', intervalo: '40.000 km' },
    filtros: {
      oleo: { original: 'A0001802609', tecfil: 'PEL108', mann: 'HU934/2x', wega: 'WO-530', fram: 'CH9939' },
      ar: { original: 'A0030944004', tecfil: 'ARL8480', mann: 'C25125', wega: 'FAP-2830', fram: 'CA10427' },
      combustivel: { original: 'A0000903651', tecfil: 'PSD980', mann: 'PU936/1x', wega: 'FCI-1620', fram: 'PS10038' }
    }
  },
  'VW Work 815': {
    motor: { tipo: '15W-40 CI-4 (Cummins)', qtd: '11,0 L', intervalo: '10.000 km' },
    cambio: { tipo: 'Manual Eaton', qtd: '3,8 L', intervalo: '40.000 km' },
    diferencial: { tipo: '85W-140 API GL-5', qtd: '3,0 L', intervalo: '40.000 km' },
    filtros: {
      oleo: { original: '2R0115561', tecfil: 'PEL106', mann: 'W950/26', wega: 'WO-210', fram: 'PH8A' },
      ar: { original: '2T0129620', tecfil: 'ARL8480', mann: 'C17308', wega: 'FAP-4001', fram: 'CA8558' },
      combustivel: { original: '2R0201511', tecfil: 'PSD980', mann: 'WK950/21', wega: 'FCI-1620', fram: 'PS10038' }
    }
  },
  'VW Work 5-Ton 15-180': {
    motor: { tipo: '15W-40 CI-4', qtd: '13,0 L', intervalo: '15.000 km' },
    cambio: { tipo: 'Manual Eaton', qtd: '5,5 L', intervalo: '40.000 km' },
    diferencial: { tipo: '85W-140 API GL-5', qtd: '6,0 L', intervalo: '40.000 km' },
    filtros: {
      oleo: { original: '2R0115561', tecfil: 'PEL106', mann: 'W950/26', wega: 'WO-210', fram: 'PH8A' },
      ar: { original: '2T0129620', tecfil: 'ARL8480', mann: 'C17308', wega: 'FAP-4001', fram: 'CA8558' },
      combustivel: { original: '2R0201511', tecfil: 'PSD980', mann: 'WK950/21', wega: 'FCI-1620', fram: 'PS10038' }
    }
  },
  'VW Work 7-Ton Comercial': {
    motor: { tipo: '15W-40 CI-4', qtd: '15,0 L', intervalo: '15.000 km' },
    cambio: { tipo: 'Manual Eaton / ZF', qtd: '7,0 L', intervalo: '40.000 km' },
    diferencial: { tipo: '85W-140 API GL-5', qtd: '8,0 L', intervalo: '40.000 km' },
    filtros: {
      oleo: { original: '2R0115561', tecfil: 'PEL106', mann: 'W950/26', wega: 'WO-210', fram: 'PH8A' },
      ar: { original: '2T0129620', tecfil: 'ARL8480', mann: 'C27830', wega: 'FAP-2830', fram: 'CA10427' },
      combustivel: { original: '2R0201511', tecfil: 'PSD980', mann: 'WK950/21', wega: 'FCI-1620', fram: 'PS10038' }
    }
  },
  'VW Work 24-220': {
    motor: { tipo: '15W-40 CI-4', qtd: '15,0 L', intervalo: '15.000 km' },
    cambio: { tipo: 'Manual Eaton', qtd: '9,5 L', intervalo: '40.000 km' },
    diferencial: { tipo: '85W-140 API GL-5', qtd: '14,0 L', intervalo: '40.000 km' },
    filtros: {
      oleo: { original: '2R0115561', tecfil: 'PEL106', mann: 'W950/26', wega: 'WO-210', fram: 'PH8A' },
      ar: { original: '2T0129620', tecfil: 'ARL8480', mann: 'C27830', wega: 'FAP-2830', fram: 'CA10427' },
      combustivel: { original: '2R0201511', tecfil: 'PSD980', mann: 'WK950/21', wega: 'FCI-1620', fram: 'PS10038' }
    }
  },
  'VW Work 26-220': {
    motor: { tipo: '15W-40 CI-4', qtd: '15,0 L', intervalo: '15.000 km' },
    cambio: { tipo: 'Manual Eaton', qtd: '9,5 L', intervalo: '40.000 km' },
    diferencial: { tipo: '85W-140 API GL-5', qtd: '16,0 L', intervalo: '40.000 km' },
    filtros: {
      oleo: { original: '2R0115561', tecfil: 'PEL106', mann: 'W950/26', wega: 'WO-210', fram: 'PH8A' },
      ar: { original: '2T0129620', tecfil: 'ARL8480', mann: 'C27830', wega: 'FAP-2830', fram: 'CA10427' },
      combustivel: { original: '2R0201511', tecfil: 'PSD980', mann: 'WK950/21', wega: 'FCI-1620', fram: 'PS10038' }
    }
  },
  'VW Work 26-260E': {
    motor: { tipo: '15W-40 CI-4', qtd: '16,0 L', intervalo: '20.000 km' },
    cambio: { tipo: 'Manual ZF', qtd: '10,0 L', intervalo: '40.000 km' },
    diferencial: { tipo: '85W-140 API GL-5', qtd: '16,0 L', intervalo: '40.000 km' },
    filtros: {
      oleo: { original: '2R0115561', tecfil: 'PEL106', mann: 'W950/26', wega: 'WO-210', fram: 'PH8A' },
      ar: { original: '2T0129620', tecfil: 'ARL8480', mann: 'C27830', wega: 'FAP-2830', fram: 'CA10427' },
      combustivel: { original: '2R0201511', tecfil: 'PSD980', mann: 'WK950/21', wega: 'FCI-1620', fram: 'PS10038' }
    }
  },
  'VW Constellation 24-250': {
    motor: { tipo: '15W-40 CI-4 (Cummins Interact 6.0)', qtd: '16,0 L', intervalo: '20.000 km' },
    cambio: { tipo: 'Manual ZF 9S', qtd: '9,5 L', intervalo: '40.000 km' },
    diferencial: { tipo: '85W-140 API GL-5', qtd: '14,0 L', intervalo: '40.000 km' },
    filtros: {
      oleo: { original: '2R0115561', tecfil: 'PEL106', mann: 'W950/26', wega: 'WO-210', fram: 'PH8A' },
      ar: { original: '2T0129620', tecfil: 'ARL8480', mann: 'C27830', wega: 'FAP-2830', fram: 'CA10427' },
      combustivel: { original: '2R0201511', tecfil: 'PSD980', mann: 'WK950/21', wega: 'FCI-1620', fram: 'PS10038' }
    }
  },
  'VW Constellation 26-280': {
    motor: { tipo: '15W-40 ou 10W-40 (MAN D08)', qtd: '23,0 L', intervalo: '30.000 km' },
    cambio: { tipo: 'Manual ZF 16S', qtd: '11,0 L', intervalo: '50.000 km' },
    diferencial: { tipo: '85W-140 API GL-5', qtd: '16,0 L', intervalo: '50.000 km' },
    filtros: {
      oleo: { original: '2V0115561', tecfil: 'PEL108', mann: 'HU934/2x', wega: 'WO-530', fram: 'CH9939' },
      ar: { original: '2V0129620', tecfil: 'ARL8480', mann: 'C27830', wega: 'FAP-2830', fram: 'CA10427' },
      combustivel: { original: '2V0201511', tecfil: 'PSD980', mann: 'PU936/1x', wega: 'FCI-1620', fram: 'PS10038' }
    }
  },
  'VW Constellation 31-320': {
    motor: { tipo: '15W-40 CI-4 (Cummins ISC)', qtd: '18,0 L', intervalo: '20.000 km' },
    cambio: { tipo: 'Manual ZF', qtd: '11,0 L', intervalo: '40.000 km' },
    diferencial: { tipo: '85W-140 API GL-5', qtd: '18,0 L', intervalo: '40.000 km' },
    filtros: {
      oleo: { original: '2R0115561', tecfil: 'PEL106', mann: 'W950/26', wega: 'WO-210', fram: 'PH8A' },
      ar: { original: '2T0129620', tecfil: 'ARL8480', mann: 'C27830', wega: 'FAP-2830', fram: 'CA10427' },
      combustivel: { original: '2R0201511', tecfil: 'PSD980', mann: 'WK950/21', wega: 'FCI-1620', fram: 'PS10038' }
    }
  },
  'Fiat Ducato 2.3 Multijet': {
    motor: { tipo: '5W-30 sintético (Fiat 9.55535-S1)', qtd: '4,9 L', intervalo: '20.000 km' },
    cambio: { tipo: 'Manual: 75W-80 GL-5', qtd: '2,7 L', intervalo: '60.000 km' },
    diferencial: { tipo: 'Não se aplica', qtd: '-', intervalo: '-' },
    filtros: {
      oleo: { original: '71754238', tecfil: 'PEL106', mann: 'HU711/51x', wega: 'WO-130', fram: 'CH9642' },
      ar: { original: '1347585080', tecfil: 'ARL8480', mann: 'C2730', wega: 'FAP-4025', fram: 'CA10222' },
      combustivel: { original: '77366565', tecfil: 'PSD980', mann: 'WK853', wega: 'FCI-1620', fram: 'PS10038' }
    }
  },
  'Fiat Ducato 2.8': {
    motor: { tipo: '15W-40 mineral ou semissintético', qtd: '6,3 L', intervalo: '10.000 km' },
    cambio: { tipo: 'Manual: 75W-80 ou 80W-90', qtd: '2,7 L', intervalo: '40.000 km' },
    diferencial: { tipo: 'Não se aplica', qtd: '-', intervalo: '-' },
    filtros: {
      oleo: { original: '98401344', tecfil: 'PSL55', mann: 'W940/25', wega: 'WO-200', fram: 'PH2870' },
      ar: { original: '1318255080', tecfil: 'ARL4125', mann: 'C2830', wega: 'FAP-2830', fram: 'CA9926' },
      combustivel: { original: '98401345', tecfil: 'PSD470', mann: 'WK842/2', wega: 'FCI-1620', fram: 'P4156' }
    }
  },
  'Iveco - Daily 35S14': {
    motor: { tipo: '10W-40 ou 5W-30 sintético', qtd: '6,5 L', intervalo: '20.000 km' },
    cambio: { tipo: 'Manual ZF 6S', qtd: '2,2 L', intervalo: '60.000 km' },
    diferencial: { tipo: '80W-90 ou 85W-140 API GL-5', qtd: '2,5 L', intervalo: '50.000 km' },
    filtros: {
      oleo: { original: '5801382496', tecfil: 'PEL106', mann: 'HU711/51x', wega: 'WOE-610', fram: 'CH9642' },
      ar: { original: '5801382497', tecfil: 'ARL8480', mann: 'C27920', wega: 'FAP-2830', fram: 'CA10427' },
      combustivel: { original: '5801382498', tecfil: 'PSD980', mann: 'WK1040', wega: 'FCI-1620', fram: 'PS10038' }
    }
  }
};
