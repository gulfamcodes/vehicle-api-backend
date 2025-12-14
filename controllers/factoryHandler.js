//factoryHandler.js
const APIFeatures = require("../utils/apiFeatures");

exports.getAll = (Model, pluralName) => async (req, res) => {
  try {
    const features = new APIFeatures(Model.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();

    const docs = await features.query;

    res.status(200).json({
      status: "success",
      results: docs.length,
      data: { [pluralName]: docs },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};
exports.createOne = (Model, singularName) => async (req, res) => {
  try {
    const doc = await Model.create(req.body);

    res.status(201).json({
      status: "success",
      message: { [singularName]: doc },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};
exports.getOne = (Model, singularName) => async (req, res) => {
  try {
    const doc = await Model.findById(req.params.id);
    if (!doc) {
      res.status(404).json({
        status: "fail",
        message: `No ${singularName} is found with this ID`,
      });
    }

    res.status(200).json({
      status: "success",
      data: { [singularName]: doc },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};
exports.updateOne = (Model, singularName) => async (req, res) => {
  try {
    const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!doc) {
      res.status(404).json({
        status: "fail",
        message: `No ${singularName} is found with this ID`,
      });
    }

    res.status(200).json({
      status: "success",
      data: { [singularName]: doc },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};
exports.deleteOne = (Model, singularName) => async (req, res) => {
  try {
    const doc = await Model.findByIdAndDelete(req.params.id);
    if (!doc) {
      res.status(404).json({
        status: "fail",
        message: `No ${singularName} is found with this ID`,
      });
    }

    res.status(200).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};
