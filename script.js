
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



// link スクロールで出てくる
$(function () {
  $(window).scroll(function () { //windowがスクロールされたら以下の処理を実行する
    $('#link').each(function () {
      var position = $(this).offset().top;
      //.offset().topで、ページの最上部から「＃link」が付いた要素までの距離を取得して、変数positionに代入


      var scroll = $(window).scrollTop();
      //.scrollTop()で、スクロールした量を取得して、変数scrollに代入
      var windowHeight = $(window).height();
      //.height()で、ウィンドウの高さを取得して、変数windowHeightに代入


      if (scroll > position - windowHeight + 1300) {
        $(this).addClass('active');
        //スクロール量が要素の位置を過ぎた瞬間、「#link」が付いた要素にactiveクラスが付く
      }
    });
  });
});


// 動きのきっかけとなるアニメーションの名前を定義
function strengthAnime() {

  //ふわっと動くきっかけのクラス名と動きのクラス名の設定
  $('.fadeUpTrigger').each(function () { //fadeInUpTriggerというクラス名が
    var elemPos = $(this).offset().top - 50; //要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass('fadeUp');
      // 画面内に入ったらfadeInというクラス名を追記
    }

    //  else {
    //   $(this).removeClass('fadeUp');
    //   // 画面外に出たらfadeInというクラス名を外す
    // }

  });

};

//strength img 動くけど長いし何度も反応する
// $(function () {
//   $(window).scroll(function () { //windowがスクロールされたら以下の処理を実行する
//     $('.strength-img img').hide().each(function () {
//       var position = $(this).offset().top;
//       //.offset().topで、ページの最上部から「＃strength」が付いた要素までの距離を取得して、変数positionに代入

//       var scroll = $(window).scrollTop();
//       //.scrollTop()で、スクロールした量を取得して、変数scrollに代入
//       var windowHeight = $(window).height();
//       //.height()で、ウィンドウの高さを取得して、変数windowHeightに代入

//       if (scroll > position - windowHeight + 1000) {
//         $('.strength-img img').fadeIn();
//       }
//     });
//   });
// });


//strength img ぐるりん
$(function () {
  $('.strength-img img').hide();
  $(window).scroll(function () {
    if ($(window).scrollTop() > 1100) {
      $('.strength-img img').fadeIn();
    }
  });
});


//reason img くるりん
$(function () {
  $('.reason-img img').hide();
  $(window).scroll(function () {
    if ($(window).scrollTop() > 3700) {
      $('.reason-img img').fadeIn();
    }
  });
});

//commodity img くるりん
$(function () {
  $('.commodity-img-box').hide();
  $(window).scroll(function () {
    if ($(window).scrollTop() > 3000) {
      $('.delay01').fadeIn();
    }
  });
});
