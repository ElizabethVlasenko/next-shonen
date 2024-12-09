export function generateSlug(title: string) {
  if (!title) return "";
  if (title)
    return title.replace(/ /g, "-").replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, "");
}
