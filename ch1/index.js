// const fs = require("fs")
const fsPromise = require("fs").promises
const path = require("path")


const fileOps = async () => {
    try {
        const data = await fsPromise.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8')
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

fileOps()

// fs.readFile(
//     path.join(__dirname, 'files', 'starter.txt'),
//     'utf8',
//     (err, data) => {
//         if (err) throw err

//         console.log(data);
//     }
// )

process.on('uncaughtException', err => {
    console.log(`UNCAUGHT ${err}`);
    process.exit(1)
})

// fs.writeFile(
//     path.join(__dirname, 'files', 'reply.txt'),
//     'Nice to meet youe',
//     (err) => {
//         if (err) throw err

//         console.log("Write complete");

//         fs.appendFile(
//             path.join(__dirname, 'files', 'reply.txt'),
//             '\n\nYess',
//             (err) => {
//                 if (err) throw err

//                 console.log("Append complete");

//                 fs.rename(
//                     path.join(__dirname, 'files', 'reply.txt'),
//                     path.join(__dirname, 'files', 'reply_v2.txt'),
//                     (err) => {
//                         if (err) throw err

//                         console.log("Rename complete");
//                     }
//                 )
//             }
//         )
//     }
// )