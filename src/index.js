const express = require('express');
const mongoose = require('mongoose');
const swaggerUI = require('swagger-ui-express');
const swaggerDocs = require('./swagger.json');
const routes = require('./routes');
const app = express();
const cors = require('cors');

// Link para conexão com o DB Mongo
mongoose.connect('mongodb+srv://admin:qiCkeHCYrRhTNOzQ@cluster0.8yjk4.mongodb.net/BancoCurriculos?retryWrites=true&w=majority', {
    useNewUrlParser: true

});
app.use(cors());
app.use(express.json());
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.use(routes);
app.listen(process.env.PORT || '5000', () => {
    console.log('Rodando na porta 5000');
});