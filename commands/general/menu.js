/**
 * Bot Name: SH4DOW X ZW
 * Owner: Shaddy
 * Description: Multi-device WhatsApp Bot
 */

const settings = {
    botName: "SH4DOW X ZW",
    ownerName: "Shaddy",
    prefix: ".",
    ownerNumber: "263xxxxxxxxx" // Replace with your number
};

const commands = [];

// Function to register commands into the system
function addCommand(info, func) {
    commands.push({ ...info, execute: func });
}

// --- AI MENU ---
addCommand({ name: "gpt", category: "AI" }, async (chat) => { /* logic */ });
addCommand({ name: "dalle", category: "AI" }, async (chat) => { /* logic */ });
addCommand({ name: "deepseek", category: "AI" }, async (chat) => { /* logic */ });

// --- DOWNLOAD MENU ---
addCommand({ name: "tiktok", category: "DOWNLOAD" }, async (chat) => { /* logic */ });
addCommand({ name: "song", category: "DOWNLOAD" }, async (chat) => { /* logic */ });
addCommand({ name: "facebook", category: "DOWNLOAD" }, async (chat) => { /* logic */ });

// --- GROUP MENU ---
addCommand({ name: "kick", category: "GROUP" }, async (chat) => { /* logic */ });
addCommand({ name: "promote", category: "GROUP" }, async (chat) => { /* logic */ });
addCommand({ name: "tagall", category: "GROUP" }, async (chat) => { /* logic */ });

// --- SETTINGS MENU ---
addCommand({ name: "mode", category: "SETTINGS" }, async (chat) => { /* logic */ });
addCommand({ name: "setprefix", category: "SETTINGS" }, async (chat) => { /* logic */ });

// --- DYNAMIC MENU GENERATOR (The one from your screenshots) ---
addCommand({ name: "menu", category: "OTHER" }, async (chat) => {
    let menuMsg = `┏▣ ◈ *${settings.botName}* ◈\n`;
    menuMsg += `│ User: ${settings.ownerName}\n`;
    menuMsg += `│ Prefix: ${settings.prefix}\n`;
    menuMsg += `┗━━━━━━━━━━━━━\n\n`;

    // Group commands by category
    const categories = ["AI", "AUDIO", "DOWNLOAD", "EPHOTO360", "FUN", "GAMES", "GROUP", "IMAGE", "OTHER", "OWNER", "RELIGION", "SEARCH", "SETTINGS", "SPORTS", "SUPPORT", "TOOLS", "TRANSLATE", "VIDEO"];

    categories.forEach(cat => {
        menuMsg += `┏▣ ◈ *${cat} MENU* ◈\n`;
        const filteredCmds = commands.filter(c => c.category === cat);
        
        // If no commands added yet for this cat, just show a placeholder
        if (filteredCmds.length === 0) {
            menuMsg += `│➽ (coming soon)\n`;
        } else {
            filteredCmds.forEach(cmd => {
                menuText += `│➽ ${cmd.name}\n`;
            });
        }
        menuMsg += `┗▣ \n\n`;
    });

    console.log("Menu generated for " + settings.ownerName);
    // Code to send 'menuMsg' via your WhatsApp library (Baileys/WA-Automate)
});

/** * To add the rest of your 100+ commands, 
 * simply use the addCommand function for each:
 * * addCommand({ name: "remini", category: "IMAGE" }, ...);
 * addCommand({ name: "bible", category: "RELIGION" }, ...);
 * addCommand({ name: "sticker", category: "TOOLS" }, ...);
 */

console.log(`${settings.botName} by ${settings.ownerName} is booting up...`);
