/**
 * Donut data array – used by flavours.html and possibly dynamic rendering.
 */
const donutData = [
  { name: 'Classic Glazed', glaze: 'glazed', filling: 'none', image: 'donut1.jpg', description: 'Light and airy with a sweet honey glaze.' },
  { name: 'Chocolate Dream', glaze: 'chocolate', filling: 'cream', image: 'donut2.jpg', description: 'Dark chocolate glaze, vanilla cream filling.' },
  { name: 'Rainbow Sprinkle', glaze: 'sprinkles', filling: 'none', image: 'donut3.jpg', description: 'Vanilla icing with colourful rainbow sprinkles.' },
  { name: 'Maple Dip', glaze: 'maple', filling: 'none', image: 'donut4.jpg', description: 'Canadian maple frosting on a cake donut.' },
  { name: 'Raspberry Jam', glaze: 'filled', filling: 'jam', image: 'donut5.jpg', description: 'Powdered sugar outside, raspberry jam inside.' },
  { name: 'Chocolate Custard', glaze: 'chocolate', filling: 'custard', image: 'donut6.jpg', description: 'Rich chocolate glaze filled with creamy custard.' },
  { name: 'Honey Dip', glaze: 'glazed', filling: 'none', image: 'donut7.jpg', description: 'Glazed with real Canadian honey.' },
  { name: 'Matcha Madness', glaze: 'special', filling: 'none', image: 'donut8.jpg', description: 'Green tea icing with a hint of white chocolate.' },
  { name: 'Unicorn Sprinkles', glaze: 'sprinkles', filling: 'none', image: 'donut9.jpg', description: 'Pink icing with star-shaped sprinkles.' },
  { name: 'Boston Cream', glaze: 'filled', filling: 'cream', image: 'donut10.jpg', description: 'Chocolate top, vanilla cream, classic style.' },
  { name: 'Maple Bacon', glaze: 'maple', filling: 'none', image: 'donut11.jpg', description: 'Maple icing with crispy bacon bits.' },
  { name: 'Lemon Burst', glaze: 'special', filling: 'lemon', image: 'donut12.jpg', description: 'Tangy lemon curd filling with powdered sugar.' },
  { name: 'Peanut Butter Cup', glaze: 'chocolate', filling: 'peanut butter', image: 'donut13.jpg', description: 'Chocolate cake donut with peanut butter filling.' },
  { name: 'Vanilla Bean', glaze: 'glazed', filling: 'none', image: 'donut14.jpg', description: 'Vanilla bean glaze with a soft crumb.' },
  { name: 'Confetti Cake', glaze: 'sprinkles', filling: 'none', image: 'donut15.jpg', description: 'Cake donut with confetti sprinkles inside and out.' },
  { name: 'Apple Fritter', glaze: 'filled', filling: 'apple', image: 'donut16.jpg', description: 'Cinnamon apple chunks fried to perfection.' },
  { name: 'Churro Donut', glaze: 'special', filling: 'none', image: 'donut17.jpg', description: 'Cinnamon sugar coating, crispy outside, soft inside.' },
  { name: 'Double Chocolate', glaze: 'chocolate', filling: 'none', image: 'donut18.jpg', description: 'Chocolate cake donut with chocolate ganache.' },
  { name: 'Maple Pecan', glaze: 'maple', filling: 'none', image: 'donut19.jpg', description: 'Maple icing topped with crunchy pecans.' },
  { name: 'Vanilla Custard', glaze: 'filled', filling: 'custard', image: 'donut20.jpg', description: 'Soft yeast donut with smooth vanilla custard.' },
  { name: 'Red Velvet', glaze: 'special', filling: 'none', image: 'donut21.jpg', description: 'Red velvet cake donut with cream cheese frosting.' },
  { name: 'Strawberry Glaze', glaze: 'glazed', filling: 'none', image: 'donut22.jpg', description: 'Real strawberry purée in the glaze.' },
  { name: 'Cotton Candy', glaze: 'sprinkles', filling: 'none', image: 'donut23.jpg', description: 'Cotton candy flavoured icing with blue sprinkles.' },
  { name: 'S\'mores', glaze: 'chocolate', filling: 'marshmallow', image: 'donut24.jpg', description: 'Chocolate glaze, graham cracker crumbs, marshmallow filling.' },
  { name: 'Blueberry Bliss', glaze: 'filled', filling: 'blueberry', image: 'donut25.jpg', description: 'Glazed donut filled with wild blueberry jam.' },
  { name: 'Pumpkin Spice', glaze: 'special', filling: 'none', image: 'donut26.jpg', description: 'Seasonal pumpkin cake with spiced glaze.' },
  { name: 'Maple Crème', glaze: 'maple', filling: 'none', image: 'donut27.jpg', description: 'Maple icing with a swirl of maple cream.' },
  { name: 'Brown Butter Glaze', glaze: 'glazed', filling: 'none', image: 'donut28.jpg', description: 'Nutty brown butter glaze on a yeast donut.' },
  { name: 'Black Forest', glaze: 'chocolate', filling: 'cherry', image: 'donut29.jpg', description: 'Chocolate donut with cherry filling and cream.' },
  { name: 'Crème Brûlée', glaze: 'special', filling: 'none', image: 'donut30.jpg', description: 'Caramelized sugar top, vanilla custard inside.' }
];

// Export if using modules, otherwise global.
if (typeof module !== 'undefined' && module.exports) {
  module.exports = donutData;
}
