(() => {
    const images_list = [
  {
      "url": "img/br-cottage1.png",
      "alt": "",
      "name": "image 1",
      "link": ""
  },
  {
      "url": "img/br-cottage2.png",
      "alt": "",
      "name": "image 2",
      "link": ""
  },
  {
      "url": "img/br-cottage3.png",
      "alt": "",
      "name": "image 3",
      "link": ""
  },
  {
      "url": "img/br-cottage4.png",
      "alt": "",
      "name": "image 4",
      "link": ""
  },
  {
      "url": "img/br-cottage5.png",
      "alt": "",
      "name": "image 5",
      "link": ""
  }
    ];
  
  // IMAGE SLIDER //
    let slider_id = document.querySelector("#hcg-slider-1");
  
    // append all images
    let dots_div = "";
    let images_div = "";
    for (let i = 0; i < images_list.length; i++) {
      // if no link without href="" tag
      let href = (images_list[i].link == "" ? "":' href="'+images_list[i].link+'"');
      images_div += '<a'+href+' class="hcg-slides animated"'+(i === 0 ? ' style="display:flex"':'')+'>'+
              '<span class="hcg-slide-number">'+(i+1)+'/'+images_list.length+'</span>'+
              '<img src="'+images_list[i].url+'" alt="'+images_list[i].name+'">'+
             '</a>';
      dots_div += '<a href="#" class="hcg-slide-dot'+(i === 0 ? ' dot-active':'')+'" data-id="'+i+'"></a>';
    }
    slider_id.querySelector(".hcg-slider-body").innerHTML = images_div;
    slider_id.querySelector(".hcg-slide-dot-control").innerHTML = dots_div;
  
    let slide_index = 0;
  
    const images = slider_id.querySelectorAll(".hcg-slides");
    const dots = slider_id.querySelectorAll(".hcg-slide-dot");
    const showSlides = () => {
      if (slide_index > images.length-1) {
        slide_index = 0;
      }
      if (slide_index < 0) {
        slide_index = images.length-1;
      }
      for (let i = 0; i < images.length; i++) {
        images[i].style.display = "none";
        dots[i].classList.remove("dot-active");
        if (i == slide_index) {
          images[i].style.display = "flex";
          dots[i].classList.add("dot-active");
        }
      }
    }
  
    const dot_click = event => {
      event.preventDefault();
      slide_index = event.target.dataset.id;
      showSlides();
    }
  
    for (let i = 0; i < dots.length; i++) {
      dots[i].addEventListener("click", dot_click, false);
    }
    // auto play
    setInterval(() => {
      slide_index++;
      showSlides();
    }, 5000);
  
  })();



  // Accordion
  var acc = document.getElementsByClassName("accordion");
  var i;
  
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }

  