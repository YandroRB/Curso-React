const URL_CAT_FACT='https://catfact.ninja/fact';

export async function getFactRandom (){
    try{
      const response = await fetch(URL_CAT_FACT);
      if(response.ok){
        const {fact}= await response.json();
        return fact;
      }
    }
    catch (e){
      console.error(e);
    }
}