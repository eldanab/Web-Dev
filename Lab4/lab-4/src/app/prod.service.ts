import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProdService {
  protected productsList: Product[] = [
    {
      id: 0,
      name: 'Lador Moisture Balancing',
      image: 'assets/images/conditioner.jpg',
      description: 'Идеальный комплект для тех, кто хочет обеспечить свои волосы максимальной защитой и уходом.',
      price: 7929,
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/lador-moisture-balancing-nabor-po-uhodu-za-volosami-dlja-zhenschin-110402693/?0&c=750000000&ref=shared_link'
    },
    {
      id: 1,
      name: 'Avior AV-7055',
      image: 'assets/images/fan.jpg',
      'description': 'Фен-щетка Avior представляет собой инновационный инструмент для стилизации волос, объединяющий в себе функции фена и расчески.',
      'price': 16500,
      'rating': 4.7,
      'link': 'https://kaspi.kz/shop/p/avior-av-7055-vraschajuschiisja-fen-schetka-2000-vt-115185587/?0&c=750000000&ref=shared_link',
    },
    {
      "id": 2,
      "name": "Birth Juice Moisturizing",
      "image": "assets/images/cream.jpg",
      "description": "Увлажняющий крем для лица из березового сока отлично увлажняет кожу благодаря гиалуроновой кислоте Vita.",
      "price": 4989,
      "rating": 4.8,
      "link": "https://kaspi.kz/shop/p/round-lab-krem-birch-juice-moisturizing-dlja-litsa-80-ml-105496795/?0&c=750000000&ref=shared_link"
    },
    {
      "id": 3,
      "name": "CASIO LTP-V007L-9BUDF",
      "image": "assets/images/clock.jpg",
      "description": "Кварцевые часы Casio из нержавеющей стали для женщин.",
      "price": 16690,
      "rating": 4.9,
      "link": "https://kaspi.kz/shop/p/kvartsevye-casio-ltp-v007l-9budf-nerzhavejuschaja-stal--108828818/?0&c=750000000&ref=shared_link"
    },
    {
      "id": 4,
      "name": "Koleer S888",
      "image": "assets/images/speaker.jpg",
      "description": "Черная портативная колонка с микрофонами, работает от аккумулятора, врема работы 5 ч, мощность 10.0 Вт.",
      "price": 11486,
      "rating": 4.8,
      "link": "https://kaspi.kz/shop/p/portativnaja-kolonka-koleer-s888-chernyi-118515240/?0&c=750000000&ref=shared_link"
    },
    {
      "id": 5,
      "name": "Polaris PHM 5014",
      "image": "assets/images/mixer.jpg",
      "description": "5 скоростей + турбо режим для обеспечения оптимального результатаЖЖ от смешивания ингредиентов на низкой скорости до взбивания белков на максимальных оборотах.",
      "price": 13900,
      "rating": 4.7,
      "link":"https://kaspi.kz/shop/p/polaris-phm-5014-chernyi-10900007/?0&c=750000000&ref=shared_link"
    },
    {
      "id": 6,
      "name": "Apple Iphone 16",
      "image": "assets/images/iphone.jpg",
      "description": "Iphone 16 - новый дизайн яркие цвета, мощный процессор и свежая iOS 18с искусственным интелектом.",
      "price": 418885,
      "rating": 4.9,
      "link": "https://kaspi.kz/shop/p/apple-iphone-16-128gb-chernyi-123713453/?0&c=750000000&ref=shared_link"
    },
    {
      "id": 7,
      "name": "Apple MacBook Air 13",
      "image": "assets/images/macbook.jpg",
      "description": "MacBook Air 13 2024 - это ультракомпактный ноутбук на процессоре Apple M3, ориентированный на максимальную автономность",
      "price": 759429,
      "rating": 4.9,
      "link": "https://kaspi.kz/shop/p/apple-macbook-air-13-2024-13-6-8-gb-ssd-512-gb-macos-mrxp3ru-a-118170753/?0&c=750000000&ref=shared_link"
    },
    {
      "id": 8,
      "name": "Machenlike G1",
      "image": "assets/images/joystick.jpg",
      "description": "Беспроводной игровой контроллер в розовом цвете со встоенным аккумулятором.",
      "price": 16990,
      "rating": 4.5,
      "link": "https://kaspi.kz/shop/p/machenike-g1-rozovyi-134914190/?0&c=750000000&ref=shared_link"
    },
    {
      "id": 9,
      "name": "Apple AirPods Max",
      "image": "assets/images/headphone.jpg",
      "description": "Apple AirPods Max разработана с применением первоклассных материалов и передовых технологий.",
      "price": 270246,
      "rating": 4.9,
      "link": "https://kaspi.kz/shop/p/apple-airpods-max-chernyi-100950846/?0&c=750000000&ref=shared_link"
    }
  ];
  constructor() { }
  getAllProducts(): Product[] {
    return this.productsList;
  }

  getProductById(id: number): Product | undefined {
    return this.productsList.find((product) => product.id === id);
  }
}
