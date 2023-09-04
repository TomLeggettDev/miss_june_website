const videosToDisplay = [
    "https://www.youtube.com/embed/RZg4YW95aGU", // Anomaly
    "https://www.youtube.com/embed/eblo1EKr8Kg", // Orchid
    "https://www.youtube.com/embed/v82rNqVLD68", // Enemies
    "https://www.youtube.com/embed/fUy-RDanfPA", // Best Girl
    "https://www.youtube.com/embed/oFRhIvIu-pg", // Twitch
    "https://www.youtube.com/embed/jywXa6sNX3w"  // Anxiety On Repeat
];

const albumCoverImageToDisplay = "/images/BLP_Album_Cover.jpg"; 
const albumStreamURLAmazon = "https://music.amazon.com/albums/B07SR7VY9B";
const albumStreamURLSpotify = "https://open.spotify.com/album/5dISG6rMmqwneX0eErsA9a";
const albumStreamURLAppleMusic = "https://music.apple.com/us/album/bad-luck-party/1467093347";
const albumBuyLink = "https://www.flyingnun.co.nz/products/miss-june-bad-luck-party-2019"

// #~#~#~#~#~#~#~#~#~#~#~# SHOWS #~#~#~#~#~#~#~#~#~#~#~#
// date format: YYYY-MM-DD
const upcomingShows = [
    {
        date : "2023-09-22", 
        venue : "Neck Of The Woods", 
        country : "New Zealand", 
        city : "Auckland",
        ticketURL : "https://www.undertheradar.co.nz/ticket/21535/Miss-June---MLE-Single-Release-Tour.utr.co.nz/gig/85872/Miss-June---MLE-Single-Release-Tour.utr",
        soldOut : false
    },
    {
      date : "2023-09-23", 
      venue : "Last Place", 
      country : "New Zealand", 
      city : "Hamilton",
      ticketURL : "https://www.undertheradar.co.nz/index.php?task=searchall&q=miss+june",
      soldOut : false
    },
    {
      date : "2023-09-30", 
      venue : "The Yot Club", 
      country : "New Zealand", 
      city : "Raglan",
      ticketURL : "https://www.undertheradar.co.nz/gig/https://www.undertheradar.co.nz/ticket/21537/Miss-June---MLE-Single-Release-Tour.utr/Miss-June---MLE-Single-Release-Tour.utr",
      soldOut : false
    },
    {
        date : "2023-10-06", 
        venue : "Yours *All Ages", 
        country : "New Zealand", 
        city : "Dunedin",
        ticketURL : "https://www.undertheradar.co.nz/gig/https://www.undertheradar.co.nz/gig/85874/Miss-June---MLE-Single-Release-Tour---All-Ages.utr/Miss-June---MLE-Single-Release-Tour---All-Ages.utr",
        soldOut : false
    },
    {
      date : "2023-10-07", 
      venue : "Wunderbar", 
      country : "New Zealand", 
      city : "Lyttelton",
      ticketURL : "https://www.undertheradar.co.nz/ticket/21540/Miss-June---MLE-Single-Release-Tour.utr.co.nz/gig/85874/Miss-June---MLE-Single-Release-Tour---All-Ages.utr",
      soldOut : false
    },
    {
        date : "2023-10-13", 
        venue : "Parrotdog Bar *Free Show*", 
        country : "New Zealand", 
        city : "Wellington",
        ticketURL : "https://www.undertheradar.co.nz/gig/85876/Miss-June---MLE-Single-Release-Tour---Free-Show.utr",
        soldOut : false
    }
];

// #~#~#~#~#~#~#~#~#~#~#~# MERCH #~#~#~#~#~#~#~#~#~#~#~#
const merchShopURL = "https://missjune.bandcamp.com/merch";

