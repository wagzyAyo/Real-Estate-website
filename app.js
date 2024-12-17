async function getData(link){
    try {
        const response = await fetch(link);
        if(response.status !== 200){
            return 'No data available, check back later'
        }
        const data = await response.json();
        //console.log(data);
        return data
    } catch (err) {
        console.log(err)
        return []
    }
}

async function getSales() {
   return await getData("https://admin-dashboard-next-jade.vercel.app/api/sales")
}

async function getRent(){
   return await getData("https://admin-dashboard-next-jade.vercel.app/api/rent")
}

async function getLease(){
   return await getData("https://admin-dashboard-next-jade.vercel.app/api/lease")
};

async function getRecentData(){
  return await getData("https://admin-dashboard-next-jade.vercel.app/api/recent")
};



document.addEventListener("DOMContentLoaded", ()=>{
    async function display(func, selectQuery){
        const propData = await func()
        const CardContainer = document.querySelector(selectQuery);

        if(!CardContainer){
            console.log("sales props class not found");
            return
        }
    
        propData.forEach(data =>{
            //create new card
            const card = document.createElement("div");
            card.classList.add("prop-tab");
        
            //create and set content of the image
            //create and set content of the image
            const swiperDiv = document.createElement("div");
            swiperDiv.classList.add("swiper");
            const swiperWrapper = document.createElement("div");
            swiperWrapper.classList.add("swiper-wrapper");
            const imgURL = data.imageURL;
            imgURL.forEach(imgData =>{
                const imgDiv = document.createElement("div");
                imgDiv.classList.add("swiper-slide", "prop-img");
                const img = document.createElement("img");
                img.src = imgData;
                img.alt = "";
                img.style.width = "100%";
                img.style.height = "100%";
                img.style.borderRadius = "20px 20px 0 0";
                img.style.objectFit = "cover"
                imgDiv.append(img)
                swiperWrapper.append(imgDiv)
            })
            const swiperPagination = document.createElement("div");
            swiperPagination.classList.add("swiper-pagination")

            swiperDiv.append(swiperWrapper, swiperPagination)
        
            //create and set content for the feature
            const featuresDiv = document.createElement("div");
            featuresDiv.classList.add("features");
            const nameDiv = document.createElement("div");
            nameDiv.classList.add()
            const priceDiv = document.createElement("div");
            priceDiv.classList.add("price");
            priceDiv.innerHTML = `<span>#</span>${data.amount}`;
            const line1 = document.createElement("div");
            line1.classList.add("line");
            const sizeP = document.createElement("p");
            sizeP.textContent = data.size;
            const line2 = document.createElement("div");
            line2.classList.add("line");
            const locationB = document.createElement("b");
            locationB.textContent = data.location;
            featuresDiv.append(priceDiv, line1, sizeP, line2, locationB);
        
            // Create and set the content for the details
            const detailsDiv = document.createElement("div");
            detailsDiv.classList.add("details");
            const detailsP = document.createElement("p");
            detailsP.textContent = data.short;
            detailsDiv.appendChild(detailsP);
        
            // Append all created elements to the card
            card.append(swiperDiv, featuresDiv, detailsDiv);
        
            // Append the card to the container
            salesCardContainer.appendChild(card);

             // Initialize Swiper after creating the elements
        new Swiper('.swiper', {
            direction: 'horizontal',
            slidesPerView: 1,
            spaceBetween: 10,
            loop: true,
            autoplay: {
                delay: 3000,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
        });
        })
    }
    async function displaySales(){
        return await display(getSales, ".sales-props")
    }
    displaySales()
    
    async function displayRent(){
       return await display(getRent, ".rent-props")
    }
    displayRent();
    
    async function displayLease() {
        return await display(getLease, ".lease-props")
    }
    
    displayLease();


    async function displayRecentData(){
        return await display(getRecentData, ".recent-props")
    }
    displayRecentData()

})

