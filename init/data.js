const sampleData = [
    {
        title: "Cozy Cottage",
        des: "A peaceful getaway in the countryside.",
        img: {
            url: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG91c2V8ZW58MHx8MHx8fDA%3D",
            filename: "listingImage"
        },
        price: 1200,
        location: "Riverside, Greenfield Lane",
        country: "England",
        owner: "680df3440132c6871a6e903a"
    },
    {
        title: "Modern Apartment",
        des: "Sleek and stylish apartment in downtown.",
        img: {
            url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG91c2V8ZW58MHx8MHx8fDA%3D",
            filename: "listingImage"
        },
        price: 2500,
        location: "City Center, 4th Avenue",
        country: "New York, USA",
        owner: "680df3440132c6871a6e903a"
    },
    {
        title: "Beachfront Villa",
        des: "Stunning ocean views and direct beach access.",
        img: {
            url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdXNlfGVufDB8fDB8fHww",
            filename: "listingImage"
        },
        price: 7500,
        location: "Palm Coast, Ocean Drive",
        country: "Florida, USA",
        owner: "680df3440132c6871a6e903a"
    },
    {
        title: "Mountain Retreat",
        des: "Escape to the mountains for a cozy, tranquil stay.",
        img: {
            url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdXNlfGVufDB8fDB8fHww",
            filename: "listingImage"
        },
        price: 3000,
        location: "Blue Ridge Mountains",
        country: "North Carolina, USA",
        owner: "680df3440132c6871a6e903a"
    },
    {
        title: "Luxury Penthouse",
        des: "An exclusive penthouse with a panoramic city view.",
        img: {
            url: "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG91c2V8ZW58MHx8MHx8fDA%3D",
            filename: "listingImage"
        },
        price: 10000,
        location: "Central Park West, Manhattan",
        country: "New York, USA",
        owner: "680df3440132c6871a6e903a"
    },
    {
        title: "Charming Studio",
        des: "Perfect for solo travelers or couples, cozy and well-located.",
        img: {
            url: "https://images.unsplash.com/photo-1576941089067-2de3c901e126?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvdXNlfGVufDB8fDB8fHww",
            filename: "listingImage"
        },
        price: 1800,
        location: "Old Town, San Diego",
        country: "California, USA",
        owner: "680df3440132c6871a6e903a"
    },
    {
        title: "Urban Loft",
        des: "A spacious loft in the heart of the city.",
        img: {
            url: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGhvdXNlfGVufDB8fDB8fHww",
            filename: "listingImage"
        },
        price: 3500,
        location: "Midtown, 7th Street",
        country: "Los Angeles, USA",
        owner: "680df3440132c6871a6e903a"
    },
    {
        title: "Rustic Cabin",
        des: "A log cabin in the woods for nature lovers.",
        img: {
            url: "https://images.unsplash.com/photo-1613977257365-aaae5a9817ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGhvdXNlfGVufDB8fDB8fHww",
            filename: "listingImage"
        },
        price: 2200,
        location: "Timberland Park",
        country: "Colorado, USA",
        owner: "680df3440132c6871a6e903a"
    },
    {
        title: "Historical Mansion",
        des: "A grand historical mansion with elegant decor.",
        img: {
            url: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG91c2V8ZW58MHx8MHx8fDA%3D",
            filename: "listingImage"
        },
        price: 8000,
        location: "Beverly Hills",
        country: "California, USA",
        owner: "680df3440132c6871a6e903a"
    },
    {
        title: "Farmhouse Retreat",
        des: "Stay in a charming farmhouse with modern amenities.",
        img: {
            url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdXNlfGVufDB8fDB8fHww",
            filename: "listingImage"
        },
        price: 2500,
        location: "Green Valley, Oregon",
        country: "USA",
        owner: "680df3440132c6871a6e903a"
    },
    {
        title: "City Loft",
        des: "Sleek and modern loft in the heart of downtown.",
        img: {
            url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG91c2V8ZW58MHx8MHx8fDA%3D",
            filename: "listingImage"
        },
        price: 3500,
        location: "Downtown, Chicago",
        country: "USA",
        owner: "680df3440132c6871a6e903a"
    },
    {
        title: "Seaside Cottage",
        des: "Charming cottage with amazing sea views.",
        img: {
            url: "https://images.unsplash.com/photo-1576941089067-2de3c901e126?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvdXNlfGVufDB8fDB8fHww",
            filename: "listingImage"
        },
        price: 2800,
        location: "Lighthouse Point",
        country: "California, USA",
        owner: "680df3440132c6871a6e903a"
    }
];

module.exports = { data: sampleData };
