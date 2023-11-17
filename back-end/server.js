const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
const port = 8080;

app.use(bodyParser.json());
app.use(cors());

// 1. เชื่อมต่อกับ MongoDB
mongoose.connect('mongodb+srv://admin:admin@equipmentease.l6tl6ay.mongodb.net/product', { useNewUrlParser: true, useUnifiedTopology: true });

// 2. สร้างโครงสร้างข้อมูลสำหรับ MongoDB
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  amount: Number,
  details: String,
  startDate: Date,
  endDate: Date,
  address: String,
  image: String, 
  // เพิ่ม properties ตามที่ต้องการ
});

// 3. สร้างโมเดล Product
const Product = mongoose.model('Product', productSchema);

const customerSchema = new mongoose.Schema({
  name: String,
  address: String,
  email: String,
  telephoneNumber: String,
  // Add other properties as needed
});

const Customer = mongoose.model('Customer', customerSchema);
// 4. สร้าง API - Create
app.post('/api/products', async (req, res) => {
  try {
    const {
      name,
      price,
      amount,
      details,
      startDate,
      endDate,
      address,
      image,
    } = req.body;

    const newProduct = new Product({
      name,
      price,
      amount,
      details,
      startDate,
      endDate,
      address,
      image,
    });

    await newProduct.save();
    res.status(201).json({ message: 'Product created successfully' });
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// 5. สร้าง API - Read
app.get('/api/products', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// 6. สร้าง API - Update
app.put('/api/products/:id', async (req, res) => {
  const id = req.params.id;
  const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { new: true });
  res.json(updatedProduct);
});

// 7. สร้าง API - Delete
app.delete('/api/products/:id', async (req, res) => {
  const id = req.params.id;

  try {
    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.json(deletedProduct);
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// 9. สร้าง API - Read individual product
app.get('/api/products/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    console.error('Error retrieving product:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/api/customers', async (req, res) => {
  try {
    const { name, address, email, telephoneNumber } = req.body;

    const newCustomer = new Customer({
      name,
      address,
      email,
      telephoneNumber,
    });

    await newCustomer.save();
    res.status(201).json({ message: 'Customer created successfully' });
  } catch (error) {
    console.error('Error creating customer:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Create API - Read Customers
app.get('/api/customers', async (req, res) => {
  const customers = await Customer.find();
  res.json(customers);
});

// Create API - Update Customer
app.put('/api/customers/:id', async (req, res) => {
  const id = req.params.id;
  const updatedCustomer = await Customer.findByIdAndUpdate(id, req.body, { new: true });
  res.json(updatedCustomer);
});

// Create API - Delete Customer
app.delete('/api/customers/:id', async (req, res) => {
  const id = req.params.id;

  try {
    const deletedCustomer = await Customer.findByIdAndDelete(id);

    if (!deletedCustomer) {
      return res.status(404).json({ error: 'Customer not found' });
    }

    res.json(deletedCustomer);
  } catch (error) {
    console.error("Error deleting customer:", error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Create API - Read Individual Customer
app.get('/api/customers/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const customer = await Customer.findById(id);
    if (!customer) {
      return res.status(404).json({ error: 'Customer not found' });
    }
    res.json(customer);
  } catch (error) {
    console.error('Error retrieving customer:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// 8. เริ่ม Express.js server
app.listen(port, () => {
  console.log('The server runs on port 8080.');
});