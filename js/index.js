const weakly = document.getElementById("weakly");
const monthly = document.getElementById("monthly");
const elAboutCenter = document.getElementById("about-center");
const header = document.querySelector("header");
const headerImg = document.querySelector(".header-img");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.classList.add("bg-white");
    header.classList.add("text-black");
    headerImg.setAttribute('src', 'img/logo-dark.png');
  } else {
    header.classList.remove("bg-white");
    header.classList.remove("text-black");
    headerImg.setAttribute('src', 'img/aksent logo.png');
  }
});

weakly.addEventListener("click", () => {
  weakly.classList.add("border-purple");
  weakly.classList.add("bg-grey-500");
  monthly.classList.remove("border-purple");
  monthly.classList.remove("bg-grey-500");

  elAboutCenter.innerHTML = `
    <div class="flex gap-4 group">
      <img src="./img/weekly.png" id='img-change' class="h-[66px] items-start" alt="">
      <div>
        <p class="flex text-xs mb-3 text-grey-400 gap-3">26-iyul 2022 <a href="#" class="text-purple">Davlat</a></p>
        <a href="#" class="text-sm group-hover:text-purple duration-200">Toshkent konferensiyasidan real natijalar kutish o‘rinlimi?</a>
      </div>
    </div>
    <div class="flex gap-4 group">
      <img src="./img/weekly.png" id='img-change' class="h-[66px] items-start" alt="">
      <div>
        <p class="flex text-xs mb-3 text-grey-400 gap-3">26-iyul 2022 <a href="#" class="text-purple">Davlat</a></p>
        <a href="#" class="text-sm group-hover:text-purple duration-200">Toshkent konferensiyasidan real natijalar kutish o‘rinlimi?</a>
      </div>
    </div>
    <div class="flex gap-4 group">
      <img src="./img/weekly.png" id='img-change' class="h-[66px] items-start" alt="">
      <div>
        <p class="flex text-xs mb-3 text-grey-400 gap-3">26-iyul 2022 <a href="#" class="text-purple">Davlat</a></p>
        <a href="#" class="text-sm group-hover:text-purple duration-200">Toshkent konferensiyasidan real natijalar kutish o‘rinlimi?</a>
      </div>
    </div>
    <div class="flex gap-4 group">
      <img src="./img/weekly.png" id='img-change' class="h-[66px] items-start" alt="">
      <div>
        <p class="flex text-xs mb-3 text-grey-400 gap-3">26-iyul 2022 <a href="#" class="text-purple">Davlat</a></p>
        <a href="#" class="text-sm group-hover:text-purple duration-200">Toshkent konferensiyasidan real natijalar kutish o‘rinlimi?</a>
      </div>
    </div>
    <div class="flex gap-4 group">
      <img src="./img/weekly.png" id='img-change' class="h-[66px] items-start" alt="">
      <div>
        <p class="flex text-xs mb-3 text-grey-400 gap-3">26-iyul 2022 <a href="#" class="text-purple">Davlat</a></p>
        <a href="#" class="text-sm group-hover:text-purple duration-200">Toshkent konferensiyasidan real natijalar kutish o‘rinlimi?</a>
      </div>
    </div>
  `;
});

monthly.addEventListener("click", () => {
  monthly.classList.add("border-purple");
  monthly.classList.add("bg-grey-500");
  weakly.classList.remove("border-purple");
  weakly.classList.remove("bg-grey-500");
  const changeImg = document.querySelectorAll("#img-change");
  console.log(changeImg);
  
  changeImg.forEach((img) => {
    img.setAttribute('src', 'img/img-2.png');
  });
  

  elAboutCenter.innerHTML = `
    <div class="flex gap-4 group">
      <img src="./img/weekly.png" id='img-change' class="h-[66px] items-start" alt="">
      <div>
        <p class="flex text-xs mb-3 text-grey-400 gap-3">22-iyul 2022 <a href="#" class="text-purple">Mahalla</a></p>
        <a href="#" class="text-sm line-clamp-2 group-hover:text-purple duration-200">19 yoshli Ulug‘bek Rashidov Olimpiya finalida buyuk britaniyalik raqibini mag‘lub etdi.</a>
      </div>
    </div>
    <div class="flex gap-4 group">
      <img src="./img/weekly.png" id='img-change' class="h-[66px] items-start" alt="">
      <div>
        <p class="flex text-xs mb-3 text-grey-400 gap-3">22-iyul 2022 <a href="#" class="text-purple">Mahalla</a></p>
        <a href="#" class="text-sm line-clamp-2 group-hover:text-purple duration-200">19 yoshli Ulug‘bek Rashidov Olimpiya finalida buyuk britaniyalik raqibini mag‘lub etdi.</a>
      </div>
    </div>
    <div class="flex gap-4 group">
      <img src="./img/weekly.png" id='img-change' class="h-[66px] items-start" alt="">
      <div>
        <p class="flex text-xs mb-3 text-grey-400 gap-3">22-iyul 2022 <a href="#" class="text-purple">Mahalla</a></p>
        <a href="#" class="text-sm line-clamp-2 group-hover:text-purple duration-200">19 yoshli Ulug‘bek Rashidov Olimpiya finalida buyuk britaniyalik raqibini mag‘lub etdi.</a>
      </div>
    </div>
    <div class="flex gap-4 group">
      <img src="./img/weekly.png" id='img-change' class="h-[66px] items-start" alt="">
      <div>
        <p class="flex text-xs mb-3 text-grey-400 gap-3">22-iyul 2022 <a href="#" class="text-purple">Mahalla</a></p>
        <a href="#" class="text-sm line-clamp-2 group-hover:text-purple duration-200">19 yoshli Ulug‘bek Rashidov Olimpiya finalida buyuk britaniyalik raqibini mag‘lub etdi.</a>
      </div>
    </div>
    <div class="flex gap-4 group">
      <img src="./img/weekly.png" id='img-change' class="h-[66px] items-start" alt="">
      <div>
        <p class="flex text-xs mb-3 text-grey-400 gap-3">22-iyul 2022 <a href="#" class="text-purple">Mahalla</a></p>
        <a href="#" class="text-sm line-clamp-2 group-hover:text-purple duration-200">19 yoshli Ulug‘bek Rashidov Olimpiya finalida buyuk britaniyalik raqibini mag‘lub etdi.</a>
      </div>
    </div>
  `;
});
