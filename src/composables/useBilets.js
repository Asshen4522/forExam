import { ref } from "vue";

import B2 from "../assets/B2.png"
import B3 from "../assets/B3.png"
import B4 from "../assets/B4.png"
import B5 from "../assets/B5.png"
import B7 from "../assets/B7.png"
import B8 from "../assets/B8.png"
import B9 from "../assets/B9.png"
import B10 from "../assets/B10.png"
import B11 from "../assets/B11.png"
import B12 from "../assets/B12.png"
import B13 from "../assets/B13.png"
import B14 from "../assets/B14.png"
import B15 from "../assets/B15.png"
import B18 from "../assets/B18.png"
import B19 from "../assets/B19.png"
import B20 from "../assets/B20.png"
import B21 from "../assets/B21.png"
import B28 from "../assets/B28.png"
import B31 from "../assets/B31.png"
import B32 from "../assets/B32.png"
import B33 from "../assets/B33.png"
import B34 from "../assets/B34.png"
import B35 from "../assets/B35.png"
import B43 from "../assets/B43.png"
import B44 from "../assets/B44.png"
import B45 from "../assets/B45.png"
import B46 from "../assets/B46.png"
import B47 from "../assets/B47.png"
import B48 from "../assets/B48.png"
import B49 from "../assets/B49.png"
import B50 from "../assets/B50.png"
import B66 from "../assets/B66.png"


