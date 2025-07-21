const AdmZip = require("adm-zip");
const path = require("path");
const zipPath = path.join(__dirname, "/public/Que4.zip");
const extractPath = path.join(__dirname, "extractedFolder");
const zip = new AdmZip(zipPath);
zip.extractAllTo(extractPath, true);
console.log(`Extracted ${zipPath} to ${extractPath}`);
