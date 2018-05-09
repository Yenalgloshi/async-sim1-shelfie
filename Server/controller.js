let stuff = [];
let id = 0;

module.exports = {
    readBin: (req, res) => {
        const dbInstance = req.app.get('db');
        dbInstance.read_bin(req.params.shelf, req.params.bin)
            .then(bin => res.status(200).send(bin));
    },
    
    createBin: (req, res) => {
        const dbInstance = req.app.get('db');
        dbInstance.create_bin(req.params.shelf, 
                              req.params.bin, 
                              req.body.name, 
                              req.body.price, 
                              req.body.image)
            .then(bin => res.status(200).send(bin));
    },
    
    updateBin: (req, res) => {
        const dbInstance = req.app.get('db');
    },
    
    deleteBin: (req, res) => {
        const dbInstance = req.app.get('db');
    }
  }