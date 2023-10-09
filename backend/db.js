const mongoose= require('mongoose')

const url = "mongodb+srv://amrutapede:7meA6RqZAi0bigTc@cluster0.gtelvph.mongodb.net/quora-clone-mern?retryWrites=true&w=majority";

module.exports.connect = () => {
    mongoose
      .connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("MongoDB connected successfully");
      })
      .catch((error) => console.log("Error: ", error));
  };