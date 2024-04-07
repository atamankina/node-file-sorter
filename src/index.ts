import * as fs from 'node:fs'
import * as path from 'node:path'
import { extractFileExtensions } from './helpers'

// Step 1. List the contents of the folder.

const dirContent = fs.readdirSync('./input')
console.log(dirContent)

// Step 2. Identufy file types.

const extensions = extractFileExtensions(dirContent)
console.log(extensions)

// Step 3. Sort files based on conditions.