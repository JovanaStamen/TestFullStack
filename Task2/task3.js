function SearchMeal()
{

    // I tested with Arr, Arrabiata, empty search return all
    var q = $("#searchSomething").val();
    $.getJSON("https://www.themealdb.com/api/json/v1/1/search.php",
    {
      s: q,
       action: "meals",
      format: "json"
    },
    function(data) {
      $("#results").empty();
      $("#results").append("<h2>Results for <b>" + q + "</b></h2>");
    
      if(data!=null)
      {
     
      $.each(data.meals, function(i,item){
       
        if (item.dateModified != null) {
        $("#results").append("<p>Item is modified on: " + item.dateModified +"</p>");
        }
        if (item.idMeal != null) {
        $("#results").append("<p>Meal id is:"+item.idMeal+"</p>");
        }
        if (item.idMeal != null && item.strCategory!=null && item.strArea!=null) {
        $("#results").append("<h1>Name of meal is: "+item.strMeal+" from Category: "+ item.strCategory +"</h1>");
        }
       
        if(item.strInstructions!=null)
        {
        $("#results").append("<article>"+item.strInstructions+"</article>");
        }
        if(item.strMealThumb!=null)
        {
        $("#results").append("<p><img src="+item.strMealThumb+" /><p>");
        }
        $("#results").append("<p>"+item.strTags+"</p>");
        if(item.strYoutube!=null)
        {
            var embedd = item.strYoutube.replace("watch","embed");
        $("#results").append("<p><iframe  width='420' height='315' frameborder='0' allowfullscreen src="+embedd+"</iframe></p>");
        }
        
        for (i = 1; i < 21; i++)
        { var name = "strIngredient" + i.toString();
          var name2 = "strMeasure" + i.toString();
        if(item[name]!=null && item[name]!="")
        {
        $("#results").append("<p>"+item[name]+"(" + item[name2] +")</p>"); // do 20
        }
       }

        if(item.strSource!=null)
        {
        $("#results").append("<p><a target='_blank' href="+item.strSource+">"+item.strMeal+"</a></p>"); // do 20
        }
     
        $("#results").append("<hr />");
        
      });
      
    }

  
    });

  };