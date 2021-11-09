//nr 1
let age=Math.floor(Math.random()*100)+1

if(age<18)
{
    console.log("GO AWAT!")
}
else
{
    console.log("WELCOME -_-")
}

//nr 2
let tarning = (Math.floor(Math.random()*6)+1)

switch(tarning)
{
    case(1):
    console.log("DEATH");
    break
    case(2):
    console.log("PAIN");
    break
    case(3):
    console.log("MINOR INCONVINIENCE");
    break
    case(4):
    console.log("HEALTHY");
    break
    case(5):
    console.log("IMORTAL");
    break
    case(6):
    console.log("DIVINE");
    break
}

//nr 3
for(let a = 0; a<=18;a++)
{
    console.log(a)
}

for(let b = 18; b>=0;b--)
{
    console.log(b)
}

for(let c = 134; c<=147;c++)
{
    console.log(c)
}
for(let i = 0; i<=20;i++)
{
    if(i%2==0)
    {
        console.log(i)
    }
}

//nr 4

let name_list=["Bob Ross", "Mr. Rogers", "Nikola Tesla", "Gregor Mendel", "Oda Nobunaga"]
for(let names = 0; names<=4;names++)
{
    console.log(name_list[names])
}

//nr 5

let lang_ord=("hindenburgkatastofen")
let new_array=[]
for(let i = 0; i<=(lang_ord.length-1);i++)
{
    new_array.push(lang_ord.charAt(i))
}

for(let g = 0; g<=(new_array.length-1); g++)
{
    console.log(new_array[g])
}

//nr 6

new_array=[]
for(let i = 0; i<=10;i++)
{
    let e= (Math.floor(Math.random()*100)+1)
    new_array.push(e)
}

new_array.sort(function(a, b){return a - b})
for(let g = 0; g<=(new_array.length-1); g++)
{
    console.log(new_array[g])
}