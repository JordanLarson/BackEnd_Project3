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
  ];

  await User.insertMany(users);
  console.log("Created some Users, yeehaw!");
};
const run = async () => {
  await main();
  db.close();
};

run();
