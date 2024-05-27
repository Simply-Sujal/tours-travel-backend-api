const Tour = require("../models/toursModels");


const getAllTours = (req, res) => {
    res.status(200).json({
        status: "success",
        // results: tours.length,
        // data: {
        //     tours
        // }
    });
}

const getTour = (req, res) => {
    // const id = req.params.id * 1;
    // const tour = tours.find(el => el.id === id);
    // if (!tour) {
    //     return res.status(404).json({ status: "fail", msg: "Invalid Id" })
    // }

    // res.status(200).json({
    //     status: "success",
    //     data: {
    //         tour
    //     }
    // });
}

const createTour = async (req, res) => {
    try {
        const newTour = await Tour.create(req.body)
        res.status(201).json({
            status: "success",
            data: {
                tour: newTour
            }
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            status: "fail",
            msg: err
        })
    }
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
}