const bilets = ref([
  { id: 1, type: 1, photo: null, text: "Каким тегом подключается js в html файлы?", status: 1 },
  { id: 2, type: 1, photo: B2, text: "Что выведет в консоль?", status: 1 },
  { id: 3, type: 1, photo: B3, text: "Что выведет в консоль?", status: 1 },
  { id: 4, type: 1, photo: B4, text: "Что выведет в консоль?", status: 1 },
  { id: 5, type: 1, photo: B5, text: "Что выведет в консоль?", status: 1 },
  { id: 6, type: 1, photo: null, text: "В чём отличия между let и const?", status: 1 },
  { id: 7, type: 1, photo: B7, text: "Что выведет в консоль?", status: 1 },
  { id: 8, type: 1, photo: B8, text: "Что выведет в консоль?", status: 1 },
  { id: 9, type: 1, photo: B9, text: "Что выведет в консоль?", status: 1 },
  { id: 10, type: 1, photo: B10, text: "Что выведет в консоль?", status: 1 },
  { id: 11, type: 1, photo: B11, text: "Что выведет в консоль?", status: 1 },
  { id: 12, type: 1, photo: B12, text: "Что выведет в консоль?", status: 1 },
  { id: 13, type: 1, photo: B13, text: "Что выведет в консоль?", status: 1 },
  { id: 14, type: 1, photo: B14, text: "Что выведет в консоль?", status: 1 },
  { id: 15, type: 1, photo: B15, text: "Что выведет в консоль?", status: 1 },
  { id: 16, type: 1, photo: null, text: "Какая разница между '=', '==' и '==='?", status: 1 },
  { id: 17, type: 1, photo: null, text: "В чём ключевые отличия между for, while и foreach?", status: 1 },
  { id: 18, type: 1, photo: B18, text: "Какое последнее значение выведется в консоль?", status: 1 },
  { id: 19, type: 1, photo: B19, text: "Какое последнее значение выведется в консоль?", status: 1 },
  { id: 20, type: 1, photo: B20, text: "Что выведет в консоль?", status: 1 },
  { id: 21, type: 1, photo: B21, text: "Что выведет в консоль?", status: 1 },
  { id: 22, type: 1, photo: null, text: "Какая команда сохраняет в localStorage данные?", status: 1 },
  { id: 23, type: 1, photo: null, text: "Какая команда достаёт из localStorage данные?", status: 1 },
  { id: 24, type: 1, photo: null, text: "Какая команда удаляет из localStorage все данные?", status: 1 },
  { id: 25, type: 1, photo: null, text: "Какая команда удаляет из localStorage конкретные данные?", status: 1 },
  { id: 26, type: 1, photo: null, text: "Какие два метода JSON необходимы для хранения и использования сложных типов данных в localStorage?", status: 1 },
  { id: 27, type: 1, photo: null, text: "В чём измеряется время во временных функциях js?", status: 1 },
  { id: 28, type: 1, photo: B28, text: "В каком порядке цифры окажутся в консоли?", status: 1 },
  { id: 29, type: 1, photo: null, text: "Какой обязательный атрибут любого цикла?", status: 1 },
  { id: 30, type: 1, photo: null, text: "Как остановить интервал или отложенное действие?", status: 1 },
  { id: 31, type: 1, photo: B31, text: "Что выведет в консоль?", status: 1 },
  { id: 32, type: 1, photo: B32, text: "Что выведет в консоль?", status: 1 },
  { id: 33, type: 1, photo: B33, text: "Что выведет в консоль?", status: 1 },
  { id: 34, type: 1, photo: B34, text: "Что выведет в консоль?", status: 1 },
  { id: 35, type: 1, photo: B35, text: "Что выведет в консоль?", status: 1 },
  { id: 36, type: 1, photo: null, text: "В чём отличие функций от методов?", status: 1 },

  { id: 37, type: 2, photo: null, text: "Когда мы пытаемся найти какой-то элемент на сайте мы сначала обращаемся к определенному обьекту, обозначающему весь сайт. Как он называется?", status: 1 },
  { id: 38, type: 2, photo: null, text: "Назовите один из методов поиска элементов на сайте", status: 1 },
  { id: 39, type: 2, photo: null, text: "Как называется метод добавления обработчика событий?", status: 1 },
  { id: 40, type: 2, photo: null, text: "Какие два ключевых элемента в любом обработчике событий?", status: 1 },
  { id: 41, type: 2, photo: null, text: "Назовите свойство, отвечающее за значение элемента", status: 1 },
  { id: 42, type: 2, photo: null, text: "Назовите одно из свойств, отвечающих за содержимое поля вывода", status: 1 },
  { id: 43, type: 2, photo: B43, text: "Найдите ошибку и назовите её", status: 1 },
  { id: 44, type: 2, photo: B44, text: "Найдите ошибку и назовите её", status: 1 },
  { id: 45, type: 2, photo: B45, text: "Найдите ошибку и назовите её", status: 1 },
  { id: 46, type: 2, photo: B46, text: "Найдите ошибку и назовите её", status: 1 },
  { id: 47, type: 2, photo: B47, text: "Найдите ошибку и назовите её", status: 1 },
  { id: 48, type: 2, photo: B48, text: "Найдите ошибку и назовите её", status: 1 },
  { id: 49, type: 2, photo: B49, text: "Найдите ошибку и назовите её", status: 1 },
  { id: 50, type: 2, photo: B50, text: "Найдите ошибку и назовите её", status: 1 },
  { id: 51, type: 2, photo: null, text: "Как называется свойство элемента, отвечающее за его список классов? К нему мы обращаемся, когда хотим как-либо с ним поработать", status: 1 },
  { id: 52, type: 2, photo: null, text: "Назовите метод добавления класса в список классов", status: 1 },
  { id: 53, type: 2, photo: null, text: "Назовите метод удаления класса из списка классов", status: 1 },
  { id: 54, type: 2, photo: null, text: "Назовите метод переключения класса. Он добавляет класс, если его нет и удаляет, если он есть", status: 1 },
  { id: 55, type: 2, photo: null, text: "С помощью чего мы можем гибко изменять конкретное свойство стиля элемента? Например - записывать координаты или менять цвет на один из заданных", status: 1 },

  { id: 56, type: 3, photo: null, text: "Какой вид реактивных переменных используется для одного значения?", status: 1 },
  { id: 57, type: 3, photo: null, text: "Какой вид реактивных переменных используется для группы вложенных переменных со своими значениями?", status: 1 },
  { id: 58, type: 3, photo: null, text: "Какой вид реактивных переменных высчитывается на основе кода внутри него и возвращает значение?", status: 1 },
  { id: 59, type: 3, photo: null, text: "При каком условии происходит перерасчёт высчитываемой переменной?", status: 1 },
  { id: 60, type: 3, photo: null, text: "Для создания любой реактивной переменной что необходимо сделать?", status: 1 },
  { id: 61, type: 3, photo: null, text: "Как в скрипте обращаться к ref переменным?", status: 1 },
  { id: 62, type: 3, photo: null, text: "Как в скрипте обращаться к reactive переменным?", status: 1 },
  { id: 63, type: 3, photo: null, text: "Как вывести любое скриптовое значение в разметку?", status: 1 },
  { id: 64, type: 3, photo: null, text: "Как называется атрибут, начинающийся с 'v-'?", status: 1 },
  { id: 65, type: 3, photo: null, text: "Как получить значение поля ввода?", status: 1 },
  { id: 66, type: 3, photo: B66, text: "Что окажется в поле ввода?", status: 1 },
  { id: 67, type: 3, photo: null, text: "Какие атрибуты можно использовать для условной отрисовки?", status: 1 },
  { id: 68, type: 3, photo: null, text: "Какое главное условие при использовании связанных атрибутов условной отрисовки?", status: 1 },
  { id: 69, type: 3, photo: null, text: "Как создать элементы html на каждый элемент списка или объекта?", status: 1 },
  { id: 70, type: 3, photo: null, text: "Назовите минимум три части, на которые можно разложить список или объект используя отрисовку списков", status: 1 },
  { id: 71, type: 3, photo: null, text: "Назовите минимум 4 типа данных с которыми взаимодействует атрибут отрисовки списков и что он будет выводить в каждом случае?", status: 1 },
  { id: 72, type: 3, photo: null, text: "Есть два компонента. Какие два действия необходимо сделать, чтобы один отображался внутри второго?", status: 1 },
  { id: 73, type: 3, photo: null, text: "Как называются два компонента относительно друг друга, когда один из них вызван во втором?", status: 1 },
  { id: 74, type: 3, photo: null, text: "Что используется для передачи данных из компонента в компонент?", status: 1 },
  { id: 75, type: 3, photo: null, text: "Мне необходимо передать данные из первого компонента во второй. Второй уже вызван в первом. Допустим, переменная с данными в первом уже сделана. Какие два конкретных шага осталось сделать?", status: 1 },
  { id: 76, type: 3, photo: null, text: "Что используется для вызова события в одном компоненте из другого?", status: 1 },
  { id: 77, type: 3, photo: null, text: "Мне необходимо передать данные из первого компонента во второй. Первый уже вызван во втором. Какие три конкретных шага мне необходимо предпринять?", status: 1 },
  { id: 78, type: 3, photo: null, text: "Какие две функции дают работать с роутером в коде и в чём их отличие?", status: 1 },
  { id: 79, type: 3, photo: null, text: "Какие три элемента мы должны обязательно указать при создании маршрута в роутере?", status: 1 },
  { id: 80, type: 3, photo: null, text: "Если мне необходимо сделать один маршрут вложенным в другой, т.е. дочерним, что мне нужено сделать? И какой нюанс есть в одном из атрибутов?", status: 1 },
  { id: 81, type: 3, photo: null, text: "В маршруте есть изменяемая часть. Как называется и как её указать?", status: 1 },
  { id: 82, type: 3, photo: null, text: "Как получить доступ к изменяемой части маршрута?", status: 1 },
  { id: 83, type: 3, photo: null, text: "Какой метод выполняет проверку перед каждым переходом по маршруту?", status: 1 },
  { id: 84, type: 3, photo: null, text: "В чём суть мета-тегов? Как с их помощью настроить, например, проверку на роли?", status: 1 },
  { id: 85, type: 3, photo: null, text: "Для чего создаём и используем composables файлы?", status: 1 },
  { id: 86, type: 3, photo: null, text: "Что обязательно должно быть в composables файле?", status: 1 },
  { id: 87, type: 3, photo: null, text: "Я хочу использовать переменную из composables файла. Файл полностью готов, что необходимо сделать в месте, где я использую переменную?", status: 1 },
  { id: 88, type: 3, photo: null, text: "Как изменить переменную внутри composables файла из другого файла?", status: 1 },
  { id: 89, type: 1, photo: null, text: "В чём смысл return?", status: 1 },
  { id: 90, type: 3, photo: null, text: "Какая консольная команда создаёт проект vue?", status: 1 },
  { id: 91, type: 4, photo: null, text: "Какое полное название предмета по которому идёт экзамен?", status: 1 },
  { id: 92, type: 4, photo: null, text: "Назовите имя и фамилию старосты вашей группы", status: 1 },
  { id: 93, type: 4, photo: null, text: "Назовите ФИО преподавателя МДК 05.01", status: 1 },
  { id: 94, type: 4, photo: null, text: "Назовите ФИО преподавателя МДК 05.02", status: 1 },
  { id: 95, type: 4, photo: null, text: "Назовите ФИО преподавателя МДК 05.03", status: 1 },
  { id: 96, type: 4, photo: null, text: "Какое полное название предмета по которому идёт экзамен?", status: 1 },
  { id: 97, type: 4, photo: null, text: "Назовите имя и фамилию старосты вашей группы", status: 1 },
  { id: 98, type: 4, photo: null, text: "Назовите ФИО преподавателя МДК 05.01", status: 1 },
  { id: 99, type: 4, photo: null, text: "Назовите ФИО преподавателя МДК 05.02", status: 1 },
  { id: 100, type: 4, photo: null, text: "Назовите ФИО преподавателя МДК 05.03", status: 1 },
])
const curBilet=ref(0)
const curDif=ref(40)

function selectBilet(biletId) {
    const selectedBilet = findBilet(biletId)
    selectedBilet.status=2
    curBilet.value = selectedBilet.id
}

function unSelectBilet(result) {
    const selectedBilet = findBilet(curBilet.value)
    if (result) {
        selectedBilet.status=3
    }else{
        selectedBilet.status=4      
    }
    curBilet.value=0
}
function findBilet(biletId) {
    return bilets.value.find((bilet)=>bilet.id===biletId )
}


function randomizeBilets() {
    for (let i = bilets.value.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // случайный индекс от 0 до i

        // поменять элементы местами
        // мы используем для этого синтаксис "деструктурирующее присваивание"
        // подробнее о нём - в следующих главах
        // то же самое можно записать как:
        // let t = array[i]; array[i] = array[j]; array[j] = t
        [bilets.value[i], bilets.value[j]] = [bilets.value[j], bilets.value[i]];
    }   
}

function pickDif(timeAmount) {
    curDif.value=timeAmount
}


export default function useBilets() {
    return {bilets,curBilet,curDif,selectBilet,findBilet,unSelectBilet,randomizeBilets,pickDif}
}