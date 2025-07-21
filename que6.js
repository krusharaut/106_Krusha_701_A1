const fs = require("fs");

function deleteFile(file_path) {
  const promise = new Promise((resolve, reject) => {
    fs.unlink(file_path, (err) => {
      if (err) {
        reject("Error :" + err);
      } else {
        resolve("File is deleted");
      }
    });
  });
  return promise;
}

const promise = deleteFile("que6.txt");

promise
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
