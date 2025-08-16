// ==UserScript==
// @name         KanbanFlow Confetti on Column Child Add
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  Show confetti for 5 seconds when a new child is added to data-columnid="bjrenKm8zcjU"
// @author       You
// @match        https://kanbanflow.com/board/6faB6ja
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Only run once per new child addition
    let lastChildCount = null;

    // Load canvas-confetti from CDN
    function loadConfettiScript(callback) {
        if (window.confetti) {
            callback();
            return;
        }
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js';
        script.onload = callback;
        document.head.appendChild(script);
    }

    function showConfetti() {
        const duration = 5 * 1000;
        const end = Date.now() + duration;

        (function frame() {
            window.confetti({
                particleCount: 5,
                angle: 60,
                spread: 55,
                origin: { x: 0 }
            });
            window.confetti({
                particleCount: 5,
                angle: 120,
                spread: 55,
                origin: { x: 1 }
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        })();
    }

    function observeColumn() {
        const column = document.querySelector('td.column-last').children[0].children;
        if (!column) return;

        // Initialize lastChildCount
        lastChildCount = column.children.length;

        const columnObserver = new MutationObserver(() => {
            const currentCount = column.children.length;
            if (currentCount > lastChildCount) {
                loadConfettiScript(showConfetti);
            }
            lastChildCount = currentCount;
        });

        columnObserver.observe(column, { childList: true });
    }

    // Wait for the column to appear in the DOM
    const waitForColumn = new MutationObserver(() => {
        if (document.querySelector('[data-columnid="bjrenKm8zcjU"]')) {
            waitForColumn.disconnect();
            observeColumn();
        }
    });

    if (document.querySelector('[data-columnid="bjrenKm8zcjU"]')) {
        observeColumn();
    } else {
        waitForColumn.observe(document.body, { childList: true, subtree: true });
    }
})();