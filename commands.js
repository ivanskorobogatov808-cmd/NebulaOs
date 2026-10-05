const COMMANDS = {
    '/os':'Название ОС - NebulaOS<br>Версия - Beta 0.1',
    '/help':  'Команды:<br>/os — информация об ОС<br>/help — список команд<br>/date — текущая дата<br>/clear — очистить терминал<br>/clearos — закрыть все приложения',
    '/date':  () => new Date().toLocaleString(),
    '/clear': () => {
        document.getElementById('term-out').innerHTML = '';
        return '';
    },
    '/clearos': () => {
    document.getElementById('win').style.display = 'none';
    document.getElementById('news-win').style.display = 'none';
    document.getElementById('settings-win').style.display = 'none';
    return 'Все приложения закрыты';
}
};