function MDCalc(z){value1=(z.bun-z.sbp)*79.9/z.hgb;hhmg1=(z.bun-z.sbp)/z.hgb;value2=value1*z.co;hhmg2=hhmg1*z.co;Text(Math.round(parseFloat(value1))+" dynes<sup>*</sup>s/cm<sup>5</sup><br/>"+Math.round(parseFloat(hhmg1)*100)/100+" mmHg<sup>*</sup>min/L");Text2(Math.round(parseFloat(value2))+" dynes<sup>*</sup>s/cm<sup>5</sup>/m<sup>2</sup><br/>"+Math.round(parseFloat(hhmg2)*100)/100+" mmHg<sup>*</sup>min/L/m<sup>2</sup>")}