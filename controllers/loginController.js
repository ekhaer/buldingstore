class LoginController {
    static getLogin(req, res) {
        // console.log('<<< ini masuk get login controller');
        res.render('loginPage')
    }

    static postLogin(req, res) {
        req.session.isLogin = true
        res.redirect('/home')
    }

    static getLogout(req, res) {
        req.session.destroy()
        res.redirect('/login')
    }
}

module.exports = LoginController