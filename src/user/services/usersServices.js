const Users = require("../models/Users");
const userRepository = require("../repository/usersRepository");

async function getById(id){
  try{
    const [user] = await userRepository.getById(id);
    return new Users(user.id, user.firstname, user.lastname, user.picture_profil, user.work, user.email, user.password);
  }catch (e) {
    throw e;
  }
}

async function updateById(id){

}

async function register(id){

}

async function login(id){

}


module.exports = {
  getById,
  updateById,
  register,
  login
}
