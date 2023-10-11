export const getRicky = async () =>{
    try{
        const ricky = await fetch("https://rickandmortyapi.com/api/character").then(res => res.json());
        console.log(ricky);
        return ricky.results;
    } catch (error) {
        console.error(error);
    }
}