// require("dotenv").config();
// var keys = require("./keys.js");
// var walmart = new Walmart(keys.walmart);

// Get references to page elements
$(".pin2").hide();
$(".pin1").hide();
var $exampleText = $("#searchInput");
//var $exampleDescription = $("#example-description");
var $submitBtn = $("#submitInput");
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
"seasonalright":
  {"x":"460px", "y":"585px"},
"seasonalleft":
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
  {"x":"835px", "y":"419px"},
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
"luggageasserssories":
  {"x":"532px", "y":"433px"},
"hosiery":
  {"x":"569px", "y":"433px"},
"menswearup":
  {"x":"532px", "y":"467px"},
"mensweardown":
  {"x":"531px", "y":"576px"},
"intimatewear":
  {"x":"569px", "y":"467px"},
"ladieswearleft":
  {"x":"570px", "y":"516px"},
"ladieswearright":
  {"x":"670px", "y":"548px"},
"accessories":
  {"x":"609px", "y":"556px"},
"jewelry":
  {"x":"607px", "y":"602px"},
"boyswear":
  {"x":"617px", "y":"442px"},
"girlswear":
  {"x":"629px", "y":"474px"},
"sleepwear":
  {"x":"628px", "y":"470px"},
"fittingrooms":
  {"x":"678px", "y":"464px"}                   
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
//$submitBtn.on("click", handleFormSubmit);
//$exampleList.on("click", ".delete", handleDeleteBtnClick);
$mapdivcordinates.on("click",function(event){
  searchWalmart();
  console.log("X = "+event.originalEvent.offsetX +" Y = "+event.originalEvent.offsetY);
  
});

