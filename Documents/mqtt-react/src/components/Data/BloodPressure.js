const BloodPressure = (statistic) => {
    var status;

    if(statistic < 80)
    {
        status = "Low";
    }
    else if((statistic >= 80) && (statistic < 126))
    {
        status = "Normal";
    }
    else if((statistic >= 126) && (statistic < 140))
    {
        status = "Warning";
    }
    else if(statistic >= 140)
    {
        status = "High";
    }

    return status;
}

export default BloodPressure;