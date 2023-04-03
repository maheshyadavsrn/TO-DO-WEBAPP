document.addEventListener('DOMContentLoaded', e => {
    const myForm = document.forms[0];
    const ul = document.querySelector('ul');
    var error = document.getElementById('error');

    // Add notes to the list
    myForm.addEventListener('submit', e => {
        e.preventDefault();
        const value = myForm.querySelector('input').value;
        if(value == "") {
            error.innerHTML = 'field must be filled out';
            return false;
        } else {
            error.innerHTML = "";
        }
        // list craetion
        const li = document.createElement('li');
        const addNote = document.createElement('span');
        const deleteNote = document.createElement('span');
        const noteDate = document.createElement('p');

        // inserting into the list items
        ul.insertBefore(li, ul.childNodes[0]);
        li.appendChild(addNote);
        li.appendChild(deleteNote);
        li.appendChild(noteDate);

        // Date published
        var date = new Date();

        var day = date.getDay()
        var days = date.getDate();
        var month = date.getMonth();
        var year = date.getFullYear();
        var hour = date.getHours();
        var min = date.getMinutes();

        // To get the exact day
        switch(day) {
            case 0: getDay = 'Sunday ';
            break;
            case 1: getDay = 'Monday ';
            break;
            case 2: getDay = 'Tuesday ';
            break;
            case 3: getDay = 'Wednesday ';
            break;
            case 4: getDay = 'Thursday ';
            break;
            case 5: getDay = 'Friday ';
            break;
            case 6: getDay = 'Saturday ';
            break;
            default: getDay = 'Today ';
        }

        // To get the exact month
        switch(month) {
            case 0: getMonth = ' Janu, ';
            break;
            case 1: getMonth = ' Feb, ';
            break;
            case 2: getMonth = ' Mar, ';
            break;
            case 3: getMonth = ' Apr, ';
            break;
            case 4: getMonth = ' May, ';
            break;
            case 5: getMonth = ' Jun, ';
            break;
            case 6: getMonth = ' Jul, ';
            break;
            case 7: getMonth = ' Aug, ';
            break;
            case 8: getMonth = ' Sep, ';
            break;
            case 9: getMonth = ' Oct, ';
            break;
            case 10: getMonth = ' Nov,';
            break;
            case 11: getMonth = ' Dec, ';
            break;
        }

        addNote.textContent = value;
        deleteNote.textContent = 'x';
        noteDate.textContent = ' On ' + getDay + days + getMonth + year + ' by ' + hour + ':' + min;

        addNote.classList.add('note');
        deleteNote.classList.add('delete');
        deleteNote.setAttribute('title', 'Delete note');
        noteDate.classList.add('date');
    });

    // Delete notes
    ul.onclick = function(e){
        if(e.target.className == 'delete'){
            const li = e.target.parentElement;
            ul.removeChild(li);
        }
    }
});