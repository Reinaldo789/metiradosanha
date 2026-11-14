import { veiculosPasseio } from './passeio.js';
import { veiculosUtilitarios } from './utilitarios.js';
import { veiculosCaminhoes } from './caminhoes.js';
import { veiculosVans } from './vans.js';

export const bancoDeDadosGlobal = {
  ...veiculosPasseio,
  ...veiculosUtilitarios,
  ...veiculosCaminhoes,
  ...veiculosVans
};
