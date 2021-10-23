import parser from 'simple-excel-to-json'
import { EXCEL_FILE_NAME } from './config.js';


export const readExcel = (sheetIndex = 0) => {
    return parser.parseXls2Json(`./${EXCEL_FILE_NAME}`)[sheetIndex];
}


