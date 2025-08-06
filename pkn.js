function pkn(choice){
    let wybory = ['papier','kamien','nozyce'];
    let kompRuch = wybory[Math.floor(Math.random() * wybory.length)];
    let wynik = `Komputer wybrał ${kompRuch}. `;
        
        if(choice === kompRuch) wynik += 'Remis.';

        else{
        switch(choice){
            case 'papier':
                wynik += (kompRuch === 'kamien') ? 'Wygrałeś.' : 'Przegrałeś.';
                break;

            case 'kamien':
                wynik += (kompRuch === 'nozyce') ? 'Wygrałeś.' : 'Przegrałeś.';
                break;

            case 'nozyce':
                wynik += (kompRuch === 'papier') ? ' Wygrałeś.' : ' Przegrałeś.';
                break;
        }
    }
    document.getElementById('wynikGry').textContent = wynik;
}