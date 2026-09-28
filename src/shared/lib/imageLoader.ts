import { withBasePath } from "@/shared/lib/basePath";

interface IImageLoaderParams {
    src: string;
    width: number;
}

// Static export has no image optimizer: serve the original file, prefixed for GitHub Pages' sub-path.
export default function imageLoader({ src, width }: IImageLoaderParams) {
    if (/^https?:\/\//.test(src)) return src;
    return `${withBasePath(src)}?w=${width}`;
}
