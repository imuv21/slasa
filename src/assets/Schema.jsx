import bannerone from '../assets/images/bannerONe.webp';
import bannertwo from '../assets/images/bannerTwo.webp';
import bannerthree from '../assets/images/bannerThree.webp';
import bannerfour from '../assets/images/bannerFour.webp';

export const images = [
    bannerone, bannertwo, bannerthree, bannerfour
];

// products

export const productDetail = {
    name: 'L-Glutathione - for Skin Brightening and Antioxidant Support',
    stock: 156,
    originalPrice: 1498,
    salePrice: 953,
    onestar: 42,
    twostar: 0,
    threestar: 18,
    fourstar: 35,
    fivestar: 57,
    imageOne: bannerone,
    imageTwo: bannertwo,
    imageThree: bannerthree,
    imageFour: bannerfour,
    imageFive: bannertwo,
    productId: 'sgrehkliulrhtbtr',
    info: 'Vitamin B12 Capsules are designed to support your daily energy levels and mental focus. Each easy-to-swallow capsule provides essential nutrients, including Vitamin B12, which may help you maintain a more vibrant, energetic lifestyle. Simple, effective, and easy to incorporate into your routine.',
    reviews: [],
    questions: []
};

import tempimg from '../assets/images/homepage.jpg';
import tempimgTwo from '../assets/images/homepagetwo.jpg';

export const products = [
    {
        name: 'L-Glutathione - for Skin Brightening and Antioxidant Support',
        originalPrice: 1498,
        salePrice: 953,
        ratings: 2,
        imageOne: tempimg,
        imageTwo: tempimgTwo,
        productId: 'sgrehkliulrhtbtr',
    },
    {
        name: 'Organic Ashwagandha - Stress Relief and Immunity Booster',
        originalPrice: 1299,
        salePrice: 899,
        ratings: 2.2,
        imageOne: tempimg,
        imageTwo: tempimgTwo,
        productId: 'sgrehrertrghtbtr',
    },
    {
        name: 'Turmeric Curcumin - Anti-Inflammatory and Joint Support',
        originalPrice: 1599,
        salePrice: 1049,
        ratings: 2.3,
        imageOne: tempimg,
        imageTwo: tempimgTwo,
        productId: 'sgrehrhtbjyjytr',
    },
    {
        name: 'Apple Cider Vinegar Gummies - Digestive and Weight Support',
        originalPrice: 999,
        salePrice: 699,
        ratings: 2.7,
        imageOne: tempimg,
        imageTwo: tempimgTwo,
        productId: 'sgrehrhtdfgbbtr',
    },
    {
        name: 'Collagen Peptides - Skin, Hair, and Joint Health',
        originalPrice: 1899,
        salePrice: 1399,
        ratings: 2.8,
        imageOne: tempimg,
        imageTwo: tempimgTwo,
        productId: 'sgrehrliuythhtbtr',
    },
    {
        name: 'Probiotic Capsules - Gut Health and Digestive Support',
        originalPrice: 1199,
        salePrice: 849,
        ratings: 0,
        imageOne: tempimg,
        imageTwo: tempimgTwo,
        productId: 'sgrehrgefgdhtbtr',
    },
    {
        name: 'Vitamin D3 + K2 - Bone and Heart Health',
        originalPrice: 1099,
        salePrice: 799,
        ratings: 1,
        imageOne: tempimg,
        imageTwo: tempimgTwo,
        productId: 'sgrehrhlkyjtbtr',
    },
    {
        name: 'Magnesium Glycinate - Sleep and Muscle Relaxation',
        originalPrice: 1399,
        salePrice: 999,
        ratings: 5,
        imageOne: tempimg,
        imageTwo: tempimgTwo,
        productId: 'sgrytkuykehrhtbtr',
    },
    {
        name: 'Omega-3 Fish Oil - Heart and Brain Health',
        originalPrice: 1599,
        salePrice: 1149,
        ratings: 2.5,
        imageOne: tempimg,
        imageTwo: tempimgTwo,
        productId: 'sgrehtryhdgrhtbtr',
    },
    {
        name: 'Herbal Detox Tea - Cleanse and Refresh',
        originalPrice: 799,
        salePrice: 599,
        ratings: 3.9,
        imageOne: tempimg,
        imageTwo: tempimgTwo,
        productId: 'sgrehrhii6ktbtr',
    },
];

