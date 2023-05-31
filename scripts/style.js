if (process.env.NODE_ENV === "production") {
  require("dotenv").config();
} else {
  require("dotenv").config({ path: `.env.local` });
}
const fs = require("fs");

const source = `./src/styles/${process.env.NEXT_PUBLIC_SITE_NAME}_root.css`;
const dest = `./src/styles/root.css`;

fs.copyFile(source, dest, (err) => {
  if (err) throw err;
  // console.log("css file copied from " + process.env.NEXT_PUBLIC_SITE_NAME);
});
