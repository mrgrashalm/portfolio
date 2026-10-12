import { DefaultUrlSerializer, UrlTree } from '@angular/router';

/**
 * GitHub Pages serves the prerendered pages as folders and redirects /about to /about/.
 * Ending every router URL with a slash makes the links in the HTML point directly at the served
 * (and canonical) URL, so search engines don't run into a redirect for every internal link.
 */
export class TrailingSlashUrlSerializer extends DefaultUrlSerializer {

  override parse(url: string): UrlTree {
    // "/about/" would otherwise be parsed as the segments "about" and ""
    return super.parse(changePath(url, path => path.replace(/(.)\/+$/, '$1')));
  }

  override serialize(tree: UrlTree): string {
    return changePath(super.serialize(tree), path => path.endsWith('/') ? path : `${path}/`);
  }
}

/** Applies `change` to the path only, leaving query and fragment untouched. */
function changePath(url: string, change: (path: string) => string): string {
  const pathEnd = url.search(/[?#]/);
  return pathEnd < 0 ? change(url) : change(url.slice(0, pathEnd)) + url.slice(pathEnd);
}
