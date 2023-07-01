// quartet

document.addEventListener("DOMContentLoaded", eQ => {
  const storeQ = {
    "Forbidden City": "The Quartet of Malhar: Eye of the Storm are the visionary captains of the ship, who harmoniously navigate through the storm of Malhar. With their guidance, they strive to provide an exhilarating journey, inviting participants to embrace the whirlwind of chaos and discover the beauty within.",
    "n4":"Within the university, the department of assistance is in charge of crowd and venue control. We provide care for participants, viewers, and occasionally even other volunteers xD. We ensure that there is little disruption and that all Malhar events go off without a hitch. Along with managing the audience, we also get the pleasure of dealing with every judge that shows up to hear Malhar's case. Basically, we keep things running smoothly by working in the background.",
    "n5":"\"We do everything else after we eat.\" Managing the food and drinks on the days of Malhar is the responsibility of hospitality, a management division and key component of Malhar. Here at Hospitality, we also take care of the participants' lodging requirements and use cardolates to convey to the workers the sentiments and feelings of their fellow participants. Food and drinks are provided during pre-Malhar gatherings as well as during the major Malhar days.",
    "Yuyuantan Park": "We never take a chance. That is why we do frisks. Although the music is loud, we continue to manage the crowd. We really shine when the judges are involved. We carry out our plans because the college's safety is in our hands. We are SECURITY, for your interest. Security is the department for you if you want to have a great Malhar and have a lot of fun while working. It's the largest department, and there is a variety of tasks that necessitates diligent, committed, and vivacious individuals!!!",
    "Jingshan Park": "Mic check 123!” Texxx has its wirlesses and connections with all the other departments of Malhar. Being the warehouse of all technical support, the department illuminates the fest by sweating through the rehearsals, trials and mocks. The drastic effect of the new normal has challenged this bunch of technical people to construct a virtual stage and help people experience Malhar on their screens. Besides being the only big 4 that survived the online set up, Texxx has transitioned into becoming an events department this year.",
    "Temple of Heaven":"Xavier's ‘Moffice’ houses a group of calculative individuals who look after the financing and budgeting of the fest. One might yawn at their monotonous engagement with spreadsheets, organisation, numbers, math and research but that’s where all the money is! When dealing with a tight budget, the finance department is at its best, trying not to compromise on the necessary expenses. The financers tally their puns and funs and always strike a balance between work and play!",
    "Beihai Park":"One of the Big 4, with 3 sub-departments: Classrooms: Ensuring that the lecture halls are aesthetically pleasing to the audience and participants. Bamboo structures are being built all over the college campus by construction, but displays is always (S)Laying down creative ways to exhibit the many theme-related decor. Events: Oversees the setups and logistical needs for events taking place in the Foyer, Hall, and Quad. We only have 2 goals: to keep Malhar and our volunteers content, and to create a single, enduring family!",
    "Houhai Park":" The backbone of Malhar, Marketing brings in all the cash (and much more) that is needed to run the whole show. On a regular day, they are stuck on long, tiring calls, working hard to get the financial support we need for Malhar. Due to their contagious enthusiasm and ambition, they get the work done to get the base ready for Malhar to be built on. Their specialities lie in multitasking and being extremely talented!",
   };
  
  // const nav = document.querySelector(".navbar");
  // const nav_brand = document.querySelector(".navbar .brand");
  // const nav_tabs = document.querySelector(".navbar .tabs");
  // const nav_menu_btn = document.querySelector(".navbar .menu-btn"); 
  // let md = 920;
  
  // nav_menu_btn.onclick = e2 => {
  //   let window_width = window.innerWidth;
  //   if(window_width<=md)
  //     nav_tabs.classList.toggle("hidden");
  //   else
  //     nav_tabs.classList.remove("hidden");
  // }
  
  const btn_l = document.querySelector(".btn-leftQ");
  const btn_r = document.querySelector(".btn-rightQ");
  const slider = document.querySelector(".carousel-sliderQ");
  const labels = document.querySelectorAll(".carousel-labelQ");
  const description = document.querySelector(".carousel-descriptionQ");
  const items = document.querySelectorAll(".carousel-itemQ");
  const num_item = items.length - 2;

  let item_width = items[0].clientWidth;
  let count = 1;
  let slide_r = 1;
  let slide_l = -1;
  let active_label = document.querySelector(".carousel-labelQ.active");
  
  // if(window.innerWidth<=md)
  //     nav_tabs.classList.add("hidden");
  
  // window.onresize = e2 => {
  //   item_width = items[0].clientWidth;
  //   if(window.innerWidth<=md)
  //     nav_tabs.classList.add("hidden");
  // }
  
  function slide(direction){ 
    // if (count == num_item-1 || count==0) return;
    active_label.classList.remove("active");     
    if(direction===slide_r)
      count++;
    else if(direction===slide_l)
      count--;
    
    let item = items[count];
    
    active_label = document.querySelector(`.carousel-labelQ[for="${item.name}"]`);
    active_label.classList.add("active");     
    
    description.innerText = storeQ[item.name];
    slider.style.transform = `translateX(${-count * item_width}px)`;
    slider.style.transition = "0.75s ease-out";     
  }
  
  btn_r.onclick = eQ => {
    slide(slide_r); 
  }
  
  btn_l.onclick = eQ => {
    slide(slide_l);
  }
  
  slider.ontransitionend = eQ => {   
    if(count==num_item+1){
      count = 1;
      slider.style.transform = `translateX(${-item_width}px)`; 
      slider.style.transition = "";
    }
    if(count==0){
      count = num_item;
      slider.style.transform = `translateX(${-num_item * item_width}px)`; 
      slider.style.transition = "";
    }
  }
});






