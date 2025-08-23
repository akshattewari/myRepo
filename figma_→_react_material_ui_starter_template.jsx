import * as React from "react";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Drawer from "@mui/material/Drawer";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsIcon from "@mui/icons-material/Settings";
import StarIcon from "@mui/icons-material/Star";

// 👉 HOW TO USE WITH A FIGMA SCREEN
// 1) Export color styles & typography from Figma (or use the values below) and plug them into `createTheme`.
// 2) Map major frames to MUI layout primitives: AppBar, Drawer, Container, Grid, Paper.
// 3) Map Figma components to MUI equivalents: Buttons, TextFields, Tabs, Chips, Table, etc.
// 4) Replace placeholder content with real copy and images from your Figma layers.

const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#2D6AE3" }, // ← map Figma Primary 500
    secondary: { main: "#6C5CE7" },
    background: { default: "#F7F8FA", paper: "#FFFFFF" },
    text: { primary: "#0F172A", secondary: "#475569" },
  },
  typography: {
    fontFamily: [
      "Inter",
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Roboto",
      "Helvetica",
      "Arial",
      "sans-serif",
    ].join(","),
    h1: { fontWeight: 700, fontSize: "2.5rem", letterSpacing: -0.5 }, // ← map Figma H1
    h2: { fontWeight: 700, fontSize: "2rem" },
    h3: { fontWeight: 600, fontSize: "1.5rem" },
    body1: { fontSize: "1rem", lineHeight: 1.6 },
    button: { textTransform: "none", fontWeight: 600 },
  },
  shape: { borderRadius: 16 },
  components: {
    MuiPaper: { styleOverrides: { root: { borderRadius: 16 } } },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: { root: { borderRadius: 12, paddingInline: 16 } },
    },
    MuiTextField: { defaultProps: { size: "medium" } },
  },
});

const SidebarHeader = styled("div")(({ theme }) => ({
  ...theme.typography.h6,
  padding: theme.spacing(2),
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1.5),
}));

const drawerWidth = 260;

