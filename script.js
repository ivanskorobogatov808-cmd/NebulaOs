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
});



