const HeatStressRisk = (statistic) => {
    var status;

    if(statistic == 0)
    {
        status = "Not Detected"
    }
    else if(statistic == 1)
    {
         status = "Warning"
    }
    else if(statistic == 2)
    {
         status = "High"
    }

    return status;
}

export default HeatStressRisk;