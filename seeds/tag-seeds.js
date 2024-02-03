const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'Tech',
  },
  {
    tag_name: 'Apparel',
  },
  {
    tag_name: 'Gadgets',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
