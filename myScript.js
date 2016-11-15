function losujImie() {
    'use strict';
    var liczba, imie;
    imie = ['Andrzej', 'Jan', 'Filip', 'Anna', 'Krzysztof', 'Szymon', 'Kasia', 'Klaudia', 'Tomek', 'Ola', 'Piotr'];
    liczba = Math.floor(Math.random() * 11);
    return imie[liczba];
}
function losujNazwisko() {
    'use strict';
    var liczba, nazwisko;
    liczba = Math.floor(Math.random() * 8);
    nazwisko = ['Sobinski', 'Chmielinski', 'Kowalski', 'Nowak', 'Witkowski', 'Kwiatek', 'Głodny', 'Chyżyński'];
    return nazwisko[liczba];
}
function removeForms() {
    'use strict';
    var formsToRemove, formsParent;
    formsToRemove = document.getElementsByName('generator')[0];
    formsParent = formsToRemove.parentNode;
    formsParent.removeChild(formsToRemove);
}
function stworzTabele(i) {
    'use strict';
    var a, row, cell, newName, newSecondName, table;
    table = document.createElement('div');
    table.className = "Table1";
    row = document.createElement('div');
    row.className = "TytulTabeli";
    row.appendChild(document.createTextNode('Tabela'));
    table.appendChild(row);
    row = document.createElement('div');
    row.className = "RzadNazw";
    row.id = "RzadNazw";
    table.appendChild(row);
    cell = document.createElement('div');
    cell.className = "Komorka";
    cell.appendChild(document.createTextNode('Lp.'));
    row.appendChild(cell);
    cell = document.createElement('div');
    cell.className = "Komorka";
    cell.appendChild(document.createTextNode('Imię'));
    row.appendChild(cell);
    cell = document.createElement('div');
    cell.className = "Komorka";
    cell.appendChild(document.createTextNode('Nazwisko'));
    row.appendChild(cell);
	
    cell = document.createElement('div');
    cell.className = "Komorka";
    cell.id = "cel";
    row.appendChild(cell);
	
	for (a = 0; a < i; a++) {
        newName = losujImie();
        newSecondName = losujNazwisko();
        row = document.createElement('div');
        row.className = "Row1";
	
        cell = document.createElement('div');
        cell.className = "Komorka";
        cell.appendChild(document.createTextNode(a + 1));
        row.appendChild(cell);
	
        cell = document.createElement('div');
        cell.className = "Komorka";
        cell.appendChild(document.createTextNode(newName));
        row.appendChild(cell);
	
        cell = document.createElement('div');
        cell.className = "Komorka";
        cell.appendChild(document.createTextNode(newSecondName));
        row.appendChild(cell);
        
        cell = document.createElement('div');
        cell.className = "Komorka";
        cell.setAttribute('contenteditable', 'true');
        row.appendChild(cell);
        table.appendChild(row);
    }
    document.getElementById('kontener').appendChild(table);
	document.getElementById('cel').innerHTML += '<button id=\'columnButton\' class=\'button\' onClick=\'dodajKolumne()\'>Dodaj</button>';
	removeForms();
}
function dodajKolumne() {
    'use strict';
	var nowaKolumna, i;
	nowaKolumna = document.createElement('div');
	nowaKolumna.className = "Komorka";
	nowaKolumna.setAttribute('contenteditable', 'true');
	document.getElementById('RzadNazw').appendChild(nowaKolumna);
	for (i = 0; i < document.getElementsByClassName('Row1').length; i++) {
		nowaKolumna = document.createElement('div');
		nowaKolumna.className = "Komorka";
		nowaKolumna.setAttribute('contenteditable', 'true');
		document.getElementsByClassName('Row1')[i].appendChild(nowaKolumna);
	}
	document.getElementsByClassName('RzadNazw')[0].lastChild.appendChild(document.getElementById('columnButton'));
}
