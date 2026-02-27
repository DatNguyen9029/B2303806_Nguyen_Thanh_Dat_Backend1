const app = require('./app');
const config = require('./app/config');

//Start server
const PORT = config.app.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});