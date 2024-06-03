import React, { useState, useEffect } from 'react';
import { TweenMax } from 'gsap';
import "./counter.css";

const Counter = () => {
  const [counts, setCounts] = useState([
    { icon: 'fa fa-users', count: 0, title: 'Happy Customers', delay: '0.1s' },
    { icon: 'fa fa-check', count: 0, title: 'Project Done', delay: '0.3s' },
    { icon: 'fa fa-award', count: 0, title: 'Awards Win', delay: '0.5s' },
    { icon: 'fa fa-users-cog', count: 0, title: 'Expert Workers', delay: '0.7s' }
  ]);

  useEffect(() => {
    
    const incrementCounters = () => {
      setCounts(prevCounts => {
        return prevCounts.map(counter => {
          if (counter.count < 1000) {
            return { ...counter, count: counter.count + 1 };
          }
          return counter;
        });
      });
    };

    const interval = setInterval(incrementCounters, 10);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    counts.forEach((counter, index) => {
      TweenMax.to(`#counter${index}`, 1, {
        delay: parseFloat(counter.delay),
        count: counter.count,
        roundProps: "count",
        onUpdate: () => {
          document.getElementById(`counter${index}`).innerText = Math.round(counter.count);
        }
      });
    });
  }, [counts]);

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5">
          {counts.map((counter, index) => (
            <div
              key={index}
              className={`col-md-6 col-lg-3 wow fadeIn`}
              data-wow-delay={counter.delay}
              style={{
                visibility: "visible",
                animationDelay: counter.delay,
                animationName: "fadeIn"
              }}
            >
              <div className="d-flex align-items-center mb-4">
                <div className="btn-lg-square bg-primary rounded-circle me-3">
                  <i className={counter.icon + " text-white"} />
                </div>
                <h1 className="mb-0" id={`counter${index}`}>
                  {counter.count}
                </h1>
              </div>
              <h5 className="mb-3">{counter.title}</h5>
           
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Counter;
