const {Order, Product, User} = require('../models');
const getTotalPrice = require('../helper/getTotalPrice');
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
                UserId : req.session.dataLogin.userId,   //WILL BE CHANGED WITH SESSION VALUE
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
             where : {
                UserId : req.session.dataLogin.userId //WILL BE CHANGED WITH SESSION VALUE
            },
             include : [Product]
          })
        .then(data => {
            // res.send(data)
            res.render('orderlist', {DataOrder : data, getTotalPrice})
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
        Order.findAll({
            where : {
                UserId: req.session.dataLogin.userId //based on session
            }
        })
        .then(data => {
            res.send(data);
        })
        .catch(err => { 
            res.send(err)
        })
    }

    static getEditOrder(req, res){
        console.log(req.params.id)
        Order.findOne({
            where : {
                id : req.params.id
            },
            attributes: [
                'id', 'UserId', 'ProductId', 'qty', 'totalPrice', 'createdAt', 'updatedAt'
             ],
             include : [Product]
        })
        .then(data => {
            // res.send(data)
            res.render('editOrder', {dataOrder : data, getTotalPrice})
        })
        .catch(err => {
            res.send(err)
        })
    }

    static postEditOrder(req, res){
        // res.send(req.body)
        Order.update({
            qty : req.body.qty},{
            where : {
                id : req.params.id
            }
        })
        .then(()=> {
            res.redirect('/orderlist');
        })
        .catch(err => {
            res.send(err)
        })
    }
}

module.exports = Controller;