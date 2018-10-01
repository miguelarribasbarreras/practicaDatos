function leerIndices() {
    indiceTR = document.getElementsByTagName('table')[0].getElementsByTagName('tr')
	a= document.getElementsByTagName('table')[0].getElementsByTagName('tr')[3].getElementsByTagName('td');
    str='[';
    for (j=1;j<=a.length;j++) {
		nom= indiceTR[1].children[j-1].textContent;
		ig = indiceTR[3].children[j].textContent.replace(',','.');
		bc = indiceTR[4].children[j].textContent.replace(',','.');
		bcd = indiceTR[5].children[j].textContent.replace(',','.');
		bcnd = indiceTR[6].children[j].textContent.replace(',','.');
		beq = indiceTR[7].children[j].textContent.replace(',','.');
		bi = indiceTR[8].children[j].textContent.replace(',','.');
		en = indiceTR[9].children[j].textContent.replace(',','.');
		str += "['" + nom;
		str += "'" + ig;
		str += "," + bc;
		str += "," + bcd;
		str += "," + bcnd;
		str += "," + beq;
		str += "," + bi;
		str += "," + en;
		str += "],"
		str += "\n"
    }
    str += "[,,]]"
    return str;
}