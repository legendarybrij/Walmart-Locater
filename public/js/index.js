// require("dotenv").config();
// var keys = require("./keys.js");
// var walmart = new Walmart(keys.walmart);

// Get references to page elements
$(".pin2").hide();
$(".pin1").hide();
var $exampleText = $("#example-text");
//var $exampleDescription = $("#example-description");
var $submitBtn = $("#submit");
var $exampleList = $("#example-list");
var $mapdivcordinates = $(".map");
var $items = $(".items");
var categoryPoint = { "infants&toddler":
  {"x":"669px", "y":"329px"},
"shoes":
  {"x":"542px", "y":"329px"}, 
"electronics":
  {"x":"400px", "y":"329px"}, 
"photocentre":
  {"x":"300px", "y":"329px"},
"paint":
  {"x":"264px", "y":"329px"},
"hardware":
  {"x":"215px", "y":"329px"},
"automotive":
  {"x":"160px", "y":"329px"},
"washroomtop":
  {"x":"240px", "y":"260px"},
"washroombottom":
  {"x":"586px", "y":"737px"},
"gardencenterleft":
  {"x":"90px", "y":"460px"},
"gardencenterbottom":
  {"x":"111px", "y":"756px"},
"seasonal":
  {"x":"100px", "y":"590px"},
"toys":
  {"x":"160px", "y":"515px"},
"sportinggoods":
  {"x":"163px", "y":"468px"},
"horticulture":
  {"x":"70px", "y":"686px"},
"pets":
  {"x":"140px", "y":"686px"},
"health&beauty":
  {"x":"286px", "y":"670px"},
"pharmacy":
  {"x":"356px", "y":"692px"},
"medical":
  {"x":"262px", "y":"756px"},
"visioncenter":
  {"x":"362px", "y":"765px"},
"cartsleft":
  {"x":"356px", "y":"796px"},
"cartsright":
  {"x":"833px", "y":"796px"},
"lotto":
  {"x":"458px", "y":"730px"},
"portraitstudio":
  {"x":"458px", "y":"762px"},
"hairsalon":
  {"x":"489px", "y":"759px"},
"nailsalon":
  {"x":"523px", "y":"737px"},
"customerservice":
  {"x":"632px", "y":"737px"},
"mcdonald":
  {"x":"702px", "y":"740px"},
"checkout":
  {"x":"627px", "y":"687px"},
"dairy":
  {"x":"810px", "y":"324px"},
"frozenfoods":
  {"x":"833px", "y":"352px"},
"papergood&chemicals":
  {"x":"419px", "y":"835px"},
"grocery":
  {"x":"845px", "y":"528px"},
"meat":
  {"x":"936px", "y":"478px"},
"produce":
  {"x":"875px", "y":"646px"},
"bakery":
  {"x":"855px", "y":"702px"},
"deli":
  {"x":"887px", "y":"695px"},
"stationary":
  {"x":"466px", "y":"444px"},
"crafts&fabricsright":
  {"x":"466px", "y":"500px"},
"crafts&fabricsleft":
  {"x":"389px", "y":"500px"},
"books&magazines":
  {"x":"466px", "y":"525px"},
"cards":
  {"x":"466px", "y":"559px"},
"seasonal":
  {"x":"463px", "y":"586px"},
"furniture":
  {"x":"350px", "y":"442px"},
"housewares":
  {"x":"280px", "y":"505px"},
"domestics":
  {"x":"328px", "y":"575px"},
};


// The API object contains methods for each kind of request we'll make
// var API = {
//   saveExample: function(example) {
//     return $.ajax({
//       headers: {
//         "Content-Type": "application/json"
//       },
//       type: "POST",
//       url: "api/examples",
//       data: JSON.stringify(example)
//     });
//   },
//   getExamples: function() {
//     return $.ajax({
//       url: "api/examples",
//       type: "GET"
//     });
//   },
//   deleteExample: function(id) {
//     return $.ajax({
//       url: "api/examples/" + id,
//       type: "DELETE"
//     });
//   }
// };

// refreshExamples gets new examples from the db and repopulates the list
// var refreshExamples = function() {
//   API.getExamples().then(function(data) {
//     var $examples = data.map(function(example) {
//       var $a = $("<a>")
//         .text(example.text)
//         .attr("href", "/example/" + example.id);

//       var $li = $("<li>")
//         .attr({
//           class: "list-group-item",
//           "data-id": example.id
//         })
//         .append($a);

//       var $button = $("<button>")
//         .addClass("btn btn-danger float-right delete")
//         .text("ｘ");

//       $li.append($button);

//       return $li;
//     });

//     $exampleList.empty();
//     $exampleList.append($examples);
//   });
// };

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var example = {
    text: $exampleText.val().trim()
    // description: $exampleDescription.val().trim()
  };

  // if (!(example.text && example.description)) {
    if (!(example.text)) {
    alert("You must enter an example text!");
    return;
  }

  // API.saveExample(example).then(function() {
  //   refreshExamples();
  // });

  $exampleText.val("");
  //$exampleDescription.val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
// var handleDeleteBtnClick = function() {
//   var idToDelete = $(this)
//     .parent()
//     .attr("data-id");

//   API.deleteExample(idToDelete).then(function() {
//     refreshExamples();
//   });
// };

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
//$exampleList.on("click", ".delete", handleDeleteBtnClick);
$mapdivcordinates.on("click",function(event){
  searchWalmart();
  console.log("X = "+event.originalEvent.offsetX +" Y = "+event.originalEvent.offsetY);
  
});

