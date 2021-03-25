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
        console.log(">>>>>>>>", req.body);
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
        // console.log("req.body.UserId_orderlist ", req.body );
        Order.findAll({
            attributes: [
                'id', 'UserId', 'ProductId', 'qty', 'totalPrice', 'createdAt', 'updatedAt'
             ],
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
        let OrderId = 0;
        Order.findAll({
            where : {
                id : req.params.id
            },
            include : [Product]
        })
        .then(dataOrder => {
            // res.send(dataOrder)
            return Product.update({
                stock : dataOrder[0].qty + dataOrder[0].Product.stock,
            }, 
            {   where : {
                    id : dataOrder[0].Product.id
                }
            })
        })
        .then(dataProductUpdate => {
            return Order.destroy({
                where : {
                    id : req.params.id
                }
            })
        })
        .then(()=> {
            res.redirect("/orderlist")
        })
        .catch(err => {
            res.send(err)
        })
    }

    static checkout(req, res) {
        // res.send("checkout");
        Order.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => { 
            res.send(err)
        })
    }
}

module.exports = Controller;