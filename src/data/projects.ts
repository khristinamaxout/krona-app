/**
 * Реализованные проекты мебельной студии «Крона».
 * Фотографии — авторская съёмка, обработанная в единой стилистике сайта.
 */

import a1_0 from "@/assets/proj/1_photo_000.jpg.asset.json";
import a1_1 from "@/assets/proj/1_photo_001.jpg.asset.json";
import a1_2 from "@/assets/proj/1_photo_002.jpg.asset.json";
import a1_3 from "@/assets/proj/1_photo_003.jpg.asset.json";
import a2_0 from "@/assets/proj/2_photo_000.jpg.asset.json";
import a2_1 from "@/assets/proj/2_photo_001.jpg.asset.json";
import a3_0 from "@/assets/proj/3_photo_000.jpg.asset.json";
import a3_1 from "@/assets/proj/3_photo_001.jpg.asset.json";
import a3_2 from "@/assets/proj/3_photo_002.jpg.asset.json";
import a3_3 from "@/assets/proj/3_photo_003.jpg.asset.json";
import a4_0 from "@/assets/proj/4_photo_000.jpg.asset.json";
import a4_1 from "@/assets/proj/4_photo_001.jpg.asset.json";
import a4_2 from "@/assets/proj/4_photo_002.jpg.asset.json";
import a5_0 from "@/assets/proj/5_photo_000.jpg.asset.json";
import a5_1 from "@/assets/proj/5_photo_001.jpg.asset.json";
import a5_2 from "@/assets/proj/5_photo_002.jpg.asset.json";
import a5_3 from "@/assets/proj/5_photo_003.jpg.asset.json";
import a6_0 from "@/assets/proj/6_photo_000.jpg.asset.json";
import a6_1 from "@/assets/proj/6_photo_001.jpg.asset.json";
import a7_0 from "@/assets/proj/7_photo_000.jpg.asset.json";
import a7_1 from "@/assets/proj/7_photo_001.jpg.asset.json";
import a7_2 from "@/assets/proj/7_photo_002.jpg.asset.json";
import a8_0 from "@/assets/proj/8_photo_000.jpg.asset.json";
import a8_1 from "@/assets/proj/8_photo_001.jpg.asset.json";
import a8_2 from "@/assets/proj/8_photo_002.jpg.asset.json";
import a8_3 from "@/assets/proj/8_photo_003.jpg.asset.json";
import a11_0 from "@/assets/proj/11_photo_000.jpg.asset.json";
import a11_1 from "@/assets/proj/11_photo_001.jpg.asset.json";
import a12_0 from "@/assets/proj/12_photo_000.jpg.asset.json";
import a12_1 from "@/assets/proj/12_photo_001.jpg.asset.json";
import a20_0 from "@/assets/proj/20_photo_000.jpg.asset.json";
import a20_1 from "@/assets/proj/20_photo_001.jpg.asset.json";
import a20_2 from "@/assets/proj/20_photo_002.jpg.asset.json";
import a20_4 from "@/assets/proj/20_photo_004.jpg.asset.json";
import a21_0 from "@/assets/proj/21_photo_000.jpg.asset.json";
import a21_1 from "@/assets/proj/21_photo_001.jpg.asset.json";
import a21_2 from "@/assets/proj/21_photo_002.jpg.asset.json";
import a25_0 from "@/assets/proj/25_photo_000.jpg.asset.json";
import a25_1 from "@/assets/proj/25_photo_001.jpg.asset.json";
import a25_2 from "@/assets/proj/25_photo_002.jpg.asset.json";
import a25_3 from "@/assets/proj/25_photo_003.jpg.asset.json";
import a30_0 from "@/assets/proj/30_photo_000.jpg.asset.json";
import a30_1 from "@/assets/proj/30_photo_001.jpg.asset.json";
import a30_2 from "@/assets/proj/30_photo_002.jpg.asset.json";
import a30_3 from "@/assets/proj/30_photo_003.jpg.asset.json";
import a34_0 from "@/assets/proj/34_photo_000.jpg.asset.json";
import a34_1 from "@/assets/proj/34_photo_001.jpg.asset.json";
import a34_2 from "@/assets/proj/34_photo_002.jpg.asset.json";
import a34_3 from "@/assets/proj/34_photo_003.jpg.asset.json";
import a35_0 from "@/assets/proj/35_photo_000.jpg.asset.json";
import a35_1 from "@/assets/proj/35_photo_001.jpg.asset.json";
import a35_2 from "@/assets/proj/35_photo_002.jpg.asset.json";

import p13_712 from "@/assets/p13-img-20250313-112700-712.jpg.asset.json";
import p13_716 from "@/assets/p13-img-20250313-112700-716.jpg.asset.json";
import p13_567 from "@/assets/p13-img-20250313-112700-567.jpg.asset.json";
import p13_419 from "@/assets/p13-img-20250313-112700-419.jpg.asset.json";
import p13_416 from "@/assets/p13-img-20250313-112700-416.jpg.asset.json";
import p13_233 from "@/assets/p13-img-20250316-210514-233.jpg.asset.json";
import p13_929 from "@/assets/p13-img-20250313-112700-929.jpg.asset.json";
import p13_123 from "@/assets/p13-img-20250313-112701-123.jpg.asset.json";
import p13_595792 from "@/assets/p13-2025031620595792.jpg.asset.json";
import p13_351005 from "@/assets/p13-1741867351005.jpg.asset.json";
import p13_364540 from "@/assets/p13-1741867364540.jpg.asset.json";

