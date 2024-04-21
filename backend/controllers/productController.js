import express from 'express'
import Product from '../models/productModel.js'
import mongoose from 'mongoose'

const getProducts = async (req, res) => {
    try {
        const product = await Product.find()
        res.status(200).json(product)
    }
    catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const getSingleProduct = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'not a valid monog id' })
    }

    try {
        const product = await Product.findOne({ _id: id })
        if (!product) {
            return res.status(404).json({ error: ' cant find product with that ID' })
        }
        res.status(200).json(product)
    }

    catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const postProduct = async (req, res) => {
    const { product_name, price } = req.body
    if (!product_name || !price) {
        return res.status(400).json({ error: 'please fill out all fields' })
    }
    try {
        const product = await Product.create({ product_name, price })
        res.status(201).json(product)
    }
    catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const deleteProduct = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'not a valid mongo id' })
    }

    try {
        const product = await Product.findByIdAndDelete({ _id: id })

        if (!product) {
            return res.status(404).json({ error: 'no product with that id' })
        }
        res.status(201).json(product)
    }
    catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export { getProducts, getSingleProduct, postProduct, deleteProduct }