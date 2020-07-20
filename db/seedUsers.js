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
  //   {


  //     "firstName": "Jasper",
  //     "image": "https://res.cloudinary.com/dz449ufvx/image/upload/v1595028326/Profile%20images/e5b80691-4292-4e3b-8e1e-7c5094bc3793_spr5y7.jpg",
  //     "location": "Miami,Fl",
  //     "age": 25 ,
  //     "gender": "male",
  //     "antibodies": true,
  //     "likesYou": true,
  //     "isFavorite": true,
  //     "hobbiesBefore": "concerts, having drinks with my bros, frat parties ",
  //     "hobbiesAfter": "fortnite, walkin my dog gizmo",
                   
                   
                   

  //  },
  //  {


  //     "firstName": "Destiny",
  //     "image": "https://res.cloudinary.com/dz449ufvx/image/upload/v1595028137/Profile%20images/966e5b2c83518820c7ea7ece6acddee6_brna16.jpg",
  //     "location": "Houston,Tx",
  //     "age": 24,
  //     "gender": "female",
  //     "antibodies": true,
  //     "likesYou": true,
  //     "isFavorite": false,
  //     "hobbiesBefore": "teaching cheerleading, shopping, planning trips with my girls",
  //     "hobbiesAfter": "reading, factimeing with my friends, spending time with my friends",
                   
                   
                   

  //  },
  //  {


  //     "firstName": "Jonte",
  //     "image": "https://res.cloudinary.com/dz449ufvx/image/upload/v1595028055/Profile%20images/original_vwhwd0.jpg",
  //     "location": "Atlanta,Ga",
  //     "age": 21,
  //     "gender": "male",
  //     "antibodies": true,
  //     "likesYou": true,
  //     "isFavorite": false,
  //     "hobbiesBefore": "writing music, studio sessions,vibing",
  //     "hobbiesAfter": "writing music,studio sessions, vibing",
                   
                   
                   

  //  },
  //  {


  //     "firstName": "Carrie",
  //     "image": "https://res.cloudinary.com/dz449ufvx/image/upload/v1595029714/Profile%20images/49534cb5ed985fd60b12ea372732b866_zuya61.png",
  //     "location": "Nashville,Tn",
  //     "age": 21,
  //     "gender": "female",
  //     "antibodies": true,
  //     "likesYou": true,
  //     "isFavorite": false,
  //     "hobbiesBefore": "performing with my band,family cookouts",
  //     "hobbiesAfter": "studying biology, spending time with my cat",
                   
                   
                   

  //  },
  //  {


  //     "firstName": "Trishanne",
  //     "image": "https://res.cloudinary.com/dz449ufvx/image/upload/v1595027651/Profile%20images/francis_angelyn_logo2020_nna9mg.jpg",
  //     "location": "Dallas,Tx",
  //     "age": 31,
  //     "gender": "female",
  //     "antibodies": true,
  //     "likesYou": true,
  //     "isFavorite": false,
  //     "hobbiesBefore": "going to my sons little league games, having girls night out",
  //     "hobbiesAfter": "spending time with my son, yoga",
                   
                   
                   

  //  },
  //  {


  //     "firstName": "Frank",
  //     "image": "https://res.cloudinary.com/dz449ufvx/image/upload/v1595027743/Profile%20images/s-l300_qwv8bq.jpg",
  //     "location": "Birmingham,Al",
  //     "age": 26,
  //     "gender": "male",
  //     "antibodies": true,
  //     "likesYou": true,
  //     "isFavorite": true,
  //     "hobbiesBefore": "working",
  //     "hobbiesAfter": "learning masonary",
                   
                   
                   

  //  },
  //  {


  //     "firstName": "Stephanie",
  //     "image": "https://res.cloudinary.com/dz449ufvx/image/upload/v1595028183/Profile%20images/original_irrrdo.jpg",
  //     "location": "Los Angeles,Ca",
  //     "age": 29,
  //     "gender": "female",
  //     "antibodies": true,
  //     "likesYou": true,
  //     "isFavorite": false,
  //     "hobbiesBefore": "going to the beach, blading",
  //     "hobbiesAfter": "long jogs, meditation sessions",
                   
                   
                   

  //  },
  //  {


  //     "firstName": "Brittany",
  //     "image": "https://res.cloudinary.com/dz449ufvx/image/upload/v1595028116/Profile%20images/Cute-girl-and-nice-makeup.-I-love-it_kt7ymi.jpg",
  //     "location": "Los Angeles,Ca",
  //     "age": 27,
  //     "gender": "female",
  //     "antibodies": true,
  //     "likesYou": true,
  //     "isFavorite": false,
  //     "hobbiesBefore": "casting calls, photoshoots",
  //     "hobbiesAfter": "none",
                   
                   
                   

  //  },
  //  {


  //     "firstName": "Karra",
  //     "image": "https://res.cloudinary.com/dz449ufvx/image/upload/v1595028686/Profile%20images/b8a5c01d9ee896bff937bd108a1ad5f7_q4dkwb.jpg",
  //     "location": "Seattle,Wa",
  //     "age": 37,
  //     "gender": "female",
  //     "antibodies": true,
  //     "likesYou": true,
  //     "isFavorite": false,
  //     "hobbiesBefore": "cooking,reading,entertaining company",
  //     "hobbiesAfter": "honestly the same as before",
                   
                   
                   

  //  },
  //  {


  //     "firstName": "Michael",
  //     "image": "https://res.cloudinary.com/dz449ufvx/image/upload/v1595027732/Profile%20images/72046500e6bb23c65a6896dda725a8dd-prep-boys-preppy-guys_nrjcls.jpg",
  //     "location": "Chicago,Il",
  //     "age": 25,
  //     "gender": "male",
  //     "antibodies": true,
  //     "likesYou": true,
  //     "isFavorite": false,
  //     "hobbiesBefore": "comedy shows, amusement parks",
  //     "hobbiesAfter": "drinking losts of beer",
                   
                   
                   

  //  },
  //  {


  //     "firstName": "Derrick",
  //     "image": "https://res.cloudinary.com/dz449ufvx/image/upload/v1595027949/Profile%20images/FernandoPastawski_1000_mnvdsr.jpg",
  //     "location": "Newark,Nj",
  //     "age": 27,
  //     "gender": "male",
  //     "antibodies": true,
  //     "likesYou": true,
  //     "isFavorite": false,
  //     "hobbiesBefore": "gamer, eating pizza",
  //     "hobbiesAfter": "trying to explore new things outside of gaming",
                   
                   
                   

  //  },
  //  {


  //     "firstName": "Fernando",
  //     "image": "https://res.cloudinary.com/dz449ufvx/image/upload/v1595028483/Profile%20images/7fc229525c27db41909a5724151c8f53_tkhxie.jpg",
  //     "location": "Miami,Florida",
  //     "age": 23,
  //     "gender": "male",
  //     "antibodies": true,
  //     "likesYou": true,
  //     "isFavorite": false,
  //     "hobbiesBefore": "dancing, having drinks,",
  //     "hobbiesAfter": "cyber dating",
                   
                   
                   

  //  },
  //  {


  //     "firstName": "Austin",
  //     "image": "https://res.cloudinary.com/dz449ufvx/image/upload/v1595028300/Profile%20images/4-IZ43Lw_400x400_xlvsct.jpg",
  //     "location": "Oklahoma City,Oklahoma",
  //     "age": 29,
  //     "gender": "male",
  //     "antibodies": true,
  //     "likesYou": true,
  //     "isFavorite": false,
  //     "hobbiesBefore": "cookouts, dance classes",
  //     "hobbiesAfter": "watching sci-fi shows, making prank phone calls",
                   
                   
                   

  //  },
  //  {


  //     "firstName": "Brenda",
  //     "image": "https://res.cloudinary.com/dz449ufvx/image/upload/v1595028714/Profile%20images/a8f1983725c88ecd2ab22658bb026121_fjkbzx.jpg",
  //     "location": "Raleigh,Nc",
  //     "age": 39,
  //     "gender": "female",
  //     "antibodies": true,
  //     "likesYou": true,
  //     "isFavorite": false,
  //     "hobbiesBefore": "hanging out with the neighbors, having a beer with my dad",
  //     "hobbiesAfter": "learning to knit, talking on the phone with my mom",
                   
                   
                   

  //  },
  //  {


  //     "firstName": "Alexis",
  //     "image": "https://res.cloudinary.com/dz449ufvx/image/upload/v1595029015/Profile%20images/black-is-beautiful-31_scnjkf.jpg",
  //     "location": "Dallas,Tx",
  //     "age": 26,
  //     "gender": "male",
  //     "antibodies": true,
  //     "likesYou": true,
  //     "isFavorite": false,
  //     "hobbiesBefore": "traveling, brunch dates",
  //     "hobbiesAfter": "catching up on how to get away with murder, reading more",
                   
                   
                   

  //  },
  //  {


  //     "firstName": "Gina",
  //     "image": "https://res.cloudinary.com/dz449ufvx/image/upload/v1595026770/Profile%20images/city-model_CCTUWYOXSG_ceyvgg.jpg",
  //     "location": "New York City",
  //     "age": 24,
  //     "gender": "female",
  //     "antibodies": true,
  //     "likesYou": true,
  //     "isFavorite": false,
  //     "hobbiesBefore": "going to museums, park dates",
  //     "hobbiesAfter": "cyber dating, learning to cook more",
                   
                   
                   

  //  },
  //  {


  //     "firstName": "Ron",
  //     "image": "https://res.cloudinary.com/dz449ufvx/image/upload/v1595028074/Profile%20images/85754055-cd1f-4f8e-b460-2920b02bc7c6-m_bxkkuf.jpg",
  //     "location": "Atlanta,Ga",
  //     "age": 33,
  //     "gender": "male",
  //     "antibodies": true,
  //     "likesYou": true,
  //     "isFavorite": false,
  //     "hobbiesBefore": "going to the gym, dating, traveling",
  //     "hobbiesAfter": "working out, learning forex",
                   
                   
                   

  //  },
  //  {


  //     "firstName": "Alonzo",
  //     "image": "https://res.cloudinary.com/dz449ufvx/image/upload/v1595027864/Profile%20images/photo-1563122870-6b0b48a0af09_v6i79t.jpg",
  //     "location": "Los, Angeles",
  //     "age": 30,
  //     "gender": "male",
  //     "antibodies": true,
  //     "likesYou": true,
  //     "isFavorite": false,
  //     "hobbiesBefore": "dancing, hanging with friends, eating at restauraunts",
  //     "hobbiesAfter": "started a new podcast",
                   
                   
                   

  //  },
  //  {


  //     "firstName": "Kenny",
  //     "image": "https://res.cloudinary.com/dz449ufvx/image/upload/v1595029814/Profile%20images/cute-guy-beach-lifestyle-portrait-happy-successful-confident-young-man-shirt-open-32432122_w3gazh.jpg",
  //     "location": "San Diego,Ca",
  //     "age": 31,
  //     "gender": "male",
  //     "antibodies": true,
  //     "likesYou": true,
  //     "isFavorite": false,
  //     "hobbiesBefore": "shopping, traveling, hanging out on the beach",
  //     "hobbiesAfter": "designing more, just started a new clothing line",
                   
                   
                   

  //  },
  //  {


  //     "firstName": "Valencia",
  //     "image": "https://res.cloudinary.com/dz449ufvx/image/upload/v1595029880/Profile%20images/il_570xN.1906261452_2kp9_ezcddo.jpg",
  //     "location": "Pheonix, Az",
  //     "age": 26,
  //     "gender": "female",
  //     "antibodies": true,
  //     "likesYou": true,
  //     "isFavorite": false,
  //     "hobbiesBefore": "working out with friends, playing with my niece and nephew, going to theme parks",
  //     "hobbiesAfter": "watching tv, enjoying glasses of wine and listening to music",
                   
                   
                   

  //  },
  //  {


  //     "firstName": "Monica",
  //     "image": "https://res.cloudinary.com/dz449ufvx/image/upload/v1595029915/Profile%20images/rs_1080x1350-181010160855-1080x1350-Jessie-James-Decker_esumit.jpg",
  //     "location": "Oklahoma City,Oklahoma",
  //     "age": 35,
  //     "gender": "female",
  //     "antibodies": true,
  //     "likesYou": true,
  //     "isFavorite": false,
  //     "hobbiesBefore": "road trips, swimming, having sushi with the girls",
  //     "hobbiesAfter": "meditating, learning more about myself, volunteering at clinics",
                   
                   
                   

  //  },
  //  {


  //     "firstName": "Wade",
  //     "image": "https://res.cloudinary.com/dz449ufvx/image/upload/v1595028045/Profile%20images/cute-hot-guys-Favim.com-6098380_rcmtp0.jpg",
  //     "location": "Detroit,Il",
  //     "age": 24,
  //     "gender": "male",
  //     "antibodies": true,
  //     "likesYou": true,
  //     "isFavorite": false,
  //     "hobbiesBefore": "photoshoots, networking events, gym",
  //     "hobbiesAfter": "created a youtube channel about a day in the life of Wade.",
                   
                   
                   

  //  },
  //  {


  //     "firstName": "Kelly",
  //     "image": "https://res.cloudinary.com/dz449ufvx/image/upload/v1595028159/Profile%20images/cute-girls-with-curly-hair-3_gzvnou.jpg",
  //     "location": "Las Vegas, Nv",
  //     "age": 28,
  //     "gender": "female",
  //     "antibodies": true,
  //     "likesYou": true,
  //     "isFavorite": false,
  //     "hobbiesBefore": "traveling to salt lake city to see my bestie, dining out",
  //     "hobbiesAfter": "drinking lots and lots of wine, cuddling up to a book at night",
                   
                   
                   

  //  },
  //  {


  //     "firstName": "Boomer",
  //     "image": "https://res.cloudinary.com/dz449ufvx/image/upload/v1595028045/Profile%20images/9378e612246fee7b666319f01e37426d_jsallr.jpg",
  //     "location": "Atlanta, Ga",
  //     "age": 26,
  //     "gender": "male",
  //     "antibodies": true,
  //     "likesYou": true,
  //     "isFavorite": false,
  //     "hobbiesBefore": "going to basketball games, gym, partying with my friends",
  //     "hobbiesAfter": "playing 2k, spending time with my parents, writing a sci-fi novel",
                   
                   
                   

  //  },
  //  {


  //     "firstName": "Lionel",
  //     "image": "https://res.cloudinary.com/dz449ufvx/image/upload/v1595027850/Profile%20images/581485_jjrn8g.jpg",
  //     "location": "San Fran, Ca",
  //     "age": 33,
  //     "gender": "male",
  //     "antibodies": true,
  //     "likesYou": true,
  //     "isFavorite": false,
  //     "hobbiesBefore": "dinner dates, traveling, shopping, theme parks",
  //     "hobbiesAfter": "working from home more, hanging with brother, learning to cook new cuisines",
                   
                   
                   

  //  },
  ];

  await User.insertMany(users);
  console.log("Created some Users, yeehaw!");
};
const run = async () => {
  await main();
  db.close();
};

run();
