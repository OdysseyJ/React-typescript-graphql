import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

export default function PaymentForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        포탈 인증 정보
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            required
            fullWidth
            id="email"
            label="학번(수험번호)를 입력해주세요"
            name="email"
            autoComplete="email"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            required
            fullWidth
            id="email"
            label="비밀번호(생년월일)를 입력해주세요"
            name="email"
            autoComplete="email"
          />
        </Grid>
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="학번 인증에 동의합니다"
        />
      </Grid>
    </React.Fragment>
  );
}