export const reviews = [
    {
        rating: 4,
        name: 'Alice Johnson',
        review: 'The product worked well for me. The herbal ingredients seem effective.',
        reviewImages: [ bannerone, bannertwo ],
    },
    {
        rating: 5,
        name: 'Michael Brown',
        review: 'Excellent quality! I feel more energetic after using it. Highly recommend.',
        reviewImages: [ bannerthree, bannerfour ],
    },
    {
        rating: 3,
        name: 'Sophia Lee',
        review: 'Decent product, but I expected better packaging. Hope it improves.',
        reviewImages: [ bannerone, bannertwo ],
    },
    {
        rating: 2,
        name: 'David Smith',
        review: 'Not satisfied. It didn’t meet my expectations. Maybe it works for others.',
        reviewImages: [],
    },
    {
        rating: 5,
        name: 'Emma Davis',
        review: 'Amazing results! Quick delivery and great customer service. Loved it.',
        reviewImages: [],
    },
    {
        rating: 4,
        name: 'Chris Wilson',
        review: 'Very good product. It’s helping me with my health goals. Worth the price.',
        reviewImages: [],
    },
    {
        rating: 1,
        name: 'Olivia Garcia',
        review: 'Disappointed. The product didn’t work as advertised. Waste of money.',
        reviewImages: [ bannerthree, bannerfour ],
    },
    {
        rating: 5,
        name: 'James Martinez',
        review: 'Fantastic product! I’ve been using it for weeks and see great results.',
        reviewImages: [],
    },
];

export const quests = [
    {
        name: 'John Doe',
        question: 'Does it work on our body?',
        reply: 'Yes, it can help boost natural production of glutathione in the body.',
    },
    {
        name: 'Alice Johnson',
        question: 'How long does it take to see results?',
        reply: 'Results may vary, but most users notice improvements within 2-4 weeks of consistent use.',
    },
    {
        name: 'Michael Brown',
        question: 'Is it safe for daily use?',
        reply: 'Yes, the product is formulated with natural ingredients and is safe for daily use as recommended.',
    },
    {
        name: 'Emma Davis',
        question: 'Can it be used alongside other supplements?',
        reply: 'Yes, it can be taken with other supplements, but we recommend consulting your healthcare provider first.',
    },
    {
        name: 'Chris Wilson',
        question: 'Is this product suitable for vegetarians?',
        reply: 'Yes, this product is 100% vegetarian-friendly.',
    },
    {
        name: 'Sophia Lee',
        question: 'What is the best time to take this supplement?',
        reply: 'It is best taken in the morning with breakfast or as directed by your physician.',
    },
    {
        name: 'David Smith',
        question: 'Are there any side effects?',
        reply: 'No major side effects have been reported, but it’s always best to follow the recommended dosage.',
    },
    {
        name: 'Olivia Garcia',
        question: 'Can children use this product?',
        reply: 'This product is recommended for adults. Consult a pediatrician for child-specific advice.',
    },
];

// orders
export const orders = [
    {
        orderId: 'sdghwkgphirghrh',
        totalPrice: 5000,
        time: '12:41:17 PM',
        date: '09/17/2024',
        orderStatus: 'Placed',
        products: [
            {
                name: 'L-Glutathione - for Skin Brightening and Antioxidant Support',
                salePrice: 953,
                quantity: 3,
                image: bannerfour,
                productId: 'sgrehkliutrjrtlrhtbtr',
            },
            {
                name: 'Organic Ashwagandha - Stress Relief and Immunity Booster',
                salePrice: 5458,
                quantity: 2,
                image: bannerone,
                productId: 'sgrehkltyjjyuiulrhtbtr',
            },
            {
                name: 'L-Glutathione - for Skin Brightening and Antioxidant Support',
                salePrice: 953,
                quantity: 3,
                image: bannerthree,
                productId: 'sgrehklidrherhryhyulrhtbtr',
            },
        ],
    },
    {
        orderId: 'sdghwkgphrjtyjirghrh',
        totalPrice: 5000,
        time: '12:41:17 PM',
        date: '09/17/2024',
        orderStatus: 'Placed',
        products: [
            {
                name: 'L-Glutathione - for Skin Brightening and Antioxidant Support',
                salePrice: 953,
                quantity: 3,
                image: bannertwo,
                productId: 'sgrehkliutrjrtlrhtbtr',
            },
            {
                name: 'Organic Ashwagandha - Stress Relief and Immunity Booster',
                salePrice: 5458,
                quantity: 2,
                image: bannerfour,
                productId: 'sgrehkltyjjyuiulrhtbtr',
            },
        ],
    },
];

// category

export const categories = [
    'Gardening', 'Wood', 'Acrylic', 'Neon', 'Toys', 'Stationary', 'Customize'
];

export const subCategories = {
    Gardening: ["Artificial Plants", "Table Top", "Plants Accessories", "Flower Vase", "Flower Bunch", "Gifts"],
    Wood: ["Wood Easel Canvas", "Wood Sheet", "Wood Shelves", "Customize Wood", "Wood Frame", "Ramadan & Eid Wood"],
    Acrylic: ["Table Top", "Signage", "UV Printing Acrylic", "Bath Accessories", "Display Stand", "Neon", "Customize Neon"],
    Neon: ["Festival Neon", "Celebration Neon", "Office & Event", "Customize" ],
    Toys: ["New Born", "Girls", "Boys", "Unisex", "Games", "Indoor", "Toys For 8-10 Year Old" ],
    Stationary: ["Office", "School", "Kids"],
    Customize: ["Wood", "Acrylic", "Neon", "Artificial Flower"],
};

