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
    }
}

const salesData = getSales();

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
    }
    
}

const rentData = getRent();

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
    }
}

const leaseData = getLease();