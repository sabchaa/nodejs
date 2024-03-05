import fs from 'fs/promises'

async function createFiles() {
    try {
        const content = await fs.readFile('instrukce.txt');
        const numOfFiles = parseInt(content);
    
        if (isNaN(numOfFiles) || numOfFiles < 0) {
            console.log(`Zadejte platný počet souborů.`)
            return;
        }
        
        const promises = [];
        for (let i = 0; i < numOfFiles; i++) {
            const fileName = `${i}.txt`;
            const fileContent = `Soubor ${i}`;
            promises.push(fs.writeFile(fileName, fileContent));
        }
        await Promise.all(promises);
        console.log(`Bylo úspěšně vyvtořeno ${numOfFiles} souborů.`);
    
    } catch (error) {
    console.error(`Chyba: ${error.message}`);
    }
}

createFiles();
