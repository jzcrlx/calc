function MDCalc(z){score=0;for(x in z){if(x!=="result"){score+=z[x]}}Answer(score);if(score<3){msg="1% 的预期病死率"}if(score==3||score==4){msg="15% 的预期病死率"}if(score==5||score==6){msg="40% 的预期病死率"}if(score>6){msg="100% 的预期病死率"}Text(msg)}$("#units").hide();