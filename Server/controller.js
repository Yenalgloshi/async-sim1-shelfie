let stuff = [];
let id = 0;

module.exports = {
    getBins: (req, res) => {
        const dbInstance = req.app.get('db');
        dbInstance.get_bins(req.params.shelf)
            .then(bin => res.status(200).send(bin))
            .catch( () => res.status(500).send() );
    },

    readBin: (req, res) => {
        const dbInstance = req.app.get('db');
        dbInstance.read_bin(req.params.shelf, req.params.bin)
            .then(bin => res.status(200).send(bin))
            .catch( () => res.status(500).send() );
    },
    
    createBin: (req, res) => {
        const dbInstance = req.app.get('db');
        let price = req.body.price.toFixed(2);
        dbInstance.create_bin(req.params.shelf, 
                              req.params.bin, 
                              req.body.name, 
                              price, 
                              req.body.image)
            .then(bin => res.status(200).send(bin))
            .catch( () => res.status(500).send() );
    },
    
    updateBin: (req, res) => {
        const dbInstance = req.app.get('db');
        let price = req.body.price.toFixed(2);
        dbInstance.update_bin(req.params.shelf, 
                              req.params.bin, 
                              req.body.name, 
                              price, 
                              req.body.image)
            .then(bin => res.status(200).send(bin))
            .catch( () => res.status(500).send() );
    },
    
    deleteBin: (req, res) => {
        const dbInstance = req.app.get('db');
        dbInstance.delete_bin(req.params.shelf, req.params.bin)
        .then(bin => res.status(200).send(bin))
        .catch( () => res.status(500).send() );
    }
  }