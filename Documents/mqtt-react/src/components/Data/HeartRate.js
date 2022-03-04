const HeartRate = (statistic) => {
    var status;

    if(statistic <50)
    {
        status = "Low";
    }
    else if((statistic >=50) && (statistic <100)) 
    {
        status = "Normal";
    }
    else if((statistic >=100) && (statistic <115))
    {
        status = "Warning";
    }
    else if(statistic >=115) 
    {
        status = "High";
    }

    return status;
}

export default HeartRate;