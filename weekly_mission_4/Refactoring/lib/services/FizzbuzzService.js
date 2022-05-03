class FizzbuzzService{
    static applyValidationInExplorer(explorers){
        explorers.filter((explorer) => {
            if(explorer.score%3 === 0 && explorer.score%5 === 0 ){
                explorer.trick = "FIZZBUZZ";
            } else if(explorer.score%3 === 0){
                explorer.trick = "FIZZ"; 
            } else if(explorer.score%5 === 0){
                explorer.trick = "BUZZ";
            } else{
                explorer.trick = explorer.score;
            }});
        //const fizzbuzz = explorers.map((explorer) => {explorer.githubUsername, explorer.score, explorer.trick);
        //return fizzbuzz;
        return explorers;
    }
}
module.exports = FizzbuzzService;