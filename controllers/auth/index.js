const register = require('./register');
const login = require('./login');
const logout = require('./logout');
const updateSubscription = require('./updateSubscription');
const getCurrent = require('./getCurrent');
const updateAvatar = require('./updateAvatar');

module.exports = {
    register,
    login,
    logout,
    updateSubscription,
    getCurrent,
    updateAvatar
}