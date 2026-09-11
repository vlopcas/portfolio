# Media assets

Editable source files live under `docs/source-media/`. Files served by the site live under `public/` and should be treated as generated delivery assets.

```text
docs/source-media/
├── backgrounds/
├── brand/
└── institutions/

docs/victor-perfil-dark.jpg
docs/victor-perfil-light.jpg

public/
├── icons/
└── images/
    ├── backgrounds/
    ├── brand/
    ├── institutions/
    ├── portrait/
    └── social/
```

After replacing an original image, regenerate the web-ready versions with:

```bash
npm run images:optimize
```

The optimization script intentionally keeps social previews and favicons in PNG for broad crawler and platform compatibility. Decorative page backgrounds and photographic assets use WebP to reduce transfer size.

`docs/victor-perfil-dark.jpg` and `docs/victor-perfil-light.jpg` are the approved portrait sources for their respective themes.

`public/cv-victor-castro.pdf` remains at the public root because its URL is shared by other sites and must remain stable.
