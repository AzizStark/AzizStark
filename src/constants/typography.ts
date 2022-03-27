export enum Title {}

export enum FontFamily {
  primary = "var(--font-primary)",
  secondary = "var(--font-secondary)",
}

export enum FontSize {
  small = "12px",
  medium = "16px",
  normal = "18px",
  large = "calc(.4vw + 14px)",
  xl = "clamp(20px, 4vw, 50px);",
  xxl = "clamp(40px, 7vw, 100px);",
}

export enum FontWeight {
  thin = 200,
  light = 300,
  regular = 400,
  medium = 500,
  semibold = 600,
  bold = 700,
  extrabold = 800,
}
