import {
  RESULT_TITLE,
  SHEETS_INDEX,
  TEST_MODE,
  TEST_RECIEVER_MAIL,
} from "./config.js";
import { emailBody } from "./emailBody.js";
import { readExcel } from "./read-excel.js";
import { sendMail } from "./sendMail.js";

for (let sheet of SHEETS_INDEX) {
  const rows = readExcel(sheet);
  for (let row of rows) {
    let receiver = TEST_MODE ? TEST_RECIEVER_MAIL : row.email;
    const html = await emailBody(row);
    const response = await sendMail(receiver, RESULT_TITLE, html);
    if (response.success) {
      console.log(`✔️ ${row.stdName}   ➡️ ${receiver}`);
    } else {
      console.log(`❌ ${row.stdName}   ➡️ ${receiver}`);
    }
  }
}

console.log("Task Finished");
