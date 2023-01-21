import { css, CSSObject, injectGlobal } from "@emotion/css";
import "@fontsource/ibm-plex-sans";
import "@fontsource/ibm-plex-sans/300.css";
import "@fontsource/ibm-plex-sans/500.css";
import "@fontsource/ibm-plex-sans/700.css";

export const globalStyles: CSSObject = {
  "html, body": {
    margin: 0,
    padding: 0,
    backgroundColor: "#efefef",
    color: "#262626",
    fontFamily: "IBM Plex Sans",
  },
  "h1, h2, h3, h4, h5, h6": {
    margin: 0,
  },
  "button, input, optgroup, select, textarea": {
    padding: 0,
    lineHeight: "inherit",
    color: "inherit",
  },
  "a[href]": {
    "&[aria-current='page']": {
      textDecoration: "underline",
      fontWeight: "bold",
    },
    "&:hover": {
      textDecoration: "underline",
    },
  },
};

const layoutStyles: CSSObject = {
  minHeight: "100vh",
};

const pageStyles: CSSObject = {
  backgroundColor: "#262626",
  color: "#efefef",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  overflowY: "auto",
};

export const boxStyles = css({
  width: "100px",
  height: "100px",
  borderRadius: "10px",
  backgroundColor: "red",
  color: "white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontWeight: "regular",
  fontSize: "1.2rem",
  fontFamily: "inherit",
  position: "absolute",
  transformOrigin: "center",
});

export const buttonStyles = css({
  height: "40px",
  paddingInline: "16px",
  borderRadius: "8px",
  backgroundColor: "#efefef",
  color: "#262626",
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  border: "1px solid currentColor",
  fontWeight: "thin",
  fontSize: "1rem",
  fontFamily: "inherit",
  cursor: "pointer",

  "&[data-control]": {
    position: "absolute",
    bottom: "50px",
    left: "50%",
    transform: "translateX(-50%)",
  },

  "&[data-primary]": {
    backgroundColor: "#563fd8",
    color: "white",
    border: "none",
  },
});

export const headingStyles: CSSObject = {
  marginBottom: "12px",
  fontWeight: "bold",
  fontSize: "1.25rem",
};

export const listStyles: CSSObject = {
  paddingInlineStart: "1.25rem",
};

export const linkStyles: CSSObject = {
  "[href]": {
    "&[aria-current='page']": {
      textDecoration: "underline",
      fontWeight: "bold",
    },
    "&:hover": {
      textDecoration: "underline",
    },
  },
};

export const dialogBackdropStyles: CSSObject = {
  position: "fixed",
  zIndex: 10,
  backgroundColor: "rgba(0, 0, 0, 0.6)",
  inset: 0,
};

export const dialogContainerStyles: CSSObject = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  width: "100vw",
  position: "fixed",
  zIndex: "100",
  inset: "0px",
  cursor: "pointer",
};

export const dialogContentStyles: CSSObject = {
  width: "100%",
  maxWidth: "400px",
  borderRadius: "12px",
  background: "#efefef",
  padding: "20px",
  position: "relative",
  pointerEvents: "auto",
  zIndex: 100,
};

export const dialogHeaderStyles: CSSObject = {
  ...headingStyles,
};

export const dialogBodyStyles: CSSObject = {
  marginBottom: "12px",
};

export const dialogFooterStyles: CSSObject = {
  display: "flex",
  justifyContent: "flex-start",
  flexGap: "3",
  width: "100%",
};

export const dialogCloseButtonStyles: CSSObject = {
  position: "absolute",
  insetBlockStart: "20px",
  insetInlineEnd: "20px",
  width: "32px",
  height: "32px",
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  borderRadius: "4px",
  "&:hover": {
    transition: "all 0.2s ease-in-out",
    backgroundColor: "#dfdfdf",
  },
};

export const inputStyles: CSSObject = {
  fontSize: "14px",
  borderWidth: "1px",
  paddingInline: "12px",
  paddingBlock: "4px",
  height: "40px",
  borderRadius: "8px",
};

export const styles = {
  layout: css(layoutStyles),
  home: css(pageStyles),
  components: {
    dialog: {
      backdrop: css(dialogBackdropStyles),
      container: css(dialogContainerStyles),
      content: css(dialogContentStyles),
      header: css(dialogHeaderStyles),
      body: css(dialogBodyStyles),
      footer: css(dialogFooterStyles),
      closeButton: css(dialogCloseButtonStyles),
    },
    input: css(inputStyles),
    heading: css(headingStyles),
    list: css(listStyles),
    anchor: css(linkStyles),
  },
};

injectGlobal(resetStyles);
injectGlobal(globalStyles);
