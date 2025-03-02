const mongoose=require('mongoose')

const AddRecipeSchema=mongoose.Schema({
 Recipe_title:{type:String,require:true},
 Ingredients:{type:String,require:true},
 Instructions:{type:String,require:true},
 Cooking_time:{type:Number,require:true},


})
module.exports=mongoose.model('AddRecipe',AddRecipeSchema)