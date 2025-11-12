declare namespace JSX {
  interface IntrinsicElements {
    'angular-skill-card': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
  }
}

declare interface WindowEventMap {
  'angular-profile-ready': CustomEvent<void>;
}
