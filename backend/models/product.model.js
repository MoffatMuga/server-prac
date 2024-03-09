const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema(
    
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required:true,
            ref:'User',
        },
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