import { useEffect, useRef, useState } from 'react';
import Cubes from './Cubes';

const ACCESS_PASSWORD = '123456';

export default function LockScreen({ onUnlock }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isExiting, setIsExiting] = useState(false);
  const unlockTimerRef = useRef(null);

  useEffect(() => {
    return () => window.clearTimeout(unlockTimerRef.current);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password === ACCESS_PASSWORD) {
      setError('');
      setIsExiting(true);
      unlockTimerRef.current = window.setTimeout(onUnlock, 620);
      return;
    }

    setError('密码不正确，请重新输入');
  };

  return (
    <main className={`lock-screen${isExiting ? ' lock-screen--exiting' : ''}`}>
      <div className="lock-screen__grain" aria-hidden="true" />
      <div className="lock-screen__cubes" aria-hidden="true">
        <Cubes
          gridSize={8}
          maxAngle={30}
          radius={2.8}
          cellGap={5}
          borderStyle="1px solid rgba(31, 41, 40, 0.12)"
          faceColor="#f1f4ee"
          rippleColor="#6f7a70"
          rippleSpeed={1.8}
          shadow="0 14px 30px rgba(31, 41, 40, 0.06)"
          autoAnimate={!isExiting}
          rippleOnClick={!isExiting}
        />
      </div>
      <div className="lock-screen__wave" aria-hidden="true" />

      <section className="lock-card" aria-label="作品集访问密码">
        <div className="lock-card__mark" aria-hidden="true">
          YING
        </div>
        <p className="lock-card__eyebrow">Private Portfolio</p>
        <h1>欢迎访问我的作品集</h1>
        <p className="lock-card__intro">请输入访问密码查看作品集</p>

        <form className="lock-form" onSubmit={handleSubmit}>
          <label htmlFor="portfolio-password">访问密码</label>
          <div className="lock-form__row">
            <input
              id="portfolio-password"
              type="password"
              value={password}
              disabled={isExiting}
              onChange={(event) => {
                setPassword(event.target.value);
                setError('');
              }}
              placeholder="请输入密码"
              autoComplete="current-password"
            />
            <button type="submit" disabled={isExiting}>
              {isExiting ? '进入中' : '进入作品集'}
            </button>
          </div>
          {error ? <p className="lock-form__error">{error}</p> : null}
        </form>
      </section>
    </main>
  );
}
