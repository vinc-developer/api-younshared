module.exports = class Posts {

  constructor(id, user, text, picturePost, date, comments, likes) {
    this.id = id;
    this.user = user;
    this.text = text;
    this.picturePost = picturePost;
    this.date = date;
    this.comments = comments;
    this.likes = likes;
  }
}
