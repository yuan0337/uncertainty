var data;
var avg = 0;
var sum = 0;
var standardDeviation = 0;
var variance = 0;
var A_uncertainty = 0;
var A_uncertaintyOutput = 0;
var mode = true;
var canCaculate = true
function getDataA(){
    canCaculate = true
    if (mode){
        data = String(document.getElementById("data").value).split(",");
        for (i = data.length; i>0; i--) {
            if (Number(data[i-1]) == NaN ){
                canCaculate = false;
                break;
            }
        };
        if (canCaculate && data.length > 1) {
            for (i = data.length; i>0; i--) {
                sum = sum + Number(data[i-1]);
            };
            avg = sum/data.length;
            for (i = data.length; i > 0; i--) {
                variance = variance + (data[i-1] - avg)**2;
            }
            standardDeviation = Math.sqrt(Number(variance)/Number(data.length-1));
            console.log(sum);
            console.log(data);
            console.log(avg);
            console.log(standardDeviation);
            A_uncertainty = caculate(standardDeviation, data.length);
            console.log(A_uncertainty);
            console.log(A_uncertainty.toFixed(3));
            /*if (Number(A_uncertainty.toFixed(3))*1000 % 10 == 0) {
                A_uncertaintyOutput = Number(A_uncertainty.toFixed(2));
                console.log(A_uncertaintyOutput);
            }
            else {
                A_uncertaintyOutput = roundUp(A_uncertainty, 2)
                console.log(A_uncertaintyOutput);
            }*/
            document.getElementById("output").innerHTML = "A類不確定度: " + A_uncertaintyOutput;
            clear();
        }
        else{
            document.getElementById("output").innerHTML = "輸入格式錯誤!";
            clear();
        }
        
    }
    else{
        data = String(document.getElementById("data").value).split(",");
        if (data.length != 2){
            document.getElementById("output").innerHTML = "輸入格式錯誤!";
            clear();
        }
        else{
            A_uncertainty = caculate(data[0], data[1]);
            console.log(A_uncertainty);
            console.log(A_uncertainty.toFixed(3));
            /*if (Number(A_uncertainty.toFixed(3))*1000 % 10 == 0) {
                A_uncertaintyOutput = Number(A_uncertainty.toFixed(2));
                console.log(A_uncertaintyOutput);
            }
            else {
                A_uncertaintyOutput = roundUp(A_uncertainty, 2)
                console.log(A_uncertaintyOutput);
            }*/
            document.getElementById("output").innerHTML = "A類不確定度: " + A_uncertainty;
            clear();
        }
        
    }
    
}
function caculate(StandardDeviation, times){
    result = Number(StandardDeviation) / Math.sqrt(Number(times));
    return result;
}
function roundUp( num, decimal ) { 
    return Math.ceil( ( num + Number.EPSILON ) * Math.pow( 10, decimal ) ) / Math.pow( 10, decimal ); 
}
function changeMode() {
    
    if (mode) {
        document.getElementById("data").placeholder = "請依序輸入標準差和測量次數並用逗號隔開\nex:0.5244,9"; //false
        mode = false;
        console.log(mode);
        

    }
    else {
        document.getElementById("data").placeholder = "請輸入每次的測量結果並用逗號隔開\nex:1,2,3,4,5"; //true
        mode = true;
        console.log(mode);
        
    }
}
function clear(){
    data = "";
    avg = 0;
    sum = 0;
    standardDeviation = 0;
    variance = 0;
    A_uncertainty = 0;
    A_uncertaintyOutput = 0;
}







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