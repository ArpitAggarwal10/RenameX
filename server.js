const fs = require("fs")
const replaceThis = "firstname";
const replaceWith = "secondname"
const path = require("path");
const preview = false;
const folder = __dirname + "/data/"

try {
    let dirRead = () => {
        fs.readdir(folder, (err, names) => {
            console.log(names)
            for (let index = 0; index < names.length; index++) {
                const item = names[index];
                let newFile = path.join(folder + item.replaceAll(replaceThis, replaceWith));
                let oldfile = path.join(folder + item)
                if (!preview) {
                    fs.rename(oldfile, newFile, () => {
                        console.log("The Rename Of The Item Is Successfull!!")
                    })
                } else {
                    if (oldfile !== newFile)
                        console.log("Are You Sure Want To Remane " + "data/" + item + " To The File Which Is " + newFile)
                }
            }
        })
    }
    console.log(dirRead())
} 
catch (error) {
    console.log(error);
}