export function setTabName(title = "") {
    const tabName = `${getPrefix(title)}Boulette.app`;
    if (document.title === tabName) {
        return;
    }
    document.title = tabName;
}

function getPrefix(title: string) {
    if (!title.length) {
        return "";
    }
    return `${title} - `;
}
