const userService = require("../services/usersServices");

const getById = async (req, res, next) => {
  const id = req.params.id;
  try{
    const user = await userService.getById(id);
    res.status(200).send(user);
  }catch (e) {
    next(e);
  }
}

const updateById = async (req, res, next) => {

}

const register = async (req, res, next) => {

}

const login = async (req, res, next) => {

}

module.exports = {
  getById,
  updateById,
  register,
  login
}
