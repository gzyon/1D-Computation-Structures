const FatigueLevel = (hr, rr, bp) => {
    var status;

    if((hr >50) &&(hr<115))
    {
        if((bp >80) &&(bp<140))
        {
            if((rr >7) &&(rr<25))
            {
                status = "Normal"
            }
        }
        status = "Normal"
    }
    else if((hr>=115) && (bp<140) && (rr<25))
    {
         status = "Normal"; //"Low"
    }
    else if((hr>=115) && (bp>=140)&& (rr<25))
    {
         status = "Warning"; //"Middle"
    }
    else if((hr>=115) && (bp>=140) && (rr>=25))
    {
         status = "High"
    }

    return status;
}

export default FatigueLevel;