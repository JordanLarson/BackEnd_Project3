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
      hobbiesAfter: "Netflix & red wine",
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
      hobbiesAfter: "Peloton classes, using my salad spinner",
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
      hobbiesAfter: "Animation, riding my unicycle, birding",
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
      hobbiesAfter: "Gardening, poetry",
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
      hobbiesAfter: "Zoom dating, grilling, darts",
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
      hobbiesAfter: "Watching murder mysteries with my cat. Meow!",
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
      hobbiesAfter: "shredding on the guitar in my garage",
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
      hobbiesBefore:
        "Riding my motorcycle, eating tacos, visiting my local museum",
      hobbiesAfter: "Eating LOTS of tacos, sit ups",
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
      hobbiesAfter: "Baking, hot yoga, basket weaving",
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
      hobbiesAfter: "Sitting on my couch staring listlessly at the TV",
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
      hobbiesAfter: "Still working endlessly",
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
      hobbiesAfter:
        "eating pizza rolls, snacking on cheetohs, binge-watching Gilmore Girls",
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
        "Craft beer, crossfit, and my miniature Schnauzer Miss Bluebell",
      hobbiesAfter: "Testing myself for COVID-19",
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
      hobbiesBefore: "Eating soft serve, looking at cloud shapes",
      hobbiesAfter: "Polishing my silverware. So soothing!",
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
        "eating oreos, being an all-around bad person, bothering women",
      hobbiesAfter: "eating tons of oreos, frisbee, waxing my eyebrows",
    },

    {
      firstName: "Meghan",
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
      hobbiesAfter: "Making custom pasta headpieces",
    },
    {
      firstName: "Elon",
      image:
        "https://specials-images.forbesimg.com/imageserve/5e50238b765d4500072ce14c/960x0.jpg?cropX1=0&cropX2=3000&cropY1=224&cropY2=1911",
      location: "Los Angeles, CA",
      age: 49,
      gender: "male",
      antibodies: true,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore: "Thinking, building rockets, renewable energy",
      hobbiesAfter: "Terraforming, Grimes",
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
      hobbiesAfter:
        "mukbang, playing pokemon-go in my house, internet stalking",
    },

    {


      "firstName": "Jasper",
      "image": "https://res.cloudinary.com/dz449ufvx/image/upload/v1595028326/Profile%20images/e5b80691-4292-4e3b-8e1e-7c5094bc3793_spr5y7.jpg",
      "location": "Miami,Fl",
      "age": 25 ,
      "gender": "male",
      "antibodies": true,
      "likesYou": true,
      "isFavorite": true,
      "hobbiesBefore": "concerts, having drinks with my bros, frat parties ",
      "hobbiesAfter": "fortnite, walkin my dog gizmo",
                   
                   
                   

   },
   {


      "firstName": "Destiny",
      "image": "https://res.cloudinary.com/dz449ufvx/image/upload/v1595028137/Profile%20images/966e5b2c83518820c7ea7ece6acddee6_brna16.jpg",
      "location": "Houston,Tx",
      "age": 24,
      "gender": "female",
      "antibodies": true,
      "likesYou": true,
      "isFavorite": false,
      "hobbiesBefore": "teaching cheerleading, shopping, planning trips with my girls",
      "hobbiesAfter": "reading, factimeing with my friends, spending time with my friends",
                   
                   
                   

   },
   {


      "firstName": "Jonte",
      "image": "https://res.cloudinary.com/dz449ufvx/image/upload/v1595028055/Profile%20images/original_vwhwd0.jpg",
      "location": "Atlanta,Ga",
      "age": 21,
      "gender": "male",
      "antibodies": true,
      "likesYou": true,
      "isFavorite": false,
      "hobbiesBefore": "writing music, studio sessions,vibing",
      "hobbiesAfter": "writing music,studio sessions, vibing",
                   
                   
                   

   },
   {


      "firstName": "Carrie",
      "image": "https://res.cloudinary.com/dz449ufvx/image/upload/v1595029714/Profile%20images/49534cb5ed985fd60b12ea372732b866_zuya61.png",
      "location": "Nashville,Tn",
      "age": 21,
      "gender": "female",
      "antibodies": true,
      "likesYou": true,
      "isFavorite": false,
      "hobbiesBefore": "performing with my band,family cookouts",
      "hobbiesAfter": "studying biology, spending time with my cat",
                   
                   
                   

   },
   {


      "firstName": "Trishanne",
      "image": "https://res.cloudinary.com/dz449ufvx/image/upload/v1595027651/Profile%20images/francis_angelyn_logo2020_nna9mg.jpg",
      "location": "Dallas,Tx",
      "age": 31,
      "gender": "female",
      "antibodies": true,
      "likesYou": true,
      "isFavorite": false,
      "hobbiesBefore": "going to my sons little league games, having girls night out",
      "hobbiesAfter": "spending time with my son, yoga",
                   
                   
                   

   },
   {


      "firstName": "Frank",
      "image": "https://res.cloudinary.com/dz449ufvx/image/upload/v1595027743/Profile%20images/s-l300_qwv8bq.jpg",
      "location": "Birmingham,Al",
      "age": 26,
      "gender": "male",
      "antibodies": true,
      "likesYou": true,
      "isFavorite": true,
      "hobbiesBefore": "working",
      "hobbiesAfter": "learning masonary",
                   
                   
                   

   },
   {


      "firstName": "Stephanie",
      "image": "https://res.cloudinary.com/dz449ufvx/image/upload/v1595028183/Profile%20images/original_irrrdo.jpg",
      "location": "Los Angeles,Ca",
      "age": 29,
      "gender": "female",
      "antibodies": true,
      "likesYou": true,
      "isFavorite": false,
      "hobbiesBefore": "going to the beach, blading",
      "hobbiesAfter": "long jogs, meditation sessions",
                   
                   
                   

   },
   {


      "firstName": "Brittany",
      "image": "https://res.cloudinary.com/dz449ufvx/image/upload/v1595028116/Profile%20images/Cute-girl-and-nice-makeup.-I-love-it_kt7ymi.jpg",
      "location": "Los Angeles,Ca",
      "age": 27,
      "gender": "female",
      "antibodies": true,
      "likesYou": true,
      "isFavorite": false,
      "hobbiesBefore": "casting calls, photoshoots",
      "hobbiesAfter": "none",
                   
                   
                   

   },
   {


      "firstName": "Karra",
      "image": "https://res.cloudinary.com/dz449ufvx/image/upload/v1595028686/Profile%20images/b8a5c01d9ee896bff937bd108a1ad5f7_q4dkwb.jpg",
      "location": "Seattle,Wa",
      "age": 37,
      "gender": "female",
      "antibodies": true,
      "likesYou": true,
      "isFavorite": false,
      "hobbiesBefore": "cooking,reading,entertaining company",
      "hobbiesAfter": "honestly the same as before",
                   
                   
                   

   },
   {


      "firstName": "Michael",
      "image": "https://res.cloudinary.com/dz449ufvx/image/upload/v1595027732/Profile%20images/72046500e6bb23c65a6896dda725a8dd-prep-boys-preppy-guys_nrjcls.jpg",
      "location": "Chicago,Il",
      "age": 25,
      "gender": "male",
      "antibodies": true,
      "likesYou": true,
      "isFavorite": false,
      "hobbiesBefore": "comedy shows, amusement parks",
      "hobbiesAfter": "drinking losts of beer",
                   
                   
                   

   },
   {


      "firstName": "Derrick",
      "image": "https://res.cloudinary.com/dz449ufvx/image/upload/v1595027949/Profile%20images/FernandoPastawski_1000_mnvdsr.jpg",
      "location": "Newark,Nj",
      "age": 27,
      "gender": "male",
      "antibodies": true,
      "likesYou": true,
      "isFavorite": false,
      "hobbiesBefore": "gamer, eating pizza",
      "hobbiesAfter": "trying to explore new things outside of gaming",
                   
                   
                   

   },
   {


      "firstName": "Fernando",
      "image": "https://res.cloudinary.com/dz449ufvx/image/upload/v1595028483/Profile%20images/7fc229525c27db41909a5724151c8f53_tkhxie.jpg",
      "location": "Miami,Florida",
      "age": 23,
      "gender": "male",
      "antibodies": true,
      "likesYou": true,
      "isFavorite": false,
      "hobbiesBefore": "dancing, having drinks,",
      "hobbiesAfter": "cyber dating",
                   
                   
                   

   },
   {


      "firstName": "Austin",
      "image": "https://res.cloudinary.com/dz449ufvx/image/upload/v1595028300/Profile%20images/4-IZ43Lw_400x400_xlvsct.jpg",
      "location": "Oklahoma City,Oklahoma",
      "age": 29,
      "gender": "male",
      "antibodies": true,
      "likesYou": true,
      "isFavorite": false,
      "hobbiesBefore": "cookouts, dance classes",
      "hobbiesAfter": "watching sci-fi shows, making prank phone calls",
                   
                   
                   

   },
   {


      "firstName": "Brenda",
      "image": "https://res.cloudinary.com/dz449ufvx/image/upload/v1595028714/Profile%20images/a8f1983725c88ecd2ab22658bb026121_fjkbzx.jpg",
      "location": "Raleigh,Nc",
      "age": 39,
      "gender": "female",
      "antibodies": true,
      "likesYou": true,
      "isFavorite": false,
      "hobbiesBefore": "hanging out with the neighbors, having a beer with my dad",
      "hobbiesAfter": "learning to knit, talking on the phone with my mom",
                   
                   
                   

   },
   {


      "firstName": "Alexis",
      "image": "https://res.cloudinary.com/dz449ufvx/image/upload/v1595029015/Profile%20images/black-is-beautiful-31_scnjkf.jpg",
      "location": "Dallas,Tx",
      "age": 26,
      "gender": "male",
      "antibodies": true,
      "likesYou": true,
      "isFavorite": false,
      "hobbiesBefore": "traveling, brunch dates",
      "hobbiesAfter": "catching up on how to get away with murder, reading more",
                   
                   
                   

   },
   {


      "firstName": "Gina",
      "image": "https://res.cloudinary.com/dz449ufvx/image/upload/v1595026770/Profile%20images/city-model_CCTUWYOXSG_ceyvgg.jpg",
      "location": "New York City",
      "age": 24,
      "gender": "female",
      "antibodies": true,
      "likesYou": true,
      "isFavorite": false,
      "hobbiesBefore": "going to museums, park dates",
      "hobbiesAfter": "cyber dating, learning to cook more",
                   
                   
                   

   },
   {


      "firstName": "Ron",
      "image": "https://res.cloudinary.com/dz449ufvx/image/upload/v1595028074/Profile%20images/85754055-cd1f-4f8e-b460-2920b02bc7c6-m_bxkkuf.jpg",
      "location": "Atlanta,Ga",
      "age": 33,
      "gender": "male",
      "antibodies": true,
      "likesYou": true,
      "isFavorite": false,
      "hobbiesBefore": "going to the gym, dating, traveling",
      "hobbiesAfter": "working out, learning forex",
                   
                   
                   

   },
   {


      "firstName": "Alonzo",
      "image": "https://res.cloudinary.com/dz449ufvx/image/upload/v1595027864/Profile%20images/photo-1563122870-6b0b48a0af09_v6i79t.jpg",
      "location": "Los, Angeles",
      "age": 30,
      "gender": "male",
      "antibodies": true,
      "likesYou": true,
      "isFavorite": false,
      "hobbiesBefore": "dancing, hanging with friends, eating at restauraunts",
      "hobbiesAfter": "started a new podcast",
                   
                   
                   

   },
   {


      "firstName": "Kenny",
      "image": "https://res.cloudinary.com/dz449ufvx/image/upload/v1595029814/Profile%20images/cute-guy-beach-lifestyle-portrait-happy-successful-confident-young-man-shirt-open-32432122_w3gazh.jpg",
      "location": "San Diego,Ca",
      "age": 31,
      "gender": "male",
      "antibodies": true,
      "likesYou": true,
      "isFavorite": false,
      "hobbiesBefore": "shopping, traveling, hanging out on the beach",
      "hobbiesAfter": "designing more, just started a new clothing line",
                   
                   
                   

   },
   {


      "firstName": "Valencia",
      "image": "https://res.cloudinary.com/dz449ufvx/image/upload/v1595029880/Profile%20images/il_570xN.1906261452_2kp9_ezcddo.jpg",
      "location": "Pheonix, Az",
      "age": 26,
      "gender": "female",
      "antibodies": true,
      "likesYou": true,
      "isFavorite": false,
      "hobbiesBefore": "working out with friends, playing with my niece and nephew, going to theme parks",
      "hobbiesAfter": "watching tv, enjoying glasses of wine and listening to music",
                   
                   
                   

   },
   {


      "firstName": "Monica",
      "image": "https://res.cloudinary.com/dz449ufvx/image/upload/v1595029915/Profile%20images/rs_1080x1350-181010160855-1080x1350-Jessie-James-Decker_esumit.jpg",
      "location": "Oklahoma City,Oklahoma",
      "age": 35,
      "gender": "female",
      "antibodies": true,
      "likesYou": true,
      "isFavorite": false,
      "hobbiesBefore": "road trips, swimming, having sushi with the girls",
      "hobbiesAfter": "meditating, learning more about myself, volunteering at clinics",
                   
                   
                   

   },
   {


      "firstName": "Wade",
      "image": "https://res.cloudinary.com/dz449ufvx/image/upload/v1595028045/Profile%20images/cute-hot-guys-Favim.com-6098380_rcmtp0.jpg",
      "location": "Detroit,Il",
      "age": 24,
      "gender": "male",
      "antibodies": true,
      "likesYou": true,
      "isFavorite": false,
      "hobbiesBefore": "photoshoots, networking events, gym",
      "hobbiesAfter": "created a youtube channel about a day in the life of Wade.",
                   
                   
                   

   },
   {


      "firstName": "Kelly",
      "image": "https://res.cloudinary.com/dz449ufvx/image/upload/v1595028159/Profile%20images/cute-girls-with-curly-hair-3_gzvnou.jpg",
      "location": "Las Vegas, Nv",
      "age": 28,
      "gender": "female",
      "antibodies": true,
      "likesYou": true,
      "isFavorite": false,
      "hobbiesBefore": "traveling to salt lake city to see my bestie, dining out",
      "hobbiesAfter": "drinking lots and lots of wine, cuddling up to a book at night",
                   
                   
                   

   },
   {


      "firstName": "Boomer",
      "image": "https://res.cloudinary.com/dz449ufvx/image/upload/v1595028045/Profile%20images/9378e612246fee7b666319f01e37426d_jsallr.jpg",
      "location": "Atlanta, Ga",
      "age": 26,
      "gender": "male",
      "antibodies": true,
      "likesYou": true,
      "isFavorite": false,
      "hobbiesBefore": "going to basketball games, gym, partying with my friends",
      "hobbiesAfter": "playing 2k, spending time with my parents, writing a sci-fi novel",
                   
                   
                   

   },
   {


      "firstName": "Lionel",
      "image": "https://res.cloudinary.com/dz449ufvx/image/upload/v1595027850/Profile%20images/581485_jjrn8g.jpg",
      "location": "San Fran, Ca",
      "age": 33,
      "gender": "male",
      "antibodies": true,
      "likesYou": true,
      "isFavorite": false,
      "hobbiesBefore": "dinner dates, traveling, shopping, theme parks",
      "hobbiesAfter": "working from home more, hanging with brother, learning to cook new cuisines",
                   
                   
                   

   },

    {
      firstName: "Cleatos",
      image:
        "https://i.pinimg.com/originals/39/03/e1/3903e1cfde9929df333b26047b66b4c6.jpg",
      location: "Squirrelville, LA",
      age: 45,
      gender: "Male",
      antibodies: true,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore:
        "playing hide-and-seek, catfishing women, wearing camoflauge",
      hobbiesAfter:
        "taking long walks mask-less, cribbage, being an all around jerk",
    },
    {
      firstName: "Clyde",
      image:
        "https://ewscripps.brightspotcdn.com/dims4/default/a0743f7/2147483647/strip/true/crop/640x360+0+60/resize/1280x720!/quality/90/?url=https%3A%2F%2Fmediaassets.wcpo.com%2Fphoto%2F2013%2F08%2F07%2Fclyde3_1375890161061_696769_ver1.0_640_480.jpg",
      location: "Los Angeles, CA",
      age: 48,
      gender: "Male",
      antibodies: false,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore:
        "watching law & order, researching the law, standing up for people",
      hobbiesAfter:
        "taking long walks on the beach, running an internet business, secretly loving kittens",
    },
    {
      firstName: "Jasper",
      image:
        "https://res.cloudinary.com/dz449ufvx/image/upload/v1595028326/Profile%20images/e5b80691-4292-4e3b-8e1e-7c5094bc3793_spr5y7.jpg",
      location: "Miami,Fl",
      age: 25,
      gender: "Male",
      antibodies: true,
      likesYou: true,
      isFavorite: true,
      hobbiesBefore: "concerts, having drinks with my bros, frat parties ",
      hobbiesAfter: "fortnite, walkin my dog gizmo",
    },
    {
      firstName: "Destiny",
      image:
        "https://res.cloudinary.com/dz449ufvx/image/upload/v1595028137/Profile%20images/966e5b2c83518820c7ea7ece6acddee6_brna16.jpg",
      location: "Houston,Tx",
      age: 24,
      gender: "female",
      antibodies: true,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore:
        "teaching cheerleading, shopping, planning trips with my girls",
      hobbiesAfter:
        "reading, facetiming with my friends, spending time with my friends",
    },
    {
      firstName: "Jonte",
      image:
        "https://res.cloudinary.com/dz449ufvx/image/upload/v1595028055/Profile%20images/original_vwhwd0.jpg",
      location: "Atlanta,Ga",
      age: 21,
      gender: "male",
      antibodies: true,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore: "writing music, studio sessions,vibing",
      hobbiesAfter: "writing music,studio sessions, vibing",
    },
    {
      firstName: "Carrie",
      image:
        "https://res.cloudinary.com/dz449ufvx/image/upload/v1595029714/Profile%20images/49534cb5ed985fd60b12ea372732b866_zuya61.png",
      location: "Nashville,Tn",
      age: 21,
      gender: "female",
      antibodies: false,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore: "performing with my band,family cookouts",
      hobbiesAfter: "studying biology, spending time with my cat",
    },
    {
      firstName: "Trishanne",
      image:
        "https://res.cloudinary.com/dz449ufvx/image/upload/v1595027651/Profile%20images/francis_angelyn_logo2020_nna9mg.jpg",
      location: "Dallas,Tx",
      age: 31,
      gender: "female",
      antibodies: true,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore:
        "going to my sons little league games, having a girls night out, drinking organic wine",
      hobbiesAfter: "spending time with my son, yoga",
    },
    {
      firstName: "Frank",
      image:
        "https://res.cloudinary.com/dz449ufvx/image/upload/v1595027743/Profile%20images/s-l300_qwv8bq.jpg",
      location: "Birmingham,Al",
      age: 26,
      gender: "male",
      antibodies: true,
      likesYou: true,
      isFavorite: true,
      hobbiesBefore: "working",
      hobbiesAfter: "learning masonary",
    },
    {
      firstName: "Stephanie",
      image:
        "https://res.cloudinary.com/dz449ufvx/image/upload/v1595028183/Profile%20images/original_irrrdo.jpg",
      location: "Los Angeles,Ca",
      age: 29,
      gender: "female",
      antibodies: true,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore: "going to the beach, blading",
      hobbiesAfter: "long jogs, meditation sessions",
    },
    {
      firstName: "Brittany",
      image:
        "https://res.cloudinary.com/dz449ufvx/image/upload/v1595028116/Profile%20images/Cute-girl-and-nice-makeup.-I-love-it_kt7ymi.jpg",
      location: "Los Angeles,Ca",
      age: 27,
      gender: "female",
      antibodies: true,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore: "casting calls, photoshoots",
      hobbiesAfter: "none",
    },
    {
      firstName: "Karra",
      image:
        "https://res.cloudinary.com/dz449ufvx/image/upload/v1595028686/Profile%20images/b8a5c01d9ee896bff937bd108a1ad5f7_q4dkwb.jpg",
      location: "Seattle,Wa",
      age: 37,
      gender: "female",
      antibodies: true,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore: "cooking,reading,entertaining company",
      hobbiesAfter: "honestly the same as before",
    },
    {
      firstName: "Michael",
      image:
        "https://res.cloudinary.com/dz449ufvx/image/upload/v1595027732/Profile%20images/72046500e6bb23c65a6896dda725a8dd-prep-boys-preppy-guys_nrjcls.jpg",
      location: "Chicago,Il",
      age: 25,
      gender: "male",
      antibodies: false,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore: "comedy shows, amusement parks",
      hobbiesAfter: "drinking lots of beer",
    },
    {
      firstName: "Derrick",
      image:
        "https://res.cloudinary.com/dz449ufvx/image/upload/v1595027949/Profile%20images/FernandoPastawski_1000_mnvdsr.jpg",
      location: "Newark,Nj",
      age: 27,
      gender: "male",
      antibodies: true,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore: "gamer, eating pizza",
      hobbiesAfter: "trying to explore new things outside of gaming",
    },
    {
      firstName: "Fernando",
      image:
        "https://res.cloudinary.com/dz449ufvx/image/upload/v1595028483/Profile%20images/7fc229525c27db41909a5724151c8f53_tkhxie.jpg",
      location: "Miami,Florida",
      age: 23,
      gender: "male",
      antibodies: false,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore: "dancing, having drinks,",
      hobbiesAfter: "cyber dating",
    },
    {
      firstName: "Austin",
      image:
        "https://res.cloudinary.com/dz449ufvx/image/upload/v1595028300/Profile%20images/4-IZ43Lw_400x400_xlvsct.jpg",
      location: "Oklahoma City,Oklahoma",
      age: 29,
      gender: "male",
      antibodies: true,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore: "cookouts, dance classes",
      hobbiesAfter: "watching sci-fi shows, making prank phone calls",
    },
    {
      firstName: "Brenda",
      image:
        "https://res.cloudinary.com/dz449ufvx/image/upload/v1595028714/Profile%20images/a8f1983725c88ecd2ab22658bb026121_fjkbzx.jpg",
      location: "Raleigh,Nc",
      age: 39,
      gender: "female",
      antibodies: false,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore:
        "hanging out with the neighbors, having a beer with my dad",
      hobbiesAfter: "learning to knit, talking on the phone with my mom",
    },
    {
      firstName: "Alexis",
      image:
        "https://res.cloudinary.com/dz449ufvx/image/upload/v1595029015/Profile%20images/black-is-beautiful-31_scnjkf.jpg",
      location: "Dallas,Tx",
      age: 26,
      gender: "male",
      antibodies: true,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore: "traveling, brunch dates",
      hobbiesAfter: "catching up on how to get away with murder, reading more",
    },
    {
      firstName: "Gina",
      image:
        "https://res.cloudinary.com/dz449ufvx/image/upload/v1595026770/Profile%20images/city-model_CCTUWYOXSG_ceyvgg.jpg",
      location: "New York City",
      age: 24,
      gender: "female",
      antibodies: true,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore: "going to museums, park dates",
      hobbiesAfter: "cyber dating, learning to cook more",
    },
    {
      firstName: "Ron",
      image:
        "https://res.cloudinary.com/dz449ufvx/image/upload/v1595028074/Profile%20images/85754055-cd1f-4f8e-b460-2920b02bc7c6-m_bxkkuf.jpg",
      location: "Atlanta,Ga",
      age: 33,
      gender: "male",
      antibodies: true,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore: "going to the gym, dating, traveling",
      hobbiesAfter: "working out, learning forex",
    },
    {
      firstName: "Alonzo",
      image:
        "https://res.cloudinary.com/dz449ufvx/image/upload/v1595027864/Profile%20images/photo-1563122870-6b0b48a0af09_v6i79t.jpg",
      location: "Los, Angeles",
      age: 30,
      gender: "male",
      antibodies: true,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore: "dancing, hanging with friends, eating at restauraunts",
      hobbiesAfter: "hosting my new podcast",
    },
    {
      firstName: "Kenny",
      image:
        "https://res.cloudinary.com/dz449ufvx/image/upload/v1595029814/Profile%20images/cute-guy-beach-lifestyle-portrait-happy-successful-confident-young-man-shirt-open-32432122_w3gazh.jpg",
      location: "San Diego,Ca",
      age: 31,
      gender: "male",
      antibodies: true,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore: "shopping, traveling, hanging out on the beach",
      hobbiesAfter: "designing more, focusing on my new clothing line",
    },
    {
      firstName: "Valencia",
      image:
        "https://res.cloudinary.com/dz449ufvx/image/upload/v1595029880/Profile%20images/il_570xN.1906261452_2kp9_ezcddo.jpg",
      location: "Pheonix, Az",
      age: 26,
      gender: "female",
      antibodies: true,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore:
        "working out with friends, playing with my niece and nephew, going to theme parks",
      hobbiesAfter:
        "watching tv, enjoying glasses of wine and listening to music",
    },
    {
      firstName: "Monica",
      image:
        "https://res.cloudinary.com/dz449ufvx/image/upload/v1595029915/Profile%20images/rs_1080x1350-181010160855-1080x1350-Jessie-James-Decker_esumit.jpg",
      location: "Oklahoma City,Oklahoma",
      age: 35,
      gender: "female",
      antibodies: true,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore: "road trips, swimming, having sushi with the girls",
      hobbiesAfter:
        "meditating, learning more about myself, volunteering at clinics",
    },
    {
      firstName: "Wade",
      image:
        "https://res.cloudinary.com/dz449ufvx/image/upload/v1595028045/Profile%20images/cute-hot-guys-Favim.com-6098380_rcmtp0.jpg",
      location: "Detroit,Il",
      age: 24,
      gender: "male",
      antibodies: true,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore: "photoshoots, networking events, gym",
      hobbiesAfter:
        "created a youtube channel about a day in the life of Wade.",
    },
    {
      firstName: "Kelly",
      image:
        "https://res.cloudinary.com/dz449ufvx/image/upload/v1595028159/Profile%20images/cute-girls-with-curly-hair-3_gzvnou.jpg",
      location: "Las Vegas, Nv",
      age: 28,
      gender: "female",
      antibodies: true,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore: "traveling to salt lake city to see my bestie, dining out",
      hobbiesAfter:
        "drinking lots and lots of wine, cuddling up to a book at night",
    },
    {
      firstName: "Boomer",
      image:
        "https://res.cloudinary.com/dz449ufvx/image/upload/v1595028045/Profile%20images/9378e612246fee7b666319f01e37426d_jsallr.jpg",
      location: "Atlanta, Ga",
      age: 26,
      gender: "male",
      antibodies: true,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore: "going to basketball games, gym, partying with my friends",
      hobbiesAfter:
        "playing 2k, spending time with my parents, writing a sci-fi novel",
    },
    {
      firstName: "Lionel",
      image:
        "https://res.cloudinary.com/dz449ufvx/image/upload/v1595027850/Profile%20images/581485_jjrn8g.jpg",
      location: "San Fran, Ca",
      age: 33,
      gender: "male",
      antibodies: true,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore: "dinner dates, traveling, shopping, theme parks",
      hobbiesAfter:
        "working from home more, hanging with brother, learning to cook new cuisines",
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
      hobbiesAfter: "Online shopping, walking around the neighborhood",
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
      hobbiesAfter: "Watching Anthony Bourdain reruns. RIP!",
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
      hobbiesBefore:
        "watching law & order, researching the law, standing up for people",
      hobbiesAfter:
        "taking long walks on the beach, running an internet business, secretly loving kittens",
    },
    {
      firstName: "Karla",
      image:
        "https://prodimage.images-bn.com/pimages/2940148385813_p0_v1_s550x406.jpg",
      location: "Atlanta, GA",
      age: 28,
      gender: "Female",
      antibodies: true,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore: "hurting people, weight-lifting, obstructing justice",
      hobbiesAfter: "knitting , cribbage, slaughtering chicken",
    },
    {
      firstName: "Gladys",
      image:
        "https://d2ebzu6go672f3.cloudfront.net/media/content/images/cr/de8257df-a0ef-42db-93a5-9e6b9ee76ad3.jpg",
      location: "New York, NY",
      age: 39,
      gender: "Female",
      antibodies: false,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore:
        "stetching my neck, attacking people without reaso, obstructing justice",
      hobbiesAfter:
        "Flaunting white privilege, supporting conspiracies, hating anyone with differing views",
    },
    {
      firstName: "Stewie",
      image:
        "https://i.pinimg.com/originals/b3/65/ac/b365ac55a57f4be045e7f1e46c084b13.jpg",
      location: "Scrimp City, NY",
      age: 22,
      gender: "Male",
      antibodies: false,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore: "Lawn bowling, horseback riding",
      hobbiesAfter: "Beard maintenance, grilling",
    },
    {
      firstName: "Pablo",
      image:
        "https://stockdutchdesign.com/wp-content/uploads/2019/02/journal-get-to-kno-jeroen-stock-800x1203.jpg",
      location: "New York, NY",
      age: 45,
      gender: "Male",
      antibodies: true,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore: "Taking you out to dinner",
      hobbiesAfter: "Buying you dinner on Postmates",
    },
    {
      firstName: "Robbie",
      image:
        "https://i.guim.co.uk/img/media/8bd61de3e4f10f40d49bf9b95c6971dd23c6d232/0_0_4724_2835/master/4724.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=0a96767017fbad780ecf4d73e290c04c",
      location: "Cleveland, OH",
      age: 36,
      gender: "Male",
      antibodies: true,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore: "Golf, video games",
      hobbiesAfter: "Panic buying hand made trench coats on Etsy",
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
      hobbiesBefore: "knitting, crocheting, hurting weaklings",
      hobbiesAfter: "chess , cribbage, killing ants wiht magnifying glasses",
    },
    {
      firstName: "Jane",
      image:
        "https://i.pinimg.com/originals/b3/65/ac/b365ac55a57f4be045e7f1e46c084b13.jpg",
      location: "Buffalo, NY",
      age: 27,
      gender: "Female",
      antibodies: true,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore: "Lawnmowing",
      hobbiesAfter: "Playing the jazz flute, baking cupcakes for my mom",
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
      hobbiesBefore: "knitting, crocheting, hurting weaklings",
      hobbiesAfter: "chess , cribbage, killing ants wiht magnifying glasses",
    },
    {
      firstName: "Jessica",
      image:
        "https://pmcvariety.files.wordpress.com/2020/03/sammy-jaye-headshot-sent-to-iheart-2-25-20.jpg",
      location: "San Jose, CA",
      age: 25,
      gender: "Female",
      antibodies: true,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore: "Punk shows, watching the Bachelor with my roommate",
      hobbiesAfter: "Graphic design and hot cheetos. :)",
    },
    {
      firstName: "Meghan",
      image:
        "https://images.unsplash.com/photo-1508002366005-75a695ee2d17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=617&q=80",
      location: "Toronto, CN",
      age: 27,
      gender: "Female",
      antibodies: true,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore:
        "shutting down non-profits, calling out men on their bullshit, publicly embarassing animals",
      hobbiesAfter: "web-design , crocheting, competitive lumberjacking",
    },
    {
      firstName: "Jesabelle",
      image:
        "https://i.pinimg.com/originals/b3/65/ac/b365ac55a57f4be045e7f1e46c084b13.jpg",
      location: "Buffalo, NY",
      age: 22,
      gender: "Female",
      antibodies: false,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore: "partying, styling clothes, going to raves",
      hobbiesAfter: "sleeping, baking cookies, journaling",
    },
    {
      firstName: "Nataly",
      image:
        "https://images.unsplash.com/photo-1517090186835-e348b621c9ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      location: "Miami, FL",
      age: 22,
      gender: "Female",
      antibodies: false,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore:
        "spilling punch at parties, teamwork, fighting other women on black friday for goods",
      hobbiesAfter: "chess , cribbage, killing ants with magnifying glasses",
    },
    {
      firstName: "Catherine",
      image:
        "https://m.media-amazon.com/images/M/MV5BMTAzOTc1NjU4MjFeQTJeQWpwZ15BbWU2MDc3NjgzMw@@._V1_UX214_CR0,0,214,317_AL_.jpg",
      location: "Campbell, CA",
      age: 28,
      gender: "Female",
      antibodies: false,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore: "knitting, crocheting, hurting weaklings",
      hobbiesAfter: "chess , cribbage, killing ants with magnifying glasses",
    },
    {
      firstName: "Marybeth",
      image:
        "https://i.pinimg.com/originals/f7/fe/76/f7fe7611afd7edadf4a9d43d3e3330fd.jpg",
      location: "Edina, MN",
      age: 52,
      gender: "Female",
      antibodies: true,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore:
        "playing hide and seek, teaching young girls how to code, jogging",
      hobbiesAfter:
        "bird watching, going on picnics, streaming Valorant on twitch",
    },
    {
      firstName: "Kennedy",
      image:
        "https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      location: "Portland, OR",
      age: 20,
      gender: "Female",
      antibodies: true,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore: "partying, hairstylist, makeup guru",
      hobbiesAfter: "praising Jesus, going on picnics, horseback riding",
    },
    {
      firstName: "Courtney",
      image:
        "https://images.unsplash.com/photo-1520512202623-51c5c53957df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      location: "Washington, DC",
      age: 23,
      gender: "Female",
      antibodies: true,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore:
        "Weightlifting, Drinking soy-based protein, balancing heavy objects over my head",
      hobbiesAfter:
        "Yelling at mask-wearers , blindly supporting Donny Trump, coughing on items in the grocery store",
    },
    {
      firstName: "Charley",
      image:
        "https://e-radio.us/wp-content/uploads/2018/12/1545254694086-gettyimages-1074380836-jpeg.jpg",
      location: "San Jose, CA",
      age: 21,
      gender: "Female",
      antibodies: false,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore: "Baking, bee-keeping, shopping",
      hobbiesAfter:
        "Couponing, writing poetry, harrassing people on internet forums",
    },
    {
      firstName: "Karen",
      image:
        "https://nursingandhealth.asu.edu/sites/default/files/styles/asu_isearch_profile/public/asu_isearch_photos/205351.jpg?itok=S8ELvq5r",
      location: "Dallas, TX",
      age: 45,
      gender: "Female",
      antibodies: true,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore:
        "requesting the manager, complaining about products in walmart, shopping for things I don't need",
      hobbiesAfter:
        "Publicly denying the reality of coronavirus, yelling at my hair-stylist because my hair isn't spiky enough, calling the police on children without business licenses",
    },
    {
      firstName: "Melanie",
      image:
        "https://images.unsplash.com/photo-1568909218940-9ca084ad57de?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      location: "Los Angeles, CA",
      age: 26,
      gender: "Female",
      antibodies: true,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore: "partying, annoying my ex-boyfriend, freelance hand model",
      hobbiesAfter:
        "league of legends streamer, eating junk food, watching funny cat videos",
    },
    {
      firstName: "Jenny",
      image:
        "https://images.unsplash.com/photo-1529008338-310c24f458ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80",
      location: "Syracuse, NY",
      age: 21,
      gender: "Female",
      antibodies: true,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore: "hiking, freelance artist, professional dancer",
      hobbiesAfter: "skateboarding, youtuber, rock climbing",
    },
    {
      firstName: "Ana",
      image:
        "https://images.unsplash.com/photo-1587608213119-1262e12a6da1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=658&q=80",
      location: "Wissahickon, PA",
      age: 29,
      gender: "Female",
      antibodies: true,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore: "ballet instructor, bookkeeping, jogging",
      hobbiesAfter: "watching Friends, reading old novels, gardening",
    },
    {
      firstName: "Martha",
      image:
        "https://images.unsplash.com/flagged/photo-1577474810448-82eb81a48d13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
      location: "Washington, DC",
      age: 77,
      gender: "Female",
      antibodies: false,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore: "taking walks, birdwatching, knitting",
      hobbiesAfter:
        "looking for a new husband, playing around with new smartphone, adopting cats",
    },
    {
      firstName: "Lucia",
      image:
        "https://images.unsplash.com/photo-1514448553123-ddc6ee76fd52?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      location: "Hamptons, NY",
      age: 42,
      gender: "Female",
      antibodies: false,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore: "travelling, photography, modeling for stock photos",
      hobbiesAfter: "going to the beach, gardening, writing poetry",
    },
    {
      firstName: "Elba",
      image:
        "https://images.unsplash.com/photo-1487573884658-a5d3c667584e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=992&q=80",
      location: "New Orleans, LA",
      age: 40,
      gender: "Female",
      antibodies: true,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore:
        "requesting the manager, complaining about products in walmart, shopping for things I don't need",
      hobbiesAfter:
        "Publicly denying the reality of coronavirus, yelling at my hair-stylist because my hair isn't spiky enough, calling the police on children without business licenses",
    },
    {
      firstName: "Sarah",
      image:
        "https://i.pinimg.com/originals/d4/03/95/d4039568844d83fc4f93ec5bab77ae51.jpg",
      location: "San Anotonio, TX",
      age: 25,
      gender: "Female",
      antibodies: false,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore: "hiking, being politically active, tennis, running",
      hobbiesAfter: "Cooking, zoomba classes on zoom, running on treadmills",
    },
    {
      firstName: "Jessabelle",
      image:
        "https://st3.depositphotos.com/2810065/14765/i/1600/depositphotos_147651233-stock-photo-attractive-white-woman-taking-a.jpg",
      location: "Atlanta, GA",
      age: 27,
      gender: "Female",
      antibodies: true,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore: "travelling, styling hair, opera singing",
      hobbiesAfter: "running an online business, fashion, poshmark influencer",
    },
    {
      firstName: "Millie",
      image:
        "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=633&q=80",
      location: "Louisville, KY",
      age: 20,
      gender: "Female",
      antibodies: true,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore: "reading books, drinking coffee, typography",
      hobbiesAfter: "having Brown eyes, thrift shopping, photography",
    },
    {
      firstName: "Jenny",
      image:
        "https://images.unsplash.com/photo-1545133875-55b651cbf4aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80",
      location: "Washington, DC",
      age: 46,
      gender: "Female",
      antibodies: false,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore: "travelling, modelling for stock photos, seamstress",
      hobbiesAfter:
        "drinking tea, self proclaimed sourdough bread master, gardening",
    },
    {
      firstName: "Kat",
      image:
        "https://images.unsplash.com/photo-1505201372024-aedc618d47c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      location: "Washington, DC",
      age: 25,
      gender: "Female",
      antibodies: true,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore: "travelling, being a baddie, drinking boba",
      hobbiesAfter:
        "instagram influencer, writing poetry, selling holistic medicine",
    },
    {
      firstName: "Mia",
      image:
        "https://images.unsplash.com/photo-1499552442814-13341b4aed72?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      location: "Corpus Christi, TX",
      age: 32,
      gender: "Female",
      antibodies: false,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore: "tattoo artist, watching basketball games, being hot",
      hobbiesAfter:
        "fighting with friends on facebook, volunteering at the food pantry, picking up trash on the highways",
    },
    {
      firstName: "Leslie",
      image:
        "https://images.unsplash.com/photo-1559144975-22228b3bb1d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      location: "Washington, DC",
      age: 22,
      gender: "Female",
      antibodies: true,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore: "partying, studying, drinking coffee",
      hobbiesAfter:
        "job seeking, streaming daily life on twitch, selling handmade jewelry",
    },
    {
      firstName: "Aalia",
      image:
        "https://images.unsplash.com/photo-1523824921871-d6f1a15151f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      location: "New York, NY",
      age: 27,
      gender: "Female",
      antibodies: true,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore: "singing , knitting, biking long-distance",
      hobbiesAfter: "playing board-games, yoga, pilates",
    },
    {
      firstName: "Kawhi",
      image: "https://s.hdnux.com/photos/67/23/74/14499638/5/rawImage.jpg",
      location: "San Diego, CA",
      age: 29,
      gender: "Male",
      antibodies: false,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore: "basketball , training, making clutch plays",
      hobbiesAfter:
        "Laughing in private so sportscenter doesn't make fun of me, working out, playing pokemon go",
    },
    {
      firstName: "Dave",
      image: "https://coconuts.co/wp-content/uploads/2019/12/DC.jpg.png",
      location: "Los Angeles, CA",
      age: 47,
      gender: "Male",
      antibodies: true,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore: "comedy , stand-up, calling out hecklers",
      hobbiesAfter: "Eating cheese, quarantining like a normal person",
    },
    {
      firstName: "Michael",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/c/cd/2018-05-12-_Cannes-L%27acteur_Michael_B._Jordan-2721_%2842075892224%29.jpg",
      location: "Morro Bay, CA",
      age: 25,
      gender: "Male",
      antibodies: true,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore: "acting , playing poker, web-development",
      hobbiesAfter: "boxing, jogging, sports",
    },
    {
      firstName: "Johnny",
      image:
        "https://www.askideas.com/media/22/Asian-Man-Funny-Mullet-Hairstyle.jpeg",
      location: "Maui, HI",
      age: 25,
      gender: "Male",
      antibodies: true,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore: "surfing , giving people sick mullets, baking cookies",
      hobbiesAfter:
        "purchasing useless things on ebay, playing the trumpet, producing sick beats",
    },
    {
      firstName: "Tammy",
      image:
        "https://akns-images.eonline.com/eol_images/Entire_Site/2018520/rs_1024x759-180620112018-1024-sandra-oh-killing-eve-3.jpg",
      location: "Friendly, HI",
      age: 42,
      gender: "Female",
      antibodies: true,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore: "Cooking, starting blogs, playing frisbee golf",
      hobbiesAfter: "Baking, working out, building enterprises",
    },
    {
      firstName: "Amaya",
      image:
        "https://images.unsplash.com/photo-1533146692536-e70f31e14b36?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      location: "Seattle, WA",
      age: 19,
      gender: "Female",
      antibodies: false,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore: "studying, volunteering at library, vlogging",
      hobbiesAfter: "watching anime, playing video games, jogging",
    },
    {
      firstName: "Cydney",
      image:
        "https://images.unsplash.com/photo-1525000277017-1acfe322f792?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      location: "Newark, NJ",
      age: 23,
      gender: "Female",
      antibodies: true,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore: "yoga instructor, drinking water, working",
      hobbiesAfter: "running, local sightseeing, lifestyle youtuber",
    },
    {
      firstName: "Rose",
      image:
        "https://images.unsplash.com/photo-1594748845806-a6f561ad841d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      location: "Washington, DC",
      age: 28,
      gender: "Female",
      antibodies: true,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore: "travelling, antiques collector",
      hobbiesAfter: "managing my vintage shop, bike riding, holistic living",
    },
    {
      firstName: "Stacey",
      image:
        "https://images.unsplash.com/photo-1594685304467-f7fb90d2e529?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=642&q=80",
      location: "Orlando, FL",
      age: 30,
      gender: "Female",
      antibodies: true,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore: "watering plants, fashion critic, makeup guru",
      hobbiesAfter: "boscovs model, living like it's 2003, deepening my faith",
    },
    {
      firstName: "Ashlie",
      image:
        "https://images.unsplash.com/photo-1594718178980-b78e82026489?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      location: "Washington, DC",
      age: 27,
      gender: "Female",
      antibodies: true,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore: "Cooking, starting blogs, playing frisbee golf",
      hobbiesAfter: "Baking, working out, building enterprises",
    },
    {
      firstName: "Sandra",
      image:
        "https://www.indiewire.com/wp-content/uploads/2018/01/shutterstock_9327718kd.jpg",
      location: "Chunder, AZ",
      age: 28,
      gender: "Female",
      antibodies: true,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore: "Jogging, golfing, skateboarding",
      hobbiesAfter: "Quarantining, writing letters to family, building APIs",
    },
    {
      firstName: "Bug",
      image:
        "https://images.unsplash.com/photo-1594734053528-51737166aef9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      location: "Portland,OR",
      age: 20,
      gender: "Female",
      antibodies: true,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore: "Jogging, golfing, skateboarding",
      hobbiesAfter: "Quarantining, writing letters to family, building APIs",
    },
    {
      firstName: "Jesse",
      image:
        "https://www.indiewire.com/wp-content/uploads/2018/01/shutterstock_9327718kd.jpg",
      location: "Chunder, AZ",
      age: 28,
      gender: "Female",
      antibodies: true,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore: "Jogging, golfing, skateboarding",
      hobbiesAfter: "Quarantining, writing letters to family, building APIs",
    },
    {
      firstName: "Merill",
      image:
        "https://images.unsplash.com/photo-1594745561149-2211ca8c5d98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      location: "Salt Lake City, UT",
      age: 32,
      gender: "Female",
      antibodies: true,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore: "Jogging, boxing, playing with legos",
      hobbiesAfter: "Quarantining, writing letters to family, building APIs",
    },
    {
      firstName: "Vanesa",
      image:
        "https://images.unsplash.com/photo-1594856165234-fe3d7921b734?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
      location: "Boston, MA",
      age: 24,
      gender: "Female",
      antibodies: false,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore: "eating, travelling, modeling",
      hobbiesAfter: "working on the farm, snacking",
    },
    {
      firstName: "Alanna",
      image:
        "https://images.unsplash.com/photo-1594868881792-1654c383d277?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      location: "Dallas, TX",
      age: 34,
      gender: "Female",
      antibodies: true,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore: "hosting events, jewelry shopping, makeup guru",
      hobbiesAfter:
        "selling courses, social media marketer, instagram influencer",
    },

  ];

  await User.insertMany(users);
  console.log("Created some Users, yeehaw!");
};
const run = async () => {
  await main();
  db.close();
};

run();
