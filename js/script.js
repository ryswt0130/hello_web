// とりあえず空のファイルとして作成
// 今後のインタラクション追加時に使用します

document.addEventListener('DOMContentLoaded', function() {
    // 例: ナビゲーションの現在地表示など、簡単な処理をここに追加可能
    console.log("JavaScriptが読み込まれました。");

    // スムーズスクロール (アンカーリンク用)
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    for (let link of smoothScrollLinks) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            let targetId = this.getAttribute('href');
            // #のみのリンクや存在しないIDの場合は何もしない
            if (targetId === '#' || !document.querySelector(targetId)) return;

            let targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    }
});
