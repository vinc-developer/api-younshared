const postsService = require("../services/postsServices");

const getAllHome = async (req, res, next) => {
  try{
    const listPosts = await postsService.getAllHome();
    res.status(200).send(listPosts);
  }catch (e) {
    next(e);
  }
}

const getAllByUser = async (req, res, next) => {
  const id = req.params.id;
  try{
    const listPosts = await postsService.getAllByUser(id);
    res.status(200).send(listPosts);
  }catch (e) {
    next(e);
  }
}

const insert = async (req, res, next) => {
  const body = req.body;
  try {
   const post = await postsService.insert(body.post)
    res.status(200).send(post);
  }catch (e) {
    next(e);
  }
}

const updateById = async (req, res, next) => {

}

const deleteById = async (req, res, next) => {
  const id = req.params.id;
  try{
    await postsService.deleteById(id);
    res.status(200).send({message: "le post a bien été supprimé"});
  }catch (e) {
    next(e);
  }
}

module.exports = {
  getAllHome,
  getAllByUser,
  insert,
  updateById,
  deleteById
}
