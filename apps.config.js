import displaySoundCloud from './components/apps/soundcloud';
import displayVsCode from './components/apps/vscode';
import { displayTerminal } from './components/apps/terminal';
import { displaySettings } from './components/apps/settings';
import { displayChrome } from './components/apps/chrome';
import { displayTrash } from './components/apps/trash';
import { displayGedit } from './components/apps/gedit';
import { displayAboutAdam } from './components/apps/adam';
import { displayTerminalCalc } from './components/apps/calc';

const apps = [
    {
        id: "chrome",
        title: "Google Chrome",
        icon: './themes/Yaru/apps/chrome.png',
        disabled: false,
        favorite: true,
        desktop_shortcut: true,
        screen: displayChrome,
    },
    {
        id: "calc",
        title: "Calc",
        icon: './themes/Yaru/apps/calc.png',
        disabled: false,
        favorite: true,
        desktop_shortcut: false,
        screen: displayTerminalCalc,
    },
    {
        id: "about-adam",
        title: "About Adam",
        icon: './themes/Yaru/system/user-home.png',
        disabled: false,
        favorite: true,
        desktop_shortcut: true,
        screen: displayAboutAdam,
    },
    {
        id: "vscode",
        title: "Visual Studio Code",
        icon: './themes/Yaru/apps/vscode.png',
        disabled: false,
        favorite: true,
        desktop_shortcut: false,
        screen: displayVsCode,
    },
    {
        id: "terminal",
        title: "Terminal",
        icon: './themes/Yaru/apps/bash.png',
        disabled: false,
        favorite: true,
        desktop_shortcut: false,
        screen: displayTerminal,
    },
    {
        id: "SoundCloud",
        title: "SoundCloud",
        icon: './themes/Yaru/apps/soundcloud.png',
        disabled: false,
        favorite: true,
        desktop_shortcut: false,
        screen: displaySoundCloud, // Top 50 - USA Playlist 😅
    },
    {
        id: "settings",
        title: "Settings",
        icon: './themes/Yaru/apps/gnome-control-center.png',
        disabled: false,
        favorite: true,
        desktop_shortcut: false,
        screen: displaySettings,
    },
    {
        id: "trash",
        title: "Trash",
        icon: './themes/Yaru/system/user-trash-full.png',
        disabled: false,
        favorite: false,
        desktop_shortcut: true,
        screen: displayTrash,
    },
    {
        id: "gedit",
        title: "Contact Me",
        icon: './themes/Yaru/apps/gedit.png',
        disabled: false,
        favorite: false,
        desktop_shortcut: true,
        screen: displayGedit,
    },
]

export default apps;