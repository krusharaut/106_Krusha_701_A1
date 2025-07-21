const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "example.txt");

fs.writeFile(filePath, "Hello, this is sample text!", "utf8", (err) => {
  if (err) {
    console.error("Error writing file:", err);
    return;
  }
  console.log("File written successfully.");

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      return;
    }
    console.log("File contents:", data);

    const newFilePath = path.join(__dirname, "renamed_example.txt");
    fs.rename(filePath, newFilePath, (err) => {
      if (err) {
        console.error("Error renaming file:", err);
        return;
      }
      console.log("File renamed successfully.");

      //   try {
      //     const stats = fs.statSync(newFilePath);
      //     console.log("File stats:", stats);
      //     console.log("File size (bytes):", stats.size);

      //     fs.unlink(newFilePath, (err) => {
      //       if (err) {
      //         console.error("Error deleting file:", err);
      //         return;
      //       }
      //       console.log("File deleted successfully.");
      //     });
      //   } catch (error) {
      //     console.error("Error getting stats:", error);
      //   }
    });
  });
});
