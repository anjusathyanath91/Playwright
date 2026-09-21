import Exceljs from 'exceljs'
//import {test,expect} from '@playwright/test'

//custom function to read an excel and to change the values
async function writeExcelTest(searchValue, replacedValue, change, filePath) {
  const workbook = new Exceljs.Workbook();//Workbook() is predefined
  await workbook.xlsx.readFile(filePath)
  const worksheet = workbook.getWorksheet('Sheet1');
  const output = await readExcel(worksheet, searchValue);//first runwithout await then put
  if (output.row !== -1) {
    const cell = worksheet.getCell(output.row, output.column + change.cchange)
    cell.value = replacedValue
    await workbook.xlsx.writeFile(filePath);//re-write the file and save it again
  }
  else {
    console.log("Search value cannot find")
  }
}

async function readExcel(worksheet, searchValue) {

  let output = { row: -1, column: -1 }


  worksheet.eachRow((row, rowNumber) => {

    row.eachCell((cell, colNumber) => {

      if (cell.value === searchValue) {
        output.row = rowNumber;
        output.column = colNumber;
        console.log(cell.value)
        console.log(output.row);
        console.log(output.column);

      }
    })

  })

  return output;
}
await writeExcelTest('swift', 'replaced price', { rchange: 0, cchange: 1 }, 'E:/cloneplaywright/utils/excelforplaywright.xlsx')