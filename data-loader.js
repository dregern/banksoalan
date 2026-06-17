
async function loadYear(year){
 const r=await fetch(`../data/tahun${year}.json`);
 return await r.json();
}
