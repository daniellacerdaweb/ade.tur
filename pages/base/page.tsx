"use client";

import { Grid } from "@mui/material";
import styles from "./page.module.css";

export default function Client() {
  const gridSpacing = 3;
  return (
    <main className={styles.main}>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Grid container spacing={gridSpacing}>
            teste
          </Grid>
        </Grid>
      </Grid>
    </main>
  );
}
