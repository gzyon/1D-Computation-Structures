const HeartRateVariability = (statistic) => {
    var status;
    if(statistic <50)
    {
        status = "Low";
    }
    else if((statistic >=50) && (statistic <100)) 
    {
        status = "Normal";
    }
    else if(statistic >=100) 
    {
        status = "High";
    }

    return status;
}

export default HeartRateVariability;