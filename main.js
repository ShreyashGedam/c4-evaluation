async function apiCall(url) {


    //add api call logic here
    try
    {
      var res = await fetch(url)

      var data = await res.json()

      return data

    }
    catch(error)
    {
      console.log("error")
    }


}


function appendArticles(articles, main) {

    //add append logic here
    articles.forEach(element => {
        var box = document.createElement("div")
        box.addEventListener("click",function()
        {
            localStorage.setItem("article",JSON.stringify(element))
            window.location.href="news.html"
        })

        var image = document.createElement("img")
        image.src = element.urlToImage
        image.style.width="400px"

        var div1 = document.createElement("div")
        var div2 = document.createElement("div")

        var para1 = document.createElement("p")
        para1.textContent= element.content
        para1.style.margin = "5px"

        var para2 = document.createElement("p")
        para2.textContent= element.description
        para2.style.margin = "5px"

        div1.append(para1)
        div2.append(para2)
        
  
        box.append(image,div1,div2)
  
        main.append(box)
        
      });

}

export { apiCall, appendArticles }