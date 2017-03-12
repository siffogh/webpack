import fs from 'fs';

fs.createReadStream('./src/index.html').pipe(fs.createWriteStream('./dist/index.html'));
