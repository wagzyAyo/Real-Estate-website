async function getSales() {
    try {
        const response = await fetch("http://localhost:3000/api/sales");
        if(response.status !== 200){
            return 'No data available'
        }
        const data = await response.json();
        //return json
        console.log(data)
    } catch (err) {
        console.log(err)
    }
}

getSales()