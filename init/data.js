const sampleListings = [
  {
    "title": "Cozy Beachfront Cottage",
    "description": "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    "price": 1500,
    "location": "Malibu",
    "country": "United States",
    "owner": "68ce4ac81cb53d1bda65a25e"
  },
  {
    "title": "Modern Loft in Downtown",
    "description": "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    "price": 1200,
    "location": "New York City",
    "country": "United States",
    "owner": "68ce4ac81cb53d1bda65a25e"
  },
  {
    "title": "Rustic Mountain Cabin",
    "description": "Unplug and unwind in this rustic cabin nestled in the mountains. Great for hikers and nature lovers.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1529074963764-98f45c47344b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHJhdmVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    "price": 1000,
    "location": "Aspen",
    "country": "United States",
    "owner": "68ce4ac81cb53d1bda65a25e"
  },
  {
    "title": "Luxury Villa with Pool",
    "description": "Indulge in luxury at this stunning villa with a private pool and breathtaking views.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    "price": 5000,
    "location": "Santorini",
    "country": "Greece",
    "owner": "68ce4ac81cb53d1bda65a25e"
  },
 
  {
    "title": "Tropical Overwater Bungalow",
    "description": "Stay in a luxurious overwater bungalow with direct access to crystal clear waters.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3ZlcndhdGVyJTIwYnVuZ2Fsb3d8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    },
    "price": 7000,
    "location": "Bora Bora",
    "country": "French Polynesia",
    "owner": "68ce4ac81cb53d1bda65a25e"
  }
  ,
   {
    "title": "Historic Villa in Tuscany",
    "description": "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    "price": 2500,
    "location": "Florence",
    "country": "Italy",
    "owner": "68ce4ac81cb53d1bda65a25e"
  },
  {
    "title": "Secluded Treehouse Getaway",
    "description": "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    "price": 800,
    "location": "Portland",
    "country": "United States",
    "owner": "68ce4ac81cb53d1bda65a25e"
  },
  {
    "title": "Beachfront Paradise",
    "description": "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    "price": 2000,
    "location": "Cancun",
    "country": "Mexico",
    "owner": "68ce4ac81cb53d1bda65a25e"
  },
  {
    "title": "Rustic Cabin by the Lake",
    "description": "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    "price": 900,
    "location": "Lake Tahoe",
    "country": "United States",
    "owner": "68ce4ac81cb53d1bda65a25e"
  },
  {
    "title": "Luxury Penthouse with City Views",
    "description": "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    },
    "price": 3500,
    "location": "Los Angeles",
    "country": "United States",
    "owner": "68ce4ac81cb53d1bda65a25e"
  },
  {
    "title": "Ski-In/Ski-Out Chalet",
    "description": "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    "price": 3000,
    "location": "Verbier",
    "country": "Switzerland",
    "owner": "68ce4ac81cb53d1bda65a25e"
  },
  {
    "title": "Safari Lodge in the Serengeti",
    "description": "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    "price": 4000,
    "location": "Serengeti National Park",
    "country": "Tanzania",
    "owner": "68ce4ac81cb53d1bda65a25e"
  }
];



module.exports = { data: sampleListings };