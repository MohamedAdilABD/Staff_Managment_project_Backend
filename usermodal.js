const mongoose = require('mongoose');

const userschema = mongoose.Schema(
    {
        
        name: {
            type: String,
            required: true
        },

        email: {
            type: String,
            required: true,
            unique : true
        },

        password: {
            type: String,
            required: true
        },

        role: {
            type: String,
            required: true,
            enum : ["Admin", "Employee"]
        }
    },

);

module.exports = mongoose.model ("userdata" , userschema);