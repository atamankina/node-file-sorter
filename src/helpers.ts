import * as path from 'node:path'


export function extractFileExtensions(dirContent: string[]) {

    const extensions = new Set();

    for(let i=0; i < dirContent.length; i++) {
        const fileName = dirContent[i]
        const fileExtension = path.extname(fileName)
        extensions.add(fileExtension)
    }

    return extensions
}

