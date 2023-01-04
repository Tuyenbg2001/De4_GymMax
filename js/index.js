const $$ = document.querySelectorAll.bind(document);
$$(".listing-item").forEach((item) => {
    item.onclick = (e) => {
      e.preventDefault();
      $$(".listing-item").forEach((item) =>
        item.classList.remove("cate-active")
      );
      item.classList.add("cate-active");
  
     
    };
  });

  $$(".listing-item").forEach((item,index)=>{
    item.addEventListener('click',function(e){
        var typeList = e.target.getAttribute('typeList')
        $$(".col-4").forEach((item1,index)=>{
            item1.style.display = "none"
            if(item1.getAttribute('typeList').includes(typeList)){
                item1.style.display = "block"
            }
            if(typeList == "top-seller"){
                item1.style.display = "block"
            }
        })
    })
})


  
 

