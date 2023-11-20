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

const billSchema = new mongoose.Schema({
  start_date: {
    type: Date,
    required: true
  },
  end_date: {
    type: Date,
    required: true
  },
});


// สร้างโมเดล 'bill'
const Bill = mongoose.model('Bill', billSchema);



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
  const productId = req.params.id;

  try {
    // Check if productId is a valid ObjectID
    if (!mongoose.Types.ObjectId.isValid(productId)) {
      return res.status(400).json({ error: 'Invalid ObjectID' });
    }

    // Fetch product data from the database
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    // Send product details as a response
    res.json(product);
  } catch (error) {
    console.error('Error fetching product details:', error);
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

// API สำหรับ POST ค่า 'start_date' และ 'end_date'
app.post('/api/createBillWithDates', async (req, res) => {
  try {
    const { start_date, end_date } = req.body;

    // สร้าง instance ของ Bill model
    const newBill = new Bill({
      start_date,
      end_date,
    });

    // บันทึกลงในฐานข้อมูล
    await newBill.save();

    res.status(201).json({ message: 'Bill created successfully with dates', newBill });
  } catch (error) {
    console.error('Error creating bill with dates:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.get('/api/getBills', async (req, res) => {
  try {
    // ดึงข้อมูลบิลทั้งหมดจากฐานข้อมูล
    const bills = await Bill.find();

    // ส่งข้อมูลบิลกลับไปในรูปแบบ JSON
    res.json(bills);
  } catch (error) {
    console.error('Error fetching bills:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/getBills/:id', async (req, res) => {
  const billId = req.params.id;

  try {
    // ตรวจสอบว่า billId เป็น ObjectID ที่ถูกต้องหรือไม่
    if (!mongoose.Types.ObjectId.isValid(billId)) {
      return res.status(400).json({ error: 'Invalid ObjectID' });
    }

    // ดึงข้อมูลบิลจากฐานข้อมูล
    const bill = await Bill.findById(billId);

    if (!bill) {
      return res.status(404).json({ error: 'Bill not found' });
    }

    // ส่งรายละเอียดบิลเป็น response
    res.json(bill);
  } catch (error) {
    console.error('Error fetching bill details:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// 8. เริ่ม Express.js server
app.listen(port, () => {
  console.log('The server runs on port 8080.');
});

module.exports = app;