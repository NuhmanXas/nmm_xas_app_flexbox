const fs = require("fs");
const path = require("path");

const targetDir = path.resolve(__dirname, "../NMMXasPackages");
const sourceDir = path.resolve(__dirname, "../nmm_xas_app_flexbox");

// Create the target directory if it doesn't exist
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// Move the package
// Check if the source directory exists to avoid errors
if (fs.existsSync(sourceDir)) {
  fs.renameSync(sourceDir, path.join(targetDir, "nmm_xas_app_flexbox"));
} else {
  console.log("Source directory does not exist.");
}
