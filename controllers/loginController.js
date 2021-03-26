const { User } = require('../models')

class LoginController {
    static getLogin(req, res) {
        
        res.render('loginPage')
    }

    static postLogin(req, res) {
        
        req.session.isLogin = true
        
        User.findAll()
            .then(data => {
                
                let result
                data.forEach(el => {
                    
                    if (el.username === req.body.username && el.password === req.body.password) {
                        result = el
                    }
                });
                
                req.session.dataLogin = { userId : result.id, username: result.username }
                // res.send(result)
                res.redirect('/home')
            })
            .catch(err => {
                console.log(err);
            })
        
    }

    static getLogout(req, res) {
        req.session.destroy()
        res.redirect('/login')
    }
}

module.exports = LoginController