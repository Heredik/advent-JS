/*
Un millonario ha comprado una red social y no trae buenas noticias. 
Ha anunciado que cada vez que una jornada de trabajo se pierde por un día festivo, 
habrá que compensarlo con dos horas extra otro día de ese mismo año.

Obviamente la gente que trabaja en la empresa no le ha hecho ni pizca de gracia y 
están preparando un programa que les diga el número de horas extras que harían en el año si se aplicara la nueva norma.

Al ser trabajo de oficina, su horario laboral es de lunes a viernes.
Así que sólo tienes que preocuparte de los días festivos que caen en esos días.

Dado un año y un array con las fechas de los días festivos, 
devuelve el número de horas extra que se harían ese año:
*/

/*Consejos

El año puede ser bisiesto. Haz las comprobaciones que necesitas para ello, si fuese necesario.
Aunque el 31 de diciembre sea festivo, las horas extra se harán el mismo año y no el siguiente.
El método Date.getDay() te devuelve el día de la semana de una fecha. El 0 es domingo, el 1 es lunes, etc.
 */

// 01/06 es el 6 de enero, jueves. Cuenta.
// 04/01 es el 1 de abril, un viernes. Cuenta.
// 12/25 es el 25 de diciembre, un domingo. No cuenta.

const year = 2022;
const holidays = ['01/06', '04/01', '12/25']; // formato MM/DD

function countHours(year, holidays) {
  // 2 días -> 4 horas extra en el año
  let extraHours = 0;
  for (let i = 0; i < holidays.length; i++) {
    const date = new Date(`${holidays[i]}/${year}`).getDay();
    console.log(date);
    if (date > 0 && date < 6) {
      extraHours += 2;
      console.log(extraHours);
    }
  }
  return extraHours;
}

/* CountHours 2 */

function countHours2(year, holidays) {
  
}

console.log(
  countHours(2022, [
    '01/01',
    '01/06',
    '02/02',
    '02/17',
    '02/28',
    '06/03',
    '12/06',
    '12/25',
  ])
);

console.log(countHours(2023, ['01/06', '04/01', '12/25']));
