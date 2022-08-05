import getConnection from '../database/database';

const getProducts = async (req, res) => {
  const connection = await getConnection();
  const products = await connection.query(
    'SELECT  '
    + 'product.id as id, '
    + 'product.name as name, '
    + 'product.description as description, '
    + 'product.price as price, '
    + 'product.thumbnail as thumbnail, '
    + 'brand.name as brand , '
    + 'reseller.city as city,  '
    + 'reseller.name as reseller, '
    + 'reseller.rating as reseller_rating '
    + 'FROM product INNER JOIN brand  '
    + 'ON product.brand_id = brand.id INNER JOIN '
    + 'reseller ON product.reseller_id = reseller.id;',
  );
  res.json(products);
};

const getProduct = async (req, res) => {
  const { id } = req.params;
  const connection = await getConnection();
  const product = await connection.query('SELECT  '
    + 'product.id as id, '
    + 'product.name as name, '
    + 'product.description as description, '
    + 'product.price as price, '
    + 'brand.name as brand , '
    + 'reseller.city as city,  '
    + 'reseller.name as reseller, '
    + 'reseller.logo as reseller_logo, '
    + 'reseller.rating as reseller_rating '
    + 'FROM product INNER JOIN brand  '
    + 'ON product.brand_id = brand.id INNER JOIN '
    + 'reseller ON product.reseller_id = reseller.id '
    + 'WHERE product.id = ?;', [id]);

  if (product.length === 0) {
    res.json({
      error: 'Product not found',
    });
  }

  res.json(product);
};

export default {
  getProducts,
  getProduct,
};
