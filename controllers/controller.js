const {Order, Product, User} = require('../models');
class Controller {

    static productFindAll(req, res){
        Product.findAll({
            order: [['id', 'DESC']]
        })
        .then(data => {
            res.render('homepage', {dataProducts : data});
        })
        .catch(err => {
            res.send(err)
        });
    }

    static addChart(req, res) {
        Product.decrement('stock', {
            by : req.body.purchased,
            where: {
                id : req.params.id
            }
        })
        .then(() => {
            console.log("user id : ", req.params.id);
            console.log("id product : ", req.body.purchased);
            return Order.create({
                UserId : req.body.UserId,   //WILL BE CHANGED WITH SESSION VALUE
                ProductId : req.params.id,
                qty : req.body.purchased
            })
        })
        .then(() => {
            // res.send();
            res.redirect('/home');
        })
        .catch(err => {
            res.send(err);
        })
    }

    static orderListFindAll(req, res){
        // console.log("req.body.UserId_orderlist ", req.body.UserId_orderlist );
        Order.findAll({
            where : {
                UserId : 1 //WILL BE CHANGED WITH SESSION VALUE
            },
            include : [Product]
        })
        .then(data => {
            // res.send(data)
            res.render('orderlist', {DataOrder : data})
        })
        .catch(err => {
            res.send(err);
        })
    }

    static deleteOrder(req, res) {
        console.log('increment qty : ', req.body);
        Order.destroy({
            where : {
                ProductId :  req.params.id
            }
        })
        .then(() => {
            Product.increment('stock', {
                by : 10,        //should be increment by qty
                where : {
                    id: req.params.id
                },
            })
            // res.redirect("/orderlist")
        })
        .then((data) => {
            res.redirect("/orderlist")
        })
        .catch(err => {
            res.send(err);
        })
    }

    static checkout(req, res) {
        // res.send("checkout");
        Order.findAll({
            where : {
                UserId: 1 //based on session
            }
        })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.send(err)
        })
    }
}

module.exports = Controller;