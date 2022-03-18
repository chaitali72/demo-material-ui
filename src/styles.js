import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  button: { margin: "40px" },
  icon: { marginRight: "20px" },
  card: { height: "100%", display: "flex", flexDirection: "column" },
  cardMedia: { paddingTop: "56.25%" },
  cardContent: { flexGrow: 1 },
  cardgrid: { padding: "20px 0" },
  footer: {
    backgroundColor: theme.palette.background.paper,
    paddingBottom: "40px",
  },
}));
export default useStyles;
