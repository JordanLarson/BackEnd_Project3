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
      firstName: "Chad",
      image:
        "https://pbs.twimg.com/profile_images/1226721327064735749/sAIKusXK_400x400.jpg",
      location: "Louisville, Kentucky",
      age: 28,
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
      hobbiesBefore:
        "spray-tanning, spiking my hair, working out strictly my upperbody",
      hobbiesAfter:
        "using cheetoh dust as makeup, doubting the reality of coronavirus, endangering others to viruses",
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