export type Project = {
  no: string;
  title: string;
  category: string;
  style: string;
  lead: string;
  story: string[];
  specs: { k: string; v: string }[];
  tags: string[];
  photos: string[];
};

export const projects: Project[] = [
  {
    no: "001",
    title: "Детская «Пентагон»",
    category: "Детские",
    style: "Неоклассика",
    lead: "П-образное рабочее место на лоджии для двух сестёр разного возраста.",
    story: [
      "Проект для семьи с двумя разновозрастными дочерьми: лоджию нужно было превратить и в учебное место, и в пространство для творчества.",
      "Мы соединили три столешницы в единую П-образную линию, поставили тумбы под каждой из них и добавили симметричные стеллажи по краям. Стол закрывает батарею, но оборудован скрытой вентиляцией — тепло идёт в комнату, а фасады не рассыхаются.",
      "Каждая зона получила свой сценарий: уроки, рисование, хранение материалов. Девочки пользуются комнатой самостоятельно, ничего не переставляя.",
    ],
    specs: [
      { k: "Категория", v: "Детская, комплект" },
      { k: "Стиль", v: "Неоклассика" },
      { k: "Материалы", v: "МДФ" },
      { k: "Покрытие", v: "Плёнка ПВХ" },
      { k: "Фурнитура", v: "Boyard: ручки, петли с доводчиком, push-to-open" },
    ],
    tags: ["Рабочая зона", "Стеллажи", "Вентиляция за фасадом"],
    photos: [a1_0.url, a1_1.url, a1_2.url, a1_3.url],
  },
  {
    no: "002",
    title: "Кухня с панелями под шпон",
    category: "Кухни",
    style: "Современный",
    lead: "Кухня для бабушки с внучкой: тёплая текстура дерева и современная механика.",
    story: [
      "Главная задача — не потерять ни сантиметра за выступом с вентиляцией и у окна с трубами. Мы обошли инженерию корпусами и встроили подсветку рабочей зоны.",
      "Холодильник получил отдельную антресоль, чтобы верхняя линия читалась ровной. Текстура дерева в фасадах даёт ощущение основательности, а брендовые покрытия и механизмы — современность.",
      "Материалы подбирались по принципу «служить долго»: практичное эко-шпоновое покрытие, доводчики и подъёмные механизмы на всех верхних секциях.",
    ],
    specs: [
      { k: "Категория", v: "Кухня" },
      { k: "Стиль", v: "Современный" },
      { k: "Материалы", v: "МДФ" },
      { k: "Покрытие", v: "Эко-шпон" },
      { k: "Фурнитура", v: "Boyard, GTV: push-to-open, подъёмники, доводчики" },
    ],
    tags: ["Встроенная подсветка", "Антресоль", "Текстура дерева"],
    photos: [a2_0.url, a2_1.url],
  },
  {
    no: "003",
    title: "Прихожая, пос. Ласточкино",
    category: "Прихожие",
    style: "Минимализм",
    lead: "Узкий длинный коридор: встроенная ниша до потолка без потери прохода.",
    story: [
      "Прихожая очень узкая и длинная. Мы полностью застроили нишу до потолка, оставив коридор свободным, и разместили внутри одежду и обувь для всей семьи.",
      "Фрезеровку и цвет фасадов подобрали под уже стоявшую в доме консоль — интерьер собрался в один тон без дополнительных затрат.",
      "Решение для ограниченного бюджета, в котором нет ощущения экономии: светло, функционально и очень удобно.",
    ],
    specs: [
      { k: "Категория", v: "Прихожая" },
      { k: "Стиль", v: "Минимализм" },
      { k: "Материалы", v: "МДФ" },
      { k: "Покрытие", v: "Плёнка ПВХ" },
      { k: "Фурнитура", v: "Boyard: push-to-open" },
    ],
    tags: ["Встройка в нишу", "До потолка", "Без ручек"],
    photos: [a3_0.url, a3_1.url, a3_2.url, a3_3.url],
  },
  {
    no: "004",
    title: "Прихожая на ул. Лисина",
    category: "Прихожие",
    style: "Современный",
    lead: "Небольшая прихожая с фасадами «как в Pinterest» — и полноценным хранением.",
    story: [
      "Запрос заказчицы: сохранить место в небольшой прихожей и подобрать фасады, которые одобрят взрослые дочери.",
      "Мы собрали комбинацию из двух цветов и двух видов фрезеровки: вертикальный рисунок вытягивает стену, гладкие вставки уравновешивают композицию.",
      "Инна живёт одна, но её дом всегда полон гостей. Мебель здесь работает и как хранение, и как повод для комплиментов.",
    ],
    specs: [
      { k: "Категория", v: "Прихожая" },
      { k: "Стиль", v: "Современный" },
      { k: "Материалы", v: "МДФ" },
      { k: "Покрытие", v: "Плёнка ПВХ" },
      { k: "Фурнитура", v: "Boyard, GTV: ручки, доводчики, push-to-open" },
    ],
    tags: ["Комбинация цветов", "Авторская фрезеровка", "Компактность"],
    photos: [a4_0.url, a4_1.url, a4_2.url],
  },
  {
    no: "005",
    title: "Кухня для стилиста",
    category: "Кухни",
    style: "Скандинавский",
    lead: "Ахроматичная кухня «под ключ» с техникой, панелью и обеденным столом.",
    story: [
      "Хозяйка — стилист-колорист, и цвет для неё был принципиальным: никаких ярких фактур и выделяющихся текстур.",
      "Мы укомплектовали кухню полностью: корпус, техника, стеновая панель. Из той же столешницы изготовили обеденный стол — композиция читается как единое целое.",
      "Универсальная палитра означает, что кухня не устареет: её легко пересобрать по настроению, поменяв текстиль и посуду.",
    ],
    specs: [
      { k: "Категория", v: "Кухня, комплект «под ключ»" },
      { k: "Стиль", v: "Скандинавский" },
      { k: "Материалы", v: "МДФ" },
      { k: "Покрытие", v: "Плёнка ПВХ" },
      { k: "Фурнитура", v: "Boyard, GTV: ручки, доводчики, push-to-open" },
    ],
    tags: ["Комплектация техникой", "Обеденный стол в тон", "Ахроматика"],
    photos: [a5_0.url, a5_1.url, a5_2.url, a5_3.url],
  },
  {
    no: "006",
    title: "Прихожая для стилиста",
    category: "Прихожие",
    style: "Минимализм",
    lead: "Узкая консоль под простенок и шкаф-купе на полную глубину до потолка.",
    story: [
      "Геометрия помещения не позволяла сделать одинаковую глубину по всей прихожей. Консоль для обуви мы сузили точно под простенок, а шкафу-купе сохранили рабочие 600 мм.",
      "Шкаф поднят до потолка: верхние полки взяли на себя сезонное хранение — то, чего почти всегда не хватает в современных квартирах.",
      "Вторая работа для этой заказчицы. Ей важен деловой ритм: красиво, практично, без лишних слов и переносов сроков.",
    ],
    specs: [
      { k: "Категория", v: "Прихожая" },
      { k: "Стиль", v: "Минимализм" },
      { k: "Материалы", v: "МДФ, зеркало" },
      { k: "Покрытие", v: "Плёнка ПВХ" },
      { k: "Фурнитура", v: "Boyard, GTV: ручки, push-to-open, направляющие" },
    ],
    tags: ["Шкаф-купе", "До потолка", "Зеркало"],
    photos: [a6_0.url, a6_1.url],
  },
  {
    no: "007",
    title: "Гостиная «Булгаковский парк»",
    category: "Гостиные",
    style: "Скандинавский",
    lead: "Одна стенка вместо трёх шкафов: гардероб, хозблок и ТВ-зона в нише.",
    story: [
      "Для молодой пары мы собрали универсальную стенку: платяная секция с комодом, хозблок и ниша под телевизор.",
      "Шкаф встроен в нишу до потолка — без зазоров, где скапливается пыль, и без визуального шума. За счёт этого в небольшой гостиной осталось много свободного места.",
      "Внутри на одной из створок закреплено зеркало: полноценная примерочная зона без отдельного предмета в комнате.",
    ],
    specs: [
      { k: "Категория", v: "Гостиная, стенка" },
      { k: "Стиль", v: "Скандинавский" },
      { k: "Материалы", v: "МДФ, массив дерева" },
      { k: "Покрытие", v: "Плёнка ПВХ" },
      { k: "Фурнитура", v: "Boyard, GTV, Firmax: доводчики, push-to-open" },
    ],
    tags: ["ТВ-зона", "Хозблок", "Встройка до потолка"],
    photos: [a7_0.url, a7_1.url, a7_2.url],
  },
  {
    no: "008",
    title: "Шкаф «Версаче», г. Энгельс",
    category: "Шкафы",
    style: "Современный",
    lead: "Ниша высотой 2500 мм, закрытая глубокой 3D-фрезеровкой на 22 мм фасадах.",
    story: [
      "Задача — закрыть нишу в прихожей фасадами, которые приятно и видеть, и трогать. Мы выбрали объёмную 3D-фрезеровку и толщину панели 22 мм, чтобы при высоте 2500 мм фасады не повело со временем.",
      "Внутреннее наполнение заказчики решили спроектировать позже — конструкция это позволяет. Так тоже можно: сначала фасадная линия, потом начинка.",
      "Отдельная деталь — прозрачные стопоры, почти незаметные, но не дающие дверям проваливаться внутрь ниши без полок.",
    ],
    specs: [
      { k: "Категория", v: "Шкаф, встройка в нишу" },
      { k: "Стиль", v: "Современный" },
      { k: "Материалы", v: "МДФ 22 мм" },
      { k: "Покрытие", v: "Плёнка ПВХ" },
      { k: "Фурнитура", v: "Hettich: ручки, петли с доводчиком" },
    ],
    tags: ["3D-фрезеровка", "Высота 2500 мм", "Нестандартная ниша"],
    photos: [a8_0.url, a8_1.url, a8_2.url, a8_3.url],
  },
  {
    no: "011",
    title: "Консоль «Белый глянец»",
    category: "Тумбы",
    style: "Минимализм",
    lead: "Подвесная тумба 2-в-1: ТВ-зона и макияжный столик в узкой спальне.",
    story: [
      "В узкой спальне не было места для двух отдельных предметов, поэтому мы объединили ТВ-тумбу и макияжную зону в одной подвесной композиции.",
      "Размеры выверяли до миллиметра: сохранить проход и при этом получить вместительный органайзер для косметики и техники.",
      "Модная фрезеровка на глянце — приём, который мы рекомендуем, когда нужно ощущение дорогого интерьера без увеличения бюджета.",
    ],
    specs: [
      { k: "Категория", v: "Тумба, консоль" },
      { k: "Стиль", v: "Минимализм" },
      { k: "Материалы", v: "МДФ" },
      { k: "Покрытие", v: "Плёнка ПВХ, глянец" },
      { k: "Фурнитура", v: "Hettich: push-to-open, направляющие" },
    ],
    tags: ["Подвесная конструкция", "2-в-1", "Глянец"],
    photos: [a11_0.url, a11_1.url],
  },
  {
    no: "012",
    title: "Прихожая «Сканди-Лофт»",
    category: "Прихожие",
    style: "Лофт",
    lead: "Сварная вешалка в стиле лофт и комод-обувница со скандинавской пластикой.",
    story: [
      "Полностью авторская прихожая, придуманная вместе с заказчицей Еленой на основе её подборки референсов.",
      "В узком пространстве разместились сварная вешалка из металла и комод-обувница, где чередуются мелкие и крупные ящики, а также калошницы под разный размер обуви.",
      "Из-за небольшой глубины комод и обувница крепятся к стене — обязательный нюанс узкой мебели. Боковины, крышка, фасады и вставки на вешалке выполнены из МДФ.",
    ],
    specs: [
      { k: "Категория", v: "Прихожая" },
      { k: "Стиль", v: "Лофт + сканди" },
      { k: "Материалы", v: "МДФ, металл" },
      { k: "Покрытие", v: "Плёнка ПВХ" },
      { k: "Фурнитура", v: "Boyard, GTV: направляющие" },
    ],
    tags: ["Сварная вешалка", "Комод-обувница", "Авторский проект"],
    photos: [a12_0.url, a12_1.url],
  },
  {
    no: "013",
    title: "Спальня «Фарандола»",
    category: "Спальни",
    style: "Неоклассика",
    lead: "Пятидверный шкаф с зеркалом как главная точка интерьера и комплект в тон.",
    story: [
      "Большой пятидверный шкаф с зеркалом стал главной точкой интерьера. К нему мы подобрали кровать с двумя тумбами, комод и зеркало.",
      "Зеркало оформили в такую же раму, как основные фасады, — вместо резного багета, который планировался изначально. В жизни всё получилось гармонично и очень нежно.",
      "Единая фрезеровка на всех предметах, глянцевые оттенки и золотая фурнитура. Кровать — с подъёмным механизмом: дополнительное хранение без лишних корпусов в комнате.",
    ],
    specs: [
      { k: "Категория", v: "Спальня, комплект" },
      { k: "Стиль", v: "Неоклассика" },
      { k: "Палитра", v: "Белый, бежевый, золото" },
      { k: "Материалы", v: "МДФ, зеркало" },
      { k: "Покрытие", v: "Глянцевая плёнка ПВХ" },
      { k: "Фурнитура", v: "Boyard: ручки, петли с доводчиком" },
    ],
    tags: ["Комплект", "Подъёмный механизм", "Золотая фурнитура"],
    photos: [
      p13_712.url,
      p13_123.url,
      p13_364540.url,
      p13_929.url,
      p13_716.url,
      p13_351005.url,
      p13_567.url,
      p13_419.url,
      p13_416.url,
      p13_233.url,
      p13_595792.url,
    ],
  },
  {
    no: "020",
    title: "Молодёжная комната «Бархат»",
    category: "Детские",
    style: "Современный",
    lead: "Рабочая зона, стеллаж, макияжный столик и шкаф — в одной небольшой комнате.",
    story: [
      "Заказчики пришли с готовой идеей: совместить в одной комнате рабочее место, стеллаж, макияжный столик и шкаф — при уже стоящей полутороспальной кровати.",
      "Мы скорректировали габариты под комнату, продумали наполнение стола и шкафов, подобрали фурнитуру под бюджет и разработали уникальную фрезеровку, объединившую все предметы.",
      "Когда заказчик и дизайнер работают в диалоге, сюрпризов не бывает: мы проговариваем не только плюсы, но и ограничения каждого решения.",
    ],
    specs: [
      { k: "Категория", v: "Молодёжная комната, комплект" },
      { k: "Стиль", v: "Современный" },
      { k: "Материалы", v: "МДФ" },
      { k: "Покрытие", v: "Плёнка ПВХ" },
      { k: "Фурнитура", v: "Boyard, GTV: ручки, доводчики, push-to-open" },
    ],
    tags: ["Рабочее место", "Макияжный столик", "Единая фрезеровка"],
    photos: [a20_0.url, a20_1.url, a20_2.url, a20_4.url],
  },
  {
    no: "021",
    title: "Кухня «Соло»",
    category: "Кухни",
    style: "Минимализм",
    lead: "Кухня по выставочному образцу: высокие верхние секции и работа «без ручек».",
    story: [
      "Елена увидела наш выставочный образец и сразу определилась с дизайном и цветом. Мы дождались переезда и повторили решение с поправками под её планировку.",
      "Верхние корпуса сделали высокими, ящики — крупными, направляющие скрытого монтажа, фасады — без ручек. Фартук выполнен в цвет столешницы.",
      "Газовую трубу заказчица решила оставить открытой; в других проектах мы закрываем её стеллажом или коробом с открывающимся фасадом.",
    ],
    specs: [
      { k: "Категория", v: "Кухня" },
      { k: "Стиль", v: "Минимализм" },
      { k: "Материалы", v: "МДФ" },
      { k: "Покрытие", v: "Плёнка ПВХ" },
      { k: "Фурнитура", v: "Boyard: доводчики, подъёмники, скрытые направляющие" },
    ],
    tags: ["Без ручек", "Высокие секции", "Фартук в тон"],
    photos: [a21_0.url, a21_1.url, a21_2.url],
  },
  {
    no: "025",
    title: "Кухня для мамы",
    category: "Кухни",
    style: "Минимализм",
    lead: "Полностью удалённый проект: замер, согласование и монтаж в другом городе.",
    story: [
      "Сын заказал кухню для мамы — обе стороны живут не в Саратове. Мы выехали на замер, разработали проект и согласовали цвета, материалы и фурнитуру дистанционно.",
      "В кухне-гостиной нужно было спрятать котёл и вытяжку и корректно вписать холодильник в общую линию. Материал — МДФ с покрытием эмаль, ручки интегрированные.",
      "Ставка на ахроматичную палитру и надёжную немецкую фурнитуру. Результат превзошёл ожидания: кухня получилась воздушной и эргономичной — следом заказали спальню.",
    ],
    specs: [
      { k: "Категория", v: "Кухня-гостиная" },
      { k: "Стиль", v: "Минимализм" },
      { k: "Материалы", v: "МДФ" },
      { k: "Покрытие", v: "Эмаль" },
      { k: "Фурнитура", v: "Hettich: доводчики, push-to-open, подъёмники" },
    ],
    tags: ["Онлайн-согласование", "Интегрированные ручки", "Скрытый котёл"],
    photos: [a25_0.url, a25_1.url, a25_2.url, a25_3.url],
  },
  {
    no: "030",
    title: "Кухня в частный дом",
    category: "Кухни",
    style: "Минимализм",
    lead: "Светлый глянец, бутылочница, посудомоечная машина и пенал под низкий подоконник.",
    story: [
      "Котёл мы намеренно не закрывали фасадами — это противоречит правилам безопасности, но аккуратно спрятали уходящие вниз трубы.",
      "В программе-минимум заказчицы: бутылочница, посудомоечная машина, много выдвижных ящиков, обход низкого подоконника и вместительный пенал. Всё вошло в проект.",
      "Бонусом добавили короб под потолок и открытые полки, чтобы не терять полезный объём. Светлый глянец держит в помещении ощущение света и воздуха.",
    ],
    specs: [
      { k: "Категория", v: "Кухня" },
      { k: "Стиль", v: "Минимализм" },
      { k: "Материалы", v: "МДФ" },
      { k: "Покрытие", v: "Пластик, глянец" },
      { k: "Фурнитура", v: "Firmax: доводчики, push-to-open, подъёмники" },
    ],
    tags: ["Пенал", "Короб до потолка", "Обход подоконника"],
    photos: [a30_0.url, a30_1.url, a30_2.url, a30_3.url],
  },
  {
    no: "034",
    title: "Прихожая «Сканди»",
    category: "Прихожие",
    style: "Скандинавский",
    lead: "Шкаф, реечная вешалка и обувница с мягким сиденьем в светлой гамме.",
    story: [
      "Постоянные клиенты решили оформить квартиру в скандинавском стиле — за простоту и удобство. Мы взяли их референс и сделали по фактическим размерам.",
      "В прихожей — большой шкаф, открытая реечная вешалка и обувница с мягким сиденьем. Палитра светлая, прохладная, с натуральными текстурами под цвет обоев.",
      "Нюанс: шкаф планировался заподлицо с простенком, но мы немного увеличили глубину, чтобы внутри свободно помещались плечики с верхней одеждой.",
    ],
    specs: [
      { k: "Категория", v: "Прихожая, комплект" },
      { k: "Стиль", v: "Скандинавский" },
      { k: "Материалы", v: "МДФ" },
      { k: "Покрытие", v: "Плёнка ПВХ" },
      { k: "Фурнитура", v: "Hettich: ручки, доводчики, направляющие" },
    ],
    tags: ["Реечная вешалка", "Мягкое сиденье", "Натуральные текстуры"],
    photos: [a34_0.url, a34_1.url, a34_2.url, a34_3.url],
  },
  {
    no: "035",
    title: "Встроенная мини-гардеробная",
    category: "Гардеробные",
    style: "Минимализм",
    lead: "Ниша 1000 × 1600 × 3000 мм: зеркальные купе и чёрный металл внутри.",
    story: [
      "Глубокая и узкая ниша высотой 3000 мм: нужно было получить максимум полезного объёма и двери, которые не спорят с интерьером прихожей.",
      "Внутренние ниши собраны с элементами чёрного металла, фасады — зеркальные купе. Приём визуально расширяет пространство и делает прихожую элегантнее.",
      "В таких нишах мы рекомендуем заранее предусмотреть подсветку и щиты с крючками и рейлингами — для сумок, ремней и зонтов.",
    ],
    specs: [
      { k: "Категория", v: "Мини-гардеробная" },
      { k: "Стиль", v: "Минимализм" },
      { k: "Материалы", v: "ЛДСП, металл, зеркало" },
      { k: "Покрытие", v: "Эко-шпон" },
      { k: "Фурнитура", v: "Firmax: ручки, система купе" },
    ],
    tags: ["Двери купе", "Зеркальные фасады", "Чёрный металл"],
    photos: [a35_0.url, a35_1.url, a35_2.url],
  },
];

