import bcrypt from 'bcryptjs';
const data = {
  users: [
    {
      name: 'Toochko',
      email: 'admin1@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Uuganaa',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: '1',
      name: 'Оньсон тоглоом',
      slug: 'Rubiks-cube',
      category: 'Оньсон тоглоом',
      image: '/images/togloom2.jpeg', // 679px × 829px
      price: 75000,
      countInStock: 20,
      brand: 'mind-game',
      description: 'Хурдны шоо',
    },

    {
      // _id: '3',
      name: 'Yuxin cube',
      slug: 'Yuxin-cube',
      category: 'Шоо',
      image: '/images/p3.png',
      price: 65000,
      countInStock: 15,
      brand: 'Yuxin',
      description: 'Сайн чанарын хурдны Шоо',
    },  // ene dotor shoonuudinha medeelliig oruulna.
        // saynii public iin images dotor zurag nuudaa oruulna
        //tegeed image: '/images/zuragniihaa ner orgotgoliig bichne'


    {
      // _id: '1',
      name: 'Хурдан өрөлтийн аяга',
      slug: 'Rubik-cube',
      category: 'Шоо',
      image: '/images/togloom3.jpeg', // 679px × 829px
      price: 75000,
      countInStock: 20,
      brand: 'Rubiks',
      description: 'Сайн чанарын хурдны шоо',
    },

    {
      // _id: '3',
      name: 'Оньсон тоглоом өнгөтэй',
      slug: 'Yuxins-cube',
      category: 'Оньсон тоглоом',
      image: '/images/togloom1.png',
      price: 65000,
      countInStock: 15,
      brand: 'Yuxin',
      description: 'Сайн чанарын хурдны шоо',
    },

    {
      // _id: '1',
      name: 'Rubik cubee',
      slug: 'Rubiks-cubee',
      category: 'Шоо',
      image: '/images/p1.jpeg', // 679px × 829px
      price: 75000,
      countInStock: 20,
      brand: 'Rubiks',
      description: 'Сайн чанарын хурдны шоо',
    },
    {
      // _id: '3',
      name: 'Yuxinn cube',
      slug: 'Yuxinn-cube',
      category: 'Шоо',
      image: '/images/p3.png',
      price: 65000,
      countInStock: 15,
      brand: 'Yuxin',
      description: 'Сайн чанарын хурдны шоо',
    },
    {
      // _id: '2',
      name: 'Gana cube',
      slug: 'Gana cube',
      category: 'Шоо',
      image: '/images/p2.jpeg',
      price: 55000,
      countInStock: 0,
      brand: 'Gan',
      description: 'Сайн чанарын хурдны шоо',
    },

    {
      // _id: '4',
      name: '4x4x4x4 cube',
      slug: '4x4x4x4-cube',
      category: 'Cube',
      image: '/images/p4.jpeg',
      price: 90000,
      countInStock: 0,
      brand: 'Gan',
      description: 'Сайн чанарын хурдны шоо',
    },
    {
      // _id: '2',
      name: 'Gan cube',
      slug: 'Gan cube',
      category: 'Шоо',
      image: '/images/p2.jpeg',
      price: 55000,
      countInStock: 0,
      brand: 'Gan',
      description: 'Сайн чанарын хурдны шоо',
    },
    {
      // _id: '4',
      name: '4x4 cube',
      slug: '4x4-cube',
      category: 'Шоо',
      image: '/images/p4.jpeg',
      price: 90000,
      countInStock: 0,
      brand: 'Gan',
      description: 'Сайн чанарын хурдны шоо',
    },
    {
      // _id: '2',
      name: 'Gan cubes',
      slug: 'Gan cubes',
      category: 'Шоо',
      image: '/images/p2.jpeg',
      price: 55000,
      countInStock: 0,
      brand: 'Gan',
      description: 'Сайн чанарын хурдны шоо',
    },
    {
      name: '4x4x4 cube',
      slug: '4x4x4-cube',
      category: 'Шоо',
      image: '/images/p4.jpeg',
      price: 90000,
      countInStock: 0,
      brand: 'Gan',
      description: 'Сайн чанарын хурдны шоо',
    },{
      name: '4x4x4 cube',
      slug: '4x4x4-cube',
      category: 'Шоо',
      image: '/images/p4.jpeg',
      price: 90000,
      countInStock: 0,
      brand: 'Gan',
      description: 'Сайн чанарын хурдны шоо',
    },
  ],
};
export default data;
