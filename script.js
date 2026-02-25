// モーダル画面---------------------------------------------------------
const modal = document.querySelector('#portfolio-modal');
const closeBtn = document.querySelector('#modal-close');

document.addEventListener('DOMContentLoaded', function() {
  // 初回のみ表示
    if (!sessionStorage.getItem('portfolioModalShown')) {
        modal.classList.add('active');
        document.body.classList.add('modal-open');
    }
  // 閉じる
    closeBtn.addEventListener('click', function() {
        modal.classList.remove('active');
        document.body.classList.remove('modal-open');
        sessionStorage.setItem('portfolioModalShown', 'true');
    });
});

// ローディング画面---------------------------------------------------------
const loading = document.querySelector('#loading');
const loadingIcon = document.querySelector('.rotate-img');

window.addEventListener('load', () => {
    loading.animate(
        {
            opacity: [1, 0],
            visibility: 'hidden',
        },
        {
            duration: 2000,
            delay: 1500,
            easing: 'ease',
            fill: 'forwards',
        }
    );
    loadingIcon.animate(
        [
            {
                opacity: 1,
                offset: 0.8
            },
            {
                opacity: 0,
                offset: 1
            },
        ],
        {
            duration: 1700,
            easing: 'ease',
            fill: 'forwards',
        }
    );
});
// ハンバーガーメニュー---------------------------------------------------------
const hmbBtn = document.querySelector('#hmb');
const header = document.querySelector('#header');

hmbBtn.addEventListener('click', () => {
    header.classList.toggle('active');
});


// fadein---------------------------------------------------------
// 監視対象が範囲内に現れたら実行する動作
const animateFade = (entries, obs) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // console.log(entry.target);
            entry.target.animate(
                {
                    opacity: [0, 1],
                    translate: ['0 30px', 0],
                },
                {
                    duration: 2000,
                    easing: 'ease',
                    fill: 'forwards',
                }
            );
            // 一度だけで終わる
            obs.unobserve(entry.target);
        }
    });
};
// 監視設定
const fadeObserver = new IntersectionObserver(animateFade);
// .fadeinを監視するように指示
const fadeElements = document.querySelectorAll('.fadein');
fadeElements.forEach((fadeElement) => {
    fadeObserver.observe(fadeElement);
});
