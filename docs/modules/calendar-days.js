/** Group the calendar's display without changing saved posts or platform records. */
export function groupCalendarDays   (items              , dateFor                     ) {
  const days = new Map             ();
  for (const item of items) {
    const date = dateFor(item);
    const posts = days.get(date) ?? [];
    posts.push(item);
    days.set(date, posts);
  }
  return [...days].sort(([a], [b]) => a.localeCompare(b)).map(([date, posts]) => ({ date, posts }));
}

/** One daily card, retaining the identity of every original platform draft. */
export function combineCalendarPosts 
                                                                                                             
                                                                                                
 (posts              , fallbackKey                     ) {
  if (!posts.length) throw new Error("A calendar day needs at least one post.");
  const primary = posts.find(post => post.type !== "Scheduled social post") ?? posts[0];
  return {
    ...primary,
    key: primary.key ?? fallbackKey(primary),
    versions: posts.flatMap(post => post.versions.map(version => ({
      ...version,
      contentKey: version.contentKey ?? post.key ?? fallbackKey(post),
      title: version.title ?? post.title,
      type: version.type ?? post.type,
      scheduledDate: version.scheduledDate ?? post.scheduledDate,
    }))),
  };
}

export function calendarVersionId(version                                           ) {
  return `${version.contentKey}:${version.platform}`;
}
