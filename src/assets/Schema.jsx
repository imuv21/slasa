// image slider
import bannerone from '../assets/images/bannerONe.webp';
import bannertwo from '../assets/images/bannerTwo.webp';
import bannerthree from '../assets/images/bannerThree.webp';
import bannerfour from '../assets/images/bannerFour.webp';

export const images = [
    bannerone, bannertwo, bannerthree, bannerfour
];
export const imagesMobile = [
    bannerone, bannertwo, bannerthree, bannerfour
];


// products
import tempimg from '../assets/images/homepage.jpg';
import tempimgTwo from '../assets/images/homepagetwo.jpg';

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


// Reviews => 'Pending / Approved'
export const reviews = [
    {
        rating: 4,
        name: 'Alice Johnson',
        review: 'The product worked well for me. The herbal ingredients seem effective.',
        reviewImages: [bannerone, bannertwo],
    },
    {
        rating: 5,
        name: 'Michael Brown',
        review: 'Excellent quality! I feel more energetic after using it. Highly recommend.',
        reviewImages: [bannerthree, bannerfour],
    },
    {
        rating: 3,
        name: 'Sophia Lee',
        review: 'Decent product, but I expected better packaging. Hope it improves.',
        reviewImages: [bannerone, bannertwo],
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
        reviewImages: [bannerthree, bannerfour],
    },
    {
        rating: 5,
        name: 'James Martinez',
        review: 'Fantastic product! I’ve been using it for weeks and see great results.',
        reviewImages: [],
    },
];
export const reviewsAdmin = [
    {
        reviewId: "r1",
        productId: "p1",
        rating: 4,
        review: 'The product worked well for me. The herbal ingredients seem effective.The product worked well for me. The herbal ingredients seem effective.The product worked well for me. The herbal ingredients seem effective.The product worked well for me. The herbal ingredients seem effective.The product worked well for me. The herbal ingredients seem effective.The product worked well for me. The herbal ingredients seem effective.The product worked well for me. The herbal ingredients seem effective.',
        reviewImages: [bannerone, bannertwo],
        reviewStatus: 'Pending',
    },
    {
        reviewId: "r2",
        productId: "p2",
        rating: 5,
        review: 'Excellent quality! I feel more energetic after using it. Highly recommend.',
        reviewImages: [bannerone, bannertwo],
        reviewStatus: 'Approved',
    },
    {
        reviewId: "r3",
        productId: "p1",
        rating: 3,
        review: 'Decent product, but I expected better packaging. Hope it improves.',
        reviewImages: [bannerone, bannertwo],
        reviewStatus: 'Pending',
    },
    {
        reviewId: "r4",
        productId: "p3",
        rating: 2,
        review: 'Not satisfied. It didn’t meet my expectations. Maybe it works for others.',
        reviewImages: [],
        reviewStatus: 'Approved',
    },
    {
        reviewId: "r5",
        productId: "p2",
        rating: 5,
        review: 'Amazing results! Quick delivery and great customer service. Loved it.',
        reviewImages: [],
        reviewStatus: 'Pending',
    },
    {
        reviewId: "r6",
        productId: "p1",
        rating: 4,
        review: 'Very good product. It’s helping me with my health goals. Worth the price.',
        reviewImages: [],
        reviewStatus: 'Approved',
    },
    {
        reviewId: "r7",
        productId: "p3",
        rating: 1,
        review: 'Disappointed. The product didn’t work as advertised. Waste of money.',
        reviewImages: [bannerone, bannertwo],
        reviewStatus: 'Pending',
    },
    {
        reviewId: "r8",
        productId: "p2",
        rating: 5,
        review: 'Fantastic product! I’ve been using it for weeks and see great results.',
        reviewImages: [],
        reviewStatus: 'Approved',
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
export const questsAdmin = [
    {
        questionId: "q1",
        productId: "p1",
        question: 'Does it work on our body?Does it work on our body?Does it work on our body?Does it work on our body?Does it work on our body?Does it work on our body?Does it work on our body?Does it work on our body?Does it work on our body?',
        reply: 'Yes, it can help boost natural production of glutathione in the body. Yes, it can help boost natural production of glutathione in the body.Yes, it can help boost natural production of glutathione in the body.Yes, it can help boost natural production of glutathione in the body.Yes, it can help boost natural production of glutathione in the body.Yes, it can help boost natural production of glutathione in the body.',
    },
    {
        questionId: "q2",
        productId: "p2",
        question: 'How long does it take to see results?',
        reply: '',
    },
    {
        questionId: "q3",
        productId: "p1",
        question: 'Is it safe for daily use?',
        reply: 'Yes, the product is formulated with natural ingredients and is safe for daily use as recommended.',
    },
    {
        questionId: "q4",
        productId: "p2",
        question: 'Can it be used alongside other supplements?',
        reply: '',
    },
    {
        questionId: "q5",
        productId: "p3",
        question: 'Is this product suitable for vegetarians?',
        reply: 'Yes, this product is 100% vegetarian-friendly.',
    },
    {
        questionId: "q6",
        productId: "p1",
        question: 'What is the best time to take this supplement?',
        reply: '',
    },
    {
        questionId: "q7",
        productId: "p3",
        question: 'Are there any side effects?',
        reply: '',
    },
    {
        questionId: "q8",
        productId: "p2",
        question: 'Can children use this product?',
        reply: 'This product is recommended for adults. Consult a pediatrician for child-specific advice.',
    },
];



// Orders => 'Placed / Shipped / Delivered / Cancelled'
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

export const ordersList = [
    {
        orderId: 'sdghwkgphirghrh',
        email: 'john@gmail.com',
        numberOfProducts: 4,
        totalPrice: 43634,
        date: '09/17/2024',
        orderStatus: 'Placed',
    },
    {
        orderId: 'kjwueirhguerwfh',
        email: 'alice@gmail.com',
        numberOfProducts: 2,
        totalPrice: 12345,
        date: '10/12/2024',
        orderStatus: 'Shipped',
    },
    {
        orderId: 'dskjfhwueyrhgui',
        email: 'mike@gmail.com',
        numberOfProducts: 5,
        totalPrice: 56789,
        date: '11/20/2024',
        orderStatus: 'Delivered',
    },
    {
        orderId: 'sdlfkjerwueyfbv',
        email: 'susan@gmail.com',
        numberOfProducts: 3,
        totalPrice: 23456,
        date: '12/05/2024',
        orderStatus: 'Cancelled',
    },
    {
        orderId: 'aslfkjwueyrbfvi',
        email: 'peter@gmail.com',
        numberOfProducts: 1,
        totalPrice: 9876,
        date: '12/10/2024',
        orderStatus: 'Placed',
    },
    {
        orderId: 'wjerhguwyerbgvf',
        email: 'emma@gmail.com',
        numberOfProducts: 6,
        totalPrice: 65432,
        date: '01/15/2025',
        orderStatus: 'Shipped',
    },
    {
        orderId: 'mskdjfhwuyrgvbf',
        email: 'olivia@gmail.com',
        numberOfProducts: 7,
        totalPrice: 76543,
        date: '01/22/2025',
        orderStatus: 'Delivered',
    },
    {
        orderId: 'ndklfjghweurygv',
        email: 'liam@gmail.com',
        numberOfProducts: 4,
        totalPrice: 45678,
        date: '02/05/2025',
        orderStatus: 'Cancelled',
    },
    {
        orderId: 'zxcmnweiufygrbv',
        email: 'ava@gmail.com',
        numberOfProducts: 3,
        totalPrice: 23478,
        date: '02/10/2025',
        orderStatus: 'Placed',
    },
    {
        orderId: 'qpoweirutyvbnmf',
        email: 'isabella@gmail.com',
        numberOfProducts: 8,
        totalPrice: 87654,
        date: '02/15/2025',
        orderStatus: 'Shipped',
    },
    {
        orderId: 'tyuioerwpaklmnz',
        email: 'noah@gmail.com',
        numberOfProducts: 5,
        totalPrice: 54321,
        date: '03/01/2025',
        orderStatus: 'Delivered',
    },
    {
        orderId: 'ghjklwertyuiops',
        email: 'mia@gmail.com',
        numberOfProducts: 2,
        totalPrice: 13579,
        date: '03/05/2025',
        orderStatus: 'Cancelled',
    },
    {
        orderId: 'vbnamwerqtyzxcv',
        email: 'james@gmail.com',
        numberOfProducts: 9,
        totalPrice: 98765,
        date: '03/15/2025',
        orderStatus: 'Placed',
    },
    {
        orderId: 'asdfghjklzxcvbnm',
        email: 'amelia@gmail.com',
        numberOfProducts: 6,
        totalPrice: 65498,
        date: '03/20/2025',
        orderStatus: 'Shipped',
    },
    {
        orderId: 'poiuytrewqlkjhgf',
        email: 'elijah@gmail.com',
        numberOfProducts: 3,
        totalPrice: 34789,
        date: '04/01/2025',
        orderStatus: 'Delivered',
    },
];

export const userOrdersList = [
    {
        orderId: 'sdghwkgphirghrh',
        address: '123 Main St, Cityvilleddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd',
        numberOfProducts: 4,
        totalPrice: 43634,
        date: '09/17/2024',
        orderStatus: 'Placed',
    },
    {
        orderId: 'kjwueirhguerwfh',
        address: '456 Elm St, Townsville',
        numberOfProducts: 2,
        totalPrice: 12345,
        date: '10/12/2024',
        orderStatus: 'Shipped',
    },
    {
        orderId: 'dskjfhwueyrhgui',
        address: '789 Oak St, Villageville',
        numberOfProducts: 5,
        totalPrice: 56789,
        date: '11/20/2024',
        orderStatus: 'Delivered',
    },
    {
        orderId: 'sdlfkjerwueyfbv',
        address: '321 Pine St, Hamletville',
        numberOfProducts: 3,
        totalPrice: 23456,
        date: '12/05/2024',
        orderStatus: 'Cancelled',
    },
    {
        orderId: 'aslfkjwueyrbfvi',
        address: '654 Maple St, Boroughville',
        numberOfProducts: 1,
        totalPrice: 9876,
        date: '12/10/2024',
        orderStatus: 'Placed',
    },
    {
        orderId: 'wjerhguwyerbgvf',
        address: '987 Birch St, Hamletville',
        numberOfProducts: 6,
        totalPrice: 65432,
        date: '01/15/2025',
        orderStatus: 'Shipped',
    },
    {
        orderId: 'mskdjfhwuyrgvbf',
        address: '123 Cedar St, Cityville',
        numberOfProducts: 7,
        totalPrice: 76543,
        date: '01/22/2025',
        orderStatus: 'Delivered',
    },
    {
        orderId: 'ndklfjghweurygv',
        address: '456 Willow St, Townsville',
        numberOfProducts: 4,
        totalPrice: 45678,
        date: '02/05/2025',
        orderStatus: 'Cancelled',
    },
    {
        orderId: 'zxcmnweiufygrbv',
        address: '789 Aspen St, Villageville',
        numberOfProducts: 3,
        totalPrice: 23478,
        date: '02/10/2025',
        orderStatus: 'Placed',
    },
    {
        orderId: 'qpoweirutyvbnmf',
        address: '321 Redwood St, Hamletville',
        numberOfProducts: 8,
        totalPrice: 87654,
        date: '02/15/2025',
        orderStatus: 'Shipped',
    },
    {
        orderId: 'tyuioerwpaklmnz',
        address: '654 Spruce St, Boroughville',
        numberOfProducts: 5,
        totalPrice: 54321,
        date: '03/01/2025',
        orderStatus: 'Delivered',
    },
    {
        orderId: 'ghjklwertyuiops',
        address: '987 Cherry St, Hamletville',
        numberOfProducts: 2,
        totalPrice: 13579,
        date: '03/05/2025',
        orderStatus: 'Cancelled',
    },
    {
        orderId: 'vbnamwerqtyzxcv',
        address: '123 Poplar St, Cityville',
        numberOfProducts: 9,
        totalPrice: 98765,
        date: '03/15/2025',
        orderStatus: 'Placed',
    },
    {
        orderId: 'asdfghjklzxcvbnm',
        address: '456 Hickory St, Townsville',
        numberOfProducts: 6,
        totalPrice: 65498,
        date: '03/20/2025',
        orderStatus: 'Shipped',
    },
    {
        orderId: 'poiuytrewqlkjhgf',
        address: '789 Cypress St, Villageville',
        numberOfProducts: 3,
        totalPrice: 34789,
        date: '04/01/2025',
        orderStatus: 'Delivered',
    },
];


// category
import gardening from './images/gardening.jpg';
import wood from './images/wood.jpg';
import acrylic from './images/acrylic.jpg';
import neon from './images/neon.jpg';
import toys from './images/toys.jpg';
import stationary from './images/stationary.avif';
import customize from './images/customize.png';

export const categories = [
    {
        name: "Gardening",
        image: gardening
    },
    {
        name: "Wood",
        image: wood
    },
    {
        name: "Acrylic",
        image: acrylic
    },
    {
        name: "Neon",
        image: neon
    },
    {
        name: "Toys",
        image: toys
    },
    {
        name: "Stationary",
        image: stationary
    },
    {
        name: "Customize",
        image: customize
    }
];
export const subCategories = {
    Gardening: ["Artificial Plants", "Table Top", "Plants Accessories", "Flower Vase", "Flower Bunch", "Gifts"],
    Wood: ["Wood Easel Canvas", "Wood Sheet", "Wood Shelves", "Customize Wood", "Wood Frame", "Ramadan & Eid Wood"],
    Acrylic: ["Table Top", "Signage", "UV Printing Acrylic", "Bath Accessories", "Display Stand", "Neon", "Customize Neon"],
    Neon: ["Festival Neon", "Celebration Neon", "Office & Event", "Customize"],
    Toys: ["New Born", "Girls", "Boys", "Unisex", "Games", "Indoor", "Toys For 8-10 Year Old"],
    Stationary: ["Office", "School", "Kids"],
    Customize: ["Wood", "Acrylic", "Neon", "Artificial Flower"],
};

import plant from './images/plants.png';
import table from './images/table.png';
import frame from './images/woodFrame.png';
import gifts from './images/gifts.png';
import sheet from './images/sheet.png';
import vase from './images/vase.png';
import sign from './images/sign.png';
import stand from './images/displaystand.png';
import shelves from './images/shelves.png';
import flowers from './images/flowers.png';

export const featuredCat = [
    {
        name: "Artificial Plants",
        image: plant,
    },
    {
        name: "Table Top",
        image: table,
    },
    {
        name: "Wood Frame",
        image: frame,
    },
    {
        name: "Gifts",
        image: gifts,
    },
    {
        name: "Wood Sheet",
        image: sheet,
    },
    {
        name: "Flower Vase",
        image: vase,
    },
    {
        name: "Acrylic Signage",
        image: sign,
    },
    {
        name: "Acrylic Display Stand",
        image: stand,
    },
    {
        name: "Wood Shelves",
        image: shelves,
    },
    {
        name: "Flower Bunch",
        image: flowers,
    }
];


// admin panel
import orderList from './images/icons8-orders-list-100.png';
import reviewsList from './images/reviews.png';
import questionsList from './images/question.png';
import userList from './images/icons8-users-list-100.png';
import productList from './images/icons8-product-list-100.png';
import addproduct from './images/icons8-add-new-product-100.png';
import categoryList from './images/icons8-category-list-100.png';
import topRated from './images/icons8-top-rated-100.png';
import bestSeller from './images/icons8-best-seller-100.png';
import rolemanagement from './images/icons8-role-management-100.png';
import featured from './images/featured.png';
import newAdmin from './images/newAdmin.png';

export const accordionData = [
    {
        header: 'Users',
        bricks: [
            { name: 'Orders List', route: '/dashboard/orders-list', icon: orderList },
            { name: 'Reviews List', route: '/dashboard/reviews-list', icon: reviewsList },
            { name: 'Questions List', route: '/dashboard/questions-list', icon: questionsList },
            { name: 'Users List', route: '/dashboard/user-list', icon: userList },
        ],
    },
    {
        header: 'Products',
        bricks: [
            { name: 'Add New Product', route: '/dashboard/add-new-product', icon: addproduct },
            { name: 'Products List', route: '/dashboard/product-list', icon: productList },
            { name: 'Categories List', route: '/dashboard/category-list', icon: categoryList },
        ],
    },
    {
        header: 'Analytics',
        bricks: [
            { name: 'Top Rated Products', route: '/dashboard/top-rated-products', icon: topRated },
            { name: 'Best Sellers Products', route: '/dashboard/best-seller-products', icon: bestSeller },
            { name: 'Featured Products', route: '/dashboard/featured-products', icon: featured },
        ],
    },
    {
        header: 'Management',
        bricks: [
            { name: 'Add New Admin', route: '/dashboard/add-new-admin', icon: newAdmin },
            { name: 'Role Management', route: '/dashboard/role-management', icon: rolemanagement },
        ],
    },
];

// users list
export const users = [
    {
        firstname: "John",
        lastname: "Doe",
        email: "john@email.com",
        userId: "sghwogwudfdj",
    },
    {
        firstname: "Jane",
        lastname: "Smith",
        email: "jane@email.com",
        userId: "djhw837shjdy",
    },
    {
        firstname: "Alice",
        lastname: "Johnson",
        email: "alice@email.com",
        userId: "y73hsh29dhjs",
    },
    {
        firstname: "Bob",
        lastname: "Brown",
        email: "bob@email.com",
        userId: "83ndjs837hds",
    },
    {
        firstname: "Emily",
        lastname: "Davis",
        email: "emily@email.com",
        userId: "92hsdhs92jdk",
    },
    {
        firstname: "Chris",
        lastname: "Wilson",
        email: "chris@email.com",
        userId: "k83jdh92jdhs",
    },
    {
        firstname: "Mia",
        lastname: "Martinez",
        email: "mia@email.com",
        userId: "jshd7382jsnd",
    },
    {
        firstname: "Liam",
        lastname: "Garcia",
        email: "liam@email.com",
        userId: "837shdhw8shd",
    },
    {
        firstname: "Sophia",
        lastname: "Anderson",
        email: "sophia@email.com",
        userId: "92jdhshd8shd",
    },
    {
        firstname: "Ethan",
        lastname: "Thomas",
        email: "ethan@email.com",
        userId: "hd83hsh8djsn",
    },
    {
        firstname: "Ava",
        lastname: "Hernandez",
        email: "ava@email.com",
        userId: "73jdhs92hd8s",
    },
    {
        firstname: "Noah",
        lastname: "Lee",
        email: "noah@email.com",
        userId: "s8dh2hd82ndj",
    },
];

// admin list
export const adminList = [
    {
        adminName: 'blabal21',
        adminPassword: 'Thisisfake@21'
    },
    {
        adminName: 'adminJohn',
        adminPassword: 'JohnDoe@123'
    },
    {
        adminName: 'superAdminMike',
        adminPassword: 'MikeRules@456'
    },
    {
        adminName: 'adminSarah',
        adminPassword: 'Sarah123!@#'
    },
    {
        adminName: 'masterAdmin007',
        adminPassword: 'Bond007$Admin'
    },
    {
        adminName: 'rootAdminAlex',
        adminPassword: 'AlexRocks@2024'
    },
    {
        adminName: 'adminEmma',
        adminPassword: 'Emma_Admin@77'
    },
    {
        adminName: 'globalAdminLily',
        adminPassword: 'LilyTop@456'
    },
    {
        adminName: 'techAdminRaj',
        adminPassword: 'RajTech#100'
    },
    {
        adminName: 'supportAdminAnna',
        adminPassword: 'Support@Admin99'
    },
    {
        adminName: 'bossAdminTom',
        adminPassword: 'TomBoss@321'
    }
];