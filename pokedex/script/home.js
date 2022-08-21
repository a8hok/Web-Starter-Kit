
const putPoke=(pokemon)=>{
    const div=document.createElement("div");
    const img=document.createElement("img");
    const h2=document.createElement("h2");
    const parr=document.createElement("p");
    div.appendChild(img);
    div.appendChild(h2);
    div.appendChild(parr);
    div.setAttribute("class","poke-card");
    img.setAttribute("src",pokemon["image"]);
    img.setAttribute("alt","image not found");
    h2.innerText=pokemon["name"];
    parr.innerHTML=`Type :${pokemon["type"]}<br>height :${pokemon["height"]} foot<br>weight :${pokemon["weight"]} kg`;
    document.querySelector("main").appendChild(div);  
}

async function getPoke(i){
    const poke=await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    const pokeData=await poke.json();
    const pokemon={};
    pokemon["name"]=pokeData.name;
    pokemon["image"]=pokeData.sprites["front_default"];
    pokemon["type"]=pokeData.types.map((typ)=>typ.type.name).join(", ");
    pokemon["height"]=pokeData.height;
    pokemon["weight"]=pokeData.weight;
    putPoke(pokemon);
}


const fetchPoke=()=>{
    for(let i=1;i<=150;i++){
        getPoke(i);
    }
}

fetchPoke();

