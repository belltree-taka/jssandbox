// Timer Function

let timer = null;
let intervalId = null;

document.querySelector(".timer__count").innerHTML = 0;
intervalId = setInterval(() => {
    timer = timer + 1;
    localStorage.setItem("timer", timer);
    document.querySelector(".timer__count").innerHTML = localStorage.getItem("timer") || 0;
}, 1000);

setTimeout(() => {
  clearInterval(intervalId);
  localStorage.removeItem('timer');
}, 10000);

// DOM Manipulation





















// バブリングが発生するのは、同一のイベントだけ、clickイベントだったらclickイベントだけ
















//  よく使うイベント一覧

//　click: ユーザーが要素をクリックしたときに発生します。
//　dblclick: ユーザーが要素をダブルクリックしたときに発生します。
//　mousedown: ユーザーがマウスボタンを押したときに発生します。
//　mouseup: ユーザーがマウスボタンを離したときに発生します。
//　mousemove: ユーザーがマウスを動かしたときに発生します。
//　mouseover: ユーザーが要素の上にマウスを移動したときに発生します。
//　mouseout: ユーザーが要素からマウスを移動したときに発生します。
//　keydown: ユーザーがキーを押したときに発生します。
//　keyup: ユーザーがキーを離したときに発生します。
//　keypress: ユーザーがキーを押し続けているときに発生します。
//　change: フォーム要素の状態が変更されたときに発生します。
//　submit: ユーザーがフォームを送信したときに発生します。
//　load: ページや画像などのリソースが完全に読み込まれたときに発生します。
//　unload: ページが閉じられるときに発生します。
//　scroll: ユーザーがスクロールしたときに発生します。



