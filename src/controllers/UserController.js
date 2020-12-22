import UserRepository from '../models/repository/UserRepository.js';
import UserService from '../service/UserService.js'

const userService = new UserService(UserRepository)
class UserController {
  constructor(service) {
    this.service = service
  }

  createUser = async (req, res) => {
    try{
      const newUser = await this.service.createUser(req.body)  
      res.json(newUser);
    } catch(e) {
      console.log(e)
      res.status(500).json({
        e,
      });
    }
  }
}

let userController = new UserController( userService );
export default userController;