const Exceljs=require ('exceljs');
import {test,expect} from '@playwright/test'


async function writeExcelTest(searchValue,replacedValue,change,filePath) {
      const workbook=new Exceljs.Workbook();
      await workbook.xlsx.readFile(filePath)
      const worksheet=workbook.getWorksheet('Sheet1');
      const output=await readExcel(worksheet,searchValue);//first runwithout await then put
      const cell=worksheet.getCell(output.row,output.column+change.colChange); //insted of hardcode we use the object variables ,use change as last
      cell.value=replacedValue 
      await workbook.xlsx.writeFile(filePath);//re-write the file and save it again

}

async  function readExcel(worksheet,searchValue) 
{
    
   let output={row:-1,column:-1} 

  
worksheet.eachRow((row,rowNumber)=>{

    row.eachCell((cell,colNumber)=>{
 
        if(cell.value===searchValue)
      
         {
            output.row=rowNumber; 
            output.column=colNumber; 
            console.log(cell.value)
            console.log(output.row); 
            console.log(output.column);
        
      }
    })

  })

  return output; 
}