function searchWalmart() {

  $.get("/api/test/cheese", function (data) {
    console.log(data.items[0].categoryPath);
    //var category=data.items[0].categoryPath.toLowerCase().replace(/\s/g, "").split("/");
    var localCategory="";
    
   for(var i=0; i<data.items.length;i++)
     {
      
    var category=data.items[i].categoryPath.toLowerCase().replace(/\s/g, "");
      //console.log(category[0]);
    var imgBox = $("<img>");
    var name = $("<h4>");
    var price = $("<h5>");
    var stock =$("<h5>");
    var reviews=$("<h5>");
    $items.addClass("text-center");
    //Name
    $items.append(name);
    name.text(data.items[i].name);
    name.addClass("col-md-12");
    name.css({"color": "#4171b9"});
    name.css({"font-weight": "bold"});
    //Image
    name.append(imgBox);
    imgBox.addClass("col-md-12 search1");
    imgBox.attr("src",data.items[i].largeImage);
    imgBox.attr("data-id",category);
     
    //Price
    $items.append(price);
    price.text("Price: $"+data.items[i].salePrice);
    price.addClass("col-md-12");
    price.css({"color": "red"});
    //Stock
    price.append(stock);
    stock.text("Stock: "+data.items[i].stock); 
    stock.css({"color": "#70a959"});
  
    //Customer Reviews
    if(data.items[i].customerRating!==undefined)
    {
    stock.append(reviews);
    if(data.items[i].customerRating.length===5)
    {
    reviews.text("Reviews: "+data.items[i].customerRating.toString().slice(0,-1)+" stars");
    }else{
    reviews.text("Reviews: "+data.items[i].customerRating.toString()+" stars");
    }
    reviews.css({"color": "#cf8817"});
    reviews.css({"padding-bottom": "30px"});
    }else{
    stock.css({"padding-bottom": "30px"});
    }
    //category
    //changing Pin
    // imgBox.on("click",function(event){
      
    //   $(".pin1").css({"left": });
    //   $(".pin1").css({"top": });
    // });
    
    //Finding category
    imgBox.on("click",function(event){
      var dataID= event.currentTarget.attributes[2].textContent.split("/");
      console.log(event.currentTarget.attributes[2].textContent);
      $(".pin1").show();
      for(i in categoryPoint)
      {

            if(i===dataID[0]) 
            { console.log(categoryPoint[i]["x"]);
              $(".pin1").css({"left": categoryPoint[i]["x"]});
              $(".pin1").css({"top": categoryPoint[i]["y"]});
            }else if(dataID[0]==="arts,crafts&sewing" || dataID[0]==="arts" || dataID[0]==="arts&crafts"){
              $(".pin2").show();
              $(".pin1").css({"left": categoryPoint["crafts&fabricsleft"]["x"]});
              $(".pin1").css({"top": categoryPoint["crafts&fabricsleft"]["y"]});

              $(".pin2").css({"left": categoryPoint["crafts&fabricsright"]["x"]});
              $(".pin2").css({"top": categoryPoint["crafts&fabricsright"]["y"]});
            }else if(dataID[0]==="animalother" || dataID[0]==="animalaccessories" || dataID[0]==="animalfood" || dataID[0]==="animalhealth&grooming")
            {
              $(".pin1").css({"left": categoryPoint["pets"]["x"]});
              $(".pin1").css({"top": categoryPoint["pets"]["y"]});
            }else if(dataID[0]==="food" || dataID[0]==="food&beverages")
            { 
              var dairy = false; var frozen =false; 
              for(var i =0; i<dataID.length;i++)
              {
                if(dataID[i]==="dairy" || dataID[i]==="dairy,eggs&cheese")
                {
                  dairy = true; 
                }else if(dataID[i]==="frozenfoods")
                {
                  frozen =true;
                }
              }
              if(dairy===true)
              {
                $(".pin1").css({"left": categoryPoint["dairy"]["x"]});
                $(".pin1").css({"top": categoryPoint["dairy"]["y"]});
              }else if(frozen===true)
              {
                $(".pin1").css({"left": categoryPoint["frozenfoods"]["x"]});
                $(".pin1").css({"top": categoryPoint["frozenfoods"]["y"]});
              }else{
                $(".pin1").css({"left": categoryPoint["grocery"]["x"]});
                $(".pin1").css({"top": categoryPoint["grocery"]["y"]});
              }
            
            }else if(dataID[0]==="babydiapering,care,&other" || dataID[0]==="baby" || dataID[0]==="babyclothing" || dataID[0]==="babyfood" || dataID[0]==="babyfurniture" || dataID[0]==="babytoys" || dataID[0]==="babytransport" ) 
            {
              $(".pin1").css({"left": categoryPoint["infants&toddler"]["x"]});
              $(".pin1").css({"top": categoryPoint["infants&toddler"]["y"]});
            }else if(dataID[0]==="electronicsother" || dataID[0]==="cellphones" || dataID[0]==="computercomponents" || dataID[0]==="computers" || dataID[0]==="electronicsaccessories" || dataID[0]==="electronicscables" || dataID[0]==="printers,scanners,&imaging" || dataID[0]==="software" || dataID[0]==="tv's&videodisplays"|| dataID[0]==="videogames"|| dataID[0]==="videoprojectors" || dataID[0]==="movies&tvshows")
            {
              $(".pin1").css({"left": categoryPoint["electronics"]["x"]});
              $(".pin1").css({"top": categoryPoint["electronics"]["y"]});
            }
        
      }
    });

  }
  

  });
  
  


}


$submitBtn.on("click",function(event){
//   var input = $exampleText.val().trim();
  
// console.log(input);
// searchWalmart(input.toLowerCase().replace(/\s/g, "+"));

});


