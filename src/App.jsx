import React, {useEffect, useRef, useState} from 'react';
import './App.css';

const App = () => {

  const [timerDays, setTimerDays] = useState('00');
  const [timerHours, setTimerHours] = useState('00');
  const [timerMinutes, setTimerMinutes] = useState('00');
  const [timerSeconds, setTimerSeconds] = useState('00');
  
  let interval = useRef();

  const startTimer = () => {
        const countdownDate = new Date('March 27, 2024 10:00:00').getTime();

        interval = setInterval(() => {
          const now = new Date().getTime();
          const distance = countdownDate - now;

          const days = Math.floor(distance / (1000 * 60 * 60 * 24));
          const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
          const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((distance % (1000 * 60)) / 1000);

          if(distance < 0) {
            // stop our timer
            clearInterval(interval.current);
          } else {
            // update timer
            setTimerDays(days);
            setTimerHours(hours);
            setTimerMinutes(minutes);
            setTimerSeconds(seconds);
          }

        },1000);

      };

      // ComponentDidMount
      useEffect(() => {
        startTimer();
        return () => {
          clearInterval(interval.current);
        };
      });

  return (
    <section className="timer-container">
      <section className="timer">
          <div>
            <span>
              <img className = "chibi" src="./picture/2.jpg" alt="chibi" />
            </span>
            <h2>ヨミカウントダウン</h2>
            <p>キャラクターの到着を待つ時間</p>
            <p>Made by <span>@FFBLE</span></p>
          </div>
              <div>
                <section>
                  <p>{timerDays}</p>
                  <p><small class="small-text">Days</small></p>
                </section>
                <span>:</span>
                <section>
                  <p>{timerHours}</p>
                  <p><small class="small-text">Hours</small></p>
                </section>
                <span>:</span>
                <section>
                  <p>{timerMinutes}</p>
                  <p><small class="small-text">Minutes</small></p>
                </section>
                <span>:</span>
                <section>
                  <p>{timerSeconds}</p>
                  <p><small class="small-text">Seconds</small></p>
                </section>
              </div>
      </section>
    </section>


  );
};

export default App
