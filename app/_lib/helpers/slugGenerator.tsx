export function generateSlug(title: string) {
  return title.replace(/ /g, "-").replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, "");
}
