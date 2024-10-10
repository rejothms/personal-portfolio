import React, { useState, useRef, useEffect } from 'react';
import styles from './Tab.module.css';
import Image from 'next/image';
import { gupter } from 'portfolio/app/styles/fonts';

const Tabs: React.FC = () => {
    const [activeTab, setActiveTab] = useState<number>(0); // Track the active tab
    const [count, setCount] = useState<Array<Number>>([1, 2, 3, 4, 5, 6,7,8,9,10])
    const [underlineStyle, setUnderlineStyle] = useState<React.CSSProperties>({}); // Track the underline position
    const tabRefs = useRef<(HTMLDivElement | null)[]>([]); // Store the refs of each tab

    // Handle tab click and set active tab index
    const handleTabClick = (index: number) => {
        setActiveTab(index);
    };

    // Adjust the underline position and width based on the active tab
    useEffect(() => {
        const currentTab = tabRefs.current[activeTab];
        if (currentTab) {
            setUnderlineStyle({
                width: currentTab.offsetWidth + 'px', // Set the underline width to match the tab
                left: currentTab.offsetLeft + 'px', // Set the left position of the underline
            });
        }
    }, [activeTab]);

    return (
        <div className={styles.tabsContainer}>
            <div className={styles.tabs}>
                {['Front End', 'Back End', 'Mobile'].map((tab, index) => (
                    <div
                        key={index}
                        ref={(el) => {
                            tabRefs.current[index] = el; // Correct ref assignment
                        }}
                        className={`${styles.tab} ${activeTab === index ? styles.active : ''}`}
                        onClick={() => handleTabClick(index)}
                    >
                        {tab}
                    </div>
                ))}
                {/* Underline with animation */}
                <div className={styles.underline} style={underlineStyle}></div>
            </div>

            {/* Tab Content */}
            <div className={styles.tabContent}>
                {activeTab === 0 &&
                    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 `}>
                        {
                            count.map((item: any, index: Number) => (
                                <div key={item}
                                    className={`border flex  ${styles.tabSpecifiedContent}`}>
                                    <div>
                                        <Image
                                            className="object-contain  h-full relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                                            src="https://raw.githubusercontent.com/rejothms/pcimages/main/cross_media_wfa.jpg"
                                            alt="project"
                                            width={220}
                                            height={0}
                                            priority
                                        />
                                    </div>
                                    <div>
                                      <h1 className={gupter.className}>Cross media</h1>
                                      <p className={gupter.className}>Project intro lorel ipsum dolor ist amet consecteur adipscig elit. Cum sociis natoque penatibus et magnis dis partuirent montes</p>
                                      <p>Project: Origin </p>
                                    </div>
                                </div>
                            ))}
                    </div>
                }
                {activeTab === 1 && <p>Skilled in Node.js, Express, Databases, APIs.</p>}
                {activeTab === 2 && <p>Experience in building apps with React Native, Swift, Kotlin.</p>}
            </div>
        </div>
    );
};

export default Tabs;
