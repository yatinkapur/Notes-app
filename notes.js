const fs = require('fs');
const chalk = require('chalk');


const listNotes = ()=>{
    const notes = loadNotes()
    console.log(chalk.inverse('Your Notes'))
    
    notes.forEach(element => console.log(element.title));
}

const readNotes =(title) =>{
    const notes = loadNotes()
    const readNote = notes.find((note) => note.title === title)
    if(!readNote){
        console.log(chalk.red.inverse('No Note Found'))
    }
    else{
        console.log(chalk.yellow.inverse(readNote.title))
        console.log(readNote.body)
    }
}

const addNote = (title, body) => {
    const notes = loadNotes()

    //const duplicateNotes = notes.filter((note) => note.title === title)
    // if (duplicateNotes.length === 0) {
    //     notes.push({
    //         title: title,
    //         body: body
    //     })
    //     saveNotes(notes);
    //     console.log('new note added');
    // }
    // else {
    //     console.log('Note title taken')
    // }


    const duplicateNote = notes.find((note) =>note.title === title)
    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
        console.log('new note added');
    }
    else {
        console.log('Note title taken')
    }
    
}


const removeNotes = (title) => {
    console.log(title, 'Note to be removed')

    const notes = loadNotes()

    const notesToKeep = notes.filter((note) => note.title !== title)

    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Note Removed'))
        saveNotes(notesToKeep)
    }
    else {
        console.log(chalk.red.inverse('No Note Found'))
    }


}


const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('note.json')
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
        //return data;
    }
    catch (e) {
        return [];
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('note.json', dataJSON)
}


module.exports = {
    addNote: addNote,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNotes:readNotes

};