const mongoose = require("./connection.js");
const db = mongoose.connection;
const User = require("../models/users");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  await User.deleteMany({});

  const users = [
    {
      firstName: "Kevin",
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595015021/Project%203/0wJTGza_ljgaxz.jpg",
      location: "The North Pole",
      age: 36,
      gender: "Male",
      antibodies: true,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore: "eating hotdogs, harassing squirrels, preying on the weak",
      hobbiesAfter:
        "eating hotpockets, starting internet beefs, not wearing a mask in public",
    },
    {
      firstName: "Suzi",
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595019226/Project%203/istockphoto-1064056738-612x612_zictah.jpg",
      location: "Beverly Hills, CA",
      age: 29,
      gender: "Female",
      antibodies: true,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore: "Running marathons, wine tasting, book club",
      hobbiesAfter:
        "Netflix & red wine",
    },
    {
      firstName: "Ava",
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595019376/Project%203/ava_afownr.jpg",
      location: "Savannah, GA",
      age: 23,
      gender: "Female",
      antibodies: false,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore: "Pilates, spin, brunch with the girls",
      hobbiesAfter:
        "Peloton classes, using my salad spinner",
    },
    {
      firstName: "Justin",
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595019448/Project%203/21562458-closeup-fun-headshot-of-curly-hair-man-smiling-portrait-of-a-man-with-nerd-glasses-n-studio-funny_zmgbyp.jpg",
      location: "Seattle, WA",
      age: 30,
      gender: "Male",
      antibodies: false,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore: "Reading comic books, roller skating",
      hobbiesAfter:
        "Animation, riding my unicycle, birding",
    },
    {
      firstName: "Henrietta",
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595019553/Project%203/henrietta_yyrssq.jpg",
      location: "Boston, MA",
      age: 61,
      gender: "Female",
      antibodies: true,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore: "Upending the patriarchy, knitting",
      hobbiesAfter:
        "Gardening, poetry",
    },
    {
      firstName: "George",
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595019623/Project%203/images_1_gmgp0m.jpg",
      location: "Cincinnati, OH",
      age: 39,
      gender: "Male",
      antibodies: false,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore: "Parties on yachts, tennis",
      hobbiesAfter:
        "Zoom dating, grilling, darts",
    },
    {
      firstName: "Ginny",
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595019727/Project%203/woman-executive-corporate-headshots_jwwd7b.jpg",
      location: "San Francisco, CA",
      age: 34,
      gender: "Female",
      antibodies: true,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore: "Jogging, running my successful tech company",
      hobbiesAfter:
        "Watching murder mysteries with my cat. Meow!",
    },
    {
      firstName: "Lucia",
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595019825/Project%203/lucia_gmspa5.jpg",
      location: "Austin, TX",
      age: 26,
      gender: "Female",
      antibodies: false,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore: "Grooming my cat, collecting glass bottles",
      hobbiesAfter:
        "Pickling insects, making teeth jewelry, industrial-goth music",
    },
    {
      firstName: "Dusty",
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595019921/Project%203/dusty_ryvtj3.jpg",
      location: "Syracuse, NY",
      age: 23,
      gender: "Male",
      antibodies: false,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore: "shredding on the guitar",
      hobbiesAfter:
        "shredding on the guitar in my garage",
    },
    {
      firstName: "Jay",
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595020002/Project%203/Jay_etft3z.jpg",
      location: "Houston, TX",
      age: 21,
      gender: "Male",
      antibodies: false,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore: "Riding my motorcycle, eating tacos, visiting my local museum",
      hobbiesAfter:
        "Eating LOTS of tacos, sit ups",
    },
    {
      firstName: "Charli",
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595020108/Project%203/charli_hvq315.jpg",
      location: "Santa Fe, NM",
      age: 28,
      gender: "Female",
      antibodies: false,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore: "Ping pong, going to the flower market",
      hobbiesAfter:
        "Baking, hot yoga, basket weaving",
    },
    {
      firstName: "Giulio",
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595020208/Project%203/giulio_lxvdwh.jpg",
      location: "Kennebunkport, ME",
      age: 54,
      gender: "Male",
      antibodies: false,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore: "BBQ, visiting my grandkids",
      hobbiesAfter:
        "Sitting on my couch staring listlessly at the TV",
    },
    {
      firstName: "Jo",
      image:
        "https://cdn.vox-cdn.com/thumbor/K3pMWEukRqceWQGT9vRJrxFMf9g=/0x0:1024x1024/1720x0/filters:focal(0x0:1024x1024):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/19216622/000115.jpg",
      location: "Bend, OR",
      age: 29,
      gender: "Female",
      antibodies: true,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore: "Working endlessly",
      hobbiesAfter:
        "Still working endlessly",
    },
    {
      firstName: "Jeremiah",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ7TFHX4sdm0R10uKvpPd8sipNz88lIaa9EOg&usqp=CAU",
      location: "Denver, CO",
      age: 31,
      gender: "Male",
      antibodies: false,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore: "Craft beer, crossfit, and my miniature Schnauzer Miss Bluebell",
      hobbiesAfter:
        "Testing myself for COVID-19",
    },
    {
      firstName: "Sheldon",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRU4MJx_Ixr0sOICLjPJmdF4GdWHUAWbS28JQ&usqp=CAU",
      location: "Tampa, FL",
      age: 37,
      gender: "Male",
      antibodies: true,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore: "Eating soft serve, looking at cloud shapes",
      hobbiesAfter:
        "Polishing my silverware. So soothing!",
    },
    {
      firstName: "Megha",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS5NVfYHvAE4akMg7P66LNc_ScXw_qDzLpigw&usqp=CAU",
      location: "Toronto, ON",
      age: 24,
      gender: "Female",
      antibodies: true,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore: "Making custom crystal jewelry, reading horoscopes",
      hobbiesAfter:
        "Baking my specialty brownies and them eating all myself! I love living alone",
    },
    {
      firstName: "Sarah",
      image:
        "https://img.buzzfeed.com/buzzfeed-static/static/2015-05/20/13/campaign_images/webdr01/what-your-favorite-stock-photo-spaghetti-person-s-2-7471-1432142821-2_dblbig.jpg",
      location: "Bakersfield, CA",
      age: 28,
      gender: "Female",
      antibodies: false,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore: "Making homemade pasta - I LOVE it!",
      hobbiesAfter:
        "Making custom pasta headpieces",
    },
    {
      firstName: "Elon",
      image:
        "https://specials-images.forbesimg.com/imageserve/5e50238b765d4500072ce14c/960x0.jpg?cropX1=0&cropX2=3000&cropY1=224&cropY2=1911",
      location: "Los Angeles, CA",
      age: 49,
      gender: "Male",
      antibodies: true,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore: "Thinking, building rockets, renewable energy",
      hobbiesAfter:
        "Terraforming, Grimes",
    },
    {
      firstName: "Julie",
      image:
        "https://www.eaclinic.co.uk/wp-content/uploads/2019/01/woman-face-eyes-1000x1000.jpg",
      location: "Chicago, IL",
      age: 25,
      gender: "Female",
      antibodies: false,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore: "Deep dish pizza, makeup tutorials",
      hobbiesAfter:
        "Online shopping, walking around the neighborhood",
    },
    {
      firstName: "Charlotte",
      image:
        "https://static01.nyt.com/images/2017/08/14/upshot/14up-getty2012/merlin-to-scoop-125881535-130763-articleLarge.jpg?quality=90&auto=webp",
      location: "Bellevue, WA",
      age: 42,
      gender: "Female",
      antibodies: true,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore: "Reading fantasy novels, traveling",
      hobbiesAfter:
        "Watching Anthony Bourdain reruns. RIP!",
    },
    {
      firstName: "Bobby",
      image:
        "https://d.newsweek.com/en/full/1590409/beard-man-facial-hair-stock-getty.jpg?w=1600&h=1600&q=88&f=f7fd5631bba6e5b25a78f94178266587",
      location: "Colorado Springs, CO",
      age: 33,
      gender: "Male",
      antibodies: false,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore: "Lawn bowling, horseback riding",
      hobbiesAfter:
        "Beard maintenance, grilling",
    },
    {
      firstName: "Pablo",
      image:
        "https://stockdutchdesign.com/wp-content/uploads/2019/02/journal-get-to-kno-jeroen-stock-800x1203.jpg",
      location: "New York, NY",
      age: 45,
      gender: "Male",
      antibodies: false,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore: "Taking you out to dinner",
      hobbiesAfter:
        "Buying you dinner on Postmates",
    },
    {
      firstName: "Robbie",
      image:
        "https://i.guim.co.uk/img/media/8bd61de3e4f10f40d49bf9b95c6971dd23c6d232/0_0_4724_2835/master/4724.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=0a96767017fbad780ecf4d73e290c04c",
      location: "Cleveland, OH",
      age: 36,
      gender: "Male",
      antibodies: false,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore: "Golf, video games",
      hobbiesAfter:
        "Panic buying hand made trench coats on Etsy",
    },
    {
      firstName: "Daniel",
      image:
        "https://a9p9n2x2.stackpathcdn.com/wp-content/blogs.dir/1/files/2019/12/Tony-Elion-Jr.-vega060519_02420-2-1024x802.jpg",
      location: "Oakland, CA",
      age: 34,
      gender: "Male",
      antibodies: false,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore: "Lawnmowing",
      hobbiesAfter:
        "Playing the jazz flute, baking cupcakes for my mom",
    },
    {
      firstName: "Janae",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTlAwa-cCuw68RzViOwIon6-FH-N3rnLRe1MA&usqp=CAU",
      location: "Raleigh, NC",
      age: 27,
      gender: "Female",
      antibodies: false,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore: "Punk shows, watching the Bachelor with my roommate",
      hobbiesAfter:
        "Graphic design and hot cheetos. :)",
    }
  ];

  await User.insertMany(users);
  console.log("Created some Users, yeehaw!");
};
const run = async () => {
  await main();
  db.close();
};

run();
