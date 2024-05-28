const Tour = require("../models/toursModels");
const APIFeatures = require("./../utils/apiFeatures.js");

const aliasTopTours = (req, res, next) => {
    req.query.limit = '5';
    req.query.sort = '-ratingsAverage,price';
    req.query.fields = 'name,price,ratingsAverage,summary,difficulty';
    next();
}


const getAllTours = async (req, res) => {
    try {
        // EXECUTE QUERY
        const features = new APIFeatures(Tour.find(), req.query)
            .filter()
            .sort()
            .limitFields()
            .paginate();
        const tours = await features.query;

        res.status(200).json({
            status: "success",
            data: {
                tours
            }
        });
    } catch (error) {
        console.log(error)
        res.status(400).json({
            status: "fail",
            msg: error
        })
    }

}

const getTour = async (req, res) => {
    try {
        const id = req.params.id;
        // Tour.findOne({_id:req.params.id})
        const tour = await Tour.findById(id)
        res.status(200).json({
            status: "success",
            data: {
                tour
            }
        });
    } catch (error) {
        console.log(error)
        res.status(400).json({
            status: "fail",
            msg: error
        })
    }
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

const updateTour = async (req, res) => {
    try {
        const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        res.status(200).json({
            status: "success",
            data: {
                tour
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

// delete tour
const deleteTour = async (req, res) => {
    try {
        const tour = await Tour.findByIdAndDelete(req.params.id);
        console.log(tour)
        res.status(204).json({
            status: "success",
            data: null
        })
    } catch (error) {

    }

}


module.exports = {
    getAllTours,
    getTour,
    createTour,
    updateTour,
    deleteTour,
    aliasTopTours
}