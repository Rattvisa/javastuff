//nr 1
console.log(4+4);
console.log(9-1);
console.log(2*4);
console.log(16/2);
console.log(2**3);
console.log(18%10);

//nr 2
let ord=("excalibur");
let langd=(ord.length);
console.log(`ordet ${ord} är ${langd} bokstäver långt`);

//nr 3
let season=("höst");
if(season=="höst")
    {
    console.log("potatis")
    }
else
    {
    console.log("ingen potatis");
    }

//nr 4

let frukt=(3)
if(frukt>0)
    {
        console.log("det finns frukt")
    }
else
    {
        console.log("det finns ingen frukt")
    }

//nr 5
let aland =
    {
        kommuner:16, huvudsprak:"svenska", stad:"mariehamn", typ_av_landmassa:"Ö"
    }
console.log(aland.kommuner)

//nr 6
let varldshav=["stilla havet","indiska oceanen", "atlanten"]
varldshav.push("medelhavet")
let first_and_last_sea=[varldshav.shift(), varldshav.pop()]
console.log(first_and_last_sea)
varldshav.splice(1, 0,"Gula havet")
console.log(varldshav)