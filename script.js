
// btn一つしか動かない

// document.querySelector(`.btn1`).animate(
//   [
//     { transform: 'scale(1)' },
//     { transform: 'scale(1.07)' }
//   ],
//   {
//     duration: 230,
//     iterations: Infinity,
//     direction: 'alternate'
//   }
// );

// 全部動いた！
var btn = document.getElementsByClassName('btn');
for (var i = 0; i < btn.length; i++) {
  btn[i].animate(
    [
      { transform: 'scale(1)' },
      { transform: 'scale(1.07)' }
    ],
    {
      duration: 250,
      iterations: Infinity,
      direction: 'alternate'
    }
  )
};


// FLOW slickプラグイン
$('.slider').slick({
  autoplay: true,//自動的に動き出すか。初期値はfalse。
  infinite: true,//スライドをループさせるかどうか。初期値はtrue。
  speed: 500,//スライドのスピード。初期値は300。
  slidesToShow: 3,//スライドを画面に3枚見せる
  slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
  prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
  nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
  centerMode: true,//要素を中央ぞろえにする
  variableWidth: true,//幅の違う画像の高さを揃えて表示
  dots: true,//下部ドットナビゲーションの表示
});
