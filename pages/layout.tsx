import { MUIProvider } from "@/infra/mui/ProviderMui";
import IconAccountCircle from "@mui/icons-material/AccountCircleRounded";
import IconAddShoppingCart from "@mui/icons-material/AddShoppingCartRounded";
import IconAttachMoney from "@mui/icons-material/AttachMoneyRounded";
import IconListAl from "@mui/icons-material/ListAltRounded";

import HomeIcon from '@mui/icons-material/Home';
import IconInbox from "@mui/icons-material/MoveToInbox";
import IconTimeline from "@mui/icons-material/TimelineRounded";
import { Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Image from "next/image";
import Link from "next/link";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const drawerWidth = 240;
  const menu = [
    {
      title: "Home",
      item: [
        {
          icon: <HomeIcon  fontSize="small" sx={{ mr: 2, color: "#364152" }} />,
          title: "Home",
          path:'/',
          disabled:true
        },
       
      ],
    },
    {
      title: "Gestão",
      item: [
        {
          icon: <IconInbox fontSize="small" sx={{ mr: 2, color: "#364152" }} />,
          title: "Vendas",
          path:'/payment',
          disabled:true

        },
        {
          icon: (
            <IconTimeline fontSize="small" sx={{ mr: 2, color: "#364152" }} />
          ),
          title: "Relatórios",
          disabled:false

        },
        {
          icon: (
            <IconAddShoppingCart
              fontSize="small"
              sx={{ mr: 2, color: "#364152" }}
            />
          ),
          title: "Orçamento",
          disabled:false

        },
      ],
    },
    {
      title: "Financeiro",
      item: [
        {
          icon: (
            <IconAttachMoney
              fontSize="small"
              sx={{ mr: 2, color: "#364152" }}
            />
          ),
          title: "Fatura",
          disabled:false

        },
      ],
    },
    {
      title: "Cadastro",
      item: [
        {
          icon: (
            <IconAccountCircle
              fontSize="small"
              sx={{ mr: 2, color: "#364152" }}
            />
          ),
          title: "Clientes",
          disabled:false

        },
        {
          icon: (
            <IconListAl fontSize="small" sx={{ mr: 2, color: "#364152" }} />
          ),
          title: "Serviços",
          disabled:false

        },
      ],
    },
  ];

  return (
    <>
  
        <MUIProvider>
          <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar
              position="fixed"
              sx={{
                zIndex: (theme) => theme.zIndex.drawer + 1,
                background: "#fff",
                boxShadow: 0,
              }}
            >
              <Toolbar>
                <Link href="/">
                  {/* <Image
                    src="/logo.png"
                    width="160"
                    height="40"
                    alt=""
                    title=""
                  /> */}
                </Link>
              </Toolbar>
            </AppBar>
            <Drawer
              variant="permanent"
              sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: {
                  width: drawerWidth,
                  boxSizing: "border-box",
                  border: 0,
                },
              }}
            >
              <Toolbar />
              <Box sx={{ overflow: "auto" }}>
                {menu.map((data) => {
                  return (
                 <List subheader={<Title>{data.title}</Title>} key={data.title}>
                      {data.item.map((text, index) => (
                          <Link href={text.path || '#'}  key={index} style={{textDecoration:'none'}}  > 
                        <ListItem disablePadding disabled={!text.disabled}>
                          <ListItemButton>
                            {text.icon}
                            <ListItemText primary={text.title} />
                          </ListItemButton>
                        </ListItem>
                        </Link>
                      ))}

                    </List>
                  );
                })}
              </Box>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3, mt: "80px" }}>
              {children}
            </Box>
          </Box>
        </MUIProvider>
    </>
  );
}

const Title = ({ children }: any) => {
  return (
    <Typography sx={{ ml: 2, fontWeight: "bold", lineHeight: "4rem" }}>
      {children}
    </Typography>
  );
};
