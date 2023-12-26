//const mongoose = require("mongoose")
const list = require("../model/Todo")


exports.showList = async(req,res,next) => {
    const lists =  await list.find();
    res.json(lists);
    // res.render("/ToDo")
};


exports.deleteMany = async(req,res) => {

    const emptyList =  await list.deleteMany()
    res.json(emptyList);
    // res.render("/ToDo")
}
exports.deleteOne = async(req,res) => {
    console.log('1s');
    const id = req.params.id;
    const lists = await list.deleteOne({_id:id})
    res.json(lists);
    // res.render("/ToDo")
}

exports.add = async(req,res) => {
    if(!req.body.description){
        return res.status(400).json("Description shoild not be empty")
     }
     const addedList = new list(req.body);
     const lists = await addedList.save();
     res.status(201).json(lists);
    // res.render("/ToDo")
}

exports.update = async(req,res) => {
    const id = req.params.id;
    console.log(req.body)
    const updated = await list.updateOne({_id:id},{$set:{...req.body}})
    res.status(200).json(updated)
    // res.render("/ToDo")
}

exports.search = async(req,res) => {
    const body = req.body.description
    console.log(body);
    const todo = await list.findOne({description:body})
    res.status(200).json(todo)
    // res.render("/ToDo")
}