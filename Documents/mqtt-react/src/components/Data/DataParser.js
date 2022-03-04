const DataParser = (data) => {

    var syncWordCheckStatus;

    function syncWordCheck(str) {
        var fStatus = false;
        if (str == "a5c3") {
          fStatus = true;
        }
        else {
          fStatus = false;
        }
        return fStatus;
        }
    
      function parseFloat(str) {
        var float = 0, sign, order, mantissa, exp,
        int = 0, multi = 1;
        if (/^0x/.exec(str)) {
            int = parseInt(str, 16);
        }
        else {
            for (var i = str.length -1; i >=0; i -= 1) {
                if (str.charCodeAt(i) > 255) {
                    console.log('Wrong string parameter');
                    return false;
                }
                int += str.charCodeAt(i) * multi;
                multi *= 256;
            }
        }
        sign = (int >>> 31) ? -1 : 1;
        exp = (int >>> 23 & 0xff) - 127;
        mantissa = ((int & 0x7fffff) + 0x800000).toString(2);
        for (i=0; i<mantissa.length; i+=1) {
            float += parseInt(mantissa[i]) ? Math.pow(2, exp) : 0;
            exp--;
        }
        return float*sign;
      }

      if (data) {
        let msg = data;
        syncWordCheckStatus = syncWordCheck(msg.slice(0,4))
      }
    
      var stat1, stat2, stat3, stat4, stat5, stat6, stat7, stat8, stat9, stat10, stat11, stat12, stat13, fwVer, wearStatus, battPercent, postureDet, humidity;

      if (syncWordCheckStatus) {
        let stats = data
          if (stats.length >= 40) {
            fwVer = parseInt(stats.slice(4, 6), 16) 
            wearStatus = parseInt(stats.slice(6, 8), 16)
            battPercent = parseInt(stats.slice(8, 10), 16) 
            stat1 = parseInt(stats.slice(10, 12), 16) // HR
            stat2 = parseInt(stats.slice(12, 14), 16) // HRV
            stat3 = parseInt(stats.slice(14, 16), 16) // SpO2
            stat4 = parseInt(stats.slice(16, 18), 16) // RR
            stat5 = parseInt(stats.slice(18, 20), 16) // SBP
            stat6 = parseInt(stats.slice(20, 22), 16) // DBP
            // CBT 
            let firstByteCbt = stats.slice(22,24), 
                secondByteCbt = stats.slice(24,26), 
                thirdByteCbt = stats.slice(26,28), 
                forthByteCbt = stats.slice(28,30) 
            stat7 = parseFloat("0x" + forthByteCbt + thirdByteCbt + secondByteCbt + firstByteCbt).toFixed(2); 
            stat8 = parseInt(stats.slice(30, 34), 16) // steps count
            stat9 = parseInt(stats.slice(34, 35), 16) // fall detection 
            stat10 = parseInt(stats.slice(35, 36), 16) // heat stress risk 
            postureDet = parseInt(stats.slice(36, 40), 16)
            // stat11 = parseInt(stats.slice(32, 34), 16) // battery percentage
            // stat12 = parseInt(stats.slice(34, 38), 16) // total acceleration
            // stat13 = parseInt(stats.slice(38, 40), 16) 
            // ambient temperature
            let firstByteAmbTemp = stats.slice(40, 42),
                secondByteAmbTemp = stats.slice(42, 44),
                thirdByteAmbTemp = stats.slice(44, 46),
                forthByteAmbTemp = stats.slice(46, 48)
            stat13 = parseFloat("0x" + forthByteAmbTemp + thirdByteAmbTemp + secondByteAmbTemp + firstByteAmbTemp).toFixed(2);
            humidity = parseInt(stats.slice(48, 50), 16)
            // stats = [stat1, stat2, stat3, stat4, stat5, stat6, stat7, stat8, stat9, stat10, stat11, stat12, stat13]
            console.log("ambient temp raw data:" + stats.slice(40, 48))
        }
      }

      return [stat1, stat2, stat3, stat4, stat5, stat6, stat7, stat8, stat9, stat10, fwVer, wearStatus, battPercent, humidity, stat13];
}

export default DataParser;