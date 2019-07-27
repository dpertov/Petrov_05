
do {
	var hight = +prompt ('Введите высоту вершины прямоугольного треугольника');
	if (hight<=0 || hight!==hight) {
		alert(' Можно ввести только цифры!');
	}
	else {
		alert (calcHight (hight));	
		break;
	}
} while (hight>0);

function calcHight(h) {
	var rezult = '*';
	var o = '\n';
	var j = '';
	var n = '*';
	for (var i = 1; i <= h; i++) {
		j += rezult + o;
		rezult += n;
	}
	return (j);
}





/*r i=1,o="\n";
var j="",n="*";
var rezult ="*";
while (i<=hight ) {
	j +=rezult+o;
	rezult +=n;
	i++;*/