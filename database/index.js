const mongoose = require('mongoose');

mongoose.connect('mongodb://john:john@127.0.0.1:27017/twitter_dwwm', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connexion a la db etablie");
}).catch(err => {
    console.log(err);
})