const RespiratoryRate = (statistic) => {
    var status;
    
    if(statistic <7)
    {
        status = "Low";
    }
    else if((statistic >=7) && (statistic <23)) 
    {
        status = "Normal";
    }
    else if((statistic >=23) && (statistic <28))
    {
        status = "Warning";
    }
    else if(statistic >=28) 
    {
        status = "High";
    }

    return status;
}

export default RespiratoryRate;