// --- Лёгкие WebP-превью для быстрой загрузки сетки проектов ---
import th1 from "@/assets/proj/11_photo_000_thumb.webp.asset.json";
import th2 from "@/assets/proj/11_photo_001_thumb.webp.asset.json";
import th3 from "@/assets/proj/12_photo_000_thumb.webp.asset.json";
import th4 from "@/assets/proj/12_photo_001_thumb.webp.asset.json";
import th5 from "@/assets/proj/1_photo_000_thumb.webp.asset.json";
import th6 from "@/assets/proj/1_photo_001_thumb.webp.asset.json";
import th7 from "@/assets/proj/1_photo_002_thumb.webp.asset.json";
import th8 from "@/assets/proj/1_photo_003_thumb.webp.asset.json";
import th9 from "@/assets/proj/20_photo_000_thumb.webp.asset.json";
import th10 from "@/assets/proj/20_photo_001_thumb.webp.asset.json";
import th11 from "@/assets/proj/20_photo_002_thumb.webp.asset.json";
import th12 from "@/assets/proj/20_photo_004_thumb.webp.asset.json";
import th13 from "@/assets/proj/21_photo_000_thumb.webp.asset.json";
import th14 from "@/assets/proj/21_photo_001_thumb.webp.asset.json";
import th15 from "@/assets/proj/21_photo_002_thumb.webp.asset.json";
import th16 from "@/assets/proj/25_photo_000_thumb.webp.asset.json";
import th17 from "@/assets/proj/25_photo_001_thumb.webp.asset.json";
import th18 from "@/assets/proj/25_photo_002_thumb.webp.asset.json";
import th19 from "@/assets/proj/25_photo_003_thumb.webp.asset.json";
import th20 from "@/assets/proj/2_photo_000_thumb.webp.asset.json";
import th21 from "@/assets/proj/2_photo_001_thumb.webp.asset.json";
import th22 from "@/assets/proj/30_photo_000_thumb.webp.asset.json";
import th23 from "@/assets/proj/30_photo_001_thumb.webp.asset.json";
import th24 from "@/assets/proj/30_photo_002_thumb.webp.asset.json";
import th25 from "@/assets/proj/30_photo_003_thumb.webp.asset.json";
import th26 from "@/assets/proj/34_photo_000_thumb.webp.asset.json";
import th27 from "@/assets/proj/34_photo_001_thumb.webp.asset.json";
import th28 from "@/assets/proj/34_photo_002_thumb.webp.asset.json";
import th29 from "@/assets/proj/34_photo_003_thumb.webp.asset.json";
import th30 from "@/assets/proj/35_photo_000_thumb.webp.asset.json";
import th31 from "@/assets/proj/35_photo_001_thumb.webp.asset.json";
import th32 from "@/assets/proj/35_photo_002_thumb.webp.asset.json";
import th33 from "@/assets/proj/3_photo_000_thumb.webp.asset.json";
import th34 from "@/assets/proj/3_photo_001_thumb.webp.asset.json";
import th35 from "@/assets/proj/3_photo_002_thumb.webp.asset.json";
import th36 from "@/assets/proj/3_photo_003_thumb.webp.asset.json";
import th37 from "@/assets/proj/4_photo_000_thumb.webp.asset.json";
import th38 from "@/assets/proj/4_photo_001_thumb.webp.asset.json";
import th39 from "@/assets/proj/4_photo_002_thumb.webp.asset.json";
import th40 from "@/assets/proj/5_photo_000_thumb.webp.asset.json";
import th41 from "@/assets/proj/5_photo_001_thumb.webp.asset.json";
import th42 from "@/assets/proj/5_photo_002_thumb.webp.asset.json";
import th43 from "@/assets/proj/5_photo_003_thumb.webp.asset.json";
import th44 from "@/assets/proj/6_photo_000_thumb.webp.asset.json";
import th45 from "@/assets/proj/6_photo_001_thumb.webp.asset.json";
import th46 from "@/assets/proj/7_photo_000_thumb.webp.asset.json";
import th47 from "@/assets/proj/7_photo_001_thumb.webp.asset.json";
import th48 from "@/assets/proj/7_photo_002_thumb.webp.asset.json";
import th49 from "@/assets/proj/8_photo_000_thumb.webp.asset.json";
import th50 from "@/assets/proj/8_photo_001_thumb.webp.asset.json";
import th51 from "@/assets/proj/8_photo_002_thumb.webp.asset.json";
import th52 from "@/assets/proj/8_photo_003_thumb.webp.asset.json";
import th53 from "@/assets/p13-1741867351005_thumb.webp.asset.json";
import th54 from "@/assets/p13-1741867364540_thumb.webp.asset.json";
import th55 from "@/assets/p13-2025031620595792_thumb.webp.asset.json";
import th56 from "@/assets/p13-img-20250313-112700-416_thumb.webp.asset.json";
import th57 from "@/assets/p13-img-20250313-112700-419_thumb.webp.asset.json";
import th58 from "@/assets/p13-img-20250313-112700-567_thumb.webp.asset.json";
import th59 from "@/assets/p13-img-20250313-112700-712_thumb.webp.asset.json";
import th60 from "@/assets/p13-img-20250313-112700-716_thumb.webp.asset.json";
import th61 from "@/assets/p13-img-20250313-112700-929_thumb.webp.asset.json";
import th62 from "@/assets/p13-img-20250313-112701-123_thumb.webp.asset.json";
import th63 from "@/assets/p13-img-20250316-210514-233_thumb.webp.asset.json";

