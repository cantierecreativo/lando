import { promises as fsPromises } from "fs";

//Replace file contents
async function replaceInFile(sourceFile, destFile, toReplace, replacement) {
  try {
    const contents = await fsPromises.readFile(sourceFile, "utf-8");
    const re = new RegExp(`${toReplace}`, "g");
    let replaced = contents.replace(re, `${replacement}`);
    await fsPromises.writeFile(destFile, replaced);
  } catch (err) {
    console.log(err);
  }
}

(async () => {
  const filePath = "./src/gql/graphql.ts";
  const list = [
    `CreatedAtAsc = '_createdAt_ASC'`,
    `CreatedAtDesc = '_createdAt_DESC'`,
    `UpdatedAtAsc = '_updatedAt_ASC'`,
    `UpdatedAtDesc = '_updatedAt_DESC'`,
  ];
  for (let toReplace of list) {
    let replacement = `_${toReplace}`;
    await replaceInFile(filePath, filePath, toReplace, replacement);
  }
})();
