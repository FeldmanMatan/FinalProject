console.log('i am here1')
const userRoutes = (app, fs) => {
    // variables
    console.log('i am here')
    const dataPath = '/test/file';
  
    // READ
    app.get('/user', (req, res) => {
      fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
          throw err;
        }
  
        res.send(JSON.parse(data));
      });
    });
  };
  
  module.exports = userRoutes;