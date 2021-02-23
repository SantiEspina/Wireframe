const server = require('./src/app.js');
const { conn } = require('./src/db.js');

const force = true;
conn.sync({ force }).then(() => {
    server.listen(process.env.PORT, () => {
        console.log('listening at = ', process.env.PORT); // eslint-disable-line no-console
    });
});