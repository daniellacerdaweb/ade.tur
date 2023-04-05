import Layout from './layout'
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import IconAttachMoney from "@mui/icons-material/AttachMoneyRounded";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { ChartHome } from '@/components/Chart/ChartHome';
import React from 'react';

export default function Home() {
  const gridSpacing = 3;

  return (
     <Layout>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Grid container spacing={gridSpacing}>
            <Grid item lg={4} md={6} sm={6} xs={12}>
              <Card
                sx={{
                  width: "100%",
                  overflow: "hidden",
                  background: "#5e35b1",
                  borderRadius: "20px",
                  position: "relative",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    width: "210px",
                    height: "210px",
                    background: "inherit",
                    marginLeft: "10px",
                    borderRadius: "50%",
                    top: "-125px",
                    right: "-10px",
                    filter: "contrast(125%)",
                    opacity: "0.9",
                  },
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    width: "210px",
                    height: "210px",
                    background: "inherit",
                    marginLeft: "10px",
                    borderRadius: "50%",
                    top: "-85px",
                    right: "-95px",
                    filter: "contrast(155%)",
                    opacity: "0.5",
                  },
                }}
              >
                <CardHeader
                  avatar={
                    <Avatar
                      sx={{ bgcolor: "#4527a0", borderRadius: "8px" }}
                      aria-label="recipe"
                    >
                      <IconAttachMoney />
                    </Avatar>
                  }
                ></CardHeader>
                <CardContent sx={{ py: 0 }}>
                  <Typography variant="h4" sx={{ color: "#fff" }}>
                    R$ 45.000,00
                  </Typography>
                  <Typography sx={{ color: "#fff" }}>Vendas Totais</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item lg={4} md={6} sm={6} xs={12}>
              <Card
                sx={{
                  width: "100%",
                  overflow: "hidden",
                  background: "#1e88e5",
                  borderRadius: "20px",
                  position: "relative",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    width: "210px",
                    height: "210px",
                    background: "inherit",
                    marginLeft: "10px",
                    borderRadius: "50%",
                    top: "-125px",
                    right: "-10px",
                    filter: "contrast(125%)",
                    opacity: "0.9",
                  },
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    width: "210px",
                    height: "210px",
                    background: "inherit",
                    marginLeft: "10px",
                    borderRadius: "50%",
                    top: "-85px",
                    right: "-95px",
                    filter: "contrast(155%)",
                    opacity: "0.5",
                  },
                }}
              >
                <CardHeader
                  avatar={
                    <Avatar
                      sx={{ bgcolor: "#156ab4", borderRadius: "8px" }}
                      aria-label="recipe"
                    >
                      <IconAttachMoney />
                    </Avatar>
                  }
                ></CardHeader>
                <CardContent sx={{ py: 0 }}>
                  <Typography variant="h4" sx={{ color: "#fff" }}>
                    R$ 20.500,00
                  </Typography>
                  <Typography sx={{ color: "#fff" }}>
                    Aguardando Pagamentos
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item lg={4} md={12} sm={12} xs={12}>
              <Grid container spacing={gridSpacing}>
                <Grid item sm={6} xs={12} md={6} lg={12}>
                  <Card
                    sx={{
                      width: "100%",
                      height: 80,
                      overflow: "hidden",
                      background: "#1e88e5",
                      borderRadius: "20px",
                      position: "relative",
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        width: "210px",
                        height: "210px",
                        background: "inherit",
                        marginLeft: "10px",
                        borderRadius: "50%",
                        top: "-125px",
                        right: "-10px",
                        filter: "contrast(125%)",
                        opacity: "0.9",
                      },
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        width: "210px",
                        height: "210px",
                        background: "inherit",
                        marginLeft: "10px",
                        borderRadius: "50%",
                        top: "-85px",
                        right: "-95px",
                        filter: "contrast(155%)",
                        opacity: "0.5",
                      },
                    }}
                  >
                    <CardHeader
                      sx={{ color: "#fff" }}
                      title={
                        <Typography sx={{ color: "#fff" }}>
                          R$ 500,00
                        </Typography>
                      }
                      subheader={
                        <Typography sx={{ color: "#fff" }}>
                          Total de Custos
                        </Typography>
                      }
                      avatar={
                        <Avatar
                          sx={{ bgcolor: "#156ab4", borderRadius: "8px" }}
                          aria-label="recipe"
                        >
                          <IconAttachMoney />
                        </Avatar>
                      }
                    ></CardHeader>
                  </Card>
                </Grid>
                <Grid item sm={6} xs={12} md={6} lg={12}>
                  <Card
                    sx={{
                      width: "100%",
                      height: 80,
                      overflow: "hidden",
                      background: "#dda051",
                      borderRadius: "20px",
                      position: "relative",
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        width: "210px",
                        height: "210px",
                        background: "inherit",
                        marginLeft: "10px",
                        borderRadius: "50%",
                        top: "-125px",
                        right: "-10px",
                        filter: "contrast(125%)",
                        opacity: "0.9",
                      },
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        width: "210px",
                        height: "210px",
                        background: "inherit",
                        marginLeft: "10px",
                        borderRadius: "50%",
                        top: "-85px",
                        right: "-95px",
                        filter: "contrast(155%)",
                        opacity: "0.5",
                      },
                    }}
                  >
                    <CardHeader
                      sx={{ color: "#fff" }}
                      title={
                        <Typography sx={{ color: "#fff" }}>
                          R$ 1.500,00
                        </Typography>
                      }
                      subheader={
                        <Typography sx={{ color: "#fff" }}>
                          Pagamentos em atraso
                        </Typography>
                      }
                      avatar={
                        <Avatar
                          sx={{ bgcolor: "#dda051", borderRadius: "8px" }}
                          aria-label="recipe"
                        >
                          <IconAttachMoney />
                        </Avatar>
                      }
                    ></CardHeader>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={gridSpacing}>
            <Grid item xs={12} md={8}>
              <Card
                sx={{
                  boxShadow: 0,
                  width: "100%",
                  height: "600px",
                  borderRadius: "20px",
                  px: 3,
                  pb: 10,
                  pt: 2,
                }}
              >
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Vendas
                </Typography>
                <ChartHome />
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card
                sx={{
                  boxShadow: 0,
                  width: "100%",
                  height: "600px",
                  borderRadius: "20px",
                  px: 3,
                  pb: 10,
                  pt: 2,
                }}
              >
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Cronograma
                </Typography>
                <List>
                  <Divider />
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <ArrowForwardIcon />
                    </ListItemAvatar>
                    <ListItemText
                      primary="Dr. Fernando"
                      secondary={
                        <React.Fragment>
                          <Typography
                            sx={{ display: "inline" }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                          >
                            Ida Saida | GRU | 8:00 | Destino | FCO
                          </Typography>
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                  <Divider />
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <ArrowForwardIcon />
                    </ListItemAvatar>
                    <ListItemText
                      primary="Marcia Alves"
                      secondary={
                        <React.Fragment>
                          <Typography
                            sx={{ display: "inline" }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                          >
                            Ida Saida | GRU | 5:00 | Destino | MIA
                          </Typography>
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                  <Divider />
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <ArrowBackIcon />
                    </ListItemAvatar>
                    <ListItemText
                      primary="Raquel Sousa"
                      secondary={
                        <React.Fragment>
                          <Typography
                            sx={{ display: "inline" }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                          >
                            Volta Saida | MIA | 4:00 | Destino | GRU
                          </Typography>
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                </List>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
     </Layout>
   
  )
}