// container 1

document.addEventListener("DOMContentLoaded", e => {
  const store = {
    "Forbidden City":"They (net)work their way through everything that they need for Malhar and did the \"Am I audible?\" with an audience before it was the new normal. Supreme graphics, expert salesman shop and technical expertise is what they bring to the table!" ,
    "Jingshan Park":"Computers as a department chooses to reside on Discord. In addition to the painful tracking down of bugs and fixing them, you'll probably find one member of the department or another awake at any time of the day. Finding snippets of code through infinite hours of scrolling, clear out something thats \"bugging\" you, or helping the other OGs with all the problems in their computers. All these fall right under their domain." ,
    "Temple of Heaven":"Conclave is like the cherry on the cake of Malhar. It is a youth platform full of glamour and intellect where eminent personalities and dignitaries share their expertise. Right from the President of India to your favourite Bollywood star, you can meet everyone at Conclave!" ,
    "N4":"Creatives sets the brand identity from Malhar. Everything from the logo and social media posts to digitally designed merch and banners falls under Creatives' umbrella !" ,
    "Beihai Park": "The Public Relations (PR) department for Malhar'23 is responsible for managing and enhancing the overall image, reputation and social media communication of the events.",
    "Houhai Park": "Decor and Merchandise (DnM) specializes in transforming the college space into a captivating environment through creative backdrops and installations as well as by offering an array of appealing merchandise and paintings. At DnM, we ensure that our work is not only visually stunning but also creates lasting memories.",
    "Yuyuantan Park": "Filming and Documentation is a department which captures anticipation and enthusiasm on all the days leading upto the fest, and at the end, becomes a way to recollect and remember all the significant moments lived.",

  };
  
  // const nav = document.querySelector(".navbar");
  // const nav_brand = document.querySelector(".navbar .brand");
  // const nav_tabs = document.querySelector(".navbar .tabs");
  // const nav_menu_btn = document.querySelector(".navbar .menu-btn"); 
  // let md = 920;
  
  // nav_menu_btn.onclick = e => {
  //   let window_width = window.innerWidth;
  //   if(window_width<=md)
  //     nav_tabs.classList.toggle("hidden");
  //   else
  //     nav_tabs.classList.remove("hidden");
  // }
  
  const btn_l = document.querySelector(".btn-left");
  const btn_r = document.querySelector(".btn-right");
  const slider = document.querySelector(".carousel-slider");
  const labels = document.querySelectorAll(".carousel-label");
  const description = document.querySelector(".carousel-description");
  const items = document.querySelectorAll(".carousel-item");
  const num_item = items.length - 2;

  let item_width = items[0].clientWidth;
  let count = 1;
  let slide_r = 1;
  let slide_l = -1;
  let active_label = document.querySelector(".carousel-label.active");
  
  // if(window.innerWidth<=md)
  //     nav_tabs.classList.add("hidden");
  
  // window.onresize = e => {
  //   item_width = items[0].clientWidth;
  //   if(window.innerWidth<=md)
  //     nav_tabs.classList.add("hidden");
  // }
  
  function slide(direction){ 
    // if (count == num_item-1 || count==0) return;
    active_label.classList.remove("active");     
    if(direction===slide_r)
      count++;
    else if(direction===slide_l)
      count--;
    
    let item = items[count];
    
    active_label = document.querySelector(`.carousel-label[for="${item.name}"]`);
    active_label.classList.add("active");     
    
    description.innerText = store[item.name];
    slider.style.transform = `translateX(${-count * item_width}px)`;
    slider.style.transition = "0.75s ease-out";     
  }
  
  btn_r.onclick = e => {
    slide(slide_r); 
  }
  
  btn_l.onclick = e => {
    slide(slide_l);
  }
  
  slider.ontransitionend = e => {   
    if(count==num_item+1){
      count = 1;
      slider.style.transform = `translateX(${-item_width}px)`; 
      slider.style.transition = "";
    }
    if(count==0){
      count = num_item;
      slider.style.transform = `translateX(${-num_item * item_width}px)`; 
      slider.style.transition = "";
    }
  }
});


