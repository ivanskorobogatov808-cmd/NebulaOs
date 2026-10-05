function openAbout1() {
    document.getElementById('a1').style.display = 'none';
    document.getElementById('os-beta0-1').style.display = 'block';
}

function closeAbout1() {
    document.getElementById('os-beta0-1').style.display = 'none';
    document.getElementById('a1').style.display = 'block';
}

document.getElementById('open-btn').addEventListener('click', () => {
    document.getElementById('win').style.display = 'block';
});

document.getElementById('win-close').addEventListener('click', () => {
    document.getElementById('win').style.display = 'none';
});



const win = document.getElementById('win');
const bar = document.getElementById('win-bar');

let dragging = false, startX, startY, startLeft, startTop;

bar.addEventListener('mousedown', e => {
    dragging = true;
    startX = e.clientX;
    startY = e.clientY;
    startLeft = win.offsetLeft;
    startTop  = win.offsetTop;
    e.preventDefault();
});

document.addEventListener('mousemove', e => {
    if (!dragging) return;
    win.style.left = (startLeft + e.clientX - startX) + 'px';
    win.style.top  = (startTop  + e.clientY - startY) + 'px';
});

document.addEventListener('mouseup', () => {
    dragging = false;
});


const termIn  = document.getElementById('term-in');
const termOut = document.getElementById('term-out');

function print(text) {
    termOut.innerHTML += text + '<br>';
    termOut.scrollTop = termOut.scrollHeight;
}

termIn.addEventListener('keydown', e => {
    if (e.key !== 'Enter') return;

    const cmd = termIn.value.trim();
    termIn.value = '';
    if (!cmd) return;

    print('> ' + cmd);

    const answer = COMMANDS[cmd];
    if (!answer) {
        print('Неизвестная команда: ' + cmd);
    } else if (typeof answer === 'function') {
        const result = answer();
        if (result) print(result);
    } else {
        print(answer);
    }
})









document.getElementById('news-icon').addEventListener('click', () => {
    document.getElementById('news-win').style.display = 'block';
});

document.getElementById('news-close').addEventListener('click', () => {
    document.getElementById('news-win').style.display = 'none';
});



/* ============ Перетаскивание окна новостей ============ */
const newsWin = document.getElementById('news-win');
const newsBar = newsWin.querySelector('div:first-child');

let newsDragging = false;
let newsStartX, newsStartY, newsStartLeft, newsStartTop;

newsBar.addEventListener('mousedown', e => {
    newsDragging = true;
    newsStartX = e.clientX;
    newsStartY = e.clientY;
    newsStartLeft = newsWin.offsetLeft;
    newsStartTop  = newsWin.offsetTop;
    e.preventDefault();
});

document.addEventListener('mousemove', e => {
    if (!newsDragging) return;
    newsWin.style.left = (newsStartLeft + e.clientX - newsStartX) + 'px';
    newsWin.style.top  = (newsStartTop  + e.clientY - newsStartY) + 'px';
});

document.addEventListener('mouseup', () => {
    newsDragging = false;
});









document.getElementById('settings-btn').addEventListener('click', () => {
    document.getElementById('settings-win').style.display = 'block';
});
/* ============ Перетаскивание окна настроек ============ */
const settingsWin = document.getElementById('settings-win');
const settingsBar = document.getElementById('settings-bar');

let settingsDragging = false;
let settingsStartX, settingsStartY, settingsStartLeft, settingsStartTop;

settingsBar.addEventListener('mousedown', e => {
    settingsDragging = true;
    settingsStartX = e.clientX;
    settingsStartY = e.clientY;
    settingsStartLeft = settingsWin.offsetLeft;
    settingsStartTop  = settingsWin.offsetTop;
    e.preventDefault();
});

document.addEventListener('mousemove', e => {
    if (!settingsDragging) return;
    settingsWin.style.left = (settingsStartLeft + e.clientX - settingsStartX) + 'px';
    settingsWin.style.top  = (settingsStartTop  + e.clientY - settingsStartY) + 'px';
});

document.addEventListener('mouseup', () => {
    settingsDragging = false;
});
document.getElementById('settings-close').addEventListener('click', () => {
    document.getElementById('settings-win').style.display = 'none';
});








/* ============ Переключение разделов настроек ============ */
const tabs = document.querySelectorAll('.settings-tab');
const sections = document.querySelectorAll('.settings-section');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // убрать active со всех табов
        tabs.forEach(t => t.classList.remove('active'));
        // поставить active на текущий
        tab.classList.add('active');

        // скрыть все секции
        sections.forEach(s => s.style.display = 'none');
        // показать нужную
        const id = 'section-' + tab.dataset.section;
        document.getElementById(id).style.display = 'block';
    });
});


document.getElementById('settings-btn').addEventListener('click', () => {
    document.getElementById('settings-win').style.display = 'block';
});

document.getElementById('settings-close').addEventListener('click', () => {
    document.getElementById('settings-win').style.display = 'none';
});












/* ============ Верхняя панель ============ */
function updateClock() {
    const now = new Date();

    const time = now.toLocaleTimeString('ru-RU', {
        hour: '2-digit',
        minute: '2-digit'
    });

    const date = now.toLocaleDateString('ru-RU', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });

    document.getElementById('tb-time').textContent = time;
    document.getElementById('tb-date').textContent = date;
}

updateClock();
setInterval(updateClock, 1000);