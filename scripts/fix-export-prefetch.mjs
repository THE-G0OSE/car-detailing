// Next 16 static export writes segment prefetch files as `route/__next.segment/__PAGE__.txt`,
// but the client router requests `route/__next.segment.__PAGE__.txt`. Static hosts (GitHub Pages)
// can't rewrite, so copy each file to the flat name the client asks for.
import { copyFileSync, readdirSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";

const OUT_DIR = "out";

const walk = (dir) =>
    readdirSync(dir).flatMap((name) => {
        const path = join(dir, name);
        return statSync(path).isDirectory() ? walk(path) : [path];
    });

const walkDirs = (dir) =>
    readdirSync(dir)
        .map((name) => join(dir, name))
        .filter((path) => statSync(path).isDirectory())
        .flatMap((path) => [path, ...walkDirs(path)]);

let copied = 0;
for (const segmentDir of walkDirs(OUT_DIR).filter((dir) => dir.split(sep).pop().startsWith("__next."))) {
    for (const file of walk(segmentDir)) {
        const flatName = `${segmentDir}.${relative(segmentDir, file).split(sep).join(".")}`;
        copyFileSync(file, flatName);
        copied++;
    }
}

console.log(`fix-export-prefetch: ${copied} prefetch file(s) flattened`);
