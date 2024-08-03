var mode = ["combine", "+", "-", "*", "/"]
var n = 0;
var currentMode = mode[n];
var C_data;
var canCaculate = true;
var result;


function changeModeC(){
    n++;
    if (document.getElementById("data_C").value == "lesserafim1") {
        document.body.style.backgroundImage = "url('ls1.jfif')";
    }
    else if (document.getElementById("data_C").value == "lesserafim2") {
        document.body.style.backgroundImage = "url('ls2.jfif')";
    }
    else if (document.getElementById("data_C").value == "close") {
        document.body.style.background = "";
    }
    else if (n == 1) {
        document.getElementById("data_C").placeholder = "請輸入兩個不確定度";
        currentMode = mode[n];
        console.log(n)
        document.getElementById("topic").innerHTML = "組合不確定度計算(相加)";
    }
    else if(n == 2) {
        document.getElementById("data_C").placeholder = "請輸入兩個不確定度";
        currentMode = mode[n];
        console.log(n)
        document.getElementById("topic").innerHTML = "組合不確定度計算(相減)";        
    }
    else if(n == 3) {
        document.getElementById("data_C").placeholder = "請依序輸入各個的最佳估計值和不確定度並用逗號隔開(X,u(X),Y,u(Y))\nex: 20,0.1,10,0.2";
        currentMode = mode[n];
        console.log(n)
        document.getElementById("topic").innerHTML = "組合不確定度計算(相乘)";        
    }
    else if(n == 4) {
        document.getElementById("data_C").placeholder = "請依序輸入各個的最佳估計值和不確定度並用逗號隔開(X,u(X),Y,u(Y))\nex: 20,0.1,10,0.2";
        currentMode = mode[n];
        console.log(n)
        document.getElementById("topic").innerHTML = "組合不確定度計算(相除)";        
    }
    else if(n == 5) {
        n = 0;
        document.getElementById("data_C").placeholder = "請輸入A類和B類不確定度並用逗號隔開";
        currentMode = mode[n];
        console.log(n)
        document.getElementById("topic").innerHTML = "組合不確定度計算";        
    }
    
}

function getDataC() {
    
    if (n == 0) {
        clear();
        C_data = String(document.getElementById("data_C").value).split(",");
        for (i = C_data.length; i > 0; i--) {
            if(Number(C_data[i-1]) == NaN) {
                canCaculate = false
                break;
            }
        }
        if (C_data.length != 2) {
            canCaculate = false
        }
        if (canCaculate) {
            result = caculate_012(C_data[0], C_data[1])
            console.log(result);
            document.getElementById("output_C").innerHTML = "組合不確定度: " + result;
        }
        else {
            document.getElementById("output_C").innerHTML = "格式輸入錯誤"
        }
        
        
    }
    else if (n == 1 || n == 2) {
        clear();
        C_data = String(document.getElementById("data_C").value).split(",");
        for (i = C_data.length; i > 0; i--) {
            if(Number(C_data[i-1]) == NaN) {
                canCaculate = false
                break;
            }
        }
        if (C_data.length != 2) {
            canCaculate = false
        }
        if (canCaculate) {
            result = caculate_012(C_data[0], C_data[1])
            console.log(result);
            if (currentMode == "+") {
                document.getElementById("output_C").innerHTML = "組合不確定度(相加): " + result;
            }
            else if (currentMode == "-")  {
                document.getElementById("output_C").innerHTML = "組合不確定度(相減): " + result;
            }
            
        }
        else {
            document.getElementById("output_C").innerHTML = "格式輸入錯誤"
        }

    }
    else if(n == 3) {
        clear();
        C_data = String(document.getElementById("data_C").value).split(",");
        for (i = C_data.length; i > 0; i--) {
            if(Number(C_data[i-1]) == NaN) {
                canCaculate = false
                break;
            }
        }
        if (C_data.length != 4) {
            canCaculate = false
        }
        if (canCaculate) {
            result = caculate_3(C_data[0], C_data[1], C_data[2], C_data[3])
            console.log(result);
            document.getElementById("output_C").innerHTML = "組合不確定度(相乘): " + result;
            
        }
        else {
            document.getElementById("output_C").innerHTML = "格式輸入錯誤"
        }
    }
    else if(n == 4) {
        clear();
        C_data = String(document.getElementById("data_C").value).split(",");
        for (i = C_data.length; i > 0; i--) {
            if(Number(C_data[i-1]) == NaN) {
                canCaculate = false
                break;
            }
        }
        if (C_data.length != 4) {
            canCaculate = false
        }
        if (canCaculate) {
            result = caculate_4(C_data[0], C_data[1], C_data[2], C_data[3])
            console.log(result);
            document.getElementById("output_C").innerHTML = "組合不確定度(相乘): " + result;
            
        }
        else {
            document.getElementById("output_C").innerHTML = "格式輸入錯誤"
        }
    }
}

function caculate_012(a, b) {
    result = Math.sqrt(a**2 + b**2);
    return result;
}
function caculate_3(x, Ux, y, Uy) {
    result = Math.sqrt((y ** 2) * (Ux ** 2) + (x ** 2) * (Uy ** 2));
    return result;
}
function caculate_4(x, Ux, y, Uy) {
    result = Math.sqrt(((Ux ** 2) / (y ** 2)) + ((x ** 2) * ((Uy ** 2)) / (y ** 4)));
    return result;
}
function clear() {
    C_data;
    canCaculate = true;
    result = 0;
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