
const notes = require('./notes')
const yargs = require('yargs')
const validator = require('validator');
const chalk = require('chalk');


//yargs---------------------------------------------
//create add command 
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

//create remove command
yargs.command({
    command: 'remove',
    describe: 'remove a note from list',
    builder: {
        title: {
            describe: 'Enter title for Note to delete',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNotes(argv.title)
    }
})

//create a list command
yargs.command({
    command: 'list',
    describe: 'listing all notes',
    handler(argv) {
        notes.listNotes()
    }
})

//create a read command
yargs.command({
    command: 'read',
    describe: 'reading note',
    builder: {
        title: {
            describe: 'Enter title to read',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNotes(argv.title)
    }
})


//this
yargs.parse()

// or 

//console.log(yargs.argv)







//const msg = getNotes();

// //process-----------------------------------------
// const command = process.argv
// console.log(command)
// console.log(yargs.argv.title)

// if(command === 'add'){
//     console.log('Adding Note!');
// }else if(command === 'remove'){
//     console.log('Removing Note!')
// }



//validator------------------------------------
//console.log(validator.isEmail('as@as.com'));



//chalk-----------------------------------------
// console.log(chalk.red.bgBlue.bold(msg));

// const error = chalk.bold.green;
// const warning = chalk.keyword('white');

// console.log(error('Error!'));
// console.log(warning('Warning!'));

// console.log(chalk.keyword('blue')('Some orange text'))

// const greenMsg = chalk.red.inverse.bold('Eror!');
// console.log(greenMsg);





// const add = require('./utils')

// const sum = add(4,-2);
// console.log(sum);


