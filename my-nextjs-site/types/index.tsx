export type BlogPostType = {
  fields: {
    title: string;
    body: string;
    excerpt: string;
  };
  sys: {
    id: string;
    createdAt: string;
  };
};

export type DBConversationDataType = {
  id: string;
  question: string;
  answer: string;
  createdAt?: string;
};

export type DefaultConversationType = {
  userText: string;
  botText: string;
};
