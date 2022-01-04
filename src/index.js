module.exports = function toReadable(number) {
  const units = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine'
  }
  // Объект с единицами

  const dozens = {
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety'
  }
  // Объект с десятками

  let result = ''
  //Переменная под результат

  let str = number.toString()
  //Преообразование исходного значения в строковое

  if (str.length === 1) {
    for (let unit in units) {
      if (unit == str[0]) {
        return units[unit]
      }
    }
  }
  // Возврат числа, являющегося единицей

  if (str.length === 2) {
    if (str[0] == 1) {
      for (let key in dozens) {
        if (key == str) {
          return dozens[key]
        }
      }
    } else {
      for (let key in dozens) {
        if (str[0] == key[0]) {
          result += dozens[key]
        }
        if (str[0] == key[0] && str[1] != 0) {
          for (let unit in units) {
            if (str[1] == unit) {
              return result += ' ' + units[unit]
            }
          }
        }
      }
    }
  }
  // Возврат десятичного числа

  if (str.length === 3) {
    for (let unit in units) {
      if (unit == str[0]) {
        result += units[unit] + ' ' + 'hundred'
      }
    }
    // Добавление в 'result' первого значения трехзначного числа
    if (str[1] == 0 && str[2] != 0) {
      for (let unit in units) {
        if (unit == str[2]) {
          return result += ' ' + units[unit]
        }
      }
    }
    // Случай, когда второе значение равно '0'
    if (str[1] == 1) {
      for (let key in dozens) {
        if (key[1] == str[2]) {
          return result += ' ' + dozens[key]
        }
      }
    } else {
      for (let key in dozens) {
        if (str[1] == key[0]) {
          result += ' ' + dozens[key]
        }
        if (str[1] == key[0] && str[2] != 0) {
          for (let unit in units) {
            if (str[2] == unit) {
              result += ' ' + units[unit]
            }
          }
        }
      }
    }
  }

  return result
}
