"use client";

import { useState } from "react";

const ResumeButton = () => {
    const [isLoading, setIsLoading] = useState(false);

    const handleDownload = () => {
        setIsLoading(true);
        window.setTimeout(() => setIsLoading(false), 2000);
    };

    return (
        <>
            <a
                href="/assets/resume.pdf"
                download
                onClick={handleDownload}
                className={`resume-download-button ${isLoading ? "loading" : ""}`}
                aria-label="Download resume"
            >
                <ul>
                    <li>Resume</li>
                    <li>Downloading</li>
                </ul>
                <div>
                    <svg viewBox="0 0 24 24">
                        <path d="M4 12V19C4 19.5304 4.21071 20.0391 4.58579 20.4142C4.96086 20.7893 5.46957 21 6 21H18C18.5304 21 19.0391 20.7893 19.4142 20.4142C19.7893 20.0391 20 19.5304 20 19V12" />
                        <path d="M12 3V15" />
                        <path d="M7 10L12 15L17 10" />
                    </svg>
                </div>
            </a>

            <style jsx>{`
                .resume-download-button {
                    --background: #facc15;
                    --rectangle: #eab308;
                    --success: #fcd34d;
                    --text: #111827;
                    --arrow: #111827;
                    --checkmark: #111827;
                    --shadow: rgba(10, 22, 50, 0.24);
                    display: flex;
                    overflow: hidden;
                    text-decoration: none;
                    -webkit-mask-image: -webkit-radial-gradient(white, black);
                    background: var(--background);
                    border-radius: 5px;
                    box-shadow: 0 2px 8px -1px var(--shadow);
                    transition: transform 0.2s ease, box-shadow 0.2s ease;
                    width: fit-content;
                    transform: translateZ(0);
                    height: 32px;
                }

                .resume-download-button:active {
                    transform: scale(0.97);
                    box-shadow: 0 1px 4px -1px var(--shadow);
                }

                .resume-download-button ul {
                    margin: 0;
                    padding: 7px 13px;
                    list-style: none;
                    text-align: center;
                    position: relative;
                    -webkit-backface-visibility: hidden;
                    backface-visibility: hidden;
                    font-size: 11px;
                    font-weight: 700;
                    line-height: 16px;
                    color: var(--text);
                    min-width: 62px;
                }

                .resume-download-button ul li:not(:first-child) {
                    top: 7px;
                    left: 0;
                    right: 0;
                    position: absolute;
                }

                .resume-download-button ul li:nth-child(2) {
                    top: 39px;
                }

                .resume-download-button > div {
                    position: relative;
                    width: 34px;
                    height: 32px;
                    background: var(--rectangle);
                    flex-shrink: 0;
                }

                .resume-download-button > div:before,
                .resume-download-button > div:after {
                    content: "";
                    display: block;
                    position: absolute;
                }

                .resume-download-button > div:before {
                    border-radius: 1px;
                    width: 2px;
                    top: 50%;
                    left: 50%;
                    height: 10px;
                    margin: -5px 0 0 -1px;
                    background: var(--arrow);
                }

                .resume-download-button > div:after {
                    width: 34px;
                    height: 32px;
                    transform-origin: 50% 0;
                    border-radius: 0 0 80% 80%;
                    background: var(--success);
                    top: 0;
                    left: 0;
                    transform: scaleY(0);
                }

                .resume-download-button > div svg {
                    display: block;
                    position: absolute;
                    width: 14px;
                    height: 14px;
                    left: 50%;
                    top: 50%;
                    margin: -7px 0 0 -7px;
                    fill: none;
                    z-index: 1;
                    stroke-width: 2px;
                    stroke: var(--arrow);
                    stroke-linecap: round;
                    stroke-linejoin: round;
                }

                .resume-download-button.loading ul {
                    animation: text 1800ms ease-in-out forwards;
                }

                .resume-download-button.loading > div:before {
                    animation: line 1800ms ease-in-out forwards;
                }

                .resume-download-button.loading > div:after {
                    animation: background 1800ms ease-in-out forwards;
                }

                .resume-download-button.loading > div svg {
                    animation: svg 1800ms ease-in-out forwards;
                }

                @keyframes text {
                    10%, 85% {
                        transform: translateY(-100%);
                    }
                }

                @keyframes line {
                    5%, 10% {
                        transform: translateY(-30px);
                    }
                    40% {
                        transform: translateY(-20px);
                    }
                    65% {
                        transform: translateY(0);
                    }
                    75%, 100% {
                        transform: translateY(30px);
                    }
                }

                @keyframes svg {
                    0%, 20% {
                        stroke-dasharray: 0;
                        stroke-dashoffset: 0;
                    }
                    21%, 89% {
                        stroke-dasharray: 26px;
                        stroke-dashoffset: 26px;
                        stroke-width: 3px;
                        margin: -10px 0 0 -10px;
                        stroke: var(--checkmark);
                    }
                    100% {
                        stroke-dasharray: 26px;
                        stroke-dashoffset: 0;
                        margin: -10px 0 0 -10px;
                        stroke: var(--checkmark);
                    }
                    12% {
                        opacity: 1;
                    }
                    20%, 89% {
                        opacity: 0;
                    }
                    90%, 100% {
                        opacity: 1;
                    }
                }

                @keyframes background {
                    10% {
                        transform: scaleY(0);
                    }
                    40% {
                        transform: scaleY(0.15);
                    }
                    65% {
                        transform: scaleY(0.5);
                        border-radius: 0 0 50% 50%;
                    }
                    75% {
                        border-radius: 0 0 50% 50%;
                    }
                    90%, 100% {
                        border-radius: 0;
                    }
                    75%, 100% {
                        transform: scaleY(1);
                    }
                }
            `}</style>
        </>
    );
};

export default ResumeButton;
