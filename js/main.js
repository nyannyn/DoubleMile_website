// 等待DOM完全加載
document.addEventListener('DOMContentLoaded', function() {
    // 行動裝置選單切換
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
    
    // 點擊頁面其他部分關閉選單
    document.addEventListener('click', function(event) {
        if (navMenu && navMenu.classList.contains('active') && 
            !event.target.closest('nav') && !event.target.closest('.menu-toggle')) {
            navMenu.classList.remove('active');
        }
    });
    
    // 平滑滾動到錨點
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // 數據計數動畫
    const statNumbers = document.querySelectorAll('.stat-number');
    let animated = false;
    
    function animateNumbers() {
        if (animated) return;
        
        statNumbers.forEach(number => {
            const target = parseInt(number.getAttribute('data-count'));
            const duration = 2000; // 動畫持續時間（毫秒）
            const startTime = Date.now();
            const startValue = 0;
            
            function updateNumber() {
                const currentTime = Date.now();
                const elapsedTime = currentTime - startTime;
                
                if (elapsedTime < duration) {
                    const value = Math.floor(easeInOutQuad(elapsedTime, startValue, target, duration));
                    number.textContent = value;
                    requestAnimationFrame(updateNumber);
                } else {
                    number.textContent = target;
                }
            }
            
            updateNumber();
        });
        
        animated = true;
    }
    
    // 緩動函數
    function easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }
    
    // 當滾動到影響力部分時觸發動畫
    function handleScroll() {
        const impact = document.querySelector('.impact');
        if (!impact) return;
        
        const impactPosition = impact.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (impactPosition < screenPosition) {
            animateNumbers();
            // 動畫開始後移除滾動監聽器
            window.removeEventListener('scroll', handleScroll);
        }
    }
    
    // 添加滾動事件監聽器
    window.addEventListener('scroll', handleScroll);
    // 頁面載入時檢查一次，以防頁面已經滾動到該位置
    handleScroll();
    
    // 頁面載入後淡入動畫
    const fadeElements = document.querySelectorAll('.hero-content, .section-header, .service-card, .event-card');
    fadeElements.forEach(element => {
        element.classList.add('fadeIn');
    });
}); 