import { PaletteColorOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  export interface PaletteOptions {
    custom1?: PaletteColorOptions;
    custom2?: PaletteColorOptions;
  }
}
