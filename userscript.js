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

    const defaults = {
        spread: 360,
        ticks: 100,
        gravity: 0,
        decay: 0.94,
        startVelocity: 30,
    };

    function shoot() {
        confetti({
            ...defaults,
            particleCount: 30,
            scalar: 1.2,
            shapes: ["circle", "square"],
            colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
        });

        confetti({
            ...defaults,
            particleCount: 20,
            scalar: 2,
            shapes: ["emoji"],
            shapeOptions: {
            emoji: {
                value: ["🦄", "🌈"],
            },
            },
        });
    }

    function observeColumn() {
        const column = document.querySelector('td.column-last').children[0].children[1];
        if (!column) return;

        // Initialize lastChildCount
        lastChildCount = column.children.length;

        const columnObserver = new MutationObserver(() => {
            const currentCount = column.children.length;
            if (currentCount > lastChildCount) {
                setTimeout(confetti.render(), 0);
                setTimeout(confetti.render(), 1000);
                setTimeout(confetti.render(), 2000);
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
