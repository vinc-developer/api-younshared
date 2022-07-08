module.exports = class Users {

  constructor(id, firstname, lastname, pictureProfil, work, email, password) {
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.pictureProfil = pictureProfil;
    this.work = work;
    this.email = email;
    this.password = password;
  }
}
