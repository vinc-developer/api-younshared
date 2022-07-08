const db = require("../config/database/database");

const SELECT_ALL_POSTS = `SELECT * FROM posts ORDER BY date_created DESC LIMIT 5`;
const SELECT_ALL_BY_USER = `SELECT * FROM posts  WHERE id_user = ? ORDER BY date_created DESC LIMIT 5`;
const SELECT_BY_ID = `SELECT * FROM posts WHERE id = ?`;
const INSERT = `INSERT INTO posts (text, picture_posts, date_created, id_user) VALUE (?,?,?,?)`;
const DELETE_BY_ID = `DELETE FROM posts WHERE id = ?`;

async function getById(id) {
  const co = await db.getConnection();
  try{
    const [posts] = await co.execute(SELECT_BY_ID, [id]);
    return posts;
  }catch (e) {
    throw new Error("Internal Error: server doesn't work");
  }
}

async function getAllHome(){
  const co = await db.getConnection();
  try{
    const [posts] = await co.execute(SELECT_ALL_POSTS);
    return posts;
  }catch (e) {
    throw new Error("Internal Error: server doesn't work");
  }finally {
    if (co !== null) {
      co.end();
    }
  }
}

async function getAllByUser(id){
  const co = await db.getConnection();
  try{
    const [posts] = await co.execute(SELECT_ALL_BY_USER, [id]);
    return posts;
  }catch (e) {
    throw new Error("Internal Error: server doesn't work");
  }finally {
    if (co !== null) {
      co.end();
    }
  }
}


async function insert(body){
  const co = await db.getConnection();
  const date = new Date();
  try{
    const result = await co.execute(INSERT, [body.text, body.picturePost, date, body.user.id]);
    return result[0].insertId;
  }catch (e) {
    throw new Error("Internal Error: server doesn't work");
  }
}

async function updateById(posts){

}

async function deleteById(id){
  const co = await db.getConnection();
  try{
    await co.execute(DELETE_BY_ID, [id]);
  }catch (e) {
    throw new Error("Internal Error: server doesn't work");
  }
}

module.exports = {
  getAllHome,
  getAllByUser,
  getById,
  insert,
  updateById,
  deleteById
}
