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
const merchShopURL = "https://missjune.bigcartel.com/";

const currentMerch = [
  {
    name : "BAD LUCK PARTY",
    details: "Black Vinyl",
    imageURL : "/images/merch-images/bad-luck-party-lp.jpg",
    URL : "https://missjune.bigcartel.com/product/black-vinyl",
    price : "$40.00 NZD",
    altText : "Bad Luck Party LP"
  },
  {
    name : "DON'T WANNA BE YOUR DOG",
    details: "Pink Tee",
    imageURL : "/images/merch-images/pink-dog-tee.jpg",
    URL : "https://missjune.bigcartel.com/product/miss-june-dont-wanna-be-your-dog-pink",
    price : "$40.00 NZD",
    altText : "I Don't Wanna Be Your Dog - Pink Tee"
  },
  {
    name : "DON'T WANNA BE YOUR DOG",
    details: "Black Tee",
    imageURL : "/images/merch-images/black-dog-tee.jpg",
    URL : "https://missjune.bigcartel.com/product/miss-june-dont-wanna-be-your-dog-black-tee",
    price : "$40.00 NZD",
    altText : "I Don't Wanna Be Your Dog - Black Tee"
  },
  {
    name : "MLE",
    details: "Black Tee",
    imageURL : "/images/merch-images/black-mle-tee.jpg",
    URL : "https://missjune.bigcartel.com/product/miss-june-mle-black-tee",
    price : "$40.00 NZD",
    altText : "MLE - Black Tee"
  },
  {
    name : "MLE",
    details: "Green Tee",
    imageURL : "/images/merch-images/green-mle-tee.jpg",
    URL : "https://missjune.bigcartel.com/product/miss-june-mle-green-tee",
    price : "$40.00 NZD",
    altText : "MLE - Green Tee"
  },
];

const bandBiography = [
  "Raised in the embers of punk rock, Miss June has created a blistering, reckless sound full of melodic hooks and overdriven riffs that are at once immediately recognisable and yet entirely their own. Miss June harness jagged, noisy guitars filtered through the unrivalled stage presence." 
  , "Described as \"some unholy union between Sonic Youth and Le Tigre\", the NZ four piece has built a reputation for fierce, formidable and head-spinning live shows."
];

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