const fs = require('fs');
let lines = fs.readFileSync('src/app/page.tsx', 'utf8').split(/\r?\n/);

const pStart = lines.findIndex(l => l.includes('{/* Presentation & experience injections */}'));
const pEnd = lines.findIndex(l => l.includes('<ExperienceContent />')) + 2; // lines up to </div></div>

const cardsStart = lines.findIndex((l, i) => i > pEnd && l.includes('<div className="space-y-6">'));
const cardsEnd = lines.findIndex((l, i) => i > cardsStart && l.includes('<ChevronRight size={16} />')) + 3;

if (pStart > -1 && cardsStart > -1) {
    const pBlock = lines.slice(pStart, pEnd + 1);
    const cBlock = lines.slice(cardsStart, cardsEnd + 1);

    // Remove them from array (from bottom to top to avoid index shifting)
    lines.splice(cardsStart, cBlock.length);
    lines.splice(pStart, pBlock.length);

    // Insert them back in reverse order at pStart
    lines.splice(pStart, 0, ...cBlock, '', ...pBlock);

    fs.writeFileSync('src/app/page.tsx', lines.join('\n'));
    console.log("Successfully swapped blocks!");
} else {
    console.log("Could not find start indices");
}
