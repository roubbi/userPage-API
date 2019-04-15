//This is the class that will manage all your APIs

class APIManager {
    constructor() {
        this.data = {}
    }

    //you should make all your API requests here
    //each request should update the `data` object accordingly

    loadData() {

        $.ajax({
            method: "GET",
            url: `https://randomuser.me/api/?results=7`,
            success: users => {
            
                this.data.user = users.results[0]
                this.data.friends = users.results.splice(1,6)    
                console.log(this.data.friends)   
                console.log("mooncake")       
            }
            
        })

        $.ajax({
            method: "GET",
            url: `https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 948) + 1 }/`,
            success: pokemonData => {

                this.data.pokemon = pokemonData
            }
            
        })



        $.ajax({
            method: "GET",
            url: `https://quotes.rest/qod`,
            success: quoteData => {

                let quote = {

                    quote: quoteData.contents.quotes[0].quote,
                    author: quoteData.contents.quotes[0].author
                }

                this.data.quote = quote
            }
        })


        $.ajax({
            method: "GET",
            url: `https://baconipsum.com/api/?type=meat-and-filler`,
            success: meatData => {

                let meatText = {text: meatData[0] } 
                
                this.data.meat = meatText
            }
            
        })
    }

}
