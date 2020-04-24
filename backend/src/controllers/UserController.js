const connection = require('../database/connection')

module.exports = {
    async index (request, response) {

        const users = await connection('users').select('*')

        return response.json(users)
    },

    async create (request, response) {
        console.log(request)
        const { name, email, password, confirm_password } = request.body 

        await connection('users').insert({
            name, 
            email,
            password,
            confirm_password,
        })

        return response.json({ 
            email,
            password
        })
    }
}