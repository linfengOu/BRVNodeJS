
exports.getAllTags = (req, res, next) => {
  res.json([
    {
      tagId: 'tg1',
      description: 'one'
    },
    {
      tagId: 'tg2',
      description: 'two'
    },
    {
      tagId: 'tg3',
      description: 'three'
    },
    {
      tagId: 'tg11',
      description: 'one.one',
      parentTagId: 'tg1'
    },
    {
      tagId: 'tg12',
      description: 'one.two',
      parentTagId: 'tg1'
    },
    {
      tagId: 'tg21',
      description: 'two.one',
      parentTagId: 'tg2'
    },
  ]);
};
