@@ -0,0 +1,236 @@


/* Animations */


@keyframes glitch {


    0% { transform: translate(0) }


    20% { transform: translate(-2px, 2px) }


    40% { transform: translate(-2px, -2px) }


    60% { transform: translate(2px, 2px) }


    80% { transform: translate(2px, -2px) }


    100% { transform: translate(0) }


}





@keyframes scanline {


    0% { transform: translateY(-100%) }


    100% { transform: translateY(100%) }


}





.system-message {


    color: #ff0033;


    opacity: 1;


    transition: opacity 1s;


    margin: 5px 0;


}





.glitch-effect {


    animation: glitch 0.3s infinite;


}





body {


    background: #000;


    color: #c0c0c0;


    font-family: "Courier New", monospace;


    margin: 0;


    padding: 20px;


    line-height: 1.6;


    overflow-x: hidden;


}





/* Static TV effect overlay */


.static-overlay {


    position: fixed;


    top: 0;


    left: 0;


    width: 100%;


    height: 100%;


    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyAQMAAAAk8RryAAAABlBMVEUAAAAAAAClZ7nPAAAAAnRSTlMAGovxNEIAAAASSURBVBjTY2AYBaMhMhoCIyEAADq4Amr3rPjIAAAAAElFTkSuQmCC');


    opacity: 0.1;


    pointer-events: none;


    animation: static 0.2s steps(2) infinite;


}





/* Loading Screen */


.loading-screen {


    position: fixed;


    top: 0;


    left: 0;


    width: 100%;


    height: 100%;


    background: #000;


    color: #fff;


    display: flex;


    flex-direction: column;


    justify-content: center;


    align-items: center;


    z-index: 1000;


    font-size: 1.2em;


    animation: fadeOut 2s forwards;


    animation-delay: 3s;


}





.loading-bar {


    width: 200px;


    height: 1px;


    background: #333;


    margin: 20px 0;


    position: relative;


    overflow: hidden;


}





.loading-bar::after {


    content: '';


    position: absolute;


    width: 40px;


    height: 1px;


    background: #fff;


    animation: loading 2s infinite;


}





.ip {


    font-size: 0.8em;


    color: #666;


    margin-top: 20px;


}





.container {


    max-width: 800px;


    margin: 0 auto;


}





/* ASCII Art Header */


.ascii {


    color: #444;


    font-size: 10px;


    line-height: 1;


    margin: 20px 0;


    text-align: center;


}





/* Navigation Table */


.nav-table {


    width: 100%;


    border-collapse: collapse;


    border: 1px solid #333;


    margin: 20px 0;


}





.nav-table td {


    text-align: center;


    border: 1px solid #333;


}





.nav-table a {


    color: #666;


    text-decoration: none;


    display: block;


    padding: 5px;


}





.nav-table a:hover {


    color: #fff;


    background: #333;


}





/* Terminal Window */


.terminal-window {


    border: 1px solid #333;


    margin: 20px 0;


    background: #000;


}





.terminal-header {


    background: #333;


    padding: 5px 10px;


    font-size: 0.8em;


}





.terminal-content {


    padding: 10px;


    color: #999;


}





/* Status Box */


.status-box {


    margin: 20px 0;


}





.status-box table {


    width: 100%;


    border-collapse: collapse;


    border: 1px solid #333;


}





.status-box td {


    padding: 5px 10px;


    border: 1px solid #333;


}





/* Connection Status */


.connection-status {


    position: fixed;


    bottom: 20px;


    right: 20px;


    font-size: 0.8em;


    color: #666;


}





/* Additional Animations */


@keyframes static {


    0% { background-position: 0 0; }


    100% { background-position: 100% 100%; }


}





@keyframes loading {


    0% { transform: translateX(-100%); }


    100% { transform: translateX(500%); }


}





@keyframes fadeOut {


    to { opacity: 0; visibility: hidden; }


}





/* Blinking cursor */


.blink {


    animation: blink 1s steps(2) infinite;


}





@keyframes blink {


    0% { opacity: 0; }


    100% { opacity: 1; }


}





/* Old school selection color */


::selection {


    background: #333;


    color: #fff;


}





/* Scrollbar */


::-webkit-scrollbar {


    width: 8px;


}





::-webkit-scrollbar-track {


    background: #000;


}





::-webkit-scrollbar-thumb {


    background: #333;


}





/* Media Queries for CRT effect */


@media only screen and (min-width: 768px) {


    body::after {


        content: "";


        position: fixed;


        top: 0;


        left: 0;


        width: 100%;


        height: 100%;


        background: linear-gradient(


            rgba(18, 16, 16, 0) 50%,


            rgba(0, 0, 0, 0.25) 50%


        );


        background-size: 100% 4px;


        z-index: 2;


        pointer-events: none;


    }


}
