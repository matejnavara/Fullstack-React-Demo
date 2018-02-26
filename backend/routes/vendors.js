var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([
    {
      id: 1,
      name: "Gail’s Bakery",
      desc: "The famous artisan bakery, Gail’s is a great choice for delicious, freshly\
      baked sweet and savoury goods. It is a customer favourite and is great\
      for a number of occasions, both individual and sharing.",
      best_for: ["Pastries", "Sandwiches and nibbles", "Sharing Lunch Platters"],
      recommend: "Mixed sandwich box with 6 different varieties including our favourites\
      parmesan chicken & chilli aioli, cauliflower & spinach, and smoked\
      salmon & avocado yoghurt. Treat yourself to Gail’s brownie bites for\
      dessert- you won’t be disappointed!",
      image: "../img/gails.jpg"
    },
    {
      id: 2,
      name: "Farmstand",
      desc: "Ethically-sound Farmstand creates seasonal, wholesome options, free\
      from gluten, dairy and unnecessary added sugar. Inspired by the roadside\
      stalls of Midwest America, the food from Farmstand is all delicious and\
      sustainably sourced.",
      best_for: ["Sharing Lunch Platters", "Farm to Table", "Hearty Lunch Boxes"],
      recommend: "Harissa Chicken with Rainbow Slaw with Sesame Dressing and Broccoli\
      with Tahini and Sesame Seeds",
      image: "../img/farmstand.jpg"
    },
    {
      id: 3,
      name: "Peardrop",
      desc: "Beautifully presented, balanced food, Peardrop’s dishes are sophisticated\
      with surprising flavours. Ingredients are sourced sustainably and ethically,\
      using organic produce wherever possible.",
      best_for: ["Pastries", "Sharing Lunch Platters", "VIP Board Room"],
      recommend: "Some of our favourite canapes include: sweet potato discs with\
      homemade pesto and house blushed tomato, pork & fennel meatballs\
      with tahini yoghurt and pomegranate, & seared sesame tuna wontons\
      with wasabi cream.",
      image: "../img/peardrop.jpg"
    }
  ])
});

module.exports = router;
