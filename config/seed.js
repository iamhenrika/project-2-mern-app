require('dotenv').config();
require('./database');

const Item = require('../models/item');

(async function() {
  db.once('open', async function () {

  await Category.deleteMany({});
  const categories = await Category.create([
    {},
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    {},
  ]);

  console.log(items)

  process.exit();

})
})();