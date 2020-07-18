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
      antibodies: true,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore: "recharging my crystals, ice-skating, craft beer",
      hobbiesAfter: "eating pizza rolls, snacking on cheetohs, binge-watching Gilmore Girls"
    },
    {
      firstName: "Chad",
      image:
        "https://pbs.twimg.com/profile_images/1226721327064735749/sAIKusXK_400x400.jpg",
      location: "Louisville, Kentucky",
      age: 28,
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
      antibodies: false,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore:
        "eating oreos, being an all-around bad person, bothering women",
      hobbiesAfter: "eating tons of oreos, frisbee, waxing my eyebrows",
    },
    {
      firstName: "B-ryan",
      image:
        "https://i.pinimg.com/originals/7b/6d/12/7b6d129552dbe4f1f209eded66daa841.jpg",
      location: "Miami, Florida",
      age: 28,
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
      antibodies: true,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore: "Thinking, building rockets, renewable energy",
      hobbiesAfter:
        "Terraforming, Grimes",
    },
    {
      firstName: "Davey",
      image:
        "https://memestatic1.fjcdn.com/comments/Quotthis+onequot+_fc577b07dfa5dc1b3c30180efa4059a2.jpg",
      location: "Minneapolis, MN",
      age: 28,
      gender: "Male",
      antibodies: true,
      likesYou: true,
      isFavorite: false,
       hobbiesBefore:
        "syling my hair, drinking white-claws, playing the ukelele in public places",
      hobbiesAfter: "mukbang, playing pokemon-go in my house, being a jerk",
      
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
    },
    {
      firstName: "Meghan",
      image: "https://images.unsplash.com/photo-1508002366005-75a695ee2d17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=617&q=80",
      location: "Toronto, CN",
      age: 27,
      gender: "Female",
      antibodies: true,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore:
        "partying, styling clothes, going to raves",
      hobbiesAfter: "sleeping, baking cookies, journaling",
    },
    {
      firstName: "Nataly",
      image: "https://images.unsplash.com/photo-1517090186835-e348b621c9ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      location: "Miami, FL",
      age: 22,
      gender: "Female",
      antibodies: false,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore:
        "playing hide and seek, teaching young girls how to code, jogging",
      hobbiesAfter: "bird watching, going on picnics, streaming Valorant on twitch",
    },
    {
      firstName: "Kennedy",
      image: "https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      location: "Portland, OR",
      age: 20,
      gender: "Female",
      antibodies: true,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore:
        "partying, hairstylist, makeup guru",
      hobbiesAfter: "praising Jesus, going on picnics, horseback riding",
    },
    {
      firstName: "Courtney",
      image: "https://images.unsplash.com/photo-1520512202623-51c5c53957df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      location: "Washington, DC",
      age: 23,
      gender: "Female",
      antibodies: true,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore:
        "partying, walking to museums, makeup guru",
      hobbiesAfter: "skateboarding, social media marketer, instagram influencer",
    },
    {
      firstName: "Melanie",
      image: "https://images.unsplash.com/photo-1568909218940-9ca084ad57de?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      location: "Los Angeles, CA",
      age: 26,
      gender: "Female",
      antibodies: true,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore:
        "partying, annoying my ex-boyfriend, freelance hand model",
      hobbiesAfter: "league of legends streamer, eating junk food, watching funny cat videos",
    },
    {
      firstName: "Jenny",
      image: "https://images.unsplash.com/photo-1529008338-310c24f458ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80",
      location: "Syracuse, NY",
      age: 21,
      gender: "Female",
      antibodies: true,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore:
        "hiking, freelance artist, professional dancer",
      hobbiesAfter: "skateboarding, youtuber, rock climbing",
    },
    {
      firstName: "Ana",
      image: "https://images.unsplash.com/photo-1587608213119-1262e12a6da1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=658&q=80",
      location: "Wissahickon, PA",
      age: 29,
      gender: "Female",
      antibodies: true,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore:
        "ballet instructor, bookkeeping, jogging",
      hobbiesAfter: "watching Friends, reading old novels, gardening",
    },
    {
      firstName: "Martha",
      image: "https://images.unsplash.com/flagged/photo-1577474810448-82eb81a48d13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
      location: "Washington, DC",
      age: 77,
      gender: "Female",
      antibodies: false,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore:
        "taking walks, birdwatching, knitting",
      hobbiesAfter: "looking for a new husband, playing around with new smartphone, adopting cats",
    },
    {
      firstName: "Lucia",
      image: "https://images.unsplash.com/photo-1514448553123-ddc6ee76fd52?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      location: "Hamptons, NY",
      age: 42,
      gender: "Female",
      antibodies: false,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore:
        "travelling, photography, modeling for stock photos",
      hobbiesAfter: "going to the beach, gardening, writing poetry",
    },
    {
      firstName: "Elba",
      image: "https://images.unsplash.com/photo-1487573884658-a5d3c667584e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=992&q=80",
      location: "New Orleans, LA",
      age: 40,
      gender: "Female",
      antibodies: true,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore:
        "travelling, styling hair, opera singing",
      hobbiesAfter: "running an online business, fashion, poshmark influencer",
    },
    {
      firstName: "Millie",
      image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=633&q=80",
      location: "Louisville, KY",
      age: 20,
      gender: "Female",
      antibodies: true,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore:
        "reading books, drinking coffee, typography",
      hobbiesAfter: "having Brown eyes, thrift shopping, photography",
    },
    {
      firstName: "Jenny",
      image: "https://images.unsplash.com/photo-1545133875-55b651cbf4aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80",
      location: "Washington, DC",
      age: 46,
      gender: "Female",
      antibodies: false,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore:
        "travelling, modelling for stock photos, seamstress",
      hobbiesAfter: "drinking tea, self proclaimed sourdough bread master, gardening",
    },
    {
      firstName: "Kat",
      image: "https://images.unsplash.com/photo-1505201372024-aedc618d47c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      location: "Washington, DC",
      age: 25,
      gender: "Female",
      antibodies: true,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore:
        "travelling, being a baddie, drinking boba",
      hobbiesAfter: "instagram influencer, writing poetry, selling holistic medicine",
    },
    {
      firstName: "Mia",
      image: "https://images.unsplash.com/photo-1499552442814-13341b4aed72?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      location: "Corpus Christi, TX",
      age: 32,
      gender: "Female",
      antibodies: false,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore:
        "tattoo artist, watching basketball games, being hot",
      hobbiesAfter: "fighting with friends on facebook, volunteering at the food pantry, picking up trash on the highways",
    },
    {
      firstName: "Leslie",
      image: "https://images.unsplash.com/photo-1559144975-22228b3bb1d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      location: "Washington, DC",
      age: 22,
      gender: "Female",
      antibodies: true,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore:
        "partying, studying, drinking coffee",
      hobbiesAfter: "job seeking, streaming daily life on twitch, selling handmade jewelry",
    },
    {
      firstName: "Aalia",
      image: "https://images.unsplash.com/photo-1523824921871-d6f1a15151f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      location: "New York, NY",
      age: 27,
      gender: "Female",
      antibodies: true,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore:
        "bowling, makeup artist, makeup guru",
      hobbiesAfter: "trying to get a Canadian visa, social media marketer, selling clay pottery",
    },
    {
      firstName: "Amaya",
      image: "https://images.unsplash.com/photo-1533146692536-e70f31e14b36?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      location: "Seattle, WA",
      age: 19,
      gender: "Female",
      antibodies: false,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore:
        "studying, volunteering at library, vlogging",
      hobbiesAfter: "watching anime, playing video games, jogging",
    },
    {
      firstName: "Cydney",
      image: "https://images.unsplash.com/photo-1525000277017-1acfe322f792?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      location: "Newark, NJ",
      age: 23,
      gender: "Female",
      antibodies: true,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore:
        "yoga instructor, drinking water, working",
      hobbiesAfter: "running, local sightseeing, lifestyle youtuber",
    },
    {
      firstName: "Rose",
      image: "https://images.unsplash.com/photo-1594748845806-a6f561ad841d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      location: "Washington, DC",
      age: 28,
      gender: "Female",
      antibodies: true,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore:
        "travelling, antiques collector",
      hobbiesAfter: "managing my vintage shop, bike riding, holistic living",
    },
    {
      firstName: "Stacey",
      image: "https://images.unsplash.com/photo-1594685304467-f7fb90d2e529?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=642&q=80",
      location: "Orlando, FL",
      age: 30,
      gender: "Female",
      antibodies: true,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore:
        "watering plants, fashion critic, makeup guru",
      hobbiesAfter: "boscovs model, living like it's 2003, deepening my faith",
    },
    {
      firstName: "Ashlie",
      image: "https://images.unsplash.com/photo-1594718178980-b78e82026489?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      location: "Washington, DC",
      age: 27,
      gender: "Female",
      antibodies: true,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore:
        "getting worried, applying lipstick vigorously, camping",
      hobbiesAfter: "yelling at people to wear a mask, frequenting thrift shops, camping",
    },
    {
      firstName: "Bug",
      image: "https://images.unsplash.com/photo-1594734053528-51737166aef9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      location: "Portland,OR",
      age: 20,
      gender: "Female",
      antibodies: true,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore:
        "watching theatre shows, acting, visual artist",
      hobbiesAfter: "hiking, selling art prints, photography",
    },
    {
      firstName: "Merill",
      image: "https://images.unsplash.com/photo-1594745561149-2211ca8c5d98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      location: "Salt Lake City, UT",
      age: 32,
      gender: "Female",
      antibodies: true,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore:
        "wine tasting, yoga instructor, writing cookbooks",
      hobbiesAfter: "netflix, hosting zoom yoga classes, baking",
    },
    {
      firstName: "Vanesa",
      image: "https://images.unsplash.com/photo-1594856165234-fe3d7921b734?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
      location: "Boston, MA",
      age: 24,
      gender: "Female",
      antibodies: false,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore:
        "eating, travelling, modeling",
      hobbiesAfter: "working on the farm, snacking",
    },
    {
      firstName: "Alanna",
      image: "https://images.unsplash.com/photo-1594868881792-1654c383d277?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      location: "Dallas, TX",
      age: 34,
      gender: "Female",
      antibodies: true,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore:
        "hosting events, jewelry shopping, makeup guru",
      hobbiesAfter: "selling courses, social media marketer, instagram influencer",
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
