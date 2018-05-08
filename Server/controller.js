let stuff = [];
let id = 0;

module.exports = {
    readBin: (req, res) => {
        const dbInstance = req.app.get('db');
        dbInstance.read_bin(req.params.shelf, req.params.bin)
            .then(bin => res.status(200).send(bin));
    },
    
    createBin: (req, res) => {
        
    },
    
    updateBin: (req, res) => {
  
    },
    
    deleteBin: (req, res) => {

    }
  }