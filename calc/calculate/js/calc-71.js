function MDCalc(z){a=z.wt;b=z.na;if(pref=="si"){wt_conv=1}if(pref=="us"){wt_conv=1/2.2}a*=wt_conv;if(z.age==3){if(z.female==1){tbw=.45}else{tbw=.5}}if(z.age==2){if(z.female==1){tbw=.5}else{tbw=.6}}if(z.age==1){tbw=.6}tbw=tbw*a;if(z.fluid==1){totalna=513}if(z.fluid==2){totalna=154}if(z.fluid==3){totalna=130}if(z.fluid==4){totalna=77}if(b>totalna){alert("选择不同的流体：您的患者的血清钠高于流体的钠!");return false}value=(totalna-b)/(tbw+1);value1=12/value;value1=value1/24;value1=value1*1e3;value2=24/value;value2=value2/24;value2=value2*1e3;value3=48/value;value3=value3/24;value3=value3*1e3;Answer(Round(value1,0));Answer2(Round(value2,0));Answer3(Round(value3,0))}