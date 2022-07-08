const likesService = require("../services/likesServices");

const insert = async (req, res, next) => {
    const body = req.body;
    try{
        let message = '';
        const like = await likesService.insert(body.like);
        like === 0 ? message = 'like enregistré' : message = 'like non sauvegardé';
        res.status(200).send({message});
    }catch (e) {
        next(e);
    }
}

const deleteLike = async (req, res, next) => {
    const like = req.body;
    try{
       const result =  await likesService.deleteLike(like.like);
       if(!result){
       }
        res.status(200).send({message: "le like a bien été supprimé"});
    }catch (e) {
        next(e);
    }
}

module.exports = {
    insert,
    deleteLike
}
