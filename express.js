const express = require("express");
const PORT = process.env.PORT || 8007;
const app = express();
const fs = require("fs")
const database = require("../database.json/")
    

// 1. Read the existing file
fs.readFile(database.JSON, (err, data) => {
    if (err && err.code === "ENOENT") {
        // But the file might not yet exist.  If so, just write the object and bail
        return fs.writeFile(database.users, JSON.stringify([obj]), error => console.error);
    }
    else if (err) {
        // Some other error
        console.error(err);
    }    
    // 2. Otherwise, get its JSON content
    else {
        try {
            const fileData = JSON.parse(database.users);

            // 3. Append the fullname, aboutme, etc
            fileData.push(fullname, aboutme, githubUrl, twitterUrl, favouriteBooks, favouriteArtists);


            //4. Write the file back out
            return fs.writeFile(file, JSON.stringify(fileData), error => console.error)
        } catch(exception) {
            console.error(exception);
        }
    }
});