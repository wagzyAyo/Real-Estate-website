async function getSales() {
    try {
        const response = await fetch("http://localhost:3000/api/sales");
        if(response.status !== 200){
            return 'No data available, check back later'
        }
        const data = await response.json();
        console.log(data);
        return data
    } catch (err) {
        console.log(err)
        return []
    }
}

async function getRent(){
    try {
        const response = await fetch("http://localhost:3000/api/rent");
    if(response.status !== 200){
        return "No data availbale, check back later"
    }
    const data = await response.json();
    console.log(data);
    return data
    } catch (err) {
        console.log(err)
        return []
    }
    
}

async function getLease(){
    try {
        const response = await fetch("http://localhost:3000/api/lease");
        if(response.status !== 200){
            return "No data availble,check back later"
        }
        const data = await response.json()
        console.log(data);
        return data
    } catch (err) {
        console.log(err)
        return []
    }
}




async function displaySales(){
    const salesData = await getSales()
    const salesCardContainer = document.querySelector(".sales-props");

    salesData.forEach(data =>{
        //create new card
        const card = document.createElement("div");
        card.classList.add("prop-tab");
    
        //create and set content of the image
        const imgDiv = document.createElement("div");
        imgDiv.classList.add("prop-img");
        const img = document.createElement("img");
        img.src = data.imageURL;
        img.alt = "";
        img.style.width = "232px";
        img.style.height = "184px";
        img.style.borderRadius = "20px 20px 0 0";
        img.style.objectFit = "cover"
        imgDiv.appendChild(img)
    
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
        card.append(imgDiv, featuresDiv, detailsDiv);
    
        // Append the card to the container
        salesCardContainer.appendChild(card);
    })
}
displaySales()

async function displayRent(){
    const rentData = await getRent()
    const rentCardContainer = document.querySelector(".rent-props");

    rentData.forEach(data =>{
        //create new card
        const card = document.createElement("div");
        card.classList.add("prop-tab");
    
        //create and set content of the image
        const imgDiv = document.createElement("div");
        imgDiv.classList.add("prop-img");
        const img = document.createElement("img");
        img.src = data.imageURL;
        img.alt = "";
        img.style.width = "232px";
        img.style.height = "184px";
        img.style.borderRadius = "20px 20px 0 0";
        img.style.objectFit = "cover"
        imgDiv.appendChild(img)
    
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
        card.append(imgDiv, featuresDiv, detailsDiv);
    
        // Append the card to the container
        rentCardContainer.appendChild(card);
    })
}
displayRent();

async function displayLease(){
    const leaseData = await getRent()
    const leaseCardContainer = document.querySelector(".lease-props");

    leaseData.forEach(data =>{
        //create new card
        const card = document.createElement("div");
        card.classList.add("prop-tab");
    
        //create and set content of the image
        const imgDiv = document.createElement("div");
        imgDiv.classList.add("prop-img");
        const img = document.createElement("img");
        img.src = data.imageURL;
        img.alt = "";
        img.style.width = "232px";
        img.style.height = "184px";
        img.style.borderRadius = "20px 20px 0 0";
        img.style.objectFit = "cover"
        imgDiv.appendChild(img)
    
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
        card.append(imgDiv, featuresDiv, detailsDiv);
    
        // Append the card to the container
        leaseCardContainer.appendChild(card);
    })
}
displayRent();