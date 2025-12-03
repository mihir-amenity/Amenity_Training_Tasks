

const email="test@example.com";
const phoneno=1234567890
let regex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z]{2,}\b/gi
const pattern=/^[789]\d{9}/;
const phoneno1="9876543210"

if(regex.test(email)){
    console.log(" email valid");
    
}
else{
    console.log(" email invalid");
    
}


if(pattern.test(phoneno)){
    console.log(" phone no  valid");
    
}
else{
    console.log(" phone no invalid");
    
}

if(pattern.test(phoneno1)){
    console.log("valid");
    
}
const data="paymentadviceto:allhourselectricalwaabn:54788190299tel:92752839email:service@allhourselectricalwa.com.aucustomertuvakhusidinvoicenumberinv-3649amountdue0.00duedate4jan2025amountenclosedentertheamountyouarepayingabovetaxinvoicetuvakhusidinvoicedate4jan2025invoicenumberinv-3649referencej2911abn54788190299allhourselectricalwaabn:54788190299tel:92752839email:service@allhourselectricalwa.com.audescriptionquantityunitpricegstamountaudinstalled1xclientsuppliedlight1.00150.0010%150.00job:j2911jobaddress:8salamanderstreet,dianellasubtotal150.00totalgst10%15.00totalaud165.00addcreditcardprocessingfee2.81lessamountpaid167.81amountdueaud0.00duedate:4jan2025pleaseusetheinvoicenumberasthepaymentreference.eftdetails:bsb066-167accno10617158paymenttermsstrictly:14daysifthereareanyqueriesaboutthisinvoice,pleasedonothesitatetocontactus.thankyouforusingus,weappreciateyourbusiness!"
const emails=data.match(regex)|| [];


console.log("email are:",emails);
const match = data.match(/duedate\s*:\s*(\d{1,2}[a-zA-Z]{3,9}\d{4})/);
if(match)
{
    console.log("duedate :",match[1]);
    
}
 const abns = data.match(/abn\s*:\s*(\d{9,11})/i);
if(abns){
    console.log("abn :",abns);
    
}
 const datas=data.match(/amountdue\s*(\d+\.\d+)/);
 if(datas){
    console.log("amount dues:",datas[1]);
    
 }
 const invoicedate=data.match(/invoicedate\s*(\d{1,2}[a-zA-Z]{3,9}\d{4})/)
 console.log("invoice date",invoicedate[1]);

const amount=data.match(/amountpaid\s*(\d+\.\d+)/);
console.log("amount paid",amount[1]);