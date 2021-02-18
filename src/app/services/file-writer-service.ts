/* import { writeFile } from 'fs';

function getDateForFilename() {
    const date = new Date();

    return date.toISOString().substring(0, 10) + '_';
}

function saveToJson(path, filename, content) {
    writeFile(path + getDateForFilename() + filename + '.json', JSON.stringify(content), (err) => {
        if (err) throw err;
    });
}

export { saveToJson }

 */
