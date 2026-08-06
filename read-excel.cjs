const xlsx = require('xlsx');
const workbook = xlsx.readFile('C:\\Users\\Shaym Bhadja\\Downloads\\sahana-defence-product-page-map (1).xlsx');
for (const sheetName of workbook.SheetNames) {
    console.log('=== Sheet:', sheetName, '===');
    const sheet = workbook.Sheets[sheetName];
    const data = xlsx.utils.sheet_to_json(sheet, { header: 1 });
    data.forEach(row => console.log(row.join('\t')));
}
