import { VesteRepository } from '../repositories/VesteRepository.js';

import { ListVestesService } from '../services/ListVestesService.js';
import { ListVestesController } from './ListVestesController.js';

import { CreateVesteService } from '../services/CreateVesteService.js'
import { CreateVesteController } from './CreateVesteController.js';

import { FindOneVesteService } from '../services/FindOneVesteService.js';
import { FindOneVesteController } from './FindOneVesteController.js';

import { UpdateVesteService } from '../services/UpdateVesteService.js';
import { UpdateVesteController } from './UpdateVesteController.js';

import { DeleteVesteService } from '../services/DeleteVesteService.js';
import { DeleteVesteController } from './DeleteVesteController.js';

import {ListVestesByShopNameService} from '../services/ListVestesByShopNameService.js';
import {ListVestesByShopNameController} from './ListVestesByShopNameController.js'

const vesteRepository = new VesteRepository();

const createVesteService = new CreateVesteService(vesteRepository);
export function createVesteController() {
    return new CreateVesteController(createVesteService);
}

const listVestesService = new ListVestesService(vesteRepository);
export function listVestesController() {
    return new ListVestesController(listVestesService);
}

const findOneVesteService = new FindOneVesteService(vesteRepository);
export function findOneVesteController() {
    return new FindOneVesteController(findOneVesteService);
}

const listVestesByShopName = new ListVestesByShopNameService(vesteRepository);
export function listVestesByShopNameController() {
    return new ListVestesByShopNameController(listVestesByShopName);
}

const updateVesteService = new UpdateVesteService(vesteRepository);
export function updateVesteController() {
    return new UpdateVesteController(updateVesteService);
}

const deleteVesteService = new DeleteVesteService(vesteRepository);
export function deleteVesteController() {
    return new DeleteVesteController(deleteVesteService);
}