const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const axios = require('axios');

const { Article, Removed } = require('./src/db.js');

const HOUR = 3600 * 1000;

const insert = async() => {
    try{
        const { data } = await axios.get(`http://hn.algolia.com/api/v1/search_by_date?query=nodejs`);
        for(let i = 0; i < data.hits.length; i++) {
            const {
                created_at, 
                author, 
                story_title, 
                story_url,
                title,
                url,
                objectID 
            } = data.hits[i];

            const response = await Removed.findByPk(objectID);

            if(!response) {
                await Article.findOrCreate({ 
                    where: { 
                        _id: objectID, 
                        author,
                        created_at, 
                        title: story_title ? story_title : title ? title : 'Untitled', 
                        url: story_url ? story_url : url ? url : 'https://www.google.com/'
                    } 
                });
            }

        }
    } catch (err) {
        console.log(err)
    }
};
conn.sync(true);
server.listen(process.env.PORT, () => {
    insert();
    setInterval(insert, HOUR);
    console.log('listening at = ', process.env.PORT); // eslint-disable-line no-console
});
