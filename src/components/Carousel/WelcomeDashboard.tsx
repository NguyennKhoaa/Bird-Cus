import React from "react";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import undraw_celebrating_rtuv from "../../images/undraw_happy_music_g6wc.svg";

const WelcomeDashboard = (): JSX.Element => {
  return (
    <Card
      style={{
        boxShadow: "none",
        textAlign: "left",
        backgroundColor: "#C8FACD",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <CardContent
        sx={{
          p: { md: 0 },
          pl: { md: 5 },
          color: "grey.800",
        }}
      >
        <Typography gutterBottom variant="h4">
          Bạn có muốn trở thành nhà lưu trú chim
        </Typography>

        <Typography
          variant="body2"
          sx={{ pb: { xs: 3, xl: 5 }, maxWidth: 480, mx: "auto" }}
        >
          Hãy đăng kí trở thành đối tác của chúng tôi ngay để có cơ hội kiếm
          thêm thu nhập hàng tháng
        </Typography>
        <Button variant="contained">Tìm hiểu ngay</Button>
        <Button variant="contained">Đăng kí ngay</Button>

        {/* <Button variant='contained'>Go Now</Button> */}
      </CardContent>

      <Box>
        <img src={undraw_celebrating_rtuv} alt="welcome" width="200" />
      </Box>
    </Card>
  );
};

export default WelcomeDashboard;
