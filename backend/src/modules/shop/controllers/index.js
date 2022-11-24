import { UserRepository } from '../../user/repositories/UserRepository.js'
import { ListShopNameService } from '../services/ListShopNameService.js'
import { ListShopNameController } from './ListShopNameController.js'

const userRepository = new UserRepository();

const listShopNameService = new ListShopNameService(userRepository);
export function listShopNameController(){
    return new ListShopNameController(listShopNameService);
}
