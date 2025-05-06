const mongoose = require('mongoose');
const Listing = require("../Models/Listing.js");
const allData = require("./data.js");

main()
    .then((res) => {
        console.log('Connection Build')
    })
    .catch((err) => {
        console.log(err)
    });

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/booking');

}


const initData = async () => {

    await Listing.deleteMany({});
    await Listing.insertMany(allData.data);
}

initData();