// container 2

document.addEventListener("DOMContentLoaded", e2 => {
  const store2 = {
    "Forbidden City": "These are departments forming the compass that gives the fest direction.What are Management Departments like, you ask? Well they do the tech, the money, the budget AND they're funny.",
    "n4":"Assistance is a department under the Management domain and mainly deals with crowd management and venue management and are incharge of all venues where events take place. \nNeed to know the routes around college? Need the first aid kit? I hope not but need an ambulance? Need help with anything at all?\nWe are the solution to all your problems!",
    "n5":"Hospitality is a department that ensures the comfort of everyone associated with Malhar right from the workforce to the guests. Whether it's food hunting, card designing or meal packing, we do it all. Finally we also encapsulate your best Malhar memories through Cardolates.",
    "Yuyuantan Park": "Security ensures the safety and control of the crowd on the days of Malhar. It is part of the big four and is the largest department in terms of workforce strength. The department has jobs like acquiring licenses, crowd control, audience safety, frisking, confiscating banned items, Judge parking, Judge routes and safety, entry, exit and evacuation.",
    "Jingshan Park": "Bright lights, loud speakers and extravagant settings. Our unrivaled talent for blowing fuses and making speakers screech will leave you in awe. From illuminating the venue to blasting the music, Texxx does it all.",
    "Temple of Heaven":"Finance is the bridge between the vision and the execution of Malhar. As a department which deals with money, we believe that trust and loyalty is most integral to our team as confidentiality is our second nature. From budgeting to reimbursement,  not a day goes by when finance is not pulling up an ace up to its sleeves.Finance is everywhere and when it's about the job, no matter how tough it is, we leave no stone unturned!",
    "Beihai Park":"All venues and setup-related work are handled by logistics. It involves moving bulky items, setting up backgrounds, building and displaying stages and setting up benches and tables in Classrooms. Three auxiliary departments are present.Construction, Displays & Classrooms",
    "Houhai Park":"Marketing is responsible for helping raise funds that are essential to keep the festival running and for all the tie ups that Malhar undertakes. Ask us how you can get involved!",
   };
  
  // const nav = document.querySelector(".navbar");
  // const nav_brand = document.querySelector(".navbar .brand");
  // const nav_tabs = document.querySelector(".navbar .tabs");
  // const nav_menu_btn = document.querySelector(".navbar .menu-btn"); 
  // let md = 920;
  
  // nav_menu_btn.onclick = e2 => {
  //   let window_width = window.innerWidth;
  //   if(window_width<=md)
  //     nav_tabs.classList.toggle("hidden");
  //   else
  //     nav_tabs.classList.remove("hidden");
  // }
  
  const btn_l = document.querySelector(".btn-left2");
  const btn_r = document.querySelector(".btn-right2");
  const slider = document.querySelector(".carousel-slider2");
  const labels = document.querySelectorAll(".carousel-label2");
  const description = document.querySelector(".carousel-description2");
  const items = document.querySelectorAll(".carousel-item2");
  const num_item = items.length - 2;

  let item_width = items[0].clientWidth;
  let count = 1;
  let slide_r = 1;
  let slide_l = -1;
  let active_label = document.querySelector(".carousel-label2.active");
  
  // if(window.innerWidth<=md)
  //     nav_tabs.classList.add("hidden");
  
  // window.onresize = e2 => {
  //   item_width = items[0].clientWidth;
  //   if(window.innerWidth<=md)
  //     nav_tabs.classList.add("hidden");
  // }
  
  function slide(direction){ 
    // if (count == num_item-1 || count==0) return;
    active_label.classList.remove("active");     
    if(direction===slide_r)
      count++;
    else if(direction===slide_l)
      count--;
    
    let item = items[count];
    
    active_label = document.querySelector(`.carousel-label2[for="${item.name}"]`);
    active_label.classList.add("active");     
    
    description.innerText = store2[item.name];
    slider.style.transform = `translateX(${-count * item_width}px)`;
    slider.style.transition = "0.75s ease-out";     
  }
  
  btn_r.onclick = e2 => {
    slide(slide_r); 
  }
  
  btn_l.onclick = e2 => {
    slide(slide_l);
  }
  
  slider.ontransitionend = e2 => {   
    if(count==num_item+1){
      count = 1;
      slider.style.transform = `translateX(${-item_width}px)`; 
      slider.style.transition = "";
    }
    if(count==0){
      count = num_item;
      slider.style.transform = `translateX(${-num_item * item_width}px)`; 
      slider.style.transition = "";
    }
  }
});


// container 3


