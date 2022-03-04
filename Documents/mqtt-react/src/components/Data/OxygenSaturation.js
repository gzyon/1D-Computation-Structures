const OxygenSaturation = (statistic) => {
    var status;
    
    if(statistic <90)
    {
        status = "Low";
    }
    else if((statistic >=90) && (statistic <95)) 
    {
        status = "Warning";
    }
    else if(statistic >=95) 
    {
        status = "Normal";
    }

    return status;
}

export default OxygenSaturation;