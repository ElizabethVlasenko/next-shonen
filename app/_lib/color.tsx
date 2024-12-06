import Color from "color";

export default function getTextColorForBG(bgColor: string) {
  const whiteText = Color("#FFFFFF");
  const darkPrimaryText = Color("rgb(47, 36, 83)");

  if (
    whiteText.contrast(Color(bgColor)) >
    darkPrimaryText.contrast(Color(bgColor))
  )
    return "text-white";
  else return "text-primary-800";
}
