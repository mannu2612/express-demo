import User from '../User.js';

class UserRepository {

  constructor(model) {
    this.model = model;
  }

  create(object) {
    return this.model.create(object);
  }
}

export default new UserRepository(User);