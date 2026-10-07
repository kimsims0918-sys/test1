import content from '../content/site.json'

// The email footer link follows contactEmail so there is only one address to edit.
export const site = {
  ...content,
  about: content.about ?? [],
  aboutEnglish: content.aboutEnglish ?? [],
  heroDescription: content.heroDescription ?? [],
  socialLinks: [
    ...(content.socialLinks ?? []),
    { label: 'Email', url: `mailto:${content.contactEmail}` },
  ],
}
