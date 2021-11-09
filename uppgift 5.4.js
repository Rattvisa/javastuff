//skapa lista av bokstäver
let bokstav=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
//skapar en tom sträng att infoga saker i
let platelist="";
//skapar en tom sträng som ska användas för att göra plåt
let newplatecreation="";
//start på loopen för skyltar
for(let i = 1; i<=1000;i++)
    {
        //tömmer strängen
        newplatecreation="";
        //sätter in 3 slumpmässiga bokstäver från bokstavs listan
        for(let x=0;x<3;x++) 
        {
            newplatecreation+=(bokstav[(Math.floor(Math.random()*bokstav.length))]);
        }
        //sätter in "-" mellan bokstäver och nummer
        newplatecreation+=("-")
        //sätter in 3 slumpade siffror
        for(let y=0;y<3;y++)
        {
            newplatecreation+=(Math.floor(Math.random()*9)+1)
        }
        //kolla ifall plåten som skapas redan finns
        if(platelist.includes(newplatecreation))
            {
                //kastar bort och gör så att skyltloopen görs en extra gång så att det blir 1000 skyltar
                i--;
            }
        else
            {
                //lägger in den unika listan i liststrängen
                platelist+=(newplatecreation+" ");
            }
    }
//skriver ut listan efter loopen    
console.log(platelist);