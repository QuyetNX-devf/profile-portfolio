export const seoHead = (props: Record<string, string>) => {
  const contentMeta = {
    title: "Quety",
    description:
      "With 5 years of experience in web and mobile programming, I consistently strive to deliver effective and high-quality solutions.",
    url: "",

    ...props,
  };

  const head = {
    title: contentMeta.title,
    metadataBase: new URL(
      process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
    ),
    description: contentMeta.description,
    openGraph: {
      title: contentMeta.title,
      description: contentMeta.description,
      url: "/contact",
      siteName: "Quety Dev",
      images: [
        {
          url: "/assets/image.png",
          width: 1200,
          height: 630,
        },
      ],
      locale: "en",
      type: "website",
    },
  };

  return head;
};
