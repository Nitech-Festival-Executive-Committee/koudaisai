import Animation from "@/components/Animation/Animation";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import { Divider } from "@mui/material";

export default function WhatsNewCard({
  title = "",
  text = "",
  img,
  link,
  linkText,
  underText,
  flexButton,
  style,
}: {
  title?: string;
  text?: string | React.ReactNode;
  img?: string;
  link?: string;
  linkText?: string;
  underText?: string | React.ReactNode;
  flexButton?: boolean;
  style?: React.CSSProperties;
}) {
  return (
    <Animation>
      <Card
        sx={{
          margin: "0 5px 18px",
          background:
            "linear-gradient(150deg, #ffefe2 0%, #ffffff 80%, #ffefe1)",
          boxShadow: "6px 6px 8px 0px #dcdcdc",
          border: "thin solid #ffddaf",
          gap: "5px",
          ...style,
        }}
      >
        <div
          style={flexButton ? { display: "flex", flexDirection: "row" } : {}}
        >
          <div>
            <div>
              <Typography level="title-lg" sx={{ paddingBottom: "3px" }}>
                {title}
              </Typography>
              <Typography level="body-sm">{text}</Typography>
            </div>
            {img && (
              <img
                src={img}
                srcSet={img}
                loading="lazy"
                alt=""
                style={{ padding: "3px 0 5px", width: "100%" }}
              />
            )}
          </div>
          {linkText && (
            <CardContent orientation="horizontal">
              <Button
                variant="outlined"
                size="md"
                color="primary"
                sx={{
                  ml: "auto",
                  alignSelf: "center",
                  fontWeight: 600,
                  color: "var(--theme-color)",
                  borderColor: "var(--theme-color)",
                  "&:hover": {
                    backgroundColor: "#ffeded",
                  },
                  transition: ".2s",
                }}
                component="a"
                href={link}
                target="_blank"
              >
                {linkText}
              </Button>
            </CardContent>
          )}
        </div>
        {/* divider */}
        {underText && (
          <>
            <Divider />
            <Typography
              level="body-sm"
              sx={{ textAlign: "right", paddingRight: "5px" }}
            >
              {underText}
            </Typography>
          </>
        )}
      </Card>
    </Animation>
  );
}
