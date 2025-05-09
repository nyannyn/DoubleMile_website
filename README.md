# 加倍愛網站

這是「加倍愛」公益組織的官方網站原始碼，提供組織資訊、服務項目介紹，以及聯絡方式等內容。

## 網站內容

- **首頁**：展示組織宗旨、主要服務項目和活動資訊
- **關於我們**：介紹組織背景、使命、願景和團隊成員
- **服務項目**：詳細說明各項服務內容
- **聯絡我們**：提供聯絡資訊和留言表單

## 使用技術

- HTML5
- CSS3 (自適應響應式設計)
- JavaScript (原生JS)
- Font Awesome 圖標
- Google Maps 嵌入功能

## 本地運行說明

這個網站使用純HTML、CSS和JavaScript構建，不需要特殊的開發環境或伺服器設置：

1. 將整個網站資料夾放置在您的網頁伺服器目錄下
2. 或者，可以直接用瀏覽器開啟 `index.html` 檔案查看網站

## 網站結構

```
website/
│
├── index.html              # 首頁
├── css/                    # CSS樣式表
│   └── style.css           # 主要樣式檔案
│
├── js/                     # JavaScript檔案
│   └── main.js             # 主要腳本檔案
│
├── images/                 # 圖片資源
│   ├── logo.png            # 網站Logo
│   ├── hero-bg.jpg         # 首頁主視覺背景
│   ├── about-bg.jpg        # 關於我們頁面背景
│   ├── services-bg.jpg     # 服務項目頁面背景
│   ├── contact-bg.jpg      # 聯絡我們頁面背景
│   ├── team1.jpg           # 團隊成員照片
│   └── ...                 # 其他圖片
│
├── about/                  # 關於我們頁面
│   └── index.html          # 關於我們主頁
│
├── services/               # 服務項目頁面
│   └── index.html          # 服務項目主頁
│
└── contact/                # 聯絡我們頁面
    └── index.html          # 聯絡我們主頁
```

## 圖片資源

**注意**：為了讓網站正確顯示，您需要準備以下圖片資源：

1. **Logo** (`logo.png`): 組織的標誌圖片
2. **首頁背景** (`hero-bg.jpg`): 首頁主視覺背景圖
3. **關於我們背景** (`about-bg.jpg`): 關於我們頁面背景圖
4. **服務項目背景** (`services-bg.jpg`): 服務項目頁面背景圖
5. **聯絡我們背景** (`contact-bg.jpg`): 聯絡我們頁面背景圖
6. **團隊成員照片** (`team1.jpg`, `team2.jpg`, `team3.jpg`, `team4.jpg`): 團隊成員的照片
7. **服務項目圖片** (`service-children.jpg`, `service-elderly.jpg`, `service-community.jpg`): 服務項目的圖片
8. **活動圖片** (`event1.jpg`, `event2.jpg`): 活動的圖片
9. **Favicon** (`favicon.ico`): 網站圖標

將這些圖片放在 `images` 目錄下，或根據需要調整HTML中的圖片路徑。

## 更新與維護

後續更新可以考慮：

1. 添加更多服務項目詳細頁面
2. 建立部落格功能分享最新消息
3. 添加捐款系統整合
4. 建立志工報名管理系統

## 聯絡我們

如有任何問題或建議，請聯絡網站管理員：

- Email: info@doublemile.org.tw
- 電話: (02) 2345-6789 