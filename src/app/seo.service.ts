import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

export interface SeoData {
  title: string;
  description: string;
}

const BASE_URL = 'https://www.marianmannert.de';
const SITE_NAME = 'Marian J. Mannert';
const PREVIEW_IMAGE = `${BASE_URL}/assets/og-image.png`;

/**
 * Sets title, description, canonical URL and link-preview tags (Open Graph / Twitter) per page.
 * The pages are prerendered, so these tags end up in the static HTML that search engines and
 * social networks read.
 */
@Injectable({ providedIn: 'root' })
export class SeoService {

  private title = inject(Title);
  private meta = inject(Meta);
  private document = inject(DOCUMENT);

  update(seo: SeoData | undefined, url: string): void {
    if (!seo) {
      return;
    }

    // the start page title already contains the name
    const title = seo.title.startsWith(SITE_NAME) ? seo.title : `${seo.title} | ${SITE_NAME}`;
    const canonicalUrl = this.canonicalUrl(url);

    this.title.setTitle(title);
    this.meta.updateTag({ name: 'description', content: seo.description });

    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:locale', content: 'de_DE' });
    this.meta.updateTag({ property: 'og:site_name', content: SITE_NAME });
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: seo.description });
    this.meta.updateTag({ property: 'og:url', content: canonicalUrl });
    this.meta.updateTag({ property: 'og:image', content: PREVIEW_IMAGE });
    this.meta.updateTag({ property: 'og:image:width', content: '1200' });
    this.meta.updateTag({ property: 'og:image:height', content: '630' });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });

    this.setCanonical(canonicalUrl);
  }

  /** GitHub Pages serves the prerendered pages as folders, so sub pages end with a slash (e.g. /about/). */
  private canonicalUrl(url: string): string {
    const path = url.split(/[?#]/)[0].replace(/\/+$/, '');
    return path ? `${BASE_URL}${path}/` : `${BASE_URL}/`;
  }

  private setCanonical(href: string): void {
    let link = this.document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }
    link.setAttribute('href', href);
  }
}
