const data = [{
    principal: 2500,
    time: 1.8
},{
    principal: 1000,
    time: 5
},{
    principal: 3000,
    time: 1
},{
    principal: 2000,
    time: 1.8
}]

interestCalculator = function(data) {
    interestData = [];
    for (i = 0; i < data.length; i++) {
        let rate = 0
        if (data.principal >= 2500 && data.time > 1 && data.time < 3) {
            rate = 3
        } else if (data.principal >= 2500 && data.time >= 3) {
            rate = 4
        } else if (data.principal < 2500 || data.time <= 2) {
            rate = 2
        } else {
            rate = 1
        }
        let interest = (data[i].principal * rate * data[i].time)/100
        let newObject = {
            principal: data[i].principal,
            time: data[i].time,
            interest: interest,
            rate:rate
        }
        interestData.push(newObject);
    }
    console.log(interestData);
    
    return interestData;
      
};
interestCalculator(data)
 




