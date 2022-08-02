import bcrypt from 'bcryptjs';
const data = {
  users: [
    {
      name: 'Toochko',
      email: 'admin1@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true
    },
    {
      name: 'Uuganaa',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false
    }
  ],
  products: [
    {
      name: 'QiYi QiDi S2 2x2x2',
      slug: 'QiYi QiDi S2 2x2x2',
      category: 'Шоо',
      image: '/images/1.jpeg',
      price: 7500,
      countInStock: 295,
      brand: 'QiYi',
      description: 'Анхан шатны суралцагчдад тохиромжтой.'
    },

    {
      name: 'Qiyi Warrior S 3x3x3',
      slug: 'Qiyi Warrior S 3x3x3',
      category: 'Шоо',
      image: '/images/2.jpg',
      price: 5000,
      countInStock: 436,
      brand: 'QiYi',
      description: 'Анхан шатны суралцагчдад тохиромжтой.'
    },

    {
      name: 'QiYi QiYuan S 4x4x4',
      slug: 'QiYi QiYuan S 4x4x4',
      category: 'Шоо',
      image: '/images/3-3.jpeg', //
      price: 12000,
      countInStock: 288,
      brand: 'QiYi',
      description: 'Анхан шатны суралцагчдад тохиромжтой.'
    },

    {
      name: 'QiYi QiCheng Skewb',
      slug: 'QiYi QiCheng Skewb',
      category: 'Шоо',
      image: '/images/skewb.jpg',
      price: 13000,
      countInStock: 184,
      brand: 'QiYi',
      description: 'Анхан шатны суралцагчдад тохиромжтой.'
    },
    {
      name: 'QiYi QiMing S2 Pyraminx',
      slug: 'QiYi QiMing S2 Pyraminx',
      category: 'Шоо',
      image: '/images/Pyra.jpg',
      price: 13000,
      countInStock: 264,
      brand: 'QiYi',
      description: 'Анхан шатны суралцагчдад тохиромжтой.'
    },

    {
      name: 'QiYi Gear Pyraminx',
      slug: 'QiYi Gear Pyraminx',
      category: 'Шоо',
      image: '/images/Gearpyra.png',
      price: 16000,
      countInStock: 2,
      brand: 'QiYi',
      description: 'Шоо цуглуулагчдад тохиромжтой.'
    },

    {
      name: 'QiYi Gear 3x3 (Тунгалаг)',
      slug: 'QiYi Gear 3x3 (Тунгалаг)',
      category: 'Шоо',
      image: '/images/Gear1.jpg',
      price: 18000,
      countInStock: 10,
      brand: 'QiYi',
      description: 'Шоо цуглуулагчдад тохиромжтой.'
    },
    {
      name: 'QiYi Gear Pyraminx (Тунгалаг)',
      slug: 'QiYi Gear Pyraminx (Тунгалаг)',
      category: 'Шоо',
      image: '/images/Gear2.jpg',
      price: 24000,
      countInStock: 7,
      brand: 'QiYi',
      description: 'Шоо цуглуулагчдад тохиромжтой.'
    },
    {
      name: 'QiYi Gear Cylinder (Тунгалаг)',
      slug: 'QiYi Gear Cylinder (Тунгалаг)',
      category: 'Шоо',
      image: '/images/Gear4.jpg',
      price: 20000,
      countInStock: 5,
      brand: 'QiYi',
      description: 'Шоо цуглуулагчдад тохиромжтой.'
    },
    {
      name: 'QiYi Gear Sphere (Тунгалаг)',
      slug: 'QiYi Gear Sphere (Тунгалаг)',
      category: 'Шоо',
      image: '/images/Gear33.jpg',
      price: 20000,
      countInStock: 5,
      brand: 'QiYi',
      description: 'Шоо цуглуулагчдад тохиромжтой.'
    },
    {
      name: 'QiYi MS 2x2x2',
      slug: 'QiYi MS 2x2x2',
      category: 'Шоо',
      image: '/images/ms2x2.png',
      price: 15000,
      countInStock: 6,
      brand: 'QiYi',
      description: 'Дунд шатны суралцагчдад тохиромжтой. '
    },

    {
      name: 'QiYi MS 4x4x4',
      slug: 'QiYi MS 4x4x4',
      category: 'Шоо',
      image: '/images/ms4x4.png',
      price: 28000,
      countInStock: 2,
      brand: 'QiYi',
      description: 'Дунд шатны суралцагчдад тохиромжтой.'
    },
    {
      name: 'QiYi MS 5x5x5',
      slug: 'QiYi MS 5x5x5',
      category: 'Шоо',
      image: '/images/ms5x5.png',
      price: 35000,
      countInStock: 14,
      brand: 'QiYi',
      description: 'Дунд шатны суралцагчдад тохиромжтой.'
    },

    {
      name: 'QiYi X-Man SQ-1 Volt V2 M (full)',
      slug: 'QiYi X-Man SQ-1 Volt V2 M (full) ',
      category: 'Шоо',
      image: '/images/volt2.jpg',
      price: 55000,
      countInStock: 2,
      brand: 'QiYi',
      description: 'Гүнзгий түвшиний тамирчдад тохиромжтой. '
    },

    {
      name: 'QiYi Galaxy Megaminx V2 LM',
      slug: 'QiYi Galaxy Megaminx V2 LM',
      category: 'Шоо',
      image: '/images/galaxylm.jpg',
      price: 70000,
      countInStock: 2,
      brand: 'QiYi',
      description: 'Гүнзгий түвшиний тамирчдад тохиромжтой. '
    },
    {
      name: 'QiYi Windmill Cube',
      slug: 'QiYi Windmill Cube',
      category: 'Шоо',
      image: '/images/windmill.jpg',
      price: 8000,
      countInStock: 10,
      brand: 'QiYi',
      description: 'Шоо цуглуулагчдад тохиромжтой. '
    },
    {
      name: 'QiYi Ivy Cube',
      slug: 'QiYi Ivy Cube',
      category: 'Шоо',
      image: '/images/ivy1.jpg',
      price: 10000,
      countInStock: 5,
      brand: 'QiYi',
      description: 'Шоо цуглуулагчдад тохиромжтой. '
    },

    {
      name: 'QiYi 2x2x3 Cube',
      slug: 'QiYi 2x2x3 Cube',
      category: 'Шоо',
      image: '/images/2x2x3.jpg',
      price: 9000,
      countInStock: 1,
      brand: 'QiYi',
      description: 'Шоо цуглуулагчдад тохиромжтой. '
    },
    {
      name: 'QiYi 3-layer Cylinder',
      slug: 'QiYi 3-layer Cylinder',
      category: 'Шоо',
      image: '/images/cylinder.jpg',
      price: 8000,
      countInStock: 3,
      brand: 'QiYi',
      description: 'Шоо цуглуулагчдад тохиромжтой. '
    },

    {
      name: 'QiYi 2x3x3',
      slug: 'QiYi 2x3x3',
      category: 'Шоо',
      image: '/images/2x3x3.jpg',
      price: 12000,
      countInStock: 4,
      brand: 'QiYi',
      description: 'Шоо цуглуулагчдад тохиромжтой. '
    },
    {
      name: 'QiYi 2x2 Megaminx',
      slug: 'QiYi 2x2 Megaminx',
      category: 'Шоо',
      image: '/images/2x2mega.jpg',
      price: 12000,
      countInStock: 6,
      brand: 'QiYi',
      description: 'Шоо цуглуулагчдад тохиромжтой. '
    },
    {
      name: 'QiYi Fluffy 3x3 Cube',
      slug: 'QiYi Fluffy 3x3 Cube',
      category: 'Шоо',
      image: '/images/3x3fluffy.jpg',
      price: 10000,
      countInStock: 7,
      brand: 'QiYi',
      description: 'Шоо цуглуулагчдад тохиромжтой. '
    },
    {
      name: 'QiYi Duomo Cube',
      slug: 'QiYi Duomo Cube',
      category: 'Шоо',
      image: '/images/duomo.jpg',
      price: 10000,
      countInStock: 3,
      brand: 'QiYi',
      description: 'Шоо цуглуулагчдад тохиромжтой. '
    },

    {
      name: 'QiYi Coin Tetrahedron Pyraminx',
      slug: 'QiYi Coin Tetrahedron Pyraminx',
      category: 'Шоо',
      image: '/images/coinpyra.jpg',
      price: 10000,
      countInStock: 4,
      brand: 'QiYi',
      description: 'Шоо цуглуулагчдад тохиромжтой. '
    },
    {
      name: 'QiYi QiMeng Plus 9cm 3x3',
      slug: 'QiYi QiMeng Plus 9cm 3x3',
      category: 'Шоо',
      image: '/images/9cm.jpg',
      price: 20000,
      countInStock: 8,
      brand: 'QiYi',
      description: 'Шоо цуглуулагчдад тохиромжтой. '
    },
    {
      name: 'QiYi Windmill Spinner Cube',
      slug: 'QiYi Windmill Spinner Cube',
      category: 'Шоо',
      image: '/images/windspinner.jpg',
      price: 20000,
      countInStock: 4,
      brand: 'QiYi',
      description: 'Шоо цуглуулагчдад тохиромжтой. '
    },
    {
      name: 'QiYi 1x3x3 Fidget Cube',
      slug: 'QiYi 1x3x3 Fidget Cube',
      category: 'Шоо',
      image: '/images/spinner1.jpg',
      price: 20000,
      countInStock: 14,
      brand: 'QiYi',
      description: 'Шоо цуглуулагчдад тохиромжтой. '
    },

    {
      name: 'QiYi Шооны зааварт ном',
      slug: 'QiYi Шооны зааварт ном',
      category: 'Шооны дагалдах хэрэгсэл',
      image: '/images/book.jpg',
      price: 3500,
      countInStock: 7,
      brand: 'QiYi',
      description: 'Шоо цуглуулагчдад тохиромжтой. '
    },

    {
      name: 'QiYi Жижиг Шооны дэвсгэр',
      slug: 'QiYi Жижиг Шооны дэвсгэр ',
      category: 'Шооны дагалдах хэрэгсэл',
      image: '/images/qiyismallmat.jpg',
      price: 17000,
      countInStock: 4,
      brand: 'QiYi',
      description: 'Шооны зориулалттай зузаан дэвсгэр.'
    },

    {
      name: 'QiYi 1x2x3',
      slug: 'QiYi 1x2x3',
      category: 'Шоо',
      image: '/images/1x2x3.jpg',
      price: 8000,
      countInStock: 7,
      brand: 'QiYi',
      description: 'Шоо цуглуулагчдад тохиромжтой.'
    },

    {
      name: 'QiYi XMD Flare 2x2 M',
      slug: 'QiYi XMD Flare 2x2 M',
      category: 'Шоо',
      image: '/images/xmd2x2.jpg',
      price: 38000,
      countInStock: 1,
      brand: 'QiYi',
      description: 'Гүнзгий түвшиний тамирчдад тохиромжтой.'
    },
    {
      name: 'QiYi Magnetic SET',
      slug: 'QiYi Magnetic SET',
      category: 'Шоо',
      image: '/images/msbagts.jpg',
      price: 94000,
      countInStock: 3,
      brand: 'QiYi',
      description: 'Дунд шатны суралцагчдад тохиромжтой.'
    },

    {
      name: 'QiYi X-Man Spark 7x7 M',
      slug: 'QiYi X-Man Spark 7x7 M',
      category: 'Шоо',
      image: '/images/spark.jpg',
      price: 120000,
      countInStock: 1,
      brand: 'QiYi',
      description: 'Гүнзгий түвшиний тамирчдад тохиромжтой.'
    },
    {
      name: 'QiYi Super Ivy Cube',
      slug: 'QiYi Super Ivy Cube',
      category: 'Шоо',
      image: '/images/superivy.jpg',
      price: 30000,
      countInStock: 1,
      brand: 'QiYi',
      description: 'Шоо цуглуулагчдад тохиромжтой.'
    },
    {
      name: 'QiYi Crazy Gear Cube',
      slug: 'QiYi Crazy Gear Cube',
      category: 'Шоо',
      image: '/images/crazy.jpg',
      price: 30000,
      countInStock: 5,
      brand: 'QiYi',
      description: 'Шоо цуглуулагчдад тохиромжтой.'
    },
    {
      name: 'QiYi Corner Mastermorphix Cube',
      slug: 'QiYi Corner Mastermorphix Cube',
      category: 'Шоо',
      image: '/images/corner.jpg',
      price: 10000,
      countInStock: 8,
      brand: 'QiYi',
      description: 'Шоо цуглуулагчдад тохиромжтой.'
    },
    {
      name: 'XMD Ambition 4x4 M',
      slug: 'XMD Ambition 4x4 M',
      category: 'Шоо',
      image: '/images/xmd4x4.jpg',
      price: 72000,
      countInStock: 5,
      brand: 'QiYi',
      description: 'Гүнзгий түвшиний тамирчдад тохиромжтой.'
    },

    {
      name: 'QiYi O2 Standard Version',
      slug: 'QiYi O2 Standard Version',
      category: 'Шоо',
      image: '/images/o2.jpg',
      price: 9000,
      countInStock: 6,
      brand: 'QiYi',
      description: 'Шоо цуглуулагчдад тохиромжтой.'
    },
    {
      name: 'QiYi O2 Spinner Version',
      slug: 'QiYi O2 Spinner Version',
      category: 'Шоо',
      image: '/images/oo2.jpg',
      price: 13000,
      countInStock: 2,
      brand: 'QiYi',
      description: 'Шоо цуглуулагчдад тохиромжтой.'
    },
    {
      name: 'XMD Lube - Шооны тос',
      slug: 'XMD Lube - Шооны тос',
      category: 'Шооны дагалдах хэрэгсэл',
      image: '/images/xmdlube.jpg',
      price: 9000,
      countInStock: 9,
      brand: 'QiYi',
      description: 'Шооны өтгөн тос.'
    },

    {
      name: 'QiYi Valk5 M',
      slug: 'QiYi Valk5 M',
      category: 'Шоо',
      image: '/images/valk5.jpg',
      price: 110000,
      countInStock: 2,
      brand: 'QiYi',
      description: 'Гүнзгий түвшиний тамирчдад тохиромжтой.'
    },

    {
      name: 'QiYi MP 4x4 M',
      slug: 'QiYi MP 4x4 M',
      category: 'Шоо',
      image: '/images/mp4.jpg',
      price: 40000,
      countInStock: 13,
      brand: 'QiYi',
      description: 'Дунд шатны суралцагчдад тохиромжтой.'
    },

    {
      name: 'QiYi MP Pyraminx M',
      slug: 'QiYi MP Pyraminx M',
      category: 'Шоо',
      image: '/images/mppyra.jpg',
      price: 30000,
      countInStock: 6,
      brand: 'QiYi',
      description: 'Дунд шатны суралцагчдад тохиромжтой.'
    },

    {
      name: 'QiYi 8x8',
      slug: 'QiYi 8x8',
      category: 'Шоо',
      image: '/images/qiyi8.jpg',
      price: 80000,
      countInStock: 4,
      brand: 'QiYi',
      description: 'Анхан шатны суралцагчдад тохиромжтой.'
    },
    {
      name: 'QiYi 9x9',
      slug: 'QiYi 9x9',
      category: 'Шоо',
      image: '/images/qiyi9.jpg',
      price: 90000,
      countInStock: 4,
      brand: 'QiYi',
      description: 'Анхан шатны суралцагчдад тохиромжтой.'
    },
    {
      name: 'QiYi Axis Cube',
      slug: 'QiYi Axis Cube',
      category: 'Шоо',
      image: '/images/axis.jpg',
      price: 8000,
      countInStock: 6,
      brand: 'QiYi',
      description: 'Шоо цуглуулагчдад тохиромжтой.'
    },
    {
      name: 'QiYi DNA Pyraminx',
      slug: 'QiYi DNA Pyraminx',
      category: 'Шоо',
      image: '/images/dnapyra.jpg',
      price: 12000,
      countInStock: 8,
      brand: 'QiYi',
      description: 'Шоо цуглуулагчдад тохиромжтой. '
    },
    {
      name: 'QiYi DNA 3x3x3',
      slug: 'QiYi DNA 3x3x3',
      category: 'Шоо',
      image: '/images/dna3x3.jpg',
      price: 9000,
      countInStock: 4,
      brand: 'QiYi',
      description: 'Шоо цуглуулагчдад тохиромжтой. '
    },
    {
      name: 'QiYi DNA 3x3x3 /Concave/',
      slug: 'QiYi DNA 3x3x3 /Concave/',
      category: 'Шоо',
      image: '/images/dna3x3-1.jpg',
      price: 9000,
      countInStock: 4,
      brand: 'QiYi',
      description: 'Шоо цуглуулагчдад тохиромжтой.'
    },

    {
      name: 'GAN Standard Шооны тос',
      slug: 'GAN Standard Шооны тос',
      category: 'Шоо',
      image: '/images/standardlube.jpg',
      price: 9000,
      countInStock: 14,
      brand: 'GAN',
      description: 'Шооны өтгөн тос.'
    },
    {
      name: 'GAN Magic Шооны тос',
      slug: 'GAN Magic Шооны тос',
      category: 'Шоо',
      image: '/images/magiclube.jpg',
      price: 10000,
      countInStock: 11,
      brand: 'GAN',
      description: 'Шооны өтгөн тос.'
    },

    {
      name: 'MG 24 Blocks Magic Snake /Ногоон-Шар/',
      slug: 'MG 24 Blocks Magic Snake /Ногоон-Шар/',
      category: 'Сэтгэхүй хөгжүүлэх puzzle',
      image: '/images/snakegreen.jpg',
      price: 21000,
      countInStock: 8,
      brand: 'GAN',
      description: 'Шоо цуглуулагчдад тохиромжтой.'
    },
    {
      name: 'MG 24 Blocks Magic Snake /Улаан-Улбар шар/',
      slug: 'MG 24 Blocks Magic Snake /Улаан-Улбар шар/',
      category: 'Сэтгэхүй хөгжүүлэх puzzle',
      image: '/images/snakered.jpg',
      price: 21000,
      countInStock: 10,
      brand: 'GAN',
      description: 'Шоо цуглуулагчдад тохиромжтой.'
    },

    {
      name: 'YJ YuPo 2x2 M',
      slug: 'YJ YuPo 2x2 M',
      category: 'Шоо',
      image: '/images/yj2x2.jpg',
      price: 13000,
      countInStock: 6,
      brand: 'YJ',
      description: 'Дунд шатны суралцагчдад тохиромжтой.'
    },

    {
      name: 'YJ YuSu 4x4 M',
      slug: 'YJ YuSu 4x4 M',
      category: 'Шоо',
      image: '/images/yj4x4.jpg',
      price: 25000,
      countInStock: 15,
      brand: 'YJ',
      description: 'Дунд шатны суралцагчдад тохиромжтой.'
    },
    {
      name: 'YJ Yuchuang 5x5 M',
      slug: 'YJ Yuchuang 5x5 M',
      category: 'Шоо',
      image: '/images/yj5x5.jpg',
      price: 30000,
      countInStock: 11,
      brand: 'YJ',
      description: 'Дунд шатны суралцагчдад тохиромжтой.'
    },

    {
      name: 'YJ YuFu V2 7x7 M',
      slug: 'YJ YuFu V2 7x7 M',
      category: 'Шоо',
      image: '/images/yj7x7.jpg',
      price: 46000,
      countInStock: 19,
      brand: 'YJ',
      description: 'Дунд шатны суралцагчдад тохиромжтой.'
    },
    {
      name: 'YJ YuLong Pyraminx M',
      slug: 'YJ YuLong Pyraminx M',
      category: 'Шоо',
      image: '/images/yjpyra.jpg',
      price: 18000,
      countInStock: 4,
      brand: 'YJ',
      description: 'Дунд шатны суралцагчдад тохиромжтой.'
    },

    {
      name: 'YJ MGC 5x5 M',
      slug: 'YJ MGC 5x5 M',
      category: 'Шоо',
      image: '/images/mgc5.jpg',
      price: 45000,
      countInStock: 3,
      brand: 'YJ',
      description: 'Гүнзгий түвшиний тамирчдад тохиромжтой.'
    },

    {
      name: 'YJ MGC 7x7 M',
      slug: 'YJ MGC 7x7 M',
      category: 'Шоо',
      image: '/images/mgc7.jpg',
      price: 85000,
      countInStock: 4,
      brand: 'YJ',
      description: 'Гүнзгий түвшиний тамирчдад тохиромжтой.'
    },
    {
      name: 'YJ MGC Elite 2X2 M',
      slug: 'YJ MGC Elite 2X2 M',
      category: 'Шоо',
      image: '/images/mgc2.jpg',
      price: 40000,
      countInStock: 3,
      brand: 'YJ',
      description: 'Гүнзгий түвшиний тамирчдад тохиромжтой.'
    },

    {
      name: 'YJ MGC Square-1 M',
      slug: 'YJ MGC Square-1 M',
      category: 'Шоо',
      image: '/images/mgcsq1.jpg',
      price: 42000,
      countInStock: 7,
      brand: 'YJ',
      description: 'Гүнзгий түвшиний тамирчдад тохиромжтой.'
    },
    {
      name: 'YJ Шооны Жижиг Цүнх',
      slug: 'YJ Шооны Жижиг Цүнх',
      category: 'Шооны дагалдах хэрэгсэл',
      image: '/images/yjbag.jpg',
      price: 12000,
      countInStock: 3,
      brand: 'YJ',
      description: '1 ширхэг шооны цүнх'
    },

    {
      name: 'YJ Magic Rainbow Ball',
      slug: 'YJ Magic Rainbow Ball',
      category: 'Шоо',
      image: '/images/magiccube.jpg',
      price: 15000,
      countInStock: 1,
      brand: 'YJ',
      description: 'Шоо цуглуулагчдад тохиромжтой.'
    },

    {
      name: 'MoYu Windmirror /Gold/',
      slug: 'MoYu Windmirror /Gold/',
      category: 'Шоо',
      image: '/images/windmirror-gold.jpg',
      price: 12000,
      countInStock: 6,
      brand: 'MoYu',
      description: 'Шоо цуглуулагчдад тохиромжтой.'
    },
    {
      name: 'MoYu Windmirror /Silver/',
      slug: 'MoYu Windmirror /Silver/',
      category: 'Шоо',
      image: '/images/windmirror-silver.jpg',
      price: 12000,
      countInStock: 8,
      brand: 'MoYu',
      description: 'Шоо цуглуулагчдад тохиромжтой.'
    },
    {
      name: 'Cubing Classroom RS3 3x3 M /2020/',
      slug: 'Cubing Classroom RS3 3x3 M /2020/',
      category: 'Шоо',
      image: '/images/moyurs3.jpg',
      price: 25000,
      countInStock: 6,
      brand: 'MoYu',
      description: 'Дунд шатны суралцагчдад тохиромжтой.'
    },

    {
      name: 'MoYu AoChuang WR 5x5 M',
      slug: 'MoYu AoChuang WR 5x5 M',
      category: 'Шоо',
      image: '/images/wr5x5.jpg',
      price: 100000,
      countInStock: 3,
      brand: 'MoYu',
      description: 'Гүнзгий түвшиний тамирчдад тохиромжтой.'
    },
    {
      name: 'Meilong 11x11x11',
      slug: 'Meilong 11x11x11',
      category: 'Шоо',
      image: '/images/meilong11x11.jpg',
      price: 200000,
      countInStock: 2,
      brand: 'MoYu',
      description: 'Шоо цуглуулагчдад тохиромжтой.'
    },

    {
      name: 'Cubing Classroom Meilong Ivy Skewb',
      slug: 'Cubing Classroom Meilong Ivy Skewb',
      category: 'Шоо',
      image: '/images/ivyskewbb.jpg',
      price: 12000,
      countInStock: 5,
      brand: 'MoYu',
      description: 'Шоо цуглуулагчдад тохиромжтой.'
    },
    {
      name: 'MoYu 3D Maze 95mm',
      slug: 'MoYu 3D Maze 95mm',
      category: 'Сэтгэхүй хөгжүүлэх puzzle',
      image: '/images/3dmaze.jpg',
      price: 15000,
      countInStock: 2,
      brand: 'MoYu',
      description: 'Шоо цуглуулагчдад тохиромжтой.'
    },
    {
      name: 'Cubing Classroom Meilong Polaris Cube',
      slug: 'Cubing Classroom Meilong Polaris Cube',
      category: 'Шоо',
      image: '/images/polaris.jpg',
      price: 12000,
      countInStock: 4,
      brand: 'MoYu',
      description: 'Шоо цуглуулагчдад тохиромжтой.'
    },
    {
      name: 'MoYu Шооны Том Дэвсгэр',
      slug: 'MoYu Шооны Том Дэвсгэр',
      category: 'Шооны дагалдах хэрэгсэл',
      image: '/images/moyubigmat.jpg',
      price: 20000,
      countInStock: 3,
      brand: 'MoYu',
      description: 'Шооны зориулалттай зузаан дэвсгэр.'
    },
    {
      name: 'MoYu Шооны Жижиг Дэвсгэр',
      slug: 'MoYu Шооны Жижиг Дэвсгэр',
      category: 'Шооны дагалдах хэрэгсэл',
      image: '/images/moyusmallmat.jpg',
      price: 17000,
      countInStock: 4,
      brand: 'MoYu',
      description: 'Шооны зориулалттай зузаан дэвсгэр.'
    },
    {
      name: 'Meilong Puppet-1',
      slug: 'Meilong Puppet-1',
      category: 'Шоо',
      image: '/images/puppet-1.jpg',
      price: 14000,
      countInStock: 4,
      brand: 'MoYu',
      description: 'Шоо цуглуулагчдад тохиромжтой.'
    },
    {
      name: 'Meilong Puppet-2',
      slug: 'Meilong Puppet-2',
      category: 'Шоо',
      image: '/images/puppet-2.jpg',
      price: 14000,
      countInStock: 5,
      brand: 'MoYu',
      description: 'Шоо цуглуулагчдад тохиромжтой.'
    },
    {
      name: 'Cubing Classroom Corner Twist Pyraminx',
      slug: 'Cubing Classroom Corner Twist Pyraminx',
      category: 'Шоо',
      image: '/images/twistpyra.jpg',
      price: 10000,
      countInStock: 7,
      brand: 'MoYu',
      description: 'Шоо цуглуулагчдад тохиромжтой.'
    },
    {
      name: 'Cubing Classroom Bead Pyraminx',
      slug: 'Cubing Classroom Bead Pyraminx',
      category: 'Шоо',
      image: '/images/beadpyra.jpg',
      price: 10000,
      countInStock: 7,
      brand: 'MoYu',
      description: 'Шоо цуглуулагчдад тохиромжтой.'
    },

    {
      name: 'Cubing Classroom Boomerang Pyraminx',
      slug: 'Cubing Classroom Boomerang Pyraminx',
      category: 'Шоо',
      image: '/images/boomerangpyra.jpg',
      price: 10000,
      countInStock: 7,
      brand: 'MoYu',
      description: 'Шоо цуглуулагчдад тохиромжтой.'
    },
    {
      name: 'Cubing Classroom Windmill Pyraminx',
      slug: 'Cubing Classroom Windmill Pyraminx',
      category: 'Шоо',
      image: '/images/windmillpyra.jpg',
      price: 10000,
      countInStock: 8,
      brand: 'MoYu',
      description: 'Шоо цуглуулагчдад тохиромжтой.'
    },
    {
      name: 'Cubing Classroom Maple Leaf Pyraminx',
      slug: 'Cubing Classroom Maple Leaf Pyraminx',
      category: 'Шоо',
      image: '/images/maplepyra.jpg',
      price: 10000,
      countInStock: 8,
      brand: 'MoYu',
      description: 'Шоо цуглуулагчдад тохиромжтой.'
    },
    {
      name: 'Cubing Classroom Triangle Pyraminx',
      slug: 'Cubing Classroom Triangle Pyraminx',
      category: 'Шоо',
      image: '/images/trianglepyra.jpg',
      price: 10000,
      countInStock: 5,
      brand: 'MoYu',
      description: 'Шоо цуглуулагчдад тохиромжтой.'
    },
    {
      name: 'Cubing Classroom Unicorn Cube',
      slug: 'Cubing Classroom Unicorn Cube',
      category: 'Шоо',
      image: '/images/unicorn.jpg',
      price: 10000,
      countInStock: 7,
      brand: 'MoYu',
      description: 'Шоо цуглуулагчдад тохиромжтой.'
    },

    {
      name: 'Shengshou Void Tower',
      slug: 'Shengshou Void Tower',
      category: 'Шоо',
      image: '/images/voidtower.jpg',
      price: 18000,
      countInStock: 7,
      brand: 'MoYu',
      description: 'Шоо цуглуулагчдад тохиромжтой.'
    },

    {
      name: 'Shengshou Mirror Tower',
      slug: 'Shengshou Mirror Tower',
      category: 'Шоо',
      image: '/images/mirrortower.jpg',
      price: 18000,
      countInStock: 5,
      brand: 'MoYu',
      description: 'Шоо цуглуулагчдад тохиромжтой.'
    },

    {
      name: 'Meilong Skewb Cube',
      slug: 'Meilong Skewb Cube',
      category: 'Шоо',
      image: '/images/meilongskewb.jpg',
      price: 13000,
      countInStock: 18,
      brand: 'MoYu',
      description: 'Анхан шатны суралцагчдад тохиромжтой.'
    },

    {
      name: 'MoYu Redi Cube',
      slug: 'MoYu Redi Cube',
      category: 'Шоо',
      image: '/images/redicube.jpg',
      price: 25000,
      countInStock: 6,
      brand: 'MoYu',
      description: 'Шоо цуглуулагчдад тохиромжтой.'
    },

    {
      name: 'Meilong Mixup Skewb 1',
      slug: 'Meilong Mixup Skewb 1',
      category: 'Шоо',
      image: '/images/skewb1.jpg',
      price: 15000,
      countInStock: 7,
      brand: 'MoYu',
      description: 'Шоо цуглуулагчдад тохиромжтой.'
    },

    {
      name: 'Meilong Mixup Skewb 2',
      slug: 'Meilong Mixup Skewb 2',
      category: 'Шоо',
      image: '/images/skewb2.jpg',
      price: 15000,
      countInStock: 7,
      brand: 'MoYu',
      description: 'Шоо цуглуулагчдад тохиромжтой.'
    },

    {
      name: 'Meilong Mixup Skewb 3',
      slug: 'Meilong Mixup Skewb 3',
      category: 'Шоо',
      image: '/images/skewb3.jpg',
      price: 15000,
      countInStock: 7,
      brand: 'MoYu',
      description: 'Шоо цуглуулагчдад тохиромжтой.'
    },

    {
      name: 'MoYu Meilong Four Leaf Clover',
      slug: 'MoYu Meilong Four Leaf Clover',
      category: 'Шоо',
      image: '/images/fourclover.jpg',
      price: 12000,
      countInStock: 4,
      brand: 'MoYu',
      description: 'Шоо цуглуулагчдад тохиромжтой.'
    },

    {
      name: 'Meilong 12x12 Cube',
      slug: 'Meilong 12x12 Cube',
      category: 'Шоо',
      image: '/images/12x12.jpg',
      price: 250000,
      countInStock: 1,
      brand: 'MoYu',
      description: 'Шоо цуглуулагчдад тохиромжтой.'
    },

    {
      name: 'MoFangJiaoShi Container Puzzle',
      slug: 'MoFangJiaoShi Container Puzzle',
      category: 'Шоо',
      image: '/images/container.jpg',
      price: 12000,
      countInStock: 7,
      brand: 'MoYu',
      description: 'Шоо цуглуулагчдад тохиромжтой.'
    },
    {
      name: 'DaYan TengYun 2x2 M',
      slug: 'DaYan TengYun 2x2 M',
      category: 'Шоо',
      image: '/images/dayan2x22.jpg',
      price: 49000,
      countInStock: 6,
      brand: 'Бусад',
      description: 'Гүнзгий түвшиний тамирчдад тохиромжтой.'
    },

    {
      name: 'YuXin Earth 2x2 Cube',
      slug: 'YuXin Earth 2x2 Cube',
      category: 'Шоо',
      image: '/images/earth.jpg',
      price: 20000,
      countInStock: 1,
      brand: 'Бусад',
      description: 'Шоо цуглуулагчдад тохиромжтой.'
    },

    {
      name: 'YuXin Box 3x3 Cube',
      slug: 'YuXin Box 3x3 Cube',
      category: 'Шоо',
      image: '/images/boxcube.jpg',
      price: 25000,
      countInStock: 1,
      brand: 'Бусад',
      description: 'Шоо цуглуулагчдад тохиромжтой.'
    },

    {
      name: 'Digital Puzzle /number 1-15/',
      slug: 'Digital Puzzle /number 1-15/',
      category: 'Сэтгэхүй хөгжүүлэх puzzle',
      image: '/images/1-15.jpg',
      price: 16000,
      countInStock: 8,
      brand: 'Бусад',
      description: 'Шоо цуглуулагчдад тохиромжтой.'
    },
    {
      name: 'Magic Block Game',
      slug: 'Magic Block Game',
      category: 'Сэтгэхүй хөгжүүлэх puzzle',
      image: '/images/magicgame.jpg',
      price: 20000,
      countInStock: 7,
      brand: 'Бусад',
      description: 'Шоо цуглуулагчдад тохиромжтой.'
    },

    {
      name: 'Z Cube 1x2x2',
      slug: 'Z Cube 1x2x2',
      category: 'Шоо',
      image: '/images/1x2x2.jpg',
      price: 8000,
      countInStock: 4,
      brand: 'Бусад',
      description: 'Шоо цуглуулагчдад тохиромжтой.'
    },
    {
      name: 'SengSo Clock M',
      slug: 'SengSo Clock M',
      category: 'Шоо',
      image: '/images/sengsoclock.jpg',
      price: 25000,
      countInStock: 6,
      brand: 'Бусад',
      description: 'Дунд шатны суралцагчдад тохиромжтой.'
    },

    {
      name: 'DaYan GuHong V4 3x3 M',
      slug: 'DaYan GuHong V4 3x3 M',
      category: 'Шоо',
      image: '/images/guhongv4.jpg',
      price: 42000,
      countInStock: 1,
      brand: 'Бусад',
      description: 'Дунд шатны суралцагчдад тохиромжтой.'
    },
    {
      name: 'DaYan Megaminx V2 M',
      slug: 'DaYan Megaminx V2 M',
      category: 'Шоо',
      image: '/images/dayanmega.jpg',
      price: 70000,
      countInStock: 3,
      brand: 'Бусад',
      description: 'Гүнзгий түвшиний тамирчдад тохиромжтой.'
    },

    {
      name: 'FanXin Fruit 3 Set Cube',
      slug: 'FanXin Fruit 3 Set Cube',
      category: 'Шоо',
      image: '/images/jims3.jpg',
      price: 30000,
      countInStock: 1,
      brand: 'Бусад',
      description: 'Шоо цуглуулагчдад тохиромжтой.'
    },
    {
      name: 'FanXin Fruit 4 Set Cube',
      slug: 'FanXin Fruit 4 Set Cube',
      category: 'Шоо',
      image: '/images/jims4.jpg',
      price: 40000,
      countInStock: 2,
      brand: 'Бусад',
      description: 'Шоо цуглуулагчдад тохиромжтой.'
    },
    {
      name: 'Giiker Super I3SE Smart 3x3 Cube',
      slug: 'Giiker Super I3SE Smart 3x3 Cube',
      category: 'Шоо',
      image: '/images/giiker.jpg',
      price: 140000,
      countInStock: 1,
      brand: 'Бусад',
      description: 'Смарт утастай холбогддог шоо.'
    },

    {
      name: 'The Worlds largest 3x3 Cube (18cm)',
      slug: 'The Worlds largest 3x3 Cube (18cm)',
      category: 'Шоо',
      image: '/images/18cm.jpg',
      price: 50000,
      countInStock: 9,
      brand: 'Бусад',
      description: 'Шоо цуглуулагчдад тохиромжтой.'
    },
    {
      name: 'SengSo 5x5 M Clock',
      slug: 'SengSo 5x5 M Clock',
      category: 'Шоо',
      image: '/images/clock5x5.jpg',
      price: 35000,
      countInStock: 5,
      brand: 'Бусад',
      description: 'Шоо цуглуулагчдад тохиромжтой.'
    },

    {
      name: 'SengSo 3x3 M Clock',
      slug: 'SengSo 3x3 M Clock',
      category: 'Шоо',
      image: '/images/clock3x3.jpg',
      price: 25000,
      countInStock: 5,
      brand: 'Бусад',
      description: 'Шоо цуглуулагчдад тохиромжтой.'
    },

    {
      name: 'Lanlan Windmill Cube',
      slug: 'Lanlan Windmill Cube',
      category: 'Шоо',
      image: '/images/lanlanwindmill.jpg',
      price: 23000,
      countInStock: 3,
      brand: 'Бусад',
      description: 'Шоо цуглуулагчдад тохиромжтой.'
    },
    {
      name: 'FanXin Lego 3x3 Cube',
      slug: 'FanXin Lego 3x3 Cube',
      category: 'Шоо',
      image: '/images/lega.jpg',
      price: 15000,
      countInStock: 6,
      brand: 'Бусад',
      description: 'Шоо цуглуулагчдад тохиромжтой.'
    },
    {
      name: 'Том Шооны Уут',
      slug: 'Том Шооны Уут',
      category: 'Шооны дагалдах хэрэгсэл',
      image: '/images/uut3.jpg',
      price: 4000,
      countInStock: 23,
      brand: 'Бусад',
      description: '9x9 хүртэлх шоо багтана.'
    },
    {
      name: 'Цэнхэр Шооны Уут',
      slug: 'Цэнхэр Шооны Уут',
      category: 'Шооны дагалдах хэрэгсэл',
      image: '/images/uut1.jpg',
      price: 3000,
      countInStock: 200,
      brand: 'Бусад',
      description: '6x6 хүртэлх шоо багтана.'
    },
    {
      name: 'Улаан Шооны Уут',
      slug: 'Улаан Шооны Уут',
      category: 'Шооны дагалдах хэрэгсэл',
      image: '/images/uut2.jpg',
      price: 3000,
      countInStock: 200,
      brand: 'Бусад',
      description: '6x6 хүртэлх шоо багтана.'
    },

    {
      name: 'QiYi QiFan S2 6x6x6',
      slug: 'QiYi QiFan S2 6x6x6',
      category: 'Шоо',
      image: '/images/5.jpg',
      price: 26000,
      countInStock: 0,
      brand: 'QiYi',
      description: 'Анхан шатны суралцагчдад тохиромжтой.'
    },

    {
      name: 'QiYi QiXing S2 7x7x7',
      slug: 'QiYi QiXing S2 7x7x7',
      category: 'Шоо',
      image: '/images/7.jpg',
      price: 32000,
      countInStock: 0,
      brand: 'QiYi',
      description: 'Анхан шатны суралцагчдад тохиромжтой.'
    },
    {
      name: 'QiYi QiHeng S Megaminx   ( sculpture )',
      slug: 'QiYi QiHeng S Megaminx   ( sculpture )',
      category: 'Шоо',
      image: '/images/Mega.jpg',
      price: 18000,
      countInStock: 0,
      brand: 'QiYi',
      description: 'Анхан шатны суралцагчдад тохиромжтой.'
    },
    {
      name: 'QiYi 2x2x2 Mirror /Gold/',
      slug: 'QiYi 2x2x2 Mirror /Gold/',
      category: 'Шоо',
      image: '/images/2x2mirror2.jpg',
      price: 8000,
      countInStock: 0,
      brand: 'QiYi',
      description: 'Шоо цуглуулагчдад тохиромжтой.'
    },
    {
      name: 'QiYi 2x2x2 Mirror /Silver/',
      slug: 'QiYi 2x2x2 Mirror /Silver/',
      category: 'Шоо',
      image: '/images/2x2mirror1.jpg',
      price: 8000,
      countInStock: 0,
      brand: 'QiYi',
      description: 'Шоо цуглуулагчдад тохиромжтой.'
    },
    {
      name: 'QiYi 3x3x3 Mirror /Gold/',
      slug: 'QiYi 3x3x3 Mirror /Gold/',
      category: 'Шоо',
      image: '/images/mirror3x3-3.jpg',
      price: 10000,
      countInStock: 0,
      brand: 'QiYi',
      description: 'Шоо цуглуулагчдад тохиромжтой.'
    },
    {
      name: 'QiYi 3X3x3 Mirror /Silver/',
      slug: 'QiYi 3X3x3 Mirror /Silver/',
      category: 'Шоо',
      image: '/images/mirror3x3-2.jpg',
      price: 10000,
      countInStock: 0,
      brand: 'QiYi',
      description: 'Шоо цуглуулагчдад тохиромжтой.'
    },
    {
      name: 'QiYi 3X3x3 Mirror /Blue/',
      slug: 'QiYi 3X3x3 Mirror /Blue/',
      category: 'Шоо',
      image: '/images/mirror3x3-1.jpg',
      price: 10000,
      countInStock: 0,
      brand: 'QiYi',
      description: 'Шоо цуглуулагчдад тохиромжтой.'
    },
    {
      name: 'QiYi Gear 3x3',
      slug: 'QiYi Gear 3x3',
      category: 'Шоо',
      image: '/images/Gear3.jpg',
      price: 12000,
      countInStock: 0,
      brand: 'QiYi',
      description: 'Шоо цуглуулагчдад тохиромжтой.'
    },
    {
      name: 'QiYi Gear Cylinder',
      slug: 'QiYi Gear Cylinder',
      category: 'Шоо',
      image: '/images/Gearcy.jpg',
      price: 14000,
      countInStock: 0,
      brand: 'QiYi',
      description: 'Шоо цуглуулагчдад тохиромжтой.'
    },
    {
      name: 'QiYi Gear Sphere',
      slug: 'QiYi Gear Sphere',
      category: 'Шоо',
      image: '/images/GearSphe.jpg',
      price: 14000,
      countInStock: 0,
      brand: 'QiYi',
      description: 'Шоо цуглуулагчдад тохиромжтой.'
    },
    {
      name: 'QiYi MS 3x3x3',
      slug: 'QiYi MS 3x3x3',
      category: 'Шоо',
      image: '/images/ms3x3.png',
      price: 18000,
      countInStock: 0,
      brand: 'QiYi',
      description: 'Дунд шатны суралцагчдад тохиромжтой. '
    },
    {
      name: 'QiYi MS Pyraminx',
      slug: 'QiYi MS Pyraminx',
      category: 'Шоо',
      image: '/images/mspyra.png',
      price: 18000,
      countInStock: 0,
      brand: 'QiYi',
      description: 'Дунд шатны суралцагчдад тохиромжтой. '
    },
    {
      name: 'QiYi Valk2 LM 2x2x2',
      slug: 'QiYi Valk2 LM 2x2x2',
      category: 'Шоо',
      image: '/images/valk2.jpg',
      price: 48000,
      countInStock: 0,
      brand: 'QiYi',
      description: 'Гүнзгий түвшиний тамирчдад тохиромжтой. '
    },
    {
      name: 'QiYi Valk3 M 3x3x3',
      slug: 'QiYi Valk3 M 3x3x3',
      category: 'Шоо',
      image: '/images/valk3.jpg',
      price: 60000,
      countInStock: 0,
      brand: 'QiYi',
      description: 'Гүнзгий түвшиний тамирчдад тохиромжтой. '
    },
    {
      name: 'QiYi Valk3 Elite M 3x3x3',
      slug: 'QiYi Valk3 Elite M 3x3x3',
      category: 'Шоо',
      image: '/images/elite1.jpg',
      price: 100000,
      countInStock: 0,
      brand: 'QiYi',
      description: 'Гүнзгий түвшиний тамирчдад тохиромжтой. '
    },
    {
      name: 'QiYi X-Man Pyraminx Bell V2',
      slug: 'QiYi X-Man Pyraminx Bell V2',
      category: 'Шоо',
      image: '/images/bellv2.jpg',
      price: 38000,
      countInStock: 0,
      brand: 'QiYi',
      description: 'Гүнзгий түвшиний тамирчдад тохиромжтой. '
    },
    {
      name: 'QiYi Valk4 M 4x4x4',
      slug: 'QiYi Valk4 M 4x4x4',
      category: 'Шоо',
      image: '/images/valk4.jpg',
      price: 100000,
      countInStock: 0,
      brand: 'QiYi',
      description: 'Гүнзгий түвшиний тамирчдад тохиромжтой. '
    },
    {
      name: 'QiYi MoFangGe Wuwei 3x3x3 M',
      slug: 'QiYi MoFangGe Wuwei 3x3x3 M',
      category: 'Шоо',
      image: '/images/wuwei3x3-2.jpg',
      price: 44000,
      countInStock: 0,
      brand: 'QiYi',
      description: 'Дунд шатны суралцагчдад тохиромжтой. '
    },
    {
      name: 'QiYi MoFangGe Wuwei 3x3x3 M /Хар/',
      slug: 'QiYi MoFangGe Wuwei 3x3x3 M /Хар/',
      category: 'Шоо',
      image: '/images/wuwei3x3-1.jpg',
      price: 44000,
      countInStock: 0,
      brand: 'QiYi',
      description: 'Дунд шатны суралцагчдад тохиромжтой. '
    },
    {
      name: 'QiYi Clock M',
      slug: 'QiYi Clock M',
      category: 'Шоо',
      image: '/images/clockm.jpg',
      price: 80000,
      countInStock: 0,
      brand: 'QiYi',
      description: 'Гүнзгий түвшиний тамирчдад тохиромжтой. '
    },
    {
      name: 'QiYi 2x2 Pyramorphix',
      slug: 'QiYi 2x2 Pyramorphix',
      category: 'Шоо',
      image: '/images/2x2pyra.jpg',
      price: 8000,
      countInStock: 0,
      brand: 'QiYi',
      description: 'Шоо цуглуулагчдад тохиромжтой. '
    },
    {
      name: 'QiYi Six Spot Cube',
      slug: 'QiYi Six Spot Cube',
      category: 'Шоо',
      image: '/images/sixspot.jpg',
      price: 8000,
      countInStock: 0,
      brand: 'QiYi',
      description: 'Шоо цуглуулагчдад тохиромжтой. '
    },
    {
      name: 'QiYi 1x3x3',
      slug: 'QiYi 1x3x3',
      category: 'Шоо',
      image: '/images/1x3x3.jpg',
      price: 7000,
      countInStock: 0,
      brand: 'QiYi',
      description: 'Шоо цуглуулагчдад тохиромжтой. '
    },
    {
      name: 'QiYi X Cube',
      slug: 'QiYi X Cube',
      category: 'Шоо',
      image: '/images/xcube.jpg',
      price: 8000,
      countInStock: 0,
      brand: 'QiYi',
      description: 'Шоо цуглуулагчдад тохиромжтой. '
    },
    {
      name: 'QiYi Clover Pyraminx',
      slug: 'QiYi Clover Pyraminx',
      category: 'Шоо',
      image: '/images/cloverpyra.jpg',
      price: 12000,
      countInStock: 0,
      brand: 'QiYi',
      description: 'Шоо цуглуулагчдад тохиромжтой. '
    },
    {
      name: 'QiYi Mini Ivy Keychain (Түлхүүрний оосор)',
      slug: 'QiYi Mini Ivy Keychain (Түлхүүрний оосор)',
      category: 'Шоо',
      image: '/images/ivyoosor.jpg',
      price: 6000,
      countInStock: 0,
      brand: 'QiYi',
      description: 'Шоо цуглуулагчдад тохиромжтой. '
    },
    {
      name: 'QiYi Mini Pyraminx Keychain (Түлхүүрний оосор)',
      slug: 'QiYi Mini Pyraminx Keychain (Түлхүүрний оосор)',
      category: 'Шоо',
      image: '/images/pyraoosor.jpg',
      price: 6000,
      countInStock: 0,
      brand: 'QiYi',
      description: 'Шоо цуглуулагчдад тохиромжтой. '
    },
    {
      name: 'QiYi Том Шооны дэвсгэр',
      slug: 'QiYi Том Шооны дэвсгэр',
      category: 'Шооны дагалдах хэрэгсэл',
      image: '/images/qiyibigmat.jpg',
      price: 20000,
      countInStock: 0,
      brand: 'QiYi',
      description: 'Шооны зориулалттай зузаан дэвсгэр.'
    },
    {
      name: 'QiYi Chest Bag',
      slug: 'QiYi Chest Bag',
      category: 'Шооны дагалдах хэрэгсэл',
      image: '/images/chest.jpg',
      price: 45000,
      countInStock: 0,
      brand: 'QiYi',
      description: 'Шооны зориулалттай 5-8ш шоо багтана.'
    },
    {
      name: 'QiYi M Bag V2',
      slug: 'QiYi M Bag V2',
      category: 'Шооны дагалдах хэрэгсэл',
      image: '/images/mbag.jpg',
      price: 30000,
      countInStock: 0,
      brand: 'QiYi',
      description: 'Шооны зориулалттай 8-10ш шоо багтана.'
    },
    {
      name: 'QiYi M-1 Шооны тос',
      slug: 'QiYi M-1 Шооны тос',
      category: 'Шооны дагалдах хэрэгсэл',
      image: '/images/m1.jpg',
      price: 4000,
      countInStock: 0,
      brand: 'QiYi',
      description: 'Шооны шингэн тос.'
    },
    {
      name: 'QiYi M-2 Шооны тос',
      slug: 'QiYi M-2 Шооны тос',
      category: 'Шооны дагалдах хэрэгсэл',
      image: '/images/m2.jpg',
      price: 8000,
      countInStock: 0,
      brand: 'QiYi',
      description: 'Шооны өтгөн тос.'
    },
    {
      name: 'QiYi Speed Cubing Timer',
      slug: 'QiYi Speed Cubing Timer',
      category: 'Шооны дагалдах хэрэгсэл',
      image: '/images/qiyitimer.jpg',
      price: 35000,
      countInStock: 0,
      brand: 'QiYi',
      description: 'Хугацаа хэмжигч'
    },
    {
      name: 'QiYi Mini 2x2 Түлхүүрний оосор',
      slug: 'QiYi Mini 2x2 Түлхүүрний оосор',
      category: 'Шоо',
      image: '/images/2x2oosor.jpg',
      price: 6000,
      countInStock: 0,
      brand: 'QiYi',
      description: 'Эвлүүлдэг Түлхүүрний оосор'
    },
    {
      name: 'QiYi Mini 3x3 Түлхүүрний оосор',
      slug: 'QiYi Mini 3x2 Түлхүүрний оосор',
      category: 'Шоо',
      image: '/images/3x3oosor.jpg',
      price: 6000,
      countInStock: 0,
      brand: 'QiYi',
      description: 'Эвлүүлдэг Түлхүүрний оосор'
    },
    {
      name: 'QiYi Timer Cable - Холбогч',
      slug: 'QiYi Timer Cable - Холбогч',
      category: 'Шооны дагалдах хэрэгсэл',
      image: '/images/qiyicable.jpg',
      price: 7000,
      countInStock: 0,
      brand: 'QiYi',
      description: 'Timer Cable - Холбогч.'
    },
    {
      name: 'QiYi Gear Түлхүүрний оосор',
      slug: 'QiYi Gear Түлхүүрний оосор',
      category: 'Шоо',
      image: '/images/gearoosor.jpg',
      price: 8000,
      countInStock: 0,
      brand: 'QiYi',
      description: 'Шоо цуглуулагчдад тохиромжтой.'
    },
    {
      name: 'QiYi X-Man Shadow 6x6x6 V2 M',
      slug: 'QiYi X-Man Shadow 6x6x6 V2 M',
      category: 'Шоо',
      image: '/images/shadow.jpg',
      price: 110000,
      countInStock: 0,
      brand: 'QiYi',
      description: 'Гүнзгий түвшиний тамирчдад тохиромжтой.'
    },
    {
      name: 'QiYi QiFa SQ1',
      slug: 'QiYi QiFa SQ1',
      category: 'Шоо',
      image: '/images/qifa.jpg',
      price: 15000,
      countInStock: 0,
      brand: 'QiYi',
      description: 'Анхан шатны суралцагчдад тохиромжтой.'
    },
    {
      name: 'QiYi Valk3 3x3x3',
      slug: 'QiYi Valk3 3x3x3',
      category: 'Шоо',
      image: '/images/valk33.jpg',
      price: 45000,
      countInStock: 0,
      brand: 'QiYi',
      description: 'Дунд шатны суралцагчдад тохиромжтой.'
    },
    {
      name: 'QiYi Fisher Cube',
      slug: 'QiYi Fisher Cube',
      category: 'Шоо',
      image: '/images/fisher.jpg',
      price: 8000,
      countInStock: 0,
      brand: 'QiYi',
      description: 'Шоо цуглуулагчдад тохиромжтой.'
    },
    {
      name: 'QiYi Magnetic Puzzle',
      slug: 'QiYi Magnetic Puzzle',
      category: 'Сэтгэхүй хөгжүүлэх puzzle',
      image: '/images/qiyipuzzle.jpg',
      price: 25000,
      countInStock: 0,
      brand: 'QiYi',
      description: 'Шоо цуглуулагчдад тохиромжтой.'
    },
    {
      name: 'QiYi 3cm Small Cube',
      slug: 'QiYi 3cm Small Cube',
      category: 'Шоо',
      image: '/images/3cm.jpg',
      price: 2000,
      countInStock: 0,
      brand: 'QiYi',
      description: 'Шоо цуглуулагчдад тохиромжтой.'
    },
    {
      name: 'QiYi Training Mat-Player One',
      slug: 'QiYi Training Mat-Player One',
      category: 'Шооны дагалдах хэрэгсэл',
      image: '/images/qiyimatt.jpg',
      price: 15000,
      countInStock: 0,
      brand: 'QiYi',
      description: 'Шооны зориулалттай зузаан дэвсгэр.'
    },
    {
      name: 'XMD Tornado V2 3x3 M',
      slug: 'XMD Tornado V2 3x3 M',
      category: 'Шоо',
      image: '/images/tornado.jpg',
      price: 55000,
      countInStock: 0,
      brand: 'QiYi',
      description: 'Гүнзгий түвшиний тамирчдад тохиромжтой.'
    },
    {
      name: 'QiYi Wingy Skewb M',
      slug: 'QiYi Wingy Skewb M',
      category: 'Шоо',
      image: '/images/wingy.jpg',
      price: 35000,
      countInStock: 0,
      brand: 'QiYi',
      description: 'Гүнзгий түвшиний тамирчдад тохиромжтой.'
    },
    {
      name: 'QiYi 1x3x3 Fidget Cube /Хар/',
      slug: 'QiYi 1x3x3 Fidget Cube /Хар/',
      category: 'Шоо',
      image: '/images/spinner2.jpg',
      price: 25000,
      countInStock: 0,
      brand: 'QiYi',
      description: 'Шоо цуглуулагчдад тохиромжтой.'
    },
    {
      name: 'QiYi 1x3x3 Fidget Cube /Тунгалаг/',
      slug: 'QiYi 1x3x3 Fidget Cube /Тунгалаг/ ',
      category: 'Шоо',
      image: '/images/spinner3.jpg',
      price: 25000,
      countInStock: 0,
      brand: 'QiYi',
      description: 'Шоо цуглуулагчдад тохиромжтой.'
    },
    {
      name: 'QiYi MP 2x2 M',
      slug: 'QiYi MP 2x2 M',
      category: 'Шоо',
      image: '/images/mp2.jpg',
      price: 25000,
      countInStock: 0,
      brand: 'QiYi',
      description: 'Дунд шатны суралцагчдад тохиромжтой.'
    },
    {
      name: 'QiYi MP 3x3 M',
      slug: 'QiYi MP 3x3 M',
      category: 'Шоо',
      image: '/images/mp3.jpg',
      price: 30000,
      countInStock: 0,
      brand: 'QiYi',
      description: 'Дунд шатны суралцагчдад тохиромжтой.'
    },
    {
      name: 'QiYi MP 5x5 M',
      slug: 'QiYi MP 5x5 M',
      category: 'Шоо',
      image: '/images/mp5.jpg',
      price: 45000,
      countInStock: 0,
      brand: 'QiYi',
      description: 'Дунд шатны суралцагчдад тохиромжтой.'
    },
    {
      name: 'QiYi Training Mat - Infinite Mind',
      slug: 'QiYi Training Mat - Infinite Mind',
      category: 'Шоо',
      image: '/images/qiyidewsger.jpg',
      price: 15000,
      countInStock: 0,
      brand: 'QiYi',
      description: 'Шооны зориулалттай зузаан дэвсгэр.'
    },
    {
      name: 'GAN 356RS 3x3',
      slug: 'GAN 356RS 3x3',
      category: 'Шоо',
      image: '/images/rs.jpg',
      price: 35000,
      countInStock: 0,
      brand: 'GAN',
      description: 'Дунд шатны суралцагчдад тохиромжтой.'
    },
    {
      name: 'GAN 356 XS',
      slug: 'GAN 356 XS',
      category: 'Шоо',
      image: '/images/xs.jpg',
      price: 125000,
      countInStock: 0,
      brand: 'GAN',
      description: 'Гүнзгий түвшиний тамирчдад тохиромжтой.'
    },
    {
      name: 'GAN 356 M 3x3 +Ges',
      slug: 'GAN 356 M 3x3 +Ges',
      category: 'Шоо',
      image: '/images/+ges.jpg',
      price: 90000,
      countInStock: 0,
      brand: 'GAN',
      description: 'Гүнзгий түвшиний тамирчдад тохиромжтой.'
    },
    {
      name: 'GAN 356 M 3x3 no +Ges',
      slug: 'GAN 356 M 3x3 no +Ges',
      category: 'Шоо',
      image: '/images/-ges.jpg',
      price: 70000,
      countInStock: 0,
      brand: 'GAN',
      description: 'Гүнзгий түвшиний тамирчдад тохиромжтой.'
    },
    {
      name: 'GAN 356 Air 3x3 M',
      slug: 'GAN 356 Air 3x3 M',
      category: 'Шоо',
      image: '/images/356air.jpg',
      price: 95000,
      countInStock: 0,
      brand: 'GAN',
      description: 'Гүнзгий түвшиний тамирчдад тохиромжтой.'
    },
    {
      name: 'GAN 11M Pro Frosted /Цагаан/',
      slug: 'GAN 11M Pro Frosted /Цагаан/',
      category: 'Шоо',
      image: '/images/11tsagaan.jpg',
      price: 185000,
      countInStock: 0,
      brand: 'GAN',
      description: 'Гүнзгий түвшиний тамирчдад тохиромжтой.'
    },
    {
      name: 'GAN 11M Pro Frosted /Хар/',
      slug: 'GAN 11M Pro Frosted /Хар/',
      category: 'Шоо',
      image: '/images/11har.jpg',
      price: 185000,
      countInStock: 0,
      brand: 'GAN',
      description: 'Гүнзгий түвшиний тамирчдад тохиромжтой.'
    },
    {
      name: 'GAN 354 V2 M Advanced',
      slug: 'GAN 354 V2 M Advanced',
      category: 'Шоо',
      image: '/images/354.jpg',
      price: 90000,
      countInStock: 0,
      brand: 'GAN',
      description: 'Гүнзгий түвшиний тамирчдад тохиромжтой.'
    },
    {
      name: 'MSCUBE MS3-V1 3x3 /Enhanced//Цагаан/',
      slug: 'MSCUBE MS3-V1 3x3 /Enhanced//Цагаан/',
      category: 'Шоо',
      image: '/images/mscubetsagaan.jpg',
      price: 85000,
      countInStock: 0,
      brand: 'GAN',
      description: 'Гүнзгий түвшиний тамирчдад тохиромжтой.'
    },
    {
      name: 'MSCUBE MS3-V1 3x3 /Enhanced//Хар/',
      slug: 'MSCUBE MS3-V1 3x3 /Enhanced//Хар/',
      category: 'Шоо',
      image: '/images/mscubehar.jpg',
      price: 85000,
      countInStock: 0,
      brand: 'GAN',
      description: 'Гүнзгий түвшиний тамирчдад тохиромжтой.'
    },
    {
      name: 'GAN 249 V2 M 2x2',
      slug: 'GAN 249 V2 M 2x2',
      category: 'Шоо',
      image: '/images/249.jpg',
      price: 55000,
      countInStock: 0,
      brand: 'GAN',
      description: 'Гүнзгий түвшиний тамирчдад тохиромжтой.'
    },
    {
      name: 'GAN 251 M 2x2',
      slug: 'GAN 251 M 2x2',
      category: 'Шоо',
      image: '/images/251m.jpg',
      price: 80000,
      countInStock: 0,
      brand: 'GAN',
      description: 'Гүнзгий түвшиний тамирчдад тохиромжтой.'
    },
    {
      name: 'GAN Skewb M /Enhanced/',
      slug: 'GAN Skewb M /Enhanced/',
      category: 'Шоо',
      image: '/images/ganskewb.jpg',
      price: 79000,
      countInStock: 0,
      brand: 'GAN',
      description: 'Гүнзгий түвшиний тамирчдад тохиромжтой.'
    },
    {
      name: 'GAN Monster GO 3x3 M',
      slug: 'GAN Monster GO 3x3 M',
      category: 'Шоо',
      image: '/images/mg3x3.jpg',
      price: 32000,
      countInStock: 0,
      brand: 'GAN',
      description: 'Дунд шатны суралцагчдад тохиромжтой.'
    },
    {
      name: 'GAN Monster GO 2x2 M',
      slug: 'GAN Monster GO 2x2 M',
      category: 'Шоо',
      image: '/images/mg2x2.jpg',
      price: 25000,
      countInStock: 0,
      brand: 'GAN',
      description: 'Дунд шатны суралцагчдад тохиромжтой.'
    },
    {
      name: 'GAN Monster GO Skewb M',
      slug: 'GAN Monster GO Skewb M',
      category: 'Шоо',
      image: '/images/mgskewb.jpg',
      price: 25000,
      countInStock: 0,
      brand: 'GAN',
      description: 'Дунд шатны суралцагчдад тохиромжтой.'
    },
    {
      name: 'GAN Monster GO Pyraminx M',
      slug: 'GAN Monster GO Pyraminx M',
      category: 'Шоо',
      image: '/images/mgpyra.jpg',
      price: 25000,
      countInStock: 0,
      brand: 'GAN',
      description: 'Дунд шатны суралцагчдад тохиромжтой.'
    },
    {
      name: 'GAN Timer Mat 30*30cm',
      slug: 'GAN Timer Mat 30*30cm',
      category: 'Шооны дагалдах хэрэгсэл',
      image: '/images/gandewsger.jpg',
      price: 15000,
      countInStock: 0,
      brand: 'GAN',
      description: 'Шооны зориулалттай зузаан дэвсгэр.'
    },
    {
      name: 'GAN Pyraminx M',
      slug: 'GAN Pyraminx M',
      category: 'Шоо',
      image: '/images/ganpyra.jpg',
      price: 48000,
      countInStock: 0,
      brand: 'GAN',
      description: 'Гүнзгий түвшиний тамирчдад тохиромжтой.'
    },
    {
      name: 'GAN Pyraminx M /Enhanced/',
      slug: 'GAN Pyraminx M /Enhanced/',
      category: 'Шоо',
      image: '/images/ganpyrages.jpg',
      price: 73000,
      countInStock: 0,
      brand: 'GAN',
      description: 'Гүнзгий түвшиний тамирчдад тохиромжтой.'
    },
    {
      name: 'GAN Megaminx M',
      slug: 'GAN Megaminx M',
      category: 'Шоо',
      image: '/images/ganmega.jpg',
      price: 130000,
      countInStock: 0,
      brand: 'GAN',
      description: 'Гүнзгий түвшиний тамирчдад тохиромжтой.'
    },
    {
      name: 'GAN Robot',
      slug: 'GAN Robot',
      category: 'Шоо',
      image: '/images/robot.jpg',
      price: 200000,
      countInStock: 0,
      brand: 'GAN',
      description: 'Шоо цуглуулагчдад тохиромжтой.'
    },
    {
      name: 'GAN 3x3 Түлхүүрний оосор',
      slug: 'GAN 3x3 Түлхүүрний оосор',
      category: 'Шоо',
      image: '/images/ganoosor.jpg',
      price: 22000,
      countInStock: 0,
      brand: 'GAN',
      description: 'Шоо цуглуулагчдад тохиромжтой.'
    },
    {
      name: 'GAN Smart Cube Timer /Хар/',
      slug: 'GAN Smart Cube Timer /Хар/',
      category: 'Шооны дагалдах хэрэгсэл',
      image: '/images/gantimerhar.jpg',
      price: 88000,
      countInStock: 0,
      brand: 'GAN',
      description: 'Смарт утастай холбогддог хугацаа хэмжигч'
    },
    {
      name: 'GAN Smart Cube Timer /Саарал/',
      slug: 'GAN Smart Cube Timer /Саарал/',
      category: 'Шооны дагалдах хэрэгсэл',
      image: '/images/gantimersaaral.jpg',
      price: 88000,
      countInStock: 0,
      brand: 'GAN',
      description: 'Смарт утастай холбогддог хугацаа хэмжигч'
    },
    {
      name: 'Monster GO MG Ai 3x3 Cube',
      slug: 'Monster GO MG Ai 3x3 Cube',
      category: 'Шоо',
      image: '/images/mgai3x3.jpg',
      price: 65000,
      countInStock: 0,
      brand: 'GAN',
      description: 'Смарт утастай холбогддог шоо.'
    },
    {
      name: 'GAN 356 i Curry 3x3',
      slug: 'GAN 356 i Curry 3x3',
      category: 'Шоо',
      image: '/images/carry3x3.jpg',
      price: 92000,
      countInStock: 0,
      brand: 'GAN',
      description: 'Смарт утастай холбогддог шоо.'
    },
    {
      name: 'GAN 11 Air 3x3',
      slug: 'GAN 11 Air 3x3',
      category: 'Шоо',
      image: '/images/11air.jpg',
      price: 69000,
      countInStock: 0,
      brand: 'GAN',
      description: 'Гүнзгий түвшиний тамирчдад тохиромжтой.'
    },
    {
      name: 'GAN 251 Air M 2x2',
      slug: 'GAN 251 Air M 2x2',
      category: 'Шоо',
      image: '/images/251mair.jpg',
      price: 66000,
      countInStock: 0,
      brand: 'GAN',
      description: 'Гүнзгий түвшиний тамирчдад тохиромжтой.'
    },
    {
      name: 'GAN 251 M Pro 2x2',
      slug: 'GAN 251 M Pro 2x2',
      category: 'Шоо',
      image: '/images/251mpro.jpg',
      price: 85000,
      countInStock: 0,
      brand: 'GAN',
      description: 'Гүнзгий түвшиний тамирчдад тохиромжтой.'
    },
    {
      name: 'GAN Y Adjust Tool',
      slug: 'GAN Y Adjust Tool',
      category: 'Шооны дагалдах хэрэгсэл',
      image: '/images/Y.jpg',
      price: 2000,
      countInStock: 0,
      brand: 'GAN',
      description: 'GAN Шооны түлхүүр'
    },
    {
      name: 'GAN Display Stand - 3x3 Шооны суурь',
      slug: 'GAN Display Stand - 3x3 Шооны суурь',
      category: 'Шооны дагалдах хэрэгсэл',
      image: '/images/gansuuri.jpg',
      price: 15000,
      countInStock: 0,
      brand: 'GAN',
      description: 'GAN Шооны суурь'
    },
    {
      name: 'GAN Шооны суурь',
      slug: 'GAN Шооны суурь',
      category: 'Шооны дагалдах хэрэгсэл',
      image: '/images/gansuuri11.jpg',
      price: 4000,
      countInStock: 0,
      brand: 'GAN',
      description: 'GAN Шооны суурь'
    },
    {
      name: 'GAN 356 i Play Smart 3x3 Cube',
      slug: 'GAN 356 i Play Smart 3x3 Cube',
      category: 'Шоо',
      image: '/images/356play.jpg',
      price: 145000,
      countInStock: 0,
      brand: 'GAN',
      description: 'Смарт утастай холбогддог шоо.'
    },
    {
      name: 'GAN 356i Smart 3x3 Cube',
      slug: 'GAN 356i Smart 3x3 Cube',
      category: 'Шоо',
      image: '/images/356i.jpg',
      price: 200000,
      countInStock: 0,
      brand: 'GAN',
      description: 'Смарт утастай холбогддог шоо.'
    },
    {
      name: 'GAN 12 Maglev Frost 3x3 M',
      slug: 'GAN 12 Maglev Frost 3x3 M',
      category: 'Шоо',
      image: '/images/12pro.jpg',
      price: 190000,
      countInStock: 0,
      brand: 'GAN',
      description: 'Гүнзгий түвшиний тамирчдад тохиромжтой.'
    },
    {
      name: 'GAN Mini 3x3 M Pro',
      slug: 'GAN Mini 3x3 M Pro',
      category: 'Шоо',
      image: '/images/minipro.jpg',
      price: 130000,
      countInStock: 0,
      brand: 'GAN',
      description: 'Гүнзгий түвшиний тамирчдад тохиромжтой.'
    },
    {
      name: 'GAN Шооны Уут',
      slug: 'GAN Шооны Уут',
      category: 'Шоо',
      image: '/images/ganuut.jpg',
      price: 4000,
      countInStock: 0,
      brand: 'GAN',
      description: 'GAN Шооны Уут.'
    },
    {
      name: 'YJ YuLong 3x3 M',
      slug: 'YJ YuLong 3x3 M',
      category: 'Шоо',
      image: '/images/yj3x3.jpg',
      price: 17000,
      countInStock: 0,
      brand: 'YJ',
      description: 'Дунд шатны суралцагчдад тохиромжтой.'
    },
    {
      name: 'YJ YuShi V2 6x6 M',
      slug: 'YJ YuShi V2 6x6 M',
      category: 'Шоо',
      image: '/images/yj6x6.jpg',
      price: 39000,
      countInStock: 0,
      brand: 'YJ',
      description: 'Дунд шатны суралцагчдад тохиромжтой.'
    },
    {
      name: 'YJ YuHu Megaminx',
      slug: 'YJ YuHu Megaminx',
      category: 'Шоо',
      image: '/images/yjmega.jpg',
      price: 30000,
      countInStock: 0,
      brand: 'YJ',
      description: 'Дунд шатны суралцагчдад тохиромжтой.'
    },
    {
      name: 'YJ MGC 6x6 M',
      slug: 'YJ MGC 6x6 M',
      category: 'Шоо',
      image: '/images/mgc6.jpg',
      price: 54000,
      countInStock: 0,
      brand: 'YJ',
      description: 'Гүнзгий түвшиний тамирчдад тохиромжтой.'
    },
    {
      name: 'YJ MGC 4x4 M',
      slug: 'YJ MGC 4x4 M',
      category: 'Шоо',
      image: '/images/mgc4.jpg',
      price: 40000,
      countInStock: 0,
      brand: 'YJ',
      description: 'Гүнзгий түвшиний тамирчдад тохиромжтой.'
    },
    {
      name: 'YJ Blind 3x3 Cube',
      slug: 'YJ Blind 3x3 Cube',
      category: 'Шоо',
      image: '/images/yjblind.jpg',
      price: 12000,
      countInStock: 0,
      brand: 'YJ',
      description: 'Шоо цуглуулагчдад тохиромжтой.'
    },
    {
      name: 'MoYu WeiPo WR 2x2 M /2020/',
      slug: 'MoYu WeiPo WR 2x2 M /2020/',
      category: 'Шоо',
      image: '/images/wr2x2.jpg',
      price: 45000,
      countInStock: 0,
      brand: 'MoYu',
      description: 'Гүнзгий түвшиний тамирчдад тохиромжтой.'
    },
    {
      name: 'MoYu AoSu WR 4x4 M',
      slug: 'MoYu AoSu WR 4x4 M',
      category: 'Шоо',
      image: '/images/wr4x4.jpg',
      price: 100000,
      countInStock: 0,
      brand: 'MoYu',
      description: 'Гүнзгий түвшиний тамирчдад тохиромжтой.'
    },
    {
      name: 'Meilong 10x10x10',
      slug: 'Meilong 10x10x10',
      category: 'Шоо',
      image: '/images/meilong10x10.jpg',
      price: 140000,
      countInStock: 0,
      brand: 'MoYu',
      description: 'Шоо цуглуулагчдад тохиромжтой.'
    },
    {
      name: 'MoYu AoHun WR Megaminx M',
      slug: 'MoYu AoHun WR Megaminx M',
      category: 'Шоо',
      image: '/images/wrmega.jpg',
      price: 70000,
      countInStock: 0,
      brand: 'MoYu',
      description: 'Гүнзгий түвшиний тамирчдад тохиромжтой.'
    },
    {
      name: 'Meilong Megaminx Cube',
      slug: 'Meilong Megaminx Cube',
      category: 'Шоо',
      image: '/images/meilongmega.jpg',
      price: 17000,
      countInStock: 0,
      brand: 'MoYu',
      description: 'Анхан шатны суралцагчдад тохиромжтой.'
    },
    {
      name: 'Meilong Souble Skewb',
      slug: 'Meilong Souble Skewb',
      category: 'Шоо',
      image: '/images/doubleskewb.jpg',
      price: 12000,
      countInStock: 0,
      brand: 'MoYu',
      description: 'Шоо цуглуулагчдад тохиромжтой.'
    },
    {
      name: 'MoYu AoYan Skewb M',
      slug: 'MoYu AoYan Skewb M',
      category: 'Шоо',
      image: '/images/aoyan.jpg',
      price: 42000,
      countInStock: 0,
      brand: 'MoYu',
      description: 'Гүнзгий түвшиний тамирчдад тохиромжтой.'
    },
    {
      name: 'Meilong 2x2 M',
      slug: 'Meilong 2x2 M',
      category: 'Шоо',
      image: '/images/meilong2x2m.jpg',
      price: 14000,
      countInStock: 0,
      brand: 'MoYu',
      description: 'Дунд шатны суралцагчдад тохиромжтой.'
    },
    {
      name: 'Shengshou 8x8 Cube',
      slug: 'Shengshou 8x8 Cube',
      category: 'Шоо',
      image: '/images/sengso8x8.jpg',
      price: 94000,
      countInStock: 0,
      brand: 'MoYu',
      description: 'Шоо цуглуулагчдад тохиромжтой.'
    },
    {
      name: 'Shengshou 9x9 Cube',
      slug: 'Shengshou 9x9 Cube',
      category: 'Шоо',
      image: '/images/sengso9x9.jpg',
      price: 99000,
      countInStock: 0,
      brand: 'MoYu',
      description: 'Шоо цуглуулагчдад тохиромжтой.'
    },
    {
      name: 'MoYu Weilong WR 3x3 M 2021 /Enhanced/',
      slug: 'MoYu Weilong WR 3x3 M 2021 /Enhanced/',
      category: 'Шоо',
      image: '/images/weilong3x3.jpg',
      price: 85000,
      countInStock: 0,
      brand: 'MoYu',
      description: 'Гүнзгий түвшиний тамирчдад тохиромжтой.'
    },
    {
      name: 'MoYu Том Шооны Цүнх',
      slug: 'MoYu Том Шооны Цүнх',
      category: 'Шооны дагалдах хэрэгсэл',
      image: '/images/moyubag.jpg',
      price: 65000,
      countInStock: 0,
      brand: 'MoYu',
      description: 'MoYu 10-15ш шоо багтах Том Шооны Цүнх'
    },
    {
      name: 'Meilong 9x9 Cube',
      slug: 'Meilong 9x9 Cube',
      category: 'Шоо',
      image: '/images/meilong9x9.jpg',
      price: 100000,
      countInStock: 0,
      brand: 'MoYu',
      description: 'Шоо цуглуулагчдад тохиромжтой.'
    },
    {
      name: 'Meilong 13x13 Cube',
      slug: 'Meilong 13x13 Cube',
      category: 'Шоо',
      image: '/images/13x13.jpg',
      price: 350000,
      countInStock: 0,
      brand: 'MoYu',
      description: 'Шоо цуглуулагчдад тохиромжтой.'
    },
    {
      name: 'MoFangJiaoShi Pandora Cube',
      slug: 'MoFangJiaoShi Pandora Cube',
      category: 'Шоо',
      image: '/images/pandora.jpg',
      price: 12000,
      countInStock: 0,
      brand: 'MoYu',
      description: 'Шоо цуглуулагчдад тохиромжтой.'
    },
    {
      name: 'DaYan GuHong V3 3x3 M',
      slug: 'DaYan GuHong V3 3x3 M',
      category: 'Шоо',
      image: '/images/guhongv3.jpg',
      price: 35000,
      countInStock: 0,
      brand: 'Бусад',
      description: 'Дунд шатны суралцагчдад тохиромжтой.'
    },
    {
      name: 'DaYan TengYun 3x3 M',
      slug: 'DaYan TengYun 3x3 M',
      category: 'Шоо',
      image: '/images/tengyun.jpg',
      price: 65000,
      countInStock: 0,
      brand: 'Бусад',
      description: 'Гүнзгий түвшиний тамирчдад тохиромжтой.'
    },
    {
      name: 'YuXin Panda 2x2 Cube',
      slug: 'YuXin Panda 2x2 Cube',
      category: 'Шоо',
      image: '/images/panda.jpg',
      price: 18000,
      countInStock: 0,
      brand: 'Бусад',
      description: 'Шоо цуглуулагчдад тохиромжтой.'
    },
    {
      name: 'YuXin Penguin 2x2 Cube',
      slug: 'YuXin Penguin 2x2 Cube',
      category: 'Шоо',
      image: '/images/penguin.jpg',
      price: 30000,
      countInStock: 0,
      brand: 'Бусад',
      description: 'Шоо цуглуулагчдад тохиромжтой.'
    },
    {
      name: 'YuXin Little Magic Square-1 M',
      slug: 'YuXin Little Magic Square-1 M',
      category: 'Шоо',
      image: '/images/yuxinsq1.jpg',
      price: 25000,
      countInStock: 0,
      brand: 'Бусад',
      description: 'Дунд шатны суралцагчдад тохиромжтой.'
    },
    {
      name: 'Z Cube CFOP Card',
      slug: 'Z Cube CFOP Card',
      category: 'Шоо',
      image: '/images/cfop.jpg',
      price: 2000,
      countInStock: 0,
      brand: 'Бусад',
      description: 'Шоо цуглуулагчдад тохиромжтой.'
    },
    {
      name: 'YuXin Huanglong Pyraminx M',
      slug: 'YuXin Huanglong Pyraminx M',
      category: 'Шоо',
      image: '/images/huanglongpyra.jpg',
      price: 35000,
      countInStock: 0,
      brand: 'Бусад',
      description: 'Гүнзгий түвшиний тамирчдад тохиромжтой.'
    },
    {
      name: 'YuXin Puzzle Maze Ball',
      slug: 'YuXin Puzzle Maze Ball',
      category: 'Сэтгэхүй хөгжүүлэх puzzle',
      image: '/images/mazz.jpg',
      price: 15000,
      countInStock: 0,
      brand: 'Бусад',
      description: 'Шоо цуглуулагчдад тохиромжтой.'
    },
    {
      name: '1x1 Оосор',
      slug: '1x1 Оосор',
      category: 'Шоо',
      image: '/images/1x1.jpg',
      price: 6000,
      countInStock: 0,
      brand: 'Бусад',
      description: 'Шоо цуглуулагчдад тохиромжтой.'
    },
    {
      name: 'DaYan TengYun V2 3x3 M',
      slug: 'DaYan TengYun V2 3x3 M',
      category: 'Шоо',
      image: '/images/tengyunv2.jpg',
      price: 70000,
      countInStock: 0,
      brand: 'Бусад',
      description: 'Гүнзгий түвшиний тамирчдад тохиромжтой.'
    },
    {
      name: 'Cubelab 1cm Mini 3x3',
      slug: 'Cubelab 1cm Mini 3x3',
      category: 'Шоо',
      image: '/images/1cm.jpg',
      price: 22000,
      countInStock: 0,
      brand: 'Бусад',
      description: 'Шоо цуглуулагчдад тохиромжтой.'
    },
    {
      name: 'DaYan Zhanchi 3x3 Pro M',
      slug: 'DaYan Zhanchi 3x3 Pro M',
      category: 'Шоо',
      image: '/images/zhanchipro-1.jpg',
      price: 85000,
      countInStock: 0,
      brand: 'Бусад',
      description: 'Гүнзгий түвшиний тамирчдад тохиромжтой.'
    },
    {
      name: 'DaYan Zhanchi 3x3 Pro M /Хар/',
      slug: 'DaYan Zhanchi 3x3 Pro M /Хар/',
      category: 'Шоо',
      image: '/images/zhanchipro-2.jpg',
      price: 85000,
      countInStock: 0,
      brand: 'Бусад',
      description: 'Гүнзгий түвшиний тамирчдад тохиромжтой.'
    },
    {
      name: 'FanXin Basketball 3x3 (Orange)',
      slug: 'FanXin Basketball 3x3 (Orange)',
      category: 'Шоо',
      image: '/images/ball3.jpg',
      price: 8000,
      countInStock: 0,
      brand: 'Бусад',
      description: 'Шоо цуглуулагчдад тохиромжтой.'
    },
    {
      name: 'FanXin Basketball 3x3 (Red)',
      slug: 'FanXin Basketball 3x3 (Red)',
      category: 'Шоо',
      image: '/images/ball1.jpg',
      price: 8000,
      countInStock: 0,
      brand: 'Бусад',
      description: 'Шоо цуглуулагчдад тохиромжтой.'
    },
    {
      name: 'FanXin Basketball 3x3 (Blue)',
      slug: 'FanXin Basketball 3x3 (Blue)',
      category: 'Шоо',
      image: '/images/ball2.jpg',
      price: 8000,
      countInStock: 0,
      brand: 'Бусад',
      description: 'Шоо цуглуулагчдад тохиромжтой.'
    },
    {
      name: 'Speed Stacks G4 Handbag',
      slug: 'Speed Stacks G4 Handbag',
      category: 'Шооны дагалдах хэрэгсэл',
      image: '/images/speedstacksbag.jpg',
      price: 10000,
      countInStock: 0,
      brand: 'Бусад',
      description: '8-10 ширхэг шоо багтана.'
    },
    {
      name: 'SengSo 4x4 M Clock',
      slug: 'SengSo 4x4 M Clock',
      category: 'Шоо',
      image: '/images/clock4x4.jpg',
      price: 25000,
      countInStock: 0,
      brand: 'Бусад',
      description: 'Шоо цуглуулагчдад тохиромжтой.'
    },
    {
      name: 'SengSo Pentagram Spinner',
      slug: 'SengSo Pentagram Spinner',
      category: 'Шоо',
      image: '/images/pentagram.jpg',
      price: 20000,
      countInStock: 0,
      brand: 'Бусад',
      description: 'Шоо цуглуулагчдад тохиромжтой.'
    },
    {
      name: 'QiYi QiZheng S 5x5x5',
      slug: 'QiYi QiZheng S 5x5x5',
      category: 'Шоо',
      image: '/images/4.jpg',
      price: 15000,
      countInStock: 0,
      brand: 'QiYi',
      description: 'Анхан шатны суралцагчдад тохиромжтой.'
    }
  ]
};
export default data;
