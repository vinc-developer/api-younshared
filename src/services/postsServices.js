const postsRepository = require('../repository/postsRepository');
const commentsService = require('../services/commentsServices');
const likesService = require('../services/likesServices');
const usersService = require('../services/usersServices');
const Posts = require("../models/Posts");

async function getAllHome(){
  try{
    let listPosts = [];
    const posts = await postsRepository.getAllHome();
    for (const el of posts) {
      const comments = await commentsService.getByIdPost(el.id);
      const likes = await likesService.getByIdPost(el.id);
      const user = await usersService.getById(el.id_user);
      listPosts.push(new Posts(el.id, user, el.text, el.picture_posts, el.date_created, comments, likes));
    }
    return listPosts;
  }catch (e) {
    throw e;
  }
}

async function getAllByUser(id){
  try{
    let listPosts = [];
    const posts = await postsRepository.getAllByUser(id);
    for (const el of posts) {
      const comments = await commentsService.getByIdPost(el.id);
      const likes = await likesService.getByIdPost(el.id);
      const user = await usersService.getById(el.id_user);
      listPosts.push(new Posts(el.id, user, el.text, el.picture_posts, el.date_created, comments, likes));
    }
    return listPosts;
  }catch (e) {
    throw e;
  }
}

async function getById(id){
  try {
    const [post] = await postsRepository.getById(id);
    const comments = await commentsService.getByIdPost(post.id);
    const likes = await likesService.getByIdPost(post.id);
    const user = await usersService.getById(post.id_user);
    return new Posts(post.id, user, post.text, post.picture_posts, post.date_created, comments, likes);
  }catch (e) {
    throw e;
  }
}

async function insert(body){
  try {
    const id = await postsRepository.insert(body);
    return  await getById(id);
  }catch (e) {
    throw e;
  }
}

async function updateById(posts){

}

async function deleteById(id){
  try{
    const post = await getById(id);
    for (const el of post.comments) {
      await commentsService.deleteById(el.id);
    }
    for (const el of post.likes) {
      await likesService.deleteById(el.idPost);
    }
    await postsRepository.deleteById(id);
  }catch (e) {
    throw e;
  }
}

module.exports = {
  getAllHome,
  getAllByUser,
  insert,
  updateById,
  deleteById,
  getById
}