const thumbMap: Record<string, string> = {
  "/__l5e/assets-v1/6b08d37e-ece1-4fa6-9424-26fbb1551c40/krona-11_photo_000.jpg": th1.url,
  "/__l5e/assets-v1/adb1a275-08ef-42fd-8cb2-6e45691f646d/krona-11_photo_001.jpg": th2.url,
  "/__l5e/assets-v1/a84d0376-5c57-4849-9193-9c851377c0d4/krona-12_photo_000.jpg": th3.url,
  "/__l5e/assets-v1/cf6acde3-517b-4563-a409-fb50f550a30c/krona-12_photo_001.jpg": th4.url,
  "/__l5e/assets-v1/361c0afa-39cc-4a23-b7f2-a0e2c3d3fb0e/krona-1_photo_000.jpg": th5.url,
  "/__l5e/assets-v1/506449a6-4ff7-46ad-a4fd-389c30402ccc/krona-1_photo_001.jpg": th6.url,
  "/__l5e/assets-v1/20ebe921-8044-497b-9e0b-9175dcba85fb/krona-1_photo_002.jpg": th7.url,
  "/__l5e/assets-v1/c99fe50a-c250-49a1-a30d-dd1e431c8ca8/krona-1_photo_003.jpg": th8.url,
  "/__l5e/assets-v1/8cd5931e-8416-49fa-9d90-454fc22b9c79/krona-20_photo_000.jpg": th9.url,
  "/__l5e/assets-v1/8fbc4f9a-4b18-43e5-b48e-62b968c757ca/krona-20_photo_001.jpg": th10.url,
  "/__l5e/assets-v1/da8fdda9-46a7-4b54-a4db-927207a65de3/krona-20_photo_002.jpg": th11.url,
  "/__l5e/assets-v1/47304161-4504-41e5-9a77-6d1eb4991a34/krona-20_photo_004.jpg": th12.url,
  "/__l5e/assets-v1/ef2cf2cb-f089-4d5c-809e-efcc26b44bea/krona-21_photo_000.jpg": th13.url,
  "/__l5e/assets-v1/d285c7e8-9d1b-43d4-9eff-cc31d802effe/krona-21_photo_001.jpg": th14.url,
  "/__l5e/assets-v1/ab49c813-28da-47d6-88ab-ef416f251fd4/krona-21_photo_002.jpg": th15.url,
  "/__l5e/assets-v1/7489a199-4ff9-4a2a-853e-337373ca2f4a/krona-25_photo_000.jpg": th16.url,
  "/__l5e/assets-v1/47b25c73-27da-4e7a-bb3b-7aa9c9c87e8f/krona-25_photo_001.jpg": th17.url,
  "/__l5e/assets-v1/b0aa1f33-f2da-4269-9793-e38359de3c7b/krona-25_photo_002.jpg": th18.url,
  "/__l5e/assets-v1/ac7ae9da-d246-4def-b1ed-d462f2f38e12/krona-25_photo_003.jpg": th19.url,
  "/__l5e/assets-v1/d9797231-f352-4065-b713-23c3c12119ac/krona-2_photo_000.jpg": th20.url,
  "/__l5e/assets-v1/6573891d-f3d5-4da6-a4b5-108b52ea89d5/krona-2_photo_001.jpg": th21.url,
  "/__l5e/assets-v1/71da55d4-33a6-4985-af30-df7e5619460b/krona-30_photo_000.jpg": th22.url,
  "/__l5e/assets-v1/448f3e12-d3d1-470a-aeef-b96b18fb4126/krona-30_photo_001.jpg": th23.url,
  "/__l5e/assets-v1/c0747ebe-03b8-4076-bd0e-349b3172c471/krona-30_photo_002.jpg": th24.url,
  "/__l5e/assets-v1/9d833dcd-e9a9-44a2-ab10-f2c227d81a87/krona-30_photo_003.jpg": th25.url,
  "/__l5e/assets-v1/bf2dab48-26ff-462f-a979-e49b71b73c34/krona-34_photo_000.jpg": th26.url,
  "/__l5e/assets-v1/9133ae0e-e1f5-4407-ae94-e134c773e2ef/krona-34_photo_001.jpg": th27.url,
  "/__l5e/assets-v1/f59bcd7c-783b-4b82-97d2-ec327c942223/krona-34_photo_002.jpg": th28.url,
  "/__l5e/assets-v1/6d125cf3-2850-488d-b65d-428694eb1615/krona-34_photo_003.jpg": th29.url,
  "/__l5e/assets-v1/26338a08-ead1-42e7-a258-9b612e5ef443/krona-35_photo_000.jpg": th30.url,
  "/__l5e/assets-v1/e08d590b-5578-4e33-976e-6ff2a825fcd9/krona-35_photo_001.jpg": th31.url,
  "/__l5e/assets-v1/99e70536-1960-4fc4-a050-101a50d522dd/krona-35_photo_002.jpg": th32.url,
  "/__l5e/assets-v1/31a211b2-c01c-4d62-8b87-e6766988e505/krona-3_photo_000.jpg": th33.url,
  "/__l5e/assets-v1/1ad83b4b-af6b-4f99-9dd6-37ac67c978b4/krona-3_photo_001.jpg": th34.url,
  "/__l5e/assets-v1/1cf01910-4d36-4b52-91ef-35a0f95797d5/krona-3_photo_002.jpg": th35.url,
  "/__l5e/assets-v1/f5d0a00d-6fdb-40e2-8a09-1a632c05d296/krona-3_photo_003.jpg": th36.url,
  "/__l5e/assets-v1/e513e36f-7dee-4854-9729-119b20b155ed/krona-4_photo_000.jpg": th37.url,
  "/__l5e/assets-v1/db09042b-1a7b-4e94-b97b-81fb076a2253/krona-4_photo_001.jpg": th38.url,
  "/__l5e/assets-v1/0adfd9b3-6e2b-42a2-8912-488fc29da557/krona-4_photo_002.jpg": th39.url,
  "/__l5e/assets-v1/4d12ae70-5b37-4cc7-80a2-c49260b26a9f/krona-5_photo_000.jpg": th40.url,
  "/__l5e/assets-v1/ade4d162-8c8d-49ed-91e9-9982f6d122ff/krona-5_photo_001.jpg": th41.url,
  "/__l5e/assets-v1/41a599d8-e2d5-4661-b6ec-ece8a3634992/krona-5_photo_002.jpg": th42.url,
  "/__l5e/assets-v1/ac689577-a5ab-40b7-8445-5a74c93a11ca/krona-5_photo_003.jpg": th43.url,
  "/__l5e/assets-v1/dc5ab900-bf02-4f47-872f-5e47881c5f5a/krona-6_photo_000.jpg": th44.url,
  "/__l5e/assets-v1/68765304-ecc2-4258-b766-cebd0439468c/krona-6_photo_001.jpg": th45.url,
  "/__l5e/assets-v1/036b6f39-57ab-470a-9b29-351a2aaf8943/krona-7_photo_000.jpg": th46.url,
  "/__l5e/assets-v1/7357ea25-521f-47ab-8c3e-c729d30530cc/krona-7_photo_001.jpg": th47.url,
  "/__l5e/assets-v1/8462e0d2-49e9-4bd1-a266-1661c71f63fe/krona-7_photo_002.jpg": th48.url,
  "/__l5e/assets-v1/8b636bc2-5b7f-4bd1-8bb8-d2bb160061b8/krona-8_photo_000.jpg": th49.url,
  "/__l5e/assets-v1/af51a4fd-452a-4e60-aa50-6810e4123502/krona-8_photo_001.jpg": th50.url,
  "/__l5e/assets-v1/6976fce2-baa1-422a-8861-e0a8f3b1949d/krona-8_photo_002.jpg": th51.url,
  "/__l5e/assets-v1/a6eaf61e-6a10-4ae2-8a90-06c7bbdbab63/krona-8_photo_003.jpg": th52.url,
  "/__l5e/assets-v1/b777a1ea-88ff-44aa-aa7b-28648f504ce1/p13-1741867351005.jpg": th53.url,
  "/__l5e/assets-v1/9d9722cb-8fbe-425a-bf86-6389ef410d07/p13-1741867364540.jpg": th54.url,
  "/__l5e/assets-v1/a41bcdc2-48c9-49b7-8acc-06da7393cdfb/p13-2025031620595792.jpg": th55.url,
  "/__l5e/assets-v1/a04e11d7-f69b-4b34-8d71-66c79a2f8704/p13-img-20250313-112700-416.jpg": th56.url,
  "/__l5e/assets-v1/28317eea-2f43-405f-aec3-313ca6b5f1ad/p13-img-20250313-112700-419.jpg": th57.url,
  "/__l5e/assets-v1/73d5718b-de94-4571-9138-e922430e4801/p13-img-20250313-112700-567.jpg": th58.url,
  "/__l5e/assets-v1/9c181429-d0f8-4497-885b-3a19537be02f/p13-img-20250313-112700-712.jpg": th59.url,
  "/__l5e/assets-v1/1d0057ae-644a-41a3-bb34-3f3292f93c01/p13-img-20250313-112700-716.jpg": th60.url,
  "/__l5e/assets-v1/fbf07ad6-d834-49b8-aa8a-b9c41ef25fdc/p13-img-20250313-112700-929.jpg": th61.url,
  "/__l5e/assets-v1/74ef3920-3416-4e2b-82fa-d9c474d67462/p13-img-20250313-112701-123.jpg": th62.url,
  "/__l5e/assets-v1/ee73b641-b0a8-458a-b1bc-0bd7b0a1b8c7/p13-img-20250316-210514-233.jpg": th63.url,
};

export const thumbOf = (url: string): string => thumbMap[url] ?? url;
