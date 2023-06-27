import http from 'http';
import app from './app/app.js';

const PORT = process.env.PORT || 3000;
const server = http.createServer(app);

server.listen(PORT,(err)=>
{
    if(err)
    {
        return err;
    }

    console.log(`Server is up and running on port ${PORT}`);
});