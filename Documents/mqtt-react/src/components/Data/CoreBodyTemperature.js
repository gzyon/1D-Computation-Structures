const CoreBodyTemperature = (statistic) => {
    var status;

    if(statistic <35.0)
    {
        status = "Low";
    }
    else if((statistic >=35.0) && (statistic < 37.5))
    {
        status = "Normal";
    }
    else if((statistic >=37.5) && (statistic < 38.3))
    {
        status = "Warning";
    }
    else if(statistic >=38.3)
    {
        status = "High";
    }

    return status;
}

export default CoreBodyTemperature;