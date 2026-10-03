const COMMANDS = {
    '/os':    'Название ОС - NebulaOS<br>Версия - Beta 0.1',
    '/help':  'Команды:<br>/os — информация об ОС<br>/help — список команд<br>/date — текущая дата<br>/clear — очистить экран',
    '/date':  () => new Date().toLocaleString(),
    '/clear': () => {
        document.getElementById('term-out').innerHTML = '';
        return '';
    }
};