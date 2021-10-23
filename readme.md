# Instructions

> *It is recommended to create a separate email address to use in this application. 
> For Gmail you need to [allow the less secure apps](https://www.google.com/settings/security/lesssecureapps) on your account.*

**Download and Install following applications to run the script:**
- **[Git Bash Command Line Tool](https://git-scm.com/downloads)**
- **[Node JS](https://nodejs.org/en/)**
- **[VS Code](https://code.visualstudio.com/)**(Optional)

**Now follow these steps:**
- Download the source code and extract the zip file.
- Open the **index.html** file. This is the template of email that will be sent. The text inside the `${}` are variables. Define the excel header names according to these variables.
- Open the **config.js** file using  VS Code or Notepad. You can change these global variables.

## Configuration
|Variable Name |Description  |Type| Example |
|--|--|--|--|
|*EXCEL_FILE_NAME*  | Name of your excel file which must be present in the same directory.| String | "Results.xlsx"
|*RESULT_TITLE*  | Title of Result that will be sent as email Subject and Title| String | "FYP Results"
|*SENDER_MAIL* | Email address that will be used to send emails | String | "test_email123@gmail.com"
|*SENDER_PASSWORD*  | Password of Email address.| String | "password123"
|*SHEETS_INDEX*  | Array with indexes of excel file sheets (starting from 0)| Array of Numbers | [1,2,3,4] 
|*TEST_RECIEVER_MAIL* | Your Test email address to test the code.| String | "65waqas@gmail.com"
|*TEST_MODE*  | For true, emails will be sent to test email. For false, emails will be sent to students.| Boolean| true / false


## Running the Script

- Inside the folder, right click and click on **Git Bash Here** . The Git terminal will open.
- Inside the terminal, type the command **`npm install`** . It will download a number of required packages and a folder with name **node_modules** will be created.
- Type the command **`node index.js`** .
- The script will start sending emails.
- To cancel the script press **CTRL + C**.