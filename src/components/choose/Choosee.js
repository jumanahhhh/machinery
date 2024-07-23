import React, { useEffect } from 'react';
import './Choosee.css';

const Choosee = () => {
    useEffect(() => {
        const counters = document.querySelectorAll('.counter');
        const speed = 50000; // Set a base speed for the animation

        const animateCounter = (counter) => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;

                const increment = target / speed;

                if (count < target) {
                    counter.innerText = Math.ceil(count + increment);
                    setTimeout(updateCount, 100); // Adjust delay for smooth animation
                } else {
                    counter.innerText = `${target}+`;
                }
            };

            updateCount();
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    animateCounter(entry.target);
                    observer.unobserve(entry.target); // Unobserve after animation starts
                }
            });
        }, { threshold: 0.5 }); // Trigger when 50% of the element is visible

        counters.forEach(counter => {
            observer.observe(counter);
        });

        // Cleanup function
        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div>
            <div className="about-us">
                <div className="container">
                    <div className="image-section">
                        <img src="https://kfkit.rometheme.pro/built/wp-content/uploads/sites/73/2023/11/salesman-at-the-shop-with-heavy-machinery-DNSRH66.jpg" alt="Background" />
                        <div className="overlay">
                            <h1 className="counter" data-target="40">0</h1>
                            <p>Years Experienced</p>
                        </div>
                    </div>
                    <div className="text-section">
                        <h2>WHY CHOOSE US</h2>
                        <h1>
                            What Makes <span style={{ color: '#f7b500' }}>Built</span> Your Ideal Partner
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                        </p>
                        <div className="features">
                            <div className="feature yellow">
                                <div className="icon">
                                    ✔
                                </div>
                                <div>
                                    <h3>Extensive Equipment Catalog</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                                    </p>
                                </div>
                            </div>
                            <div className="feature black">
                                <div className="icon">
                                    ✔
                                </div>
                                <div>
                                    <h3>Flexible Rental Options</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Choosee;
