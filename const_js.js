console.log("super");

const a = 7;
const b = 6;

let c; // a > b c = tru, a < b c = false

if (a > b) {
  c = true;
} else {
  c = false;
}

console.log("test:", getData(9, 0));

function fun(a, b) {
  if (a < b) return true;
  return false;
}

c = getData(a, b);
console.log(c);

function getData(a, b) {
  return a > b ? true : false;
}

/**
 * Задание 4
 *
 * Реализовать функцию, на входе которой число с ошибкой, на выходе строка с сообщением
 * 500 => Ошибка сервера
 * 401 => Ошибка авторизации
 * 402 => Ошибка сервера
 * 403 => Доступ запрещен
 * 404 => Не найдено
 *
 * Используем: switch case
 */

//let err = 500

//let res = full(404)

//res = full(err)

console.log(full(500))


function full(num_err) {
  switch (num_err) {
    case 500:
      return "Server error";
      break;
    case 401:
      return "Ошибка авторизации";
      break;
    case 402:
      return "ошибка сервера";
      break;
    case 403:
      return "доступ запрещен";
      break;
    case 404:
      return "не найдено";
      break;
      default:
        return 'неизвестная ошибка'
  }
}
