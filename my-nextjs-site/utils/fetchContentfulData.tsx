const contentful = require("contentful");

const fetchContentfulData = async (
  CONTENTFUL_SPACE_ID: string,
  CONTENTFUL_DELIVERY_TOKEN: string
) => {
  const client = contentful.createClient({
    space: CONTENTFUL_SPACE_ID,
    accessToken: CONTENTFUL_DELIVERY_TOKEN,
  });
  try {
    await client.getEntries().then(function (entries: { items: any[] }) {
      return entries.items.map((item) => {
        return {
          fields: item.fields,
          createdAt: item.sys.createdAt,
          updatedAt: item.sys.updatedAt ?? "",
          id: item.sys.id,
        };
      }) as any;
    });
  } catch (error) {
    console.error(
      "GREG LOOK!  ~ file: index.tsx ~ line 87 ~ useEffect ~ error",
      error
    );
  }
};

export default fetchContentfulData;