export default function FigmaToMUIPage() {
  const [open, setOpen] = React.useState(false);
  const [tab, setTab] = React.useState(0);

  const rows = [
    { id: "#INV-1001", customer: "Acme Corp", amount: "$2,430", status: "Paid" },
    { id: "#INV-1002", customer: "Globex", amount: "$980", status: "Overdue" },
    { id: "#INV-1003", customer: "Initech", amount: "$1,560", status: "Pending" },
  ];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "background.default" }}>
        {/* Top AppBar → map to Figma header */}
        <AppBar position="fixed" color="inherit" elevation={0} sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Toolbar>
            <IconButton edge="start" onClick={() => setOpen(true)} sx={{ mr: 1 }}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" sx={{ fontWeight: 700 }}>Project Aurora</Typography>
            <Box sx={{ flexGrow: 1 }} />
            <TextField
              placeholder="Search…"
              variant="outlined"
              sx={{ width: 360, mr: 2 }}
              InputProps={{ startAdornment: (<InputAdornment position="start"><SearchIcon /></InputAdornment>) }}
            />
            <Avatar alt="You" src="" />
          </Toolbar>
        </AppBar>

        {/* Left Drawer → map to Figma sidebar nav */}
        <Drawer
          variant="temporary"
          open={open}
          onClose={() => setOpen(false)}
          ModalProps={{ keepMounted: true }}
          sx={{
            "& .MuiDrawer-paper": { width: drawerWidth, boxSizing: "border-box", p: 1 },
          }}
        >
          <SidebarHeader>
            <Avatar>PA</Avatar>
            Project Aurora
          </SidebarHeader>
          <Divider />
          <List>
            {[
              { icon: <DashboardIcon />, label: "Dashboard" },
              { icon: <StarIcon />, label: "Favorites" },
              { icon: <SettingsIcon />, label: "Settings" },
            ].map((item) => (
              <ListItem disablePadding key={item.label}>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>

        {/* Main content */}
        <Box component="main" sx={{ flexGrow: 1 }}>
          <Toolbar />
          <Container maxWidth="lg" sx={{ py: 4 }}>
            <Grid container spacing={3}>
              {/* Hero / Title section → map to Figma hero frame */}
              <Grid item xs={12}>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <Box>
                    <Typography variant="h2">Overview</Typography>
                    <Typography variant="body1" sx={{ color: "text.secondary", mt: 0.5 }}>
                      Quick snapshot of your workspace performance.
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", gap: 1.5 }}>
                    <Button variant="outlined">Share</Button>
                    <Button variant="contained">New Report</Button>
                  </Box>
                </Box>
              </Grid>

              {/* KPI Cards → map to Figma cards */}
              {[{ label: "Revenue", value: "$84,220" }, { label: "Active Users", value: "12,430" }, { label: "NPS", value: "61" }].map((kpi) => (
                <Grid item key={kpi.label} xs={12} sm={6} md={4}>
                  <Paper elevation={0} sx={{ p: 3 }}>
                    <Typography variant="overline" sx={{ color: "text.secondary" }}>{kpi.label}</Typography>
                    <Typography variant="h3" sx={{ mt: 0.5 }}>{kpi.value}</Typography>
                    <Chip size="small" label="+4.2% WoW" sx={{ mt: 2 }} />
                  </Paper>
                </Grid>
              ))}

              {/* Tabs → map to segmented controls in Figma */}
              <Grid item xs={12}>
                <Paper elevation={0} sx={{ p: 2 }}>
                  <Tabs value={tab} onChange={(_, v) => setTab(v)}>
                    <Tab label="Activity" />
                    <Tab label="Customers" />
                    <Tab label="Invoices" />
                  </Tabs>
                </Paper>
              </Grid>

              {/* Two column content → map to Figma grids */}
              <Grid item xs={12} md={8}>
                <Paper elevation={0} sx={{ p: 3 }}>
                  <Typography variant="h3">Recent Activity</Typography>
                  <List sx={{ mt: 1 }}>
                    {["Signed contract with Globex", "New user invited: jane@initech.com", "Payment received: $980"].map((t, i) => (
                      <ListItem key={i} disableGutters>
                        <ListItemAvatar><Avatar>{i + 1}</Avatar></ListItemAvatar>
                        <ListItemText primary={t} secondary="2h ago" />
                      </ListItem>
                    ))}
                  </List>
                </Paper>
              </Grid>

              <Grid item xs={12} md={4}>
                <Paper elevation={0} sx={{ p: 3 }}>
                  <Typography variant="h3">Quick Create</Typography>
                  <Box component="form" onSubmit={(e) => e.preventDefault()} sx={{ mt: 2, display: "grid", gap: 2 }}>
                    <TextField label="Title" placeholder="e.g., Q3 Summary" fullWidth />
                    <TextField label="Assignee" placeholder="Search user" fullWidth />
                    <TextField label="Due date" type="date" InputLabelProps={{ shrink: true }} fullWidth />
                    <Button variant="contained" type="submit">Create</Button>
                  </Box>
                </Paper>
              </Grid>

              {/* Table → map to Figma tables */}
              <Grid item xs={12}>
                <Paper elevation={0} sx={{ p: 3 }}>
                  <Typography variant="h3" sx={{ mb: 2 }}>Invoices</Typography>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Customer</TableCell>
                        <TableCell align="right">Amount</TableCell>
                        <TableCell>Status</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((r) => (
                        <TableRow key={r.id} hover>
                          <TableCell>{r.id}</TableCell>
                          <TableCell>{r.customer}</TableCell>
                          <TableCell align="right">{r.amount}</TableCell>
                          <TableCell>
                            <Chip
                              size="small"
                              color={r.status === "Paid" ? "success" : r.status === "Pending" ? "warning" : "error"}
                              label={r.status}
                              variant="outlined"
                            />
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
