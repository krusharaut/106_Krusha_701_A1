const AdmZip = require("adm-zip");

const path = require("path");

const folderpath = path.join(__dirname, "/public/Que4");
const zipfolderpath = path.join(__dirname, "/public/Que4.zip");

const zip = new AdmZip();
zip.addLocalFolder(folderpath);

zip.writeZip(zipfolderpath);
console.log("file is zipped");
