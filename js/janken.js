// =============================================================================
// じゃんけん要素
// =============================================================================
let janken_end = 0;

function R_Click(p_janken_r) {
    let janken = ['グー','チョキ','パー',];//"janken"のリストを作成
    let janken_r = Math.floor( Math.random() * janken.length);
    let p_janken = ['グー','チョキ','パー'];//"プレイヤーのjanken"を作成


        //勝ち負けの判定
        if (janken_r === p_janken_r) {
            Result_end = "引き分け……普通モード";
            janken_end = 0;
            console.log('引き分け……普通モード'+janken_end);
        }else if(p_janken_r === 0 && janken_r === 1) 
        {
            Result_end = "勝ち……無敵モード";
            janken_end = 1;
            console.log('勝ち……無敵モード'+janken_end);
        }else if(p_janken_r === 1 && janken_r === 2) 
        {
            Result_end = "勝ち……無敵モード";
            janken_end = 1;
            console.log('勝ち……無敵モード'+janken_end);
        }else if(p_janken_r === 2 && janken_r === 0) 
        {
            Result_end = "勝ち……無敵モード";
            janken_end = 1;
            console.log('勝ち……無敵モード'+janken_end);
        }else {
            Result_end = "負け……普通モード";
            janken_end = 0;
            console.log('負け……普通モード'+janken_end);
        }

        //結果を表示するためのプログラム
        document.getElementById("jankenpon").src="jan" + janken_r + ".png";
        document.getElementById("Rejan1").innerHTML = p_janken[p_janken_r] +"を選択しました。";
        document.getElementById("Rejan2").innerHTML = "相手は" + janken[janken_r] +"なので結果は"+ Result_end;
        document.getElementById("jankenpon2").src="jan" + p_janken_r + ".png";
}
/*----------------------------------------------------------------------------------*/ 
document.getElementById("start").onclick = function () {
    if(janken_end === 0){
        window.location.href = 'game__hinoter.html';
    }
    else{window.location.href = 'game__hinoter__hi.html';
    }
}

