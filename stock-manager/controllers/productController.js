const Product = require('../models/productModel');

exports.createProduct = async (req, res) => {
    const { name, quantity, price } = req.body;
    try {
        const newProduct = await Product.create({ name, quantity, price });
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(400).json({ error: 'Product creation failed' });
    }
};

exports.getProducts = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.json(products);
    } catch (error) {
        res.status(400).json({ error: 'Failed to fetch products' });
    }
};

exports.updateProduct = async (req, res) => {
    const { id } = req.params;
    const { name, quantity, price } = req.body;
    try {
        const updatedProduct = await Product.update({ name, quantity, price }, { where: { id } });
        res.json(updatedProduct);
    } catch (error) {
        res.status(400).json({ error: 'Product update failed' });
    }
};

exports.deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        await Product.destroy({ where: { id } });
        res.json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: 'Product deletion failed' });
    }
};
