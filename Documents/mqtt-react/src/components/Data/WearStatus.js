const WearStatus = (statistic) => {
    var status;

    if(statistic == 1)
    {
        status = "Not Worn";
    }
    else if((statistic == 2) || (statistic == 3))
    {
        status = "Worn";
    }

    return status;
}

export default WearStatus;