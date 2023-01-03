const userController = {
    register: function (req, res) {
        console.log('register');
        res.json('Register');
    },
    login: function (req, res) {
        console.log('login');
        res.json('Login');
    }
}

module.exports = userController;