document.addEventListener("DOMContentLoaded", e3 => {
  const store3 = {
    "Forbidden City": "The ones who are keeping the competitive spirit of Malhar alive and rerouting the legacy of Malhar's events in this never-seen-before virtual setup. It's them who make Malhar as Event-ful as it gets!",
    "Yuyuantan Park1": "Be it dance, culinary, or arts and crafts, Workshops Incorporated is the department that offers a space for everyone to learn something unique and have fun through its many workshops. The Yardsale is a wholesome social cause event that WINC also handles. Toh ab aankh maro, toofan machao ;)",
    "Jingshan Park": "From the grace of contemporary to the swag of hip-hop, from the melodies of acapella to the beats of jazz, we've got it all covered! WPA is the platform that gives your passion wings!",
    "Temple of Heaven":"Entertainment, theatricals and contests is a department which includes a variety of events like Malhar icon, theater & Field domination etc etc.. If you are someone who is interested in event management and event curation, this department is the best place for you to have a versatile and most exclusive experience related to events.",
    "n5":"Rightly dubbed the \"Backbone of Malhar\", We are the unsung heroes of the festival, without whom the festival would be nothing more than a pipe dream, working tirelessly behind the scenes to make sure everything runs smoothly.",
    "Beihai Park":"Fine Arts is a captivating voyage of shattered preconceptions, where we experiment and explore new avenues. From our resplendent events to the alluring Fine Arts Lounge, each conception we conceive is a veritable masterpiece of originality. The Fine Arts Department at Malhar is a vibrant hub of creativity and expression. With a diverse range of artistic disciplines, it fosters a nurturing environment for aspiring artists to explore their talents.",
    "Houhai Park":"The Indian Performing Arts department of Malhar 2023 aims to promote the beats of tabla, the mellifluous notes of the sitar, the rhythmic footwork of Kathak and the energetic beats of Bhangra. By fusing the traditional art forms with a little Bollywood tadka, our vision is to organize the grandest and the most entertaining events in Malhar!",
    "Yuyuantan Park": " Literary Arts is a department that seems very niche, but in a lot of ways, is one of the most diverse. From Taal and Blog to Book Lounge and finally Events, it is the embodiment of creative expression. Each event allows you to explore and potentially put out a part of you that is undiscovered. So, if you’re not afraid to challenge yourself, this is the department to be:) "
  };
  
  // const nav = document.querySelector(".navbar");
  // const nav_brand = document.querySelector(".navbar .brand");
  // const nav_tabs = document.querySelector(".navbar .tabs");
  // const nav_menu_btn = document.querySelector(".navbar .menu-btn"); 
  // let md = 920;
  
  // nav_menu_btn.onclick = e3 => {
  //   let window_width = window.innerWidth;
  //   if(window_width<=md)
  //     nav_tabs.classList.toggle("hidden");
  //   else
  //     nav_tabs.classList.remove("hidden");
  // }
  
  const btn_l = document.querySelector(".btn-left3");
  const btn_r = document.querySelector(".btn-right3");
  const slider = document.querySelector(".carousel-slider3");
  const labels = document.querySelectorAll(".carousel-label3");
  const description = document.querySelector(".carousel-description3");
  const items = document.querySelectorAll(".carousel-item3");
  const num_item = items.length - 2;

  let item_width = items[0].clientWidth;
  let count = 1;
  let slide_r = 1;
  let slide_l = -1;
  let active_label = document.querySelector(".carousel-label3.active");
  
  // if(window.innerWidth<=md)
  //     nav_tabs.classList.add("hidden");
  
  // window.onresize = e => {
  //   item_width = items[0].clientWidth;
  //   if(window.innerWidth<=md)
  //     nav_tabs.classList.add("hidden");
  // }
  
  function slide(direction){ 
    // if (count == num_item-1 || count==0) return;
    active_label.classList.remove("active");     
    if(direction===slide_r)
      count++;
    else if(direction===slide_l)
      count--;
    
    let item = items[count];
    
    active_label = document.querySelector(`.carousel-label3[for="${item.name}"]`);
    active_label.classList.add("active");     
    
    description.innerText = store3[item.name];
    slider.style.transform = `translateX(${-count * item_width}px)`;
    slider.style.transition = "0.75s ease-out";     
  }
  
  btn_r.onclick = e3 => {
    slide(slide_r); 
  }
  
  btn_l.onclick = e3 => {
    slide(slide_l);
  }
  
  slider.ontransitionend = e3 => {   
    if(count==num_item+1){
      count = 1;
      slider.style.transform = `translateX(${-item_width}px)`; 
      slider.style.transition = "";
    }
    if(count==0){
      count = num_item;
      slider.style.transform = `translateX(${-num_item * item_width}px)`; 
      slider.style.transition = "";
    }
  }
});