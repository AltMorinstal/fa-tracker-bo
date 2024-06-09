const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Veuillez renseigner l'adresse mail"],
        unique: [true, "Cette adresse mail est déjà utilisée"],
    },
    password: {
        type: String,
        required: [true, "Veuillez renseigner le mot de passe"],
        unique: false,
    }
});

module.exports = mongoose.model.Users || mongoose.model("Users", UserSchema);