function searchWalmart(search) {

  $.get("/api/test/"+search, function (data) {
   //console.log(data.items[0].categoryPath);
    //var category=data.items[0].categoryPath.toLowerCase().replace(/\s/g, "").split("/");
    var localCategory="";
   for(var i=0; i<data.items.length;i++)
     {
      if(data.items[i].categoryPath!==undefined)
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
        //reviews.append("src",data.items[i].customerRatingImage);
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
          $(".pin2").hide();
          var dataID= event.currentTarget.attributes[2].textContent.split("/");
          console.log(dataID);
          $(".pin1").show();
          for(i in categoryPoint)
          {
                if(i===dataID[0]) 
                { //console.log(categoryPoint[i]["x"]);
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
                }else if(dataID[0]==="food" || dataID[0]==="food&beverages" || dataID[0]==="householdessentials")
                { 
                  var dairy = false; var frozen =false; meat=false; produce=false; bakery=false; deli=false; var papergood=false;
                  for(var i =0; i<dataID.length;i++)
                  {
                    if(dataID[i]==="dairy" || dataID[i]==="dairy,eggs&cheese")
                    {
                      dairy = true; 
                    }else if(dataID[i]==="frozenfoods")
                    {
                      frozen =true;
                    }else if(dataID[i]==="cake" || dataID[i]==="baking" || dataID[i]==="bakingmixes")
                    {
                      bakery=true;
                    }else if(dataID[i]==="meat" || dataID[i]==="meat&poultry" || dataID[i]==="meat,seafood&poultry" || dataID[i]==="tuna&seafood" || dataID[i]==="seafood")
                    {
                      meat=true;
                    }else if(dataID[i]==="deli")
                    {
                      deli=true;
                    }else if(dataID[i]==="produce")
                    {
                      produce=true;
                    }else if(dataID[i]==="toiletpaper" || dataID[i]==="laundry" || dataID[i]==="facialtissue" || dataID[i]==="cleaningsupplies")
                    {
                      papergood=true;
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
                  }else if(bakery===true)
                  {
                    $(".pin1").css({"left": categoryPoint["bakery"]["x"]});
                    $(".pin1").css({"top": categoryPoint["bakery"]["y"]});
                  }else if(meat===true)
                  {
                    $(".pin1").css({"left": categoryPoint["meat"]["x"]});
                    $(".pin1").css({"top": categoryPoint["meat"]["y"]});
                  }else if(deli===true)
                  {
                    $(".pin1").css({"left": categoryPoint["deli"]["x"]});
                    $(".pin1").css({"top": categoryPoint["deli"]["y"]});
                  }else if(produce===true)
                  {
                    $(".pin1").css({"left": categoryPoint["produce"]["x"]});
                    $(".pin1").css({"top": categoryPoint["produce"]["y"]});
                  }else if(papergood===true)
                  {
                    $(".pin1").css({"left": categoryPoint["papergood&chemicals"]["x"]});
                    $(".pin1").css({"top": categoryPoint["papergood&chemicals"]["y"]});
                  }
                  else{
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
                }else if(dataID[0]==="clothing")
                { 
                  var shoes = false; hosiery=false; menswear=false; intimatewear=false; var ladieswear=false; var boysclothing=false; girlsclothing=false; sleepwear=false;  accessories=false;
                  for(var i =0; i<dataID.length;i++)
                  {
                    if(dataID[i]==="shoes")
                    {
                      shoes = true; 
                    }else if(dataID[i]==="womenssocks,hosiery&tights" || dataID[i]==="womenshosiery&tights")
                    {
                      hosiery =true;
                    }else if(dataID[i]==="menswear" || dataID[i]==="mensactivewear" || dataID[i]==="mensactivefleece" || dataID[i]==="mensjeans" || dataID[i]==="mensregularjeans")
                    {
                      menswear =true;
                    }else if(dataID[i]==="womenslingerie"|| dataID[i]==="womenslingerie&shapewear")
                    {
                      intimatewear =true;
                    }else if(dataID[i]==="womenstops&t-shirts" || dataID[i]==="womensblouses&shirts" || dataID[i]==="womensactivewear")
                    {
                      ladieswear =true;
                    }else if(dataID[i]==="boysclothing" || dataID[i]==="boysuniforms")
                    {
                      boysclothing =true;
                    }else if(dataID[i]==="girlsclothing" || dataID[i]==="wondernation" || dataID[i]==="wondernationgirls" || dataID[i]==="schooluniforms" || dataID[i]==="babygirlsclothing" )  
                    {
                      girlsclothing =true;
                    }else if(dataID[i]==="sleepwear" || dataID[i]==="womenssleepwear&loungewear" || dataID[i]==="womensnightshirts&gowns" || dataID[i]==="womenspajamas" || dataID[i]==="menssleepwear&robes" || dataID[i]==="mensbig&tallsleepbottoms")  
                    {
                      sleepwear=true;
                    }else if(dataID[i]==="bags&accessories" || dataID[i]==="accessories")  
                    {
                      accessories=true;
                    }
                    

                  }
                  console.log("intimatewear ="+intimatewear);
                  if(shoes===true)
                  { 
                    $(".pin1").css({"left": categoryPoint["shoes"]["x"]});
                    $(".pin1").css({"top": categoryPoint["shoes"]["y"]});
                  }else if(hosiery===true)
                  {
                    $(".pin1").css({"left": categoryPoint["hosiery"]["x"]});
                    $(".pin1").css({"top": categoryPoint["hosiery"]["y"]});
                  }else if(menswear===true)
                  {
                    $(".pin2").show();
                    $(".pin1").css({"left": categoryPoint["menswearup"]["x"]});
                    $(".pin1").css({"top": categoryPoint["menswearup"]["y"]});

                    $(".pin2").css({"left": categoryPoint["mensweardown"]["x"]});
                    $(".pin2").css({"top": categoryPoint["mensweardown"]["y"]});
                  }else if(intimatewear===true)
                  {
                    $(".pin1").css({"left": categoryPoint["intimatewear"]["x"]});
                    $(".pin1").css({"top": categoryPoint["intimatewear"]["y"]});
                  }else if(ladieswear===true)
                  {
                    $(".pin2").show();
                    $(".pin1").css({"left": categoryPoint["ladieswearleft"]["x"]});
                    $(".pin1").css({"top": categoryPoint["ladieswearleft"]["y"]});

                    $(".pin2").css({"left": categoryPoint["ladieswearright"]["x"]});
                    $(".pin2").css({"top": categoryPoint["ladieswearright"]["y"]});
                  }else if(boysclothing===true)
                  { 
                    $(".pin1").css({"left": categoryPoint["boyswear"]["x"]});
                    $(".pin1").css({"top": categoryPoint["boyswear"]["y"]});
                  }else if(girlsclothing===true)
                  {  
                    $(".pin1").css({"left": categoryPoint["girlswear"]["x"]});
                    $(".pin1").css({"top": categoryPoint["girlswear"]["y"]});
                  }else if(sleepwear===true)
                  { 
                    $(".pin1").css({"left": categoryPoint["sleepwear"]["x"]});
                    $(".pin1").css({"top": categoryPoint["sleepwear"]["y"]});
                  }else if(accessories===true)
                  { 
                    $(".pin1").css({"left": categoryPoint["accessories"]["x"]});
                    $(".pin1").css({"top": categoryPoint["accessories"]["y"]});
                  }                  
                }else if(dataID[0]==="home" || dataID[0]==="shopbybrand")
                {
                  var furniture = false; var kidsfurniture = false; var kitchen=false; 
                  for(var i =0; i<dataID.length;i++)
                  {
                    if(dataID[i]==="furniture" || dataID[i]==="livingroomfurniture" || dataID[i]==="kidsfurniture" || dataID[i]==="mattressshop")
                    {
                      furniture = true; 
                    }else if(dataID[i]==="kitchen&dining" || dataID[i]==="appliances")
                    {
                      kitchen =true;
                    }

                  }
                  console.log("furniture ="+furniture);
                  if(furniture===true)
                  {
                    $(".pin1").css({"left": categoryPoint["furniture"]["x"]});
                    $(".pin1").css({"top": categoryPoint["furniture"]["y"]});
                  }else if(kitchen===true)
                  {
                    $(".pin1").css({"left": categoryPoint["housewares"]["x"]});
                    $(".pin1").css({"top": categoryPoint["housewares"]["y"]});
                  }else
                  {
                    $(".pin1").css({"left": categoryPoint["domestics"]["x"]});
                    $(".pin1").css({"top": categoryPoint["domestics"]["y"]});
                  }
                }else if(dataID[0]==="jewelry")
                {
                  $(".pin1").css({"left": categoryPoint["jewelry"]["x"]});
                  $(".pin1").css({"top": categoryPoint["jewelry"]["y"]});
                }else if(dataID[0]==="books")
                {
                  $(".pin1").css({"left": categoryPoint["books&magazines"]["x"]});
                  $(".pin1").css({"top": categoryPoint["books&magazines"]["y"]});
                }else if(dataID[0]==="musicalinstruments")
                {
                  $(".pin1").css({"left": categoryPoint["sportinggoods"]["x"]});
                  $(".pin1").css({"top": categoryPoint["sportinggoods"]["y"]});
                }else if(dataID[0]==="officesupplies" || dataID[0]==="office" || dataID[0]==="walmartforbusiness")
                {
                  $(".pin1").css({"left": categoryPoint["stationary"]["x"]});
                  $(".pin1").css({"top": categoryPoint["stationary"]["y"]});
                }else if(dataID[0]==="photocenter")
                {
                  $(".pin1").css({"left": categoryPoint["photocentre"]["x"]});
                  $(".pin1").css({"top": categoryPoint["photocentre"]["y"]});
                }else if(dataID[0]==="seasonal" || dataID[0]==="party&occasions")
                {
                    $(".pin2").show();
                    $(".pin1").css({"left": categoryPoint["seasonalright"]["x"]});
                    $(".pin1").css({"top": categoryPoint["seasonalright"]["y"]});

                    $(".pin2").css({"left": categoryPoint["seasonalleft"]["x"]});
                    $(".pin2").css({"top": categoryPoint["seasonalleft"]["y"]});
                }else if(dataID[0]==="patio&garden")
                { $(".pin2").show();
                $(".pin1").css({"left": categoryPoint["gardencenterleft"]["x"]});
                $(".pin1").css({"top": categoryPoint["gardencenterleft"]["y"]});

                $(".pin2").css({"left": categoryPoint["gardencenterbottom"]["x"]});
                $(".pin2").css({"top": categoryPoint["gardencenterbottom"]["y"]});
                } else if(dataID[0]==="personalcare" || dataID[0]==="health" || dataID[0]==="industrial&scientific" || dataID[0]==="beauty")
                { 
                      

                    var pharmacy = false;  
                    for(var i =0; i<dataID.length;i++)
                    {
                      if(dataID[i]==="vitamins&supplements" || dataID[i]==="equate" || dataID[i]==="firstaid" || dataID[i]==="industrial&scientific" ||  dataID[i]==="sexualwellness" ||  dataID[i]==="familyplanning" ||  dataID[i]==="fsaandhsashop" ||  dataID[i]==="sexualwellnesstopbrands" ||  dataID[i]==="homehealthcare" ||  dataID[i]==="digestivehealth")
                      {
                        pharmacy = true; 
                      }

                    }
                    console.log("pharmacy ="+pharmacy);
                    if(pharmacy===true)
                    {
                      $(".pin1").css({"left": categoryPoint["pharmacy"]["x"]});
                      $(".pin1").css({"top": categoryPoint["pharmacy"]["y"]});
                    }else
                    {
                      $(".pin1").css({"left": categoryPoint["health&beauty"]["x"]});
                      $(".pin1").css({"top": categoryPoint["health&beauty"]["y"]});
                    }
                  
                }
                else if(dataID[0]==="homeimprovement")
                { 
                  $(".pin1").css({"left": categoryPoint["hardware"]["x"]});
                  $(".pin1").css({"top": categoryPoint["hardware"]["y"]});
                }else if(dataID[0]==="gifts&registry")
                {
                  $(".pin1").css({"left": categoryPoint["checkout"]["x"]});
                  $(".pin1").css({"top": categoryPoint["checkout"]["y"]});
                }else if(dataID[0]==="toys")
                {
                  $(".pin1").css({"left": categoryPoint["toys"]["x"]});
                  $(".pin1").css({"top": categoryPoint["toys"]["y"]});
                }else if(dataID[0]==="auto&tires")
                { 
                  $(".pin1").css({"left": categoryPoint["automotive"]["x"]});
                  $(".pin1").css({"top": categoryPoint["automotive"]["y"]});
                }
            
          }
        });

  
    }

  }

  });
  
  


}


$submitBtn.on("click",function(event){
var input = $("#searchInput").val().trim();

searchWalmart(input.toLowerCase().replace(/\s/g, "+"));

});