const currentMerch = [
  // {
  //   name : "MJ LP #2",
  //   details: "Special Edition Red Vinyl",
  //   imageURL : "/images/merch-images/test_merch.jpg",
  //   URL : "https://www.pornhub.com/",
  //   price : "$55.00 NZD",
  //   altText : "Merch Item"
  // },
  // {
  //   name : "MJ LP #2",
  //   details: "Vinyl (Black)",
  //   imageURL : "/images/merch-images/test_merch.jpg",
  //   URL : "https://www.pornhub.com/",
  //   price : "$50.00 NZD",
  //   altText : "Merch Item"
  // },
  // {
  //   name : "Bad Luck Party",
  //   details: "Special Edition Blue Vinyl",
  //   imageURL : "/images/merch-images/test_merch.jpg",
  //   URL : "https://www.pornhub.com/",
  //   price : "$55.00 NZD",
  //   altText : "Merch Item"
  // },
  // {
  //   name : "Bad Luck Party",
  //   details: "Vinyl (Black)",
  //   imageURL : "/images/merch-images/test_merch.jpg",
  //   URL : "https://www.pornhub.com/",
  //   price : "$55.00 NZD",
  //   altText : "Merch Item"
  // },
  // {
  //   name : "Best Girl / Twitch",
  //   details: "7\" Vinyl",
  //   imageURL : "/images/merch-images/test_merch.jpg",
  //   URL : "https://www.pornhub.com/",
  //   price : "$55.00 NZD",
  //   altText : "Merch Item"
  // },
  // {
  //   name : "Miss June",
  //   details: "Necklace",
  //   imageURL : "/images/merch-images/test_merch.jpg",
  //   URL : "https://www.pornhub.com/",
  //   price : "$55.00 NZD",
  //   altText : "Merch Item"
  // },
  // {
  //   name : "Christafari Pedal",
  //   details: "Analog Distortion",
  //   imageURL : "/images/merch-images/test_merch.jpg",
  //   URL : "https://www.pornhub.com/",
  //   price : "$55.00 NZD",
  //   altText : "Merch Item"
  // },
  // {
  //   name : "MLE",
  //   details: "T-Shirt",
  //   imageURL : "/images/merch-images/test_merch.jpg",
  //   URL : "https://www.pornhub.com/",
  //   price : "$55.00 NZD",
  //   altText : "Merch Item"
  // },
  // {
  //   name : "Miss June",
  //   details: "Poster 40 x 32cm",
  //   imageURL : "/images/merch-images/test_merch.jpg",
  //   URL : "https://www.pornhub.com/",
  //   price : "$55.00 NZD",
  //   altText : "Merch Item"
  // },
];

const bandBiography = [
  "Raised in the embers of punk rock, Miss June has created a blistering, reckless sound full of melodic hooks and overdriven riffs that are at once immediately recognisable and yet entirely their own. Miss June harness jagged, noisy guitars filtered through the unrivalled stage presence." 
  , "Described as \"some unholy union between Sonic Youth and Le Tigre\", the NZ four piece has built a reputation for fierce, formidable and head-spinning live shows."
];

//const oldBio = ["Miss June is what happens when angst matures. Raised in the embers of punk rock, Miss June harness jagged, noisy guitars filtered through the unrivalled stage presence of frontperson Annabel Liddell, unafraid, unapologetic and ready to wake up the music scene.",
//                         "Described as \"some unholy union between Sonic Youth and Le Tigre\", the NZ four piece, completed by the music school alumni recruited by Liddell – guitarist Jun Park, bass player Chris Marshall and drummer Tom Leggett – has built a reputation for fierce, formidable and head-spinning live shows.",
//                         "Miss June have caught the attention of acts like The Foo Fighters, Shellac, Wolf Alice, Idles and Die! Die! Die!, who have all eagerly harnessed their support on stage.",
//                         "Combining elements of post-punk, no-wave and rock, Miss June hold close their DIY roots while creating a blistering, reckless sound full of melodic hooks and overdriven riffs that are at once immediately recognizable and yet entirely their own.",
//                         "Miss June are fast growing into a force to be reckoned with. Miss June demand attention. There has never been a better time for Miss June to make noise. Get in now. Or miss out.",
// ];

export { videosToDisplay,
         merchShopURL,
         currentMerch, 
         upcomingShows, 
         albumCoverImageToDisplay,
         albumStreamURLAmazon,
         albumStreamURLSpotify,
         albumStreamURLAppleMusic,
         albumBuyLink,
         bandBiography
};