import { Injectable } from '@angular/core';
import { Category } from './category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private categories: Category[] = [
    {
      id: 1,
      name: 'Gadgets',
      productList: [
        {
          "name": "Apple MacBook Air 13",
          "image": "assets/images/macbook.jpg",
          "description": "MacBook Air 13 2024 - это ультракомпактный ноутбук на процессоре Apple M3, ориентированный на максимальную автономность",
          "price": 759429,
          "rating": 4.9,
          "link": "https://kaspi.kz/shop/p/apple-macbook-air-13-2024-13-6-8-gb-ssd-512-gb-macos-mrxp3ru-a-118170753/?0&c=750000000&ref=shared_link",
          "likes": 0
        },
        {
          "name": "Apple Iphone 16",
          "image": "assets/images/iphone.jpg",
          "description": "Iphone 16 - новый дизайн яркие цвета, мощный процессор и свежая iOS 18с искусственным интелектом.",
          "price": 418885,
          "rating": 4.9,
          "link": "https://kaspi.kz/shop/p/apple-iphone-16-128gb-chernyi-123713453/?0&c=750000000&ref=shared_link",
          "likes": 0
        },
        {
          "name": "Apple AirPods Max",
          "image": "assets/images/headphone.jpg",
          "description": "Apple AirPods Max разработана с применением первоклассных материалов и передовых технологий.",
          "price": 270246,
          "rating": 4.9,
          "link": "https://kaspi.kz/shop/p/apple-airpods-max-chernyi-100950846/?0&c=750000000&ref=shared_link",
          "likes": 0
        },
        {
          "name": "Apple Watch SE2",
          "image": "assets/images/clock.jpeg",
          "description": "Apple Watch SE 2 Gen 2022 смартөчасы оснащены гибким силиконовым ремешком и квадратным сенсорным дисплеем с технологией OLED.",
          "price": 119827,
          "rating": 4.9,
          "link": "https://kaspi.kz/shop/p/apple-watch-se-2-gen-2022-40-mm-starlight-bezhevyi-106362759/?0&c=750000000&ref=shared_link",
          "likes": 0
        },
        {
          "name": "Amazon Kindle Paperwhite",
          "image": "assets/images/kindle.jpeg",
          "description": "Элекронная книга Amazon Kindle Paperwhite 2021 оснащена 6.8 дюмовым экраном с разрешением 1236х1648 и плотностью пикселей 300 ppi для демонстрации детализированного изображенияю",
          "price": 109990,
          "rating": 4.9,
          "link": "https://kaspi.kz/shop/p/amazon-kindle-paperwhite-2021-chernyi-107940321/?0&c=750000000&ref=shared_link",
          "likes": 0
        }
      ]
    },
    {
      id: 2,
      name: 'Skincare',
      productList: [
        {
          name: 'Lador Moisture Balancing',
          image: 'assets/images/conditioner.jpg',
          description: 'Идеальный комплект для тех, кто хочет обеспечить свои волосы максимальной защитой и уходом.',
          price: 7929,
          rating: 4.9,
          link: 'https://kaspi.kz/shop/p/lador-moisture-balancing-nabor-po-uhodu-za-volosami-dlja-zhenschin-110402693/?0&c=750000000&ref=shared_link',
          likes: 0
        },
        {
          "name": "Birth Juice Moisturizing",
          "image": "assets/images/cream.jpg",
          "description": "Увлажняющий крем для лица из березового сока отлично увлажняет кожу благодаря гиалуроновой кислоте Vita.",
          "price": 4989,
          "rating": 4.8,
          "link": "https://kaspi.kz/shop/p/round-lab-krem-birch-juice-moisturizing-dlja-litsa-80-ml-105496795/?0&c=750000000&ref=shared_link",
          "likes": 0
        },
        {
          "name": "Anua Heartleaf Pore Control",
          "image": "assets/images/oil.jpeg",
          "description": "Очищающее гидрофильное масло с экстрактом обеспечивает глубокое и ээффективное очищение кожи от декоративной косметики и загрязнений.",
          "price": 2623,
          "rating": 4.5,
          "link": "https://kaspi.kz/shop/p/anua-heartleaf-pore-control-gidrofil-noe-maslo-200-ml-114395630/?0&c=750000000&ref=shared_link",
          "likes": 0
        },
        {
          "name": "Atomy Deep Cleanser",
          "image": "assets/images/atomy.jpeg",
          "description": "Гидрофильный крем для глубокого очищения кожи и удаления макияжа. Очищает поры от загрязнений, расстворяет и удаляет макияж, увлажняет кожу.",
          "price": 4500,
          "rating": 4.9,
          "link": "https://kaspi.kz/shop/p/atomy-deep-cleanser-krem-150-ml-108691896/?0&c=750000000&ref=shared_link",
          "likes": 0
        },
        {
          "name": "The Act Deeply Moisturising",
          "image": "assets/images/act.jpeg",
          "description": "Питание, увлажнение, регенерация кожи и защита от свободных радикалов ө это ключевые аспекты профессионального ухода.",
          "price": 4998,
          "rating": 4.7,
          "link": "https://kaspi.kz/shop/p/the-act-deeply-moisturising-xx-los-on-dlja-tela-460-ml-113584244/?c=750000000&sr=5&qid=56fd52337d2342a55cd6d247718fb827&ref=shared_link",
          "likes": 0
        }
      ]
    },
    {
      id: 3,
      name: 'Accessories',
      productList: [
        {
          "name": "Alberto Casiano Slash Black",
          "image": "assets/images/alberto.jpg",
          "description": "Очки Alberto Casiano - харизматичный аксессуар, который задает тренд, эффектно подчеркнет индивидуальность и стремление следовать модным традициям.",
          "price": 13900,
          "rating": 4.9,
          "link": "https://kaspi.kz/shop/p/alberto-casiano-slash-black-kvadratnye-odnotonnye-101234792/?c=750000000&ref=shared_link",
          "likes": 0
        },
        {
          "name": "CASIO LTP-V007L-9BUDF",
          "image": "assets/images/clock.jpg",
          "description": "Кварцевые часы Casio из нержавеющей стали для женщин.",
          "price": 16690,
          "rating": 4.9,
          "link": "https://kaspi.kz/shop/p/kvartsevye-casio-ltp-v007l-9budf-nerzhavejuschaja-stal--108828818/?0&c=750000000&ref=shared_link",
          "likes": 0
        },
        {
          "name": "US POLO ASSN",
          "image": "assets/images/us.jpg",
          "description": "Сумка кросс-боди на плечо от U.S. POLO ASSN является идеальным сочетанием стиля и функциональности.",
          "price": 22000,
          "rating": 5.0,
          "link": "https://kaspi.kz/shop/p/sumka-kross-bodi-us-polo-assn-27a324-aa00a-iskusstvennaja-kozha-serebristyi-132996904/?c=750000000&ref=shared_link",
          "likes": 0
        },
        {
          "name": "Pandora Bracelet",
          "image": "assets/images/pandora.jpg",
          "description": "Изготовленный из гладкого сверкающего серебра, браслет Pandora с плетением змейкой оснащен фирменной цилиндрической застежкой.",
          "price": 30320,
          "rating": 4.9,
          "link": "https://kaspi.kz/shop/p/pandora-s-zastezhkoi-sharmom-590702hv-17-dlina-17-sm-ves-13-16-g-serebro-101671585/?c=750000000&ref=shared_link",
          "likes": 0
        },
        {
          "name": "SOKOLOV Ring",
          "image": "assets/images/sokolov.jpg",
          "description": "Красивое и нежное кольцо из серебра",
          "price": 28888,
          "rating": 5.0,
          "link": "https://kaspi.kz/shop/p/sokolov-87010024-sk16-razmer-18-ves-1-9-g-serebro-brilliant-100544129/?c=750000000&ref=shared_link",
          "likes": 0
        }
      ]
    },
    {
      id: 4,
      name: 'Clothing',
      productList: [
        {
          "name": "Куртка The North Face",
          "image": "assets/images/north.jpg",
          "description": "Черный и зеленый пуховик со съемным капюшоном с натуральным пухом на период осень-зима",
          "price": 156800,
          "rating": 5.0,
          "link": "https://kaspi.kz/shop/p/puhovik-the-north-face-nf0a3xeonl11-chernyi-zelenyi-xl-132399572/?c=750000000&m=30146266&sr=1&qid=3d4269922dc91df3ea75f36332096c55&isPromoted=true&hasVariants=true&ref=shared_link",
          "likes": 0
        },
        {
          "name": "Джинсовая куртка DeFacto",
          "image": "assets/images/defacto.jpg",
          "description": "Силуэт: прямой; Капюшон: отсутствует; Состав: хлопок; Узор: однотонный",
          "price": 30760,
          "rating": 4.8,
          "link": "https://kaspi.kz/shop/p/dzhinsovaja-kurtka-levis-29945-0070-chernyi-xl-105679630/?c=750000000&sr=6&qid=e0df978a6b4110fe643d945c84e6b4a7&ref=shared_link",
          "likes": 0
        },
        {
          "name": "Adidas Hoodie",
          "image": "assets/images/adidas.jpg",
          "description": "Практичныый худи, дополненная логотипом Badge of Sport - оптимальный вариант для уютных образов на каждый день",
          "price": 25890,
          "rating": 5.0,
          "link": "https://kaspi.kz/shop/p/hudi-adidas-iy4309a01-rozovyi-xs-128965220/?c=750000000&m=Sportmaster&sr=2&qid=bb0ae445a5edeb723a3b558173b33ce1&isPromoted=true&hasVariants=true&ref=shared_link",
          "likes": 0
        },
        {
          "name": "Джоггеры DeFacto",
          "image": "assets/images/jogg.jpg",
          "description": "Коллекция: осень-зима, Посадка: высокая, Страна производителя: Турция",
          "price": 3999,
          "rating": 4.7,
          "link": "https://kaspi.kz/shop/p/dzhoggery-defacto-y0812az23wngr91-seryi-s-131668895/?c=750000000&sr=9&qid=c2643bdaf1cbebf739341da858a0782f&ref=shared_link",
          "likes": 0
        },
        {
          "name": "Свитшот Levi's",
          "image": "assets/images/levi.jpg",
          "description": "Коллекция: осень-зима 2024; Силуэт: свободный крой; Состав: хлопок; Страна производителя: Вьетнам",
          "price": 24450,
          "rating": 5.0,
          "link": "https://kaspi.kz/shop/p/svitshot-levis-a8800-0038-chernyi-xs-128964798/?c=750000000&m=Levis&sr=4&qid=b124b30d8446242838da5befe7b2f9c8&isPromoted=true&hasVariants=true&ref=shared_link",
          "likes": 0
        }
      ]
    }
  ];

  constructor() {}

  getCategories(): Category[] {
    return this.categories;
  }

  getCategoryById(id: number): Category | undefined {
    return this.categories.find(category => category.id === id);
  }
}
