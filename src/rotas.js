import listaCarrosController from './controller/listaCarrosController.js';

export default function adicionarRotas(servidor) {
    servidor.use(listaCarrosController);
}