//1.TweenMax.to
TweenMax.to($('.container > .circle'), 1, {
    x:150, y:150, backgroundColor: 'blue'
    //赤丸(.circle)をx,y軸それぞれについて150px移動し色を青に指定
});
TweenMax.to('.container > .square', 3, {
    x:-150, y:-150, scale:2, delay:1, ease:Back.easeOut, backgroundColor: 'green'
    //四角(.square)をx,y軸それぞれについて150px移動と1秒後に2倍に拡大してeaseOutでバウンスする
});


//2.TweenMax.from
TweenMax.from($('#rectangle'), 2, {
    y:200, rotation:100, scale:1.5
    //水色の長方形の初めの状態を始点としてy軸方向-200px移動しながら100度反時計回りに回転,1.5倍縮小
});
//2-2jQueryとの併用
TweenMax.to($('li'), 1, {
    x:50
});


//3.TimelineMax
/*  TweenMax.to('.container_space > .column > .circle', 1, { x:425 });
    TweenMax.to('.container_space > .column > .square', 1, { x:425, delay:1});
    TweenMax.to('.container_space > .column > .rectangle', 1, { x:425, delay:2});   */   
const tlAnimation = new TimelineMax();  //tlAnimationというタイムラインを作成

tlAnimation.to('.container_space > .equal > .circle', 2, { x:200 })
.to('.container_space > .equal > .square', 0.5, {x:200})
.to('.container_space > .equal > .rectangle', 1, {x:200});

//4.easingの設定
const tlAnimation_easing1 = new TimelineMax();

tlAnimation_easing1.to('.container_space > .easing1 > .circle', 1, { x: 200, ease: Linear.easeNone})
.to('.container_space > .easing1 > .square', 1, { x: 200, ease: Linear.easeNone})
.to('.container_space > .easing1 > .rectangle', 1, { x:200, ease: Linear.easeNone});


const tlAnimation_easing2 = new TimelineMax();

tlAnimation_easing2.to('.container_space > .easing2 > .circle', 1, { x: 200, ease: Power3.easeOut })
.to('.container_space > .easing2 > .square', 1, {x: 200, ease: Power3.easeOut })
.to('.container_space > .easing2 > .rectangle', 1, { x: 200, ease: Power3.easeOut })


const tlAnimation_easing3 = new TimelineMax();

tlAnimation_easing3.to('.container_space > .easing3 > .circle', 1, { x:200, ease: Power2.easeIn })
.to('.container_space > .easing3 > .square', 1, { x: 200, ease: Power2.easeIn })
.to('.container_space > .easing3 > .rectangle', 1, { x: 200, ease: Power2.easeIn });


const tlAnimation_easing4 = new TimelineMax();

tlAnimation_easing4.to('.container_space > .easing4 > .circle', 1, { x: 200, ease: Back.easeOut })
.to('.container_space > .easing4 > .square', 1, { x: 200, ease: Back.easeOut })
.to('.container_space > .easing4 > .rectangle', 1, { x: 200, ease: Back.easeOut });


const tlAnimation_easing5 = new TimelineMax();

tlAnimation_easing5.to('.container_space > .easing5 > .circle', 1, { x: 200, ease: Elastic.easeOut })
.to('.container_space > .easing5 > .square', 1, { x: 200, ease: Elastic.easeOut })
.to('.container_space > .easing5 > .rectangle', 1, { x: 200, ease: Elastic.easeOut });


const tlAnimation_easing6 = new TimelineMax();

tlAnimation_easing6.to('.container_space > .easing6 > .circle', 1, {x: 200, ease: Bounce.easeOut })
.to('.container_space > .easing6 > .square', 1, {x: 200, ease: Bounce.easeOut })
.to('.container_space > .easing6 > .rectangle', 1, {x: 200, ease: Bounce.easeOut});


//5.staggerTo/staggerFrom
TweenMax.staggerFrom('.col4 > .staggerFrom > .triangle', 1, { x: 200, y: 200, opacity:0 }, 0.05)
TweenMax.staggerTo('.col4 > .staggerTo > .triangle', 1, { x: 200, y: 200, opacity: 0}, 0.05)


//6.TweenMax.setとTimelineMaxプロパティ
TweenMax.set('.oval', {x: -300});       //初期位置設定 => 繰り返しの初めの位置もここ

const tlAnimation_oval = new TimelineMax({repeat:3});
tlAnimation_oval.to('.oval', 1, { x: 100})
.to('.oval', 1, {x: -300});


//7.TimelineMaxのラベルと同期処理
const tlshapes = new TimelineMax();
tlshapes.to('.container_space > .synchro_process > .circle', 5, {x: 300}, 'circleRectangle')
.to('.container_space > .synchro_process > .square', 3, {x: 300})
.to('.container_space > .synchro_process > .rectangle', 3, {x: 300}, 'circleRectangle+=1');


//8.TimelineMax制御
const tlShapes = new TimelineMax();

tlShapes.staggerFrom('.shape', 0.5, {x: 50, y:50, opacity:0}, 0.2);
//play
$('.playButton').click(() => {
    tlShapes.play();
});
//pause
$('.pauseButton').click(() => {
    tlShapes.pause();
});
//resume
$('.resumeButton').click(() => {
    tlShapes.resume();
});
//reverse
$('.reverseButton').click(() => {
    tlShapes.reverse();
})
//timeScale(slow/fast)
$('.slowButton').click(() => {
    tlShapes.timeScale(0.5);
});
$('.fastButton').click(() => {
    tlShapes.timeScale(1.5);
});
//seek
$('.seekButton').click(() => {
    tlShapes.seek(0.2);
});
//progress
$('.progressButton').click(() => {
    tlShapes.progress(0.8);
})








/*gsap アニメーション
1.TweenMax.to : 指定したプロパティに向かってアニメショーンしていく 
    =>TweenMax.to('取得したい要素',　秒数{アニメーションのプロパティ})
    
2.TweenMax.from : 指定したプロパティを起点に要素をアニメーションする
    =>アニメーションを適応してない初めの状態に移動する
    
3.TimelineMax : タイムラインと作成して取得した要素をチェーンでつなぐことによってdelayの指定をすることなくアニメーションの順番を指定できる
    =>1.タイムライン作成
      2.タイムライン.to(取得したい要素, 秒数, {アニメーションのプロパティ})
      3.これを処理したい順に描いていく
  
4.easingの設定
    =>1.Linear.easeNone : 一定の動きでeasing
      2.PowerX.easeOut : 動き出しが早く終了に向けてゆっくり変化, powerXの数字(0~4)を大きくすると全体のスピードが変わる
      3.PowerX.easeIn : easeInは動き出しが遅く終了に向けて加速,         "
      4.Back.easeOut : Backを指定するとアニメーションは少しオーバーしてから戻る動きになる
      5.elastic.easeOut : ガタっと落ちてきたようなアニメーション
      6.Bounce.easeOut : 重力のあるバウンドのようなアニメーション
    
5.staggerTo/staggerFrom : 繰り返す複数の要素に対して表示
    =>staggerTo/From('取得する要素', 秒数, {アニメーション}, 各要素の描画時間のずれ)
    
6.TweenMax.setとTimelineMaxプロパティ
    =>TweenMax.set : 初期位置をずらせる( = transform: translate())
      TimelineMaxの繰り返し TimelineMaxオブジェクトのコンストラクター生成時に{repeat: X}を付与

7.TimelineMaxのラベルと同期処理
    =>TweenMax.set(-略- {アニメーション}, '同期させたいラベル(CamelCase記法)や 秒数のみの指定')

*/