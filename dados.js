/* ==========================================================
   DADOS DO MANUAL AUTOMOTIVO — dados.js
   Gerado a partir de index-12-11-26.html.
   Para cadastrar: 1) coloque o modelo em bancoDeDados (menu)
   2) crie a ficha em especificacoesOleos com o MESMO nome.
   Formato novo opcional: sistemas: [...] e filtros: {...}
   (veja o exemplo da Spin no manual anterior).
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
      'Ônibus': ['Ônibus Agrale', 'Mercedes-Benz Choque', 'Ônibus MB Urbano', 'Mercedes-Benz', 'Mascarelo/Agrale S3', 'VW 15-190E Rural', 'VW Roma 18-320'],
      'Vans e Utilitários': ['Fiat Ducato 2.3 Multijet', 'Fiat Ducato 2.8', 'Iveco - Daily 35S14', 'Ford Transit']
    }
  },
  'nauticos': {
    titulo: 'Náuticos',
    marcas: {
      'Motores Marítimos': ['Náuticos X', 'Guardian', 'Guardian 2']
    }
  }
};

    const especificacoesOleos = {
  // --- VEÍCULOS PASSEIO ---
  'Chevrolet SPIN': {
    motor: { tipo: '5W-30 sintético (dexos1 Gen 2/3)', qtd: '4,2 L (com filtro)', intervalo: '10.000 km ou 1 ano (5.000 km severo)' },
    cambio: { tipo: 'Automático: Dexron VI / Manual: 75W-85 ou 75W-90 GL-4', qtd: 'Automático: ~8,5 L (total) / Manual: 1,8 L', intervalo: 'Automático: 60.000 - 80.000 km / Manual: 60.000 km' },
    diferencial: { tipo: 'Não se aplica (Tração Dianteira - integrado ao câmbio)', qtd: '-', intervalo: '-' }
  },
  'Chevrolet Agile': {
    motor: { tipo: '10W-40 semissintético ou 5W-30 sintético (API SN)', qtd: '3,5 L (com filtro)', intervalo: '10.000 km ou 1 ano (5.000 km severo)' },
    cambio: { tipo: 'Manual: 75W-85 ou 75W-90 GL-4', qtd: '1,6 L a 1,8 L', intervalo: '60.000 - 80.000 km' },
    diferencial: { tipo: 'Não se aplica (Tração Dianteira - integrado ao câmbio)', qtd: '-', intervalo: '-' }
  },
  'Chevrolet Montana': {
    motor: { tipo: '5W-30 sintético (1.4 Econoflex) / 15W-40 ou 20W-50 (1.8 antigas)', qtd: '3,5 L (com filtro)', intervalo: '10.000 km (5.000 km severo)' },
    cambio: { tipo: 'Manual: 75W-85 ou 75W-90 GL-4 (Easytronic: fluido específico + atuador)', qtd: '1,6 L a 1,8 L', intervalo: '60.000 - 80.000 km' },
    diferencial: { tipo: 'Não se aplica (Tração Dianteira - integrado ao câmbio)', qtd: '-', intervalo: '-' }
  },
  'Fiat Palio 1.4': {
    motor: { tipo: '15W-40 semissintético (Fire) ou 5W-30 sintético (Fire Evo)', qtd: '2,7 L a 3,2 L (com filtro)', intervalo: '10.000 km (7.500 km severo)' },
    cambio: { tipo: 'Manual: 75W-90 ou 80W API GL-4', qtd: '2,0 L', intervalo: '60.000 km' },
    diferencial: { tipo: 'Não se aplica (Tração Dianteira - integrado ao câmbio)', qtd: '-', intervalo: '-' }
  },
  'Fiat Doblo 1.8': {
    motor: { tipo: '15W-40 semissintético (GM/E.torQ) ou 5W-30 sintético (E.torQ mais novos)', qtd: '3,5 L (GM) / 4,3 L (E.torQ)', intervalo: '10.000 km (7.500 km severo)' },
    cambio: { tipo: 'Manual: 75W-90 API GL-4', qtd: '2,0 L', intervalo: '60.000 km' },
    diferencial: { tipo: 'Não se aplica (Tração Dianteira - integrado ao câmbio)', qtd: '-', intervalo: '-' }
  },
  'Fiat Doblo 1.4': {
    motor: { tipo: '15W-40 semissintético (API SL/SN)', qtd: '2,7 L a 3,2 L (com filtro)', intervalo: '10.000 km (7.500 km severo)' },
    cambio: { tipo: 'Manual: 75W-90 API GL-4', qtd: '2,0 L', intervalo: '60.000 km' },
    diferencial: { tipo: 'Não se aplica (Tração Dianteira - integrado ao câmbio)', qtd: '-', intervalo: '-' }
  },
  'Fiat Strada 1.4': {
    motor: { tipo: '15W-40 semissintético (Fire) ou 5W-30 sintético (Fire Evo)', qtd: '2,7 L a 3,2 L (com filtro)', intervalo: '10.000 km (7.500 km severo)' },
    cambio: { tipo: 'Manual: 75W-90 API GL-4', qtd: '1,8 L a 2,0 L', intervalo: '60.000 km' },
    diferencial: { tipo: 'Não se aplica (Tração Dianteira - integrado ao câmbio)', qtd: '-', intervalo: '-' }
  },
  'Ford Fiesta 1.0': {
    motor: { tipo: '5W-30 sintético (Zetec Rocam - norma WSS-M2C913)', qtd: '4,1 L a 4,3 L (com filtro)', intervalo: '10.000 km ou 1 ano' },
    cambio: { tipo: 'Manual: 75W-90 sintético API GL-4 (caixa IB5)', qtd: '2,1 L', intervalo: '60.000 km (uso severo)' },
    diferencial: { tipo: 'Não se aplica (Tração Dianteira - integrado ao câmbio)', qtd: '-', intervalo: '-' }
  },
  'Ford Fiesta 1.6': {
    motor: { tipo: '5W-30 sintético (Zetec Rocam / Sigma - norma WSS-M2C913)', qtd: '4,1 L (com filtro)', intervalo: '10.000 km ou 1 ano' },
    cambio: { tipo: 'Manual: 75W-90 sintético API GL-4 (Powershift: fluido DCT)', qtd: 'Manual: 2,1 L / Powershift: 1,75 L', intervalo: '60.000 km' },
    diferencial: { tipo: 'Não se aplica (Tração Dianteira - integrado ao câmbio)', qtd: '-', intervalo: '-' }
  },
  'Ford Focus 1.6': {
    motor: { tipo: '5W-30 sintético (Zetec Rocam / Sigma)', qtd: '4,1 L (com filtro)', intervalo: '10.000 km ou 1 ano' },
    cambio: { tipo: 'Manual: 75W-90 sintético API GL-4 (Powershift: fluido DCT)', qtd: 'Manual: 2,1 L / Powershift: 1,75 L', intervalo: '60.000 km' },
    diferencial: { tipo: 'Não se aplica (Tração Dianteira - integrado ao câmbio)', qtd: '-', intervalo: '-' }
  },
  'Ford Focus 2.0': {
    motor: { tipo: '5W-30 sintético (Duratec)', qtd: '4,3 L (com filtro)', intervalo: '10.000 km ou 1 ano' },
    cambio: { tipo: 'Manual: 75W-90 GL-4 / Automático 4F27E: Mercon LV / Powershift: DCT', qtd: 'Manual: 1,9 L / Auto: ~6,7 L / DCT: 1,75 L', intervalo: '60.000 km' },
    diferencial: { tipo: 'Não se aplica (Tração Dianteira - integrado ao câmbio)', qtd: '-', intervalo: '-' }
  },
  'Nissan Sentra': {
    motor: { tipo: '5W-30 sintético (API SN/SP)', qtd: '4,4 L (com filtro)', intervalo: '10.000 km' },
    cambio: { tipo: 'CVT: Fluido Nissan NS-2 (até 2013) ou NS-3 (2014+)', qtd: '~7,5 L a 8,2 L (total)', intervalo: '40.000 - 60.000 km' },
    diferencial: { tipo: 'Não se aplica (Tração Dianteira - integrado ao câmbio)', qtd: '-', intervalo: '-' }
  },
  'Nissan Versa 1.6': {
    motor: { tipo: '5W-30 sintético (API SN/SP)', qtd: '4,0 L a 4,3 L (com filtro)', intervalo: '10.000 km' },
    cambio: { tipo: 'CVT: Fluido Nissan NS-3 / Manual: 75W-80 ou 75W-85 GL-4', qtd: 'CVT: ~6,9 L / Manual: 2,3 L', intervalo: 'CVT: 40.000 - 60.000 km / Manual: 60.000 km' },
    diferencial: { tipo: 'Não se aplica (Tração Dianteira - integrado ao câmbio)', qtd: '-', intervalo: '-' }
  },
  'Peugeot 408 1.6 THP': {
    motor: { tipo: '5W-30 ou 0W-30 sintético (norma PSA B71 2290 / 2312)', qtd: '4,25 L (com filtro)', intervalo: '10.000 km (7.500 km severo)' },
    cambio: { tipo: 'Automático Aisin AT6 (6 marchas): Fluido ATF AW-1 / JWS 3324', qtd: '~7,0 L (total) / ~3,5 L (troca parcial)', intervalo: '60.000 km' },
    diferencial: { tipo: 'Não se aplica (Tração Dianteira - integrado ao câmbio)', qtd: '-', intervalo: '-' }
  },
  'Renault Logan - Sandero': {
    motor: { tipo: '10W-40 semissintético ou 5W-30 sintético (norma RN0700/0710)', qtd: '1.6 8V: 3,3 L / 1.6 16V (K4M/SCe): 4,2 L a 4,8 L', intervalo: '10.000 km' },
    cambio: { tipo: 'Manual: 75W-80 API GL-4+ (Elf Tranself NFJ/NFP)', qtd: '2,8 L a 3,1 L', intervalo: '60.000 km (verificação/troca)' },
    diferencial: { tipo: 'Não se aplica (Tração Dianteira - integrado ao câmbio)', qtd: '-', intervalo: '-' }
  },
  'VW Kombi 1.4': {
    motor: { tipo: '5W-40 sintético ou 10W-40 semissintético (norma VW 502.00)', qtd: '4,0 L (com filtro)', intervalo: '10.000 km (5.000 km severo)' },
    cambio: { tipo: 'Manual: 75W-90 API GL-4', qtd: '2,5 L', intervalo: '60.000 km' },
    diferencial: { tipo: 'Não se aplica (Tração Traseira com transeixo integrado ao câmbio)', qtd: '-', intervalo: '-' }
  },
  'VW Gol 1.6 G5': {
    motor: { tipo: '5W-40 sintético (norma VW 502.00 - recomendado) ou 5W-30', qtd: '3,5 L (com filtro)', intervalo: '10.000 km (5.000 km severo)' },
    cambio: { tipo: 'Manual: 75W-90 API GL-4 (norma VW G 052 512)', qtd: '1,9 L a 2,0 L', intervalo: '60.000 - 80.000 km' },
    diferencial: { tipo: 'Não se aplica (Tração Dianteira - integrado ao câmbio)', qtd: '-', intervalo: '-' }
  },
  'VW Gol 1.6 G6': {
    motor: { tipo: '5W-40 sintético (norma VW 502.00) ou 5W-30 (VW 508.88)', qtd: '3,5 L (EA111) / 4,0 L (EA211 MSI)', intervalo: '10.000 km (5.000 km severo)' },
    cambio: { tipo: 'Manual: 75W-90 API GL-4 (norma VW G 052 512)', qtd: '1,9 L a 2,0 L', intervalo: '60.000 - 80.000 km' },
    diferencial: { tipo: 'Não se aplica (Tração Dianteira - integrado ao câmbio)', qtd: '-', intervalo: '-' }
  },

  // --- VEÍCULOS UTILITÁRIOS ---
  'Agrale Marruá - AM21': {
    motor: { tipo: '15W-40 mineral/semissintético (API CI-4 / ACEA E7 - MWM Sprint / Cummins)', qtd: '5,5 L a 8,5 L (conforme motorização)', intervalo: '5.000 - 10.000 km (uso severo/militar)' },
    cambio: { tipo: 'Manual (Eaton FS-2305 / FSO-2405): SAE 50 sintético ou 75W-90 GL-4', qtd: '3,2 L (Câmbio) + 1,5 L a 2,2 L (Caixa Transf. Agrale/BorgWarner)', intervalo: '20.000 - 40.000 km' },
    diferencial: { tipo: '85W-140 ou 80W-90 API GL-5 (Eixos Dana 44 / 60 / 70)', qtd: 'Diant.: ~1,5 L / Tras.: ~2,2 L a 3,0 L', intervalo: '20.000 - 40.000 km' }
  },
  'Agrale Marruá - AM20': {
    motor: { tipo: '15W-40 mineral/semissintético (API CI-4 / ACEA E7)', qtd: '5,5 L a 8,5 L (conforme motorização)', intervalo: '5.000 - 10.000 km (uso severo)' },
    cambio: { tipo: 'Manual (Eaton FSO-2405): SAE 50 sintético ou 75W-90 GL-4', qtd: '3,2 L (Câmbio) + ~1,8 L (Caixa de Transferência)', intervalo: '20.000 - 40.000 km' },
    diferencial: { tipo: '85W-140 ou 80W-90 API GL-5', qtd: 'Diant.: ~1,5 L / Tras.: ~2,5 L', intervalo: '20.000 - 40.000 km' }
  },
  'Agrale Marruá - AM22': {
    motor: { tipo: '15W-40 mineral/semissintético (API CI-4 / ACEA E7)', qtd: '5,5 L a 8,5 L (conforme motorização)', intervalo: '5.000 - 10.000 km (uso severo)' },
    cambio: { tipo: 'Manual (Eaton FSO-2405): SAE 50 sintético ou 75W-90 GL-4', qtd: '3,2 L (Câmbio) + ~1,8 L (Caixa de Transferência)', intervalo: '20.000 - 40.000 km' },
    diferencial: { tipo: '85W-140 ou 80W-90 API GL-5', qtd: 'Diant.: ~1,5 L / Tras.: ~2,5 L', intervalo: '20.000 - 40.000 km' }
  },
  'Agrale Marruá - AM25': {
    motor: { tipo: '15W-40 mineral/semissintético (API CI-4 / ACEA E7)', qtd: '8,5 L (MWM Sprint 4.07 / Cummins ISF)', intervalo: '5.000 - 10.000 km (uso severo)' },
    cambio: { tipo: 'Manual (Eaton FSO-2405): SAE 50 sintético ou 75W-90 GL-4', qtd: '3,2 L (Câmbio) + ~1,8 L (Caixa de Transferência)', intervalo: '20.000 - 40.000 km' },
    diferencial: { tipo: '85W-140 ou 80W-90 API GL-5', qtd: 'Diant.: ~1,5 L / Tras.: ~3,0 L', intervalo: '20.000 - 40.000 km' }
  },
  'Ford F-250 e F-350': {
    motor: { tipo: '15W-40 (API CI-4/CJ-4 - MWM Sprint 6.07 / Cummins 3.9)', qtd: '8,5 L (MWM 6 cil.) / 11,0 L (Cummins)', intervalo: '10.000 km (5.000 km severo)' },
    cambio: { tipo: 'Manual (ZF S5-420 / Eaton FSO-2405): ATF Mercon ou 75W-90 GL-4 / Auto: Mercon V', qtd: 'Manual: 3,2 L a 3,4 L / Automático: ~16,6 L', intervalo: 'Manual: 60.000 km / Auto: 50.000 km' },
    diferencial: { tipo: 'Traseiro: 80W-90 ou 85W-140 API GL-5 (com aditivo LSD se blocante)', qtd: '3,3 L (Dana 60/70) / 4,0 L (Dana M80)', intervalo: '40.000 km' }
  },
  'Ford Ranger Power Stroke': {
    motor: { tipo: '15W-40 (API CH-4/CI-4 - Motor International 2.8 Power Stroke)', qtd: '7,0 L (com filtro)', intervalo: '7.500 - 10.000 km' },
    cambio: { tipo: 'Manual (Eaton FSO-2405): ATF Mercon / Caixa Transf. (4x4): ATF Mercon', qtd: 'Câmbio: 2,6 L / Caixa Transf.: 1,2 L', intervalo: '60.000 km' },
    diferencial: { tipo: 'Dianteiro: 80W-90 GL-5 / Traseiro: 80W-90 ou 85W-140 GL-5 (Trac-Lok LSD)', qtd: 'Diant.: 1,3 L / Tras.: 2,6 L a 3,4 L', intervalo: '40.000 km' }
  },
  'Ford Ranger 3.0 NGD': {
    motor: { tipo: '15W-40 (API CI-4 ou superior - MWM International 3.0)', qtd: '9,0 L (com filtro)', intervalo: '10.000 km (5.000 km severo)' },
    cambio: { tipo: 'Manual (Eaton FSO-2405): ATF Mercon / Caixa Transf. (4x4): ATF Mercon', qtd: 'Câmbio: 2,8 L / Caixa Transf.: 1,2 L', intervalo: '50.000 km' },
    diferencial: { tipo: 'Dianteiro: 80W-90 GL-5 / Traseiro: 80W-90 ou 85W-140 GL-5 (LSD)', qtd: 'Diant.: 1,4 L / Tras.: 2,6 L (Dana 44.3)', intervalo: '40.000 km' }
  },
  'Ford Ranger 2.2': {
    motor: { tipo: '5W-30 sintético (norma WSS-M2C913-C/D - Duratorq TDCi)', qtd: '8,6 L (com filtro)', intervalo: '10.000 km' },
    cambio: { tipo: 'Manual (MT82): 75W-90 GL-4 (WSS-M2C200-D2) / Auto (6R80): Mercon LV', qtd: 'Manual: 2,7 L / Auto: ~10,5 L (Transf. 4x4: 1,2 L)', intervalo: '60.000 km' },
    diferencial: { tipo: 'Dianteiro: 80W-90 GL-5 / Traseiro: 75W-90 ou 80W-90 GL-5', qtd: 'Diant.: 1,2 L / Tras.: 2,9 L', intervalo: '40.000 km' }
  },
  'Ford Transit': {
    motor: { tipo: '5W-30 sintético (norma WSS-M2C913-C/D - Duratorq 2.2 / 2.4)', qtd: '6,5 L a 9,8 L (conforme geração)', intervalo: '15.000 km (10.000 km severo)' },
    cambio: { tipo: 'Manual (MT82 / VMT6): 75W-90 sintético API GL-4 (WSS-M2C200-D2)', qtd: '2,2 L a 3,7 L', intervalo: '60.000 km' },
    diferencial: { tipo: 'Tração Traseira (modelos antigos): 75W-90 GL-5 / Dianteira (novos): integrado', qtd: 'Traseiro: ~2,2 L', intervalo: '60.000 km' }
  },
  'Mitsubishi L200 2.5': {
    motor: { tipo: '15W-40 (API CI-4 - 4D56 HPE / Outdoor)', qtd: '6,5 L (com filtro)', intervalo: '7.500 - 10.000 km' },
    cambio: { tipo: 'Manual: 75W-85 ou 75W-90 API GL-4 (Transf.: 75W-90 GL-4)', qtd: 'Câmbio: 2,3 L / Caixa Transf.: 2,2 L', intervalo: '40.000 km' },
    diferencial: { tipo: 'Dianteiro: 80W-90 GL-5 / Traseiro: 80W-90 ou 75W-90 GL-5 LSD', qtd: 'Diant.: 1,2 L / Tras.: 2,1 L a 2,6 L', intervalo: '40.000 km' }
  },
  'Mitsubishi Triton 3.2': {
    motor: { tipo: '15W-40 ou 5W-30 (API CI-4/CJ-4 - 4M41)', qtd: '7,5 L a 8,2 L (com filtro)', intervalo: '10.000 km' },
    cambio: { tipo: 'Automático: ATF SP-III / Manual: 75W-85 GL-4 (Transf.: 75W-90 GL-4)', qtd: 'Auto: ~8,5 L / Manual: 2,5 L / Transf.: 2,3 L', intervalo: '60.000 km' },
    diferencial: { tipo: 'Dianteiro: 80W-90 GL-5 / Traseiro: 80W-90 ou 75W-90 GL-5 LSD', qtd: 'Diant.: 1,2 L / Tras.: 2,3 L a 2,6 L', intervalo: '40.000 km' }
  },
  'Mitsubishi Triton 2.4': {
    motor: { tipo: '5W-30 sintético (ACEA C2/C3 - MIVEC 4N15 com DPF)', qtd: '8,4 L (com filtro)', intervalo: '10.000 km' },
    cambio: { tipo: 'Automático: ATF SP-III ou DiaQueen ATF-MA1 / Manual: 75W-80 GL-4', qtd: 'Auto: ~8,0 L / Manual: 2,5 L / Transf.: 2,5 L', intervalo: '60.000 km' },
    diferencial: { tipo: 'Dianteiro: 80W-90 GL-5 / Traseiro: 80W-90 ou 75W-90 GL-5 LSD', qtd: 'Diant.: 1,2 L / Tras.: 2,3 L', intervalo: '40.000 km' }
  },
  'Nissan Frontier 2.5': {
    motor: { tipo: '15W-40 (sem DPF) ou 5W-30 ACEA C3 (com DPF - Motor YD25)', qtd: '6,9 L (com filtro)', intervalo: '10.000 km' },
    cambio: { tipo: 'Manual: 75W-85 GL-4 / Automático: Nissan Matic S (Transf.: Matic D)', qtd: 'Manual: ~3,8 L / Auto: ~9,5 L / Transf.: 2,0 L', intervalo: '40.000 - 60.000 km' },
    diferencial: { tipo: 'Dianteiro (4x4): 80W-90 GL-5 / Traseiro: 80W-90 GL-5 (LSD se aplicável)', qtd: 'Diant.: 0,85 L / Tras.: 1,6 L (C200) a 2,0 L (M226)', intervalo: '40.000 km' }
  },
  'Nissan Frontier 2.3': {
    motor: { tipo: '5W-30 sintético (ACEA C3/C4 - Bi-Turbo YS23 com DPF)', qtd: '6,9 L a 7,3 L (com filtro)', intervalo: '10.000 km' },
    cambio: { tipo: 'Manual: 75W-80 GL-4 / Automático (7M): Nissan Matic S (Transf.: Matic D)', qtd: 'Manual: ~3,5 L / Auto: ~9,2 L / Transf.: 1,5 L', intervalo: '40.000 - 60.000 km' },
    diferencial: { tipo: 'Dianteiro (4x4): 80W-90 GL-5 / Traseiro: 75W-90 ou 80W-90 GL-5', qtd: 'Diant.: 0,85 L / Tras.: 1,6 L a 2,1 L', intervalo: '40.000 km' }
  },
  'Toyota Hilux 3.0': {
    motor: { tipo: '15W-40 ou 5W-30 (API CI-4/CJ-4 - 1KD-FTV)', qtd: '6,9 L (com filtro) / 7,4 L (seco)', intervalo: '10.000 km (5.000 km severo)' },
    cambio: { tipo: 'Manual: 75W-90 GL-4 / Automático: ATF WS (Transf.: 75W-90 GL-4)', qtd: 'Manual: 2,2 L / Auto: ~10,0 L / Transf.: 1,0 L', intervalo: '60.000 km' },
    diferencial: { tipo: 'Dianteiro: 75W-90 GL-5 / Traseiro: 75W-90 ou 80W-90 GL-5 LSD', qtd: 'Diant.: 1,5 L / Tras.: 2,4 L a 3,4 L', intervalo: '40.000 km' }
  },
  'Toyota Hilux 2.8 - Nova': {
    motor: { tipo: '5W-30 sintético (ACEA C2/C3 - 1GD-FTV com DPF)', qtd: '7,5 L (com filtro) / 8,0 L (seco)', intervalo: '10.000 km (5.000 km severo)' },
    cambio: { tipo: 'Automático (6M): ATF WS / Manual: 75W-90 GL-4 (Transf.: 75W-90 GL-4)', qtd: 'Auto: 9,3 L / Manual: 2,4 L / Transf.: 1,0 L', intervalo: '60.000 km' },
    diferencial: { tipo: 'Dianteiro: 75W-85 ou 75W-90 GL-5 / Traseiro: 75W-85 ou 75W-90 GL-5 LSD', qtd: 'Diant.: 1,4 L / Tras.: 3,0 L', intervalo: '30.000 - 40.000 km' }
  },

  // --- CAMINHÕES ---
  'Ford Cargo 816': {
    motor: { tipo: '15W-40 (API CI-4/CK-4 - Cummins ISB 4.5)', qtd: '13,0 L (com filtro)', intervalo: '30.000 - 40.000 km (ou 15.000 km severo)' },
    cambio: { tipo: 'Manual (Eaton FSO-4505): SAE 40 ou 50 sintético (Eaton PS-386) / 80W-90 GL-4', qtd: '4,5 L', intervalo: '100.000 km' },
    diferencial: { tipo: 'Traseiro: 85W-140 API GL-5', qtd: '7,5 L a 9,0 L', intervalo: '40.000 a 60.000 km' }
  },
  'Ford Cargo 2423': {
    motor: { tipo: '15W-40 (API CI-4/CK-4 - Cummins ISB 6.7)', qtd: '19,5 L (com filtro)', intervalo: '40.000 km (ou 20.000 km severo)' },
    cambio: { tipo: 'Manual (Eaton FS-6406 / RT-8908LL): SAE 50 sintético (Eaton PS-386)', qtd: '9,0 L a 13,0 L (conforme caixa)', intervalo: '100.000 km' },
    diferencial: { tipo: 'Traseiro (Meritor MS-23-245): 85W-140 API GL-5', qtd: '15,0 L a 18,0 L', intervalo: '40.000 a 60.000 km' }
  },
  'Ford - 2629 Bau': {
    motor: { tipo: '15W-40 (API CI-4/CK-4 - Cummins ISB 6.7)', qtd: '19,5 L (com filtro)', intervalo: '40.000 km (ou 20.000 km severo)' },
    cambio: { tipo: 'Manual (Eaton RT-8908LL / FS-6406): SAE 50 sintético (Eaton PS-386)', qtd: '11,0 L a 13,0 L', intervalo: '100.000 km' },
    diferencial: { tipo: 'Traseiro (Tração 6x4 - 2 eixos): 85W-140 API GL-5', qtd: '1º Eixo: ~16,0 L / 2º Eixo: ~14,0 L', intervalo: '40.000 a 60.000 km' }
  },
  'Ford - 2629 CTA e CTC': {
    motor: { tipo: '15W-40 (API CI-4/CK-4 - Cummins ISB 6.7)', qtd: '19,5 L (com filtro)', intervalo: '40.000 km (ou 20.000 km severo)' },
    cambio: { tipo: 'Manual (Eaton RT-8908LL): SAE 50 sintético (Eaton PS-386)', qtd: '13,0 L', intervalo: '100.000 km' },
    diferencial: { tipo: 'Traseiro (Tração 6x4 - 2 eixos): 85W-140 API GL-5', qtd: '1º Eixo: ~16,0 L / 2º Eixo: ~14,0 L', intervalo: '40.000 a 60.000 km' }
  },
  'Ford 1933 Cav Mec': {
    motor: { tipo: '15W-40 (API CI-4/CK-4 - Cummins ISL 8.9)', qtd: '24,0 L a 26,0 L (com filtro)', intervalo: '40.000 km (ou 20.000 km severo)' },
    cambio: { tipo: 'Manual (Eaton FTS-16108LL) / Automatizado (Torqshift): SAE 50 sintético', qtd: '13,0 L', intervalo: '100.000 km' },
    diferencial: { tipo: 'Traseiro (Meritor MS-23-185): 85W-140 API GL-5', qtd: '18,0 L a 21,0 L', intervalo: '40.000 a 60.000 km' }
  },
  'Mercedes-Benz 2627': {
    motor: { tipo: '15W-40 (Norma MB 228.3 / 228.5 - OM-447 / OM-457)', qtd: '24,0 L a 28,0 L (com filtro)', intervalo: '30.000 - 40.000 km' },
    cambio: { tipo: 'Manual (ZF / MB G-131): 80W ou 75W-80 API GL-4 (Norma MB 235.1 / 235.4)', qtd: '9,0 L a 13,0 L', intervalo: '100.000 km' },
    diferencial: { tipo: 'Traseiro (6x4 com redução nos cubos): 85W-140 API GL-5 (Norma MB 235.0)', qtd: '1º Eixo: ~14,0 L / 2º Eixo: ~12,0 L (+ cubos)', intervalo: '40.000 a 60.000 km' }
  },
  'Mercedes-Benz 915c': {
    motor: { tipo: '15W-40 (Norma MB 228.3 - OM-904 LA)', qtd: '15,8 L (com filtro)', intervalo: '30.000 - 40.000 km' },
    cambio: { tipo: 'Manual (ZF S5-420 / MB G-60): 80W API GL-4 (Norma MB 235.1)', qtd: '3,4 L (ZF) a 9,0 L (MB)', intervalo: '100.000 km' },
    diferencial: { tipo: 'Traseiro: 85W-140 API GL-5 (Norma MB 235.0)', qtd: '5,6 L a 8,5 L', intervalo: '40.000 a 60.000 km' }
  },
  'Mercedes-Benz 1418E': {
    motor: { tipo: '15W-40 (Norma MB 228.3 - OM-366 / OM-904 LA)', qtd: '15,5 L a 16,5 L (com filtro)', intervalo: '20.000 - 30.000 km' },
    cambio: { tipo: 'Manual (MB G-60 / G-85): 80W API GL-4 (Norma MB 235.1)', qtd: '9,0 L', intervalo: '100.000 km' },
    diferencial: { tipo: 'Traseiro: 85W-140 API GL-5 (Norma MB 235.0)', qtd: '10,0 L a 12,0 L', intervalo: '40.000 a 60.000 km' }
  },
  'Mercedes-Benz AXOR 3344': {
    motor: { tipo: '15W-40 (Norma MB 228.3 / 228.5 - OM-457 LA)', qtd: '38,0 L (com filtro)', intervalo: '40.000 km (20.000 km severo fora-de-estrada)' },
    cambio: { tipo: 'Manual/Automatizado (MB G-240 / G-330): 75W-80 sintético (Norma MB 235.4 / 235.11)', qtd: '13,0 L a 15,0 L', intervalo: '100.000 km (ou 2 anos)' },
    diferencial: { tipo: 'Traseiro (6x4 com redução nos cubos): 85W-140 API GL-5 (Norma MB 235.0)', qtd: '1º Eixo: 14,5 L / 2º Eixo: 12,5 L (+ 3,2 L por cubo)', intervalo: '40.000 - 60.000 km (uso severo)' }
  },
  'Mercedes-Benz Atego 1725': {
    motor: { tipo: '15W-40 (Norma MB 228.3 - OM-906 LA)', qtd: '26,5 L (com filtro)', intervalo: '40.000 km' },
    cambio: { tipo: 'Manual (MB G-85): 80W API GL-4 (Norma MB 235.1)', qtd: '9,0 L', intervalo: '100.000 km' },
    diferencial: { tipo: 'Traseiro: 85W-140 API GL-5 (Norma MB 235.0)', qtd: '11,0 L a 12,0 L', intervalo: '40.000 a 60.000 km' }
  },
  'VW Work 815': {
    motor: { tipo: '15W-40 (API CI-4 - MWM 4.10 TCA / Cummins Interact 4.0)', qtd: '11,0 L a 13,0 L (com filtro)', intervalo: '20.000 - 30.000 km' },
    cambio: { tipo: 'Manual (Eaton FS-4205A): SAE 40 ou 80W API GL-4', qtd: '4,5 L', intervalo: '80.000 - 100.000 km' },
    diferencial: { tipo: 'Traseiro: 85W-140 API GL-5', qtd: '6,5 L a 8,0 L', intervalo: '40.000 - 60.000 km' }
  },
  'VW Work 5-Ton 15-180': {
    motor: { tipo: '15W-40 (API CI-4 - MWM 6.10 TCA)', qtd: '16,5 L (com filtro)', intervalo: '30.000 - 40.000 km' },
    cambio: { tipo: 'Manual (Eaton FS-4205A / FS-5306A): SAE 40 ou 50 sintético / 80W GL-4', qtd: '4,5 L a 7,2 L', intervalo: '100.000 km' },
    diferencial: { tipo: 'Traseiro (Meritor MS-23-145 / 23-240): 85W-140 API GL-5', qtd: '15,0 L', intervalo: '60.000 km (severo) ou 100.000 km' }
  },
  'VW Work 7-Ton Comercial': {
    motor: { tipo: '15W-40 (API CI-4 - Cummins / MWM)', qtd: '16,5 L (com filtro)', intervalo: '30.000 - 40.000 km' },
    cambio: { tipo: 'Manual (Eaton FS-5306A / FS-6306A): SAE 50 sintético ou 80W GL-4', qtd: '7,2 L a 9,0 L', intervalo: '100.000 km' },
    diferencial: { tipo: 'Traseiro (Meritor MS-23-145): 85W-140 API GL-5', qtd: '15,0 L', intervalo: '60.000 km (severo) ou 100.000 km' }
  },
  'VW Work 24-220': {
    motor: { tipo: '15W-40 (API CI-4 - Cummins 6CTAA 8.3)', qtd: '20,0 L (com filtro)', intervalo: '30.000 - 40.000 km' },
    cambio: { tipo: 'Manual (Eaton FS-6306A / RT-8908LL): SAE 50 sintético (Eaton PS-386)', qtd: '9,0 L a 13,0 L', intervalo: '100.000 km' },
    diferencial: { tipo: 'Traseiro (Meritor MS-23-245): 85W-140 API GL-5', qtd: '15,0 L a 18,0 L', intervalo: '60.000 km (severo) ou 100.000 km' }
  },
  'VW Work 26-220': {
    motor: { tipo: '15W-40 (API CI-4 - Cummins 6CTAA 8.3)', qtd: '20,0 L (com filtro)', intervalo: '30.000 - 40.000 km' },
    cambio: { tipo: 'Manual (Eaton RT-8908LL): SAE 50 sintético (Eaton PS-386)', qtd: '13,0 L', intervalo: '100.000 km' },
    diferencial: { tipo: 'Traseiro (Tração 6x4 - Meritor MT-46-145): 85W-140 API GL-5', qtd: '1º Eixo: ~16,0 L / 2º Eixo: ~14,0 L', intervalo: '60.000 km (severo) ou 100.000 km' }
  },
  'VW Work 26-260E': {
    motor: { tipo: '15W-40 (API CI-4 - MWM 6.12 TCE)', qtd: '21,0 L (com filtro)', intervalo: '30.000 - 40.000 km' },
    cambio: { tipo: 'Manual (Eaton RT-8908LL): SAE 50 sintético (Eaton PS-386)', qtd: '13,0 L', intervalo: '100.000 km' },
    diferencial: { tipo: 'Traseiro (Tração 6x4 - Meritor MD/MR): 85W-140 API GL-5', qtd: '1º Eixo: ~16,0 L / 2º Eixo: ~14,0 L', intervalo: '60.000 km (severo) ou 100.000 km' }
  },
  'VW Constellation 24-250': {
    motor: { tipo: '15W-40 (API CI-4 - Cummins ISBe 5.9)', qtd: '19,0 L (com filtro)', intervalo: '40.000 km (20.000 km severo)' },
    cambio: { tipo: 'Manual (Eaton FS-6306B): SAE 50 sintético (Eaton PS-386)', qtd: '9,0 L', intervalo: '100.000 km' },
    diferencial: { tipo: 'Traseiro (Meritor MS-23-245): 85W-140 API GL-5', qtd: '15,0 L a 18,0 L', intervalo: '60.000 km (severo) ou 100.000 km' }
  },
  'VW Constellation 26-280': {
    motor: { tipo: '15W-40 (API CI-4/CJ-4 - MAN D08 36 6 cil.)', qtd: '20,5 L (com filtro)', intervalo: '40.000 km (20.000 km severo)' },
    cambio: { tipo: 'Manual (ZF 16S 1455 TD): 75W-80 ou 80W API GL-4 (ZF TE-ML 02)', qtd: '11,0 L', intervalo: '100.000 km' },
    diferencial: { tipo: 'Traseiro (Tração 6x4 - Meritor MT-46-145): 85W-140 API GL-5', qtd: '1º Eixo: ~16,0 L / 2º Eixo: ~14,0 L', intervalo: '60.000 km (severo) ou 100.000 km' }
  },
  'VW Constellation 31-320': {
    motor: { tipo: '15W-40 (API CI-4 - Cummins ISC 8.3)', qtd: '23,5 L (com filtro)', intervalo: '40.000 km (20.000 km severo)' },
    cambio: { tipo: 'Manual (ZF 16S 1585 TD): 75W-80 ou 80W API GL-4 (ZF TE-ML 02)', qtd: '11,0 L a 13,0 L', intervalo: '100.000 km' },
    diferencial: { tipo: 'Traseiro (Tração 6x4 - Meritor MT-50-168): 85W-140 API GL-5', qtd: '1º Eixo: ~18,0 L / 2º Eixo: ~15,0 L', intervalo: '60.000 km (severo) ou 100.000 km' }
  },

  // --- ÔNIBUS E VANS ---
  'Fiat Ducato 2.3 Multijet': {
    motor: { tipo: '5W-30 sintético (ACEA B4 / C2 - FPT F1A)', qtd: '6,0 L a 6,5 L (com filtro)', intervalo: '15.000 km (7.500 km severo)' },
    cambio: { tipo: 'Manual (5 ou 6 marchas): 75W-80 API GL-4', qtd: '2,0 L a 2,7 L', intervalo: '60.000 km' },
    diferencial: { tipo: 'Não se aplica (Tração Dianteira - integrado ao câmbio)', qtd: '-', intervalo: '-' }
  },
  'Fiat Ducato 2.8': {
    motor: { tipo: '15W-40 semissintético ou 5W-40 sintético (API CI-4 / ACEA B4 - Sofim 8140)', qtd: '6,0 L (com filtro)', intervalo: '10.000 - 15.000 km' },
    cambio: { tipo: 'Manual (5 marchas): 75W-80 API GL-4', qtd: '2,0 L a 2,7 L', intervalo: '60.000 km' },
    diferencial: { tipo: 'Não se aplica (Tração Dianteira - integrado ao câmbio)', qtd: '-', intervalo: '-' }
  },
  'Iveco - Daily 35S14': {
    motor: { tipo: '5W-30 sintético (ACEA C2/C3 - FPT F1C 3.0)', qtd: '6,6 L a 7,6 L (com filtro)', intervalo: '20.000 km (10.000 km severo)' },
    cambio: { tipo: 'Manual (ZF 6S 400 / Eaton FSO): 75W-80 API GL-4', qtd: '2,0 L a 2,2 L', intervalo: '60.000 km' },
    diferencial: { tipo: 'Traseiro: 80W-90 ou 85W-140 API GL-5', qtd: '1,35 L a 1,8 L', intervalo: '40.000 km' }
  }
}; // fim de especificacoesOleos
