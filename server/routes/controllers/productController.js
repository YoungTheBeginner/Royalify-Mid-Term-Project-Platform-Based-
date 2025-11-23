const { Low, JSONFile } = require('lowdb');
const path = require('path');

const dbFile = path.join(__dirname, '..', 'db.json');
const adapter = new JSONFile(dbFile);
const db = new Low(adapter);

async function ensureDB() {
  await db.read();
  db.data = db.data || { products: [] };
}

exports.listProducts = async (req, res) => {
  await ensureDB();
  // support optional query param ?limited=true
  const { limited } = req.query;
  let products = db.data.products;
  if (limited === 'true') {
    products = products.filter(p => p.limited === true);
  }
  res.json(products);
};

exports.getProductById = async (req, res) => {
  await ensureDB();
  const id = req.params.id;
  const product = db.data.products.find(p => p.id === id);
  if (!product) return res.status(404).json({ message: 'Product not found' });
  res.json(product);
};
