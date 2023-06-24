import { format } from 'date-fns';
import { v4 as uuidv4 } from 'uuid';

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const logger = async (message) => {
    const dataTime = `${format(new Date(), 'yyyy-MM-dd HH:mm:ss')}`
    const logItem = `${dataTime}\t ${uuidv4()}\t ${message}\n`

    try {
        if (!fs.existsSync(path.join(__dirname, 'logs'))) {
            await fs.promises.mkdir(path.join(__dirname, 'logs'))
        }
        await fs.promises.appendFile(path.join(__dirname, 'logs', `logs.txt`), logItem)
    } catch (error) {
        console.error(error)
    }
}

export default logger