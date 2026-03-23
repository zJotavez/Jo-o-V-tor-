import * as fs from 'fs';
import * as path from 'path';

function walk(dir: string): string[] {
    let results: string[] = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(file));
        } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.css') || file.endsWith('.html')) {
            results.push(file);
        }
    });
    return results;
}

const files = walk('./src').concat(['./index.html']);

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;
    
    // Replace rgba colors
    content = content.replace(/rgba\(0,255,136,/g, 'rgba(107,142,35,'); // #6B8E23
    content = content.replace(/rgba\(0,194,255,/g, 'rgba(139,94,60,'); // #8B5E3C
    content = content.replace(/rgba\(255,255,255,/g, 'rgba(139,94,60,'); // #8B5E3C
    
    // Also fix some text colors that might be hard to read
    content = content.replace(/text-\[\#2C1E16\]\/50/g, 'text-[#2C1E16]/60');
    content = content.replace(/text-\[\#2C1E16\]\/40/g, 'text-[#2C1E16]/60');
    content = content.replace(/text-\[\#2C1E16\]\/30/g, 'text-[#2C1E16]/50');
    content = content.replace(/text-\[\#2C1E16\]\/20/g, 'text-[#2C1E16]/40');
    
    if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Updated ${file}`);
    }
});
