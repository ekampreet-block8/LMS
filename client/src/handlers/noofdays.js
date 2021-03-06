const getLeaveDuration=(start, end,status)=>{
    let startDate = new Date(start)
    let endDate = new Date(end)
    let count = 0;
    for(var d = startDate; d <= endDate; d.setDate(d.getDate() + 1)) {
        let day = d.getDay()
        if(day == 0 || day == 6) {
            continue;
        }
        count++;
    }
    count=status===true?(count-0.5):count
    return count;
}

export default getLeaveDuration