var term = {
    USA: 12,
    Russia: 3,
    Canada: 2,
    China: -3,
    India: 26
};
alert('---Температуры стран---\n' + 'США: ' + term.USA + '°C' + '\n' + 'Россия: ' + term.Russia + '°C' + '\n' + 'Канада: ' + term.Canada + '°C' + '\n' + 'Китай: ' + term.China + '°C' + '\n' + 'Индия: ' + term.India + '°C');

var sred = 0;
var n = 0;
for (i in term){
    sred +=term[i]
    n++
}
sred /= n;

function term_max(){   
    var max = 0;
    for(i in term)
    {
       if(max < term[i])
       {
          max = term[i]
       }
    }
    alert('Средняя температура стран: ' + sred + '°C' + '\n' + 'Максимальная температура стран: ' + max + '°C');
}
term_max();