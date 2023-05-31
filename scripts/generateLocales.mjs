#!/usr/bin/env zx

// Variables
const labels = require("./translations.json");
const { promises: fsPromises } = require("fs");

//Replace locale in files
async function replaceInFile(sourceFile, destFile, locale, defaultLocale) {
  try {
    const contents = await fsPromises.readFile(sourceFile, "utf-8");
    const re = new RegExp(`"${defaultLocale}"`, "g");
    let replaced = contents.replace(re, `'${locale}'`);
    await fsPromises.writeFile(destFile, replaced);
  } catch (err) {
    console.log(err);
  }
}
const { translations, defaultLocale, languages } = labels;
const langs = languages.filter((l) => l != defaultLocale);
//UTILS
function getTranslation(source, lang) {
  const chunks = source.split("/");
  const file = chunks.slice(-1)[0];
  const folders = chunks.slice(0, chunks.length - 1);

  const translatedPath = folders.reduce((str, name) => {
    const translation = translations[name] ? translations[name][lang] : name;
    return (str += translation + "/");
  }, "");

  const fileName = file.replace(".tsx", "");
  const translatedFile = translations[fileName]
    ? translations[fileName][lang]
    : fileName;
  return { folder: translatedPath, file: `${translatedFile}.tsx`, source };
}

//START
// console.log(chalk.blue("Hello routes generator!"));
// let lang = await question(
//   `What language do you want generate? ${langs.join("|")} : `
// );
// if (!langs.includes(lang)) {
//   console.log(chalk.red("Language not found!"));
//   process.exit(1);
// }

//MOVE TO PAGES DIRECTORY
await cd(`./src/app`);
const pwd = await $`pwd`;
await $`echo Current folder is ${pwd}.`;

within(async () => {
  for (let lang of langs) {
    console.log(
      chalk.blue("GENERATING ROUTES FOR "),
      chalk.green(lang.toUpperCase())
    );

    console.log(chalk.blue("Removing previous " + lang + " folder..."));
    try {
      await $`rm -fr ${lang}`;
    } catch (error) {
      console.log(error);
    }

    //GET ROUTE FILES of root
    let allfiles = await glob(["**/*", "!api/*", `!${lang}/*`]);
    // console.log('allfiles', allfiles);
    const destinations = allfiles.map((f) => getTranslation(f, lang));
    console.log("destinations", destinations);

    try {
      //CREATE LANG FOLDER
      console.log(chalk.blue("Generating new " + lang + " folder..."));
      try {
        await $`mkdir ${lang}`;
      } catch (error) {
        //ignore
      }

      //CREATE TRANSLATED FOLDERS
      console.log(chalk.blue("Creating translated folders..."));
      const folderPromises = destinations.map(({ folder }) => {
        return $`mkdir -p ${lang}/${folder}`;
      });
      await Promise.all(folderPromises);

      //CREATE FILES
      console.log(chalk.blue("Generating page files..."));
      const generateFiles = destinations.map((destination) => {
        const { folder, file, source } = destination;
        const dest = `${lang}/${folder}/${file}`;

        return replaceInFile(source, dest, lang, defaultLocale);

        // await $`touch ${dest}`;
        // await fs.copy(source, dest);
        // return fs.writeFile(dest, templateStr);
      });
      await Promise.all(generateFiles);
    } catch (error) {
      console.log(error);
    }
    console.log(chalk.blue("Done!"));
  }
  console.log(chalk.blue("The End."));
});
