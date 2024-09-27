import React, { useEffect, useState } from 'react';

const TelegramUserInfo = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (window.Telegram.WebApp.initDataUnsafe.user) {
      setUser(window.Telegram.WebApp.initDataUnsafe.user);
    }
  }, []);

  if (!user) {
    return <div>load user info...</div>;
  }

  return (
    <div className="telegram-user-info">
      <h2>Telegram 사용자 정보</h2>
      <p><strong>이름:</strong> {user.first_name} {user.last_name}</p>
      {user.username && <p><strong>사용자명:</strong> @{user.username}</p>}
      <p><strong>언어:</strong> {user.language_code}</p>
      {user.is_premium && <p><strong>프리미엄 사용자</strong></p>}
    </div>
  );
};

export default TelegramUserInfo;
