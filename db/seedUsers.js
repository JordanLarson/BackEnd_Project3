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
      firstName: "Cleatos",
      image:
        "https://i.pinimg.com/originals/39/03/e1/3903e1cfde9929df333b26047b66b4c6.jpg",
      location: "Squirrelville, LA",
      age: 45,
      gender: "Male",
      antibodies: true,
      likesYou: true,
      isFavorite: false,
      hobbiesBefore: "playing hide-and-seek, catfishing, wearing camoflauge",
      hobbiesAfter: "taking long walks mask-less, cribbage, being a jerk",
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
  ];

  await User.insertMany(users);
  console.log("Created some Users, yeehaw!");
};
const run = async () => {
  await main();
  db.close();
};

run();
