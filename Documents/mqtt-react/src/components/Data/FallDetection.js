const FallDetection = (statistic) => {
    var status;

    if(statistic == 0)
    {
        status = "Not Detected";
    }
    else if(statistic == 1)
    {
        status = "Detected";
    }

    return status;
}

export default FallDetection;