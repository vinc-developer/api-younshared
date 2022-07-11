require("dotenv").config();
const express = require("express");

const app = express();
app.use(express.json());
const port = process.env.port || 5000;

const server = require("http").createServer(app);

//app.use(express.json());
// middleware pour toutes les requêtes
app.use((req, res, next) =>{
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Headers', '*')
  next();
});

// routes principales qui appellent le fichier route qui correspond
app.use('/posts', require("./src/posts/routes/postsRoutes"));
app.use('/users', require("./src/user/routes/usersRoutes"));
app.use('/likes', require("./src/posts/routes/likesRoutes"));
app.use('/comments', require("./src/posts/routes/commentsRoutes"));
//error handler middleware
//gestion des erreurs
app.use((err, req, res,next) => {
  res.status(500).send({Erreur: err.message});
})
// mauvaise route
app.use((req, res) => {
  console.error("The resource is not found")
  res.status(404).send({Error : "Not found error"});
})

try{
  server.listen(port, () => {
    console.info("Server listening on port : " + port);
  });
} catch(e) {
  console.error("Server error on port : " + port);
}
