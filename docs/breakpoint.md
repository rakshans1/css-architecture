

    breakpoints:        0        576px       768px      992px        1200px

    //                  └────┬────┘ └────┬────┘ └────┬────┘ └────┬────┘ └────┬────
    // breakpoints names:    xs          sm          md          lg          xl

    // Set a media query
    @include at(sm) {
      // Styles inside here will be applied when
      // browser window width is somewhere between 576px and 768px
    }



### The mixins

Breakpoint offers four handy mixins that let you set breakpoint ranges easily: `at`, `from`, `to` and `between`:

Styles under `@include at(sm) {}`        are applied when browser window width is inside the small breakpoint.

Styles under `@include from(sm) {}`      are applied when browser window width is inside the small breakpoint or larger.

Styles under `@include to(sm) {}`        are applied when browser window width is inside the small breakpoint or smaller.

Styles under `@include between(sm,lg) {}` are applied when browser window width is inside small breakpoint, large breakpoint or any breakpoint between the two (if any).

     Breakpoint:   0                 576px     768px     992px       1200px
                   ├───────────────────┼─────────┼─────────┼───────────┼─────────>
      breakpoint #:          xs        ·   sm        md         lg     ·    xl
                   ·                   ·         ·         ·           ·
                   ·                   ·         ·  at(md) ·           ·
                   ·                   ·         ├─────────┤           ·
                   ·                   ·         ·         ·           ·
                   ·                   ·         ·from(md) ·           ·
                   ·                   ·         ├───────────────────────────────>
                   ·                   ·                   ·           ·
                   ·                   ·           to(md)  ·           ·
                   ├───────────────────────────────────────┤           ·
                                       ·                               ·
                                       ·       between(sm, lg)         ·
                                       ├───────────────────────────────┤

