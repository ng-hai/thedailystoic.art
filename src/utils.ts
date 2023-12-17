import slugify from "slugify"

export function titleToUrlSegment(title: string) {
  const segment = title
    // Remove HTML
    .replace(/<[^>]*>/g, "")
    // Remove double quotes
    .replace(/“|”/g, "")

  return slugify(segment, { lower: true },
  )
}
