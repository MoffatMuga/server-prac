const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema(
    
    {
        text: {
            type: String,
            required: [true, "please enter name"]
        },
        
    },
    {
        timestamps: true,
    }
    
    
    );

    const Goal = mongoose.model("goal", ProductSchema);
    module.exports = Goal;