const fs = require("fs");
const Tour = require("../models/toursModels");

// this is the middleware to check the id is going out of boundary or not
// const checkId = (req, res, next, val) => {
// console.log(`Tour id is : ${val}`);
// if (req.params.id \* 1 > tours.length) {
// return res.status(404).json({
// status: "fail", msg: "Invalid Id"
// })
// }
// next();
// }

// create a check body middleware
// check if body contains the name and price property
// if not send back 400(bad request)
// add it to the post handler stack

// const checkBody = (req, res, next) => {
// if (!req.body.name || !req.body.price) {
// return res.status(404).json({
// status: "fail",
// msg: "Name or price missing"
// })
// }
// next();
// }

const getAllTours = (req, res) => {
res.status(200).json({
status: "success",
// results: tours.length,
// data: {
// tours
// }
});
}

const getTour = (req, res) => {
// const id = req.params.id \* 1;
// const tour = tours.find(el => el.id === id);
// if (!tour) {
// return res.status(404).json({ status: "fail", msg: "Invalid Id" })
// }

    // res.status(200).json({
    //     status: "success",
    //     data: {
    //         tour
    //     }
    // });

}

const createTour = (req, res) => {
// console.log(req.body);

    // const newId = tours[tours.length - 1].id + 1;
    // const newTour = Object.assign({ id: newId }, req.body);

    // tours.push(newTour);
    // fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`,
    //     JSON.stringify(tours),
    //     err => {
    //         res.status(201).json({
    //             status: "success",
    //             data: {
    //                 tour: newTour
    //             }
    //         })
    //     }
    // )

}

const updateTour = (req, res) => {
res.status(200).json({
status: "success",
data: {
tour: "<Updated tour here...>"
}
})
}

// delete tour
const deleteTour = (req, res) => {
res.status(204).json({
status: "success",
data: null
})
}

// const tours = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`))

module.exports = {
getAllTours,
getTour,
createTour,
updateTour,
deleteTour,
checkId,
checkBody
}

---------- this is filter , sorting , pagination ---------------
// BUILD QUERY
// 1. Filtering
// const queryObj = { ...req.query };
// const excludeItem = ["sort", "page", "limit", "fields"]
// excludeItem.forEach(el => delete queryObj[el]);

        // // 2. Advanced filtering
        // let queryString = JSON.stringify(queryObj);
        // queryString = queryString.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`)
        // // console.log(JSON.parse(queryString));

        // // const query = Tour.find(queryObj);
        // let query = Tour.find(JSON.parse(queryString));


        // 3. Sorting
        // if (req.query.sort) {
        //     const sortBy = req.query.sort.split(',').join(' ');
        //     // console.log(sortBy);
        //     query = query.sort(sortBy)
        // } else {
        //     query = query.sort("-createdAt");
        // }


        // 4. Field limiting
        // if (req.query.fields) {
        //     const fields = req.query.fields.split(',').join(' ');
        //     query = query.select(fields)
        // } else {
        //     query = query.select('-__v')
        // }


        // 5. Pagination
        // const page = req.query.page * 1 || 1; // convert str to num or by default page is 1
        // const limit = req.query.limit * 1 || 100;
        // const skip = (page - 1) * limit;

        // query = query.skip(skip).limit(limit);
        // if (req.query.page) {
        //     const numTours = await Tour.countDocuments();
        //     if (skip >= numTours) {
        //         throw new Error("This page does not exists");
        //     }
        // }

        // console.log(req.query);
