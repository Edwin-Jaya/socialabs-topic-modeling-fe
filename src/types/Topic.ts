interface Topic {
  context: string;
  keyword: string;
  projectId: string;
  topicId: number;
  words: string[];
}

interface TweetTopic {
  full_text: string;
  tweet_url: string;
  username: string;
  topicId: number,
  projectId: string,
}

export type { Topic, TweetTopic };
