function Oferta (marka, model, cena, spalanie, rocznik) {
    this.marka = marka;
    this.model = model;
    this.cena = cena;
    this.spalanie = spalanie;
    this.rocznik = rocznik;
    this.koszt100km = function() {
        let koszt = this.spalanie * pb95;
        return koszt;
    };
    this.wiekSamochodu = function() {
        let data=new Date()
        let wiek=Number(data.getFullYear())-this.rocznik;
        if(wiek==1) { wiek=wiek+' rok'; }
        else if (wiek>1 && wiek <5) { wiek=wiek+' lata'; }
        else { wiek=wiek+' lat'; }
        return wiek;
    }
}
const Komis = {
    Oferta1: new Oferta("Kia","Carens",60000,8,2016),
    Oferta2: new Oferta("Opel", "Astra", 70000, 10, 1998),
    Oferta3: new Oferta ("Renout", "clio", 50000, 6, 2008),
}
console.log(Komis)
var listaOfert= document.getElementById("marki")
for(n of Object.keys(Komis))
{
    let marka= Komis[n].marka
    let newElement = document.createElement('li')
    let tekst = document.createTextNode(marka)
    listaOfert.appendChild(newElement).appendChild(tekst)
}

for(n of Object.keys(Komis))
{
    console.log(Komis[n])
    var spalanie = Komis[n].spalanie
    console.log(spalanie)
}
Komis.Oferta1.sort((a, b)=>{
    if(a.spalanie > b.spalanie){
    return 1
 }else{
    return -1
 }
})
// sortable.sort() 
// console.log(sortable)
// let ar=[4, 6, 1, 2, 20, 3]
// let sorta=ar.sort()
// console.log(sorta)

