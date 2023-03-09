const fs = require('fs');

const { build, buildSync } = require("esbuild");


const dirPath = '/src/';
// fs.readFile('src/index.ts', 'utf8' , (err, data) => {
//     if (err) {
//       console.error(err)
//       return
//     }
//     const result4 = Array.from(new Set(data.split(/['']/).filter(el => el.startsWith('.')).map(el => el.replace('.', 'src'))));
//     console.log("result4", result4);


    
// })

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
  
fs.readdir(__dirname + dirPath, function (err, filePath) {
    if (err) throw err;
    const entryPointsArray = filePath.map(function (filePath) {
        console.log("filePath", filePath);
        return `src/${filePath}/${capitalizeFirstLetter(filePath)}.tsx`;
    });

    console.log("entryPointsArray", entryPointsArray);

    const sharedConfig = {
        entryPoints: entryPointsArray,
        bundle: true,
        minify: true,
        //external: Object.keys(dependencies).concat(Object.keys(peerDependencies))
    };
    
    // build({
    //     ...sharedConfig,
    //     platform: 'node', // for CommonJS
    //     outdir: "dist",
    //     tsconfig: 'tsconfig.cjs.json',
    // });
    
    buildSync({
        ...sharedConfig,
        platform: 'node', // for ECMAScript modules
        outdir: "dist/es",
        format: "esm",
        tsconfig: 'tsconfig.esm.json',
        splitting: true,
        sourcemap: true,
        jsx: 'automatic',
    });

});




//  "build:code": "pnpm run build:js:es && pnpm run build:js:commonjs",