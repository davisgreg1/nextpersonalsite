import { createClient } from "contentful";

const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_DELIVERY_TOKEN;

const client = createClient({
  space: space!,
  accessToken: accessToken!,
});

export async function fetchEntries() {
  const entries = await client.getEntries();
  if (entries.items) return entries.items;
  console.error(`Error getting Entries.`);
}

export async function fetchEntry(id: string) {
  const entry = await client.getEntry(id);
  if (entry) return entry;
  console.error(`Error getting Entry.`);
}
