let houses = require('./db.json')
let houseID = 4;


module.exports = {
    getHouses: (req, res) =>{
        res.status(200).send(houses)
    },
    deleteHouse: (req, res) => {
        // const {id} = rec.params.id
        let index = houses.findIndex(elem => elem.id === +req.params.id)
        houses.splice(index, 1)
        res.status(200).send(houses)
    },
    createHouse: (req, res) => {
        const {address, price, imageURL} = req.body
        let newHouse = {
            id: houseID,
            address,
            price,
            imageURL
        }
        houses.push(newHouse);
        houseID++;
        res.status(200).send(houses)
    },
    updateHouse: (req, res) => {
        const id = req.params.id;
        const type = req.body.type;
        let index = houses.findIndex(elem => elem.id === +req.params.id)
        if(type === 'minus' && houses[index].price > 0){
            houses[index].price -= 10000
            res.status(200).send(houses)
        } else if (type === 'plus'){
            houses[index].price += 10000
            res.status(200).send(houses)
        } else {
            res.status(400).send("Something went wrong!")
        }
    }
}