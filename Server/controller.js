
module.exports = {
    getBins: (req, res) => {
        const dbInstance = req.app.get('db');
        dbInstance.get_bins(req.params.shelf)
            .then(bin => res.status(200).send(bin))
            .catch( (err) =>{
                console.log(err)
                res.status(500).send(err)
            });
    },

    readBin: (req, res) => {
        const dbInstance = req.app.get('db');
        dbInstance.read_bin(req.params.shelf, req.params.bin)
            .then(bin => res.status(200).send(bin))
            .catch( (err) =>{
                console.log(err)
                res.status(500).send(err)
            });
    },
    
    createBin: (req, res) => {
        const dbInstance = req.app.get('db');
        let price = parseInt(req.body.price).toFixed(2);
        dbInstance.create_bin(req.params.shelf, 
                              req.params.bin, 
                              req.body.name, 
                              price)
            .then(bin => {
                console.log(bin)
                res.status(200).send(bin)
            })
            .catch( (err) =>{
                console.log(err)
                res.status(500).send(err)
            });
    },
    
    updateBin: (req, res) => {
        const dbInstance = req.app.get('db');
        let price = parseInt(req.body.price).toFixed(2);
        dbInstance.update_bin(req.params.shelf, 
                              req.params.bin, 
                              req.body.name, 
                              price)
            .then(bin => res.status(200).send(bin))
            .catch( (err) =>{
                console.log(err)
                res.status(500).send(err)
            });
    },
    
    deleteBin: (req, res) => {
        const dbInstance = req.app.get('db');
        dbInstance.delete_bin(req.params.shelf, req.params.bin)
        .then(bin => res.status(200).send(bin))
        .catch( (err) =>{
            console.log(err)
            res.status(500).send(err)
        });
    }
  }