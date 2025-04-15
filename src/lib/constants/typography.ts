const FONT_SIZES = {
  xxl: '3.2rem',
  xl: '2.4rem',
  lg: '2.0rem',
  md: '1.6rem',
  sm: '1.4rem',
  xs: '1.2rem',
} as const;

const FONT_WEIGHTS = {
  light: 300,
  regular: 400,
  medium: 500,
  bold: 700,
} as const;

type FontSizeKey = keyof typeof FONT_SIZES;
type FontWeightKey = keyof typeof FONT_WEIGHTS;

type TypographyKey = `${FontSizeKey}_${FontWeightKey}`;

type TypographyValue = {
  fontSize: string;
  fontWeight: number;
  lineHeight: string;
};

export const TYPOGRAPHY: Record<TypographyKey, TypographyValue> = {
  xxl_light: {
    fontSize: FONT_SIZES.xxl,
    fontWeight: FONT_WEIGHTS.light,
    lineHeight: '120%',
  },
  xxl_regular: {
    fontSize: FONT_SIZES.xxl,
    fontWeight: FONT_WEIGHTS.regular,
    lineHeight: '120%',
  },
  xxl_medium: {
    fontSize: FONT_SIZES.xxl,
    fontWeight: FONT_WEIGHTS.medium,
    lineHeight: '120%',
  },
  xxl_bold: {
    fontSize: FONT_SIZES.xxl,
    fontWeight: FONT_WEIGHTS.bold,
    lineHeight: '120%',
  },

  xl_light: {
    fontSize: FONT_SIZES.xl,
    fontWeight: FONT_WEIGHTS.light,
    lineHeight: '120%',
  },
  xl_regular: {
    fontSize: FONT_SIZES.xl,
    fontWeight: FONT_WEIGHTS.regular,
    lineHeight: '120%',
  },
  xl_medium: {
    fontSize: FONT_SIZES.xl,
    fontWeight: FONT_WEIGHTS.medium,
    lineHeight: '120%',
  },
  xl_bold: {
    fontSize: FONT_SIZES.xl,
    fontWeight: FONT_WEIGHTS.bold,
    lineHeight: '120%',
  },

  lg_light: {
    fontSize: FONT_SIZES.lg,
    fontWeight: FONT_WEIGHTS.light,
    lineHeight: '130%',
  },
  lg_regular: {
    fontSize: FONT_SIZES.lg,
    fontWeight: FONT_WEIGHTS.regular,
    lineHeight: '130%',
  },
  lg_medium: {
    fontSize: FONT_SIZES.lg,
    fontWeight: FONT_WEIGHTS.medium,
    lineHeight: '130%',
  },
  lg_bold: {
    fontSize: FONT_SIZES.lg,
    fontWeight: FONT_WEIGHTS.bold,
    lineHeight: '130%',
  },

  md_light: {
    fontSize: FONT_SIZES.md,
    fontWeight: FONT_WEIGHTS.light,
    lineHeight: '150%',
  },
  md_regular: {
    fontSize: FONT_SIZES.md,
    fontWeight: FONT_WEIGHTS.regular,
    lineHeight: '150%',
  },
  md_medium: {
    fontSize: FONT_SIZES.md,
    fontWeight: FONT_WEIGHTS.medium,
    lineHeight: '150%',
  },
  md_bold: {
    fontSize: FONT_SIZES.md,
    fontWeight: FONT_WEIGHTS.bold,
    lineHeight: '150%',
  },

  sm_light: {
    fontSize: FONT_SIZES.sm,
    fontWeight: FONT_WEIGHTS.light,
    lineHeight: '150%',
  },
  sm_regular: {
    fontSize: FONT_SIZES.sm,
    fontWeight: FONT_WEIGHTS.regular,
    lineHeight: '150%',
  },
  sm_medium: {
    fontSize: FONT_SIZES.sm,
    fontWeight: FONT_WEIGHTS.medium,
    lineHeight: '150%',
  },
  sm_bold: {
    fontSize: FONT_SIZES.sm,
    fontWeight: FONT_WEIGHTS.bold,
    lineHeight: '150%',
  },

  xs_light: {
    fontSize: FONT_SIZES.xs,
    fontWeight: FONT_WEIGHTS.light,
    lineHeight: '160%',
  },
  xs_regular: {
    fontSize: FONT_SIZES.xs,
    fontWeight: FONT_WEIGHTS.regular,
    lineHeight: '160%',
  },
  xs_medium: {
    fontSize: FONT_SIZES.xs,
    fontWeight: FONT_WEIGHTS.medium,
    lineHeight: '160%',
  },
  xs_bold: {
    fontSize: FONT_SIZES.xs,
    fontWeight: FONT_WEIGHTS.bold,
    lineHeight: '160%',
  },
};
