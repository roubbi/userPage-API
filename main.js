// Create instances of your classes
// Create the loadData and renderData functions - these should use the relevant instance

const apiManager = new APIManager()
const renderer = new Renderer()


const loadData = function () {

    apiManager.loadData()
}

const renderData = function () {

    renderer.render(apiManager.data)
}

// Amazing stuff => Read more https://handlebarsjs.com/builtin_helpers.html
Handlebars.registerHelper('toProperCase', function (str) { 
     
      return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
    
    
  });

