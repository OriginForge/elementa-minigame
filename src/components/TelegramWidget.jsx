import React, { useState, useEffect } from 'react';
import '../styles/TelegramWidget.css';
const TelegramWidget = () => {
  const [user, setUser] = useState(null);
  const [showInfo, setShowInfo] = useState(false);

  useEffect(() => {
    if (window.Telegram?.WebApp?.initDataUnsafe?.user) {
      setUser(window.Telegram.WebApp.initDataUnsafe.user);
    }
  }, []);

  const handleButtonClick = () => {
    setShowInfo(true);
  };

  const renderUserInfo = () => {
    if (!user) return <p>사용자 정보를 불러올 수 없습니다.</p>;

    return (
      <div className="user-info">
        <h2>Telegram 사용자 정보</h2>
        <p><strong>이름:</strong> {user.first_name} {user.last_name}</p>
        {user.username && <p><strong>사용자명:</strong> @{user.username}</p>}
        <p><strong>언어:</strong> {user.language_code}</p>
        {user.is_premium && <p><strong>프리미엄 사용자</strong></p>}
      </div>
    );
  };

  return (
    <div className="telegram-widget">
      {!showInfo ? (
        <button onClick={handleButtonClick} className="telegram-button">
          Telegram 정보 보기
        </button>
      ) : (
        renderUserInfo()
      )}
    </div>
  );
};

export default TelegramWidget;
