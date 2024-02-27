import fs from 'fs'

function copyFile(instructions) {
    fs.access(instructions, (err) => {
        if (err) {
            console.log(`Soubor ${instructions} neexistuje.`);
            return;
        }
        fs.readFile(instructions, (err, data) => {
            if (err) {
                console.log(`Nastala chyba při čtení souboru s instrukcemi ${instructions}`);
                return;
            } else {
                const [source, target] = data.toString().trim().split('\n');
                fs.access(source, (err) => {
                    if (err) {
                        console.log(`Zdrojový soubor ${source} neexistuje.`);
                        return;
                    }
                    fs.readFile(source, (err, data) => {
                        if (err) {
                            console.log(`Nastala chyba při čtení zdrojového souboru ${source}`);
                            return;
                        }
                        fs.writeFile(target, data, (err) => {
                            if (err) {
                                console.log(`Nastala chyba při kopírování souboru ${source} do souboru ${target}`);
                                return;
                            }
                            console.log(`Obsah souboru byl úspěšně zkopírován do ${target}.`);
                        })
                    })
                })
            }
        })    
    });
} 

const instructions = "instrukce.txt";
copyFile(instructions);
