class UserService {
  constructor(repo) {
    this.repo = repo
  }

  createUser = (user) => {
    return this.repo.create(user)
  }
}

export default UserService