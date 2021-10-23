import { RESULT_TITLE } from "./config.js";
import InlineCss from "inline-css";

export const emailBody = async (row) => {
  const title = RESULT_TITLE;
  const {
    stdId,
    stdName,
    literature,
    concept,
    method,
    projectManagement,
    communication,
    total,
    grandTotal,
  } = row;

  const html = ` <div>
  <style>
    * {
      margin: 0px;
      font-family: Arial, Helvetica, sans-serif;
      text-align: center;
    }
    .title {
      font-size: large;
      font-weight: 700;
      text-align: center;
      padding: 10px;
      letter-spacing: 1px;
    }
    table {
      font-size: small;
      margin: auto;
      background-color: rgb(52, 206, 245);
      padding: 10px;
      color: rgb(39, 39, 39);
      border-radius: 8px;
    }
    td{
        border-top: 1px solid rgb(39, 39, 39);
        padding: 8px;
        margin: 0px;
        border-spacing: 0;
        border-collapse: collapse;
        text-align: left;
    }

    tr:first-child td{
        border-top: none;
        font-weight: 900;
        border-bottom: 1px solid rgb(39, 39, 39);
    }
    td:last-child {
      text-align: right;
      font-weight: 800;
    }
  </style>


  <div class="title">${title}</div>
  <table cellspacing="0">
    <tr>
      <td>${stdName}</td>
      <td>${stdId}</td>
    </tr>
    <tr>
      <td>Literature Review</td>
      <td>${literature}</td>
    </tr>
    <tr>
      <td>Concept Development & Project deliverables (PLO 3)</td>
      <td>${concept}</td>
    </tr>
    <tr>
      <td>Methodology</td>
      <td>${method}</td>
    </tr>
    <tr>
      <td>Project Management and Timeline (PLO 11)</td>
      <td>${projectManagement}</td>
    </tr>
    <tr>
      <td>Oral communication & Presentation(PLO 9)</td>
      <td>${communication}</td>
    </tr>
    <tr>
      <td>Total</td>
      <td>${total}</td>
    </tr>
    <tr>
      <td>Grand Total</td>
      <td>${grandTotal}</td>
    </tr>
  </table>
</div>`;

  const email = await InlineCss(html, { url: "filePath" });
  return email;
};
