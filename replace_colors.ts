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
    
    // Replace hex colors
    content = content.replace(/#00FF88/g, '#6B8E23');
    content = content.replace(/#00C2FF/g, '#8B5E3C');
    content = content.replace(/#0B0B0F/g, '#FFFDF9');
    content = content.replace(/#1A1A1F/g, '#F5F5DC');
    
    // Replace text-white with text-[#2C1E16]
    content = content.replace(/text-white/g, 'text-[#2C1E16]');
    
    // Replace border-white with border-[#8B5E3C]
    content = content.replace(/border-white/g, 'border-[#8B5E3C]');
    
    // Replace bg-white with bg-[#8B5E3C] (except when it's bg-white/something, we'll keep it bg-[#8B5E3C]/something)
    content = content.replace(/bg-white/g, 'bg-[#8B5E3C]');
    
    // Replace from-white to from-[#2C1E16]
    content = content.replace(/from-white/g, 'from-[#2C1E16]');
    content = content.replace(/to-white/g, 'to-[#2C1E16]');
    
    // Replace text-zinc-300, text-zinc-400, text-zinc-500 with text-[#2C1E16]/something
    content = content.replace(/text-zinc-300/g, 'text-[#2C1E16]/80');
    content = content.replace(/text-zinc-400/g, 'text-[#2C1E16]/70');
    content = content.replace(/text-zinc-500/g, 'text-[#2C1E16]/60');
    content = content.replace(/text-zinc-600/g, 'text-[#2C1E16]/50');
    
    // Replace bg-zinc-800, bg-zinc-700
    content = content.replace(/bg-zinc-800/g, 'bg-[#8B5E3C]/20');
    content = content.replace(/bg-zinc-700/g, 'bg-[#8B5E3C]/30');
    
    if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Updated ${file}`);
    }
});
