var dataB;
var result_B = 0;
// var resultOutput = 0;
function getDataB(){
    dataB = document.getElementById("data_B").value;
    console.log(Number(dataB) );
    result_B = dataB / (2 * Math.sqrt(3));
    console.log(result_B);
    if (String(result_B) == String(NaN)) {
        result_B = "格式輸入錯誤";
    }
    document.getElementById("output_B").innerHTML = "B類不確定度: " + result_B;
    clear();
    
}
function clear(){
    dataB = 0;
    result_B = 0;
    // resultOutput = 0;
}

/*if (result*1000 % 10 == 0) {
            resultOutput = result.toFixed(2);
            console.log(resultOutput);
        }
        else {
            resultOutput = roundUp(result, 2);
            console.log(resultOutput);
        }
*/







/*
                                                     _ooOoo
                                                    o8888888o
                                                    88" . "88 
                                                    (| -_- |)
                                                    O\  =  /O
                                                  ___/`---'\____
                                               .'  \\|     |//  `.
                                              /  \\|||  :  |||//  \
                                             /  _||||| -:- |||||_  \
                                             |   | \\\  -  /// |   |
                                             | \_|  ''\---/''  |   |
                                             \  .-\__       __/-.  /
                                           ___`. .'  /--.--\ `. . __
                                        ."" '<  `.___\_<|>_/__.'  >'"".
                                       | | :  `- \`.;`\ _ /`;.`/ - ` : | |
                                       \  \ `-.   \_ __\ /__ _/   .-` /  /
                                  ======`-.____`-.___\_____/___.-`____.-'======
                                                     `=---='
                               ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                                              佛祖保佑       永無BUG
*/