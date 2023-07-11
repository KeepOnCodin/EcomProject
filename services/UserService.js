const createError = require('http-errors');
const UserModel = require('../models/user');
const UserModelInstance = new UserModel();


module.exports = class UserService {

    async get(data) {
        
        const { id } = data;

        try {
            // Check for replications
            const user = await UserModelInstance.findOneById(id);

            // Reject if usr exits already
            if(!user) {
                createError(404, 'User Not Found');
            }

            return user;

        } catch(err) {
            throw err;
        }
    }
    
    async update(data) {

        try{
            // Check if user already exists
            const user = await UserModelInstance.update(data);

            return user;

        } catch(err) {
            throw err;
        }
    }
}