var mode = ["combine", "+", "-", "*", "/"]
var n = 0
var currentMode = mode[n];
function changeModeC(){
    n++;
    if (n == 1) {
        document.getElementById("data_C").placeholder = "請輸入兩個不確定度";
        currentMode = mode[n];
        document.getElementById("topic").innerHTML = "組合不確定度計算(相加)";
    }
    else if(n == 2) {
        document.getElementById("data_C").placeholder = "請輸入兩個不確定度";
        currentMode = mode[n];
        document.getElementById("topic").innerHTML = "組合不確定度計算(相減)";        
    }
    else if(n == 3) {
        document.getElementById("data_C").placeholder = "請依序輸入各個的最佳估計值和不確定度並用逗號隔開(X,u(X),Y,u(Y))\nex: 20,0.1,10,0.2";
        currentMode = mode[n];
        document.getElementById("topic").innerHTML = "組合不確定度計算(相乘)";        
    }
    else if(n == 4) {
        document.getElementById("data_C").placeholder = "請依序輸入各個的最佳估計值和不確定度並用逗號隔開(X,u(X),Y,u(Y))\nex: 20,0.1,10,0.2";
        currentMode = mode[n];
        document.getElementById("topic").innerHTML = "組合不確定度計算(相除)";        
    }
    else if(n == 5) {
        n = 0;
        document.getElementById("data_C").placeholder = "請輸入A類和B類不確定度";
        currentMode = mode[n];
        document.getElementById("topic").innerHTML = "組合不確定度計算";        
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